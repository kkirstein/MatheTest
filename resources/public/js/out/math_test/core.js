// Compiled by ClojureScript 0.0-2371
goog.provide('math_test.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
/**
* Generate random integer or given upper and lower limits.
*/
math_test.core.rand_number = (function rand_number(lower,upper){return (lower + ((upper * Math.random()) | (0)));
});
/**
* Generate a new task with given configuration.
*/
math_test.core.new_task = (function new_task(config){var upper_limit = new cljs.core.Keyword(null,"upper-limit","upper-limit",127576845).cljs$core$IFn$_invoke$arity$1(config);var operands = new cljs.core.Keyword(null,"operands","operands",-388348562).cljs$core$IFn$_invoke$arity$1(config);var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(config);return cljs.core.merge.call(null,(cljs.core.truth_(operands.call(null,new cljs.core.Keyword(null,"add","add",235287739)))?(function (){var result = math_test.core.rand_number.call(null,(0),upper_limit);var op_1 = (result - math_test.core.rand_number.call(null,(0),result));var op_2 = (result - op_1);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operand-1","operand-1",-1685458956),op_1,new cljs.core.Keyword(null,"operand-2","operand-2",-1712232130),op_2,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
})():(cljs.core.truth_(operands.call(null,new cljs.core.Keyword(null,"sub","sub",-2093760025)))?(function (){var op_1 = math_test.core.rand_number.call(null,(0),upper_limit);var op_2 = (op_1 - math_test.core.rand_number.call(null,(0),op_1));var result = (op_1 - op_2);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operand-1","operand-1",-1685458956),op_1,new cljs.core.Keyword(null,"operand-2","operand-2",-1712232130),op_2,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
})():(cljs.core.truth_(operands.call(null,new cljs.core.Keyword(null,"mul","mul",-354626062)))?(function (){var op_limit = (Math.sqrt(upper_limit) | (0));var op_1 = math_test.core.rand_number.call(null,(1),op_limit);var op_2 = math_test.core.rand_number.call(null,(1),op_limit);var result = (op_1 * op_2);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operand-1","operand-1",-1685458956),op_1,new cljs.core.Keyword(null,"operand-2","operand-2",-1712232130),op_2,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
})():(cljs.core.truth_(operands.call(null,new cljs.core.Keyword(null,"div","div",1057191632)))?(function (){var op_limit = (Math.sqrt(upper_limit) | (0));var op_2 = math_test.core.rand_number.call(null,(1),op_limit);var result = math_test.core.rand_number.call(null,(1),op_limit);var op_1 = (op_2 * result);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operand-1","operand-1",-1685458956),op_1,new cljs.core.Keyword(null,"operand-2","operand-2",-1712232130),op_2,new cljs.core.Keyword(null,"result","result",1415092211),result], null);
})():null)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"trial","trial",-677458347),"",new cljs.core.Keyword(null,"correct","correct",984806334),true], null));
});
math_test.core.initial_state = (function initial_state(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"upper-limit","upper-limit",127576845),(100),new cljs.core.Keyword(null,"operands","operands",-388348562),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"mul","mul",-354626062),null,new cljs.core.Keyword(null,"add","add",235287739),null], null), null),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(3),null,(2),null], null), null)], null),new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.PersistentVector.EMPTY], null);
});
math_test.core.demo_tasks = (function demo_tasks(n){var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"upper-limit","upper-limit",127576845),(100),new cljs.core.Keyword(null,"operands","operands",-388348562),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"mul","mul",-354626062),null,new cljs.core.Keyword(null,"add","add",235287739),null], null), null),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(3),null,(2),null], null), null)], null);return cljs.core.repeat.call(null,(5),math_test.core.new_task.call(null,config));
});
if(typeof math_test.core.app_state !== 'undefined')
{} else
{math_test.core.app_state = reagent.core.atom.call(null,math_test.core.initial_state.call(null));
}
math_test.core.task_pane = (function task_pane(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Aufgaben"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Aufgabe 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Aufgabe 2"], null)], null)], null);
});
math_test.core.control_pane = (function control_pane(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Anzahl Aufgaben"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Start / Stop"], null)], null)], null);
});
math_test.core.main_page = (function main_page(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Mathe-Test"], null),math_test.core.task_pane,math_test.core.control_pane], null);
});
math_test.core.main = (function main(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [math_test.core.main_page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map