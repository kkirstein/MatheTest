-- Task.elm
-- A single task for MatheTest app
--
-- vim: ft=elm sw=2 ts=2
-- 
-- Author: Kay-Uwe Kirstein
--

module Task (Operator(..), Position(..), Model, Action, init, update, view) where

import Random
import String

import Html (..)
import Html.Attributes as Att
import Html.Events (..)

import LocalChannel as LC

---- MODEL ----

type Operator = Plus | Minus | Mult | Div

type Position = First | Second | Result

type Guess = Empty | Value Int

type alias Model =
  { operator : Operator
  , position : Position
  , operand_1 : Int
  , operand_2 : Int
  , result : Int
  , guess : Guess
  , correct : Bool
  , show : Bool
}

init : Operator -> Position -> Int -> Random.Seed -> (Model, Random.Seed)
init op pos limit seed0 =
  let (a, b, c, seed1) = randNumbers op limit seed0 in
  (
    { operator = op
    , position = pos
    , operand_1 = a
    , operand_2 = b
    , result = c
    , guess = Empty
    , correct = False
    , show = False }, seed1)

randNumbers : Operator -> Int -> Random.Seed -> (Int, Int, Int, Random.Seed)
randNumbers op limit seed0 =
  (2, 3, 5, seed0)


---- UPDATE ----

type Action
  = NoOp
  | UpdateGuess String
  | ShowResult

update : Action -> Model -> Model
update action model =
  case action of
    NoOp -> model
    UpdateGuess numStr -> updateGuess numStr model
    ShowResult -> { model | show <- True }

updateGuess : String -> Model -> Model
updateGuess numStr model =
  case String.toInt numStr of
    Ok num -> { model | guess <- Value num }
    _ -> { model | guess <- Empty }


---- VIEW ----

view : LC.LocalChannel Action -> Model -> Html
view channel model =
  li []
  [ table []
    [ tr []
      [ td [] [ text (toString model.operand_1) ]
      , td [] [ toHtml model.operator ]
      , td [] [ text (toString model.operand_2) ]
      , td [] [ text "=" ]
      , td [] [ text (toString model.result) ]
      , td [] [ showError model ]
      ]
    ]
  ]

toHtml : Operator -> Html
toHtml op =
  case op of
    Plus -> text "+"
    Minus -> text "-"
    Mult -> text "*"
    Div -> text "/"

viewNumberOrGuess : LC.LocalChannel Action -> Position -> Model -> Html
viewNumberOrGuess channel pos model =
  if pos == model.position then
     input [ Att.type' "number"
           , on "input" targetValue (\val -> LC.send channel (UpdateGuess val))
           ]
           []
  else
     text (toString (case model.position of
                       First -> model.operand_1
                       Second -> model.operand_2
                       Result -> model.result)
     )


showError : Model -> Html
showError model =
  if model.show then
     if model.correct then span [ Att.style [("color", "#00FF00")] ] [ text "Richtig" ]
                      else span [ Att.style [("color", "#FF0000")] ] [ text "Fehler !" ] 
  else span [] []




