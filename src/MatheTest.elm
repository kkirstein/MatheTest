-- MatheTest.elm
-- A simple web-based math test app for primary school children
--
-- vim: ft=elm sw=2 ts=2
-- 
-- Author: Kay-Uwe Kirstein
--

module MatheTest where

import Graphics.Element (Element, container, midTop)
import Html (..)
import Html.Attributes (..)
import Html.Events (..)

import List
import Signal
import String
import Random
import Debug

import LocalChannel as LC

import ControlPanel as CP
import Task as T


---- MODEL ----

type alias Model =
  { tasks : List T.Model
  , control : CP.Model
  , seed : Random.Seed
}


init : Model
init =
  { tasks = []
  , control = CP.init
  , seed = Random.initialSeed 23 }


---- UPDATE ----

type Action
  = NoOp
  | Control CP.Action


update : Action -> Model -> Model
update action model =
  case action of
    NoOp -> model
    Control action -> Debug.log "Model" { model | control <- CP.update action model.control }


---- VIEW ----

view : Model -> Html
view model =
  div []
  [ h1 [] [ text "MatheTest" ]
  , div [] 
    [ h2 [] [ text "Aufgaben" ]
    ]
  , CP.view (LC.create Control actionChannel) model.control
  ]


---- SIGNALS ----

actionChannel : Signal.Channel Action
actionChannel = Signal.channel NoOp

model : Signal Model
model = Signal.foldp update init (Signal.subscribe actionChannel)
 

main : Signal Html
main = Signal.map view model

