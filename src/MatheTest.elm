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

import ControlPanel (..)


---- MODEL ----

type alias Model =
  { tasks: List MathTask
  , config: Config
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
init = { tasks = [], config = defaultConfig }

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
  = Control ControlPanel.Action


update : Action -> Model -> Model
update action state =
  case action of
    NoOp -> state


---- VIEW ----

view : Model -> Html
view model =
  div []
  [ h1 [] [ text "MatheTest" ]
  , div [] 
    [ h2 [] [ text "Aufgaben" ]
    ]
  , div []
    [ h2 [] [text "Steuerung" ]
    ]
  ]


---- SIGNALS ----

action : Signal.Channel Action
action = Signal.channel NoOp

model : Signal Model
model = Signal.foldp update init (Signal.subscribe action)
 

main : Signal Html
main = Signal.map view model

