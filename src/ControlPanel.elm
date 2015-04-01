-- ControlPanel.elm
-- Control panel for MatheTest app
--
-- vim: ft=elm sw=2 ts=2
-- 
-- Author: Kay-Uwe Kirstein
--

module ControlPanel (Model, init, Action(..), update, view) where

import Html (..)
import Html.Attributes as Att
import Html.Events (..)

import Signal
import String
import LocalChannel as LC

import Task as T

import Debug

---- MODEL ----

type alias Model =
  { numTasks : Int
  , status : Status
  , operators : List T.Operator
  , positions : List T.Position
}

type Status = Running | Stopped

init : Model
init =
  { numTasks = 10
  , status = Stopped
  , operators = [ T.Plus, T.Minus, T.Mult, T.Div ]
  , positions = [ T.First, T.Second, T.Result ]
  }



---- UPDATE ----

type Action
  = SetNumTasks String
  | Start
  | Stop

update : Action -> Model -> Model
update action model =
  case action of
    SetNumTasks numStr -> updateNumTasks numStr model
    Start -> { model | status <- Running }
    Stop -> { model | status <- Stopped }

updateNumTasks : String -> Model -> Model
updateNumTasks numStr model = 
  case String.toInt numStr of
    Ok num -> let numLimited = clamp 1 25 num
              in
                 { model | numTasks <- numLimited }
    _ -> model


---- VIEW ----

view : LC.LocalChannel Action -> Model -> Html
view channel model =
  div []
  [ h2 [] [ text "Steuerung" ]
  , ul []
    [ li [] [ input
        [ Att.value (toString model.numTasks)
        , Att.type' "number"
        , on "input" targetValue (\val -> LC.send channel (SetNumTasks val))
        ]
        []
      ]
    , li [] [ startStopButton channel model ]
    ]
  ]

startStopButton : LC.LocalChannel Action -> Model -> Html
startStopButton channel model =
  case model.status of
    Stopped -> button [ onClick (LC.send channel Start) ] [ text "Starte Test !" ]
    Running -> button [ onClick (LC.send channel Stop) ] [ text "Fertig !" ]


