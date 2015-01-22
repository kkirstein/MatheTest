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
            :positions [1 2 3]},
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
  [config id]
  (let [op (select-member (:operands config))
        pos (select-member (:positions config))
        limit (:upper-limit config)]
    (merge (cond
             (= op :add) (let [result (rand-number 0 limit)
                               op-1 (- result (rand-number 0 result))
                               op-2 (- result op-1)]
                           {:operator :add, :operand-1 op-1, :operand-2 op-2, :result result})
             (= op :sub) (let [op-1 (rand-number 0 limit)
                               op-2 (- op-1 (rand-number 0 op-1))
                               result (- op-1 op-2)]
                           {:operator :sub, :operand-1 op-1, :operand-2 op-2, :result result})
             (= op :mul) (let [op-limit (int (js/Math.sqrt limit))
                               op-1 (rand-number 1 op-limit)
                               op-2 (rand-number 1 op-limit)
                               result (* op-1 op-2)]
                           {:operator :mul, :operand-1 op-1, :operand-2 op-2, :result result})
             (= op :div) (let [op-limit (int (js/Math.sqrt limit))
                               op-2 (rand-number 1 op-limit)
                               result (rand-number 1 op-limit)
                               op-1 (* op-2 result)]
                           {:operator :div, :operand-1 op-1, :operand-2 op-2, :result result}))
           {:id id, :pos pos, :guess "", :correct true})))

(defn set-new-tasks []
  (let [config (:config @app-state)
        num-tasks (:num-tasks config)
        new-tasks (for [id (range num-tasks)] (new-task config id))]
    (swap! app-state assoc :tasks new-tasks)))

(defn get-guess [id]
  (letfn [(id? [item] (= id (:id item)))]
    (:guess (first (filter id? (:tasks @app-state))))))

(defn update-task [tasks id key val]
  (map #(if (= id (:id %)) (assoc % key val) %) tasks))

(defn set-guess [id value]
    (swap! app-state #(update-in % [:tasks] update-task id :guess value)))

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

; some basic elements
(defn start-stop-button []
  (let [running? (= :running (:state @app-state))]
    (if running?
      [:button {:on-click stop-test} "Fertig!"]
      [:button {:on-click start-test} "Starte Test!"])))

(defn task-input [task]
  (let [id (:id task)
        value (atom (get-guess id))]
    (fn []
      [:input {:type "text"
               :value @value
               :on-change #(set-guess id (reset! value (js/parseInt (-> % .-target .-value))))
               :style {:width "3em"}}])))

(defn single-task [task]
  (let [pos (:pos task)
        op (condp = (:operator task)
             :add "+"
             :sub "-"
             :mul "*"
             :div "/")
        op-1 (:operand-1 task)
        op-2 (:operand-2 task)
        res (:result task)
        finished? (= :finished (:state @app-state))]
    [:tr
     [:td (if (= pos 1) [task-input task] (str op-1))]
     [:td op]
     [:td (if (= pos 2) [task-input task] (str op-2))]
     [:td "="]
     [:td (if (= pos 3) [task-input task] (str res))]
     (when (= :finished (:state @app-state)) [result-task task])]))

(defn result-task [task]
  (let [pos (:pos task)
        guess (:guess task)
        ok-msg [:td {:style {:color "green"}} "Richtig."]
        err-msg [:td {:style {:color "red" :font-weight "bold"}} "Fehler!"]]
    (condp = pos
          1 (if (= guess (:operand-1 task)) ok-msg err-msg)
          2 (if (= guess (:operand-2 task)) ok-msg err-msg)
          3 (if (= guess (:result task)) ok-msg err-msg))))

(defn all-tasks []
  (let [tasks (:tasks @app-state)]
    [:table
     (for [t tasks] [single-task t])]))

; the main panes:
(defn task-pane []
  (let [tasks (:tasks @app-state)]
    [:div [:h1 "Aufgaben"]
     (str (count tasks) " Aufgaben:")
     [all-tasks]]))

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
