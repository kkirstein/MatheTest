-- Task.elm
-- A single task for MatheTest app
--
-- vim: ft=elm sw=2 ts=2
-- 
-- Author: Kay-Uwe Kirstein
--

module Task (Operator(..), Position(..), Model, Action, update, view) where

import Html (..)
import Html.Attributes as Att

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

init : List Operator -> List Position -> Int -> Model
init operators positions limit =
  { operator = Plus
  , position = Result
  , operand_1 = 2
  , operand_2 = 3
  , result = 5
  , guess = Empty
  , correct = False
  , show = False
  }


---- UPDATE ----

type Action
  = NoOp
  | ShowResult

update : Action -> Model -> Model
update action model =
  case action of
    NoOp -> model
    ShowResult -> { model | show <- True }


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

showError : Model -> Html
showError model =
  if model.show then
     if model.correct then span [ Att.style [("color", "#00FF00")] ] [ text "Richtig" ]
                      else span [ Att.style [("color", "#FF0000")] ] [ text "Fehler !" ] 
  else span [] []




