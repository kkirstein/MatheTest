(defproject math_test "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [reagent "0.4.0"]
                 [org.clojure/clojurescript "0.0-2138"]]
  :plugins [[lein-cljsbuild "1.0.1"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds {:client {:source-paths ["src/cljs"]
                             :compiler {:preamble "reagent/react.js"
                                        :output-to     "target/app.js"
                                        :output-dir    "target/app"
                                        :optimizations :none
                                        :pretty-print  true}}}})

