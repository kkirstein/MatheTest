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
  { tasks : List (ID, T.Model)
  , control : CP.Model
  , seed : Random.Seed
}


init : Model
init =
  { tasks = []
  , control = CP.init
  , seed = Random.initialSeed 23 }

type alias ID = Int


---- UPDATE ----

type Action
  = NoOp
  | Control CP.Action
  | UpdateTask ID T.Action


update : Action -> Model -> Model
update action model =
  case action of
    NoOp -> model
    Control action ->
      case action of
        CP.Start -> let newModel = addTasks { model | tasks <- [] } model.control.numTasks
                    in Debug.log "Start" { newModel | control <- CP.update action model.control }
        _ -> Debug.log "Other" { model | control <- CP.update action model.control }


addTasks : Model -> Int -> Model
addTasks model n =
  if n == 0 then model
            else let (newTask, seed1) = T.init T.Plus T.Result 100 model.seed
                     newModel = { model | tasks <- model.tasks ++ [ (n, newTask) ], seed <- seed1 }
                 in addTasks newModel (n - 1)



---- VIEW ----

view : Model -> Html
view model =
  let tasks = List.map viewTask model.tasks in
  div []
  [ h1 [] [ text "MatheTest" ]
  , div [] 
    ([ h2 [] [ text "Aufgaben" ] ] ++ tasks)
  , CP.view (LC.create Control actionChannel) model.control
  ]

viewTask : (ID, T.Model) -> Html
viewTask (tID, model) =
  T.view (LC.create (UpdateTask tID) actionChannel) model


---- SIGNALS ----

actionChannel : Signal.Channel Action
actionChannel = Signal.channel NoOp

model : Signal Model
model = Signal.foldp update init (Signal.subscribe actionChannel)
 

main : Signal Html
main = Signal.map view model

