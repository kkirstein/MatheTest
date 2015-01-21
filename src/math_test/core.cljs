(ns math-test.core
  (:require [reagent.core :as reagent :refer [atom]])
  (:import [Math]))

(enable-console-print!)


;; -------------------------
;; Model

(defn initial-state []
  {:state :idle,
   :config {:num-tasks 10,
            :upper-limit 100,
            :operands [:add :sub :mul :div],
            :positions [2 3]},
   :tasks []})

(def app-state (atom (initial-state)))

(defn rand-number
  "Generate random integer or given upper and lower limits."
  [lower upper]
  (js/Math.round (+ lower (* (- upper lower) (js/Math.random)))))

(defn select-member
  "Select a random member from given set."
  [coll]
  (let [idx (rand-number 0 (dec (count coll)))]
    (nth coll idx)))

(defn new-task
  "Generate a new task with given configuration."
  [config]
  (let [op (select-member (:operands config))
        pos (select-member (:positions config))
        limit (:upper-limit config)]
    (merge (cond
             (= op :add) (let [result (rand-number 0 limit)
                               op-1 (- result (rand-number 0 result))
                               op-2 (- result op-1)]
                           {:op :add, :operand-1 op-1, :operand-2 op-2, :result result})
             (= op :sub) (let [op-1 (rand-number 0 limit)
                               op-2 (- op-1 (rand-number 0 op-1))
                               result (- op-1 op-2)]
                           {:op :sub, :operand-1 op-1, :operand-2 op-2, :result result})
             (= op :mul) (let [op-limit (int (js/Math.sqrt limit))
                               op-1 (rand-number 1 op-limit)
                               op-2 (rand-number 1 op-limit)
                               result (* op-1 op-2)]
                           {:op :mul, :operand-1 op-1, :operand-2 op-2, :result result})
             (= op :div) (let [op-limit (int (js/Math.sqrt limit))
                               op-2 (rand-number 1 op-limit)
                               result (rand-number 1 op-limit)
                               op-1 (* op-2 result)]
                           {:op :div, :operand-1 op-1, :operand-2 op-2, :result result}))
           {:pos pos, :trial "", :correct true})))

(defn set-new-tasks []
  (let [config (:config @app-state)
        num-tasks (:num-tasks config)
        new-tasks (repeatedly num-tasks #(new-task config))]
    (swap! app-state assoc :tasks new-tasks)))

(defn set-num-tasks [n]
  (let [current-config (:config @app-state)
        new-config (assoc current-config :num-tasks n)]
    (swap! app-state assoc :config new-config)))

(defn start-test []
  (swap! app-state assoc :state :running)
  (set-new-tasks)
  (print-app-state))

(defn stop-test []
  (swap! app-state assoc :state :finished)
  (print-app-state))


; debug utils:
(defn print-app-state []
  (println @app-state))

(defn demo-tasks [n]
  (let [config {:num-tasks 10,
                :upper-limit 100,
                :operands #{:add :sub :mul :div},
                :positions #{2 3}}]
    (repeat 5 (new-task config))))


;; -------------------------
;; Views

;(defn input-field
;  [params]
;  (let [type (or (:type params) "text")
;        label (or (:label params) "")
;        cb (or (:cb params) println)
;        default (or (:default params) "")]
;    [:div
;     [:label label]
;     [:input {:type type, :value default, :on-change #(cb (-> .-target .-value))} label]]))

(defn start-stop-button []
  (let [running? (= :running (:state @app-state))]
    (if running?
      [:button {:on-click stop-test} "Fertig!"]
      [:button {:on-click start-test} "Starte Test!"])))

(defn task-pane []
  (let [tasks (:tasks @app-state)]
  [:div [:h1 "Aufgaben"]
   (str (count tasks) " Aufgaben:")
   [:ul
    [:li "Aufgabe 1"]
    [:li "Aufgabe 2"]]]))

(defn control-pane []
  [:div
   [:ul
    [:li
     [:label "Anzahl Aufgaben"]
     [:input {:type "number" :on-change #(set-num-tasks (js/parseInt (-> % .-target .-value)))}]]
    [:li
     [start-stop-button]]
    [:li
     [:button {:on-click print-app-state} "Show Current State"]]
    [:li
     [:button {:on-click #(set-num-tasks 3)} "Test"]]]])

(defn main-page []
  [:div [:h1 "Mathe-Test"]
   [task-pane]
   [control-pane]])


;; -------------------------
;; Initialize app
(defn main []
  (reagent/render-component [main-page] (.getElementById js/document "app")))
