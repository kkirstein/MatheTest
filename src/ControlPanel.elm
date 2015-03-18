-- ControlPanel.elm
-- Control panel for MatheTest app
--
-- vim: ft=elm sw=2 ts=2
-- 
-- Author: Kay-Uwe Kirstein
--

module ControlPanel where

import Html (..)
import Html.Attributes (..)
import Html.Events (..)

import Signal
import LocalChannel


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

type Action =
  SetNumTasks Int
  | Start
  | Stop


---- VIEW ----

view : LC.LocalChannel Action -> Model -> Html
view channel model =
  div []
  [ h2 [] [ text "Steuerung" ]
  , input
    [ value (toString model.numTasks)
    , on "input" targetValue (LC.send channel SetNumTask (toInt targetValue))
    ]
    []
  , startStopButton channel model
  ]

startStopButton : LC.LocalChannel Action -> Model -> Html
startStopButton channel model =
  case model.status of
    Stopped -> button [ onClick (LC.send channel Start) ] [ text "Starte Test !" ]
    Running -> button [ onClick (LC.send channel Stop) ] [ text "Fertig !" ] 


