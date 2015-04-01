-- ControlPanel.elm
-- Control panel for MatheTest app
--
-- vim: ft=elm sw=2 ts=2
-- 
-- Author: Kay-Uwe Kirstein
--

module ControlPanel (Model, init, Action, update, view) where

import Html (..)
import Html.Attributes (..)
import Html.Events (..)

import Signal
import String
import LocalChannel as LC

import Debug

---- MODEL ----

type alias Model =
  { numTasks : Int
  , status : Status
}

type Status = Running | Stopped

init : Model
init =
  { numTasks = 10
  , status = Stopped
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
    Start -> Debug.log "Model" { model | status <- Running }
    Stop -> Debug.log "Model" { model | status <- Stopped }

updateNumTasks : String -> Model -> Model
updateNumTasks numStr model = 
  case String.toInt numStr of
    Ok num -> { model | numTasks <- num }
    _ -> model


---- VIEW ----

view : LC.LocalChannel Action -> Model -> Html
view channel model =
  div []
  [ h2 [] [ text "Steuerung" ]
  , ul []
    [ li [] [ input
        [ value (toString model.numTasks)
        , type' "number"
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


