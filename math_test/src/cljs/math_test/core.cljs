(ns math-test.core
    (:require [reagent.core :as reagent :refer [atom]]))

;; -------------------------
;; Model

(defn initial-state []
  {:config {:upper-limit 100,
            :operands #{:add :sub :mul :div},
            :positions #{2 3}}
   :tasks []})


(defn new-task
  "Generate a new task with given configuration."
  [config]
  (let [upper-limit (:upper-limit config)
        operands (:operands config)
        positions (:positions config)]
    (merge (cond
             (operands :add) {:operand-1 1, :operand-2 2, :result 3}
             (operands :sub) {:operand-1 1, :operand-2 2, :result 3}
             (operands :mul) {:operand-1 1, :operand-2 2, :result 3}
             (operands :div) {:operand-1 1, :operand-2 2, :result 3})
           {:trial "", :correct true})))


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

