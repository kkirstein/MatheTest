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

import LocalChannel as LC

import ControlPanel as CP


---- MODEL ----

type alias Model =
  { tasks: List MathTask
  , config: Config
  , control: CP.Model
}

type alias MathTask =
  { operand_1: Int
  , operand_2: Int
  , result: Int
  , operator: String
  , guess: String
  , guessPosition: Int
  , correct: Bool
}

type alias TaskConfig =
  { operators: List String
  , positions: List Int
  , upperLimit: Int
}

type alias Config =
  { task: TaskConfig
  , numTasks: Int
}

init : Model
init = { tasks = [], config = defaultConfig , control = CP.init }

defaultConfig : Config
defaultConfig =
  { task = defaultTaskConfig
  , numTasks = 10 }

defaultTaskConfig : TaskConfig
defaultTaskConfig =
  { operators = [ "+", "-", "*", "/" ]
  , positions = [ 1, 2, 3 ]
                , upperLimit = 100 }


---- UPDATE ----

type Action
  = NoOp
    | Control CP.Action


update : Action -> Model -> Model
update action model =
  case action of
    NoOp -> model
    Control action -> { model | control <- CP.update action model.control }


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

