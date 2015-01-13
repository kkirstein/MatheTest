(ns math-test.core
    (:require [reagent.core :as reagent :refer [atom]])
    (:import [Math]))

;; -------------------------
;; Model


(defn rand-number
  "Generate random integer or given upper and lower limits."
  [lower upper]
  (+ lower (int (* upper (js/Math.random)))))


(defn new-task
  "Generate a new task with given configuration."
  [config]
  (let [upper-limit (:upper-limit config)
        operands (:operands config)
        positions (:positions config)]
    (merge (cond
             (operands :add) (let [result (rand-number 0 upper-limit)
                                   op-1 (- result (rand-number 0 result))
                                   op-2 (- result op-1)]
                               {:operand-1 op-1, :operand-2 op-2, :result result})
             (operands :sub) (let [op-1 (rand-number 0 upper-limit)
                                   op-2 (- op-1 (rand-number 0 op-1))
                                   result (- op-1 op-2)]
                               {:operand-1 op-1, :operand-2 op-2, :result result})
             (operands :mul) (let [op-limit (int (js/Math.sqrt upper-limit))
                                   op-1 (rand-number 1 op-limit)
                                   op-2 (rand-number 1 op-limit)
                                   result (* op-1 op-2)]
                               {:operand-1 op-1, :operand-2 op-2, :result result})
             (operands :div) (let [op-limit (int (js/Math.sqrt upper-limit))
                                   op-2 (rand-number 1 op-limit)
                                   result (rand-number 1 op-limit)
                                   op-1 (* op-2 result)]
                               {:operand-1 op-1, :operand-2 op-2, :result result}))
           {:trial "", :correct true})))


(defn initial-state []
  {:config {:upper-limit 100,
            :operands #{:add :sub :mul :div},
            :positions #{2 3}}
   :tasks []})

(defn demo-tasks [n]
  (let [config {:upper-limit 100,
                :operands #{:add :sub :mul :div},
                :positions #{2 3}}]
    (repeat 5 (new-task config))))



(def app-state (atom (initial-state)))

;; -------------------------
;; Views

(defn task-pane []
  [:div [:h1 "Aufgaben"]
   [:ul
    [:li "Aufgabe 1"]
    [:li "Aufgabe 2"]]])

(defn control-pane []
  [:div
   [:ul
    [:li "Anzahl Aufgaben"]
    [:li "Start / Stop"]]])

(defn main-page []
  [:div [:h1 "Mathe-Test"]
   task-pane
   control-pane])


;; -------------------------
;; Routes

; none


;; -------------------------
;; Initialize app
(defn init! []
  (reagent/render-component [main-page] (.getElementById js/document "app")))

