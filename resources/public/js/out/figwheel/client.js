// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__15995,args){var map__15997 = p__15995;var map__15997__$1 = ((cljs.core.seq_QMARK_.call(null,map__15997))?cljs.core.apply.call(null,cljs.core.hash_map,map__15997):map__15997);var debug = cljs.core.get.call(null,map__15997__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__15995,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__15995,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__15998){
var p__15995 = cljs.core.first(arglist__15998);
var args = cljs.core.rest(arglist__15998);
return log__delegate(p__15995,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__15999){var map__16001 = p__15999;var map__16001__$1 = ((cljs.core.seq_QMARK_.call(null,map__16001))?cljs.core.apply.call(null,cljs.core.hash_map,map__16001):map__16001);var websocket_url = cljs.core.get.call(null,map__16001__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__16002,callback){var map__16004 = p__16002;var map__16004__$1 = ((cljs.core.seq_QMARK_.call(null,map__16004))?cljs.core.apply.call(null,cljs.core.hash_map,map__16004):map__16004);var msg = map__16004__$1;var dependency_file = cljs.core.get.call(null,map__16004__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__16004__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__16004__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__8736__auto__ = dependency_file;if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__16004,map__16004__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__16004,map__16004__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__16005,p__16006){var map__16009 = p__16005;var map__16009__$1 = ((cljs.core.seq_QMARK_.call(null,map__16009))?cljs.core.apply.call(null,cljs.core.hash_map,map__16009):map__16009);var opts = map__16009__$1;var url_rewriter = cljs.core.get.call(null,map__16009__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__16010 = p__16006;var map__16010__$1 = ((cljs.core.seq_QMARK_.call(null,map__16010))?cljs.core.apply.call(null,cljs.core.hash_map,map__16010):map__16010);var d = map__16010__$1;var file = cljs.core.get.call(null,map__16010__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__16011,p__16012){var map__16054 = p__16011;var map__16054__$1 = ((cljs.core.seq_QMARK_.call(null,map__16054))?cljs.core.apply.call(null,cljs.core.hash_map,map__16054):map__16054);var opts = map__16054__$1;var on_jsload = cljs.core.get.call(null,map__16054__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__16054__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__16055 = p__16012;var map__16055__$1 = ((cljs.core.seq_QMARK_.call(null,map__16055))?cljs.core.apply.call(null,cljs.core.hash_map,map__16055):map__16055);var files = cljs.core.get.call(null,map__16055__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11606__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto__,map__16054,map__16054__$1,opts,on_jsload,before_jsload,map__16055,map__16055__$1,files){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto__,map__16054,map__16054__$1,opts,on_jsload,before_jsload,map__16055,map__16055__$1,files){
return (function (state_16078){var state_val_16079 = (state_16078[(1)]);if((state_val_16079 === (6)))
{var inst_16060 = (state_16078[(7)]);var inst_16069 = (state_16078[(2)]);var inst_16070 = cljs.core.PersistentVector.EMPTY_NODE;var inst_16071 = [inst_16060];var inst_16072 = (new cljs.core.PersistentVector(null,1,(5),inst_16070,inst_16071,null));var inst_16073 = cljs.core.apply.call(null,on_jsload,inst_16072);var state_16078__$1 = (function (){var statearr_16080 = state_16078;(statearr_16080[(8)] = inst_16069);
return statearr_16080;
})();var statearr_16081_16095 = state_16078__$1;(statearr_16081_16095[(2)] = inst_16073);
(statearr_16081_16095[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16079 === (5)))
{var inst_16076 = (state_16078[(2)]);var state_16078__$1 = state_16078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16078__$1,inst_16076);
} else
{if((state_val_16079 === (4)))
{var state_16078__$1 = state_16078;var statearr_16082_16096 = state_16078__$1;(statearr_16082_16096[(2)] = null);
(statearr_16082_16096[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16079 === (3)))
{var inst_16060 = (state_16078[(7)]);var inst_16063 = console.debug("Figwheel: loaded these files");var inst_16064 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_16060);var inst_16065 = cljs.core.prn_str.call(null,inst_16064);var inst_16066 = console.log(inst_16065);var inst_16067 = cljs.core.async.timeout.call(null,(10));var state_16078__$1 = (function (){var statearr_16083 = state_16078;(statearr_16083[(9)] = inst_16066);
(statearr_16083[(10)] = inst_16063);
return statearr_16083;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16078__$1,(6),inst_16067);
} else
{if((state_val_16079 === (2)))
{var inst_16060 = (state_16078[(7)]);var inst_16060__$1 = (state_16078[(2)]);var inst_16061 = cljs.core.not_empty.call(null,inst_16060__$1);var state_16078__$1 = (function (){var statearr_16084 = state_16078;(statearr_16084[(7)] = inst_16060__$1);
return statearr_16084;
})();if(cljs.core.truth_(inst_16061))
{var statearr_16085_16097 = state_16078__$1;(statearr_16085_16097[(1)] = (3));
} else
{var statearr_16086_16098 = state_16078__$1;(statearr_16086_16098[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16079 === (1)))
{var inst_16056 = before_jsload.call(null,files);var inst_16057 = figwheel.client.add_request_urls.call(null,opts,files);var inst_16058 = figwheel.client.load_all_js_files.call(null,inst_16057);var state_16078__$1 = (function (){var statearr_16087 = state_16078;(statearr_16087[(11)] = inst_16056);
return statearr_16087;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16078__$1,(2),inst_16058);
} else
{return null;
}
}
}
}
}
}
});})(c__11606__auto__,map__16054,map__16054__$1,opts,on_jsload,before_jsload,map__16055,map__16055__$1,files))
;return ((function (switch__11550__auto__,c__11606__auto__,map__16054,map__16054__$1,opts,on_jsload,before_jsload,map__16055,map__16055__$1,files){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_16091 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16091[(0)] = state_machine__11551__auto__);
(statearr_16091[(1)] = (1));
return statearr_16091;
});
var state_machine__11551__auto____1 = (function (state_16078){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_16078);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e16092){if((e16092 instanceof Object))
{var ex__11554__auto__ = e16092;var statearr_16093_16099 = state_16078;(statearr_16093_16099[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16092;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16100 = state_16078;
state_16078 = G__16100;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_16078){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_16078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto__,map__16054,map__16054__$1,opts,on_jsload,before_jsload,map__16055,map__16055__$1,files))
})();var state__11608__auto__ = (function (){var statearr_16094 = f__11607__auto__.call(null);(statearr_16094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto__);
return statearr_16094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto__,map__16054,map__16054__$1,opts,on_jsload,before_jsload,map__16055,map__16055__$1,files))
);
return c__11606__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__16101,link_href){var map__16103 = p__16101;var map__16103__$1 = ((cljs.core.seq_QMARK_.call(null,map__16103))?cljs.core.apply.call(null,cljs.core.hash_map,map__16103):map__16103);var request_url = cljs.core.get.call(null,map__16103__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__16103__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__11606__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto__,parent){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto__,parent){
return (function (state_16124){var state_val_16125 = (state_16124[(1)]);if((state_val_16125 === (2)))
{var inst_16121 = (state_16124[(2)]);var inst_16122 = parent.removeChild(orig_link);var state_16124__$1 = (function (){var statearr_16126 = state_16124;(statearr_16126[(7)] = inst_16121);
return statearr_16126;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16124__$1,inst_16122);
} else
{if((state_val_16125 === (1)))
{var inst_16119 = cljs.core.async.timeout.call(null,(200));var state_16124__$1 = state_16124;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16124__$1,(2),inst_16119);
} else
{return null;
}
}
});})(c__11606__auto__,parent))
;return ((function (switch__11550__auto__,c__11606__auto__,parent){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_16130 = [null,null,null,null,null,null,null,null];(statearr_16130[(0)] = state_machine__11551__auto__);
(statearr_16130[(1)] = (1));
return statearr_16130;
});
var state_machine__11551__auto____1 = (function (state_16124){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_16124);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e16131){if((e16131 instanceof Object))
{var ex__11554__auto__ = e16131;var statearr_16132_16134 = state_16124;(statearr_16132_16134[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16124);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16131;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16135 = state_16124;
state_16124 = G__16135;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_16124){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_16124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto__,parent))
})();var state__11608__auto__ = (function (){var statearr_16133 = f__11607__auto__.call(null);(statearr_16133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto__);
return statearr_16133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto__,parent))
);
return c__11606__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__16136){var map__16138 = p__16136;var map__16138__$1 = ((cljs.core.seq_QMARK_.call(null,map__16138))?cljs.core.apply.call(null,cljs.core.hash_map,map__16138):map__16138);var f_data = map__16138__$1;var request_url = cljs.core.get.call(null,map__16138__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__16138__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__16139,files_msg){var map__16161 = p__16139;var map__16161__$1 = ((cljs.core.seq_QMARK_.call(null,map__16161))?cljs.core.apply.call(null,cljs.core.hash_map,map__16161):map__16161);var opts = map__16161__$1;var on_cssload = cljs.core.get.call(null,map__16161__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__16162_16182 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__16163_16183 = null;var count__16164_16184 = (0);var i__16165_16185 = (0);while(true){
if((i__16165_16185 < count__16164_16184))
{var f_16186 = cljs.core._nth.call(null,chunk__16163_16183,i__16165_16185);figwheel.client.reload_css_file.call(null,f_16186);
{
var G__16187 = seq__16162_16182;
var G__16188 = chunk__16163_16183;
var G__16189 = count__16164_16184;
var G__16190 = (i__16165_16185 + (1));
seq__16162_16182 = G__16187;
chunk__16163_16183 = G__16188;
count__16164_16184 = G__16189;
i__16165_16185 = G__16190;
continue;
}
} else
{var temp__4126__auto___16191 = cljs.core.seq.call(null,seq__16162_16182);if(temp__4126__auto___16191)
{var seq__16162_16192__$1 = temp__4126__auto___16191;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16162_16192__$1))
{var c__9506__auto___16193 = cljs.core.chunk_first.call(null,seq__16162_16192__$1);{
var G__16194 = cljs.core.chunk_rest.call(null,seq__16162_16192__$1);
var G__16195 = c__9506__auto___16193;
var G__16196 = cljs.core.count.call(null,c__9506__auto___16193);
var G__16197 = (0);
seq__16162_16182 = G__16194;
chunk__16163_16183 = G__16195;
count__16164_16184 = G__16196;
i__16165_16185 = G__16197;
continue;
}
} else
{var f_16198 = cljs.core.first.call(null,seq__16162_16192__$1);figwheel.client.reload_css_file.call(null,f_16198);
{
var G__16199 = cljs.core.next.call(null,seq__16162_16192__$1);
var G__16200 = null;
var G__16201 = (0);
var G__16202 = (0);
seq__16162_16182 = G__16199;
chunk__16163_16183 = G__16200;
count__16164_16184 = G__16201;
i__16165_16185 = G__16202;
continue;
}
}
} else
{}
}
break;
}
var c__11606__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto__,map__16161,map__16161__$1,opts,on_cssload){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto__,map__16161,map__16161__$1,opts,on_cssload){
return (function (state_16172){var state_val_16173 = (state_16172[(1)]);if((state_val_16173 === (2)))
{var inst_16168 = (state_16172[(2)]);var inst_16169 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_16170 = on_cssload.call(null,inst_16169);var state_16172__$1 = (function (){var statearr_16174 = state_16172;(statearr_16174[(7)] = inst_16168);
return statearr_16174;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16172__$1,inst_16170);
} else
{if((state_val_16173 === (1)))
{var inst_16166 = cljs.core.async.timeout.call(null,(100));var state_16172__$1 = state_16172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16172__$1,(2),inst_16166);
} else
{return null;
}
}
});})(c__11606__auto__,map__16161,map__16161__$1,opts,on_cssload))
;return ((function (switch__11550__auto__,c__11606__auto__,map__16161,map__16161__$1,opts,on_cssload){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_16178 = [null,null,null,null,null,null,null,null];(statearr_16178[(0)] = state_machine__11551__auto__);
(statearr_16178[(1)] = (1));
return statearr_16178;
});
var state_machine__11551__auto____1 = (function (state_16172){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_16172);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e16179){if((e16179 instanceof Object))
{var ex__11554__auto__ = e16179;var statearr_16180_16203 = state_16172;(statearr_16180_16203[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16172);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16179;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16204 = state_16172;
state_16172 = G__16204;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_16172){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_16172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto__,map__16161,map__16161__$1,opts,on_cssload))
})();var state__11608__auto__ = (function (){var statearr_16181 = f__11607__auto__.call(null);(statearr_16181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto__);
return statearr_16181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto__,map__16161,map__16161__$1,opts,on_cssload))
);
return c__11606__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__16205){var map__16210 = p__16205;var map__16210__$1 = ((cljs.core.seq_QMARK_.call(null,map__16210))?cljs.core.apply.call(null,cljs.core.hash_map,map__16210):map__16210);var opts = map__16210__$1;var on_compile_fail = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__16210__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__16210,map__16210__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__16211 = cljs.core._EQ_;var expr__16212 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__16211.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__16212)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__16211.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__16212)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__16211.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__16212)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__16210,map__16210__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__16210,map__16210__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__16210,map__16210__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__16210,map__16210__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__16210,map__16210__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__16210,map__16210__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__16210,map__16210__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__16210,map__16210__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__16210,map__16210__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj16217 = {"detail":url};return obj16217;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__16218){var map__16220 = p__16218;var map__16220__$1 = ((cljs.core.seq_QMARK_.call(null,map__16220))?cljs.core.apply.call(null,cljs.core.hash_map,map__16220):map__16220);var class$ = cljs.core.get.call(null,map__16220__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__16220__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__16221){var map__16227 = p__16221;var map__16227__$1 = ((cljs.core.seq_QMARK_.call(null,map__16227))?cljs.core.apply.call(null,cljs.core.hash_map,map__16227):map__16227);var ed = map__16227__$1;var exception_data = cljs.core.get.call(null,map__16227__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__16227__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__16228_16232 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__16229_16233 = null;var count__16230_16234 = (0);var i__16231_16235 = (0);while(true){
if((i__16231_16235 < count__16230_16234))
{var msg_16236 = cljs.core._nth.call(null,chunk__16229_16233,i__16231_16235);console.log(msg_16236);
{
var G__16237 = seq__16228_16232;
var G__16238 = chunk__16229_16233;
var G__16239 = count__16230_16234;
var G__16240 = (i__16231_16235 + (1));
seq__16228_16232 = G__16237;
chunk__16229_16233 = G__16238;
count__16230_16234 = G__16239;
i__16231_16235 = G__16240;
continue;
}
} else
{var temp__4126__auto___16241 = cljs.core.seq.call(null,seq__16228_16232);if(temp__4126__auto___16241)
{var seq__16228_16242__$1 = temp__4126__auto___16241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16228_16242__$1))
{var c__9506__auto___16243 = cljs.core.chunk_first.call(null,seq__16228_16242__$1);{
var G__16244 = cljs.core.chunk_rest.call(null,seq__16228_16242__$1);
var G__16245 = c__9506__auto___16243;
var G__16246 = cljs.core.count.call(null,c__9506__auto___16243);
var G__16247 = (0);
seq__16228_16232 = G__16244;
chunk__16229_16233 = G__16245;
count__16230_16234 = G__16246;
i__16231_16235 = G__16247;
continue;
}
} else
{var msg_16248 = cljs.core.first.call(null,seq__16228_16242__$1);console.log(msg_16248);
{
var G__16249 = cljs.core.next.call(null,seq__16228_16242__$1);
var G__16250 = null;
var G__16251 = (0);
var G__16252 = (0);
seq__16228_16232 = G__16249;
chunk__16229_16233 = G__16250;
count__16230_16234 = G__16251;
i__16231_16235 = G__16252;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__8736__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__16253){var map__16255 = p__16253;var map__16255__$1 = ((cljs.core.seq_QMARK_.call(null,map__16255))?cljs.core.apply.call(null,cljs.core.hash_map,map__16255):map__16255);var opts = map__16255__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__16253 = null;if (arguments.length > 0) {
  p__16253 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__16253);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__16256){
var p__16253 = cljs.core.seq(arglist__16256);
return watch_and_reload__delegate(p__16253);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map