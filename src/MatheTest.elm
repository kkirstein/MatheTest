-- MatheTest.elm
-- A simple web-based math test app for primary school children
--
-- vim: ft=elm sw=4 ts=4
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
import Window


---- Model ----

type alias State =
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

initialState: State
initialState = { tasks = [], config = defaultConfig }

defaultConfig : Config
defaultConfig =
    { task = defaultTaskConfig
    , numTasks = 10 }

defaultTaskConfig : TaskConfig
defaultTaskConfig =
    { operators = [ "+", "-", "*", "/" ]
    , positions = [ 1, 2, 3 ]
    , upperLimit = 100 }


---- Update ----

type UserAction
    = NoOp

nextState : UserAction -> State -> State
nextState action state =
    case action of
        NoOp -> state


---- View ----

view : State -> Html
view state =
    div []
        [ h1 [] [ text "MatheTest" ]
        ]


---- Inputs ----

action : Signal.Channel UserAction
action = Signal.channel NoOp

state : Signal State
state = Signal.foldp nextState initialState (Signal.subscribe action)

scene : State -> (Int, Int) -> Element
scene state (w, h) =
    let w' = (toFloat w) * 0.8 |> round
    in
       container w h midTop (toElement w' h <| view state)

main : Signal Element
main = Signal.map2 scene state Window.dimensions

