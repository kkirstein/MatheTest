// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16371 = (function (f,fn_handler,meta16372){
this.f = f;
this.fn_handler = fn_handler;
this.meta16372 = meta16372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16371.cljs$lang$type = true;
cljs.core.async.t16371.cljs$lang$ctorStr = "cljs.core.async/t16371";
cljs.core.async.t16371.cljs$lang$ctorPrWriter = (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write.call(null,writer__9314__auto__,"cljs.core.async/t16371");
});
cljs.core.async.t16371.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16373){var self__ = this;
var _16373__$1 = this;return self__.meta16372;
});
cljs.core.async.t16371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16373,meta16372__$1){var self__ = this;
var _16373__$1 = this;return (new cljs.core.async.t16371(self__.f,self__.fn_handler,meta16372__$1));
});
cljs.core.async.__GT_t16371 = (function __GT_t16371(f__$1,fn_handler__$1,meta16372){return (new cljs.core.async.t16371(f__$1,fn_handler__$1,meta16372));
});
}
return (new cljs.core.async.t16371(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16375 = buff;if(G__16375)
{var bit__9400__auto__ = null;if(cljs.core.truth_((function (){var or__8736__auto__ = bit__9400__auto__;if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return G__16375.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16375.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16375);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16375);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_16376 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16376);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16376,ret){
return (function (){return fn1.call(null,val_16376);
});})(val_16376,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9606__auto___16377 = n;var x_16378 = (0);while(true){
if((x_16378 < n__9606__auto___16377))
{(a[x_16378] = (0));
{
var G__16379 = (x_16378 + (1));
x_16378 = G__16379;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__16380 = (i + (1));
i = G__16380;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16384 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16384 = (function (flag,alt_flag,meta16385){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16385 = meta16385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16384.cljs$lang$type = true;
cljs.core.async.t16384.cljs$lang$ctorStr = "cljs.core.async/t16384";
cljs.core.async.t16384.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write.call(null,writer__9314__auto__,"cljs.core.async/t16384");
});})(flag))
;
cljs.core.async.t16384.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16386){var self__ = this;
var _16386__$1 = this;return self__.meta16385;
});})(flag))
;
cljs.core.async.t16384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16386,meta16385__$1){var self__ = this;
var _16386__$1 = this;return (new cljs.core.async.t16384(self__.flag,self__.alt_flag,meta16385__$1));
});})(flag))
;
cljs.core.async.__GT_t16384 = ((function (flag){
return (function __GT_t16384(flag__$1,alt_flag__$1,meta16385){return (new cljs.core.async.t16384(flag__$1,alt_flag__$1,meta16385));
});})(flag))
;
}
return (new cljs.core.async.t16384(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16390 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16390 = (function (cb,flag,alt_handler,meta16391){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16391 = meta16391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16390.cljs$lang$type = true;
cljs.core.async.t16390.cljs$lang$ctorStr = "cljs.core.async/t16390";
cljs.core.async.t16390.cljs$lang$ctorPrWriter = (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write.call(null,writer__9314__auto__,"cljs.core.async/t16390");
});
cljs.core.async.t16390.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16392){var self__ = this;
var _16392__$1 = this;return self__.meta16391;
});
cljs.core.async.t16390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16392,meta16391__$1){var self__ = this;
var _16392__$1 = this;return (new cljs.core.async.t16390(self__.cb,self__.flag,self__.alt_handler,meta16391__$1));
});
cljs.core.async.__GT_t16390 = (function __GT_t16390(cb__$1,flag__$1,alt_handler__$1,meta16391){return (new cljs.core.async.t16390(cb__$1,flag__$1,alt_handler__$1,meta16391));
});
}
return (new cljs.core.async.t16390(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16393_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16393_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16394_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16394_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8736__auto__ = wport;if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16395 = (i + (1));
i = G__16395;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8736__auto__ = ret;if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__8724__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8724__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8724__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__16396){var map__16398 = p__16396;var map__16398__$1 = ((cljs.core.seq_QMARK_.call(null,map__16398))?cljs.core.apply.call(null,cljs.core.hash_map,map__16398):map__16398);var opts = map__16398__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16396 = null;if (arguments.length > 1) {
  p__16396 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16396);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16399){
var ports = cljs.core.first(arglist__16399);
var p__16396 = cljs.core.rest(arglist__16399);
return alts_BANG___delegate(ports,p__16396);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11606__auto___16494 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___16494){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___16494){
return (function (state_16470){var state_val_16471 = (state_16470[(1)]);if((state_val_16471 === (7)))
{var inst_16466 = (state_16470[(2)]);var state_16470__$1 = state_16470;var statearr_16472_16495 = state_16470__$1;(statearr_16472_16495[(2)] = inst_16466);
(statearr_16472_16495[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16471 === (1)))
{var state_16470__$1 = state_16470;var statearr_16473_16496 = state_16470__$1;(statearr_16473_16496[(2)] = null);
(statearr_16473_16496[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16471 === (4)))
{var inst_16449 = (state_16470[(7)]);var inst_16449__$1 = (state_16470[(2)]);var inst_16450 = (inst_16449__$1 == null);var state_16470__$1 = (function (){var statearr_16474 = state_16470;(statearr_16474[(7)] = inst_16449__$1);
return statearr_16474;
})();if(cljs.core.truth_(inst_16450))
{var statearr_16475_16497 = state_16470__$1;(statearr_16475_16497[(1)] = (5));
} else
{var statearr_16476_16498 = state_16470__$1;(statearr_16476_16498[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16471 === (13)))
{var state_16470__$1 = state_16470;var statearr_16477_16499 = state_16470__$1;(statearr_16477_16499[(2)] = null);
(statearr_16477_16499[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16471 === (6)))
{var inst_16449 = (state_16470[(7)]);var state_16470__$1 = state_16470;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16470__$1,(11),to,inst_16449);
} else
{if((state_val_16471 === (3)))
{var inst_16468 = (state_16470[(2)]);var state_16470__$1 = state_16470;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16470__$1,inst_16468);
} else
{if((state_val_16471 === (12)))
{var state_16470__$1 = state_16470;var statearr_16478_16500 = state_16470__$1;(statearr_16478_16500[(2)] = null);
(statearr_16478_16500[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16471 === (2)))
{var state_16470__$1 = state_16470;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16470__$1,(4),from);
} else
{if((state_val_16471 === (11)))
{var inst_16459 = (state_16470[(2)]);var state_16470__$1 = state_16470;if(cljs.core.truth_(inst_16459))
{var statearr_16479_16501 = state_16470__$1;(statearr_16479_16501[(1)] = (12));
} else
{var statearr_16480_16502 = state_16470__$1;(statearr_16480_16502[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16471 === (9)))
{var state_16470__$1 = state_16470;var statearr_16481_16503 = state_16470__$1;(statearr_16481_16503[(2)] = null);
(statearr_16481_16503[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16471 === (5)))
{var state_16470__$1 = state_16470;if(cljs.core.truth_(close_QMARK_))
{var statearr_16482_16504 = state_16470__$1;(statearr_16482_16504[(1)] = (8));
} else
{var statearr_16483_16505 = state_16470__$1;(statearr_16483_16505[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16471 === (14)))
{var inst_16464 = (state_16470[(2)]);var state_16470__$1 = state_16470;var statearr_16484_16506 = state_16470__$1;(statearr_16484_16506[(2)] = inst_16464);
(statearr_16484_16506[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16471 === (10)))
{var inst_16456 = (state_16470[(2)]);var state_16470__$1 = state_16470;var statearr_16485_16507 = state_16470__$1;(statearr_16485_16507[(2)] = inst_16456);
(statearr_16485_16507[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16471 === (8)))
{var inst_16453 = cljs.core.async.close_BANG_.call(null,to);var state_16470__$1 = state_16470;var statearr_16486_16508 = state_16470__$1;(statearr_16486_16508[(2)] = inst_16453);
(statearr_16486_16508[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___16494))
;return ((function (switch__11550__auto__,c__11606__auto___16494){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_16490 = [null,null,null,null,null,null,null,null];(statearr_16490[(0)] = state_machine__11551__auto__);
(statearr_16490[(1)] = (1));
return statearr_16490;
});
var state_machine__11551__auto____1 = (function (state_16470){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_16470);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e16491){if((e16491 instanceof Object))
{var ex__11554__auto__ = e16491;var statearr_16492_16509 = state_16470;(statearr_16492_16509[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16470);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16491;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16510 = state_16470;
state_16470 = G__16510;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_16470){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_16470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___16494))
})();var state__11608__auto__ = (function (){var statearr_16493 = f__11607__auto__.call(null);(statearr_16493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___16494);
return statearr_16493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___16494))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__16694){var vec__16695 = p__16694;var v = cljs.core.nth.call(null,vec__16695,(0),null);var p = cljs.core.nth.call(null,vec__16695,(1),null);var job = vec__16695;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__11606__auto___16877 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___16877,res,vec__16695,v,p,job,jobs,results){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___16877,res,vec__16695,v,p,job,jobs,results){
return (function (state_16700){var state_val_16701 = (state_16700[(1)]);if((state_val_16701 === (2)))
{var inst_16697 = (state_16700[(2)]);var inst_16698 = cljs.core.async.close_BANG_.call(null,res);var state_16700__$1 = (function (){var statearr_16702 = state_16700;(statearr_16702[(7)] = inst_16697);
return statearr_16702;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16700__$1,inst_16698);
} else
{if((state_val_16701 === (1)))
{var state_16700__$1 = state_16700;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16700__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11606__auto___16877,res,vec__16695,v,p,job,jobs,results))
;return ((function (switch__11550__auto__,c__11606__auto___16877,res,vec__16695,v,p,job,jobs,results){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_16706 = [null,null,null,null,null,null,null,null];(statearr_16706[(0)] = state_machine__11551__auto__);
(statearr_16706[(1)] = (1));
return statearr_16706;
});
var state_machine__11551__auto____1 = (function (state_16700){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_16700);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e16707){if((e16707 instanceof Object))
{var ex__11554__auto__ = e16707;var statearr_16708_16878 = state_16700;(statearr_16708_16878[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16700);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16707;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16879 = state_16700;
state_16700 = G__16879;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_16700){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_16700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___16877,res,vec__16695,v,p,job,jobs,results))
})();var state__11608__auto__ = (function (){var statearr_16709 = f__11607__auto__.call(null);(statearr_16709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___16877);
return statearr_16709;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___16877,res,vec__16695,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__16710){var vec__16711 = p__16710;var v = cljs.core.nth.call(null,vec__16711,(0),null);var p = cljs.core.nth.call(null,vec__16711,(1),null);var job = vec__16711;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__9606__auto___16880 = n;var __16881 = (0);while(true){
if((__16881 < n__9606__auto___16880))
{var G__16712_16882 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__16712_16882) {
case "async":
var c__11606__auto___16884 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__16881,c__11606__auto___16884,G__16712_16882,n__9606__auto___16880,jobs,results,process,async){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (__16881,c__11606__auto___16884,G__16712_16882,n__9606__auto___16880,jobs,results,process,async){
return (function (state_16725){var state_val_16726 = (state_16725[(1)]);if((state_val_16726 === (7)))
{var inst_16721 = (state_16725[(2)]);var state_16725__$1 = state_16725;var statearr_16727_16885 = state_16725__$1;(statearr_16727_16885[(2)] = inst_16721);
(statearr_16727_16885[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16726 === (6)))
{var state_16725__$1 = state_16725;var statearr_16728_16886 = state_16725__$1;(statearr_16728_16886[(2)] = null);
(statearr_16728_16886[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16726 === (5)))
{var state_16725__$1 = state_16725;var statearr_16729_16887 = state_16725__$1;(statearr_16729_16887[(2)] = null);
(statearr_16729_16887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16726 === (4)))
{var inst_16715 = (state_16725[(2)]);var inst_16716 = async.call(null,inst_16715);var state_16725__$1 = state_16725;if(cljs.core.truth_(inst_16716))
{var statearr_16730_16888 = state_16725__$1;(statearr_16730_16888[(1)] = (5));
} else
{var statearr_16731_16889 = state_16725__$1;(statearr_16731_16889[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16726 === (3)))
{var inst_16723 = (state_16725[(2)]);var state_16725__$1 = state_16725;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16725__$1,inst_16723);
} else
{if((state_val_16726 === (2)))
{var state_16725__$1 = state_16725;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16725__$1,(4),jobs);
} else
{if((state_val_16726 === (1)))
{var state_16725__$1 = state_16725;var statearr_16732_16890 = state_16725__$1;(statearr_16732_16890[(2)] = null);
(statearr_16732_16890[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__16881,c__11606__auto___16884,G__16712_16882,n__9606__auto___16880,jobs,results,process,async))
;return ((function (__16881,switch__11550__auto__,c__11606__auto___16884,G__16712_16882,n__9606__auto___16880,jobs,results,process,async){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_16736 = [null,null,null,null,null,null,null];(statearr_16736[(0)] = state_machine__11551__auto__);
(statearr_16736[(1)] = (1));
return statearr_16736;
});
var state_machine__11551__auto____1 = (function (state_16725){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_16725);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e16737){if((e16737 instanceof Object))
{var ex__11554__auto__ = e16737;var statearr_16738_16891 = state_16725;(statearr_16738_16891[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16725);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16737;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16892 = state_16725;
state_16725 = G__16892;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_16725){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_16725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(__16881,switch__11550__auto__,c__11606__auto___16884,G__16712_16882,n__9606__auto___16880,jobs,results,process,async))
})();var state__11608__auto__ = (function (){var statearr_16739 = f__11607__auto__.call(null);(statearr_16739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___16884);
return statearr_16739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(__16881,c__11606__auto___16884,G__16712_16882,n__9606__auto___16880,jobs,results,process,async))
);

break;
case "compute":
var c__11606__auto___16893 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__16881,c__11606__auto___16893,G__16712_16882,n__9606__auto___16880,jobs,results,process,async){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (__16881,c__11606__auto___16893,G__16712_16882,n__9606__auto___16880,jobs,results,process,async){
return (function (state_16752){var state_val_16753 = (state_16752[(1)]);if((state_val_16753 === (7)))
{var inst_16748 = (state_16752[(2)]);var state_16752__$1 = state_16752;var statearr_16754_16894 = state_16752__$1;(statearr_16754_16894[(2)] = inst_16748);
(statearr_16754_16894[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16753 === (6)))
{var state_16752__$1 = state_16752;var statearr_16755_16895 = state_16752__$1;(statearr_16755_16895[(2)] = null);
(statearr_16755_16895[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16753 === (5)))
{var state_16752__$1 = state_16752;var statearr_16756_16896 = state_16752__$1;(statearr_16756_16896[(2)] = null);
(statearr_16756_16896[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16753 === (4)))
{var inst_16742 = (state_16752[(2)]);var inst_16743 = process.call(null,inst_16742);var state_16752__$1 = state_16752;if(cljs.core.truth_(inst_16743))
{var statearr_16757_16897 = state_16752__$1;(statearr_16757_16897[(1)] = (5));
} else
{var statearr_16758_16898 = state_16752__$1;(statearr_16758_16898[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16753 === (3)))
{var inst_16750 = (state_16752[(2)]);var state_16752__$1 = state_16752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16752__$1,inst_16750);
} else
{if((state_val_16753 === (2)))
{var state_16752__$1 = state_16752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16752__$1,(4),jobs);
} else
{if((state_val_16753 === (1)))
{var state_16752__$1 = state_16752;var statearr_16759_16899 = state_16752__$1;(statearr_16759_16899[(2)] = null);
(statearr_16759_16899[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__16881,c__11606__auto___16893,G__16712_16882,n__9606__auto___16880,jobs,results,process,async))
;return ((function (__16881,switch__11550__auto__,c__11606__auto___16893,G__16712_16882,n__9606__auto___16880,jobs,results,process,async){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_16763 = [null,null,null,null,null,null,null];(statearr_16763[(0)] = state_machine__11551__auto__);
(statearr_16763[(1)] = (1));
return statearr_16763;
});
var state_machine__11551__auto____1 = (function (state_16752){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_16752);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e16764){if((e16764 instanceof Object))
{var ex__11554__auto__ = e16764;var statearr_16765_16900 = state_16752;(statearr_16765_16900[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16764;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16901 = state_16752;
state_16752 = G__16901;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_16752){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_16752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(__16881,switch__11550__auto__,c__11606__auto___16893,G__16712_16882,n__9606__auto___16880,jobs,results,process,async))
})();var state__11608__auto__ = (function (){var statearr_16766 = f__11607__auto__.call(null);(statearr_16766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___16893);
return statearr_16766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(__16881,c__11606__auto___16893,G__16712_16882,n__9606__auto___16880,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__16902 = (__16881 + (1));
__16881 = G__16902;
continue;
}
} else
{}
break;
}
var c__11606__auto___16903 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___16903,jobs,results,process,async){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___16903,jobs,results,process,async){
return (function (state_16788){var state_val_16789 = (state_16788[(1)]);if((state_val_16789 === (9)))
{var inst_16781 = (state_16788[(2)]);var state_16788__$1 = (function (){var statearr_16790 = state_16788;(statearr_16790[(7)] = inst_16781);
return statearr_16790;
})();var statearr_16791_16904 = state_16788__$1;(statearr_16791_16904[(2)] = null);
(statearr_16791_16904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16789 === (8)))
{var inst_16774 = (state_16788[(8)]);var inst_16779 = (state_16788[(2)]);var state_16788__$1 = (function (){var statearr_16792 = state_16788;(statearr_16792[(9)] = inst_16779);
return statearr_16792;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16788__$1,(9),results,inst_16774);
} else
{if((state_val_16789 === (7)))
{var inst_16784 = (state_16788[(2)]);var state_16788__$1 = state_16788;var statearr_16793_16905 = state_16788__$1;(statearr_16793_16905[(2)] = inst_16784);
(statearr_16793_16905[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16789 === (6)))
{var inst_16774 = (state_16788[(8)]);var inst_16769 = (state_16788[(10)]);var inst_16774__$1 = cljs.core.async.chan.call(null,(1));var inst_16775 = cljs.core.PersistentVector.EMPTY_NODE;var inst_16776 = [inst_16769,inst_16774__$1];var inst_16777 = (new cljs.core.PersistentVector(null,2,(5),inst_16775,inst_16776,null));var state_16788__$1 = (function (){var statearr_16794 = state_16788;(statearr_16794[(8)] = inst_16774__$1);
return statearr_16794;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16788__$1,(8),jobs,inst_16777);
} else
{if((state_val_16789 === (5)))
{var inst_16772 = cljs.core.async.close_BANG_.call(null,jobs);var state_16788__$1 = state_16788;var statearr_16795_16906 = state_16788__$1;(statearr_16795_16906[(2)] = inst_16772);
(statearr_16795_16906[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16789 === (4)))
{var inst_16769 = (state_16788[(10)]);var inst_16769__$1 = (state_16788[(2)]);var inst_16770 = (inst_16769__$1 == null);var state_16788__$1 = (function (){var statearr_16796 = state_16788;(statearr_16796[(10)] = inst_16769__$1);
return statearr_16796;
})();if(cljs.core.truth_(inst_16770))
{var statearr_16797_16907 = state_16788__$1;(statearr_16797_16907[(1)] = (5));
} else
{var statearr_16798_16908 = state_16788__$1;(statearr_16798_16908[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16789 === (3)))
{var inst_16786 = (state_16788[(2)]);var state_16788__$1 = state_16788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16788__$1,inst_16786);
} else
{if((state_val_16789 === (2)))
{var state_16788__$1 = state_16788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16788__$1,(4),from);
} else
{if((state_val_16789 === (1)))
{var state_16788__$1 = state_16788;var statearr_16799_16909 = state_16788__$1;(statearr_16799_16909[(2)] = null);
(statearr_16799_16909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___16903,jobs,results,process,async))
;return ((function (switch__11550__auto__,c__11606__auto___16903,jobs,results,process,async){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_16803 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16803[(0)] = state_machine__11551__auto__);
(statearr_16803[(1)] = (1));
return statearr_16803;
});
var state_machine__11551__auto____1 = (function (state_16788){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_16788);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e16804){if((e16804 instanceof Object))
{var ex__11554__auto__ = e16804;var statearr_16805_16910 = state_16788;(statearr_16805_16910[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16788);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16804;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16911 = state_16788;
state_16788 = G__16911;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_16788){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_16788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___16903,jobs,results,process,async))
})();var state__11608__auto__ = (function (){var statearr_16806 = f__11607__auto__.call(null);(statearr_16806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___16903);
return statearr_16806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___16903,jobs,results,process,async))
);
var c__11606__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto__,jobs,results,process,async){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto__,jobs,results,process,async){
return (function (state_16844){var state_val_16845 = (state_16844[(1)]);if((state_val_16845 === (7)))
{var inst_16840 = (state_16844[(2)]);var state_16844__$1 = state_16844;var statearr_16846_16912 = state_16844__$1;(statearr_16846_16912[(2)] = inst_16840);
(statearr_16846_16912[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (20)))
{var state_16844__$1 = state_16844;var statearr_16847_16913 = state_16844__$1;(statearr_16847_16913[(2)] = null);
(statearr_16847_16913[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (1)))
{var state_16844__$1 = state_16844;var statearr_16848_16914 = state_16844__$1;(statearr_16848_16914[(2)] = null);
(statearr_16848_16914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (4)))
{var inst_16809 = (state_16844[(7)]);var inst_16809__$1 = (state_16844[(2)]);var inst_16810 = (inst_16809__$1 == null);var state_16844__$1 = (function (){var statearr_16849 = state_16844;(statearr_16849[(7)] = inst_16809__$1);
return statearr_16849;
})();if(cljs.core.truth_(inst_16810))
{var statearr_16850_16915 = state_16844__$1;(statearr_16850_16915[(1)] = (5));
} else
{var statearr_16851_16916 = state_16844__$1;(statearr_16851_16916[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (15)))
{var inst_16822 = (state_16844[(8)]);var state_16844__$1 = state_16844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16844__$1,(18),to,inst_16822);
} else
{if((state_val_16845 === (21)))
{var inst_16835 = (state_16844[(2)]);var state_16844__$1 = state_16844;var statearr_16852_16917 = state_16844__$1;(statearr_16852_16917[(2)] = inst_16835);
(statearr_16852_16917[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (13)))
{var inst_16837 = (state_16844[(2)]);var state_16844__$1 = (function (){var statearr_16853 = state_16844;(statearr_16853[(9)] = inst_16837);
return statearr_16853;
})();var statearr_16854_16918 = state_16844__$1;(statearr_16854_16918[(2)] = null);
(statearr_16854_16918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (6)))
{var inst_16809 = (state_16844[(7)]);var state_16844__$1 = state_16844;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16844__$1,(11),inst_16809);
} else
{if((state_val_16845 === (17)))
{var inst_16830 = (state_16844[(2)]);var state_16844__$1 = state_16844;if(cljs.core.truth_(inst_16830))
{var statearr_16855_16919 = state_16844__$1;(statearr_16855_16919[(1)] = (19));
} else
{var statearr_16856_16920 = state_16844__$1;(statearr_16856_16920[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (3)))
{var inst_16842 = (state_16844[(2)]);var state_16844__$1 = state_16844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16844__$1,inst_16842);
} else
{if((state_val_16845 === (12)))
{var inst_16819 = (state_16844[(10)]);var state_16844__$1 = state_16844;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16844__$1,(14),inst_16819);
} else
{if((state_val_16845 === (2)))
{var state_16844__$1 = state_16844;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16844__$1,(4),results);
} else
{if((state_val_16845 === (19)))
{var state_16844__$1 = state_16844;var statearr_16857_16921 = state_16844__$1;(statearr_16857_16921[(2)] = null);
(statearr_16857_16921[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (11)))
{var inst_16819 = (state_16844[(2)]);var state_16844__$1 = (function (){var statearr_16858 = state_16844;(statearr_16858[(10)] = inst_16819);
return statearr_16858;
})();var statearr_16859_16922 = state_16844__$1;(statearr_16859_16922[(2)] = null);
(statearr_16859_16922[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (9)))
{var state_16844__$1 = state_16844;var statearr_16860_16923 = state_16844__$1;(statearr_16860_16923[(2)] = null);
(statearr_16860_16923[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (5)))
{var state_16844__$1 = state_16844;if(cljs.core.truth_(close_QMARK_))
{var statearr_16861_16924 = state_16844__$1;(statearr_16861_16924[(1)] = (8));
} else
{var statearr_16862_16925 = state_16844__$1;(statearr_16862_16925[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (14)))
{var inst_16824 = (state_16844[(11)]);var inst_16822 = (state_16844[(8)]);var inst_16822__$1 = (state_16844[(2)]);var inst_16823 = (inst_16822__$1 == null);var inst_16824__$1 = cljs.core.not.call(null,inst_16823);var state_16844__$1 = (function (){var statearr_16863 = state_16844;(statearr_16863[(11)] = inst_16824__$1);
(statearr_16863[(8)] = inst_16822__$1);
return statearr_16863;
})();if(inst_16824__$1)
{var statearr_16864_16926 = state_16844__$1;(statearr_16864_16926[(1)] = (15));
} else
{var statearr_16865_16927 = state_16844__$1;(statearr_16865_16927[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (16)))
{var inst_16824 = (state_16844[(11)]);var state_16844__$1 = state_16844;var statearr_16866_16928 = state_16844__$1;(statearr_16866_16928[(2)] = inst_16824);
(statearr_16866_16928[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (10)))
{var inst_16816 = (state_16844[(2)]);var state_16844__$1 = state_16844;var statearr_16867_16929 = state_16844__$1;(statearr_16867_16929[(2)] = inst_16816);
(statearr_16867_16929[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (18)))
{var inst_16827 = (state_16844[(2)]);var state_16844__$1 = state_16844;var statearr_16868_16930 = state_16844__$1;(statearr_16868_16930[(2)] = inst_16827);
(statearr_16868_16930[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16845 === (8)))
{var inst_16813 = cljs.core.async.close_BANG_.call(null,to);var state_16844__$1 = state_16844;var statearr_16869_16931 = state_16844__$1;(statearr_16869_16931[(2)] = inst_16813);
(statearr_16869_16931[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto__,jobs,results,process,async))
;return ((function (switch__11550__auto__,c__11606__auto__,jobs,results,process,async){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_16873 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16873[(0)] = state_machine__11551__auto__);
(statearr_16873[(1)] = (1));
return statearr_16873;
});
var state_machine__11551__auto____1 = (function (state_16844){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_16844);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e16874){if((e16874 instanceof Object))
{var ex__11554__auto__ = e16874;var statearr_16875_16932 = state_16844;(statearr_16875_16932[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16844);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16874;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16933 = state_16844;
state_16844 = G__16933;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_16844){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_16844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto__,jobs,results,process,async))
})();var state__11608__auto__ = (function (){var statearr_16876 = f__11607__auto__.call(null);(statearr_16876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto__);
return statearr_16876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto__,jobs,results,process,async))
);
return c__11606__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11606__auto___17034 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___17034,tc,fc){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___17034,tc,fc){
return (function (state_17009){var state_val_17010 = (state_17009[(1)]);if((state_val_17010 === (7)))
{var inst_17005 = (state_17009[(2)]);var state_17009__$1 = state_17009;var statearr_17011_17035 = state_17009__$1;(statearr_17011_17035[(2)] = inst_17005);
(statearr_17011_17035[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (1)))
{var state_17009__$1 = state_17009;var statearr_17012_17036 = state_17009__$1;(statearr_17012_17036[(2)] = null);
(statearr_17012_17036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (4)))
{var inst_16986 = (state_17009[(7)]);var inst_16986__$1 = (state_17009[(2)]);var inst_16987 = (inst_16986__$1 == null);var state_17009__$1 = (function (){var statearr_17013 = state_17009;(statearr_17013[(7)] = inst_16986__$1);
return statearr_17013;
})();if(cljs.core.truth_(inst_16987))
{var statearr_17014_17037 = state_17009__$1;(statearr_17014_17037[(1)] = (5));
} else
{var statearr_17015_17038 = state_17009__$1;(statearr_17015_17038[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (13)))
{var state_17009__$1 = state_17009;var statearr_17016_17039 = state_17009__$1;(statearr_17016_17039[(2)] = null);
(statearr_17016_17039[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (6)))
{var inst_16986 = (state_17009[(7)]);var inst_16992 = p.call(null,inst_16986);var state_17009__$1 = state_17009;if(cljs.core.truth_(inst_16992))
{var statearr_17017_17040 = state_17009__$1;(statearr_17017_17040[(1)] = (9));
} else
{var statearr_17018_17041 = state_17009__$1;(statearr_17018_17041[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (3)))
{var inst_17007 = (state_17009[(2)]);var state_17009__$1 = state_17009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17009__$1,inst_17007);
} else
{if((state_val_17010 === (12)))
{var state_17009__$1 = state_17009;var statearr_17019_17042 = state_17009__$1;(statearr_17019_17042[(2)] = null);
(statearr_17019_17042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (2)))
{var state_17009__$1 = state_17009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17009__$1,(4),ch);
} else
{if((state_val_17010 === (11)))
{var inst_16986 = (state_17009[(7)]);var inst_16996 = (state_17009[(2)]);var state_17009__$1 = state_17009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17009__$1,(8),inst_16996,inst_16986);
} else
{if((state_val_17010 === (9)))
{var state_17009__$1 = state_17009;var statearr_17020_17043 = state_17009__$1;(statearr_17020_17043[(2)] = tc);
(statearr_17020_17043[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (5)))
{var inst_16989 = cljs.core.async.close_BANG_.call(null,tc);var inst_16990 = cljs.core.async.close_BANG_.call(null,fc);var state_17009__$1 = (function (){var statearr_17021 = state_17009;(statearr_17021[(8)] = inst_16989);
return statearr_17021;
})();var statearr_17022_17044 = state_17009__$1;(statearr_17022_17044[(2)] = inst_16990);
(statearr_17022_17044[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (14)))
{var inst_17003 = (state_17009[(2)]);var state_17009__$1 = state_17009;var statearr_17023_17045 = state_17009__$1;(statearr_17023_17045[(2)] = inst_17003);
(statearr_17023_17045[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (10)))
{var state_17009__$1 = state_17009;var statearr_17024_17046 = state_17009__$1;(statearr_17024_17046[(2)] = fc);
(statearr_17024_17046[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17010 === (8)))
{var inst_16998 = (state_17009[(2)]);var state_17009__$1 = state_17009;if(cljs.core.truth_(inst_16998))
{var statearr_17025_17047 = state_17009__$1;(statearr_17025_17047[(1)] = (12));
} else
{var statearr_17026_17048 = state_17009__$1;(statearr_17026_17048[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___17034,tc,fc))
;return ((function (switch__11550__auto__,c__11606__auto___17034,tc,fc){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_17030 = [null,null,null,null,null,null,null,null,null];(statearr_17030[(0)] = state_machine__11551__auto__);
(statearr_17030[(1)] = (1));
return statearr_17030;
});
var state_machine__11551__auto____1 = (function (state_17009){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_17009);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e17031){if((e17031 instanceof Object))
{var ex__11554__auto__ = e17031;var statearr_17032_17049 = state_17009;(statearr_17032_17049[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17031;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17050 = state_17009;
state_17009 = G__17050;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_17009){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_17009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___17034,tc,fc))
})();var state__11608__auto__ = (function (){var statearr_17033 = f__11607__auto__.call(null);(statearr_17033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___17034);
return statearr_17033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___17034,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11606__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto__){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto__){
return (function (state_17097){var state_val_17098 = (state_17097[(1)]);if((state_val_17098 === (7)))
{var inst_17093 = (state_17097[(2)]);var state_17097__$1 = state_17097;var statearr_17099_17115 = state_17097__$1;(statearr_17099_17115[(2)] = inst_17093);
(statearr_17099_17115[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17098 === (6)))
{var inst_17083 = (state_17097[(7)]);var inst_17086 = (state_17097[(8)]);var inst_17090 = f.call(null,inst_17083,inst_17086);var inst_17083__$1 = inst_17090;var state_17097__$1 = (function (){var statearr_17100 = state_17097;(statearr_17100[(7)] = inst_17083__$1);
return statearr_17100;
})();var statearr_17101_17116 = state_17097__$1;(statearr_17101_17116[(2)] = null);
(statearr_17101_17116[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17098 === (5)))
{var inst_17083 = (state_17097[(7)]);var state_17097__$1 = state_17097;var statearr_17102_17117 = state_17097__$1;(statearr_17102_17117[(2)] = inst_17083);
(statearr_17102_17117[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17098 === (4)))
{var inst_17086 = (state_17097[(8)]);var inst_17086__$1 = (state_17097[(2)]);var inst_17087 = (inst_17086__$1 == null);var state_17097__$1 = (function (){var statearr_17103 = state_17097;(statearr_17103[(8)] = inst_17086__$1);
return statearr_17103;
})();if(cljs.core.truth_(inst_17087))
{var statearr_17104_17118 = state_17097__$1;(statearr_17104_17118[(1)] = (5));
} else
{var statearr_17105_17119 = state_17097__$1;(statearr_17105_17119[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17098 === (3)))
{var inst_17095 = (state_17097[(2)]);var state_17097__$1 = state_17097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17097__$1,inst_17095);
} else
{if((state_val_17098 === (2)))
{var state_17097__$1 = state_17097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17097__$1,(4),ch);
} else
{if((state_val_17098 === (1)))
{var inst_17083 = init;var state_17097__$1 = (function (){var statearr_17106 = state_17097;(statearr_17106[(7)] = inst_17083);
return statearr_17106;
})();var statearr_17107_17120 = state_17097__$1;(statearr_17107_17120[(2)] = null);
(statearr_17107_17120[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__11606__auto__))
;return ((function (switch__11550__auto__,c__11606__auto__){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_17111 = [null,null,null,null,null,null,null,null,null];(statearr_17111[(0)] = state_machine__11551__auto__);
(statearr_17111[(1)] = (1));
return statearr_17111;
});
var state_machine__11551__auto____1 = (function (state_17097){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_17097);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e17112){if((e17112 instanceof Object))
{var ex__11554__auto__ = e17112;var statearr_17113_17121 = state_17097;(statearr_17113_17121[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17097);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17112;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17122 = state_17097;
state_17097 = G__17122;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_17097){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_17097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto__))
})();var state__11608__auto__ = (function (){var statearr_17114 = f__11607__auto__.call(null);(statearr_17114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto__);
return statearr_17114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto__))
);
return c__11606__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11606__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto__){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto__){
return (function (state_17196){var state_val_17197 = (state_17196[(1)]);if((state_val_17197 === (7)))
{var inst_17178 = (state_17196[(2)]);var state_17196__$1 = state_17196;var statearr_17198_17221 = state_17196__$1;(statearr_17198_17221[(2)] = inst_17178);
(statearr_17198_17221[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17197 === (1)))
{var inst_17172 = cljs.core.seq.call(null,coll);var inst_17173 = inst_17172;var state_17196__$1 = (function (){var statearr_17199 = state_17196;(statearr_17199[(7)] = inst_17173);
return statearr_17199;
})();var statearr_17200_17222 = state_17196__$1;(statearr_17200_17222[(2)] = null);
(statearr_17200_17222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17197 === (4)))
{var inst_17173 = (state_17196[(7)]);var inst_17176 = cljs.core.first.call(null,inst_17173);var state_17196__$1 = state_17196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17196__$1,(7),ch,inst_17176);
} else
{if((state_val_17197 === (13)))
{var inst_17190 = (state_17196[(2)]);var state_17196__$1 = state_17196;var statearr_17201_17223 = state_17196__$1;(statearr_17201_17223[(2)] = inst_17190);
(statearr_17201_17223[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17197 === (6)))
{var inst_17181 = (state_17196[(2)]);var state_17196__$1 = state_17196;if(cljs.core.truth_(inst_17181))
{var statearr_17202_17224 = state_17196__$1;(statearr_17202_17224[(1)] = (8));
} else
{var statearr_17203_17225 = state_17196__$1;(statearr_17203_17225[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17197 === (3)))
{var inst_17194 = (state_17196[(2)]);var state_17196__$1 = state_17196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17196__$1,inst_17194);
} else
{if((state_val_17197 === (12)))
{var state_17196__$1 = state_17196;var statearr_17204_17226 = state_17196__$1;(statearr_17204_17226[(2)] = null);
(statearr_17204_17226[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17197 === (2)))
{var inst_17173 = (state_17196[(7)]);var state_17196__$1 = state_17196;if(cljs.core.truth_(inst_17173))
{var statearr_17205_17227 = state_17196__$1;(statearr_17205_17227[(1)] = (4));
} else
{var statearr_17206_17228 = state_17196__$1;(statearr_17206_17228[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17197 === (11)))
{var inst_17187 = cljs.core.async.close_BANG_.call(null,ch);var state_17196__$1 = state_17196;var statearr_17207_17229 = state_17196__$1;(statearr_17207_17229[(2)] = inst_17187);
(statearr_17207_17229[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17197 === (9)))
{var state_17196__$1 = state_17196;if(cljs.core.truth_(close_QMARK_))
{var statearr_17208_17230 = state_17196__$1;(statearr_17208_17230[(1)] = (11));
} else
{var statearr_17209_17231 = state_17196__$1;(statearr_17209_17231[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17197 === (5)))
{var inst_17173 = (state_17196[(7)]);var state_17196__$1 = state_17196;var statearr_17210_17232 = state_17196__$1;(statearr_17210_17232[(2)] = inst_17173);
(statearr_17210_17232[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17197 === (10)))
{var inst_17192 = (state_17196[(2)]);var state_17196__$1 = state_17196;var statearr_17211_17233 = state_17196__$1;(statearr_17211_17233[(2)] = inst_17192);
(statearr_17211_17233[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17197 === (8)))
{var inst_17173 = (state_17196[(7)]);var inst_17183 = cljs.core.next.call(null,inst_17173);var inst_17173__$1 = inst_17183;var state_17196__$1 = (function (){var statearr_17212 = state_17196;(statearr_17212[(7)] = inst_17173__$1);
return statearr_17212;
})();var statearr_17213_17234 = state_17196__$1;(statearr_17213_17234[(2)] = null);
(statearr_17213_17234[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto__))
;return ((function (switch__11550__auto__,c__11606__auto__){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_17217 = [null,null,null,null,null,null,null,null];(statearr_17217[(0)] = state_machine__11551__auto__);
(statearr_17217[(1)] = (1));
return statearr_17217;
});
var state_machine__11551__auto____1 = (function (state_17196){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_17196);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e17218){if((e17218 instanceof Object))
{var ex__11554__auto__ = e17218;var statearr_17219_17235 = state_17196;(statearr_17219_17235[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17196);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17218;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17236 = state_17196;
state_17196 = G__17236;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_17196){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_17196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto__))
})();var state__11608__auto__ = (function (){var statearr_17220 = f__11607__auto__.call(null);(statearr_17220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto__);
return statearr_17220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto__))
);
return c__11606__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj17238 = {};return obj17238;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8724__auto__ = _;if(and__8724__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8724__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__9373__auto__ = (((_ == null))?null:_);return (function (){var or__8736__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17240 = {};return obj17240;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8724__auto__ = m;if(and__8724__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8724__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__9373__auto__ = (((m == null))?null:m);return (function (){var or__8736__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8724__auto__ = m;if(and__8724__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8724__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__9373__auto__ = (((m == null))?null:m);return (function (){var or__8736__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8724__auto__ = m;if(and__8724__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8724__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__9373__auto__ = (((m == null))?null:m);return (function (){var or__8736__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17462 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17462 = (function (cs,ch,mult,meta17463){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17463 = meta17463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17462.cljs$lang$type = true;
cljs.core.async.t17462.cljs$lang$ctorStr = "cljs.core.async/t17462";
cljs.core.async.t17462.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write.call(null,writer__9314__auto__,"cljs.core.async/t17462");
});})(cs))
;
cljs.core.async.t17462.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17462.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17462.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17462.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17462.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17462.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17464){var self__ = this;
var _17464__$1 = this;return self__.meta17463;
});})(cs))
;
cljs.core.async.t17462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17464,meta17463__$1){var self__ = this;
var _17464__$1 = this;return (new cljs.core.async.t17462(self__.cs,self__.ch,self__.mult,meta17463__$1));
});})(cs))
;
cljs.core.async.__GT_t17462 = ((function (cs){
return (function __GT_t17462(cs__$1,ch__$1,mult__$1,meta17463){return (new cljs.core.async.t17462(cs__$1,ch__$1,mult__$1,meta17463));
});})(cs))
;
}
return (new cljs.core.async.t17462(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11606__auto___17683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___17683,cs,m,dchan,dctr,done){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___17683,cs,m,dchan,dctr,done){
return (function (state_17595){var state_val_17596 = (state_17595[(1)]);if((state_val_17596 === (7)))
{var inst_17591 = (state_17595[(2)]);var state_17595__$1 = state_17595;var statearr_17597_17684 = state_17595__$1;(statearr_17597_17684[(2)] = inst_17591);
(statearr_17597_17684[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (20)))
{var inst_17496 = (state_17595[(7)]);var inst_17506 = cljs.core.first.call(null,inst_17496);var inst_17507 = cljs.core.nth.call(null,inst_17506,(0),null);var inst_17508 = cljs.core.nth.call(null,inst_17506,(1),null);var state_17595__$1 = (function (){var statearr_17598 = state_17595;(statearr_17598[(8)] = inst_17507);
return statearr_17598;
})();if(cljs.core.truth_(inst_17508))
{var statearr_17599_17685 = state_17595__$1;(statearr_17599_17685[(1)] = (22));
} else
{var statearr_17600_17686 = state_17595__$1;(statearr_17600_17686[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (27)))
{var inst_17543 = (state_17595[(9)]);var inst_17538 = (state_17595[(10)]);var inst_17536 = (state_17595[(11)]);var inst_17467 = (state_17595[(12)]);var inst_17543__$1 = cljs.core._nth.call(null,inst_17536,inst_17538);var inst_17544 = cljs.core.async.put_BANG_.call(null,inst_17543__$1,inst_17467,done);var state_17595__$1 = (function (){var statearr_17601 = state_17595;(statearr_17601[(9)] = inst_17543__$1);
return statearr_17601;
})();if(cljs.core.truth_(inst_17544))
{var statearr_17602_17687 = state_17595__$1;(statearr_17602_17687[(1)] = (30));
} else
{var statearr_17603_17688 = state_17595__$1;(statearr_17603_17688[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (1)))
{var state_17595__$1 = state_17595;var statearr_17604_17689 = state_17595__$1;(statearr_17604_17689[(2)] = null);
(statearr_17604_17689[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (24)))
{var inst_17496 = (state_17595[(7)]);var inst_17513 = (state_17595[(2)]);var inst_17514 = cljs.core.next.call(null,inst_17496);var inst_17476 = inst_17514;var inst_17477 = null;var inst_17478 = (0);var inst_17479 = (0);var state_17595__$1 = (function (){var statearr_17605 = state_17595;(statearr_17605[(13)] = inst_17478);
(statearr_17605[(14)] = inst_17477);
(statearr_17605[(15)] = inst_17479);
(statearr_17605[(16)] = inst_17476);
(statearr_17605[(17)] = inst_17513);
return statearr_17605;
})();var statearr_17606_17690 = state_17595__$1;(statearr_17606_17690[(2)] = null);
(statearr_17606_17690[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (39)))
{var state_17595__$1 = state_17595;var statearr_17610_17691 = state_17595__$1;(statearr_17610_17691[(2)] = null);
(statearr_17610_17691[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (4)))
{var inst_17467 = (state_17595[(12)]);var inst_17467__$1 = (state_17595[(2)]);var inst_17468 = (inst_17467__$1 == null);var state_17595__$1 = (function (){var statearr_17611 = state_17595;(statearr_17611[(12)] = inst_17467__$1);
return statearr_17611;
})();if(cljs.core.truth_(inst_17468))
{var statearr_17612_17692 = state_17595__$1;(statearr_17612_17692[(1)] = (5));
} else
{var statearr_17613_17693 = state_17595__$1;(statearr_17613_17693[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (15)))
{var inst_17478 = (state_17595[(13)]);var inst_17477 = (state_17595[(14)]);var inst_17479 = (state_17595[(15)]);var inst_17476 = (state_17595[(16)]);var inst_17492 = (state_17595[(2)]);var inst_17493 = (inst_17479 + (1));var tmp17607 = inst_17478;var tmp17608 = inst_17477;var tmp17609 = inst_17476;var inst_17476__$1 = tmp17609;var inst_17477__$1 = tmp17608;var inst_17478__$1 = tmp17607;var inst_17479__$1 = inst_17493;var state_17595__$1 = (function (){var statearr_17614 = state_17595;(statearr_17614[(13)] = inst_17478__$1);
(statearr_17614[(18)] = inst_17492);
(statearr_17614[(14)] = inst_17477__$1);
(statearr_17614[(15)] = inst_17479__$1);
(statearr_17614[(16)] = inst_17476__$1);
return statearr_17614;
})();var statearr_17615_17694 = state_17595__$1;(statearr_17615_17694[(2)] = null);
(statearr_17615_17694[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (21)))
{var inst_17517 = (state_17595[(2)]);var state_17595__$1 = state_17595;var statearr_17619_17695 = state_17595__$1;(statearr_17619_17695[(2)] = inst_17517);
(statearr_17619_17695[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (31)))
{var inst_17543 = (state_17595[(9)]);var inst_17547 = done.call(null,null);var inst_17548 = cljs.core.async.untap_STAR_.call(null,m,inst_17543);var state_17595__$1 = (function (){var statearr_17620 = state_17595;(statearr_17620[(19)] = inst_17547);
return statearr_17620;
})();var statearr_17621_17696 = state_17595__$1;(statearr_17621_17696[(2)] = inst_17548);
(statearr_17621_17696[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (32)))
{var inst_17538 = (state_17595[(10)]);var inst_17535 = (state_17595[(20)]);var inst_17536 = (state_17595[(11)]);var inst_17537 = (state_17595[(21)]);var inst_17550 = (state_17595[(2)]);var inst_17551 = (inst_17538 + (1));var tmp17616 = inst_17535;var tmp17617 = inst_17536;var tmp17618 = inst_17537;var inst_17535__$1 = tmp17616;var inst_17536__$1 = tmp17617;var inst_17537__$1 = tmp17618;var inst_17538__$1 = inst_17551;var state_17595__$1 = (function (){var statearr_17622 = state_17595;(statearr_17622[(22)] = inst_17550);
(statearr_17622[(10)] = inst_17538__$1);
(statearr_17622[(20)] = inst_17535__$1);
(statearr_17622[(11)] = inst_17536__$1);
(statearr_17622[(21)] = inst_17537__$1);
return statearr_17622;
})();var statearr_17623_17697 = state_17595__$1;(statearr_17623_17697[(2)] = null);
(statearr_17623_17697[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (40)))
{var inst_17563 = (state_17595[(23)]);var inst_17567 = done.call(null,null);var inst_17568 = cljs.core.async.untap_STAR_.call(null,m,inst_17563);var state_17595__$1 = (function (){var statearr_17624 = state_17595;(statearr_17624[(24)] = inst_17567);
return statearr_17624;
})();var statearr_17625_17698 = state_17595__$1;(statearr_17625_17698[(2)] = inst_17568);
(statearr_17625_17698[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (33)))
{var inst_17554 = (state_17595[(25)]);var inst_17556 = cljs.core.chunked_seq_QMARK_.call(null,inst_17554);var state_17595__$1 = state_17595;if(inst_17556)
{var statearr_17626_17699 = state_17595__$1;(statearr_17626_17699[(1)] = (36));
} else
{var statearr_17627_17700 = state_17595__$1;(statearr_17627_17700[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (13)))
{var inst_17486 = (state_17595[(26)]);var inst_17489 = cljs.core.async.close_BANG_.call(null,inst_17486);var state_17595__$1 = state_17595;var statearr_17628_17701 = state_17595__$1;(statearr_17628_17701[(2)] = inst_17489);
(statearr_17628_17701[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (22)))
{var inst_17507 = (state_17595[(8)]);var inst_17510 = cljs.core.async.close_BANG_.call(null,inst_17507);var state_17595__$1 = state_17595;var statearr_17629_17702 = state_17595__$1;(statearr_17629_17702[(2)] = inst_17510);
(statearr_17629_17702[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (36)))
{var inst_17554 = (state_17595[(25)]);var inst_17558 = cljs.core.chunk_first.call(null,inst_17554);var inst_17559 = cljs.core.chunk_rest.call(null,inst_17554);var inst_17560 = cljs.core.count.call(null,inst_17558);var inst_17535 = inst_17559;var inst_17536 = inst_17558;var inst_17537 = inst_17560;var inst_17538 = (0);var state_17595__$1 = (function (){var statearr_17630 = state_17595;(statearr_17630[(10)] = inst_17538);
(statearr_17630[(20)] = inst_17535);
(statearr_17630[(11)] = inst_17536);
(statearr_17630[(21)] = inst_17537);
return statearr_17630;
})();var statearr_17631_17703 = state_17595__$1;(statearr_17631_17703[(2)] = null);
(statearr_17631_17703[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (41)))
{var inst_17554 = (state_17595[(25)]);var inst_17570 = (state_17595[(2)]);var inst_17571 = cljs.core.next.call(null,inst_17554);var inst_17535 = inst_17571;var inst_17536 = null;var inst_17537 = (0);var inst_17538 = (0);var state_17595__$1 = (function (){var statearr_17632 = state_17595;(statearr_17632[(27)] = inst_17570);
(statearr_17632[(10)] = inst_17538);
(statearr_17632[(20)] = inst_17535);
(statearr_17632[(11)] = inst_17536);
(statearr_17632[(21)] = inst_17537);
return statearr_17632;
})();var statearr_17633_17704 = state_17595__$1;(statearr_17633_17704[(2)] = null);
(statearr_17633_17704[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (43)))
{var state_17595__$1 = state_17595;var statearr_17634_17705 = state_17595__$1;(statearr_17634_17705[(2)] = null);
(statearr_17634_17705[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (29)))
{var inst_17579 = (state_17595[(2)]);var state_17595__$1 = state_17595;var statearr_17635_17706 = state_17595__$1;(statearr_17635_17706[(2)] = inst_17579);
(statearr_17635_17706[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (44)))
{var inst_17588 = (state_17595[(2)]);var state_17595__$1 = (function (){var statearr_17636 = state_17595;(statearr_17636[(28)] = inst_17588);
return statearr_17636;
})();var statearr_17637_17707 = state_17595__$1;(statearr_17637_17707[(2)] = null);
(statearr_17637_17707[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (6)))
{var inst_17527 = (state_17595[(29)]);var inst_17526 = cljs.core.deref.call(null,cs);var inst_17527__$1 = cljs.core.keys.call(null,inst_17526);var inst_17528 = cljs.core.count.call(null,inst_17527__$1);var inst_17529 = cljs.core.reset_BANG_.call(null,dctr,inst_17528);var inst_17534 = cljs.core.seq.call(null,inst_17527__$1);var inst_17535 = inst_17534;var inst_17536 = null;var inst_17537 = (0);var inst_17538 = (0);var state_17595__$1 = (function (){var statearr_17638 = state_17595;(statearr_17638[(30)] = inst_17529);
(statearr_17638[(29)] = inst_17527__$1);
(statearr_17638[(10)] = inst_17538);
(statearr_17638[(20)] = inst_17535);
(statearr_17638[(11)] = inst_17536);
(statearr_17638[(21)] = inst_17537);
return statearr_17638;
})();var statearr_17639_17708 = state_17595__$1;(statearr_17639_17708[(2)] = null);
(statearr_17639_17708[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (28)))
{var inst_17554 = (state_17595[(25)]);var inst_17535 = (state_17595[(20)]);var inst_17554__$1 = cljs.core.seq.call(null,inst_17535);var state_17595__$1 = (function (){var statearr_17640 = state_17595;(statearr_17640[(25)] = inst_17554__$1);
return statearr_17640;
})();if(inst_17554__$1)
{var statearr_17641_17709 = state_17595__$1;(statearr_17641_17709[(1)] = (33));
} else
{var statearr_17642_17710 = state_17595__$1;(statearr_17642_17710[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (25)))
{var inst_17538 = (state_17595[(10)]);var inst_17537 = (state_17595[(21)]);var inst_17540 = (inst_17538 < inst_17537);var inst_17541 = inst_17540;var state_17595__$1 = state_17595;if(cljs.core.truth_(inst_17541))
{var statearr_17643_17711 = state_17595__$1;(statearr_17643_17711[(1)] = (27));
} else
{var statearr_17644_17712 = state_17595__$1;(statearr_17644_17712[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (34)))
{var state_17595__$1 = state_17595;var statearr_17645_17713 = state_17595__$1;(statearr_17645_17713[(2)] = null);
(statearr_17645_17713[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (17)))
{var state_17595__$1 = state_17595;var statearr_17646_17714 = state_17595__$1;(statearr_17646_17714[(2)] = null);
(statearr_17646_17714[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (3)))
{var inst_17593 = (state_17595[(2)]);var state_17595__$1 = state_17595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17595__$1,inst_17593);
} else
{if((state_val_17596 === (12)))
{var inst_17522 = (state_17595[(2)]);var state_17595__$1 = state_17595;var statearr_17647_17715 = state_17595__$1;(statearr_17647_17715[(2)] = inst_17522);
(statearr_17647_17715[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (2)))
{var state_17595__$1 = state_17595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17595__$1,(4),ch);
} else
{if((state_val_17596 === (23)))
{var state_17595__$1 = state_17595;var statearr_17648_17716 = state_17595__$1;(statearr_17648_17716[(2)] = null);
(statearr_17648_17716[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (35)))
{var inst_17577 = (state_17595[(2)]);var state_17595__$1 = state_17595;var statearr_17649_17717 = state_17595__$1;(statearr_17649_17717[(2)] = inst_17577);
(statearr_17649_17717[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (19)))
{var inst_17496 = (state_17595[(7)]);var inst_17500 = cljs.core.chunk_first.call(null,inst_17496);var inst_17501 = cljs.core.chunk_rest.call(null,inst_17496);var inst_17502 = cljs.core.count.call(null,inst_17500);var inst_17476 = inst_17501;var inst_17477 = inst_17500;var inst_17478 = inst_17502;var inst_17479 = (0);var state_17595__$1 = (function (){var statearr_17650 = state_17595;(statearr_17650[(13)] = inst_17478);
(statearr_17650[(14)] = inst_17477);
(statearr_17650[(15)] = inst_17479);
(statearr_17650[(16)] = inst_17476);
return statearr_17650;
})();var statearr_17651_17718 = state_17595__$1;(statearr_17651_17718[(2)] = null);
(statearr_17651_17718[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (11)))
{var inst_17476 = (state_17595[(16)]);var inst_17496 = (state_17595[(7)]);var inst_17496__$1 = cljs.core.seq.call(null,inst_17476);var state_17595__$1 = (function (){var statearr_17652 = state_17595;(statearr_17652[(7)] = inst_17496__$1);
return statearr_17652;
})();if(inst_17496__$1)
{var statearr_17653_17719 = state_17595__$1;(statearr_17653_17719[(1)] = (16));
} else
{var statearr_17654_17720 = state_17595__$1;(statearr_17654_17720[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (9)))
{var inst_17524 = (state_17595[(2)]);var state_17595__$1 = state_17595;var statearr_17655_17721 = state_17595__$1;(statearr_17655_17721[(2)] = inst_17524);
(statearr_17655_17721[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (5)))
{var inst_17474 = cljs.core.deref.call(null,cs);var inst_17475 = cljs.core.seq.call(null,inst_17474);var inst_17476 = inst_17475;var inst_17477 = null;var inst_17478 = (0);var inst_17479 = (0);var state_17595__$1 = (function (){var statearr_17656 = state_17595;(statearr_17656[(13)] = inst_17478);
(statearr_17656[(14)] = inst_17477);
(statearr_17656[(15)] = inst_17479);
(statearr_17656[(16)] = inst_17476);
return statearr_17656;
})();var statearr_17657_17722 = state_17595__$1;(statearr_17657_17722[(2)] = null);
(statearr_17657_17722[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (14)))
{var state_17595__$1 = state_17595;var statearr_17658_17723 = state_17595__$1;(statearr_17658_17723[(2)] = null);
(statearr_17658_17723[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (45)))
{var inst_17585 = (state_17595[(2)]);var state_17595__$1 = state_17595;var statearr_17659_17724 = state_17595__$1;(statearr_17659_17724[(2)] = inst_17585);
(statearr_17659_17724[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (26)))
{var inst_17527 = (state_17595[(29)]);var inst_17581 = (state_17595[(2)]);var inst_17582 = cljs.core.seq.call(null,inst_17527);var state_17595__$1 = (function (){var statearr_17660 = state_17595;(statearr_17660[(31)] = inst_17581);
return statearr_17660;
})();if(inst_17582)
{var statearr_17661_17725 = state_17595__$1;(statearr_17661_17725[(1)] = (42));
} else
{var statearr_17662_17726 = state_17595__$1;(statearr_17662_17726[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (16)))
{var inst_17496 = (state_17595[(7)]);var inst_17498 = cljs.core.chunked_seq_QMARK_.call(null,inst_17496);var state_17595__$1 = state_17595;if(inst_17498)
{var statearr_17663_17727 = state_17595__$1;(statearr_17663_17727[(1)] = (19));
} else
{var statearr_17664_17728 = state_17595__$1;(statearr_17664_17728[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (38)))
{var inst_17574 = (state_17595[(2)]);var state_17595__$1 = state_17595;var statearr_17665_17729 = state_17595__$1;(statearr_17665_17729[(2)] = inst_17574);
(statearr_17665_17729[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (30)))
{var state_17595__$1 = state_17595;var statearr_17666_17730 = state_17595__$1;(statearr_17666_17730[(2)] = null);
(statearr_17666_17730[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (10)))
{var inst_17477 = (state_17595[(14)]);var inst_17479 = (state_17595[(15)]);var inst_17485 = cljs.core._nth.call(null,inst_17477,inst_17479);var inst_17486 = cljs.core.nth.call(null,inst_17485,(0),null);var inst_17487 = cljs.core.nth.call(null,inst_17485,(1),null);var state_17595__$1 = (function (){var statearr_17667 = state_17595;(statearr_17667[(26)] = inst_17486);
return statearr_17667;
})();if(cljs.core.truth_(inst_17487))
{var statearr_17668_17731 = state_17595__$1;(statearr_17668_17731[(1)] = (13));
} else
{var statearr_17669_17732 = state_17595__$1;(statearr_17669_17732[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (18)))
{var inst_17520 = (state_17595[(2)]);var state_17595__$1 = state_17595;var statearr_17670_17733 = state_17595__$1;(statearr_17670_17733[(2)] = inst_17520);
(statearr_17670_17733[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (42)))
{var state_17595__$1 = state_17595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17595__$1,(45),dchan);
} else
{if((state_val_17596 === (37)))
{var inst_17563 = (state_17595[(23)]);var inst_17554 = (state_17595[(25)]);var inst_17467 = (state_17595[(12)]);var inst_17563__$1 = cljs.core.first.call(null,inst_17554);var inst_17564 = cljs.core.async.put_BANG_.call(null,inst_17563__$1,inst_17467,done);var state_17595__$1 = (function (){var statearr_17671 = state_17595;(statearr_17671[(23)] = inst_17563__$1);
return statearr_17671;
})();if(cljs.core.truth_(inst_17564))
{var statearr_17672_17734 = state_17595__$1;(statearr_17672_17734[(1)] = (39));
} else
{var statearr_17673_17735 = state_17595__$1;(statearr_17673_17735[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17596 === (8)))
{var inst_17478 = (state_17595[(13)]);var inst_17479 = (state_17595[(15)]);var inst_17481 = (inst_17479 < inst_17478);var inst_17482 = inst_17481;var state_17595__$1 = state_17595;if(cljs.core.truth_(inst_17482))
{var statearr_17674_17736 = state_17595__$1;(statearr_17674_17736[(1)] = (10));
} else
{var statearr_17675_17737 = state_17595__$1;(statearr_17675_17737[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___17683,cs,m,dchan,dctr,done))
;return ((function (switch__11550__auto__,c__11606__auto___17683,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_17679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17679[(0)] = state_machine__11551__auto__);
(statearr_17679[(1)] = (1));
return statearr_17679;
});
var state_machine__11551__auto____1 = (function (state_17595){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_17595);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e17680){if((e17680 instanceof Object))
{var ex__11554__auto__ = e17680;var statearr_17681_17738 = state_17595;(statearr_17681_17738[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17595);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17680;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17739 = state_17595;
state_17595 = G__17739;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_17595){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_17595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___17683,cs,m,dchan,dctr,done))
})();var state__11608__auto__ = (function (){var statearr_17682 = f__11607__auto__.call(null);(statearr_17682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___17683);
return statearr_17682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___17683,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj17741 = {};return obj17741;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8724__auto__ = m;if(and__8724__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8724__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__9373__auto__ = (((m == null))?null:m);return (function (){var or__8736__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8724__auto__ = m;if(and__8724__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8724__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__9373__auto__ = (((m == null))?null:m);return (function (){var or__8736__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8724__auto__ = m;if(and__8724__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8724__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__9373__auto__ = (((m == null))?null:m);return (function (){var or__8736__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8724__auto__ = m;if(and__8724__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8724__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__9373__auto__ = (((m == null))?null:m);return (function (){var or__8736__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8724__auto__ = m;if(and__8724__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8724__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__9373__auto__ = (((m == null))?null:m);return (function (){var or__8736__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__17742){var map__17747 = p__17742;var map__17747__$1 = ((cljs.core.seq_QMARK_.call(null,map__17747))?cljs.core.apply.call(null,cljs.core.hash_map,map__17747):map__17747);var opts = map__17747__$1;var statearr_17748_17751 = state;(statearr_17748_17751[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__17747,map__17747__$1,opts){
return (function (val){var statearr_17749_17752 = state;(statearr_17749_17752[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17747,map__17747__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_17750_17753 = state;(statearr_17750_17753[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__17742 = null;if (arguments.length > 3) {
  p__17742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__17742);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__17754){
var state = cljs.core.first(arglist__17754);
arglist__17754 = cljs.core.next(arglist__17754);
var cont_block = cljs.core.first(arglist__17754);
arglist__17754 = cljs.core.next(arglist__17754);
var ports = cljs.core.first(arglist__17754);
var p__17742 = cljs.core.rest(arglist__17754);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__17742);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t17874 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17874 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17875){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17875 = meta17875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17874.cljs$lang$type = true;
cljs.core.async.t17874.cljs$lang$ctorStr = "cljs.core.async/t17874";
cljs.core.async.t17874.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write.call(null,writer__9314__auto__,"cljs.core.async/t17874");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17874.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17874.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17874.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17874.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17874.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17874.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17874.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17876){var self__ = this;
var _17876__$1 = this;return self__.meta17875;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17876,meta17875__$1){var self__ = this;
var _17876__$1 = this;return (new cljs.core.async.t17874(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17875__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17874 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17874(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17875){return (new cljs.core.async.t17874(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17875));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17874(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11606__auto___17993 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___17993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___17993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17946){var state_val_17947 = (state_17946[(1)]);if((state_val_17947 === (7)))
{var inst_17890 = (state_17946[(7)]);var inst_17895 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17890);var state_17946__$1 = state_17946;var statearr_17948_17994 = state_17946__$1;(statearr_17948_17994[(2)] = inst_17895);
(statearr_17948_17994[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (20)))
{var inst_17905 = (state_17946[(8)]);var state_17946__$1 = state_17946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17946__$1,(23),out,inst_17905);
} else
{if((state_val_17947 === (1)))
{var inst_17880 = (state_17946[(9)]);var inst_17880__$1 = calc_state.call(null);var inst_17881 = cljs.core.seq_QMARK_.call(null,inst_17880__$1);var state_17946__$1 = (function (){var statearr_17949 = state_17946;(statearr_17949[(9)] = inst_17880__$1);
return statearr_17949;
})();if(inst_17881)
{var statearr_17950_17995 = state_17946__$1;(statearr_17950_17995[(1)] = (2));
} else
{var statearr_17951_17996 = state_17946__$1;(statearr_17951_17996[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (24)))
{var inst_17898 = (state_17946[(10)]);var inst_17890 = inst_17898;var state_17946__$1 = (function (){var statearr_17952 = state_17946;(statearr_17952[(7)] = inst_17890);
return statearr_17952;
})();var statearr_17953_17997 = state_17946__$1;(statearr_17953_17997[(2)] = null);
(statearr_17953_17997[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (4)))
{var inst_17880 = (state_17946[(9)]);var inst_17886 = (state_17946[(2)]);var inst_17887 = cljs.core.get.call(null,inst_17886,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17888 = cljs.core.get.call(null,inst_17886,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17889 = cljs.core.get.call(null,inst_17886,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_17890 = inst_17880;var state_17946__$1 = (function (){var statearr_17954 = state_17946;(statearr_17954[(11)] = inst_17889);
(statearr_17954[(7)] = inst_17890);
(statearr_17954[(12)] = inst_17888);
(statearr_17954[(13)] = inst_17887);
return statearr_17954;
})();var statearr_17955_17998 = state_17946__$1;(statearr_17955_17998[(2)] = null);
(statearr_17955_17998[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (15)))
{var state_17946__$1 = state_17946;var statearr_17956_17999 = state_17946__$1;(statearr_17956_17999[(2)] = null);
(statearr_17956_17999[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (21)))
{var inst_17898 = (state_17946[(10)]);var inst_17890 = inst_17898;var state_17946__$1 = (function (){var statearr_17957 = state_17946;(statearr_17957[(7)] = inst_17890);
return statearr_17957;
})();var statearr_17958_18000 = state_17946__$1;(statearr_17958_18000[(2)] = null);
(statearr_17958_18000[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (13)))
{var inst_17942 = (state_17946[(2)]);var state_17946__$1 = state_17946;var statearr_17959_18001 = state_17946__$1;(statearr_17959_18001[(2)] = inst_17942);
(statearr_17959_18001[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (22)))
{var inst_17940 = (state_17946[(2)]);var state_17946__$1 = state_17946;var statearr_17960_18002 = state_17946__$1;(statearr_17960_18002[(2)] = inst_17940);
(statearr_17960_18002[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (6)))
{var inst_17944 = (state_17946[(2)]);var state_17946__$1 = state_17946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17946__$1,inst_17944);
} else
{if((state_val_17947 === (25)))
{var state_17946__$1 = state_17946;var statearr_17961_18003 = state_17946__$1;(statearr_17961_18003[(2)] = null);
(statearr_17961_18003[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (17)))
{var inst_17920 = (state_17946[(14)]);var state_17946__$1 = state_17946;var statearr_17962_18004 = state_17946__$1;(statearr_17962_18004[(2)] = inst_17920);
(statearr_17962_18004[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (3)))
{var inst_17880 = (state_17946[(9)]);var state_17946__$1 = state_17946;var statearr_17963_18005 = state_17946__$1;(statearr_17963_18005[(2)] = inst_17880);
(statearr_17963_18005[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (12)))
{var inst_17906 = (state_17946[(15)]);var inst_17920 = (state_17946[(14)]);var inst_17901 = (state_17946[(16)]);var inst_17920__$1 = inst_17901.call(null,inst_17906);var state_17946__$1 = (function (){var statearr_17964 = state_17946;(statearr_17964[(14)] = inst_17920__$1);
return statearr_17964;
})();if(cljs.core.truth_(inst_17920__$1))
{var statearr_17965_18006 = state_17946__$1;(statearr_17965_18006[(1)] = (17));
} else
{var statearr_17966_18007 = state_17946__$1;(statearr_17966_18007[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (2)))
{var inst_17880 = (state_17946[(9)]);var inst_17883 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17880);var state_17946__$1 = state_17946;var statearr_17967_18008 = state_17946__$1;(statearr_17967_18008[(2)] = inst_17883);
(statearr_17967_18008[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (23)))
{var inst_17931 = (state_17946[(2)]);var state_17946__$1 = state_17946;if(cljs.core.truth_(inst_17931))
{var statearr_17968_18009 = state_17946__$1;(statearr_17968_18009[(1)] = (24));
} else
{var statearr_17969_18010 = state_17946__$1;(statearr_17969_18010[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (19)))
{var inst_17928 = (state_17946[(2)]);var state_17946__$1 = state_17946;if(cljs.core.truth_(inst_17928))
{var statearr_17970_18011 = state_17946__$1;(statearr_17970_18011[(1)] = (20));
} else
{var statearr_17971_18012 = state_17946__$1;(statearr_17971_18012[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (11)))
{var inst_17905 = (state_17946[(8)]);var inst_17911 = (inst_17905 == null);var state_17946__$1 = state_17946;if(cljs.core.truth_(inst_17911))
{var statearr_17972_18013 = state_17946__$1;(statearr_17972_18013[(1)] = (14));
} else
{var statearr_17973_18014 = state_17946__$1;(statearr_17973_18014[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (9)))
{var inst_17898 = (state_17946[(10)]);var inst_17898__$1 = (state_17946[(2)]);var inst_17899 = cljs.core.get.call(null,inst_17898__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17900 = cljs.core.get.call(null,inst_17898__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17901 = cljs.core.get.call(null,inst_17898__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_17946__$1 = (function (){var statearr_17974 = state_17946;(statearr_17974[(10)] = inst_17898__$1);
(statearr_17974[(17)] = inst_17900);
(statearr_17974[(16)] = inst_17901);
return statearr_17974;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_17946__$1,(10),inst_17899);
} else
{if((state_val_17947 === (5)))
{var inst_17890 = (state_17946[(7)]);var inst_17893 = cljs.core.seq_QMARK_.call(null,inst_17890);var state_17946__$1 = state_17946;if(inst_17893)
{var statearr_17975_18015 = state_17946__$1;(statearr_17975_18015[(1)] = (7));
} else
{var statearr_17976_18016 = state_17946__$1;(statearr_17976_18016[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (14)))
{var inst_17906 = (state_17946[(15)]);var inst_17913 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17906);var state_17946__$1 = state_17946;var statearr_17977_18017 = state_17946__$1;(statearr_17977_18017[(2)] = inst_17913);
(statearr_17977_18017[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (26)))
{var inst_17936 = (state_17946[(2)]);var state_17946__$1 = state_17946;var statearr_17978_18018 = state_17946__$1;(statearr_17978_18018[(2)] = inst_17936);
(statearr_17978_18018[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (16)))
{var inst_17916 = (state_17946[(2)]);var inst_17917 = calc_state.call(null);var inst_17890 = inst_17917;var state_17946__$1 = (function (){var statearr_17979 = state_17946;(statearr_17979[(18)] = inst_17916);
(statearr_17979[(7)] = inst_17890);
return statearr_17979;
})();var statearr_17980_18019 = state_17946__$1;(statearr_17980_18019[(2)] = null);
(statearr_17980_18019[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (10)))
{var inst_17906 = (state_17946[(15)]);var inst_17905 = (state_17946[(8)]);var inst_17904 = (state_17946[(2)]);var inst_17905__$1 = cljs.core.nth.call(null,inst_17904,(0),null);var inst_17906__$1 = cljs.core.nth.call(null,inst_17904,(1),null);var inst_17907 = (inst_17905__$1 == null);var inst_17908 = cljs.core._EQ_.call(null,inst_17906__$1,change);var inst_17909 = (inst_17907) || (inst_17908);var state_17946__$1 = (function (){var statearr_17981 = state_17946;(statearr_17981[(15)] = inst_17906__$1);
(statearr_17981[(8)] = inst_17905__$1);
return statearr_17981;
})();if(cljs.core.truth_(inst_17909))
{var statearr_17982_18020 = state_17946__$1;(statearr_17982_18020[(1)] = (11));
} else
{var statearr_17983_18021 = state_17946__$1;(statearr_17983_18021[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (18)))
{var inst_17906 = (state_17946[(15)]);var inst_17900 = (state_17946[(17)]);var inst_17901 = (state_17946[(16)]);var inst_17923 = cljs.core.empty_QMARK_.call(null,inst_17901);var inst_17924 = inst_17900.call(null,inst_17906);var inst_17925 = cljs.core.not.call(null,inst_17924);var inst_17926 = (inst_17923) && (inst_17925);var state_17946__$1 = state_17946;var statearr_17984_18022 = state_17946__$1;(statearr_17984_18022[(2)] = inst_17926);
(statearr_17984_18022[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17947 === (8)))
{var inst_17890 = (state_17946[(7)]);var state_17946__$1 = state_17946;var statearr_17985_18023 = state_17946__$1;(statearr_17985_18023[(2)] = inst_17890);
(statearr_17985_18023[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___17993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11550__auto__,c__11606__auto___17993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_17989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17989[(0)] = state_machine__11551__auto__);
(statearr_17989[(1)] = (1));
return statearr_17989;
});
var state_machine__11551__auto____1 = (function (state_17946){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_17946);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e17990){if((e17990 instanceof Object))
{var ex__11554__auto__ = e17990;var statearr_17991_18024 = state_17946;(statearr_17991_18024[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17946);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17990;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18025 = state_17946;
state_17946 = G__18025;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_17946){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_17946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___17993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11608__auto__ = (function (){var statearr_17992 = f__11607__auto__.call(null);(statearr_17992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___17993);
return statearr_17992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___17993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj18027 = {};return obj18027;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8724__auto__ = p;if(and__8724__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8724__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__9373__auto__ = (((p == null))?null:p);return (function (){var or__8736__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8724__auto__ = p;if(and__8724__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8724__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__9373__auto__ = (((p == null))?null:p);return (function (){var or__8736__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8724__auto__ = p;if(and__8724__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8724__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__9373__auto__ = (((p == null))?null:p);return (function (){var or__8736__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8724__auto__ = p;if(and__8724__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8724__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__9373__auto__ = (((p == null))?null:p);return (function (){var or__8736__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9373__auto__)]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__8736__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8736__auto__,mults){
return (function (p1__18028_SHARP_){if(cljs.core.truth_(p1__18028_SHARP_.call(null,topic)))
{return p1__18028_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18028_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8736__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18151 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18151 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18152){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18152 = meta18152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18151.cljs$lang$type = true;
cljs.core.async.t18151.cljs$lang$ctorStr = "cljs.core.async/t18151";
cljs.core.async.t18151.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write.call(null,writer__9314__auto__,"cljs.core.async/t18151");
});})(mults,ensure_mult))
;
cljs.core.async.t18151.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18151.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18151.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18151.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18153){var self__ = this;
var _18153__$1 = this;return self__.meta18152;
});})(mults,ensure_mult))
;
cljs.core.async.t18151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18153,meta18152__$1){var self__ = this;
var _18153__$1 = this;return (new cljs.core.async.t18151(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18152__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18151 = ((function (mults,ensure_mult){
return (function __GT_t18151(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18152){return (new cljs.core.async.t18151(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18152));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18151(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11606__auto___18273 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___18273,mults,ensure_mult,p){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___18273,mults,ensure_mult,p){
return (function (state_18225){var state_val_18226 = (state_18225[(1)]);if((state_val_18226 === (7)))
{var inst_18221 = (state_18225[(2)]);var state_18225__$1 = state_18225;var statearr_18227_18274 = state_18225__$1;(statearr_18227_18274[(2)] = inst_18221);
(statearr_18227_18274[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (20)))
{var state_18225__$1 = state_18225;var statearr_18228_18275 = state_18225__$1;(statearr_18228_18275[(2)] = null);
(statearr_18228_18275[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (1)))
{var state_18225__$1 = state_18225;var statearr_18229_18276 = state_18225__$1;(statearr_18229_18276[(2)] = null);
(statearr_18229_18276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (24)))
{var inst_18204 = (state_18225[(7)]);var inst_18213 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18204);var state_18225__$1 = state_18225;var statearr_18230_18277 = state_18225__$1;(statearr_18230_18277[(2)] = inst_18213);
(statearr_18230_18277[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (4)))
{var inst_18156 = (state_18225[(8)]);var inst_18156__$1 = (state_18225[(2)]);var inst_18157 = (inst_18156__$1 == null);var state_18225__$1 = (function (){var statearr_18231 = state_18225;(statearr_18231[(8)] = inst_18156__$1);
return statearr_18231;
})();if(cljs.core.truth_(inst_18157))
{var statearr_18232_18278 = state_18225__$1;(statearr_18232_18278[(1)] = (5));
} else
{var statearr_18233_18279 = state_18225__$1;(statearr_18233_18279[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (15)))
{var inst_18198 = (state_18225[(2)]);var state_18225__$1 = state_18225;var statearr_18234_18280 = state_18225__$1;(statearr_18234_18280[(2)] = inst_18198);
(statearr_18234_18280[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (21)))
{var inst_18218 = (state_18225[(2)]);var state_18225__$1 = (function (){var statearr_18235 = state_18225;(statearr_18235[(9)] = inst_18218);
return statearr_18235;
})();var statearr_18236_18281 = state_18225__$1;(statearr_18236_18281[(2)] = null);
(statearr_18236_18281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (13)))
{var inst_18180 = (state_18225[(10)]);var inst_18182 = cljs.core.chunked_seq_QMARK_.call(null,inst_18180);var state_18225__$1 = state_18225;if(inst_18182)
{var statearr_18237_18282 = state_18225__$1;(statearr_18237_18282[(1)] = (16));
} else
{var statearr_18238_18283 = state_18225__$1;(statearr_18238_18283[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (22)))
{var inst_18210 = (state_18225[(2)]);var state_18225__$1 = state_18225;if(cljs.core.truth_(inst_18210))
{var statearr_18239_18284 = state_18225__$1;(statearr_18239_18284[(1)] = (23));
} else
{var statearr_18240_18285 = state_18225__$1;(statearr_18240_18285[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (6)))
{var inst_18204 = (state_18225[(7)]);var inst_18156 = (state_18225[(8)]);var inst_18206 = (state_18225[(11)]);var inst_18204__$1 = topic_fn.call(null,inst_18156);var inst_18205 = cljs.core.deref.call(null,mults);var inst_18206__$1 = cljs.core.get.call(null,inst_18205,inst_18204__$1);var state_18225__$1 = (function (){var statearr_18241 = state_18225;(statearr_18241[(7)] = inst_18204__$1);
(statearr_18241[(11)] = inst_18206__$1);
return statearr_18241;
})();if(cljs.core.truth_(inst_18206__$1))
{var statearr_18242_18286 = state_18225__$1;(statearr_18242_18286[(1)] = (19));
} else
{var statearr_18243_18287 = state_18225__$1;(statearr_18243_18287[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (25)))
{var inst_18215 = (state_18225[(2)]);var state_18225__$1 = state_18225;var statearr_18244_18288 = state_18225__$1;(statearr_18244_18288[(2)] = inst_18215);
(statearr_18244_18288[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (17)))
{var inst_18180 = (state_18225[(10)]);var inst_18189 = cljs.core.first.call(null,inst_18180);var inst_18190 = cljs.core.async.muxch_STAR_.call(null,inst_18189);var inst_18191 = cljs.core.async.close_BANG_.call(null,inst_18190);var inst_18192 = cljs.core.next.call(null,inst_18180);var inst_18166 = inst_18192;var inst_18167 = null;var inst_18168 = (0);var inst_18169 = (0);var state_18225__$1 = (function (){var statearr_18245 = state_18225;(statearr_18245[(12)] = inst_18169);
(statearr_18245[(13)] = inst_18167);
(statearr_18245[(14)] = inst_18191);
(statearr_18245[(15)] = inst_18168);
(statearr_18245[(16)] = inst_18166);
return statearr_18245;
})();var statearr_18246_18289 = state_18225__$1;(statearr_18246_18289[(2)] = null);
(statearr_18246_18289[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (3)))
{var inst_18223 = (state_18225[(2)]);var state_18225__$1 = state_18225;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18225__$1,inst_18223);
} else
{if((state_val_18226 === (12)))
{var inst_18200 = (state_18225[(2)]);var state_18225__$1 = state_18225;var statearr_18247_18290 = state_18225__$1;(statearr_18247_18290[(2)] = inst_18200);
(statearr_18247_18290[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (2)))
{var state_18225__$1 = state_18225;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18225__$1,(4),ch);
} else
{if((state_val_18226 === (23)))
{var state_18225__$1 = state_18225;var statearr_18248_18291 = state_18225__$1;(statearr_18248_18291[(2)] = null);
(statearr_18248_18291[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (19)))
{var inst_18156 = (state_18225[(8)]);var inst_18206 = (state_18225[(11)]);var inst_18208 = cljs.core.async.muxch_STAR_.call(null,inst_18206);var state_18225__$1 = state_18225;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18225__$1,(22),inst_18208,inst_18156);
} else
{if((state_val_18226 === (11)))
{var inst_18180 = (state_18225[(10)]);var inst_18166 = (state_18225[(16)]);var inst_18180__$1 = cljs.core.seq.call(null,inst_18166);var state_18225__$1 = (function (){var statearr_18249 = state_18225;(statearr_18249[(10)] = inst_18180__$1);
return statearr_18249;
})();if(inst_18180__$1)
{var statearr_18250_18292 = state_18225__$1;(statearr_18250_18292[(1)] = (13));
} else
{var statearr_18251_18293 = state_18225__$1;(statearr_18251_18293[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (9)))
{var inst_18202 = (state_18225[(2)]);var state_18225__$1 = state_18225;var statearr_18252_18294 = state_18225__$1;(statearr_18252_18294[(2)] = inst_18202);
(statearr_18252_18294[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (5)))
{var inst_18163 = cljs.core.deref.call(null,mults);var inst_18164 = cljs.core.vals.call(null,inst_18163);var inst_18165 = cljs.core.seq.call(null,inst_18164);var inst_18166 = inst_18165;var inst_18167 = null;var inst_18168 = (0);var inst_18169 = (0);var state_18225__$1 = (function (){var statearr_18253 = state_18225;(statearr_18253[(12)] = inst_18169);
(statearr_18253[(13)] = inst_18167);
(statearr_18253[(15)] = inst_18168);
(statearr_18253[(16)] = inst_18166);
return statearr_18253;
})();var statearr_18254_18295 = state_18225__$1;(statearr_18254_18295[(2)] = null);
(statearr_18254_18295[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (14)))
{var state_18225__$1 = state_18225;var statearr_18258_18296 = state_18225__$1;(statearr_18258_18296[(2)] = null);
(statearr_18258_18296[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (16)))
{var inst_18180 = (state_18225[(10)]);var inst_18184 = cljs.core.chunk_first.call(null,inst_18180);var inst_18185 = cljs.core.chunk_rest.call(null,inst_18180);var inst_18186 = cljs.core.count.call(null,inst_18184);var inst_18166 = inst_18185;var inst_18167 = inst_18184;var inst_18168 = inst_18186;var inst_18169 = (0);var state_18225__$1 = (function (){var statearr_18259 = state_18225;(statearr_18259[(12)] = inst_18169);
(statearr_18259[(13)] = inst_18167);
(statearr_18259[(15)] = inst_18168);
(statearr_18259[(16)] = inst_18166);
return statearr_18259;
})();var statearr_18260_18297 = state_18225__$1;(statearr_18260_18297[(2)] = null);
(statearr_18260_18297[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (10)))
{var inst_18169 = (state_18225[(12)]);var inst_18167 = (state_18225[(13)]);var inst_18168 = (state_18225[(15)]);var inst_18166 = (state_18225[(16)]);var inst_18174 = cljs.core._nth.call(null,inst_18167,inst_18169);var inst_18175 = cljs.core.async.muxch_STAR_.call(null,inst_18174);var inst_18176 = cljs.core.async.close_BANG_.call(null,inst_18175);var inst_18177 = (inst_18169 + (1));var tmp18255 = inst_18167;var tmp18256 = inst_18168;var tmp18257 = inst_18166;var inst_18166__$1 = tmp18257;var inst_18167__$1 = tmp18255;var inst_18168__$1 = tmp18256;var inst_18169__$1 = inst_18177;var state_18225__$1 = (function (){var statearr_18261 = state_18225;(statearr_18261[(12)] = inst_18169__$1);
(statearr_18261[(13)] = inst_18167__$1);
(statearr_18261[(17)] = inst_18176);
(statearr_18261[(15)] = inst_18168__$1);
(statearr_18261[(16)] = inst_18166__$1);
return statearr_18261;
})();var statearr_18262_18298 = state_18225__$1;(statearr_18262_18298[(2)] = null);
(statearr_18262_18298[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (18)))
{var inst_18195 = (state_18225[(2)]);var state_18225__$1 = state_18225;var statearr_18263_18299 = state_18225__$1;(statearr_18263_18299[(2)] = inst_18195);
(statearr_18263_18299[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18226 === (8)))
{var inst_18169 = (state_18225[(12)]);var inst_18168 = (state_18225[(15)]);var inst_18171 = (inst_18169 < inst_18168);var inst_18172 = inst_18171;var state_18225__$1 = state_18225;if(cljs.core.truth_(inst_18172))
{var statearr_18264_18300 = state_18225__$1;(statearr_18264_18300[(1)] = (10));
} else
{var statearr_18265_18301 = state_18225__$1;(statearr_18265_18301[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___18273,mults,ensure_mult,p))
;return ((function (switch__11550__auto__,c__11606__auto___18273,mults,ensure_mult,p){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_18269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18269[(0)] = state_machine__11551__auto__);
(statearr_18269[(1)] = (1));
return statearr_18269;
});
var state_machine__11551__auto____1 = (function (state_18225){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_18225);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e18270){if((e18270 instanceof Object))
{var ex__11554__auto__ = e18270;var statearr_18271_18302 = state_18225;(statearr_18271_18302[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18225);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18270;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18303 = state_18225;
state_18225 = G__18303;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_18225){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_18225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___18273,mults,ensure_mult,p))
})();var state__11608__auto__ = (function (){var statearr_18272 = f__11607__auto__.call(null);(statearr_18272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___18273);
return statearr_18272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___18273,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11606__auto___18440 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___18440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___18440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18410){var state_val_18411 = (state_18410[(1)]);if((state_val_18411 === (7)))
{var state_18410__$1 = state_18410;var statearr_18412_18441 = state_18410__$1;(statearr_18412_18441[(2)] = null);
(statearr_18412_18441[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (1)))
{var state_18410__$1 = state_18410;var statearr_18413_18442 = state_18410__$1;(statearr_18413_18442[(2)] = null);
(statearr_18413_18442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (4)))
{var inst_18374 = (state_18410[(7)]);var inst_18376 = (inst_18374 < cnt);var state_18410__$1 = state_18410;if(cljs.core.truth_(inst_18376))
{var statearr_18414_18443 = state_18410__$1;(statearr_18414_18443[(1)] = (6));
} else
{var statearr_18415_18444 = state_18410__$1;(statearr_18415_18444[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (15)))
{var inst_18406 = (state_18410[(2)]);var state_18410__$1 = state_18410;var statearr_18416_18445 = state_18410__$1;(statearr_18416_18445[(2)] = inst_18406);
(statearr_18416_18445[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (13)))
{var inst_18399 = cljs.core.async.close_BANG_.call(null,out);var state_18410__$1 = state_18410;var statearr_18417_18446 = state_18410__$1;(statearr_18417_18446[(2)] = inst_18399);
(statearr_18417_18446[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (6)))
{var state_18410__$1 = state_18410;var statearr_18418_18447 = state_18410__$1;(statearr_18418_18447[(2)] = null);
(statearr_18418_18447[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (3)))
{var inst_18408 = (state_18410[(2)]);var state_18410__$1 = state_18410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18410__$1,inst_18408);
} else
{if((state_val_18411 === (12)))
{var inst_18396 = (state_18410[(8)]);var inst_18396__$1 = (state_18410[(2)]);var inst_18397 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18396__$1);var state_18410__$1 = (function (){var statearr_18419 = state_18410;(statearr_18419[(8)] = inst_18396__$1);
return statearr_18419;
})();if(cljs.core.truth_(inst_18397))
{var statearr_18420_18448 = state_18410__$1;(statearr_18420_18448[(1)] = (13));
} else
{var statearr_18421_18449 = state_18410__$1;(statearr_18421_18449[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (2)))
{var inst_18373 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18374 = (0);var state_18410__$1 = (function (){var statearr_18422 = state_18410;(statearr_18422[(9)] = inst_18373);
(statearr_18422[(7)] = inst_18374);
return statearr_18422;
})();var statearr_18423_18450 = state_18410__$1;(statearr_18423_18450[(2)] = null);
(statearr_18423_18450[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (11)))
{var inst_18374 = (state_18410[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18410,(10),Object,null,(9));var inst_18383 = chs__$1.call(null,inst_18374);var inst_18384 = done.call(null,inst_18374);var inst_18385 = cljs.core.async.take_BANG_.call(null,inst_18383,inst_18384);var state_18410__$1 = state_18410;var statearr_18424_18451 = state_18410__$1;(statearr_18424_18451[(2)] = inst_18385);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18410__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (9)))
{var inst_18374 = (state_18410[(7)]);var inst_18387 = (state_18410[(2)]);var inst_18388 = (inst_18374 + (1));var inst_18374__$1 = inst_18388;var state_18410__$1 = (function (){var statearr_18425 = state_18410;(statearr_18425[(10)] = inst_18387);
(statearr_18425[(7)] = inst_18374__$1);
return statearr_18425;
})();var statearr_18426_18452 = state_18410__$1;(statearr_18426_18452[(2)] = null);
(statearr_18426_18452[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (5)))
{var inst_18394 = (state_18410[(2)]);var state_18410__$1 = (function (){var statearr_18427 = state_18410;(statearr_18427[(11)] = inst_18394);
return statearr_18427;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18410__$1,(12),dchan);
} else
{if((state_val_18411 === (14)))
{var inst_18396 = (state_18410[(8)]);var inst_18401 = cljs.core.apply.call(null,f,inst_18396);var state_18410__$1 = state_18410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18410__$1,(16),out,inst_18401);
} else
{if((state_val_18411 === (16)))
{var inst_18403 = (state_18410[(2)]);var state_18410__$1 = (function (){var statearr_18428 = state_18410;(statearr_18428[(12)] = inst_18403);
return statearr_18428;
})();var statearr_18429_18453 = state_18410__$1;(statearr_18429_18453[(2)] = null);
(statearr_18429_18453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (10)))
{var inst_18378 = (state_18410[(2)]);var inst_18379 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18410__$1 = (function (){var statearr_18430 = state_18410;(statearr_18430[(13)] = inst_18378);
return statearr_18430;
})();var statearr_18431_18454 = state_18410__$1;(statearr_18431_18454[(2)] = inst_18379);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18410__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18411 === (8)))
{var inst_18392 = (state_18410[(2)]);var state_18410__$1 = state_18410;var statearr_18432_18455 = state_18410__$1;(statearr_18432_18455[(2)] = inst_18392);
(statearr_18432_18455[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___18440,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11550__auto__,c__11606__auto___18440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_18436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18436[(0)] = state_machine__11551__auto__);
(statearr_18436[(1)] = (1));
return statearr_18436;
});
var state_machine__11551__auto____1 = (function (state_18410){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_18410);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e18437){if((e18437 instanceof Object))
{var ex__11554__auto__ = e18437;var statearr_18438_18456 = state_18410;(statearr_18438_18456[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18410);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18437;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18457 = state_18410;
state_18410 = G__18457;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_18410){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_18410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___18440,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11608__auto__ = (function (){var statearr_18439 = f__11607__auto__.call(null);(statearr_18439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___18440);
return statearr_18439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___18440,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11606__auto___18565 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___18565,out){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___18565,out){
return (function (state_18541){var state_val_18542 = (state_18541[(1)]);if((state_val_18542 === (7)))
{var inst_18521 = (state_18541[(7)]);var inst_18520 = (state_18541[(8)]);var inst_18520__$1 = (state_18541[(2)]);var inst_18521__$1 = cljs.core.nth.call(null,inst_18520__$1,(0),null);var inst_18522 = cljs.core.nth.call(null,inst_18520__$1,(1),null);var inst_18523 = (inst_18521__$1 == null);var state_18541__$1 = (function (){var statearr_18543 = state_18541;(statearr_18543[(7)] = inst_18521__$1);
(statearr_18543[(8)] = inst_18520__$1);
(statearr_18543[(9)] = inst_18522);
return statearr_18543;
})();if(cljs.core.truth_(inst_18523))
{var statearr_18544_18566 = state_18541__$1;(statearr_18544_18566[(1)] = (8));
} else
{var statearr_18545_18567 = state_18541__$1;(statearr_18545_18567[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18542 === (1)))
{var inst_18512 = cljs.core.vec.call(null,chs);var inst_18513 = inst_18512;var state_18541__$1 = (function (){var statearr_18546 = state_18541;(statearr_18546[(10)] = inst_18513);
return statearr_18546;
})();var statearr_18547_18568 = state_18541__$1;(statearr_18547_18568[(2)] = null);
(statearr_18547_18568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18542 === (4)))
{var inst_18513 = (state_18541[(10)]);var state_18541__$1 = state_18541;return cljs.core.async.ioc_alts_BANG_.call(null,state_18541__$1,(7),inst_18513);
} else
{if((state_val_18542 === (6)))
{var inst_18537 = (state_18541[(2)]);var state_18541__$1 = state_18541;var statearr_18548_18569 = state_18541__$1;(statearr_18548_18569[(2)] = inst_18537);
(statearr_18548_18569[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18542 === (3)))
{var inst_18539 = (state_18541[(2)]);var state_18541__$1 = state_18541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18541__$1,inst_18539);
} else
{if((state_val_18542 === (2)))
{var inst_18513 = (state_18541[(10)]);var inst_18515 = cljs.core.count.call(null,inst_18513);var inst_18516 = (inst_18515 > (0));var state_18541__$1 = state_18541;if(cljs.core.truth_(inst_18516))
{var statearr_18550_18570 = state_18541__$1;(statearr_18550_18570[(1)] = (4));
} else
{var statearr_18551_18571 = state_18541__$1;(statearr_18551_18571[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18542 === (11)))
{var inst_18513 = (state_18541[(10)]);var inst_18530 = (state_18541[(2)]);var tmp18549 = inst_18513;var inst_18513__$1 = tmp18549;var state_18541__$1 = (function (){var statearr_18552 = state_18541;(statearr_18552[(11)] = inst_18530);
(statearr_18552[(10)] = inst_18513__$1);
return statearr_18552;
})();var statearr_18553_18572 = state_18541__$1;(statearr_18553_18572[(2)] = null);
(statearr_18553_18572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18542 === (9)))
{var inst_18521 = (state_18541[(7)]);var state_18541__$1 = state_18541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18541__$1,(11),out,inst_18521);
} else
{if((state_val_18542 === (5)))
{var inst_18535 = cljs.core.async.close_BANG_.call(null,out);var state_18541__$1 = state_18541;var statearr_18554_18573 = state_18541__$1;(statearr_18554_18573[(2)] = inst_18535);
(statearr_18554_18573[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18542 === (10)))
{var inst_18533 = (state_18541[(2)]);var state_18541__$1 = state_18541;var statearr_18555_18574 = state_18541__$1;(statearr_18555_18574[(2)] = inst_18533);
(statearr_18555_18574[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18542 === (8)))
{var inst_18521 = (state_18541[(7)]);var inst_18520 = (state_18541[(8)]);var inst_18513 = (state_18541[(10)]);var inst_18522 = (state_18541[(9)]);var inst_18525 = (function (){var c = inst_18522;var v = inst_18521;var vec__18518 = inst_18520;var cs = inst_18513;return ((function (c,v,vec__18518,cs,inst_18521,inst_18520,inst_18513,inst_18522,state_val_18542,c__11606__auto___18565,out){
return (function (p1__18458_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18458_SHARP_);
});
;})(c,v,vec__18518,cs,inst_18521,inst_18520,inst_18513,inst_18522,state_val_18542,c__11606__auto___18565,out))
})();var inst_18526 = cljs.core.filterv.call(null,inst_18525,inst_18513);var inst_18513__$1 = inst_18526;var state_18541__$1 = (function (){var statearr_18556 = state_18541;(statearr_18556[(10)] = inst_18513__$1);
return statearr_18556;
})();var statearr_18557_18575 = state_18541__$1;(statearr_18557_18575[(2)] = null);
(statearr_18557_18575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___18565,out))
;return ((function (switch__11550__auto__,c__11606__auto___18565,out){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_18561 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18561[(0)] = state_machine__11551__auto__);
(statearr_18561[(1)] = (1));
return statearr_18561;
});
var state_machine__11551__auto____1 = (function (state_18541){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_18541);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e18562){if((e18562 instanceof Object))
{var ex__11554__auto__ = e18562;var statearr_18563_18576 = state_18541;(statearr_18563_18576[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18541);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18562;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18577 = state_18541;
state_18541 = G__18577;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_18541){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_18541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___18565,out))
})();var state__11608__auto__ = (function (){var statearr_18564 = f__11607__auto__.call(null);(statearr_18564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___18565);
return statearr_18564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___18565,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11606__auto___18670 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___18670,out){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___18670,out){
return (function (state_18647){var state_val_18648 = (state_18647[(1)]);if((state_val_18648 === (7)))
{var inst_18629 = (state_18647[(7)]);var inst_18629__$1 = (state_18647[(2)]);var inst_18630 = (inst_18629__$1 == null);var inst_18631 = cljs.core.not.call(null,inst_18630);var state_18647__$1 = (function (){var statearr_18649 = state_18647;(statearr_18649[(7)] = inst_18629__$1);
return statearr_18649;
})();if(inst_18631)
{var statearr_18650_18671 = state_18647__$1;(statearr_18650_18671[(1)] = (8));
} else
{var statearr_18651_18672 = state_18647__$1;(statearr_18651_18672[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18648 === (1)))
{var inst_18624 = (0);var state_18647__$1 = (function (){var statearr_18652 = state_18647;(statearr_18652[(8)] = inst_18624);
return statearr_18652;
})();var statearr_18653_18673 = state_18647__$1;(statearr_18653_18673[(2)] = null);
(statearr_18653_18673[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18648 === (4)))
{var state_18647__$1 = state_18647;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18647__$1,(7),ch);
} else
{if((state_val_18648 === (6)))
{var inst_18642 = (state_18647[(2)]);var state_18647__$1 = state_18647;var statearr_18654_18674 = state_18647__$1;(statearr_18654_18674[(2)] = inst_18642);
(statearr_18654_18674[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18648 === (3)))
{var inst_18644 = (state_18647[(2)]);var inst_18645 = cljs.core.async.close_BANG_.call(null,out);var state_18647__$1 = (function (){var statearr_18655 = state_18647;(statearr_18655[(9)] = inst_18644);
return statearr_18655;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18647__$1,inst_18645);
} else
{if((state_val_18648 === (2)))
{var inst_18624 = (state_18647[(8)]);var inst_18626 = (inst_18624 < n);var state_18647__$1 = state_18647;if(cljs.core.truth_(inst_18626))
{var statearr_18656_18675 = state_18647__$1;(statearr_18656_18675[(1)] = (4));
} else
{var statearr_18657_18676 = state_18647__$1;(statearr_18657_18676[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18648 === (11)))
{var inst_18624 = (state_18647[(8)]);var inst_18634 = (state_18647[(2)]);var inst_18635 = (inst_18624 + (1));var inst_18624__$1 = inst_18635;var state_18647__$1 = (function (){var statearr_18658 = state_18647;(statearr_18658[(8)] = inst_18624__$1);
(statearr_18658[(10)] = inst_18634);
return statearr_18658;
})();var statearr_18659_18677 = state_18647__$1;(statearr_18659_18677[(2)] = null);
(statearr_18659_18677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18648 === (9)))
{var state_18647__$1 = state_18647;var statearr_18660_18678 = state_18647__$1;(statearr_18660_18678[(2)] = null);
(statearr_18660_18678[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18648 === (5)))
{var state_18647__$1 = state_18647;var statearr_18661_18679 = state_18647__$1;(statearr_18661_18679[(2)] = null);
(statearr_18661_18679[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18648 === (10)))
{var inst_18639 = (state_18647[(2)]);var state_18647__$1 = state_18647;var statearr_18662_18680 = state_18647__$1;(statearr_18662_18680[(2)] = inst_18639);
(statearr_18662_18680[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18648 === (8)))
{var inst_18629 = (state_18647[(7)]);var state_18647__$1 = state_18647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18647__$1,(11),out,inst_18629);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___18670,out))
;return ((function (switch__11550__auto__,c__11606__auto___18670,out){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_18666 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18666[(0)] = state_machine__11551__auto__);
(statearr_18666[(1)] = (1));
return statearr_18666;
});
var state_machine__11551__auto____1 = (function (state_18647){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_18647);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e18667){if((e18667 instanceof Object))
{var ex__11554__auto__ = e18667;var statearr_18668_18681 = state_18647;(statearr_18668_18681[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18647);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18667;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18682 = state_18647;
state_18647 = G__18682;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_18647){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_18647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___18670,out))
})();var state__11608__auto__ = (function (){var statearr_18669 = f__11607__auto__.call(null);(statearr_18669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___18670);
return statearr_18669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___18670,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t18690 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18690 = (function (ch,f,map_LT_,meta18691){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18691 = meta18691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18690.cljs$lang$type = true;
cljs.core.async.t18690.cljs$lang$ctorStr = "cljs.core.async/t18690";
cljs.core.async.t18690.cljs$lang$ctorPrWriter = (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write.call(null,writer__9314__auto__,"cljs.core.async/t18690");
});
cljs.core.async.t18690.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t18690.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t18693 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18693 = (function (fn1,_,meta18691,ch,f,map_LT_,meta18694){
this.fn1 = fn1;
this._ = _;
this.meta18691 = meta18691;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18694 = meta18694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18693.cljs$lang$type = true;
cljs.core.async.t18693.cljs$lang$ctorStr = "cljs.core.async/t18693";
cljs.core.async.t18693.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write.call(null,writer__9314__auto__,"cljs.core.async/t18693");
});})(___$1))
;
cljs.core.async.t18693.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__18683_SHARP_){return f1.call(null,(((p1__18683_SHARP_ == null))?null:self__.f.call(null,p1__18683_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t18693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18695){var self__ = this;
var _18695__$1 = this;return self__.meta18694;
});})(___$1))
;
cljs.core.async.t18693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18695,meta18694__$1){var self__ = this;
var _18695__$1 = this;return (new cljs.core.async.t18693(self__.fn1,self__._,self__.meta18691,self__.ch,self__.f,self__.map_LT_,meta18694__$1));
});})(___$1))
;
cljs.core.async.__GT_t18693 = ((function (___$1){
return (function __GT_t18693(fn1__$1,___$2,meta18691__$1,ch__$2,f__$2,map_LT___$2,meta18694){return (new cljs.core.async.t18693(fn1__$1,___$2,meta18691__$1,ch__$2,f__$2,map_LT___$2,meta18694));
});})(___$1))
;
}
return (new cljs.core.async.t18693(fn1,___$1,self__.meta18691,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8724__auto__ = ret;if(cljs.core.truth_(and__8724__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8724__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t18690.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18690.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18692){var self__ = this;
var _18692__$1 = this;return self__.meta18691;
});
cljs.core.async.t18690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18692,meta18691__$1){var self__ = this;
var _18692__$1 = this;return (new cljs.core.async.t18690(self__.ch,self__.f,self__.map_LT_,meta18691__$1));
});
cljs.core.async.__GT_t18690 = (function __GT_t18690(ch__$1,f__$1,map_LT___$1,meta18691){return (new cljs.core.async.t18690(ch__$1,f__$1,map_LT___$1,meta18691));
});
}
return (new cljs.core.async.t18690(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t18699 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18699 = (function (ch,f,map_GT_,meta18700){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18700 = meta18700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18699.cljs$lang$type = true;
cljs.core.async.t18699.cljs$lang$ctorStr = "cljs.core.async/t18699";
cljs.core.async.t18699.cljs$lang$ctorPrWriter = (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write.call(null,writer__9314__auto__,"cljs.core.async/t18699");
});
cljs.core.async.t18699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t18699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18699.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18701){var self__ = this;
var _18701__$1 = this;return self__.meta18700;
});
cljs.core.async.t18699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18701,meta18700__$1){var self__ = this;
var _18701__$1 = this;return (new cljs.core.async.t18699(self__.ch,self__.f,self__.map_GT_,meta18700__$1));
});
cljs.core.async.__GT_t18699 = (function __GT_t18699(ch__$1,f__$1,map_GT___$1,meta18700){return (new cljs.core.async.t18699(ch__$1,f__$1,map_GT___$1,meta18700));
});
}
return (new cljs.core.async.t18699(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t18705 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18705 = (function (ch,p,filter_GT_,meta18706){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18706 = meta18706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18705.cljs$lang$type = true;
cljs.core.async.t18705.cljs$lang$ctorStr = "cljs.core.async/t18705";
cljs.core.async.t18705.cljs$lang$ctorPrWriter = (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write.call(null,writer__9314__auto__,"cljs.core.async/t18705");
});
cljs.core.async.t18705.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t18705.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18705.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18705.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18707){var self__ = this;
var _18707__$1 = this;return self__.meta18706;
});
cljs.core.async.t18705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18707,meta18706__$1){var self__ = this;
var _18707__$1 = this;return (new cljs.core.async.t18705(self__.ch,self__.p,self__.filter_GT_,meta18706__$1));
});
cljs.core.async.__GT_t18705 = (function __GT_t18705(ch__$1,p__$1,filter_GT___$1,meta18706){return (new cljs.core.async.t18705(ch__$1,p__$1,filter_GT___$1,meta18706));
});
}
return (new cljs.core.async.t18705(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11606__auto___18790 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___18790,out){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___18790,out){
return (function (state_18769){var state_val_18770 = (state_18769[(1)]);if((state_val_18770 === (7)))
{var inst_18765 = (state_18769[(2)]);var state_18769__$1 = state_18769;var statearr_18771_18791 = state_18769__$1;(statearr_18771_18791[(2)] = inst_18765);
(statearr_18771_18791[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (1)))
{var state_18769__$1 = state_18769;var statearr_18772_18792 = state_18769__$1;(statearr_18772_18792[(2)] = null);
(statearr_18772_18792[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (4)))
{var inst_18751 = (state_18769[(7)]);var inst_18751__$1 = (state_18769[(2)]);var inst_18752 = (inst_18751__$1 == null);var state_18769__$1 = (function (){var statearr_18773 = state_18769;(statearr_18773[(7)] = inst_18751__$1);
return statearr_18773;
})();if(cljs.core.truth_(inst_18752))
{var statearr_18774_18793 = state_18769__$1;(statearr_18774_18793[(1)] = (5));
} else
{var statearr_18775_18794 = state_18769__$1;(statearr_18775_18794[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (6)))
{var inst_18751 = (state_18769[(7)]);var inst_18756 = p.call(null,inst_18751);var state_18769__$1 = state_18769;if(cljs.core.truth_(inst_18756))
{var statearr_18776_18795 = state_18769__$1;(statearr_18776_18795[(1)] = (8));
} else
{var statearr_18777_18796 = state_18769__$1;(statearr_18777_18796[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (3)))
{var inst_18767 = (state_18769[(2)]);var state_18769__$1 = state_18769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18769__$1,inst_18767);
} else
{if((state_val_18770 === (2)))
{var state_18769__$1 = state_18769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18769__$1,(4),ch);
} else
{if((state_val_18770 === (11)))
{var inst_18759 = (state_18769[(2)]);var state_18769__$1 = state_18769;var statearr_18778_18797 = state_18769__$1;(statearr_18778_18797[(2)] = inst_18759);
(statearr_18778_18797[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (9)))
{var state_18769__$1 = state_18769;var statearr_18779_18798 = state_18769__$1;(statearr_18779_18798[(2)] = null);
(statearr_18779_18798[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (5)))
{var inst_18754 = cljs.core.async.close_BANG_.call(null,out);var state_18769__$1 = state_18769;var statearr_18780_18799 = state_18769__$1;(statearr_18780_18799[(2)] = inst_18754);
(statearr_18780_18799[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (10)))
{var inst_18762 = (state_18769[(2)]);var state_18769__$1 = (function (){var statearr_18781 = state_18769;(statearr_18781[(8)] = inst_18762);
return statearr_18781;
})();var statearr_18782_18800 = state_18769__$1;(statearr_18782_18800[(2)] = null);
(statearr_18782_18800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18770 === (8)))
{var inst_18751 = (state_18769[(7)]);var state_18769__$1 = state_18769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18769__$1,(11),out,inst_18751);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___18790,out))
;return ((function (switch__11550__auto__,c__11606__auto___18790,out){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_18786 = [null,null,null,null,null,null,null,null,null];(statearr_18786[(0)] = state_machine__11551__auto__);
(statearr_18786[(1)] = (1));
return statearr_18786;
});
var state_machine__11551__auto____1 = (function (state_18769){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_18769);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e18787){if((e18787 instanceof Object))
{var ex__11554__auto__ = e18787;var statearr_18788_18801 = state_18769;(statearr_18788_18801[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18769);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18787;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18802 = state_18769;
state_18769 = G__18802;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_18769){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_18769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___18790,out))
})();var state__11608__auto__ = (function (){var statearr_18789 = f__11607__auto__.call(null);(statearr_18789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___18790);
return statearr_18789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___18790,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11606__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto__){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto__){
return (function (state_18968){var state_val_18969 = (state_18968[(1)]);if((state_val_18969 === (7)))
{var inst_18964 = (state_18968[(2)]);var state_18968__$1 = state_18968;var statearr_18970_19011 = state_18968__$1;(statearr_18970_19011[(2)] = inst_18964);
(statearr_18970_19011[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (20)))
{var inst_18934 = (state_18968[(7)]);var inst_18945 = (state_18968[(2)]);var inst_18946 = cljs.core.next.call(null,inst_18934);var inst_18920 = inst_18946;var inst_18921 = null;var inst_18922 = (0);var inst_18923 = (0);var state_18968__$1 = (function (){var statearr_18971 = state_18968;(statearr_18971[(8)] = inst_18922);
(statearr_18971[(9)] = inst_18945);
(statearr_18971[(10)] = inst_18923);
(statearr_18971[(11)] = inst_18920);
(statearr_18971[(12)] = inst_18921);
return statearr_18971;
})();var statearr_18972_19012 = state_18968__$1;(statearr_18972_19012[(2)] = null);
(statearr_18972_19012[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (1)))
{var state_18968__$1 = state_18968;var statearr_18973_19013 = state_18968__$1;(statearr_18973_19013[(2)] = null);
(statearr_18973_19013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (4)))
{var inst_18909 = (state_18968[(13)]);var inst_18909__$1 = (state_18968[(2)]);var inst_18910 = (inst_18909__$1 == null);var state_18968__$1 = (function (){var statearr_18974 = state_18968;(statearr_18974[(13)] = inst_18909__$1);
return statearr_18974;
})();if(cljs.core.truth_(inst_18910))
{var statearr_18975_19014 = state_18968__$1;(statearr_18975_19014[(1)] = (5));
} else
{var statearr_18976_19015 = state_18968__$1;(statearr_18976_19015[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (15)))
{var state_18968__$1 = state_18968;var statearr_18980_19016 = state_18968__$1;(statearr_18980_19016[(2)] = null);
(statearr_18980_19016[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (21)))
{var state_18968__$1 = state_18968;var statearr_18981_19017 = state_18968__$1;(statearr_18981_19017[(2)] = null);
(statearr_18981_19017[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (13)))
{var inst_18922 = (state_18968[(8)]);var inst_18923 = (state_18968[(10)]);var inst_18920 = (state_18968[(11)]);var inst_18921 = (state_18968[(12)]);var inst_18930 = (state_18968[(2)]);var inst_18931 = (inst_18923 + (1));var tmp18977 = inst_18922;var tmp18978 = inst_18920;var tmp18979 = inst_18921;var inst_18920__$1 = tmp18978;var inst_18921__$1 = tmp18979;var inst_18922__$1 = tmp18977;var inst_18923__$1 = inst_18931;var state_18968__$1 = (function (){var statearr_18982 = state_18968;(statearr_18982[(8)] = inst_18922__$1);
(statearr_18982[(10)] = inst_18923__$1);
(statearr_18982[(11)] = inst_18920__$1);
(statearr_18982[(14)] = inst_18930);
(statearr_18982[(12)] = inst_18921__$1);
return statearr_18982;
})();var statearr_18983_19018 = state_18968__$1;(statearr_18983_19018[(2)] = null);
(statearr_18983_19018[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (22)))
{var state_18968__$1 = state_18968;var statearr_18984_19019 = state_18968__$1;(statearr_18984_19019[(2)] = null);
(statearr_18984_19019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (6)))
{var inst_18909 = (state_18968[(13)]);var inst_18918 = f.call(null,inst_18909);var inst_18919 = cljs.core.seq.call(null,inst_18918);var inst_18920 = inst_18919;var inst_18921 = null;var inst_18922 = (0);var inst_18923 = (0);var state_18968__$1 = (function (){var statearr_18985 = state_18968;(statearr_18985[(8)] = inst_18922);
(statearr_18985[(10)] = inst_18923);
(statearr_18985[(11)] = inst_18920);
(statearr_18985[(12)] = inst_18921);
return statearr_18985;
})();var statearr_18986_19020 = state_18968__$1;(statearr_18986_19020[(2)] = null);
(statearr_18986_19020[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (17)))
{var inst_18934 = (state_18968[(7)]);var inst_18938 = cljs.core.chunk_first.call(null,inst_18934);var inst_18939 = cljs.core.chunk_rest.call(null,inst_18934);var inst_18940 = cljs.core.count.call(null,inst_18938);var inst_18920 = inst_18939;var inst_18921 = inst_18938;var inst_18922 = inst_18940;var inst_18923 = (0);var state_18968__$1 = (function (){var statearr_18987 = state_18968;(statearr_18987[(8)] = inst_18922);
(statearr_18987[(10)] = inst_18923);
(statearr_18987[(11)] = inst_18920);
(statearr_18987[(12)] = inst_18921);
return statearr_18987;
})();var statearr_18988_19021 = state_18968__$1;(statearr_18988_19021[(2)] = null);
(statearr_18988_19021[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (3)))
{var inst_18966 = (state_18968[(2)]);var state_18968__$1 = state_18968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18968__$1,inst_18966);
} else
{if((state_val_18969 === (12)))
{var inst_18954 = (state_18968[(2)]);var state_18968__$1 = state_18968;var statearr_18989_19022 = state_18968__$1;(statearr_18989_19022[(2)] = inst_18954);
(statearr_18989_19022[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (2)))
{var state_18968__$1 = state_18968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18968__$1,(4),in$);
} else
{if((state_val_18969 === (23)))
{var inst_18962 = (state_18968[(2)]);var state_18968__$1 = state_18968;var statearr_18990_19023 = state_18968__$1;(statearr_18990_19023[(2)] = inst_18962);
(statearr_18990_19023[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (19)))
{var inst_18949 = (state_18968[(2)]);var state_18968__$1 = state_18968;var statearr_18991_19024 = state_18968__$1;(statearr_18991_19024[(2)] = inst_18949);
(statearr_18991_19024[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (11)))
{var inst_18920 = (state_18968[(11)]);var inst_18934 = (state_18968[(7)]);var inst_18934__$1 = cljs.core.seq.call(null,inst_18920);var state_18968__$1 = (function (){var statearr_18992 = state_18968;(statearr_18992[(7)] = inst_18934__$1);
return statearr_18992;
})();if(inst_18934__$1)
{var statearr_18993_19025 = state_18968__$1;(statearr_18993_19025[(1)] = (14));
} else
{var statearr_18994_19026 = state_18968__$1;(statearr_18994_19026[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (9)))
{var inst_18956 = (state_18968[(2)]);var inst_18957 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_18968__$1 = (function (){var statearr_18995 = state_18968;(statearr_18995[(15)] = inst_18956);
return statearr_18995;
})();if(cljs.core.truth_(inst_18957))
{var statearr_18996_19027 = state_18968__$1;(statearr_18996_19027[(1)] = (21));
} else
{var statearr_18997_19028 = state_18968__$1;(statearr_18997_19028[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (5)))
{var inst_18912 = cljs.core.async.close_BANG_.call(null,out);var state_18968__$1 = state_18968;var statearr_18998_19029 = state_18968__$1;(statearr_18998_19029[(2)] = inst_18912);
(statearr_18998_19029[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (14)))
{var inst_18934 = (state_18968[(7)]);var inst_18936 = cljs.core.chunked_seq_QMARK_.call(null,inst_18934);var state_18968__$1 = state_18968;if(inst_18936)
{var statearr_18999_19030 = state_18968__$1;(statearr_18999_19030[(1)] = (17));
} else
{var statearr_19000_19031 = state_18968__$1;(statearr_19000_19031[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (16)))
{var inst_18952 = (state_18968[(2)]);var state_18968__$1 = state_18968;var statearr_19001_19032 = state_18968__$1;(statearr_19001_19032[(2)] = inst_18952);
(statearr_19001_19032[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18969 === (10)))
{var inst_18923 = (state_18968[(10)]);var inst_18921 = (state_18968[(12)]);var inst_18928 = cljs.core._nth.call(null,inst_18921,inst_18923);var state_18968__$1 = state_18968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18968__$1,(13),out,inst_18928);
} else
{if((state_val_18969 === (18)))
{var inst_18934 = (state_18968[(7)]);var inst_18943 = cljs.core.first.call(null,inst_18934);var state_18968__$1 = state_18968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18968__$1,(20),out,inst_18943);
} else
{if((state_val_18969 === (8)))
{var inst_18922 = (state_18968[(8)]);var inst_18923 = (state_18968[(10)]);var inst_18925 = (inst_18923 < inst_18922);var inst_18926 = inst_18925;var state_18968__$1 = state_18968;if(cljs.core.truth_(inst_18926))
{var statearr_19002_19033 = state_18968__$1;(statearr_19002_19033[(1)] = (10));
} else
{var statearr_19003_19034 = state_18968__$1;(statearr_19003_19034[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto__))
;return ((function (switch__11550__auto__,c__11606__auto__){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_19007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19007[(0)] = state_machine__11551__auto__);
(statearr_19007[(1)] = (1));
return statearr_19007;
});
var state_machine__11551__auto____1 = (function (state_18968){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_18968);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e19008){if((e19008 instanceof Object))
{var ex__11554__auto__ = e19008;var statearr_19009_19035 = state_18968;(statearr_19009_19035[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18968);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19008;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19036 = state_18968;
state_18968 = G__19036;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_18968){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_18968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto__))
})();var state__11608__auto__ = (function (){var statearr_19010 = f__11607__auto__.call(null);(statearr_19010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto__);
return statearr_19010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto__))
);
return c__11606__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11606__auto___19133 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___19133,out){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___19133,out){
return (function (state_19108){var state_val_19109 = (state_19108[(1)]);if((state_val_19109 === (7)))
{var inst_19103 = (state_19108[(2)]);var state_19108__$1 = state_19108;var statearr_19110_19134 = state_19108__$1;(statearr_19110_19134[(2)] = inst_19103);
(statearr_19110_19134[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19109 === (1)))
{var inst_19085 = null;var state_19108__$1 = (function (){var statearr_19111 = state_19108;(statearr_19111[(7)] = inst_19085);
return statearr_19111;
})();var statearr_19112_19135 = state_19108__$1;(statearr_19112_19135[(2)] = null);
(statearr_19112_19135[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19109 === (4)))
{var inst_19088 = (state_19108[(8)]);var inst_19088__$1 = (state_19108[(2)]);var inst_19089 = (inst_19088__$1 == null);var inst_19090 = cljs.core.not.call(null,inst_19089);var state_19108__$1 = (function (){var statearr_19113 = state_19108;(statearr_19113[(8)] = inst_19088__$1);
return statearr_19113;
})();if(inst_19090)
{var statearr_19114_19136 = state_19108__$1;(statearr_19114_19136[(1)] = (5));
} else
{var statearr_19115_19137 = state_19108__$1;(statearr_19115_19137[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19109 === (6)))
{var state_19108__$1 = state_19108;var statearr_19116_19138 = state_19108__$1;(statearr_19116_19138[(2)] = null);
(statearr_19116_19138[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19109 === (3)))
{var inst_19105 = (state_19108[(2)]);var inst_19106 = cljs.core.async.close_BANG_.call(null,out);var state_19108__$1 = (function (){var statearr_19117 = state_19108;(statearr_19117[(9)] = inst_19105);
return statearr_19117;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19108__$1,inst_19106);
} else
{if((state_val_19109 === (2)))
{var state_19108__$1 = state_19108;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19108__$1,(4),ch);
} else
{if((state_val_19109 === (11)))
{var inst_19088 = (state_19108[(8)]);var inst_19097 = (state_19108[(2)]);var inst_19085 = inst_19088;var state_19108__$1 = (function (){var statearr_19118 = state_19108;(statearr_19118[(10)] = inst_19097);
(statearr_19118[(7)] = inst_19085);
return statearr_19118;
})();var statearr_19119_19139 = state_19108__$1;(statearr_19119_19139[(2)] = null);
(statearr_19119_19139[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19109 === (9)))
{var inst_19088 = (state_19108[(8)]);var state_19108__$1 = state_19108;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19108__$1,(11),out,inst_19088);
} else
{if((state_val_19109 === (5)))
{var inst_19088 = (state_19108[(8)]);var inst_19085 = (state_19108[(7)]);var inst_19092 = cljs.core._EQ_.call(null,inst_19088,inst_19085);var state_19108__$1 = state_19108;if(inst_19092)
{var statearr_19121_19140 = state_19108__$1;(statearr_19121_19140[(1)] = (8));
} else
{var statearr_19122_19141 = state_19108__$1;(statearr_19122_19141[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19109 === (10)))
{var inst_19100 = (state_19108[(2)]);var state_19108__$1 = state_19108;var statearr_19123_19142 = state_19108__$1;(statearr_19123_19142[(2)] = inst_19100);
(statearr_19123_19142[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19109 === (8)))
{var inst_19085 = (state_19108[(7)]);var tmp19120 = inst_19085;var inst_19085__$1 = tmp19120;var state_19108__$1 = (function (){var statearr_19124 = state_19108;(statearr_19124[(7)] = inst_19085__$1);
return statearr_19124;
})();var statearr_19125_19143 = state_19108__$1;(statearr_19125_19143[(2)] = null);
(statearr_19125_19143[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___19133,out))
;return ((function (switch__11550__auto__,c__11606__auto___19133,out){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_19129 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19129[(0)] = state_machine__11551__auto__);
(statearr_19129[(1)] = (1));
return statearr_19129;
});
var state_machine__11551__auto____1 = (function (state_19108){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_19108);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e19130){if((e19130 instanceof Object))
{var ex__11554__auto__ = e19130;var statearr_19131_19144 = state_19108;(statearr_19131_19144[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19108);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19130;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19145 = state_19108;
state_19108 = G__19145;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_19108){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_19108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___19133,out))
})();var state__11608__auto__ = (function (){var statearr_19132 = f__11607__auto__.call(null);(statearr_19132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___19133);
return statearr_19132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___19133,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11606__auto___19280 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___19280,out){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___19280,out){
return (function (state_19250){var state_val_19251 = (state_19250[(1)]);if((state_val_19251 === (7)))
{var inst_19246 = (state_19250[(2)]);var state_19250__$1 = state_19250;var statearr_19252_19281 = state_19250__$1;(statearr_19252_19281[(2)] = inst_19246);
(statearr_19252_19281[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19251 === (1)))
{var inst_19213 = (new Array(n));var inst_19214 = inst_19213;var inst_19215 = (0);var state_19250__$1 = (function (){var statearr_19253 = state_19250;(statearr_19253[(7)] = inst_19214);
(statearr_19253[(8)] = inst_19215);
return statearr_19253;
})();var statearr_19254_19282 = state_19250__$1;(statearr_19254_19282[(2)] = null);
(statearr_19254_19282[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19251 === (4)))
{var inst_19218 = (state_19250[(9)]);var inst_19218__$1 = (state_19250[(2)]);var inst_19219 = (inst_19218__$1 == null);var inst_19220 = cljs.core.not.call(null,inst_19219);var state_19250__$1 = (function (){var statearr_19255 = state_19250;(statearr_19255[(9)] = inst_19218__$1);
return statearr_19255;
})();if(inst_19220)
{var statearr_19256_19283 = state_19250__$1;(statearr_19256_19283[(1)] = (5));
} else
{var statearr_19257_19284 = state_19250__$1;(statearr_19257_19284[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19251 === (15)))
{var inst_19240 = (state_19250[(2)]);var state_19250__$1 = state_19250;var statearr_19258_19285 = state_19250__$1;(statearr_19258_19285[(2)] = inst_19240);
(statearr_19258_19285[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19251 === (13)))
{var state_19250__$1 = state_19250;var statearr_19259_19286 = state_19250__$1;(statearr_19259_19286[(2)] = null);
(statearr_19259_19286[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19251 === (6)))
{var inst_19215 = (state_19250[(8)]);var inst_19236 = (inst_19215 > (0));var state_19250__$1 = state_19250;if(cljs.core.truth_(inst_19236))
{var statearr_19260_19287 = state_19250__$1;(statearr_19260_19287[(1)] = (12));
} else
{var statearr_19261_19288 = state_19250__$1;(statearr_19261_19288[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19251 === (3)))
{var inst_19248 = (state_19250[(2)]);var state_19250__$1 = state_19250;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19250__$1,inst_19248);
} else
{if((state_val_19251 === (12)))
{var inst_19214 = (state_19250[(7)]);var inst_19238 = cljs.core.vec.call(null,inst_19214);var state_19250__$1 = state_19250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19250__$1,(15),out,inst_19238);
} else
{if((state_val_19251 === (2)))
{var state_19250__$1 = state_19250;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19250__$1,(4),ch);
} else
{if((state_val_19251 === (11)))
{var inst_19230 = (state_19250[(2)]);var inst_19231 = (new Array(n));var inst_19214 = inst_19231;var inst_19215 = (0);var state_19250__$1 = (function (){var statearr_19262 = state_19250;(statearr_19262[(7)] = inst_19214);
(statearr_19262[(10)] = inst_19230);
(statearr_19262[(8)] = inst_19215);
return statearr_19262;
})();var statearr_19263_19289 = state_19250__$1;(statearr_19263_19289[(2)] = null);
(statearr_19263_19289[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19251 === (9)))
{var inst_19214 = (state_19250[(7)]);var inst_19228 = cljs.core.vec.call(null,inst_19214);var state_19250__$1 = state_19250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19250__$1,(11),out,inst_19228);
} else
{if((state_val_19251 === (5)))
{var inst_19214 = (state_19250[(7)]);var inst_19218 = (state_19250[(9)]);var inst_19223 = (state_19250[(11)]);var inst_19215 = (state_19250[(8)]);var inst_19222 = (inst_19214[inst_19215] = inst_19218);var inst_19223__$1 = (inst_19215 + (1));var inst_19224 = (inst_19223__$1 < n);var state_19250__$1 = (function (){var statearr_19264 = state_19250;(statearr_19264[(11)] = inst_19223__$1);
(statearr_19264[(12)] = inst_19222);
return statearr_19264;
})();if(cljs.core.truth_(inst_19224))
{var statearr_19265_19290 = state_19250__$1;(statearr_19265_19290[(1)] = (8));
} else
{var statearr_19266_19291 = state_19250__$1;(statearr_19266_19291[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19251 === (14)))
{var inst_19243 = (state_19250[(2)]);var inst_19244 = cljs.core.async.close_BANG_.call(null,out);var state_19250__$1 = (function (){var statearr_19268 = state_19250;(statearr_19268[(13)] = inst_19243);
return statearr_19268;
})();var statearr_19269_19292 = state_19250__$1;(statearr_19269_19292[(2)] = inst_19244);
(statearr_19269_19292[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19251 === (10)))
{var inst_19234 = (state_19250[(2)]);var state_19250__$1 = state_19250;var statearr_19270_19293 = state_19250__$1;(statearr_19270_19293[(2)] = inst_19234);
(statearr_19270_19293[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19251 === (8)))
{var inst_19214 = (state_19250[(7)]);var inst_19223 = (state_19250[(11)]);var tmp19267 = inst_19214;var inst_19214__$1 = tmp19267;var inst_19215 = inst_19223;var state_19250__$1 = (function (){var statearr_19271 = state_19250;(statearr_19271[(7)] = inst_19214__$1);
(statearr_19271[(8)] = inst_19215);
return statearr_19271;
})();var statearr_19272_19294 = state_19250__$1;(statearr_19272_19294[(2)] = null);
(statearr_19272_19294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___19280,out))
;return ((function (switch__11550__auto__,c__11606__auto___19280,out){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_19276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19276[(0)] = state_machine__11551__auto__);
(statearr_19276[(1)] = (1));
return statearr_19276;
});
var state_machine__11551__auto____1 = (function (state_19250){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_19250);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e19277){if((e19277 instanceof Object))
{var ex__11554__auto__ = e19277;var statearr_19278_19295 = state_19250;(statearr_19278_19295[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19250);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19277;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19296 = state_19250;
state_19250 = G__19296;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_19250){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_19250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___19280,out))
})();var state__11608__auto__ = (function (){var statearr_19279 = f__11607__auto__.call(null);(statearr_19279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___19280);
return statearr_19279;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___19280,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11606__auto___19439 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11606__auto___19439,out){
return (function (){var f__11607__auto__ = (function (){var switch__11550__auto__ = ((function (c__11606__auto___19439,out){
return (function (state_19409){var state_val_19410 = (state_19409[(1)]);if((state_val_19410 === (7)))
{var inst_19405 = (state_19409[(2)]);var state_19409__$1 = state_19409;var statearr_19411_19440 = state_19409__$1;(statearr_19411_19440[(2)] = inst_19405);
(statearr_19411_19440[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19410 === (1)))
{var inst_19368 = [];var inst_19369 = inst_19368;var inst_19370 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_19409__$1 = (function (){var statearr_19412 = state_19409;(statearr_19412[(7)] = inst_19370);
(statearr_19412[(8)] = inst_19369);
return statearr_19412;
})();var statearr_19413_19441 = state_19409__$1;(statearr_19413_19441[(2)] = null);
(statearr_19413_19441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19410 === (4)))
{var inst_19373 = (state_19409[(9)]);var inst_19373__$1 = (state_19409[(2)]);var inst_19374 = (inst_19373__$1 == null);var inst_19375 = cljs.core.not.call(null,inst_19374);var state_19409__$1 = (function (){var statearr_19414 = state_19409;(statearr_19414[(9)] = inst_19373__$1);
return statearr_19414;
})();if(inst_19375)
{var statearr_19415_19442 = state_19409__$1;(statearr_19415_19442[(1)] = (5));
} else
{var statearr_19416_19443 = state_19409__$1;(statearr_19416_19443[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19410 === (15)))
{var inst_19399 = (state_19409[(2)]);var state_19409__$1 = state_19409;var statearr_19417_19444 = state_19409__$1;(statearr_19417_19444[(2)] = inst_19399);
(statearr_19417_19444[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19410 === (13)))
{var state_19409__$1 = state_19409;var statearr_19418_19445 = state_19409__$1;(statearr_19418_19445[(2)] = null);
(statearr_19418_19445[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19410 === (6)))
{var inst_19369 = (state_19409[(8)]);var inst_19394 = inst_19369.length;var inst_19395 = (inst_19394 > (0));var state_19409__$1 = state_19409;if(cljs.core.truth_(inst_19395))
{var statearr_19419_19446 = state_19409__$1;(statearr_19419_19446[(1)] = (12));
} else
{var statearr_19420_19447 = state_19409__$1;(statearr_19420_19447[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19410 === (3)))
{var inst_19407 = (state_19409[(2)]);var state_19409__$1 = state_19409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19409__$1,inst_19407);
} else
{if((state_val_19410 === (12)))
{var inst_19369 = (state_19409[(8)]);var inst_19397 = cljs.core.vec.call(null,inst_19369);var state_19409__$1 = state_19409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19409__$1,(15),out,inst_19397);
} else
{if((state_val_19410 === (2)))
{var state_19409__$1 = state_19409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19409__$1,(4),ch);
} else
{if((state_val_19410 === (11)))
{var inst_19377 = (state_19409[(10)]);var inst_19373 = (state_19409[(9)]);var inst_19387 = (state_19409[(2)]);var inst_19388 = [];var inst_19389 = inst_19388.push(inst_19373);var inst_19369 = inst_19388;var inst_19370 = inst_19377;var state_19409__$1 = (function (){var statearr_19421 = state_19409;(statearr_19421[(11)] = inst_19387);
(statearr_19421[(7)] = inst_19370);
(statearr_19421[(12)] = inst_19389);
(statearr_19421[(8)] = inst_19369);
return statearr_19421;
})();var statearr_19422_19448 = state_19409__$1;(statearr_19422_19448[(2)] = null);
(statearr_19422_19448[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19410 === (9)))
{var inst_19369 = (state_19409[(8)]);var inst_19385 = cljs.core.vec.call(null,inst_19369);var state_19409__$1 = state_19409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19409__$1,(11),out,inst_19385);
} else
{if((state_val_19410 === (5)))
{var inst_19377 = (state_19409[(10)]);var inst_19370 = (state_19409[(7)]);var inst_19373 = (state_19409[(9)]);var inst_19377__$1 = f.call(null,inst_19373);var inst_19378 = cljs.core._EQ_.call(null,inst_19377__$1,inst_19370);var inst_19379 = cljs.core.keyword_identical_QMARK_.call(null,inst_19370,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_19380 = (inst_19378) || (inst_19379);var state_19409__$1 = (function (){var statearr_19423 = state_19409;(statearr_19423[(10)] = inst_19377__$1);
return statearr_19423;
})();if(cljs.core.truth_(inst_19380))
{var statearr_19424_19449 = state_19409__$1;(statearr_19424_19449[(1)] = (8));
} else
{var statearr_19425_19450 = state_19409__$1;(statearr_19425_19450[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19410 === (14)))
{var inst_19402 = (state_19409[(2)]);var inst_19403 = cljs.core.async.close_BANG_.call(null,out);var state_19409__$1 = (function (){var statearr_19427 = state_19409;(statearr_19427[(13)] = inst_19402);
return statearr_19427;
})();var statearr_19428_19451 = state_19409__$1;(statearr_19428_19451[(2)] = inst_19403);
(statearr_19428_19451[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19410 === (10)))
{var inst_19392 = (state_19409[(2)]);var state_19409__$1 = state_19409;var statearr_19429_19452 = state_19409__$1;(statearr_19429_19452[(2)] = inst_19392);
(statearr_19429_19452[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19410 === (8)))
{var inst_19377 = (state_19409[(10)]);var inst_19373 = (state_19409[(9)]);var inst_19369 = (state_19409[(8)]);var inst_19382 = inst_19369.push(inst_19373);var tmp19426 = inst_19369;var inst_19369__$1 = tmp19426;var inst_19370 = inst_19377;var state_19409__$1 = (function (){var statearr_19430 = state_19409;(statearr_19430[(7)] = inst_19370);
(statearr_19430[(14)] = inst_19382);
(statearr_19430[(8)] = inst_19369__$1);
return statearr_19430;
})();var statearr_19431_19453 = state_19409__$1;(statearr_19431_19453[(2)] = null);
(statearr_19431_19453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11606__auto___19439,out))
;return ((function (switch__11550__auto__,c__11606__auto___19439,out){
return (function() {
var state_machine__11551__auto__ = null;
var state_machine__11551__auto____0 = (function (){var statearr_19435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19435[(0)] = state_machine__11551__auto__);
(statearr_19435[(1)] = (1));
return statearr_19435;
});
var state_machine__11551__auto____1 = (function (state_19409){while(true){
var ret_value__11552__auto__ = (function (){try{while(true){
var result__11553__auto__ = switch__11550__auto__.call(null,state_19409);if(cljs.core.keyword_identical_QMARK_.call(null,result__11553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11553__auto__;
}
break;
}
}catch (e19436){if((e19436 instanceof Object))
{var ex__11554__auto__ = e19436;var statearr_19437_19454 = state_19409;(statearr_19437_19454[(5)] = ex__11554__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19409);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19436;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19455 = state_19409;
state_19409 = G__19455;
continue;
}
} else
{return ret_value__11552__auto__;
}
break;
}
});
state_machine__11551__auto__ = function(state_19409){
switch(arguments.length){
case 0:
return state_machine__11551__auto____0.call(this);
case 1:
return state_machine__11551__auto____1.call(this,state_19409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11551__auto____0;
state_machine__11551__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11551__auto____1;
return state_machine__11551__auto__;
})()
;})(switch__11550__auto__,c__11606__auto___19439,out))
})();var state__11608__auto__ = (function (){var statearr_19438 = f__11607__auto__.call(null);(statearr_19438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11606__auto___19439);
return statearr_19438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11608__auto__);
});})(c__11606__auto___19439,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map