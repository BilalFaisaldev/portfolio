(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();function Iv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lp={exports:{}},ol={},Pp={exports:{}},Ge={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var xs=Symbol.for("react.element"),Ov=Symbol.for("react.portal"),kv=Symbol.for("react.fragment"),Fv=Symbol.for("react.strict_mode"),zv=Symbol.for("react.profiler"),Bv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),Gv=Symbol.for("react.forward_ref"),Vv=Symbol.for("react.suspense"),Wv=Symbol.for("react.memo"),jv=Symbol.for("react.lazy"),Kd=Symbol.iterator;function Xv(t){return t===null||typeof t!="object"?null:(t=Kd&&t[Kd]||t["@@iterator"],typeof t=="function"?t:null)}var Np={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dp=Object.assign,Up={};function ya(t,e,r){this.props=t,this.context=e,this.refs=Up,this.updater=r||Np}ya.prototype.isReactComponent={};ya.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ya.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ip(){}Ip.prototype=ya.prototype;function Bc(t,e,r){this.props=t,this.context=e,this.refs=Up,this.updater=r||Np}var Hc=Bc.prototype=new Ip;Hc.constructor=Bc;Dp(Hc,ya.prototype);Hc.isPureReactComponent=!0;var Zd=Array.isArray,Op=Object.prototype.hasOwnProperty,Gc={current:null},kp={key:!0,ref:!0,__self:!0,__source:!0};function Fp(t,e,r){var n,i={},a=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)Op.call(e,n)&&!kp.hasOwnProperty(n)&&(i[n]=e[n]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(n in o=t.defaultProps,o)i[n]===void 0&&(i[n]=o[n]);return{$$typeof:xs,type:t,key:a,ref:s,props:i,_owner:Gc.current}}function qv(t,e){return{$$typeof:xs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vc(t){return typeof t=="object"&&t!==null&&t.$$typeof===xs}function Yv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Qd=/\/+/g;function Nl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yv(""+t.key):e.toString(36)}function vo(t,e,r,n,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case xs:case Ov:s=!0}}if(s)return s=t,i=i(s),t=n===""?"."+Nl(s,0):n,Zd(i)?(r="",t!=null&&(r=t.replace(Qd,"$&/")+"/"),vo(i,e,r,"",function(u){return u})):i!=null&&(Vc(i)&&(i=qv(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Qd,"$&/")+"/")+t)),e.push(i)),1;if(s=0,n=n===""?".":n+":",Zd(t))for(var o=0;o<t.length;o++){a=t[o];var l=n+Nl(a,o);s+=vo(a,e,r,l,i)}else if(l=Xv(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=n+Nl(a,o++),s+=vo(a,e,r,l,i);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ps(t,e,r){if(t==null)return t;var n=[],i=0;return vo(t,n,"","",function(a){return e.call(r,a,i++)}),n}function $v(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},_o={transition:null},Kv={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:_o,ReactCurrentOwner:Gc};function zp(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Ps,forEach:function(t,e,r){Ps(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ps(t,function(){e++}),e},toArray:function(t){return Ps(t,function(e){return e})||[]},only:function(t){if(!Vc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=ya;Ge.Fragment=kv;Ge.Profiler=zv;Ge.PureComponent=Bc;Ge.StrictMode=Fv;Ge.Suspense=Vv;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kv;Ge.act=zp;Ge.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Dp({},t.props),i=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=Gc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Op.call(e,l)&&!kp.hasOwnProperty(l)&&(n[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];n.children=o}return{$$typeof:xs,type:t.type,key:i,ref:a,props:n,_owner:s}};Ge.createContext=function(t){return t={$$typeof:Hv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bv,_context:t},t.Consumer=t};Ge.createElement=Fp;Ge.createFactory=function(t){var e=Fp.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Gv,render:t}};Ge.isValidElement=Vc;Ge.lazy=function(t){return{$$typeof:jv,_payload:{_status:-1,_result:t},_init:$v}};Ge.memo=function(t,e){return{$$typeof:Wv,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=_o.transition;_o.transition={};try{t()}finally{_o.transition=e}};Ge.unstable_act=zp;Ge.useCallback=function(t,e){return $t.current.useCallback(t,e)};Ge.useContext=function(t){return $t.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return $t.current.useEffect(t,e)};Ge.useId=function(){return $t.current.useId()};Ge.useImperativeHandle=function(t,e,r){return $t.current.useImperativeHandle(t,e,r)};Ge.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return $t.current.useMemo(t,e)};Ge.useReducer=function(t,e,r){return $t.current.useReducer(t,e,r)};Ge.useRef=function(t){return $t.current.useRef(t)};Ge.useState=function(t){return $t.current.useState(t)};Ge.useSyncExternalStore=function(t,e,r){return $t.current.useSyncExternalStore(t,e,r)};Ge.useTransition=function(){return $t.current.useTransition()};Ge.version="18.3.1";Pp.exports=Ge;var Xe=Pp.exports;const Bp=Iv(Xe);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Zv=Xe,Qv=Symbol.for("react.element"),Jv=Symbol.for("react.fragment"),e_=Object.prototype.hasOwnProperty,t_=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r_={key:!0,ref:!0,__self:!0,__source:!0};function Hp(t,e,r){var n,i={},a=null,s=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)e_.call(e,n)&&!r_.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:Qv,type:t,key:a,ref:s,props:i,_owner:t_.current}}ol.Fragment=Jv;ol.jsx=Hp;ol.jsxs=Hp;Lp.exports=ol;var C=Lp.exports,ku={},Gp={exports:{}},hr={},Vp={exports:{}},Wp={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(D,I){var j=D.length;D.push(I);e:for(;0<j;){var Y=j-1>>>1,re=D[Y];if(0<i(re,I))D[Y]=I,D[j]=re,j=Y;else break e}}function r(D){return D.length===0?null:D[0]}function n(D){if(D.length===0)return null;var I=D[0],j=D.pop();if(j!==I){D[0]=j;e:for(var Y=0,re=D.length,H=re>>>1;Y<H;){var K=2*(Y+1)-1,de=D[K],he=K+1,me=D[he];if(0>i(de,j))he<re&&0>i(me,de)?(D[Y]=me,D[he]=j,Y=he):(D[Y]=de,D[K]=j,Y=K);else if(he<re&&0>i(me,j))D[Y]=me,D[he]=j,Y=he;else break e}}return I}function i(D,I){var j=D.sortIndex-I.sortIndex;return j!==0?j:D.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],u=[],d=1,f=null,h=3,p=!1,_=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var I=r(u);I!==null;){if(I.callback===null)n(u);else if(I.startTime<=D)n(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=r(u)}}function b(D){if(x=!1,g(D),!_)if(r(l)!==null)_=!0,q(R);else{var I=r(u);I!==null&&$(b,I.startTime-D)}}function R(D,I){_=!1,x&&(x=!1,c(P),P=-1),p=!0;var j=h;try{for(g(I),f=r(l);f!==null&&(!(f.expirationTime>I)||D&&!G());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,h=f.priorityLevel;var re=Y(f.expirationTime<=I);I=t.unstable_now(),typeof re=="function"?f.callback=re:f===r(l)&&n(l),g(I)}else n(l);f=r(l)}if(f!==null)var H=!0;else{var K=r(u);K!==null&&$(b,K.startTime-I),H=!1}return H}finally{f=null,h=j,p=!1}}var A=!1,w=null,P=-1,y=5,E=-1;function G(){return!(t.unstable_now()-E<y)}function X(){if(w!==null){var D=t.unstable_now();E=D;var I=!0;try{I=w(!0,D)}finally{I?se():(A=!1,w=null)}}else A=!1}var se;if(typeof m=="function")se=function(){m(X)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,V=N.port2;N.port1.onmessage=X,se=function(){V.postMessage(null)}}else se=function(){v(X,0)};function q(D){w=D,A||(A=!0,se())}function $(D,I){P=v(function(){D(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,q(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var j=h;h=I;try{return D()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=h;h=D;try{return I()}finally{h=j}},t.unstable_scheduleCallback=function(D,I,j){var Y=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Y+j:Y):j=Y,D){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=j+re,D={id:d++,callback:I,priorityLevel:D,startTime:j,expirationTime:re,sortIndex:-1},j>Y?(D.sortIndex=j,e(u,D),r(l)===null&&D===r(u)&&(x?(c(P),P=-1):x=!0,$(b,j-Y))):(D.sortIndex=re,e(l,D),_||p||(_=!0,q(R))),D},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(D){var I=h;return function(){var j=h;h=I;try{return D.apply(this,arguments)}finally{h=j}}}})(Wp);Vp.exports=Wp;var n_=Vp.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var i_=Xe,dr=n_;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jp=new Set,es={};function bi(t,e){ua(t,e),ua(t+"Capture",e)}function ua(t,e){for(es[t]=e,t=0;t<e.length;t++)jp.add(e[t])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,a_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jd={},eh={};function s_(t){return Fu.call(eh,t)?!0:Fu.call(Jd,t)?!1:a_.test(t)?eh[t]=!0:(Jd[t]=!0,!1)}function o_(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l_(t,e,r,n){if(e===null||typeof e>"u"||o_(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,r,n,i,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wc=/[\-:]([a-z])/g;function jc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wc,jc);Nt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wc,jc);Nt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wc,jc);Nt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xc(t,e,r,n){var i=Nt.hasOwnProperty(e)?Nt[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l_(e,r,i,n)&&(r=null),n||i===null?s_(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var gn=i_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ns=Symbol.for("react.element"),Hi=Symbol.for("react.portal"),Gi=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),Xp=Symbol.for("react.provider"),qp=Symbol.for("react.context"),Yc=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),$c=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),Yp=Symbol.for("react.offscreen"),th=Symbol.iterator;function wa(t){return t===null||typeof t!="object"?null:(t=th&&t[th]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Dl;function za(t){if(Dl===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Dl=e&&e[1]||""}return`
`+Dl+t}var Ul=!1;function Il(t,e){if(!t||Ul)return"";Ul=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=n.stack.split(`
`),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==a[o]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{Ul=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?za(t):""}function u_(t){switch(t.tag){case 5:return za(t.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 2:case 15:return t=Il(t.type,!1),t;case 11:return t=Il(t.type.render,!1),t;case 1:return t=Il(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gi:return"Fragment";case Hi:return"Portal";case zu:return"Profiler";case qc:return"StrictMode";case Bu:return"Suspense";case Hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qp:return(t.displayName||"Context")+".Consumer";case Xp:return(t._context.displayName||"Context")+".Provider";case Yc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $c:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case En:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function c_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $p(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d_(t){var e=$p(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ds(t){t._valueTracker||(t._valueTracker=d_(t))}function Kp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=$p(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function Po(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vu(t,e){var r=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function rh(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=Gn(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zp(t,e){e=e.checked,e!=null&&Xc(t,"checked",e,!1)}function Wu(t,e){Zp(t,e);var r=Gn(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ju(t,e.type,r):e.hasOwnProperty("defaultValue")&&ju(t,e.type,Gn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nh(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function ju(t,e,r){(e!=="number"||Po(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ba=Array.isArray;function ta(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+Gn(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ih(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(Z(92));if(Ba(r)){if(1<r.length)throw Error(Z(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Gn(r)}}function Qp(t,e){var r=Gn(e.value),n=Gn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function ah(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Us,em=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Us=Us||document.createElement("div"),Us.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Us.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ts(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h_=["Webkit","ms","Moz","O"];Object.keys(Wa).forEach(function(t){h_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wa[e]=Wa[t]})});function tm(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Wa.hasOwnProperty(t)&&Wa[t]?(""+e).trim():e+"px"}function rm(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=tm(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var f_=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(f_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ku=null;function Kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zu=null,ra=null,na=null;function sh(t){if(t=bs(t)){if(typeof Zu!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=hl(e),Zu(t.stateNode,t.type,e))}}function nm(t){ra?na?na.push(t):na=[t]:ra=t}function im(){if(ra){var t=ra,e=na;if(na=ra=null,sh(t),e)for(t=0;t<e.length;t++)sh(e[t])}}function am(t,e){return t(e)}function sm(){}var Ol=!1;function om(t,e,r){if(Ol)return t(e,r);Ol=!0;try{return am(t,e,r)}finally{Ol=!1,(ra!==null||na!==null)&&(sm(),im())}}function rs(t,e){var r=t.stateNode;if(r===null)return null;var n=hl(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(Z(231,e,typeof r));return r}var Qu=!1;if(dn)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{Qu=!1}function p_(t,e,r,n,i,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(d){this.onError(d)}}var ja=!1,No=null,Do=!1,Ju=null,m_={onError:function(t){ja=!0,No=t}};function g_(t,e,r,n,i,a,s,o,l){ja=!1,No=null,p_.apply(m_,arguments)}function v_(t,e,r,n,i,a,s,o,l){if(g_.apply(this,arguments),ja){if(ja){var u=No;ja=!1,No=null}else throw Error(Z(198));Do||(Do=!0,Ju=u)}}function Ei(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function lm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oh(t){if(Ei(t)!==t)throw Error(Z(188))}function __(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return oh(i),t;if(a===n)return oh(i),e;a=a.sibling}throw Error(Z(188))}if(r.return!==n.return)r=i,n=a;else{for(var s=!1,o=i.child;o;){if(o===r){s=!0,r=i,n=a;break}if(o===n){s=!0,n=i,r=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===r){s=!0,r=a,n=i;break}if(o===n){s=!0,n=a,r=i;break}o=o.sibling}if(!s)throw Error(Z(189))}}if(r.alternate!==n)throw Error(Z(190))}if(r.tag!==3)throw Error(Z(188));return r.stateNode.current===r?t:e}function um(t){return t=__(t),t!==null?cm(t):null}function cm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cm(t);if(e!==null)return e;t=t.sibling}return null}var dm=dr.unstable_scheduleCallback,lh=dr.unstable_cancelCallback,x_=dr.unstable_shouldYield,y_=dr.unstable_requestPaint,pt=dr.unstable_now,S_=dr.unstable_getCurrentPriorityLevel,Zc=dr.unstable_ImmediatePriority,hm=dr.unstable_UserBlockingPriority,Uo=dr.unstable_NormalPriority,b_=dr.unstable_LowPriority,fm=dr.unstable_IdlePriority,ll=null,Xr=null;function E_(t){if(Xr&&typeof Xr.onCommitFiberRoot=="function")try{Xr.onCommitFiberRoot(ll,t,void 0,(t.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:w_,M_=Math.log,T_=Math.LN2;function w_(t){return t>>>=0,t===0?32:31-(M_(t)/T_|0)|0}var Is=64,Os=4194304;function Ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Io(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,a=t.pingedLanes,s=r&268435455;if(s!==0){var o=s&~i;o!==0?n=Ha(o):(a&=s,a!==0&&(n=Ha(a)))}else s=r&~i,s!==0?n=Ha(s):a!==0&&(n=Ha(a));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,a=e&-e,i>=a||i===16&&(a&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-kr(e),i=1<<r,n|=t[r],e&=~i;return n}function A_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C_(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-kr(a),o=1<<s,l=i[s];l===-1?(!(o&r)||o&n)&&(i[s]=A_(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function ec(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pm(){var t=Is;return Is<<=1,!(Is&4194240)&&(Is=64),t}function kl(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function ys(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kr(e),t[e]=r}function R_(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-kr(r),a=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~a}}function Qc(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-kr(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var Ke=0;function mm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gm,Jc,vm,_m,xm,tc=!1,ks=[],Pn=null,Nn=null,Dn=null,ns=new Map,is=new Map,Tn=[],L_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(t,e){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":ns.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":is.delete(e.pointerId)}}function Ca(t,e,r,n,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},e!==null&&(e=bs(e),e!==null&&Jc(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function P_(t,e,r,n,i){switch(e){case"focusin":return Pn=Ca(Pn,t,e,r,n,i),!0;case"dragenter":return Nn=Ca(Nn,t,e,r,n,i),!0;case"mouseover":return Dn=Ca(Dn,t,e,r,n,i),!0;case"pointerover":var a=i.pointerId;return ns.set(a,Ca(ns.get(a)||null,t,e,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,is.set(a,Ca(is.get(a)||null,t,e,r,n,i)),!0}return!1}function ym(t){var e=oi(t.target);if(e!==null){var r=Ei(e);if(r!==null){if(e=r.tag,e===13){if(e=lm(r),e!==null){t.blockedOn=e,xm(t.priority,function(){vm(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=rc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Ku=n,r.target.dispatchEvent(n),Ku=null}else return e=bs(r),e!==null&&Jc(e),t.blockedOn=r,!1;e.shift()}return!0}function ch(t,e,r){xo(t)&&r.delete(e)}function N_(){tc=!1,Pn!==null&&xo(Pn)&&(Pn=null),Nn!==null&&xo(Nn)&&(Nn=null),Dn!==null&&xo(Dn)&&(Dn=null),ns.forEach(ch),is.forEach(ch)}function Ra(t,e){t.blockedOn===e&&(t.blockedOn=null,tc||(tc=!0,dr.unstable_scheduleCallback(dr.unstable_NormalPriority,N_)))}function as(t){function e(i){return Ra(i,t)}if(0<ks.length){Ra(ks[0],t);for(var r=1;r<ks.length;r++){var n=ks[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Pn!==null&&Ra(Pn,t),Nn!==null&&Ra(Nn,t),Dn!==null&&Ra(Dn,t),ns.forEach(e),is.forEach(e),r=0;r<Tn.length;r++)n=Tn[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<Tn.length&&(r=Tn[0],r.blockedOn===null);)ym(r),r.blockedOn===null&&Tn.shift()}var ia=gn.ReactCurrentBatchConfig,Oo=!0;function D_(t,e,r,n){var i=Ke,a=ia.transition;ia.transition=null;try{Ke=1,ed(t,e,r,n)}finally{Ke=i,ia.transition=a}}function U_(t,e,r,n){var i=Ke,a=ia.transition;ia.transition=null;try{Ke=4,ed(t,e,r,n)}finally{Ke=i,ia.transition=a}}function ed(t,e,r,n){if(Oo){var i=rc(t,e,r,n);if(i===null)ql(t,e,n,ko,r),uh(t,n);else if(P_(i,t,e,r,n))n.stopPropagation();else if(uh(t,n),e&4&&-1<L_.indexOf(t)){for(;i!==null;){var a=bs(i);if(a!==null&&gm(a),a=rc(t,e,r,n),a===null&&ql(t,e,n,ko,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else ql(t,e,n,null,r)}}var ko=null;function rc(t,e,r,n){if(ko=null,t=Kc(n),t=oi(t),t!==null)if(e=Ei(t),e===null)t=null;else if(r=e.tag,r===13){if(t=lm(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ko=t,null}function Sm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S_()){case Zc:return 1;case hm:return 4;case Uo:case b_:return 16;case fm:return 536870912;default:return 16}default:return 16}}var An=null,td=null,yo=null;function bm(){if(yo)return yo;var t,e=td,r=e.length,n,i="value"in An?An.value:An.textContent,a=i.length;for(t=0;t<r&&e[t]===i[t];t++);var s=r-t;for(n=1;n<=s&&e[r-n]===i[a-n];n++);return yo=i.slice(t,1<n?1-n:void 0)}function So(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fs(){return!0}function dh(){return!1}function fr(t){function e(r,n,i,a,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(r=t[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Fs:dh,this.isPropagationStopped=dh,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),e}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=fr(Sa),Ss=ct({},Sa,{view:0,detail:0}),I_=fr(Ss),Fl,zl,La,ul=ct({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==La&&(La&&t.type==="mousemove"?(Fl=t.screenX-La.screenX,zl=t.screenY-La.screenY):zl=Fl=0,La=t),Fl)},movementY:function(t){return"movementY"in t?t.movementY:zl}}),hh=fr(ul),O_=ct({},ul,{dataTransfer:0}),k_=fr(O_),F_=ct({},Ss,{relatedTarget:0}),Bl=fr(F_),z_=ct({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),B_=fr(z_),H_=ct({},Sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),G_=fr(H_),V_=ct({},Sa,{data:0}),fh=fr(V_),W_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=X_[t])?!!e[t]:!1}function nd(){return q_}var Y_=ct({},Ss,{key:function(t){if(t.key){var e=W_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=So(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?j_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nd,charCode:function(t){return t.type==="keypress"?So(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?So(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$_=fr(Y_),K_=ct({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=fr(K_),Z_=ct({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nd}),Q_=fr(Z_),J_=ct({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=fr(J_),t0=ct({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r0=fr(t0),n0=[9,13,27,32],id=dn&&"CompositionEvent"in window,Xa=null;dn&&"documentMode"in document&&(Xa=document.documentMode);var i0=dn&&"TextEvent"in window&&!Xa,Em=dn&&(!id||Xa&&8<Xa&&11>=Xa),mh=" ",gh=!1;function Mm(t,e){switch(t){case"keyup":return n0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vi=!1;function a0(t,e){switch(t){case"compositionend":return Tm(e);case"keypress":return e.which!==32?null:(gh=!0,mh);case"textInput":return t=e.data,t===mh&&gh?null:t;default:return null}}function s0(t,e){if(Vi)return t==="compositionend"||!id&&Mm(t,e)?(t=bm(),yo=td=An=null,Vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Em&&e.locale!=="ko"?null:e.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!o0[t.type]:e==="textarea"}function wm(t,e,r,n){nm(n),e=Fo(e,"onChange"),0<e.length&&(r=new rd("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var qa=null,ss=null;function l0(t){km(t,0)}function cl(t){var e=Xi(t);if(Kp(e))return t}function u0(t,e){if(t==="change")return e}var Am=!1;if(dn){var Hl;if(dn){var Gl="oninput"in document;if(!Gl){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),Gl=typeof _h.oninput=="function"}Hl=Gl}else Hl=!1;Am=Hl&&(!document.documentMode||9<document.documentMode)}function xh(){qa&&(qa.detachEvent("onpropertychange",Cm),ss=qa=null)}function Cm(t){if(t.propertyName==="value"&&cl(ss)){var e=[];wm(e,ss,t,Kc(t)),om(l0,e)}}function c0(t,e,r){t==="focusin"?(xh(),qa=e,ss=r,qa.attachEvent("onpropertychange",Cm)):t==="focusout"&&xh()}function d0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(ss)}function h0(t,e){if(t==="click")return cl(e)}function f0(t,e){if(t==="input"||t==="change")return cl(e)}function p0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zr=typeof Object.is=="function"?Object.is:p0;function os(t,e){if(zr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Fu.call(e,i)||!zr(t[i],e[i]))return!1}return!0}function yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sh(t,e){var r=yh(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=yh(r)}}function Rm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lm(){for(var t=window,e=Po();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Po(t.document)}return e}function ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function m0(t){var e=Lm(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Rm(r.ownerDocument.documentElement,r)){if(n!==null&&ad(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!t.extend&&a>n&&(i=n,n=a,a=i),i=Sh(r,a);var s=Sh(r,n);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>n?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g0=dn&&"documentMode"in document&&11>=document.documentMode,Wi=null,nc=null,Ya=null,ic=!1;function bh(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ic||Wi==null||Wi!==Po(n)||(n=Wi,"selectionStart"in n&&ad(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ya&&os(Ya,n)||(Ya=n,n=Fo(nc,"onSelect"),0<n.length&&(e=new rd("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Wi)))}function zs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var ji={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},Vl={},Pm={};dn&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function dl(t){if(Vl[t])return Vl[t];if(!ji[t])return t;var e=ji[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Pm)return Vl[t]=e[r];return t}var Nm=dl("animationend"),Dm=dl("animationiteration"),Um=dl("animationstart"),Im=dl("transitionend"),Om=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(t,e){Om.set(t,e),bi(e,[t])}for(var Wl=0;Wl<Eh.length;Wl++){var jl=Eh[Wl],v0=jl.toLowerCase(),_0=jl[0].toUpperCase()+jl.slice(1);jn(v0,"on"+_0)}jn(Nm,"onAnimationEnd");jn(Dm,"onAnimationIteration");jn(Um,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(Im,"onTransitionEnd");ua("onMouseEnter",["mouseout","mouseover"]);ua("onMouseLeave",["mouseout","mouseover"]);ua("onPointerEnter",["pointerout","pointerover"]);ua("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function Mh(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,v_(n,e,void 0,t),t.currentTarget=null}function km(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var a=void 0;if(e)for(var s=n.length-1;0<=s;s--){var o=n[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;Mh(i,o,u),a=l}else for(s=0;s<n.length;s++){if(o=n[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;Mh(i,o,u),a=l}}}if(Do)throw t=Ju,Do=!1,Ju=null,t}function nt(t,e){var r=e[uc];r===void 0&&(r=e[uc]=new Set);var n=t+"__bubble";r.has(n)||(Fm(e,t,2,!1),r.add(n))}function Xl(t,e,r){var n=0;e&&(n|=4),Fm(r,t,n,e)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function ls(t){if(!t[Bs]){t[Bs]=!0,jp.forEach(function(r){r!=="selectionchange"&&(x0.has(r)||Xl(r,!1,t),Xl(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bs]||(e[Bs]=!0,Xl("selectionchange",!1,e))}}function Fm(t,e,r,n){switch(Sm(e)){case 1:var i=D_;break;case 4:i=U_;break;default:i=ed}r=i.bind(null,e,r,t),i=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function ql(t,e,r,n,i){var a=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;o!==null;){if(s=oi(o),s===null)return;if(l=s.tag,l===5||l===6){n=a=s;continue e}o=o.parentNode}}n=n.return}om(function(){var u=a,d=Kc(r),f=[];e:{var h=Om.get(t);if(h!==void 0){var p=rd,_=t;switch(t){case"keypress":if(So(r)===0)break e;case"keydown":case"keyup":p=$_;break;case"focusin":_="focus",p=Bl;break;case"focusout":_="blur",p=Bl;break;case"beforeblur":case"afterblur":p=Bl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Q_;break;case Nm:case Dm:case Um:p=B_;break;case Im:p=e0;break;case"scroll":p=I_;break;case"wheel":p=r0;break;case"copy":case"cut":case"paste":p=G_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ph}var x=(e&4)!==0,v=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var m=u,g;m!==null;){g=m;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,c!==null&&(b=rs(m,c),b!=null&&x.push(us(m,b,g)))),v)break;m=m.return}0<x.length&&(h=new p(h,_,null,r,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&r!==Ku&&(_=r.relatedTarget||r.fromElement)&&(oi(_)||_[hn]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=r.relatedTarget||r.toElement,p=u,_=_?oi(_):null,_!==null&&(v=Ei(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=hh,b="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=ph,b="onPointerLeave",c="onPointerEnter",m="pointer"),v=p==null?h:Xi(p),g=_==null?h:Xi(_),h=new x(b,m+"leave",p,r,d),h.target=v,h.relatedTarget=g,b=null,oi(d)===u&&(x=new x(c,m+"enter",_,r,d),x.target=g,x.relatedTarget=v,b=x),v=b,p&&_)t:{for(x=p,c=_,m=0,g=x;g;g=Mi(g))m++;for(g=0,b=c;b;b=Mi(b))g++;for(;0<m-g;)x=Mi(x),m--;for(;0<g-m;)c=Mi(c),g--;for(;m--;){if(x===c||c!==null&&x===c.alternate)break t;x=Mi(x),c=Mi(c)}x=null}else x=null;p!==null&&Th(f,h,p,x,!1),_!==null&&v!==null&&Th(f,v,_,x,!0)}}e:{if(h=u?Xi(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=u0;else if(vh(h))if(Am)R=f0;else{R=d0;var A=c0}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=h0);if(R&&(R=R(t,u))){wm(f,R,r,d);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&ju(h,"number",h.value)}switch(A=u?Xi(u):window,t){case"focusin":(vh(A)||A.contentEditable==="true")&&(Wi=A,nc=u,Ya=null);break;case"focusout":Ya=nc=Wi=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,bh(f,r,d);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":bh(f,r,d)}var w;if(id)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Vi?Mm(t,r)&&(P="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Em&&r.locale!=="ko"&&(Vi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Vi&&(w=bm()):(An=d,td="value"in An?An.value:An.textContent,Vi=!0)),A=Fo(u,P),0<A.length&&(P=new fh(P,t,null,r,d),f.push({event:P,listeners:A}),w?P.data=w:(w=Tm(r),w!==null&&(P.data=w)))),(w=i0?a0(t,r):s0(t,r))&&(u=Fo(u,"onBeforeInput"),0<u.length&&(d=new fh("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:u}),d.data=w))}km(f,e)})}function us(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Fo(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=rs(t,r),a!=null&&n.unshift(us(t,a,i)),a=rs(t,e),a!=null&&n.push(us(t,a,i))),t=t.return}return n}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Th(t,e,r,n,i){for(var a=e._reactName,s=[];r!==null&&r!==n;){var o=r,l=o.alternate,u=o.stateNode;if(l!==null&&l===n)break;o.tag===5&&u!==null&&(o=u,i?(l=rs(r,a),l!=null&&s.unshift(us(r,l,o))):i||(l=rs(r,a),l!=null&&s.push(us(r,l,o)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var y0=/\r\n?/g,S0=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace(y0,`
`).replace(S0,"")}function Hs(t,e,r){if(e=wh(e),wh(t)!==e&&r)throw Error(Z(425))}function zo(){}var ac=null,sc=null;function oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lc=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(t){return Ah.resolve(null).then(t).catch(M0)}:lc;function M0(t){setTimeout(function(){throw t})}function Yl(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),as(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);as(e)}function Un(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ch(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var ba=Math.random().toString(36).slice(2),Wr="__reactFiber$"+ba,cs="__reactProps$"+ba,hn="__reactContainer$"+ba,uc="__reactEvents$"+ba,T0="__reactListeners$"+ba,w0="__reactHandles$"+ba;function oi(t){var e=t[Wr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[hn]||r[Wr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Ch(t);t!==null;){if(r=t[Wr])return r;t=Ch(t)}return e}t=r,r=t.parentNode}return null}function bs(t){return t=t[Wr]||t[hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function hl(t){return t[cs]||null}var cc=[],qi=-1;function Xn(t){return{current:t}}function at(t){0>qi||(t.current=cc[qi],cc[qi]=null,qi--)}function rt(t,e){qi++,cc[qi]=t.current,t.current=e}var Vn={},Gt=Xn(Vn),tr=Xn(!1),mi=Vn;function ca(t,e){var r=t.type.contextTypes;if(!r)return Vn;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=e[a];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function rr(t){return t=t.childContextTypes,t!=null}function Bo(){at(tr),at(Gt)}function Rh(t,e,r){if(Gt.current!==Vn)throw Error(Z(168));rt(Gt,e),rt(tr,r)}function zm(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(Z(108,c_(t)||"Unknown",i));return ct({},r,n)}function Ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vn,mi=Gt.current,rt(Gt,t),rt(tr,tr.current),!0}function Lh(t,e,r){var n=t.stateNode;if(!n)throw Error(Z(169));r?(t=zm(t,e,mi),n.__reactInternalMemoizedMergedChildContext=t,at(tr),at(Gt),rt(Gt,t)):at(tr),rt(tr,r)}var an=null,fl=!1,$l=!1;function Bm(t){an===null?an=[t]:an.push(t)}function A0(t){fl=!0,Bm(t)}function qn(){if(!$l&&an!==null){$l=!0;var t=0,e=Ke;try{var r=an;for(Ke=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}an=null,fl=!1}catch(i){throw an!==null&&(an=an.slice(t+1)),dm(Zc,qn),i}finally{Ke=e,$l=!1}}return null}var Yi=[],$i=0,Go=null,Vo=0,_r=[],xr=0,gi=null,on=1,ln="";function ti(t,e){Yi[$i++]=Vo,Yi[$i++]=Go,Go=t,Vo=e}function Hm(t,e,r){_r[xr++]=on,_r[xr++]=ln,_r[xr++]=gi,gi=t;var n=on;t=ln;var i=32-kr(n)-1;n&=~(1<<i),r+=1;var a=32-kr(e)+i;if(30<a){var s=i-i%5;a=(n&(1<<s)-1).toString(32),n>>=s,i-=s,on=1<<32-kr(e)+i|r<<i|n,ln=a+t}else on=1<<a|r<<i|n,ln=t}function sd(t){t.return!==null&&(ti(t,1),Hm(t,1,0))}function od(t){for(;t===Go;)Go=Yi[--$i],Yi[$i]=null,Vo=Yi[--$i],Yi[$i]=null;for(;t===gi;)gi=_r[--xr],_r[xr]=null,ln=_r[--xr],_r[xr]=null,on=_r[--xr],_r[xr]=null}var ur=null,lr=null,st=!1,Dr=null;function Gm(t,e){var r=Er(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Ph(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ur=t,lr=Un(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ur=t,lr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=gi!==null?{id:on,overflow:ln}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Er(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,ur=t,lr=null,!0):!1;default:return!1}}function dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hc(t){if(st){var e=lr;if(e){var r=e;if(!Ph(t,e)){if(dc(t))throw Error(Z(418));e=Un(r.nextSibling);var n=ur;e&&Ph(t,e)?Gm(n,r):(t.flags=t.flags&-4097|2,st=!1,ur=t)}}else{if(dc(t))throw Error(Z(418));t.flags=t.flags&-4097|2,st=!1,ur=t}}}function Nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ur=t}function Gs(t){if(t!==ur)return!1;if(!st)return Nh(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oc(t.type,t.memoizedProps)),e&&(e=lr)){if(dc(t))throw Vm(),Error(Z(418));for(;e;)Gm(t,e),e=Un(e.nextSibling)}if(Nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){lr=Un(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}lr=null}}else lr=ur?Un(t.stateNode.nextSibling):null;return!0}function Vm(){for(var t=lr;t;)t=Un(t.nextSibling)}function da(){lr=ur=null,st=!1}function ld(t){Dr===null?Dr=[t]:Dr.push(t)}var C0=gn.ReactCurrentBatchConfig;function Pa(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(Z(309));var n=r.stateNode}if(!n)throw Error(Z(147,t));var i=n,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=i.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(Z(284));if(!r._owner)throw Error(Z(290,t))}return t}function Vs(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dh(t){var e=t._init;return e(t._payload)}function Wm(t){function e(c,m){if(t){var g=c.deletions;g===null?(c.deletions=[m],c.flags|=16):g.push(m)}}function r(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function n(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function i(c,m){return c=Fn(c,m),c.index=0,c.sibling=null,c}function a(c,m,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<m?(c.flags|=2,m):g):(c.flags|=2,m)):(c.flags|=1048576,m)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,m,g,b){return m===null||m.tag!==6?(m=ru(g,c.mode,b),m.return=c,m):(m=i(m,g),m.return=c,m)}function l(c,m,g,b){var R=g.type;return R===Gi?d(c,m,g.props.children,b,g.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===En&&Dh(R)===m.type)?(b=i(m,g.props),b.ref=Pa(c,m,g),b.return=c,b):(b=Co(g.type,g.key,g.props,null,c.mode,b),b.ref=Pa(c,m,g),b.return=c,b)}function u(c,m,g,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=nu(g,c.mode,b),m.return=c,m):(m=i(m,g.children||[]),m.return=c,m)}function d(c,m,g,b,R){return m===null||m.tag!==7?(m=di(g,c.mode,b,R),m.return=c,m):(m=i(m,g),m.return=c,m)}function f(c,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ru(""+m,c.mode,g),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ns:return g=Co(m.type,m.key,m.props,null,c.mode,g),g.ref=Pa(c,null,m),g.return=c,g;case Hi:return m=nu(m,c.mode,g),m.return=c,m;case En:var b=m._init;return f(c,b(m._payload),g)}if(Ba(m)||wa(m))return m=di(m,c.mode,g,null),m.return=c,m;Vs(c,m)}return null}function h(c,m,g,b){var R=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:o(c,m,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ns:return g.key===R?l(c,m,g,b):null;case Hi:return g.key===R?u(c,m,g,b):null;case En:return R=g._init,h(c,m,R(g._payload),b)}if(Ba(g)||wa(g))return R!==null?null:d(c,m,g,b,null);Vs(c,g)}return null}function p(c,m,g,b,R){if(typeof b=="string"&&b!==""||typeof b=="number")return c=c.get(g)||null,o(m,c,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ns:return c=c.get(b.key===null?g:b.key)||null,l(m,c,b,R);case Hi:return c=c.get(b.key===null?g:b.key)||null,u(m,c,b,R);case En:var A=b._init;return p(c,m,g,A(b._payload),R)}if(Ba(b)||wa(b))return c=c.get(g)||null,d(m,c,b,R,null);Vs(m,b)}return null}function _(c,m,g,b){for(var R=null,A=null,w=m,P=m=0,y=null;w!==null&&P<g.length;P++){w.index>P?(y=w,w=null):y=w.sibling;var E=h(c,w,g[P],b);if(E===null){w===null&&(w=y);break}t&&w&&E.alternate===null&&e(c,w),m=a(E,m,P),A===null?R=E:A.sibling=E,A=E,w=y}if(P===g.length)return r(c,w),st&&ti(c,P),R;if(w===null){for(;P<g.length;P++)w=f(c,g[P],b),w!==null&&(m=a(w,m,P),A===null?R=w:A.sibling=w,A=w);return st&&ti(c,P),R}for(w=n(c,w);P<g.length;P++)y=p(w,c,P,g[P],b),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?P:y.key),m=a(y,m,P),A===null?R=y:A.sibling=y,A=y);return t&&w.forEach(function(G){return e(c,G)}),st&&ti(c,P),R}function x(c,m,g,b){var R=wa(g);if(typeof R!="function")throw Error(Z(150));if(g=R.call(g),g==null)throw Error(Z(151));for(var A=R=null,w=m,P=m=0,y=null,E=g.next();w!==null&&!E.done;P++,E=g.next()){w.index>P?(y=w,w=null):y=w.sibling;var G=h(c,w,E.value,b);if(G===null){w===null&&(w=y);break}t&&w&&G.alternate===null&&e(c,w),m=a(G,m,P),A===null?R=G:A.sibling=G,A=G,w=y}if(E.done)return r(c,w),st&&ti(c,P),R;if(w===null){for(;!E.done;P++,E=g.next())E=f(c,E.value,b),E!==null&&(m=a(E,m,P),A===null?R=E:A.sibling=E,A=E);return st&&ti(c,P),R}for(w=n(c,w);!E.done;P++,E=g.next())E=p(w,c,P,E.value,b),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?P:E.key),m=a(E,m,P),A===null?R=E:A.sibling=E,A=E);return t&&w.forEach(function(X){return e(c,X)}),st&&ti(c,P),R}function v(c,m,g,b){if(typeof g=="object"&&g!==null&&g.type===Gi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ns:e:{for(var R=g.key,A=m;A!==null;){if(A.key===R){if(R=g.type,R===Gi){if(A.tag===7){r(c,A.sibling),m=i(A,g.props.children),m.return=c,c=m;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===En&&Dh(R)===A.type){r(c,A.sibling),m=i(A,g.props),m.ref=Pa(c,A,g),m.return=c,c=m;break e}r(c,A);break}else e(c,A);A=A.sibling}g.type===Gi?(m=di(g.props.children,c.mode,b,g.key),m.return=c,c=m):(b=Co(g.type,g.key,g.props,null,c.mode,b),b.ref=Pa(c,m,g),b.return=c,c=b)}return s(c);case Hi:e:{for(A=g.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){r(c,m.sibling),m=i(m,g.children||[]),m.return=c,c=m;break e}else{r(c,m);break}else e(c,m);m=m.sibling}m=nu(g,c.mode,b),m.return=c,c=m}return s(c);case En:return A=g._init,v(c,m,A(g._payload),b)}if(Ba(g))return _(c,m,g,b);if(wa(g))return x(c,m,g,b);Vs(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(r(c,m.sibling),m=i(m,g),m.return=c,c=m):(r(c,m),m=ru(g,c.mode,b),m.return=c,c=m),s(c)):r(c,m)}return v}var ha=Wm(!0),jm=Wm(!1),Wo=Xn(null),jo=null,Ki=null,ud=null;function cd(){ud=Ki=jo=null}function dd(t){var e=Wo.current;at(Wo),t._currentValue=e}function fc(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function aa(t,e){jo=t,ud=Ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(er=!0),t.firstContext=null)}function Tr(t){var e=t._currentValue;if(ud!==t)if(t={context:t,memoizedValue:e,next:null},Ki===null){if(jo===null)throw Error(Z(308));Ki=t,jo.dependencies={lanes:0,firstContext:t}}else Ki=Ki.next=t;return e}var li=null;function hd(t){li===null?li=[t]:li.push(t)}function Xm(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,hd(e)):(r.next=i.next,i.next=r),e.interleaved=r,fn(t,n)}function fn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Mn=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function In(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,qe&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,fn(t,r)}return i=n.interleaved,i===null?(e.next=e,hd(n)):(e.next=i.next,i.next=e),n.interleaved=e,fn(t,r)}function bo(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Qc(t,r)}}function Uh(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?i=a=e:a=a.next=e}else i=a=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Xo(t,e,r,n){var i=t.updateQueue;Mn=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?a=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;s=0,d=u=l=null,o=a;do{var h=o.lane,p=o.eventTime;if((n&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(h=e,p=r,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=ct({},f,h);break e;case 2:Mn=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,s|=h;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else a===null&&(i.shared.lanes=0);_i|=s,t.lanes=s,t.memoizedState=f}}function Ih(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(Z(191,i));i.call(n)}}}var Es={},qr=Xn(Es),ds=Xn(Es),hs=Xn(Es);function ui(t){if(t===Es)throw Error(Z(174));return t}function pd(t,e){switch(rt(hs,e),rt(ds,t),rt(qr,Es),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}at(qr),rt(qr,e)}function fa(){at(qr),at(ds),at(hs)}function Ym(t){ui(hs.current);var e=ui(qr.current),r=qu(e,t.type);e!==r&&(rt(ds,t),rt(qr,r))}function md(t){ds.current===t&&(at(qr),at(ds))}var lt=Xn(0);function qo(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kl=[];function gd(){for(var t=0;t<Kl.length;t++)Kl[t]._workInProgressVersionPrimary=null;Kl.length=0}var Eo=gn.ReactCurrentDispatcher,Zl=gn.ReactCurrentBatchConfig,vi=0,ut=null,xt=null,wt=null,Yo=!1,$a=!1,fs=0,R0=0;function Ot(){throw Error(Z(321))}function vd(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!zr(t[r],e[r]))return!1;return!0}function _d(t,e,r,n,i,a){if(vi=a,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Eo.current=t===null||t.memoizedState===null?D0:U0,t=r(n,i),$a){a=0;do{if($a=!1,fs=0,25<=a)throw Error(Z(301));a+=1,wt=xt=null,e.updateQueue=null,Eo.current=I0,t=r(n,i)}while($a)}if(Eo.current=$o,e=xt!==null&&xt.next!==null,vi=0,wt=xt=ut=null,Yo=!1,e)throw Error(Z(300));return t}function xd(){var t=fs!==0;return fs=0,t}function Gr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?ut.memoizedState=wt=t:wt=wt.next=t,wt}function wr(){if(xt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=wt===null?ut.memoizedState:wt.next;if(e!==null)wt=e,xt=t;else{if(t===null)throw Error(Z(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},wt===null?ut.memoizedState=wt=t:wt=wt.next=t}return wt}function ps(t,e){return typeof e=="function"?e(t):e}function Ql(t){var e=wr(),r=e.queue;if(r===null)throw Error(Z(311));r.lastRenderedReducer=t;var n=xt,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var o=s=null,l=null,u=a;do{var d=u.lane;if((vi&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,s=n):l=l.next=f,ut.lanes|=d,_i|=d}u=u.next}while(u!==null&&u!==a);l===null?s=n:l.next=o,zr(n,e.memoizedState)||(er=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=l,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do a=i.lane,ut.lanes|=a,_i|=a,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Jl(t){var e=wr(),r=e.queue;if(r===null)throw Error(Z(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,a=e.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do a=t(a,s.action),s=s.next;while(s!==i);zr(a,e.memoizedState)||(er=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,n]}function $m(){}function Km(t,e){var r=ut,n=wr(),i=e(),a=!zr(n.memoizedState,i);if(a&&(n.memoizedState=i,er=!0),n=n.queue,yd(Jm.bind(null,r,n,t),[t]),n.getSnapshot!==e||a||wt!==null&&wt.memoizedState.tag&1){if(r.flags|=2048,ms(9,Qm.bind(null,r,n,i,e),void 0,null),Ct===null)throw Error(Z(349));vi&30||Zm(r,e,i)}return i}function Zm(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Qm(t,e,r,n){e.value=r,e.getSnapshot=n,eg(e)&&tg(t)}function Jm(t,e,r){return r(function(){eg(e)&&tg(t)})}function eg(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!zr(t,r)}catch{return!0}}function tg(t){var e=fn(t,1);e!==null&&Fr(e,t,1,-1)}function Oh(t){var e=Gr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:t},e.queue=t,t=t.dispatch=N0.bind(null,ut,t),[e.memoizedState,t]}function ms(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function rg(){return wr().memoizedState}function Mo(t,e,r,n){var i=Gr();ut.flags|=t,i.memoizedState=ms(1|e,r,void 0,n===void 0?null:n)}function pl(t,e,r,n){var i=wr();n=n===void 0?null:n;var a=void 0;if(xt!==null){var s=xt.memoizedState;if(a=s.destroy,n!==null&&vd(n,s.deps)){i.memoizedState=ms(e,r,a,n);return}}ut.flags|=t,i.memoizedState=ms(1|e,r,a,n)}function kh(t,e){return Mo(8390656,8,t,e)}function yd(t,e){return pl(2048,8,t,e)}function ng(t,e){return pl(4,2,t,e)}function ig(t,e){return pl(4,4,t,e)}function ag(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sg(t,e,r){return r=r!=null?r.concat([t]):null,pl(4,4,ag.bind(null,e,t),r)}function Sd(){}function og(t,e){var r=wr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&vd(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function lg(t,e){var r=wr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&vd(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function ug(t,e,r){return vi&21?(zr(r,e)||(r=pm(),ut.lanes|=r,_i|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,er=!0),t.memoizedState=r)}function L0(t,e){var r=Ke;Ke=r!==0&&4>r?r:4,t(!0);var n=Zl.transition;Zl.transition={};try{t(!1),e()}finally{Ke=r,Zl.transition=n}}function cg(){return wr().memoizedState}function P0(t,e,r){var n=kn(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},dg(t))hg(e,r);else if(r=Xm(t,e,r,n),r!==null){var i=Yt();Fr(r,t,n,i),fg(r,e,n)}}function N0(t,e,r){var n=kn(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(dg(t))hg(e,i);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,r);if(i.hasEagerState=!0,i.eagerState=o,zr(o,s)){var l=e.interleaved;l===null?(i.next=i,hd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}r=Xm(t,e,i,n),r!==null&&(i=Yt(),Fr(r,t,n,i),fg(r,e,n))}}function dg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function hg(t,e){$a=Yo=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function fg(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Qc(t,r)}}var $o={readContext:Tr,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},D0={readContext:Tr,useCallback:function(t,e){return Gr().memoizedState=[t,e===void 0?null:e],t},useContext:Tr,useEffect:kh,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Mo(4194308,4,ag.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Mo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mo(4,2,t,e)},useMemo:function(t,e){var r=Gr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=Gr();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=P0.bind(null,ut,t),[n.memoizedState,t]},useRef:function(t){var e=Gr();return t={current:t},e.memoizedState=t},useState:Oh,useDebugValue:Sd,useDeferredValue:function(t){return Gr().memoizedState=t},useTransition:function(){var t=Oh(!1),e=t[0];return t=L0.bind(null,t[1]),Gr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=ut,i=Gr();if(st){if(r===void 0)throw Error(Z(407));r=r()}else{if(r=e(),Ct===null)throw Error(Z(349));vi&30||Zm(n,e,r)}i.memoizedState=r;var a={value:r,getSnapshot:e};return i.queue=a,kh(Jm.bind(null,n,a,t),[t]),n.flags|=2048,ms(9,Qm.bind(null,n,a,r,e),void 0,null),r},useId:function(){var t=Gr(),e=Ct.identifierPrefix;if(st){var r=ln,n=on;r=(n&~(1<<32-kr(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=fs++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=R0++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U0={readContext:Tr,useCallback:og,useContext:Tr,useEffect:yd,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:lg,useReducer:Ql,useRef:rg,useState:function(){return Ql(ps)},useDebugValue:Sd,useDeferredValue:function(t){var e=wr();return ug(e,xt.memoizedState,t)},useTransition:function(){var t=Ql(ps)[0],e=wr().memoizedState;return[t,e]},useMutableSource:$m,useSyncExternalStore:Km,useId:cg,unstable_isNewReconciler:!1},I0={readContext:Tr,useCallback:og,useContext:Tr,useEffect:yd,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:lg,useReducer:Jl,useRef:rg,useState:function(){return Jl(ps)},useDebugValue:Sd,useDeferredValue:function(t){var e=wr();return xt===null?e.memoizedState=t:ug(e,xt.memoizedState,t)},useTransition:function(){var t=Jl(ps)[0],e=wr().memoizedState;return[t,e]},useMutableSource:$m,useSyncExternalStore:Km,useId:cg,unstable_isNewReconciler:!1};function Pr(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function pc(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:ct({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ml={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=Yt(),i=kn(t),a=cn(n,i);a.payload=e,r!=null&&(a.callback=r),e=In(t,a,i),e!==null&&(Fr(e,t,i,n),bo(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=Yt(),i=kn(t),a=cn(n,i);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=In(t,a,i),e!==null&&(Fr(e,t,i,n),bo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Yt(),n=kn(t),i=cn(r,n);i.tag=2,e!=null&&(i.callback=e),e=In(t,i,n),e!==null&&(Fr(e,t,n,r),bo(e,t,n))}};function Fh(t,e,r,n,i,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,a,s):e.prototype&&e.prototype.isPureReactComponent?!os(r,n)||!os(i,a):!0}function pg(t,e,r){var n=!1,i=Vn,a=e.contextType;return typeof a=="object"&&a!==null?a=Tr(a):(i=rr(e)?mi:Gt.current,n=e.contextTypes,a=(n=n!=null)?ca(t,i):Vn),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ml,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function zh(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&ml.enqueueReplaceState(e,e.state,null)}function mc(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},fd(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=Tr(a):(a=rr(e)?mi:Gt.current,i.context=ca(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(pc(t,e,a,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ml.enqueueReplaceState(i,i.state,null),Xo(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function pa(t,e){try{var r="",n=e;do r+=u_(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function eu(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function gc(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function mg(t,e,r){r=cn(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Zo||(Zo=!0,Tc=n),gc(t,e)},r}function gg(t,e,r){r=cn(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){gc(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){gc(t,e),typeof n!="function"&&(On===null?On=new Set([this]):On.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function Bh(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new O0;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=K0.bind(null,t,e,r),e.then(t,t))}function Hh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gh(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=cn(-1,1),e.tag=2,In(r,e,1))),r.lanes|=1),t)}var k0=gn.ReactCurrentOwner,er=!1;function Xt(t,e,r,n){e.child=t===null?jm(e,null,r,n):ha(e,t.child,r,n)}function Vh(t,e,r,n,i){r=r.render;var a=e.ref;return aa(e,i),n=_d(t,e,r,n,a,i),r=xd(),t!==null&&!er?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pn(t,e,i)):(st&&r&&sd(e),e.flags|=1,Xt(t,e,n,i),e.child)}function Wh(t,e,r,n,i){if(t===null){var a=r.type;return typeof a=="function"&&!Rd(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,vg(t,e,a,n,i)):(t=Co(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&i)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:os,r(s,n)&&t.ref===e.ref)return pn(t,e,i)}return e.flags|=1,t=Fn(a,n),t.ref=e.ref,t.return=e,e.child=t}function vg(t,e,r,n,i){if(t!==null){var a=t.memoizedProps;if(os(a,n)&&t.ref===e.ref)if(er=!1,e.pendingProps=n=a,(t.lanes&i)!==0)t.flags&131072&&(er=!0);else return e.lanes=t.lanes,pn(t,e,i)}return vc(t,e,r,n,i)}function _g(t,e,r){var n=e.pendingProps,i=n.children,a=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Qi,or),or|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Qi,or),or|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,rt(Qi,or),or|=n}else a!==null?(n=a.baseLanes|r,e.memoizedState=null):n=r,rt(Qi,or),or|=n;return Xt(t,e,i,r),e.child}function xg(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function vc(t,e,r,n,i){var a=rr(r)?mi:Gt.current;return a=ca(e,a),aa(e,i),r=_d(t,e,r,n,a,i),n=xd(),t!==null&&!er?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pn(t,e,i)):(st&&n&&sd(e),e.flags|=1,Xt(t,e,r,i),e.child)}function jh(t,e,r,n,i){if(rr(r)){var a=!0;Ho(e)}else a=!1;if(aa(e,i),e.stateNode===null)To(t,e),pg(e,r,n),mc(e,r,n,i),n=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Tr(u):(u=rr(r)?mi:Gt.current,u=ca(e,u));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||l!==u)&&zh(e,s,n,u),Mn=!1;var h=e.memoizedState;s.state=h,Xo(e,n,s,i),l=e.memoizedState,o!==n||h!==l||tr.current||Mn?(typeof d=="function"&&(pc(e,r,d,n),l=e.memoizedState),(o=Mn||Fh(e,r,o,n,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=l),s.props=n,s.state=l,s.context=u,n=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,qm(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Pr(e.type,o),s.props=u,f=e.pendingProps,h=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Tr(l):(l=rr(r)?mi:Gt.current,l=ca(e,l));var p=r.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||h!==l)&&zh(e,s,n,l),Mn=!1,h=e.memoizedState,s.state=h,Xo(e,n,s,i);var _=e.memoizedState;o!==f||h!==_||tr.current||Mn?(typeof p=="function"&&(pc(e,r,p,n),_=e.memoizedState),(u=Mn||Fh(e,r,u,n,h,_,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=_),s.props=n,s.state=_,s.context=l,n=u):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),n=!1)}return _c(t,e,r,n,a,i)}function _c(t,e,r,n,i,a){xg(t,e);var s=(e.flags&128)!==0;if(!n&&!s)return i&&Lh(e,r,!1),pn(t,e,a);n=e.stateNode,k0.current=e;var o=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&s?(e.child=ha(e,t.child,null,a),e.child=ha(e,null,o,a)):Xt(t,e,o,a),e.memoizedState=n.state,i&&Lh(e,r,!0),e.child}function yg(t){var e=t.stateNode;e.pendingContext?Rh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rh(t,e.context,!1),pd(t,e.containerInfo)}function Xh(t,e,r,n,i){return da(),ld(i),e.flags|=256,Xt(t,e,r,n),e.child}var xc={dehydrated:null,treeContext:null,retryLane:0};function yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sg(t,e,r){var n=e.pendingProps,i=lt.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),rt(lt,i&1),t===null)return hc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,t=n.fallback,a?(n=e.mode,a=e.child,s={mode:"hidden",children:s},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=_l(s,n,0,null),t=di(t,n,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=yc(r),e.memoizedState=xc,t):bd(e,s));if(i=t.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return F0(t,e,s,n,o,i,r);if(a){a=n.fallback,s=e.mode,i=t.child,o=i.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=l,e.deletions=null):(n=Fn(i,l),n.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=Fn(o,a):(a=di(a,s,r,null),a.flags|=2),a.return=e,n.return=e,n.sibling=a,e.child=n,n=a,a=e.child,s=t.child.memoizedState,s=s===null?yc(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~r,e.memoizedState=xc,n}return a=t.child,t=a.sibling,n=Fn(a,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function bd(t,e){return e=_l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ws(t,e,r,n){return n!==null&&ld(n),ha(e,t.child,null,r),t=bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function F0(t,e,r,n,i,a,s){if(r)return e.flags&256?(e.flags&=-257,n=eu(Error(Z(422))),Ws(t,e,s,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=n.fallback,i=e.mode,n=_l({mode:"visible",children:n.children},i,0,null),a=di(a,i,s,null),a.flags|=2,n.return=e,a.return=e,n.sibling=a,e.child=n,e.mode&1&&ha(e,t.child,null,s),e.child.memoizedState=yc(s),e.memoizedState=xc,a);if(!(e.mode&1))return Ws(t,e,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var o=n.dgst;return n=o,a=Error(Z(419)),n=eu(a,n,void 0),Ws(t,e,s,n)}if(o=(s&t.childLanes)!==0,er||o){if(n=Ct,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,fn(t,i),Fr(n,t,i,-1))}return Cd(),n=eu(Error(Z(421))),Ws(t,e,s,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Z0.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,lr=Un(i.nextSibling),ur=e,st=!0,Dr=null,t!==null&&(_r[xr++]=on,_r[xr++]=ln,_r[xr++]=gi,on=t.id,ln=t.overflow,gi=e),e=bd(e,n.children),e.flags|=4096,e)}function qh(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),fc(t.return,e,r)}function tu(t,e,r,n,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function bg(t,e,r){var n=e.pendingProps,i=n.revealOrder,a=n.tail;if(Xt(t,e,n.children,r),n=lt.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qh(t,r,e);else if(t.tag===19)qh(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(rt(lt,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&qo(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),tu(e,!1,i,r,a);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&qo(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}tu(e,!0,r,null,a);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function To(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pn(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),_i|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,r=Fn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Fn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function z0(t,e,r){switch(e.tag){case 3:yg(e),da();break;case 5:Ym(e);break;case 1:rr(e.type)&&Ho(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;rt(Wo,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(rt(lt,lt.current&1),e.flags|=128,null):r&e.child.childLanes?Sg(t,e,r):(rt(lt,lt.current&1),t=pn(t,e,r),t!==null?t.sibling:null);rt(lt,lt.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return bg(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),rt(lt,lt.current),n)break;return null;case 22:case 23:return e.lanes=0,_g(t,e,r)}return pn(t,e,r)}var Eg,Sc,Mg,Tg;Eg=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Sc=function(){};Mg=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,ui(qr.current);var a=null;switch(r){case"input":i=Vu(t,i),n=Vu(t,n),a=[];break;case"select":i=ct({},i,{value:void 0}),n=ct({},n,{value:void 0}),a=[];break;case"textarea":i=Xu(t,i),n=Xu(t,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=zo)}Yu(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(es.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var l=n[u];if(o=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(a||(a=[]),a.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(es.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&nt("scroll",t),a||o===l||(a=[])):(a=a||[]).push(u,l))}r&&(a=a||[]).push("style",r);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};Tg=function(t,e,r,n){r!==n&&(e.flags|=4)};function Na(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function B0(t,e,r){var n=e.pendingProps;switch(od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return rr(e.type)&&Bo(),kt(e),null;case 3:return n=e.stateNode,fa(),at(tr),at(Gt),gd(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Gs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dr!==null&&(Cc(Dr),Dr=null))),Sc(t,e),kt(e),null;case 5:md(e);var i=ui(hs.current);if(r=e.type,t!==null&&e.stateNode!=null)Mg(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(Z(166));return kt(e),null}if(t=ui(qr.current),Gs(e)){n=e.stateNode,r=e.type;var a=e.memoizedProps;switch(n[Wr]=e,n[cs]=a,t=(e.mode&1)!==0,r){case"dialog":nt("cancel",n),nt("close",n);break;case"iframe":case"object":case"embed":nt("load",n);break;case"video":case"audio":for(i=0;i<Ga.length;i++)nt(Ga[i],n);break;case"source":nt("error",n);break;case"img":case"image":case"link":nt("error",n),nt("load",n);break;case"details":nt("toggle",n);break;case"input":rh(n,a),nt("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},nt("invalid",n);break;case"textarea":ih(n,a),nt("invalid",n)}Yu(r,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?n.textContent!==o&&(a.suppressHydrationWarning!==!0&&Hs(n.textContent,o,t),i=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Hs(n.textContent,o,t),i=["children",""+o]):es.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&nt("scroll",n)}switch(r){case"input":Ds(n),nh(n,a,!0);break;case"textarea":Ds(n),ah(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=zo)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jp(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=s.createElement(r,{is:n.is}):(t=s.createElement(r),r==="select"&&(s=t,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):t=s.createElementNS(t,r),t[Wr]=e,t[cs]=n,Eg(t,e,!1,!1),e.stateNode=t;e:{switch(s=$u(r,n),r){case"dialog":nt("cancel",t),nt("close",t),i=n;break;case"iframe":case"object":case"embed":nt("load",t),i=n;break;case"video":case"audio":for(i=0;i<Ga.length;i++)nt(Ga[i],t);i=n;break;case"source":nt("error",t),i=n;break;case"img":case"image":case"link":nt("error",t),nt("load",t),i=n;break;case"details":nt("toggle",t),i=n;break;case"input":rh(t,n),i=Vu(t,n),nt("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=ct({},n,{value:void 0}),nt("invalid",t);break;case"textarea":ih(t,n),i=Xu(t,n),nt("invalid",t);break;default:i=n}Yu(r,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?rm(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&em(t,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&ts(t,l):typeof l=="number"&&ts(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(es.hasOwnProperty(a)?l!=null&&a==="onScroll"&&nt("scroll",t):l!=null&&Xc(t,a,l,s))}switch(r){case"input":Ds(t),nh(t,n,!1);break;case"textarea":Ds(t),ah(t);break;case"option":n.value!=null&&t.setAttribute("value",""+Gn(n.value));break;case"select":t.multiple=!!n.multiple,a=n.value,a!=null?ta(t,!!n.multiple,a,!1):n.defaultValue!=null&&ta(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=zo)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)Tg(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(Z(166));if(r=ui(hs.current),ui(qr.current),Gs(e)){if(n=e.stateNode,r=e.memoizedProps,n[Wr]=e,(a=n.nodeValue!==r)&&(t=ur,t!==null))switch(t.tag){case 3:Hs(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hs(n.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Wr]=e,e.stateNode=n}return kt(e),null;case 13:if(at(lt),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&lr!==null&&e.mode&1&&!(e.flags&128))Vm(),da(),e.flags|=98560,a=!1;else if(a=Gs(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(Z(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Z(317));a[Wr]=e}else da(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),a=!1}else Dr!==null&&(Cc(Dr),Dr=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?yt===0&&(yt=3):Cd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return fa(),Sc(t,e),t===null&&ls(e.stateNode.containerInfo),kt(e),null;case 10:return dd(e.type._context),kt(e),null;case 17:return rr(e.type)&&Bo(),kt(e),null;case 19:if(at(lt),a=e.memoizedState,a===null)return kt(e),null;if(n=(e.flags&128)!==0,s=a.rendering,s===null)if(n)Na(a,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=qo(t),s!==null){for(e.flags|=128,Na(a,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)a=r,t=n,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return rt(lt,lt.current&1|2),e.child}t=t.sibling}a.tail!==null&&pt()>ma&&(e.flags|=128,n=!0,Na(a,!1),e.lanes=4194304)}else{if(!n)if(t=qo(s),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Na(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!st)return kt(e),null}else 2*pt()-a.renderingStartTime>ma&&r!==1073741824&&(e.flags|=128,n=!0,Na(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(r=a.last,r!==null?r.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=pt(),e.sibling=null,r=lt.current,rt(lt,n?r&1|2:r&1),e):(kt(e),null);case 22:case 23:return Ad(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?or&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function H0(t,e){switch(od(e),e.tag){case 1:return rr(e.type)&&Bo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fa(),at(tr),at(Gt),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return md(e),null;case 13:if(at(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));da()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(lt),null;case 4:return fa(),null;case 10:return dd(e.type._context),null;case 22:case 23:return Ad(),null;case 24:return null;default:return null}}var js=!1,Bt=!1,G0=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Zi(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ht(t,e,n)}else r.current=null}function wg(t,e,r){try{r()}catch(n){ht(t,e,n)}}var Yh=!1;function V0(t,e){if(ac=Oo,t=Lm(),ad(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,o=-1,l=-1,u=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==r||i!==0&&f.nodeType!==3||(o=s+i),f!==a||n!==0&&f.nodeType!==3||(l=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===r&&++u===i&&(o=s),h===a&&++d===n&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}r=o===-1||l===-1?null:{start:o,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(sc={focusedElem:t,selectionRange:r},Oo=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){e=ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,v=_.memoizedState,c=e.stateNode,m=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Pr(e.type,x),v);c.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(b){ht(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}return _=Yh,Yh=!1,_}function Ka(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&wg(e,r,a)}i=i.next}while(i!==n)}}function gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function bc(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Ag(t){var e=t.alternate;e!==null&&(t.alternate=null,Ag(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wr],delete e[cs],delete e[uc],delete e[T0],delete e[w0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cg(t){return t.tag===5||t.tag===3||t.tag===4}function $h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ec(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=zo));else if(n!==4&&(t=t.child,t!==null))for(Ec(t,e,r),t=t.sibling;t!==null;)Ec(t,e,r),t=t.sibling}function Mc(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Mc(t,e,r),t=t.sibling;t!==null;)Mc(t,e,r),t=t.sibling}var Rt=null,Nr=!1;function vn(t,e,r){for(r=r.child;r!==null;)Rg(t,e,r),r=r.sibling}function Rg(t,e,r){if(Xr&&typeof Xr.onCommitFiberUnmount=="function")try{Xr.onCommitFiberUnmount(ll,r)}catch{}switch(r.tag){case 5:Bt||Zi(r,e);case 6:var n=Rt,i=Nr;Rt=null,vn(t,e,r),Rt=n,Nr=i,Rt!==null&&(Nr?(t=Rt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Rt.removeChild(r.stateNode));break;case 18:Rt!==null&&(Nr?(t=Rt,r=r.stateNode,t.nodeType===8?Yl(t.parentNode,r):t.nodeType===1&&Yl(t,r),as(t)):Yl(Rt,r.stateNode));break;case 4:n=Rt,i=Nr,Rt=r.stateNode.containerInfo,Nr=!0,vn(t,e,r),Rt=n,Nr=i;break;case 0:case 11:case 14:case 15:if(!Bt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&wg(r,e,s),i=i.next}while(i!==n)}vn(t,e,r);break;case 1:if(!Bt&&(Zi(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){ht(r,e,o)}vn(t,e,r);break;case 21:vn(t,e,r);break;case 22:r.mode&1?(Bt=(n=Bt)||r.memoizedState!==null,vn(t,e,r),Bt=n):vn(t,e,r);break;default:vn(t,e,r)}}function Kh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new G0),e.forEach(function(n){var i=Q0.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ar(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Rt=o.stateNode,Nr=!1;break e;case 3:Rt=o.stateNode.containerInfo,Nr=!0;break e;case 4:Rt=o.stateNode.containerInfo,Nr=!0;break e}o=o.return}if(Rt===null)throw Error(Z(160));Rg(a,s,i),Rt=null,Nr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ht(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lg(e,t),e=e.sibling}function Lg(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ar(e,t),Hr(t),n&4){try{Ka(3,t,t.return),gl(3,t)}catch(x){ht(t,t.return,x)}try{Ka(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:Ar(e,t),Hr(t),n&512&&r!==null&&Zi(r,r.return);break;case 5:if(Ar(e,t),Hr(t),n&512&&r!==null&&Zi(r,r.return),t.flags&32){var i=t.stateNode;try{ts(i,"")}catch(x){ht(t,t.return,x)}}if(n&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,s=r!==null?r.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Zp(i,a),$u(o,s);var u=$u(o,a);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?rm(i,f):d==="dangerouslySetInnerHTML"?em(i,f):d==="children"?ts(i,f):Xc(i,d,f,u)}switch(o){case"input":Wu(i,a);break;case"textarea":Qp(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?ta(i,!!a.multiple,p,!1):h!==!!a.multiple&&(a.defaultValue!=null?ta(i,!!a.multiple,a.defaultValue,!0):ta(i,!!a.multiple,a.multiple?[]:"",!1))}i[cs]=a}catch(x){ht(t,t.return,x)}}break;case 6:if(Ar(e,t),Hr(t),n&4){if(t.stateNode===null)throw Error(Z(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=a}catch(x){ht(t,t.return,x)}}break;case 3:if(Ar(e,t),Hr(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{as(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:Ar(e,t),Hr(t);break;case 13:Ar(e,t),Hr(t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Td=pt())),n&4&&Kh(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||d,Ar(e,t),Bt=u):Ar(e,t),Hr(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(ce=t,d=t.child;d!==null;){for(f=ce=d;ce!==null;){switch(h=ce,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ka(4,h,h.return);break;case 1:Zi(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){n=h,r=h.return;try{e=n,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){ht(n,r,x)}}break;case 5:Zi(h,h.return);break;case 22:if(h.memoizedState!==null){Qh(f);continue}}p!==null?(p.return=h,ce=p):Qh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=tm("display",s))}catch(x){ht(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ht(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ar(e,t),Hr(t),n&4&&Kh(t);break;case 21:break;default:Ar(e,t),Hr(t)}}function Hr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Cg(r)){var n=r;break e}r=r.return}throw Error(Z(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(ts(i,""),n.flags&=-33);var a=$h(t);Mc(t,a,i);break;case 3:case 4:var s=n.stateNode.containerInfo,o=$h(t);Ec(t,o,s);break;default:throw Error(Z(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function W0(t,e,r){ce=t,Pg(t)}function Pg(t,e,r){for(var n=(t.mode&1)!==0;ce!==null;){var i=ce,a=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||js;if(!s){var o=i.alternate,l=o!==null&&o.memoizedState!==null||Bt;o=js;var u=Bt;if(js=s,(Bt=l)&&!u)for(ce=i;ce!==null;)s=ce,l=s.child,s.tag===22&&s.memoizedState!==null?Jh(i):l!==null?(l.return=s,ce=l):Jh(i);for(;a!==null;)ce=a,Pg(a),a=a.sibling;ce=i,js=o,Bt=u}Zh(t)}else i.subtreeFlags&8772&&a!==null?(a.return=i,ce=a):Zh(t)}}function Zh(t){for(;ce!==null;){var e=ce;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||gl(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Bt)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:Pr(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Ih(e,a,n);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Ih(e,s,r)}break;case 5:var o=e.stateNode;if(r===null&&e.flags&4){r=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&as(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Bt||e.flags&512&&bc(e)}catch(h){ht(e,e.return,h)}}if(e===t){ce=null;break}if(r=e.sibling,r!==null){r.return=e.return,ce=r;break}ce=e.return}}function Qh(t){for(;ce!==null;){var e=ce;if(e===t){ce=null;break}var r=e.sibling;if(r!==null){r.return=e.return,ce=r;break}ce=e.return}}function Jh(t){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{gl(4,e)}catch(l){ht(e,r,l)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(l){ht(e,i,l)}}var a=e.return;try{bc(e)}catch(l){ht(e,a,l)}break;case 5:var s=e.return;try{bc(e)}catch(l){ht(e,s,l)}}}catch(l){ht(e,e.return,l)}if(e===t){ce=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ce=o;break}ce=e.return}}var j0=Math.ceil,Ko=gn.ReactCurrentDispatcher,Ed=gn.ReactCurrentOwner,Mr=gn.ReactCurrentBatchConfig,qe=0,Ct=null,vt=null,Pt=0,or=0,Qi=Xn(0),yt=0,gs=null,_i=0,vl=0,Md=0,Za=null,Qt=null,Td=0,ma=1/0,nn=null,Zo=!1,Tc=null,On=null,Xs=!1,Cn=null,Qo=0,Qa=0,wc=null,wo=-1,Ao=0;function Yt(){return qe&6?pt():wo!==-1?wo:wo=pt()}function kn(t){return t.mode&1?qe&2&&Pt!==0?Pt&-Pt:C0.transition!==null?(Ao===0&&(Ao=pm()),Ao):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Sm(t.type)),t):1}function Fr(t,e,r,n){if(50<Qa)throw Qa=0,wc=null,Error(Z(185));ys(t,r,n),(!(qe&2)||t!==Ct)&&(t===Ct&&(!(qe&2)&&(vl|=r),yt===4&&wn(t,Pt)),nr(t,n),r===1&&qe===0&&!(e.mode&1)&&(ma=pt()+500,fl&&qn()))}function nr(t,e){var r=t.callbackNode;C_(t,e);var n=Io(t,t===Ct?Pt:0);if(n===0)r!==null&&lh(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&lh(r),e===1)t.tag===0?A0(ef.bind(null,t)):Bm(ef.bind(null,t)),E0(function(){!(qe&6)&&qn()}),r=null;else{switch(mm(n)){case 1:r=Zc;break;case 4:r=hm;break;case 16:r=Uo;break;case 536870912:r=fm;break;default:r=Uo}r=zg(r,Ng.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Ng(t,e){if(wo=-1,Ao=0,qe&6)throw Error(Z(327));var r=t.callbackNode;if(sa()&&t.callbackNode!==r)return null;var n=Io(t,t===Ct?Pt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Jo(t,n);else{e=n;var i=qe;qe|=2;var a=Ug();(Ct!==t||Pt!==e)&&(nn=null,ma=pt()+500,ci(t,e));do try{Y0();break}catch(o){Dg(t,o)}while(!0);cd(),Ko.current=a,qe=i,vt!==null?e=0:(Ct=null,Pt=0,e=yt)}if(e!==0){if(e===2&&(i=ec(t),i!==0&&(n=i,e=Ac(t,i))),e===1)throw r=gs,ci(t,0),wn(t,n),nr(t,pt()),r;if(e===6)wn(t,n);else{if(i=t.current.alternate,!(n&30)&&!X0(i)&&(e=Jo(t,n),e===2&&(a=ec(t),a!==0&&(n=a,e=Ac(t,a))),e===1))throw r=gs,ci(t,0),wn(t,n),nr(t,pt()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(Z(345));case 2:ri(t,Qt,nn);break;case 3:if(wn(t,n),(n&130023424)===n&&(e=Td+500-pt(),10<e)){if(Io(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lc(ri.bind(null,t,Qt,nn),e);break}ri(t,Qt,nn);break;case 4:if(wn(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var s=31-kr(n);a=1<<s,s=e[s],s>i&&(i=s),n&=~a}if(n=i,n=pt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*j0(n/1960))-n,10<n){t.timeoutHandle=lc(ri.bind(null,t,Qt,nn),n);break}ri(t,Qt,nn);break;case 5:ri(t,Qt,nn);break;default:throw Error(Z(329))}}}return nr(t,pt()),t.callbackNode===r?Ng.bind(null,t):null}function Ac(t,e){var r=Za;return t.current.memoizedState.isDehydrated&&(ci(t,e).flags|=256),t=Jo(t,e),t!==2&&(e=Qt,Qt=r,e!==null&&Cc(e)),t}function Cc(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function X0(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!zr(a(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wn(t,e){for(e&=~Md,e&=~vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-kr(e),n=1<<r;t[r]=-1,e&=~n}}function ef(t){if(qe&6)throw Error(Z(327));sa();var e=Io(t,0);if(!(e&1))return nr(t,pt()),null;var r=Jo(t,e);if(t.tag!==0&&r===2){var n=ec(t);n!==0&&(e=n,r=Ac(t,n))}if(r===1)throw r=gs,ci(t,0),wn(t,e),nr(t,pt()),r;if(r===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ri(t,Qt,nn),nr(t,pt()),null}function wd(t,e){var r=qe;qe|=1;try{return t(e)}finally{qe=r,qe===0&&(ma=pt()+500,fl&&qn())}}function xi(t){Cn!==null&&Cn.tag===0&&!(qe&6)&&sa();var e=qe;qe|=1;var r=Mr.transition,n=Ke;try{if(Mr.transition=null,Ke=1,t)return t()}finally{Ke=n,Mr.transition=r,qe=e,!(qe&6)&&qn()}}function Ad(){or=Qi.current,at(Qi)}function ci(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,b0(r)),vt!==null)for(r=vt.return;r!==null;){var n=r;switch(od(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Bo();break;case 3:fa(),at(tr),at(Gt),gd();break;case 5:md(n);break;case 4:fa();break;case 13:at(lt);break;case 19:at(lt);break;case 10:dd(n.type._context);break;case 22:case 23:Ad()}r=r.return}if(Ct=t,vt=t=Fn(t.current,null),Pt=or=e,yt=0,gs=null,Md=vl=_i=0,Qt=Za=null,li!==null){for(e=0;e<li.length;e++)if(r=li[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var s=a.next;a.next=i,n.next=s}r.pending=n}li=null}return t}function Dg(t,e){do{var r=vt;try{if(cd(),Eo.current=$o,Yo){for(var n=ut.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Yo=!1}if(vi=0,wt=xt=ut=null,$a=!1,fs=0,Ed.current=null,r===null||r.return===null){yt=1,gs=e,vt=null;break}e:{var a=t,s=r.return,o=r,l=e;if(e=Pt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Hh(s);if(p!==null){p.flags&=-257,Gh(p,s,o,a,e),p.mode&1&&Bh(a,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Bh(a,u,e),Cd();break e}l=Error(Z(426))}}else if(st&&o.mode&1){var v=Hh(s);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Gh(v,s,o,a,e),ld(pa(l,o));break e}}a=l=pa(l,o),yt!==4&&(yt=2),Za===null?Za=[a]:Za.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var c=mg(a,l,e);Uh(a,c);break e;case 1:o=l;var m=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(On===null||!On.has(g)))){a.flags|=65536,e&=-e,a.lanes|=e;var b=gg(a,o,e);Uh(a,b);break e}}a=a.return}while(a!==null)}Og(r)}catch(R){e=R,vt===r&&r!==null&&(vt=r=r.return);continue}break}while(!0)}function Ug(){var t=Ko.current;return Ko.current=$o,t===null?$o:t}function Cd(){(yt===0||yt===3||yt===2)&&(yt=4),Ct===null||!(_i&268435455)&&!(vl&268435455)||wn(Ct,Pt)}function Jo(t,e){var r=qe;qe|=2;var n=Ug();(Ct!==t||Pt!==e)&&(nn=null,ci(t,e));do try{q0();break}catch(i){Dg(t,i)}while(!0);if(cd(),qe=r,Ko.current=n,vt!==null)throw Error(Z(261));return Ct=null,Pt=0,yt}function q0(){for(;vt!==null;)Ig(vt)}function Y0(){for(;vt!==null&&!x_();)Ig(vt)}function Ig(t){var e=Fg(t.alternate,t,or);t.memoizedProps=t.pendingProps,e===null?Og(t):vt=e,Ed.current=null}function Og(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=H0(r,e),r!==null){r.flags&=32767,vt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,vt=null;return}}else if(r=B0(r,e,or),r!==null){vt=r;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);yt===0&&(yt=5)}function ri(t,e,r){var n=Ke,i=Mr.transition;try{Mr.transition=null,Ke=1,$0(t,e,r,n)}finally{Mr.transition=i,Ke=n}return null}function $0(t,e,r,n){do sa();while(Cn!==null);if(qe&6)throw Error(Z(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(R_(t,a),t===Ct&&(vt=Ct=null,Pt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Xs||(Xs=!0,zg(Uo,function(){return sa(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Mr.transition,Mr.transition=null;var s=Ke;Ke=1;var o=qe;qe|=4,Ed.current=null,V0(t,r),Lg(r,t),m0(sc),Oo=!!ac,sc=ac=null,t.current=r,W0(r),y_(),qe=o,Ke=s,Mr.transition=a}else t.current=r;if(Xs&&(Xs=!1,Cn=t,Qo=i),a=t.pendingLanes,a===0&&(On=null),E_(r.stateNode),nr(t,pt()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Zo)throw Zo=!1,t=Tc,Tc=null,t;return Qo&1&&t.tag!==0&&sa(),a=t.pendingLanes,a&1?t===wc?Qa++:(Qa=0,wc=t):Qa=0,qn(),null}function sa(){if(Cn!==null){var t=mm(Qo),e=Mr.transition,r=Ke;try{if(Mr.transition=null,Ke=16>t?16:t,Cn===null)var n=!1;else{if(t=Cn,Cn=null,Qo=0,qe&6)throw Error(Z(331));var i=qe;for(qe|=4,ce=t.current;ce!==null;){var a=ce,s=a.child;if(ce.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(ce=u;ce!==null;){var d=ce;switch(d.tag){case 0:case 11:case 15:Ka(8,d,a)}var f=d.child;if(f!==null)f.return=d,ce=f;else for(;ce!==null;){d=ce;var h=d.sibling,p=d.return;if(Ag(d),d===u){ce=null;break}if(h!==null){h.return=p,ce=h;break}ce=p}}}var _=a.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}ce=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,ce=s;else e:for(;ce!==null;){if(a=ce,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ka(9,a,a.return)}var c=a.sibling;if(c!==null){c.return=a.return,ce=c;break e}ce=a.return}}var m=t.current;for(ce=m;ce!==null;){s=ce;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,ce=g;else e:for(s=m;ce!==null;){if(o=ce,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:gl(9,o)}}catch(R){ht(o,o.return,R)}if(o===s){ce=null;break e}var b=o.sibling;if(b!==null){b.return=o.return,ce=b;break e}ce=o.return}}if(qe=i,qn(),Xr&&typeof Xr.onPostCommitFiberRoot=="function")try{Xr.onPostCommitFiberRoot(ll,t)}catch{}n=!0}return n}finally{Ke=r,Mr.transition=e}}return!1}function tf(t,e,r){e=pa(r,e),e=mg(t,e,1),t=In(t,e,1),e=Yt(),t!==null&&(ys(t,1,e),nr(t,e))}function ht(t,e,r){if(t.tag===3)tf(t,t,r);else for(;e!==null;){if(e.tag===3){tf(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(On===null||!On.has(n))){t=pa(r,t),t=gg(e,t,1),e=In(e,t,1),t=Yt(),e!==null&&(ys(e,1,t),nr(e,t));break}}e=e.return}}function K0(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&r,Ct===t&&(Pt&r)===r&&(yt===4||yt===3&&(Pt&130023424)===Pt&&500>pt()-Td?ci(t,0):Md|=r),nr(t,e)}function kg(t,e){e===0&&(t.mode&1?(e=Os,Os<<=1,!(Os&130023424)&&(Os=4194304)):e=1);var r=Yt();t=fn(t,e),t!==null&&(ys(t,e,r),nr(t,r))}function Z0(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),kg(t,r)}function Q0(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(Z(314))}n!==null&&n.delete(e),kg(t,r)}var Fg;Fg=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||tr.current)er=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return er=!1,z0(t,e,r);er=!!(t.flags&131072)}else er=!1,st&&e.flags&1048576&&Hm(e,Vo,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;To(t,e),t=e.pendingProps;var i=ca(e,Gt.current);aa(e,r),i=_d(null,e,n,t,i,r);var a=xd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rr(n)?(a=!0,Ho(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fd(e),i.updater=ml,e.stateNode=i,i._reactInternals=e,mc(e,n,t,r),e=_c(null,e,n,!0,a,r)):(e.tag=0,st&&a&&sd(e),Xt(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(To(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=ex(n),t=Pr(n,t),i){case 0:e=vc(null,e,n,t,r);break e;case 1:e=jh(null,e,n,t,r);break e;case 11:e=Vh(null,e,n,t,r);break e;case 14:e=Wh(null,e,n,Pr(n.type,t),r);break e}throw Error(Z(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Pr(n,i),vc(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Pr(n,i),jh(t,e,n,i,r);case 3:e:{if(yg(e),t===null)throw Error(Z(387));n=e.pendingProps,a=e.memoizedState,i=a.element,qm(t,e),Xo(e,n,null,r);var s=e.memoizedState;if(n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){i=pa(Error(Z(423)),e),e=Xh(t,e,n,r,i);break e}else if(n!==i){i=pa(Error(Z(424)),e),e=Xh(t,e,n,r,i);break e}else for(lr=Un(e.stateNode.containerInfo.firstChild),ur=e,st=!0,Dr=null,r=jm(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(da(),n===i){e=pn(t,e,r);break e}Xt(t,e,n,r)}e=e.child}return e;case 5:return Ym(e),t===null&&hc(e),n=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,s=i.children,oc(n,i)?s=null:a!==null&&oc(n,a)&&(e.flags|=32),xg(t,e),Xt(t,e,s,r),e.child;case 6:return t===null&&hc(e),null;case 13:return Sg(t,e,r);case 4:return pd(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=ha(e,null,n,r):Xt(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Pr(n,i),Vh(t,e,n,i,r);case 7:return Xt(t,e,e.pendingProps,r),e.child;case 8:return Xt(t,e,e.pendingProps.children,r),e.child;case 12:return Xt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,a=e.memoizedProps,s=i.value,rt(Wo,n._currentValue),n._currentValue=s,a!==null)if(zr(a.value,s)){if(a.children===i.children&&!tr.current){e=pn(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===n){if(a.tag===1){l=cn(-1,r&-r),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),fc(a.return,r,e),o.lanes|=r;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(Z(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),fc(s,r,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Xt(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,aa(e,r),i=Tr(i),n=n(i),e.flags|=1,Xt(t,e,n,r),e.child;case 14:return n=e.type,i=Pr(n,e.pendingProps),i=Pr(n.type,i),Wh(t,e,n,i,r);case 15:return vg(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Pr(n,i),To(t,e),e.tag=1,rr(n)?(t=!0,Ho(e)):t=!1,aa(e,r),pg(e,n,i),mc(e,n,i,r),_c(null,e,n,!0,t,r);case 19:return bg(t,e,r);case 22:return _g(t,e,r)}throw Error(Z(156,e.tag))};function zg(t,e){return dm(t,e)}function J0(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Er(t,e,r,n){return new J0(t,e,r,n)}function Rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ex(t){if(typeof t=="function")return Rd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yc)return 11;if(t===$c)return 14}return 2}function Fn(t,e){var r=t.alternate;return r===null?(r=Er(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Co(t,e,r,n,i,a){var s=2;if(n=t,typeof t=="function")Rd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Gi:return di(r.children,i,a,e);case qc:s=8,i|=8;break;case zu:return t=Er(12,r,e,i|2),t.elementType=zu,t.lanes=a,t;case Bu:return t=Er(13,r,e,i),t.elementType=Bu,t.lanes=a,t;case Hu:return t=Er(19,r,e,i),t.elementType=Hu,t.lanes=a,t;case Yp:return _l(r,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xp:s=10;break e;case qp:s=9;break e;case Yc:s=11;break e;case $c:s=14;break e;case En:s=16,n=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=Er(s,r,e,i),e.elementType=t,e.type=n,e.lanes=a,e}function di(t,e,r,n){return t=Er(7,t,n,e),t.lanes=r,t}function _l(t,e,r,n){return t=Er(22,t,n,e),t.elementType=Yp,t.lanes=r,t.stateNode={isHidden:!1},t}function ru(t,e,r){return t=Er(6,t,null,e),t.lanes=r,t}function nu(t,e,r){return e=Er(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tx(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ld(t,e,r,n,i,a,s,o,l){return t=new tx(t,e,r,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Er(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(a),t}function rx(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hi,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function Bg(t){if(!t)return Vn;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rr(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var r=t.type;if(rr(r))return zm(t,r,e)}return e}function Hg(t,e,r,n,i,a,s,o,l){return t=Ld(r,n,!0,t,i,a,s,o,l),t.context=Bg(null),r=t.current,n=Yt(),i=kn(r),a=cn(n,i),a.callback=e??null,In(r,a,i),t.current.lanes=i,ys(t,i,n),nr(t,n),t}function xl(t,e,r,n){var i=e.current,a=Yt(),s=kn(i);return r=Bg(r),e.context===null?e.context=r:e.pendingContext=r,e=cn(a,s),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=In(i,e,s),t!==null&&(Fr(t,i,s,a),bo(t,i,s)),s}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Pd(t,e){rf(t,e),(t=t.alternate)&&rf(t,e)}function nx(){return null}var Gg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nd(t){this._internalRoot=t}yl.prototype.render=Nd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));xl(t,e,null,null)};yl.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xi(function(){xl(null,t,null,null)}),e[hn]=null}};function yl(t){this._internalRoot=t}yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=_m();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Tn.length&&e!==0&&e<Tn[r].priority;r++);Tn.splice(r,0,t),r===0&&ym(t)}};function Dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nf(){}function ix(t,e,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var u=el(s);a.call(u)}}var s=Hg(e,n,t,0,null,!1,!1,"",nf);return t._reactRootContainer=s,t[hn]=s.current,ls(t.nodeType===8?t.parentNode:t),xi(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var o=n;n=function(){var u=el(l);o.call(u)}}var l=Ld(t,0,!1,null,null,!1,!1,"",nf);return t._reactRootContainer=l,t[hn]=l.current,ls(t.nodeType===8?t.parentNode:t),xi(function(){xl(e,l,r,n)}),l}function bl(t,e,r,n,i){var a=r._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var o=i;i=function(){var l=el(s);o.call(l)}}xl(e,s,t,i)}else s=ix(r,e,t,i,n);return el(s)}gm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Ha(e.pendingLanes);r!==0&&(Qc(e,r|1),nr(e,pt()),!(qe&6)&&(ma=pt()+500,qn()))}break;case 13:xi(function(){var n=fn(t,1);if(n!==null){var i=Yt();Fr(n,t,1,i)}}),Pd(t,1)}};Jc=function(t){if(t.tag===13){var e=fn(t,134217728);if(e!==null){var r=Yt();Fr(e,t,134217728,r)}Pd(t,134217728)}};vm=function(t){if(t.tag===13){var e=kn(t),r=fn(t,e);if(r!==null){var n=Yt();Fr(r,t,e,n)}Pd(t,e)}};_m=function(){return Ke};xm=function(t,e){var r=Ke;try{return Ke=t,e()}finally{Ke=r}};Zu=function(t,e,r){switch(e){case"input":if(Wu(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=hl(n);if(!i)throw Error(Z(90));Kp(n),Wu(n,i)}}}break;case"textarea":Qp(t,r);break;case"select":e=r.value,e!=null&&ta(t,!!r.multiple,e,!1)}};am=wd;sm=xi;var ax={usingClientEntryPoint:!1,Events:[bs,Xi,hl,nm,im,wd]},Da={findFiberByHostInstance:oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sx={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=um(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qs.isDisabled&&qs.supportsFiber)try{ll=qs.inject(sx),Xr=qs}catch{}}hr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ax;hr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(e))throw Error(Z(200));return rx(t,e,null,r)};hr.createRoot=function(t,e){if(!Dd(t))throw Error(Z(299));var r=!1,n="",i=Gg;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ld(t,1,!1,null,null,r,!1,n,i),t[hn]=e.current,ls(t.nodeType===8?t.parentNode:t),new Nd(e)};hr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=um(e),t=t===null?null:t.stateNode,t};hr.flushSync=function(t){return xi(t)};hr.hydrate=function(t,e,r){if(!Sl(e))throw Error(Z(200));return bl(null,t,e,!0,r)};hr.hydrateRoot=function(t,e,r){if(!Dd(t))throw Error(Z(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",s=Gg;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=Hg(e,null,t,1,r??null,i,!1,a,s),t[hn]=e.current,ls(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new yl(e)};hr.render=function(t,e,r){if(!Sl(e))throw Error(Z(200));return bl(null,t,e,!1,r)};hr.unmountComponentAtNode=function(t){if(!Sl(t))throw Error(Z(40));return t._reactRootContainer?(xi(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[hn]=null})}),!0):!1};hr.unstable_batchedUpdates=wd;hr.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!Sl(r))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return bl(t,e,r,!1,n)};hr.version="18.3.1-next-f1338f8080-20240426";function Vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vg)}catch(t){console.error(t)}}Vg(),Gp.exports=hr;var ox=Gp.exports,af=ox;ku.createRoot=af.createRoot,ku.hydrateRoot=af.hydrateRoot;function lx(){const t=Xe.useRef(null),e=Xe.useRef(null),[r,n]=Xe.useState(!1);return Xe.useEffect(()=>{let i=-100,a=-100,s=-100,o=-100,l;const u=h=>{i=h.clientX,a=h.clientY,t.current&&(t.current.style.transform=`translate(${i}px, ${a}px) translate(-50%, -50%)`)},d=()=>{s+=(i-s)*.14,o+=(a-o)*.14,e.current&&(e.current.style.transform=`translate(${s}px, ${o}px) translate(-50%, -50%)`),l=requestAnimationFrame(d)},f=h=>{const p=h.target;p.tagName==="A"||p.tagName==="BUTTON"||p.tagName==="INPUT"||p.tagName==="TEXTAREA"||p.closest(".work-item")||p.closest(".b-card")||p.closest(".tech-pill2")?n(!0):n(!1)};return window.addEventListener("mousemove",u),window.addEventListener("mouseover",f),l=requestAnimationFrame(d),()=>{window.removeEventListener("mousemove",u),window.removeEventListener("mouseover",f),cancelAnimationFrame(l)}},[]),C.jsxs(C.Fragment,{children:[C.jsx("div",{ref:t,className:"cursor-dot"}),C.jsx("div",{ref:e,className:`cursor-outline ${r?"hovering":""}`})]})}function ux(){return C.jsx(C.Fragment,{children:C.jsx("div",{className:"background-canvas-layer",children:C.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 750",width:"100%",height:"100%",preserveAspectRatio:"none",children:[C.jsxs("defs",{children:[C.jsxs("linearGradient",{id:"bgGrad",x1:"0%",y1:"0%",x2:"100%",y2:"50%",children:[C.jsx("stop",{offset:"0%",stopColor:"#ffb162"}),C.jsx("stop",{offset:"30%",stopColor:"#ff89cc"}),C.jsx("stop",{offset:"65%",stopColor:"#8a20ff"}),C.jsx("stop",{offset:"100%",stopColor:"#3400b8"})]}),C.jsxs("linearGradient",{id:"pinkGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[C.jsx("stop",{offset:"0%",stopColor:"#de7518"}),C.jsx("stop",{offset:"35%",stopColor:"#e86fc9"}),C.jsx("stop",{offset:"70%",stopColor:"#a31eff"}),C.jsx("stop",{offset:"100%",stopColor:"#4900d4"})]}),C.jsxs("linearGradient",{id:"darkPurpleGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[C.jsx("stop",{offset:"0%",stopColor:"#9519ff"}),C.jsx("stop",{offset:"60%",stopColor:"#3700b3"}),C.jsx("stop",{offset:"100%",stopColor:"#14005c"})]}),C.jsxs("linearGradient",{id:"blueGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[C.jsx("stop",{offset:"0%",stopColor:"#00d4ff"}),C.jsx("stop",{offset:"40%",stopColor:"#00a2ff"}),C.jsx("stop",{offset:"80%",stopColor:"#004ce6"}),C.jsx("stop",{offset:"100%",stopColor:"#001882"})]})]}),C.jsx("rect",{width:"1000",height:"750",fill:"url(#bgGrad)"}),C.jsx("path",{fill:"url(#pinkGrad)",children:C.jsx("animate",{attributeName:"d",dur:"8s",repeatCount:"indefinite",values:`
                M 0 240 C 300 240, 400 420, 650 400 C 850 380, 1000 240, 1000 240 L 1000 750 L 0 750 Z;
                M 0 340 C 360 110, 520 560, 730 330 C 940 170, 1000 320, 1000 320 L 1000 750 L 0 750 Z;
                M 0 200 C 260 320, 420 240, 640 440 C 860 600, 1000 220, 1000 220 L 1000 750 L 0 750 Z;
                M 0 240 C 300 240, 400 420, 650 400 C 850 380, 1000 240, 1000 240 L 1000 750 L 0 750 Z`})}),C.jsx("path",{fill:"url(#darkPurpleGrad)",children:C.jsx("animate",{attributeName:"d",dur:"10s",repeatCount:"indefinite",values:`
                M 400 750 C 450 500, 750 550, 1000 240 L 1000 750 Z;
                M 220 750 C 340 320, 680 660, 1000 100 L 1000 750 Z;
                M 520 750 C 560 560, 820 460, 1000 340 L 1000 750 Z;
                M 400 750 C 450 500, 750 550, 1000 240 L 1000 750 Z`})}),C.jsx("path",{fill:"url(#blueGrad)",children:C.jsx("animate",{attributeName:"d",dur:"12s",repeatCount:"indefinite",values:`
                M 0 390 C 250 250, 450 750, 850 750 L 0 750 Z;
                M 0 510 C 340 120, 600 700, 980 750 L 0 750 Z;
                M 0 300 C 200 420, 420 560, 760 700 L 0 750 Z;
                M 0 390 C 250 250, 450 750, 850 750 L 0 750 Z`})})]})})})}const Tt={NAME:"Muhammad Bilal Faisal",FIRST_NAME:"Muhammad Bilal",LAST_NAME:"Faisal",INITIALS:"MBF",PRIMARY_TITLE:"Full Stack Engineer & QA Specialist",SECONDARY_TITLE:"MERN & Next.js Production Architect",EMAIL:"bilalfaisalarain@gmail.com",WHATSAPP_NUMBER:"+92 320 3066554",WHATSAPP_LINK:"https://wa.me/923203066554",LOCATION:"Karachi, Pakistan",GITHUB_PROFILE:"https://github.com/BilalFaisaldev",INSTAGRAM_URL:"https://www.instagram.com/bilalfaysaldev/",EXPERIENCE_VALUE:"2+",EXPERIENCE_LABEL:"Years Commercial Exp",RESUME_URL:"resume.pdf",RESUME_DOWNLOAD_NAME:"Bilal_Faisal_CV.pdf",COPYRIGHT_TEXT:"© 2026 Muhammad Bilal Faisal. All rights reserved.",TAGLINE:"Crafting scalable, high-performance web applications and resilient backend architectures with Next.js, Node.js, and automated QA testing pipelines."},_e={name:Tt.NAME,firstName:Tt.FIRST_NAME,lastName:Tt.LAST_NAME,initials:Tt.INITIALS,primaryTitle:Tt.PRIMARY_TITLE,secondaryTitle:Tt.SECONDARY_TITLE,tagline:Tt.TAGLINE,email:Tt.EMAIL,phone:Tt.WHATSAPP_NUMBER,whatsappUrl:Tt.WHATSAPP_LINK,githubUrl:Tt.GITHUB_PROFILE,instagramUrl:Tt.INSTAGRAM_URL,location:Tt.LOCATION,resumeUrl:Tt.RESUME_URL,resumeDownloadName:Tt.RESUME_DOWNLOAD_NAME,copyrightText:Tt.COPYRIGHT_TEXT},Wg=[{value:Tt.EXPERIENCE_VALUE,label:Tt.EXPERIENCE_LABEL},{value:"9",label:"Production & Client Projects"},{value:"100%",label:"QA Test Coverage Focus"}],cx=["All","Full Stack & MERN","AI & Voice","Utilities & Tools","QA & Arcade"],Ro=[{id:"dropbeam",title:"DropBeam — Instant Wi-Fi Sharing & Live Clipboard",category:"Full Stack & MERN",description:"High-speed, privacy-first local file-sharing and live clipboard synchronization utility across local Wi-Fi networks. Zero registration, drag-and-drop transfers, and real-time room communication.",tech:["Node.js","Express.js","WebSockets","Wi-Fi Subnet","HTML5 Canvas"],metric:"Wi-Fi Sync",metricLabel:"Zero-Config Transfer",liveUrl:"https://dropbeem.onrender.com/",githubUrl:"https://github.com/BilalFaisaldev/DropBeem",featured:!0},{id:"ods",title:"Omar Digital Solutions (ODS)",category:"Full Stack & MERN",description:"Responsive educational platform landing page engineered with modern UI components, course directory showcases, and automated course enrollment inquiries.",tech:["Next.js 14","Node.js","MongoDB Atlas","TailwindCSS","Vercel"],metric:"EdTech",metricLabel:"Course Directory",liveUrl:"https://ods-courses.vercel.app/",githubUrl:null,featured:!0},{id:"nova-ai",title:"NOVA — Personal AI Voice Assistant",category:"AI & Voice",description:"Conversational AI voice assistant prototype featuring speech recognition, responsive 3D audio-reactive orb visualization, and dynamic telemetry HUD powered by Google Gemini API.",tech:["Google Gemini API","Web Speech API","Canvas Audio Viz","JavaScript ES6+"],metric:"AI Engine",metricLabel:"Voice Telemetry",liveUrl:null,githubUrl:null,featured:!0},{id:"luxurystay-hms",title:"LuxuryStay — Hotel Management Suite (HMS)",category:"Full Stack & MERN",description:"End-to-end commercial hospitality platform featuring real-time room inventory management, reservation checkout flows, staff RBAC privilege tiers, and dynamic analytics dashboard.",tech:["React.js","TypeScript","Vite","TailwindCSS","Cloud Run"],metric:"Hospitality",metricLabel:"Commercial Suite",liveUrl:"https://luxurystay-hms-103758282821.asia-southeast1.run.app/",githubUrl:"https://github.com/BilalFaisaldev/luxurystay-hms",featured:!0},{id:"hinglish-transcriber",title:"Hinglish Audio Transcriber",category:"AI & Voice",description:"Specialized speech-to-text intelligence system tuned for romanized Urdu/Hindi (Hinglish) phonetics and dialectal nuances with timestamped transcript exports.",tech:["React.js","TypeScript","TailwindCSS","Node.js Express","Vite"],metric:"Bilingual AI",metricLabel:"Speech-to-Text",liveUrl:null,githubUrl:"https://github.com/BilalFaisaldev/Hinglish-Audio-Transcriber",featured:!1},{id:"instapdf",title:"InstaPDF — In-Browser Document Studio",category:"Utilities & Tools",description:"High-performance client-side document processing tool enabling instant PDF merging, splitting, reordering, and format conversion without uploading sensitive files to external servers.",tech:["JavaScript ES6+","PDF-Lib","HTML5 Canvas","Modern CSS3"],metric:"Zero-Server",metricLabel:"Privacy Utility",liveUrl:"https://instapdf.netlify.app/",githubUrl:"https://github.com/BilalFaisaldev/instapdf",featured:!1},{id:"png-webp-converter",title:"PNG to WebP High-Efficiency Converter",category:"Utilities & Tools",description:"Client-side image compression tool utilizing modern browser WebP codecs to reduce asset file sizes by up to 80% while preserving alpha transparency and visual fidelity.",tech:["Canvas 2D API","WebP Encoding","Blob Compression","Modern CSS3"],metric:"80% Compression",metricLabel:"Asset Optimizer",liveUrl:"https://png-to-webp-converter-lrwt.vercel.app/",githubUrl:"https://github.com/BilalFaisaldev/png_to_webp_converter",featured:!1},{id:"cyber-2048",title:"2048 Cyber Dark Edition",category:"QA & Arcade",description:"High-performance web arcade puzzle game featuring sleek cyber dark aesthetics, fluid CSS grid animations, touch swipe controls, and local score persistence.",tech:["JavaScript ES6+","Modern CSS3","HTML5 Canvas","Touch Gestures"],metric:"Web Arcade",metricLabel:"Cyber Edition",liveUrl:null,githubUrl:null,featured:!0},{id:"code-creative-suite",title:"Code Creative — Commercial Software Suite",category:"QA & Arcade",description:"Production client delivery ecosystem featuring automated end-to-end testing, high-throughput web architectures, and containerized deployment.",tech:["Laravel","PHP","JavaScript","TailwindCSS","Postman","QA Automation"],metric:"Agency Delivery",metricLabel:"Client Production",liveUrl:null,githubUrl:null,featured:!0}],jg=[{id:"frontend",header:"01 // Front-End & Modern UI",title:"Building responsive, zero-defect interfaces.",tags:["Next.js 14","React 18","TypeScript","TailwindCSS","HTML5 / Modern CSS3","JavaScript ES6+","Bootstrap"],highlight:!0},{id:"backend",header:"02 // Backend & API Architecture",title:"Resilient Scalable APIs",tags:["Node.js Runtime","Express.js","PHP & Laravel","WebSockets","RESTful APIs","JWT Auth"],highlight:!1},{id:"database",header:"03 // Databases & Caching",title:"Data Architecture",tags:["MySQL","MongoDB Atlas","PostgreSQL","Supabase","SQL"],highlight:!1},{id:"devops-qa",header:"04 // DevOps, Tooling & QA Automation",title:"Production Pipelines",tags:["Playwright E2E","Postman","Git & GitHub","Docker","Vercel","Figma","CI/CD Actions"],highlight:!1}],Xg=[{year:"DEC 2025 — PRES",role:"Software Engineer & QA Specialist",company:"Code Creative & Client Delivery",description:"Working with Code Creative while managing private client projects. Engineering scalable web architectures, conducting end-to-end Quality Assurance testing, and executing API integrations."},{year:"2024 — PRES",role:"Independent Full Stack Developer",company:"Personal & Commercial Clients",description:"Delivering custom end-to-end digital solutions for direct clients. Architected high-performance web applications (including DropBeam and ODS), interactive web platforms, RESTful APIs, and cloud deployments."},{year:"JAN 2023 — 2024",role:"Core Engineering Foundations",company:"Intensive Technical Deep-Dive",description:"Initiated dedicated software development journey in January 2023. Mastered modern JavaScript (ES6+), React, Node.js, Express, databases, and automated QA practices through building rigorous prototypes."}];/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var dx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Dt=(t,e)=>{const r=Xe.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:o="",children:l,...u},d)=>Xe.createElement("svg",{ref:d,...dx,width:i,height:i,stroke:n,strokeWidth:s?Number(a)*24/Number(i):a,className:["lucide",`lucide-${hx(t)}`,o].join(" "),...u},[...e.map(([f,h])=>Xe.createElement(f,h)),...Array.isArray(l)?l:[l]]));return r.displayName=`${t}`,r};/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fx=Dt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const px=Dt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mx=Dt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gx=Dt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rc=Dt("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vx=Dt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qg=Dt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yg=Dt("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $g=Dt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _x=Dt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xx=Dt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yx=Dt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sx=Dt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bx=Dt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ex=Dt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sf=Dt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mx=Dt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Tx({onOpenTerminal:t}){const[e,r]=Xe.useState(!1),n=()=>r(!1);return C.jsxs("nav",{className:"site-navbar",children:[C.jsxs("a",{href:"#home",className:"logo-badge",onClick:n,children:[_e.initials," ",C.jsx("span",{children:"( )"})]}),C.jsxs("div",{className:"nav-links",children:[C.jsx("a",{href:"#work",children:"Work"}),C.jsx("a",{href:"#capabilities",children:"Capabilities"}),C.jsx("a",{href:"#journey",children:"Journey"}),C.jsx("a",{href:"#about",children:"About"}),C.jsx("a",{href:_e.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),C.jsx("a",{href:_e.whatsappUrl,target:"_blank",rel:"noopener noreferrer",children:"WhatsApp"}),C.jsx("a",{href:_e.instagramUrl,target:"_blank",rel:"noopener noreferrer",children:"Instagram"}),C.jsx("a",{href:"#contact",children:"Contact"}),C.jsxs("button",{type:"button",onClick:t,className:"nav-terminal-btn",title:"Open Developer Shell",children:[C.jsx(sf,{size:14}),C.jsx("span",{children:"SHELL"})]}),C.jsxs("a",{href:_e.resumeUrl,download:_e.resumeDownloadName,target:"_blank",rel:"noopener noreferrer",className:"nav-cv-btn",title:"Download Curriculum Vitae",children:[C.jsx(Rc,{size:14}),C.jsx("span",{children:"CV"})]})]}),C.jsxs("div",{className:"mobile-nav-actions",children:[C.jsx("button",{type:"button",onClick:t,className:"nav-terminal-btn mobile-shell-btn",title:"Open Developer Shell",children:C.jsx(sf,{size:14})}),C.jsx("button",{type:"button",className:"mobile-hamburger-btn",onClick:()=>r(!e),"aria-label":"Toggle navigation menu",children:e?C.jsx(Mx,{size:20}):C.jsx(xx,{size:20})})]}),e&&C.jsxs("div",{className:"mobile-drawer-menu",children:[C.jsx("a",{href:"#work",className:"mobile-nav-link",onClick:n,children:"Work"}),C.jsx("a",{href:"#capabilities",className:"mobile-nav-link",onClick:n,children:"Capabilities"}),C.jsx("a",{href:"#journey",className:"mobile-nav-link",onClick:n,children:"Journey"}),C.jsx("a",{href:"#about",className:"mobile-nav-link",onClick:n,children:"About"}),C.jsx("a",{href:"#contact",className:"mobile-nav-link",onClick:n,children:"Contact"}),C.jsxs("div",{className:"mobile-drawer-footer",children:[C.jsxs("a",{href:_e.resumeUrl,download:_e.resumeDownloadName,target:"_blank",rel:"noopener noreferrer",className:"submit-btn",style:{width:"100%",justifyContent:"center",textDecoration:"none"},onClick:n,children:[C.jsx(Rc,{size:16}),C.jsx("span",{children:"Download CV"})]}),C.jsxs("div",{className:"mobile-drawer-socials",children:[C.jsx("a",{href:_e.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),C.jsx("a",{href:_e.whatsappUrl,target:"_blank",rel:"noopener noreferrer",children:"WhatsApp"}),C.jsx("a",{href:_e.instagramUrl,target:"_blank",rel:"noopener noreferrer",children:"Instagram"})]})]})]})]})}/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Ud="160",wx=0,of=1,Ax=2,Kg=1,Cx=2,rn=3,Wn=0,ir=1,sn=2,zn=0,oa=1,lf=2,uf=3,cf=4,Rx=5,ai=100,Lx=101,Px=102,df=103,hf=104,Nx=200,Dx=201,Ux=202,Ix=203,Lc=204,Pc=205,Ox=206,kx=207,Fx=208,zx=209,Bx=210,Hx=211,Gx=212,Vx=213,Wx=214,jx=0,Xx=1,qx=2,tl=3,Yx=4,$x=5,Kx=6,Zx=7,Zg=0,Qx=1,Jx=2,Bn=0,ey=1,ty=2,ry=3,ny=4,iy=5,ay=6,Qg=300,ga=301,va=302,Nc=303,Dc=304,El=306,Uc=1e3,Ir=1001,Ic=1002,qt=1003,ff=1004,iu=1005,yr=1006,sy=1007,vs=1008,Hn=1009,oy=1010,ly=1011,Id=1012,Jg=1013,Rn=1014,Ln=1015,_s=1016,ev=1017,tv=1018,hi=1020,uy=1021,Or=1023,cy=1024,dy=1025,fi=1026,_a=1027,hy=1028,rv=1029,fy=1030,nv=1031,iv=1033,au=33776,su=33777,ou=33778,lu=33779,pf=35840,mf=35841,gf=35842,vf=35843,av=36196,_f=37492,xf=37496,yf=37808,Sf=37809,bf=37810,Ef=37811,Mf=37812,Tf=37813,wf=37814,Af=37815,Cf=37816,Rf=37817,Lf=37818,Pf=37819,Nf=37820,Df=37821,uu=36492,Uf=36494,If=36495,py=36283,Of=36284,kf=36285,Ff=36286,sv=3e3,pi=3001,my=3200,gy=3201,ov=0,vy=1,br="",Lt="srgb",mn="srgb-linear",Od="display-p3",Ml="display-p3-linear",rl="linear",it="srgb",nl="rec709",il="p3",Ti=7680,zf=519,_y=512,xy=513,yy=514,lv=515,Sy=516,by=517,Ey=518,My=519,Bf=35044,Hf="300 es",Oc=1035,un=2e3,al=2001;class Ea{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(r)===-1&&n[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(r);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=Math.PI/180,kc=180/Math.PI;function Ms(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[r&63|128]+Ft[r>>8&255]+"-"+Ft[r>>16&255]+Ft[r>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Jt(t,e,r){return Math.max(e,Math.min(r,t))}function Ty(t,e){return(t%e+e)%e}function du(t,e,r){return(1-r)*t+r*e}function Gf(t){return(t&t-1)===0&&t!==0}function Fc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ua(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,r=0){We.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,n=this.y,i=e.elements;return this.x=i[0]*r+i[3]*n+i[6],this.y=i[1]*r+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const n=this.dot(e)/r;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,n=this.y-e.y;return r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,n){return this.x=e.x+(r.x-e.x)*n,this.y=e.y+(r.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const n=Math.cos(r),i=Math.sin(r),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*i+e.x,this.y=a*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,r,n,i,a,s,o,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,n,i,a,s,o,l,u)}set(e,r,n,i,a,s,o,l,u){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=r,d[4]=a,d[5]=l,d[6]=n,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,n=e.elements;return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[8]=n[8],this}extractBasis(e,r,n){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const n=e.elements,i=r.elements,a=this.elements,s=n[0],o=n[3],l=n[6],u=n[1],d=n[4],f=n[7],h=n[2],p=n[5],_=n[8],x=i[0],v=i[3],c=i[6],m=i[1],g=i[4],b=i[7],R=i[2],A=i[5],w=i[8];return a[0]=s*x+o*m+l*R,a[3]=s*v+o*g+l*A,a[6]=s*c+o*b+l*w,a[1]=u*x+d*m+f*R,a[4]=u*v+d*g+f*A,a[7]=u*c+d*b+f*w,a[2]=h*x+p*m+_*R,a[5]=h*v+p*g+_*A,a[8]=h*c+p*b+_*w,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return r*s*d-r*o*u-n*a*d+n*o*l+i*a*u-i*s*l}invert(){const e=this.elements,r=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=d*s-o*u,h=o*l-d*a,p=u*a-s*l,_=r*f+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(i*u-d*n)*x,e[2]=(o*n-i*s)*x,e[3]=h*x,e[4]=(d*r-i*l)*x,e[5]=(i*a-o*r)*x,e[6]=p*x,e[7]=(n*l-u*r)*x,e[8]=(s*r-n*a)*x,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,n,i,a,s,o){const l=Math.cos(a),u=Math.sin(a);return this.set(n*l,n*u,-n*(l*s+u*o)+s+e,-i*u,i*l,-i*(-u*s+l*o)+o+r,0,0,1),this}scale(e,r){return this.premultiply(hu.makeScale(e,r)),this}rotate(e){return this.premultiply(hu.makeRotation(-e)),this}translate(e,r){return this.premultiply(hu.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),n=Math.sin(e);return this.set(r,-n,0,n,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,n=e.elements;for(let i=0;i<9;i++)if(r[i]!==n[i])return!1;return!0}fromArray(e,r=0){for(let n=0;n<9;n++)this.elements[n]=e[n+r];return this}toArray(e=[],r=0){const n=this.elements;return e[r]=n[0],e[r+1]=n[1],e[r+2]=n[2],e[r+3]=n[3],e[r+4]=n[4],e[r+5]=n[5],e[r+6]=n[6],e[r+7]=n[7],e[r+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hu=new Be;function uv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function wy(){const t=sl("canvas");return t.style.display="block",t}const Vf={};function Ja(t){t in Vf||(Vf[t]=!0,console.warn(t))}const Wf=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jf=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[mn]:{transfer:rl,primaries:nl,toReference:t=>t,fromReference:t=>t},[Lt]:{transfer:it,primaries:nl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ml]:{transfer:rl,primaries:il,toReference:t=>t.applyMatrix3(jf),fromReference:t=>t.applyMatrix3(Wf)},[Od]:{transfer:it,primaries:il,toReference:t=>t.convertSRGBToLinear().applyMatrix3(jf),fromReference:t=>t.applyMatrix3(Wf).convertLinearToSRGB()}},Ay=new Set([mn,Ml]),Qe={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Ay.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,r){if(this.enabled===!1||e===r||!e||!r)return t;const n=Ys[e].toReference,i=Ys[r].fromReference;return i(n(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ys[t].primaries},getTransfer:function(t){return t===br?rl:Ys[t].transfer}};function la(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let wi;class cv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{wi===void 0&&(wi=sl("canvas")),wi.width=e.width,wi.height=e.height;const n=wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),r=wi}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=sl("canvas");r.width=e.width,r.height=e.height;const n=r.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=la(a[s]/255)*255;return n.putImageData(i,0,0),r}else if(e.data){const r=e.data.slice(0);for(let n=0;n<r.length;n++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[n]=Math.floor(la(r[n]/255)*255):r[n]=la(r[n]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cy=0;class dv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Ms(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(pu(i[s].image)):a.push(pu(i[s]))}else a=pu(i);n.url=a}return r||(e.images[this.uuid]=n),n}}function pu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ry=0;class cr extends Ea{constructor(e=cr.DEFAULT_IMAGE,r=cr.DEFAULT_MAPPING,n=Ir,i=Ir,a=yr,s=vs,o=Or,l=Hn,u=cr.DEFAULT_ANISOTROPY,d=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Ms(),this.name="",this.source=new dv(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===pi?Lt:br),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),r||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uc:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uc:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?pi:sv}set encoding(e){Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pi?Lt:br}}cr.DEFAULT_IMAGE=null;cr.DEFAULT_MAPPING=Qg;cr.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,r=0,n=0,i=1){At.prototype.isVector4=!0,this.x=e,this.y=r,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,n,i){return this.x=e,this.y=r,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,n=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*r+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*r+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*r+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*r+s[7]*n+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,n,i,a;const s=e.elements,o=s[0],l=s[4],u=s[8],d=s[1],f=s[5],h=s[9],p=s[2],_=s[6],x=s[10];if(Math.abs(l-d)<.01&&Math.abs(u-p)<.01&&Math.abs(h-_)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+p)<.1&&Math.abs(h+_)<.1&&Math.abs(o+f+x-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const c=(o+1)/2,m=(f+1)/2,g=(x+1)/2,b=(l+d)/4,R=(u+p)/4,A=(h+_)/4;return c>m&&c>g?c<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(c),i=b/n,a=R/n):m>g?m<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(m),n=b/i,a=A/i):g<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(g),n=R/a,i=A/a),this.set(n,i,a,r),this}let v=Math.sqrt((_-h)*(_-h)+(u-p)*(u-p)+(d-l)*(d-l));return Math.abs(v)<.001&&(v=1),this.x=(_-h)/v,this.y=(u-p)/v,this.z=(d-l)/v,this.w=Math.acos((o+f+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,n){return this.x=e.x+(r.x-e.x)*n,this.y=e.y+(r.y-e.y)*n,this.z=e.z+(r.z-e.z)*n,this.w=e.w+(r.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ly extends Ea{constructor(e=1,r=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new At(0,0,e,r),this.scissorTest=!1,this.viewport=new At(0,0,e,r);const i={width:e,height:r,depth:1};n.encoding!==void 0&&(Ja("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pi?Lt:br),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new cr(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,r,n=1){(this.width!==e||this.height!==r||this.depth!==n)&&(this.width=e,this.height=r,this.depth=n,this.texture.image.width=e,this.texture.image.height=r,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new dv(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Ly{constructor(e=1,r=1,n={}){super(e,r,n),this.isWebGLRenderTarget=!0}}class hv extends cr{constructor(e=null,r=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Py extends cr{constructor(e=null,r=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=0,r=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=n,this._w=i}static slerpFlat(e,r,n,i,a,s,o){let l=n[i+0],u=n[i+1],d=n[i+2],f=n[i+3];const h=a[s+0],p=a[s+1],_=a[s+2],x=a[s+3];if(o===0){e[r+0]=l,e[r+1]=u,e[r+2]=d,e[r+3]=f;return}if(o===1){e[r+0]=h,e[r+1]=p,e[r+2]=_,e[r+3]=x;return}if(f!==x||l!==h||u!==p||d!==_){let v=1-o;const c=l*h+u*p+d*_+f*x,m=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const R=Math.sqrt(g),A=Math.atan2(R,c*m);v=Math.sin(v*A)/R,o=Math.sin(o*A)/R}const b=o*m;if(l=l*v+h*b,u=u*v+p*b,d=d*v+_*b,f=f*v+x*b,v===1-o){const R=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=R,u*=R,d*=R,f*=R}}e[r]=l,e[r+1]=u,e[r+2]=d,e[r+3]=f}static multiplyQuaternionsFlat(e,r,n,i,a,s){const o=n[i],l=n[i+1],u=n[i+2],d=n[i+3],f=a[s],h=a[s+1],p=a[s+2],_=a[s+3];return e[r]=o*_+d*f+l*p-u*h,e[r+1]=l*_+d*h+u*f-o*p,e[r+2]=u*_+d*p+o*h-l*f,e[r+3]=d*_-o*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,n,i){return this._x=e,this._y=r,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const n=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(n/2),d=o(i/2),f=o(a/2),h=l(n/2),p=l(i/2),_=l(a/2);switch(s){case"XYZ":this._x=h*d*f+u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f+h*p*_;break;case"YZX":this._x=h*d*f+u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f-h*p*_;break;case"XZY":this._x=h*d*f-u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const n=r/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,n=r[0],i=r[4],a=r[8],s=r[1],o=r[5],l=r[9],u=r[2],d=r[6],f=r[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-u)*p,this._z=(s-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(a+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(a-u)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(s-i)/p,this._x=(a+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let n=e.dot(r)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,r){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,r/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const n=e._x,i=e._y,a=e._z,s=e._w,o=r._x,l=r._y,u=r._z,d=r._w;return this._x=n*d+s*o+i*u-a*l,this._y=i*d+s*l+a*o-n*u,this._z=a*d+s*u+n*l-i*o,this._w=s*d-n*o-i*l-a*u,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-r;return this._w=p*s+r*this._w,this._x=p*n+r*this._x,this._y=p*i+r*this._y,this._z=p*a+r*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,o),f=Math.sin((1-r)*d)/u,h=Math.sin(r*d)/u;return this._w=s*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,r,n){return this.copy(e).slerp(r,n)}random(){const e=Math.random(),r=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(r*Math.cos(i),n*Math.sin(a),n*Math.cos(a),r*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,r=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=r,this.z=n}set(e,r,n){return n===void 0&&(n=this.z),this.x=e,this.y=r,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(Xf.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(Xf.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*r+a[3]*n+a[6]*i,this.y=a[1]*r+a[4]*n+a[7]*i,this.z=a[2]*r+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,n=this.y,i=this.z,a=e.elements,s=1/(a[3]*r+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*r+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*r+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*r+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(e){const r=this.x,n=this.y,i=this.z,a=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*i-o*n),d=2*(o*r-a*i),f=2*(a*n-s*r);return this.x=r+l*u+s*f-o*d,this.y=n+l*d+o*u-a*f,this.z=i+l*f+a*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*r+a[4]*n+a[8]*i,this.y=a[1]*r+a[5]*n+a[9]*i,this.z=a[2]*r+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,n){return this.x=e.x+(r.x-e.x)*n,this.y=e.y+(r.y-e.y)*n,this.z=e.z+(r.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const n=e.x,i=e.y,a=e.z,s=r.x,o=r.y,l=r.z;return this.x=i*l-a*o,this.y=a*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const n=e.dot(this)/r;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mu.copy(this).projectOnVector(e),this.sub(mu)}reflect(e){return this.sub(mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const n=this.dot(e)/r;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return r*r+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,n){const i=Math.sin(r)*e;return this.x=i*Math.sin(n),this.y=Math.cos(r)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,n){return this.x=e*Math.sin(r),this.y=n,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=n,this.z=i,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,r=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(r),this.y=n*Math.sin(r),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mu=new O,Xf=new Ts;class ws{constructor(e=new O(1/0,1/0,1/0),r=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,n=e.length;r<n;r+=3)this.expandByPoint(Cr.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,n=e.count;r<n;r++)this.expandByPoint(Cr.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,n=e.length;r<n;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const n=Cr.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(r===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Cr):Cr.fromBufferAttribute(a,s),Cr.applyMatrix4(e.matrixWorld),this.expandByPoint(Cr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],r);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cr),Cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,n;return e.normal.x>0?(r=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),r<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),Ks.subVectors(this.max,Ia),Ai.subVectors(e.a,Ia),Ci.subVectors(e.b,Ia),Ri.subVectors(e.c,Ia),_n.subVectors(Ci,Ai),xn.subVectors(Ri,Ci),Zn.subVectors(Ai,Ri);let r=[0,-_n.z,_n.y,0,-xn.z,xn.y,0,-Zn.z,Zn.y,_n.z,0,-_n.x,xn.z,0,-xn.x,Zn.z,0,-Zn.x,-_n.y,_n.x,0,-xn.y,xn.x,0,-Zn.y,Zn.x,0];return!gu(r,Ai,Ci,Ri,Ks)||(r=[1,0,0,0,1,0,0,0,1],!gu(r,Ai,Ci,Ri,Ks))?!1:(Zs.crossVectors(_n,xn),r=[Zs.x,Zs.y,Zs.z],gu(r,Ai,Ci,Ri,Ks))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zr=[new O,new O,new O,new O,new O,new O,new O,new O],Cr=new O,$s=new ws,Ai=new O,Ci=new O,Ri=new O,_n=new O,xn=new O,Zn=new O,Ia=new O,Ks=new O,Zs=new O,Qn=new O;function gu(t,e,r,n,i){for(let a=0,s=t.length-3;a<=s;a+=3){Qn.fromArray(t,a);const o=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=e.dot(Qn),u=r.dot(Qn),d=n.dot(Qn);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const Ny=new ws,Oa=new O,vu=new O;class kd{constructor(e=new O,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const n=this.center;r!==void 0?n.copy(r):Ny.setFromPoints(e).getCenter(n);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const n=this.center.distanceToSquared(e);return r.copy(e),n>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const r=Oa.lengthSq();if(r>this.radius*this.radius){const n=Math.sqrt(r),i=(n-this.radius)*.5;this.center.addScaledVector(Oa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(vu)),this.expandByPoint(Oa.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qr=new O,_u=new O,Qs=new O,yn=new O,xu=new O,Js=new O,yu=new O;class Dy{constructor(e=new O,r=new O(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qr)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const n=r.dot(this.direction);return n<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=Qr.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(Qr.copy(this.origin).addScaledVector(this.direction,r),Qr.distanceToSquared(e))}distanceSqToSegment(e,r,n,i){_u.copy(e).add(r).multiplyScalar(.5),Qs.copy(r).sub(e).normalize(),yn.copy(this.origin).sub(_u);const a=e.distanceTo(r)*.5,s=-this.direction.dot(Qs),o=yn.dot(this.direction),l=-yn.dot(Qs),u=yn.lengthSq(),d=Math.abs(1-s*s);let f,h,p,_;if(d>0)if(f=s*l-o,h=s*o-l,_=a*d,f>=0)if(h>=-_)if(h<=_){const x=1/d;f*=x,h*=x,p=f*(f+s*h+2*o)+h*(s*f+h+2*l)+u}else h=a,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+u;else h=-a,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-s*a+o)),h=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+u):(f=Math.max(0,-(s*a+o)),h=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+u);else h=s>0?-a:a,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(_u).addScaledVector(Qs,h),p}intersectSphere(e,r){Qr.subVectors(e.center,this.origin);const n=Qr.dot(this.direction),i=Qr.dot(Qr)-n*n,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,r):this.at(o,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/r;return n>=0?n:null}intersectPlane(e,r){const n=this.distanceToPlane(e);return n===null?null:this.at(n,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let n,i,a,s,o,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,i=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,i=(e.min.x-h.x)*u),d>=0?(a=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(a=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),n>s||a>i||((a>n||isNaN(n))&&(n=a),(s<i||isNaN(i))&&(i=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,r)}intersectsBox(e){return this.intersectBox(e,Qr)!==null}intersectTriangle(e,r,n,i,a){xu.subVectors(r,e),Js.subVectors(n,e),yu.crossVectors(xu,Js);let s=this.direction.dot(yu),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;yn.subVectors(this.origin,e);const l=o*this.direction.dot(Js.crossVectors(yn,Js));if(l<0)return null;const u=o*this.direction.dot(xu.cross(yn));if(u<0||l+u>s)return null;const d=-o*yn.dot(yu);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,r,n,i,a,s,o,l,u,d,f,h,p,_,x,v){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,n,i,a,s,o,l,u,d,f,h,p,_,x,v)}set(e,r,n,i,a,s,o,l,u,d,f,h,p,_,x,v){const c=this.elements;return c[0]=e,c[4]=r,c[8]=n,c[12]=i,c[1]=a,c[5]=s,c[9]=o,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=h,c[3]=p,c[7]=_,c[11]=x,c[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const r=this.elements,n=e.elements;return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[8]=n[8],r[9]=n[9],r[10]=n[10],r[11]=n[11],r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15],this}copyPosition(e){const r=this.elements,n=e.elements;return r[12]=n[12],r[13]=n[13],r[14]=n[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,n){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,r,n){return this.set(e.x,r.x,n.x,0,e.y,r.y,n.y,0,e.z,r.z,n.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),a=1/Li.setFromMatrixColumn(e,1).length(),s=1/Li.setFromMatrixColumn(e,2).length();return r[0]=n[0]*i,r[1]=n[1]*i,r[2]=n[2]*i,r[3]=0,r[4]=n[4]*a,r[5]=n[5]*a,r[6]=n[6]*a,r[7]=0,r[8]=n[8]*s,r[9]=n[9]*s,r[10]=n[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,n=e.x,i=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=s*d,p=s*f,_=o*d,x=o*f;r[0]=l*d,r[4]=-l*f,r[8]=u,r[1]=p+_*u,r[5]=h-x*u,r[9]=-o*l,r[2]=x-h*u,r[6]=_+p*u,r[10]=s*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=u*d,x=u*f;r[0]=h+x*o,r[4]=_*o-p,r[8]=s*u,r[1]=s*f,r[5]=s*d,r[9]=-o,r[2]=p*o-_,r[6]=x+h*o,r[10]=s*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=u*d,x=u*f;r[0]=h-x*o,r[4]=-s*f,r[8]=_+p*o,r[1]=p+_*o,r[5]=s*d,r[9]=x-h*o,r[2]=-s*u,r[6]=o,r[10]=s*l}else if(e.order==="ZYX"){const h=s*d,p=s*f,_=o*d,x=o*f;r[0]=l*d,r[4]=_*u-p,r[8]=h*u+x,r[1]=l*f,r[5]=x*u+h,r[9]=p*u-_,r[2]=-u,r[6]=o*l,r[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,_=o*l,x=o*u;r[0]=l*d,r[4]=x-h*f,r[8]=_*f+p,r[1]=f,r[5]=s*d,r[9]=-o*d,r[2]=-u*d,r[6]=p*f+_,r[10]=h-x*f}else if(e.order==="XZY"){const h=s*l,p=s*u,_=o*l,x=o*u;r[0]=l*d,r[4]=-f,r[8]=u*d,r[1]=h*f+x,r[5]=s*d,r[9]=p*f-_,r[2]=_*f-p,r[6]=o*d,r[10]=x*f+h}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uy,e,Iy)}lookAt(e,r,n){const i=this.elements;return ar.subVectors(e,r),ar.lengthSq()===0&&(ar.z=1),ar.normalize(),Sn.crossVectors(n,ar),Sn.lengthSq()===0&&(Math.abs(n.z)===1?ar.x+=1e-4:ar.z+=1e-4,ar.normalize(),Sn.crossVectors(n,ar)),Sn.normalize(),eo.crossVectors(ar,Sn),i[0]=Sn.x,i[4]=eo.x,i[8]=ar.x,i[1]=Sn.y,i[5]=eo.y,i[9]=ar.y,i[2]=Sn.z,i[6]=eo.z,i[10]=ar.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const n=e.elements,i=r.elements,a=this.elements,s=n[0],o=n[4],l=n[8],u=n[12],d=n[1],f=n[5],h=n[9],p=n[13],_=n[2],x=n[6],v=n[10],c=n[14],m=n[3],g=n[7],b=n[11],R=n[15],A=i[0],w=i[4],P=i[8],y=i[12],E=i[1],G=i[5],X=i[9],se=i[13],N=i[2],V=i[6],q=i[10],$=i[14],D=i[3],I=i[7],j=i[11],Y=i[15];return a[0]=s*A+o*E+l*N+u*D,a[4]=s*w+o*G+l*V+u*I,a[8]=s*P+o*X+l*q+u*j,a[12]=s*y+o*se+l*$+u*Y,a[1]=d*A+f*E+h*N+p*D,a[5]=d*w+f*G+h*V+p*I,a[9]=d*P+f*X+h*q+p*j,a[13]=d*y+f*se+h*$+p*Y,a[2]=_*A+x*E+v*N+c*D,a[6]=_*w+x*G+v*V+c*I,a[10]=_*P+x*X+v*q+c*j,a[14]=_*y+x*se+v*$+c*Y,a[3]=m*A+g*E+b*N+R*D,a[7]=m*w+g*G+b*V+R*I,a[11]=m*P+g*X+b*q+R*j,a[15]=m*y+g*se+b*$+R*Y,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],n=e[4],i=e[8],a=e[12],s=e[1],o=e[5],l=e[9],u=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],v=e[11],c=e[15];return _*(+a*l*f-i*u*f-a*o*h+n*u*h+i*o*p-n*l*p)+x*(+r*l*p-r*u*h+a*s*h-i*s*p+i*u*d-a*l*d)+v*(+r*u*f-r*o*p-a*s*f+n*s*p+a*o*d-n*u*d)+c*(-i*o*d-r*l*f+r*o*h+i*s*f-n*s*h+n*l*d)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=r,i[14]=n),this}invert(){const e=this.elements,r=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],v=e[14],c=e[15],m=f*v*u-x*h*u+x*l*p-o*v*p-f*l*c+o*h*c,g=_*h*u-d*v*u-_*l*p+s*v*p+d*l*c-s*h*c,b=d*x*u-_*f*u+_*o*p-s*x*p-d*o*c+s*f*c,R=_*f*l-d*x*l-_*o*h+s*x*h+d*o*v-s*f*v,A=r*m+n*g+i*b+a*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=m*w,e[1]=(x*h*a-f*v*a-x*i*p+n*v*p+f*i*c-n*h*c)*w,e[2]=(o*v*a-x*l*a+x*i*u-n*v*u-o*i*c+n*l*c)*w,e[3]=(f*l*a-o*h*a-f*i*u+n*h*u+o*i*p-n*l*p)*w,e[4]=g*w,e[5]=(d*v*a-_*h*a+_*i*p-r*v*p-d*i*c+r*h*c)*w,e[6]=(_*l*a-s*v*a-_*i*u+r*v*u+s*i*c-r*l*c)*w,e[7]=(s*h*a-d*l*a+d*i*u-r*h*u-s*i*p+r*l*p)*w,e[8]=b*w,e[9]=(_*f*a-d*x*a-_*n*p+r*x*p+d*n*c-r*f*c)*w,e[10]=(s*x*a-_*o*a+_*n*u-r*x*u-s*n*c+r*o*c)*w,e[11]=(d*o*a-s*f*a-d*n*u+r*f*u+s*n*p-r*o*p)*w,e[12]=R*w,e[13]=(d*x*i-_*f*i+_*n*h-r*x*h-d*n*v+r*f*v)*w,e[14]=(_*o*i-s*x*i-_*n*l+r*x*l+s*n*v-r*o*v)*w,e[15]=(s*f*i-d*o*i+d*n*l-r*f*l-s*n*h+r*o*h)*w,this}scale(e){const r=this.elements,n=e.x,i=e.y,a=e.z;return r[0]*=n,r[4]*=i,r[8]*=a,r[1]*=n,r[5]*=i,r[9]*=a,r[2]*=n,r[6]*=i,r[10]*=a,r[3]*=n,r[7]*=i,r[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,n,i))}makeTranslation(e,r,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,n,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,r,-n,0,0,n,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),n=Math.sin(e);return this.set(r,0,n,0,0,1,0,0,-n,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),n=Math.sin(e);return this.set(r,-n,0,0,n,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const n=Math.cos(r),i=Math.sin(r),a=1-n,s=e.x,o=e.y,l=e.z,u=a*s,d=a*o;return this.set(u*s+n,u*o-i*l,u*l+i*o,0,u*o+i*l,d*o+n,d*l-i*s,0,u*l-i*o,d*l+i*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,r,n){return this.set(e,0,0,0,0,r,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,r,n,i,a,s){return this.set(1,n,a,0,e,1,s,0,r,i,1,0,0,0,0,1),this}compose(e,r,n){const i=this.elements,a=r._x,s=r._y,o=r._z,l=r._w,u=a+a,d=s+s,f=o+o,h=a*u,p=a*d,_=a*f,x=s*d,v=s*f,c=o*f,m=l*u,g=l*d,b=l*f,R=n.x,A=n.y,w=n.z;return i[0]=(1-(x+c))*R,i[1]=(p+b)*R,i[2]=(_-g)*R,i[3]=0,i[4]=(p-b)*A,i[5]=(1-(h+c))*A,i[6]=(v+m)*A,i[7]=0,i[8]=(_+g)*w,i[9]=(v-m)*w,i[10]=(1-(h+x))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,r,n){const i=this.elements;let a=Li.set(i[0],i[1],i[2]).length();const s=Li.set(i[4],i[5],i[6]).length(),o=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Rr.copy(this);const l=1/a,u=1/s,d=1/o;return Rr.elements[0]*=l,Rr.elements[1]*=l,Rr.elements[2]*=l,Rr.elements[4]*=u,Rr.elements[5]*=u,Rr.elements[6]*=u,Rr.elements[8]*=d,Rr.elements[9]*=d,Rr.elements[10]*=d,r.setFromRotationMatrix(Rr),n.x=a,n.y=s,n.z=o,this}makePerspective(e,r,n,i,a,s,o=un){const l=this.elements,u=2*a/(r-e),d=2*a/(n-i),f=(r+e)/(r-e),h=(n+i)/(n-i);let p,_;if(o===un)p=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===al)p=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,r,n,i,a,s,o=un){const l=this.elements,u=1/(r-e),d=1/(n-i),f=1/(s-a),h=(r+e)*u,p=(n+i)*d;let _,x;if(o===un)_=(s+a)*f,x=-2*f;else if(o===al)_=a*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const r=this.elements,n=e.elements;for(let i=0;i<16;i++)if(r[i]!==n[i])return!1;return!0}fromArray(e,r=0){for(let n=0;n<16;n++)this.elements[n]=e[n+r];return this}toArray(e=[],r=0){const n=this.elements;return e[r]=n[0],e[r+1]=n[1],e[r+2]=n[2],e[r+3]=n[3],e[r+4]=n[4],e[r+5]=n[5],e[r+6]=n[6],e[r+7]=n[7],e[r+8]=n[8],e[r+9]=n[9],e[r+10]=n[10],e[r+11]=n[11],e[r+12]=n[12],e[r+13]=n[13],e[r+14]=n[14],e[r+15]=n[15],e}}const Li=new O,Rr=new St,Uy=new O(0,0,0),Iy=new O(1,1,1),Sn=new O,eo=new O,ar=new O,qf=new St,Yf=new Ts;class Tl{constructor(e=0,r=0,n=0,i=Tl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,n,i=this._order){return this._x=e,this._y=r,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,n=!0){const i=e.elements,a=i[0],s=i[4],o=i[8],l=i[1],u=i[5],d=i[9],f=i[2],h=i[6],p=i[10];switch(r){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,n){return qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qf,r,n)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return Yf.setFromEuler(this),this.setFromQuaternion(Yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tl.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oy=0;const $f=new O,Pi=new Ts,Jr=new St,to=new O,ka=new O,ky=new O,Fy=new Ts,Kf=new O(1,0,0),Zf=new O(0,1,0),Qf=new O(0,0,1),zy={type:"added"},By={type:"removed"};class Ht extends Ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new O,r=new Tl,n=new Ts,i=new O(1,1,1);function a(){n.setFromEuler(r,!1)}function s(){r.setFromQuaternion(n,void 0,!1)}r._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new Be}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return Pi.setFromAxisAngle(e,r),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,r){return Pi.setFromAxisAngle(e,r),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Kf,e)}rotateY(e){return this.rotateOnAxis(Zf,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,r){return $f.copy(e).applyQuaternion(this.quaternion),this.position.add($f.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(Kf,e)}translateY(e){return this.translateOnAxis(Zf,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jr.copy(this.matrixWorld).invert())}lookAt(e,r,n){e.isVector3?to.copy(e):to.set(e,r,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jr.lookAt(ka,to,this.up):Jr.lookAt(to,ka,this.up),this.quaternion.setFromRotationMatrix(Jr),i&&(Jr.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(Jr),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(By)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,r);if(a!==void 0)return a}}getObjectsByProperty(e,r,n=[]){this[e]===r&&n.push(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].getObjectsByProperty(e,r,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,Fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let n=0,i=r.length;n<i;n++)r[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let n=0,i=r.length;n<i;n++)r[n].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let n=0,i=r.length;n<i;n++){const a=r[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,r){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),r===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const r=e===void 0||typeof e=="string",n={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(r){const o=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function s(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ht.DEFAULT_UP=new O(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lr=new O,en=new O,Su=new O,tn=new O,Ni=new O,Di=new O,Jf=new O,bu=new O,Eu=new O,Mu=new O;let ro=!1;class Ur{constructor(e=new O,r=new O,n=new O){this.a=e,this.b=r,this.c=n}static getNormal(e,r,n,i){i.subVectors(n,r),Lr.subVectors(e,r),i.cross(Lr);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,r,n,i,a){Lr.subVectors(i,r),en.subVectors(n,r),Su.subVectors(e,r);const s=Lr.dot(Lr),o=Lr.dot(en),l=Lr.dot(Su),u=en.dot(en),d=en.dot(Su),f=s*u-o*o;if(f===0)return a.set(0,0,0),null;const h=1/f,p=(u*l-o*d)*h,_=(s*d-o*l)*h;return a.set(1-p-_,_,p)}static containsPoint(e,r,n,i){return this.getBarycoord(e,r,n,i,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(e,r,n,i,a,s,o,l){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),this.getInterpolation(e,r,n,i,a,s,o,l)}static getInterpolation(e,r,n,i,a,s,o,l){return this.getBarycoord(e,r,n,i,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,tn.x),l.addScaledVector(s,tn.y),l.addScaledVector(o,tn.z),l)}static isFrontFacing(e,r,n,i){return Lr.subVectors(n,r),en.subVectors(e,r),Lr.cross(en).dot(i)<0}set(e,r,n){return this.a.copy(e),this.b.copy(r),this.c.copy(n),this}setFromPointsAndIndices(e,r,n,i){return this.a.copy(e[r]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,r,n,i){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lr.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Lr.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ur.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return Ur.getBarycoord(e,this.a,this.b,this.c,r)}getUV(e,r,n,i,a){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),Ur.getInterpolation(e,this.a,this.b,this.c,r,n,i,a)}getInterpolation(e,r,n,i,a){return Ur.getInterpolation(e,this.a,this.b,this.c,r,n,i,a)}containsPoint(e){return Ur.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ur.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const n=this.a,i=this.b,a=this.c;let s,o;Ni.subVectors(i,n),Di.subVectors(a,n),bu.subVectors(e,n);const l=Ni.dot(bu),u=Di.dot(bu);if(l<=0&&u<=0)return r.copy(n);Eu.subVectors(e,i);const d=Ni.dot(Eu),f=Di.dot(Eu);if(d>=0&&f<=d)return r.copy(i);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),r.copy(n).addScaledVector(Ni,s);Mu.subVectors(e,a);const p=Ni.dot(Mu),_=Di.dot(Mu);if(_>=0&&p<=_)return r.copy(a);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),r.copy(n).addScaledVector(Di,o);const v=d*_-p*f;if(v<=0&&f-d>=0&&p-_>=0)return Jf.subVectors(a,i),o=(f-d)/(f-d+(p-_)),r.copy(i).addScaledVector(Jf,o);const c=1/(v+x+h);return s=x*c,o=h*c,r.copy(n).addScaledVector(Ni,s).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},no={h:0,s:0,l:0};function Tu(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*6*(2/3-r):t}class Ye{constructor(e,r,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,n)}set(e,r,n){if(r===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,r,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,r),this}setRGB(e,r,n,i=Qe.workingColorSpace){return this.r=e,this.g=r,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,r,n,i=Qe.workingColorSpace){if(e=Ty(e,1),r=Jt(r,0,1),n=Jt(n,0,1),r===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+r):n+r-n*r,s=2*n-a;this.r=Tu(s,a,e+1/3),this.g=Tu(s,a,e),this.b=Tu(s,a,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,r=Lt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,r);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,r);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,r);if(s===6)return this.setHex(parseInt(a,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=Lt){const n=pv[e.toLowerCase()];return n!==void 0?this.setHex(n,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=fu(e.r),this.g=fu(e.g),this.b=fu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Qe.fromWorkingColorSpace(zt.copy(this),e),Math.round(Jt(zt.r*255,0,255))*65536+Math.round(Jt(zt.g*255,0,255))*256+Math.round(Jt(zt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=Qe.workingColorSpace){Qe.fromWorkingColorSpace(zt.copy(this),r);const n=zt.r,i=zt.g,a=zt.b,s=Math.max(n,i,a),o=Math.min(n,i,a);let l,u;const d=(o+s)/2;if(o===s)l=0,u=0;else{const f=s-o;switch(u=d<=.5?f/(s+o):f/(2-s-o),s){case n:l=(i-a)/f+(i<a?6:0);break;case i:l=(a-n)/f+2;break;case a:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,r=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(zt.copy(this),r),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Lt){Qe.fromWorkingColorSpace(zt.copy(this),e);const r=zt.r,n=zt.g,i=zt.b;return e!==Lt?`color(${e} ${r.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,r,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+r,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,n){return this.r=e.r+(r.r-e.r)*n,this.g=e.g+(r.g-e.g)*n,this.b=e.b+(r.b-e.b)*n,this}lerpHSL(e,r){this.getHSL(bn),e.getHSL(no);const n=du(bn.h,no.h,r),i=du(bn.s,no.s,r),a=du(bn.l,no.l,r);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*r+a[3]*n+a[6]*i,this.g=a[1]*r+a[4]*n+a[7]*i,this.b=a[2]*r+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ye;Ye.NAMES=pv;let Hy=0;class As extends Ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=oa,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Pc,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const n=e[r];if(n===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const i=this[r];if(i===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[r]=n}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lc&&(n.blendSrc=this.blendSrc),this.blendDst!==Pc&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(r){const a=i(e.textures),s=i(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let n=null;if(r!==null){const i=r.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=r[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fd extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new O,io=new We;class Yr{constructor(e,r,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=n,this.usage=Bf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,n){e*=this.itemSize,n*=r.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=r.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,n=this.count;r<n;r++)io.fromBufferAttribute(this,r),io.applyMatrix3(e),this.setXY(r,io.x,io.y);else if(this.itemSize===3)for(let r=0,n=this.count;r<n;r++)gt.fromBufferAttribute(this,r),gt.applyMatrix3(e),this.setXYZ(r,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let r=0,n=this.count;r<n;r++)gt.fromBufferAttribute(this,r),gt.applyMatrix4(e),this.setXYZ(r,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let r=0,n=this.count;r<n;r++)gt.fromBufferAttribute(this,r),gt.applyNormalMatrix(e),this.setXYZ(r,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let r=0,n=this.count;r<n;r++)gt.fromBufferAttribute(this,r),gt.transformDirection(e),this.setXYZ(r,gt.x,gt.y,gt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let n=this.array[e*this.itemSize+r];return this.normalized&&(n=Ua(n,this.array)),n}setComponent(e,r,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+r]=n,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=Ua(r,this.array)),r}setX(e,r){return this.normalized&&(r=Zt(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=Ua(r,this.array)),r}setY(e,r){return this.normalized&&(r=Zt(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=Ua(r,this.array)),r}setZ(e,r){return this.normalized&&(r=Zt(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=Ua(r,this.array)),r}setW(e,r){return this.normalized&&(r=Zt(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,n){return e*=this.itemSize,this.normalized&&(r=Zt(r,this.array),n=Zt(n,this.array)),this.array[e+0]=r,this.array[e+1]=n,this}setXYZ(e,r,n,i){return e*=this.itemSize,this.normalized&&(r=Zt(r,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=r,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,r,n,i,a){return e*=this.itemSize,this.normalized&&(r=Zt(r,this.array),n=Zt(n,this.array),i=Zt(i,this.array),a=Zt(a,this.array)),this.array[e+0]=r,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bf&&(e.usage=this.usage),e}}class mv extends Yr{constructor(e,r,n){super(new Uint16Array(e),r,n)}}class gv extends Yr{constructor(e,r,n){super(new Uint32Array(e),r,n)}}class $r extends Yr{constructor(e,r,n){super(new Float32Array(e),r,n)}}let Gy=0;const vr=new St,wu=new Ht,Ui=new O,sr=new ws,Fa=new ws,Mt=new O;class Yn extends Ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uv(e)?gv:mv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,n=0){this.groups.push({start:e,count:r,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Be().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vr.makeRotationFromQuaternion(e),this.applyMatrix4(vr),this}rotateX(e){return vr.makeRotationX(e),this.applyMatrix4(vr),this}rotateY(e){return vr.makeRotationY(e),this.applyMatrix4(vr),this}rotateZ(e){return vr.makeRotationZ(e),this.applyMatrix4(vr),this}translate(e,r,n){return vr.makeTranslation(e,r,n),this.applyMatrix4(vr),this}scale(e,r,n){return vr.makeScale(e,r,n),this.applyMatrix4(vr),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const r=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];r.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new $r(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let n=0,i=r.length;n<i;n++){const a=r[n];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,sr.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,sr.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(sr.min),this.boundingBox.expandByPoint(sr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kd);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(sr.setFromBufferAttribute(e),r)for(let a=0,s=r.length;a<s;a++){const o=r[a];Fa.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(sr.min,Fa.min),sr.expandByPoint(Mt),Mt.addVectors(sr.max,Fa.max),sr.expandByPoint(Mt)):(sr.expandByPoint(Fa.min),sr.expandByPoint(Fa.max))}sr.getCenter(n);let i=0;for(let a=0,s=e.count;a<s;a++)Mt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(Mt));if(r)for(let a=0,s=r.length;a<s;a++){const o=r[a],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Mt.fromBufferAttribute(o,u),l&&(Ui.fromBufferAttribute(e,u),Mt.add(Ui)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=r.position.array,a=r.normal.array,s=r.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yr(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let E=0;E<o;E++)u[E]=new O,d[E]=new O;const f=new O,h=new O,p=new O,_=new We,x=new We,v=new We,c=new O,m=new O;function g(E,G,X){f.fromArray(i,E*3),h.fromArray(i,G*3),p.fromArray(i,X*3),_.fromArray(s,E*2),x.fromArray(s,G*2),v.fromArray(s,X*2),h.sub(f),p.sub(f),x.sub(_),v.sub(_);const se=1/(x.x*v.y-v.x*x.y);isFinite(se)&&(c.copy(h).multiplyScalar(v.y).addScaledVector(p,-x.y).multiplyScalar(se),m.copy(p).multiplyScalar(x.x).addScaledVector(h,-v.x).multiplyScalar(se),u[E].add(c),u[G].add(c),u[X].add(c),d[E].add(m),d[G].add(m),d[X].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let E=0,G=b.length;E<G;++E){const X=b[E],se=X.start,N=X.count;for(let V=se,q=se+N;V<q;V+=3)g(n[V+0],n[V+1],n[V+2])}const R=new O,A=new O,w=new O,P=new O;function y(E){w.fromArray(a,E*3),P.copy(w);const G=u[E];R.copy(G),R.sub(w.multiplyScalar(w.dot(G))).normalize(),A.crossVectors(P,G);const X=A.dot(d[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=X}for(let E=0,G=b.length;E<G;++E){const X=b[E],se=X.start,N=X.count;for(let V=se,q=se+N;V<q;V+=3)y(n[V+0]),y(n[V+1]),y(n[V+2])}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yr(new Float32Array(r.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new O,a=new O,s=new O,o=new O,l=new O,u=new O,d=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),v=e.getX(h+2);i.fromBufferAttribute(r,_),a.fromBufferAttribute(r,x),s.fromBufferAttribute(r,v),d.subVectors(s,a),f.subVectors(i,a),d.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,v),o.add(d),l.add(d),u.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let h=0,p=r.count;h<p;h+=3)i.fromBufferAttribute(r,h+0),a.fromBufferAttribute(r,h+1),s.fromBufferAttribute(r,h+2),d.subVectors(s,a),f.subVectors(i,a),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,n=e.count;r<n;r++)Mt.fromBufferAttribute(e,r),Mt.normalize(),e.setXYZ(r,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,f=o.normalized,h=new u.constructor(l.length*d);let p=0,_=0;for(let x=0,v=l.length;x<v;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*d;for(let c=0;c<d;c++)h[_++]=u[p++]}return new Yr(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new Yn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],u=e(l,n);r.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const l=[],u=a[o];for(let d=0,f=u.length;d<f;d++){const h=u[d],p=e(h,n);l.push(p)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];r.addGroup(u.start,u.count,u.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(r));const i=e.attributes;for(const u in i){const d=i[u];this.setAttribute(u,d.clone(r))}const a=e.morphAttributes;for(const u in a){const d=[],f=a[u];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(r));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ep=new St,Jn=new Dy,ao=new kd,tp=new O,Ii=new O,Oi=new O,ki=new O,Au=new O,so=new O,oo=new We,lo=new We,uo=new We,rp=new O,np=new O,ip=new O,co=new O,ho=new O;class jr extends Ht{constructor(e=new Yn,r=new Fd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const n=e[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,r){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;r.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){so.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const d=o[l],f=a[l];d!==0&&(Au.fromBufferAttribute(f,e),s?so.addScaledVector(Au,d):so.addScaledVector(Au.sub(r),d))}r.add(so)}return r}raycast(e,r){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(a),Jn.copy(e.ray).recast(e.near),!(ao.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(ao,tp)===null||Jn.origin.distanceToSquared(tp)>(e.far-e.near)**2))&&(ep.copy(a).invert(),Jn.copy(e.ray).applyMatrix4(ep),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,r,Jn)))}_computeIntersections(e,r,n){let i;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const v=h[_],c=s[v.materialIndex],m=Math.max(v.start,p.start),g=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let b=m,R=g;b<R;b+=3){const A=o.getX(b),w=o.getX(b+1),P=o.getX(b+2);i=fo(this,c,e,n,u,d,f,A,w,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=v.materialIndex,r.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let v=_,c=x;v<c;v+=3){const m=o.getX(v),g=o.getX(v+1),b=o.getX(v+2);i=fo(this,s,e,n,u,d,f,m,g,b),i&&(i.faceIndex=Math.floor(v/3),r.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const v=h[_],c=s[v.materialIndex],m=Math.max(v.start,p.start),g=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let b=m,R=g;b<R;b+=3){const A=b,w=b+1,P=b+2;i=fo(this,c,e,n,u,d,f,A,w,P),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=v.materialIndex,r.push(i))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let v=_,c=x;v<c;v+=3){const m=v,g=v+1,b=v+2;i=fo(this,s,e,n,u,d,f,m,g,b),i&&(i.faceIndex=Math.floor(v/3),r.push(i))}}}}function Vy(t,e,r,n,i,a,s,o){let l;if(e.side===ir?l=n.intersectTriangle(s,a,i,!0,o):l=n.intersectTriangle(i,a,s,e.side===Wn,o),l===null)return null;ho.copy(o),ho.applyMatrix4(t.matrixWorld);const u=r.ray.origin.distanceTo(ho);return u<r.near||u>r.far?null:{distance:u,point:ho.clone(),object:t}}function fo(t,e,r,n,i,a,s,o,l,u){t.getVertexPosition(o,Ii),t.getVertexPosition(l,Oi),t.getVertexPosition(u,ki);const d=Vy(t,e,r,n,Ii,Oi,ki,co);if(d){i&&(oo.fromBufferAttribute(i,o),lo.fromBufferAttribute(i,l),uo.fromBufferAttribute(i,u),d.uv=Ur.getInterpolation(co,Ii,Oi,ki,oo,lo,uo,new We)),a&&(oo.fromBufferAttribute(a,o),lo.fromBufferAttribute(a,l),uo.fromBufferAttribute(a,u),d.uv1=Ur.getInterpolation(co,Ii,Oi,ki,oo,lo,uo,new We),d.uv2=d.uv1),s&&(rp.fromBufferAttribute(s,o),np.fromBufferAttribute(s,l),ip.fromBufferAttribute(s,u),d.normal=Ur.getInterpolation(co,Ii,Oi,ki,rp,np,ip,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new O,materialIndex:0};Ur.getNormal(Ii,Oi,ki,f.normal),d.face=f}return d}class Cs extends Yn{constructor(e=1,r=1,n=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const l=[],u=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,n,r,e,s,a,0),_("z","y","x",1,-1,n,r,-e,s,a,1),_("x","z","y",1,1,e,n,r,i,s,2),_("x","z","y",1,-1,e,n,-r,i,s,3),_("x","y","z",1,-1,e,r,n,i,a,4),_("x","y","z",-1,-1,e,r,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new $r(u,3)),this.setAttribute("normal",new $r(d,3)),this.setAttribute("uv",new $r(f,2));function _(x,v,c,m,g,b,R,A,w,P,y){const E=b/w,G=R/P,X=b/2,se=R/2,N=A/2,V=w+1,q=P+1;let $=0,D=0;const I=new O;for(let j=0;j<q;j++){const Y=j*G-se;for(let re=0;re<V;re++){const H=re*E-X;I[x]=H*m,I[v]=Y*g,I[c]=N,u.push(I.x,I.y,I.z),I[x]=0,I[v]=0,I[c]=A>0?1:-1,d.push(I.x,I.y,I.z),f.push(re/w),f.push(1-j/P),$+=1}}for(let j=0;j<P;j++)for(let Y=0;Y<w;Y++){const re=h+Y+V*j,H=h+Y+V*(j+1),K=h+(Y+1)+V*(j+1),de=h+(Y+1)+V*j;l.push(re,H,de),l.push(H,K,de),D+=6}o.addGroup(p,D,y),p+=D,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xa(t){const e={};for(const r in t){e[r]={};for(const n in t[r]){const i=t[r][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][n]=null):e[r][n]=i.clone():Array.isArray(i)?e[r][n]=i.slice():e[r][n]=i}}return e}function jt(t){const e={};for(let r=0;r<t.length;r++){const n=xa(t[r]);for(const i in n)e[i]=n[i]}return e}function Wy(t){const e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}function vv(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const jy={clone:xa,merge:jt};var Xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=Wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?r.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?r.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?r.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?r.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?r.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?r.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?r.uniforms[i]={type:"m4",value:a.toArray()}:r.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(r.extensions=n),r}}class _v extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=un}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sr extends _v{constructor(e=50,r=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=kc*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,r,n,i,a,s){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(cu*.5*this.fov)/this.zoom,n=2*r,i=this.aspect*n,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;a+=s.offsetX*i/l,r-=s.offsetY*n/u,i*=s.width/l,n*=s.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,r,r-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Fi=-90,zi=1;class Yy extends Ht{constructor(e,r,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Sr(Fi,zi,e,r);i.layers=this.layers,this.add(i);const a=new Sr(Fi,zi,e,r);a.layers=this.layers,this.add(a);const s=new Sr(Fi,zi,e,r);s.layers=this.layers,this.add(s);const o=new Sr(Fi,zi,e,r);o.layers=this.layers,this.add(o);const l=new Sr(Fi,zi,e,r);l.layers=this.layers,this.add(l);const u=new Sr(Fi,zi,e,r);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[n,i,a,s,o,l]=r;for(const u of r)this.remove(u);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===al)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of r)this.add(u),u.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,u,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(r,a),e.setRenderTarget(n,1,i),e.render(r,s),e.setRenderTarget(n,2,i),e.render(r,o),e.setRenderTarget(n,3,i),e.render(r,l),e.setRenderTarget(n,4,i),e.render(r,u),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(r,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class xv extends cr{constructor(e,r,n,i,a,s,o,l,u,d){e=e!==void 0?e:[],r=r!==void 0?r:ga,super(e,r,n,i,a,s,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $y extends yi{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];r.encoding!==void 0&&(Ja("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===pi?Lt:br),this.texture=new xv(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:yr}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Cs(5,5,5),a=new Si({name:"CubemapFromEquirect",uniforms:xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ir,blending:zn});a.uniforms.tEquirect.value=r;const s=new jr(i,a),o=r.minFilter;return r.minFilter===vs&&(r.minFilter=yr),new Yy(1,10,this).update(e,s),r.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,r,n,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(r,n,i);e.setRenderTarget(a)}}const Cu=new O,Ky=new O,Zy=new Be;class ni{constructor(e=new O(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,n,i){return this.normal.set(e,r,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,n){const i=Cu.subVectors(n,r).cross(Ky.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const n=e.delta(Cu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:r.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const r=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return r<0&&n>0||n<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const n=r||Zy.getNormalMatrix(e),i=this.coplanarPoint(Cu).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new kd,po=new O;class zd{constructor(e=new ni,r=new ni,n=new ni,i=new ni,a=new ni,s=new ni){this.planes=[e,r,n,i,a,s]}set(e,r,n,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(r),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const r=this.planes;for(let n=0;n<6;n++)r[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,r=un){const n=this.planes,i=e.elements,a=i[0],s=i[1],o=i[2],l=i[3],u=i[4],d=i[5],f=i[6],h=i[7],p=i[8],_=i[9],x=i[10],v=i[11],c=i[12],m=i[13],g=i[14],b=i[15];if(n[0].setComponents(l-a,h-u,v-p,b-c).normalize(),n[1].setComponents(l+a,h+u,v+p,b+c).normalize(),n[2].setComponents(l+s,h+d,v+_,b+m).normalize(),n[3].setComponents(l-s,h-d,v-_,b-m).normalize(),n[4].setComponents(l-o,h-f,v-x,b-g).normalize(),r===un)n[5].setComponents(l+o,h+f,v+x,b+g).normalize();else if(r===al)n[5].setComponents(o,f,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),ei.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const r=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(r[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const r=this.planes;for(let n=0;n<6;n++){const i=r[n];if(po.x=i.normal.x>0?e.max.x:e.min.x,po.y=i.normal.y>0?e.max.y:e.min.y,po.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let n=0;n<6;n++)if(r[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yv(){let t=null,e=!1,r=null,n=null;function i(a,s){r(a,s),n=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&r!==null&&(n=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){r=a},setContext:function(a){t=a}}}function Qy(t,e){const r=e.isWebGL2,n=new WeakMap;function i(u,d){const f=u.array,h=u.usage,p=f.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,f,h),u.onUploadCallback();let x;if(f instanceof Float32Array)x=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(r)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=t.SHORT;else if(f instanceof Uint32Array)x=t.UNSIGNED_INT;else if(f instanceof Int32Array)x=t.INT;else if(f instanceof Int8Array)x=t.BYTE;else if(f instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function a(u,d,f){const h=d.array,p=d._updateRange,_=d.updateRanges;if(t.bindBuffer(f,u),p.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let x=0,v=_.length;x<v;x++){const c=_[x];r?t.bufferSubData(f,c.start*h.BYTES_PER_ELEMENT,h,c.start,c.count):t.bufferSubData(f,c.start*h.BYTES_PER_ELEMENT,h.subarray(c.start,c.start+c.count))}d.clearUpdateRanges()}p.count!==-1&&(r?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(t.deleteBuffer(d.buffer),n.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const h=n.get(u);(!h||h.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);if(f===void 0)n.set(u,i(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,u,d),f.version=u.version}}return{get:s,remove:o,update:l}}class Bd extends Yn{constructor(e=1,r=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:n,heightSegments:i};const a=e/2,s=r/2,o=Math.floor(n),l=Math.floor(i),u=o+1,d=l+1,f=e/o,h=r/l,p=[],_=[],x=[],v=[];for(let c=0;c<d;c++){const m=c*h-s;for(let g=0;g<u;g++){const b=g*f-a;_.push(b,-m,0),x.push(0,0,1),v.push(g/o),v.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<o;m++){const g=m+u*c,b=m+u*(c+1),R=m+1+u*(c+1),A=m+1+u*c;p.push(g,b,A),p.push(b,R,A)}this.setIndex(p),this.setAttribute("position",new $r(_,3)),this.setAttribute("normal",new $r(x,3)),this.setAttribute("uv",new $r(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,iS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ES=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RS="gl_FragColor = linearToOutputTexel( gl_FragColor );",LS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,PS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$S=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ab=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ub=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,db=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ab=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Jy,alphahash_pars_fragment:eS,alphamap_fragment:tS,alphamap_pars_fragment:rS,alphatest_fragment:nS,alphatest_pars_fragment:iS,aomap_fragment:aS,aomap_pars_fragment:sS,batching_pars_vertex:oS,batching_vertex:lS,begin_vertex:uS,beginnormal_vertex:cS,bsdfs:dS,iridescence_fragment:hS,bumpmap_pars_fragment:fS,clipping_planes_fragment:pS,clipping_planes_pars_fragment:mS,clipping_planes_pars_vertex:gS,clipping_planes_vertex:vS,color_fragment:_S,color_pars_fragment:xS,color_pars_vertex:yS,color_vertex:SS,common:bS,cube_uv_reflection_fragment:ES,defaultnormal_vertex:MS,displacementmap_pars_vertex:TS,displacementmap_vertex:wS,emissivemap_fragment:AS,emissivemap_pars_fragment:CS,colorspace_fragment:RS,colorspace_pars_fragment:LS,envmap_fragment:PS,envmap_common_pars_fragment:NS,envmap_pars_fragment:DS,envmap_pars_vertex:US,envmap_physical_pars_fragment:XS,envmap_vertex:IS,fog_vertex:OS,fog_pars_vertex:kS,fog_fragment:FS,fog_pars_fragment:zS,gradientmap_pars_fragment:BS,lightmap_fragment:HS,lightmap_pars_fragment:GS,lights_lambert_fragment:VS,lights_lambert_pars_fragment:WS,lights_pars_begin:jS,lights_toon_fragment:qS,lights_toon_pars_fragment:YS,lights_phong_fragment:$S,lights_phong_pars_fragment:KS,lights_physical_fragment:ZS,lights_physical_pars_fragment:QS,lights_fragment_begin:JS,lights_fragment_maps:eb,lights_fragment_end:tb,logdepthbuf_fragment:rb,logdepthbuf_pars_fragment:nb,logdepthbuf_pars_vertex:ib,logdepthbuf_vertex:ab,map_fragment:sb,map_pars_fragment:ob,map_particle_fragment:lb,map_particle_pars_fragment:ub,metalnessmap_fragment:cb,metalnessmap_pars_fragment:db,morphcolor_vertex:hb,morphnormal_vertex:fb,morphtarget_pars_vertex:pb,morphtarget_vertex:mb,normal_fragment_begin:gb,normal_fragment_maps:vb,normal_pars_fragment:_b,normal_pars_vertex:xb,normal_vertex:yb,normalmap_pars_fragment:Sb,clearcoat_normal_fragment_begin:bb,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:Mb,iridescence_pars_fragment:Tb,opaque_fragment:wb,packing:Ab,premultiplied_alpha_fragment:Cb,project_vertex:Rb,dithering_fragment:Lb,dithering_pars_fragment:Pb,roughnessmap_fragment:Nb,roughnessmap_pars_fragment:Db,shadowmap_pars_fragment:Ub,shadowmap_pars_vertex:Ib,shadowmap_vertex:Ob,shadowmask_pars_fragment:kb,skinbase_vertex:Fb,skinning_pars_vertex:zb,skinning_vertex:Bb,skinnormal_vertex:Hb,specularmap_fragment:Gb,specularmap_pars_fragment:Vb,tonemapping_fragment:Wb,tonemapping_pars_fragment:jb,transmission_fragment:Xb,transmission_pars_fragment:qb,uv_pars_fragment:Yb,uv_pars_vertex:$b,uv_vertex:Kb,worldpos_vertex:Zb,background_vert:Qb,background_frag:Jb,backgroundCube_vert:eE,backgroundCube_frag:tE,cube_vert:rE,cube_frag:nE,depth_vert:iE,depth_frag:aE,distanceRGBA_vert:sE,distanceRGBA_frag:oE,equirect_vert:lE,equirect_frag:uE,linedashed_vert:cE,linedashed_frag:dE,meshbasic_vert:hE,meshbasic_frag:fE,meshlambert_vert:pE,meshlambert_frag:mE,meshmatcap_vert:gE,meshmatcap_frag:vE,meshnormal_vert:_E,meshnormal_frag:xE,meshphong_vert:yE,meshphong_frag:SE,meshphysical_vert:bE,meshphysical_frag:EE,meshtoon_vert:ME,meshtoon_frag:TE,points_vert:wE,points_frag:AE,shadow_vert:CE,shadow_frag:RE,sprite_vert:LE,sprite_frag:PE},ae={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Vr={basic:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:jt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:jt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:jt([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:jt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:jt([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:jt([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:jt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:jt([ae.lights,ae.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Vr.physical={uniforms:jt([Vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const mo={r:0,b:0,g:0};function NE(t,e,r,n,i,a,s){const o=new Ye(0);let l=a===!0?0:1,u,d,f=null,h=0,p=null;function _(v,c){let m=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?r:e).get(g)),g===null?x(o,l):g&&g.isColor&&(x(g,1),m=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===El)?(d===void 0&&(d=new jr(new Cs(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:xa(Vr.backgroundCube.uniforms),vertexShader:Vr.backgroundCube.vertexShader,fragmentShader:Vr.backgroundCube.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=Qe.getTransfer(g.colorSpace)!==it,(f!==g||h!==g.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new jr(new Bd(2,2),new Si({name:"BackgroundMaterial",uniforms:xa(Vr.background.uniforms),vertexShader:Vr.background.vertexShader,fragmentShader:Vr.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(g.colorSpace)!==it,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function x(v,c){v.getRGB(mo,vv(t)),n.buffers.color.setClear(mo.r,mo.g,mo.b,c,s)}return{getClearColor:function(){return o},setClearColor:function(v,c=1){o.set(v),l=c,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,x(o,l)},render:_}}function DE(t,e,r,n){const i=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,o={},l=v(null);let u=l,d=!1;function f(N,V,q,$,D){let I=!1;if(s){const j=x($,q,V);u!==j&&(u=j,p(u.object)),I=c(N,$,q,D),I&&m(N,$,q,D)}else{const j=V.wireframe===!0;(u.geometry!==$.id||u.program!==q.id||u.wireframe!==j)&&(u.geometry=$.id,u.program=q.id,u.wireframe=j,I=!0)}D!==null&&r.update(D,t.ELEMENT_ARRAY_BUFFER),(I||d)&&(d=!1,P(N,V,q,$),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r.get(D).buffer))}function h(){return n.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(N){return n.isWebGL2?t.bindVertexArray(N):a.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?t.deleteVertexArray(N):a.deleteVertexArrayOES(N)}function x(N,V,q){const $=q.wireframe===!0;let D=o[N.id];D===void 0&&(D={},o[N.id]=D);let I=D[V.id];I===void 0&&(I={},D[V.id]=I);let j=I[$];return j===void 0&&(j=v(h()),I[$]=j),j}function v(N){const V=[],q=[],$=[];for(let D=0;D<i;D++)V[D]=0,q[D]=0,$[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:$,object:N,attributes:{},index:null}}function c(N,V,q,$){const D=u.attributes,I=V.attributes;let j=0;const Y=q.getAttributes();for(const re in Y)if(Y[re].location>=0){const H=D[re];let K=I[re];if(K===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),H===void 0||H.attribute!==K||K&&H.data!==K.data)return!0;j++}return u.attributesNum!==j||u.index!==$}function m(N,V,q,$){const D={},I=V.attributes;let j=0;const Y=q.getAttributes();for(const re in Y)if(Y[re].location>=0){let H=I[re];H===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(H=N.instanceColor));const K={};K.attribute=H,H&&H.data&&(K.data=H.data),D[re]=K,j++}u.attributes=D,u.attributesNum=j,u.index=$}function g(){const N=u.newAttributes;for(let V=0,q=N.length;V<q;V++)N[V]=0}function b(N){R(N,0)}function R(N,V){const q=u.newAttributes,$=u.enabledAttributes,D=u.attributeDivisors;q[N]=1,$[N]===0&&(t.enableVertexAttribArray(N),$[N]=1),D[N]!==V&&((n.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),D[N]=V)}function A(){const N=u.newAttributes,V=u.enabledAttributes;for(let q=0,$=V.length;q<$;q++)V[q]!==N[q]&&(t.disableVertexAttribArray(q),V[q]=0)}function w(N,V,q,$,D,I,j){j===!0?t.vertexAttribIPointer(N,V,q,D,I):t.vertexAttribPointer(N,V,q,$,D,I)}function P(N,V,q,$){if(n.isWebGL2===!1&&(N.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=$.attributes,I=q.getAttributes(),j=V.defaultAttributeValues;for(const Y in I){const re=I[Y];if(re.location>=0){let H=D[Y];if(H===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(H=N.instanceColor)),H!==void 0){const K=H.normalized,de=H.itemSize,he=r.get(H);if(he===void 0)continue;const me=he.buffer,Le=he.type,Pe=he.bytesPerElement,Te=n.isWebGL2===!0&&(Le===t.INT||Le===t.UNSIGNED_INT||H.gpuType===Jg);if(H.isInterleavedBufferAttribute){const je=H.data,z=je.stride,Vt=H.offset;if(je.isInstancedInterleavedBuffer){for(let Se=0;Se<re.locationSize;Se++)R(re.location+Se,je.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Se=0;Se<re.locationSize;Se++)b(re.location+Se);t.bindBuffer(t.ARRAY_BUFFER,me);for(let Se=0;Se<re.locationSize;Se++)w(re.location+Se,de/re.locationSize,Le,K,z*Pe,(Vt+de/re.locationSize*Se)*Pe,Te)}else{if(H.isInstancedBufferAttribute){for(let je=0;je<re.locationSize;je++)R(re.location+je,H.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let je=0;je<re.locationSize;je++)b(re.location+je);t.bindBuffer(t.ARRAY_BUFFER,me);for(let je=0;je<re.locationSize;je++)w(re.location+je,de/re.locationSize,Le,K,de*Pe,de/re.locationSize*je*Pe,Te)}}else if(j!==void 0){const K=j[Y];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(re.location,K);break;case 3:t.vertexAttrib3fv(re.location,K);break;case 4:t.vertexAttrib4fv(re.location,K);break;default:t.vertexAttrib1fv(re.location,K)}}}}A()}function y(){X();for(const N in o){const V=o[N];for(const q in V){const $=V[q];for(const D in $)_($[D].object),delete $[D];delete V[q]}delete o[N]}}function E(N){if(o[N.id]===void 0)return;const V=o[N.id];for(const q in V){const $=V[q];for(const D in $)_($[D].object),delete $[D];delete V[q]}delete o[N.id]}function G(N){for(const V in o){const q=o[V];if(q[N.id]===void 0)continue;const $=q[N.id];for(const D in $)_($[D].object),delete $[D];delete q[N.id]}}function X(){se(),d=!0,u!==l&&(u=l,p(u.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:se,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:G,initAttributes:g,enableAttribute:b,disableUnusedAttributes:A}}function UE(t,e,r,n){const i=n.isWebGL2;let a;function s(d){a=d}function o(d,f){t.drawArrays(a,d,f),r.update(f,a,1)}function l(d,f,h){if(h===0)return;let p,_;if(i)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](a,d,f,h),r.update(f,a,h)}function u(d,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(d[_],f[_]);else{p.multiDrawArraysWEBGL(a,d,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=f[x];r.update(_,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function IE(t,e,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=r.precision!==void 0?r.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=s||e.has("WEBGL_draw_buffers"),d=r.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,b=s||e.has("OES_texture_float"),R=g&&b,A=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:v,maxVaryings:c,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:A}}function OE(t){const e=this;let r=null,n=0,i=!1,a=!1;const s=new ni,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){r=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,v=f.clipShadows,c=t.get(f);if(!i||_===null||_.length===0||a&&!v)a?d(null):u();else{const m=a?0:n,g=m*4;let b=c.clippingState||null;l.value=b,b=d(_,h,g,p);for(let R=0;R!==g;++R)b[R]=r[R];c.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==r&&(l.value=r,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,p,_){const x=f!==null?f.length:0;let v=null;if(x!==0){if(v=l.value,_!==!0||v===null){const c=p+x*4,m=h.matrixWorldInverse;o.getNormalMatrix(m),(v===null||v.length<c)&&(v=new Float32Array(c));for(let g=0,b=p;g!==x;++g,b+=4)s.copy(f[g]).applyMatrix4(m,o),s.normal.toArray(v,b),v[b+3]=s.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function kE(t){let e=new WeakMap;function r(s,o){return o===Nc?s.mapping=ga:o===Dc&&(s.mapping=va),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Nc||o===Dc)if(e.has(s)){const l=e.get(s).texture;return r(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new $y(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",i),r(u.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Sv extends _v{constructor(e=-1,r=1,n=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=n,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,n,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=i+r,l=i-r;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,s=a+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const Ji=4,ap=[.125,.215,.35,.446,.526,.582],si=20,Ru=new Sv,sp=new Ye;let Lu=null,Pu=0,Nu=0;const ii=(1+Math.sqrt(5))/2,Bi=1/ii,op=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ii,Bi),new O(0,ii,-Bi),new O(Bi,0,ii),new O(-Bi,0,ii),new O(ii,Bi,0),new O(-ii,Bi,0)];class lp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,n=.1,i=100){Lu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),r>0&&this._blur(a,0,0,r),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lu,Pu,Nu),e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===ga||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel();const n=r||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,n={magFilter:yr,minFilter:yr,generateMipmaps:!1,type:_s,format:Or,colorSpace:mn,depthBuffer:!1},i=up(e,r,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(e,r,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FE(a)),this._blurMaterial=zE(a,e,r)}return i}_compileMaterial(e){const r=new jr(this._lodPlanes[0],e);this._renderer.compile(r,Ru)}_sceneToCubeUV(e,r,n,i){const a=new Sr(90,1,r,n),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(sp),l.toneMapping=Bn,l.autoClear=!1;const f=new Fd({name:"PMREM.Background",side:ir,depthWrite:!1,depthTest:!1}),h=new jr(new Cs,f);let p=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,p=!0):(f.color.copy(sp),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(a.up.set(0,s[x],0),a.lookAt(o[x],0,0)):v===1?(a.up.set(0,0,s[x]),a.lookAt(0,o[x],0)):(a.up.set(0,s[x],0),a.lookAt(0,0,o[x]));const c=this._cubeSize;go(i,v*c,x>2?c:0,c,c),l.setRenderTarget(i),p&&l.render(h,a),l.render(e,a)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=d,l.autoClear=u,e.background=_}_textureToCubeUV(e,r){const n=this._renderer,i=e.mapping===ga||e.mapping===va;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cp());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new jr(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;go(r,0,0,3*l,2*l),n.setRenderTarget(r),n.render(s,Ru)}_applyPMREM(e){const r=this._renderer,n=r.autoClear;r.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=op[(i-1)%op.length];this._blur(e,i-1,i,a,s)}r.autoClear=n}_blur(e,r,n,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,r,n,i,"latitudinal",a),this._halfBlur(s,e,n,n,i,"longitudinal",a)}_halfBlur(e,r,n,i,a,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new jr(this._lodPlanes[i],u),h=u.uniforms,p=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*si-1),x=a/_,v=isFinite(a)?1+Math.floor(d*x):si;v>si&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${si}`);const c=[];let m=0;for(let w=0;w<si;++w){const P=w/x,y=Math.exp(-P*P/2);c.push(y),w===0?m+=y:w<v&&(m+=2*y)}for(let w=0;w<c.length;w++)c[w]=c[w]/m;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=c,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-n;const b=this._sizeLods[i],R=3*b*(i>g-Ji?i-g+Ji:0),A=4*(this._cubeSize-b);go(r,R,A,3*b,2*b),l.setRenderTarget(r),l.render(f,Ru)}}function FE(t){const e=[],r=[],n=[];let i=t;const a=t-Ji+1+ap.length;for(let s=0;s<a;s++){const o=Math.pow(2,i);r.push(o);let l=1/o;s>t-Ji?l=ap[s-t+Ji-1]:s===0&&(l=0),n.push(l);const u=1/(o-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,x=3,v=2,c=1,m=new Float32Array(x*_*p),g=new Float32Array(v*_*p),b=new Float32Array(c*_*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,y=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];m.set(y,x*_*A),g.set(h,v*_*A);const E=[A,A,A,A,A,A];b.set(E,c*_*A)}const R=new Yn;R.setAttribute("position",new Yr(m,x)),R.setAttribute("uv",new Yr(g,v)),R.setAttribute("faceIndex",new Yr(b,c)),e.push(R),i>Ji&&i--}return{lodPlanes:e,sizeLods:r,sigmas:n}}function up(t,e,r){const n=new yi(t,e,r);return n.texture.mapping=El,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(t,e,r,n,i){t.viewport.set(e,r,n,i),t.scissor.set(e,r,n,i)}function zE(t,e,r){const n=new Float32Array(si),i=new O(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function cp(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function dp(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Hd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BE(t){let e=new WeakMap,r=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Nc||l===Dc,d=l===ga||l===va;if(u||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return r===null&&(r=new lp(t)),f=u?r.fromEquirectangular(o,f):r.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||d&&f&&i(f)){r===null&&(r=new lp(t));const h=u?r.fromEquirectangular(o):r.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",a),h.texture}else return null}}}return o}function i(o){let l=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&l++;return l===u}function a(o){const l=o.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:s}}function HE(t){const e={};function r(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(n)}return e[n]=i,i}return{has:function(n){return r(n)!==null},init:function(n){n.isWebGL2?(r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance")):(r("WEBGL_depth_texture"),r("OES_texture_float"),r("OES_texture_half_float"),r("OES_texture_half_float_linear"),r("OES_standard_derivatives"),r("OES_element_index_uint"),r("OES_vertex_array_object"),r("ANGLE_instanced_arrays")),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture")},get:function(n){const i=r(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function GE(t,e,r,n){const i={},a=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let v=0,c=x.length;v<c;v++)e.remove(x[v])}h.removeEventListener("dispose",s),delete i[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,r.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,r.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let v=0,c=x.length;v<c;v++)e.update(x[v],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const m=p.array;x=p.version;for(let g=0,b=m.length;g<b;g+=3){const R=m[g+0],A=m[g+1],w=m[g+2];h.push(R,A,A,w,w,R)}}else if(_!==void 0){const m=_.array;x=_.version;for(let g=0,b=m.length/3-1;g<b;g+=3){const R=g+0,A=g+1,w=g+2;h.push(R,A,A,w,w,R)}}else return;const v=new(uv(h)?gv:mv)(h,1);v.version=x;const c=a.get(f);c&&e.remove(c),a.set(f,v)}function d(f){const h=a.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function VE(t,e,r,n){const i=n.isWebGL2;let a;function s(p){a=p}let o,l;function u(p){o=p.type,l=p.bytesPerElement}function d(p,_){t.drawElements(a,_,o,p*l),r.update(_,a,1)}function f(p,_,x){if(x===0)return;let v,c;if(i)v=t,c="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[c](a,_,o,p*l,x),r.update(_,a,x)}function h(p,_,x){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let c=0;c<x;c++)this.render(p[c]/l,_[c]);else{v.multiDrawElementsWEBGL(a,_,0,o,p,0,x);let c=0;for(let m=0;m<x;m++)c+=_[m];r.update(c,a,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function WE(t){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(r.calls++,s){case t.TRIANGLES:r.triangles+=o*(a/3);break;case t.LINES:r.lines+=o*(a/2);break;case t.LINE_STRIP:r.lines+=o*(a-1);break;case t.LINE_LOOP:r.lines+=o*a;break;case t.POINTS:r.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:i,update:n}}function jE(t,e){return t[0]-e[0]}function XE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function qE(t,e,r){const n={},i=new Float32Array(8),a=new WeakMap,s=new At,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,d,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=p!==void 0?p.length:0;let x=a.get(d);if(x===void 0||x.count!==_){let m=function(){se.dispose(),a.delete(d),d.removeEventListener("dispose",m)};x!==void 0&&x.texture.dispose();const g=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let y=0;g===!0&&(y=1),b===!0&&(y=2),R===!0&&(y=3);let E=d.attributes.position.count*y,G=1;E>e.maxTextureSize&&(G=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const X=new Float32Array(E*G*4*_),se=new hv(X,E,G,_);se.type=Ln,se.needsUpdate=!0;const N=y*4;for(let V=0;V<_;V++){const q=A[V],$=w[V],D=P[V],I=E*G*4*V;for(let j=0;j<q.count;j++){const Y=j*N;g===!0&&(s.fromBufferAttribute(q,j),X[I+Y+0]=s.x,X[I+Y+1]=s.y,X[I+Y+2]=s.z,X[I+Y+3]=0),b===!0&&(s.fromBufferAttribute($,j),X[I+Y+4]=s.x,X[I+Y+5]=s.y,X[I+Y+6]=s.z,X[I+Y+7]=0),R===!0&&(s.fromBufferAttribute(D,j),X[I+Y+8]=s.x,X[I+Y+9]=s.y,X[I+Y+10]=s.z,X[I+Y+11]=D.itemSize===4?s.w:1)}}x={count:_,texture:se,size:new We(E,G)},a.set(d,x),d.addEventListener("dispose",m)}let v=0;for(let m=0;m<h.length;m++)v+=h[m];const c=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",c),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",x.texture,r),f.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=h===void 0?0:h.length;let _=n[d.id];if(_===void 0||_.length!==p){_=[];for(let g=0;g<p;g++)_[g]=[g,0];n[d.id]=_}for(let g=0;g<p;g++){const b=_[g];b[0]=g,b[1]=h[g]}_.sort(XE);for(let g=0;g<8;g++)g<p&&_[g][1]?(o[g][0]=_[g][0],o[g][1]=_[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(jE);const x=d.morphAttributes.position,v=d.morphAttributes.normal;let c=0;for(let g=0;g<8;g++){const b=o[g],R=b[0],A=b[1];R!==Number.MAX_SAFE_INTEGER&&A?(x&&d.getAttribute("morphTarget"+g)!==x[R]&&d.setAttribute("morphTarget"+g,x[R]),v&&d.getAttribute("morphNormal"+g)!==v[R]&&d.setAttribute("morphNormal"+g,v[R]),i[g]=A,c+=A):(x&&d.hasAttribute("morphTarget"+g)===!0&&d.deleteAttribute("morphTarget"+g),v&&d.hasAttribute("morphNormal"+g)===!0&&d.deleteAttribute("morphNormal"+g),i[g]=0)}const m=d.morphTargetsRelative?1:1-c;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",i)}}return{update:l}}function YE(t,e,r,n){let i=new WeakMap;function a(l){const u=n.render.frame,d=l.geometry,f=e.get(l,d);if(i.get(f)!==u&&(e.update(f),i.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==u&&(r.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==u&&(h.update(),i.set(h,u))}return f}function s(){i=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),r.remove(u.instanceMatrix),u.instanceColor!==null&&r.remove(u.instanceColor)}return{update:a,dispose:s}}class bv extends cr{constructor(e,r,n,i,a,s,o,l,u,d){if(d=d!==void 0?d:fi,d!==fi&&d!==_a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===fi&&(n=Rn),n===void 0&&d===_a&&(n=hi),super(null,i,a,s,o,l,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}const Ev=new cr,Mv=new bv(1,1);Mv.compareFunction=lv;const Tv=new hv,wv=new Py,Av=new xv,hp=[],fp=[],pp=new Float32Array(16),mp=new Float32Array(9),gp=new Float32Array(4);function Ma(t,e,r){const n=t[0];if(n<=0||n>0)return t;const i=e*r;let a=hp[i];if(a===void 0&&(a=new Float32Array(i),hp[i]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=r,t[s].toArray(a,o)}return a}function bt(t,e){if(t.length!==e.length)return!1;for(let r=0,n=t.length;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Et(t,e){for(let r=0,n=e.length;r<n;r++)t[r]=e[r]}function wl(t,e){let r=fp[e];r===void 0&&(r=new Int32Array(e),fp[e]=r);for(let n=0;n!==e;++n)r[n]=t.allocateTextureUnit();return r}function $E(t,e){const r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function KE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(bt(r,e))return;t.uniform2fv(this.addr,e),Et(r,e)}}function ZE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(bt(r,e))return;t.uniform3fv(this.addr,e),Et(r,e)}}function QE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(bt(r,e))return;t.uniform4fv(this.addr,e),Et(r,e)}}function JE(t,e){const r=this.cache,n=e.elements;if(n===void 0){if(bt(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(r,e)}else{if(bt(r,n))return;gp.set(n),t.uniformMatrix2fv(this.addr,!1,gp),Et(r,n)}}function eM(t,e){const r=this.cache,n=e.elements;if(n===void 0){if(bt(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(r,e)}else{if(bt(r,n))return;mp.set(n),t.uniformMatrix3fv(this.addr,!1,mp),Et(r,n)}}function tM(t,e){const r=this.cache,n=e.elements;if(n===void 0){if(bt(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(r,e)}else{if(bt(r,n))return;pp.set(n),t.uniformMatrix4fv(this.addr,!1,pp),Et(r,n)}}function rM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function nM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(bt(r,e))return;t.uniform2iv(this.addr,e),Et(r,e)}}function iM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(bt(r,e))return;t.uniform3iv(this.addr,e),Et(r,e)}}function aM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(bt(r,e))return;t.uniform4iv(this.addr,e),Et(r,e)}}function sM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1ui(this.addr,e),r[0]=e)}function oM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(bt(r,e))return;t.uniform2uiv(this.addr,e),Et(r,e)}}function lM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(bt(r,e))return;t.uniform3uiv(this.addr,e),Et(r,e)}}function uM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(bt(r,e))return;t.uniform4uiv(this.addr,e),Et(r,e)}}function cM(t,e,r){const n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);const a=this.type===t.SAMPLER_2D_SHADOW?Mv:Ev;r.setTexture2D(e||a,i)}function dM(t,e,r){const n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),r.setTexture3D(e||wv,i)}function hM(t,e,r){const n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),r.setTextureCube(e||Av,i)}function fM(t,e,r){const n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),r.setTexture2DArray(e||Tv,i)}function pM(t){switch(t){case 5126:return $E;case 35664:return KE;case 35665:return ZE;case 35666:return QE;case 35674:return JE;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return rM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return aM;case 5125:return sM;case 36294:return oM;case 36295:return lM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return fM}}function mM(t,e){t.uniform1fv(this.addr,e)}function gM(t,e){const r=Ma(e,this.size,2);t.uniform2fv(this.addr,r)}function vM(t,e){const r=Ma(e,this.size,3);t.uniform3fv(this.addr,r)}function _M(t,e){const r=Ma(e,this.size,4);t.uniform4fv(this.addr,r)}function xM(t,e){const r=Ma(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function yM(t,e){const r=Ma(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function SM(t,e){const r=Ma(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function bM(t,e){t.uniform1iv(this.addr,e)}function EM(t,e){t.uniform2iv(this.addr,e)}function MM(t,e){t.uniform3iv(this.addr,e)}function TM(t,e){t.uniform4iv(this.addr,e)}function wM(t,e){t.uniform1uiv(this.addr,e)}function AM(t,e){t.uniform2uiv(this.addr,e)}function CM(t,e){t.uniform3uiv(this.addr,e)}function RM(t,e){t.uniform4uiv(this.addr,e)}function LM(t,e,r){const n=this.cache,i=e.length,a=wl(r,i);bt(n,a)||(t.uniform1iv(this.addr,a),Et(n,a));for(let s=0;s!==i;++s)r.setTexture2D(e[s]||Ev,a[s])}function PM(t,e,r){const n=this.cache,i=e.length,a=wl(r,i);bt(n,a)||(t.uniform1iv(this.addr,a),Et(n,a));for(let s=0;s!==i;++s)r.setTexture3D(e[s]||wv,a[s])}function NM(t,e,r){const n=this.cache,i=e.length,a=wl(r,i);bt(n,a)||(t.uniform1iv(this.addr,a),Et(n,a));for(let s=0;s!==i;++s)r.setTextureCube(e[s]||Av,a[s])}function DM(t,e,r){const n=this.cache,i=e.length,a=wl(r,i);bt(n,a)||(t.uniform1iv(this.addr,a),Et(n,a));for(let s=0;s!==i;++s)r.setTexture2DArray(e[s]||Tv,a[s])}function UM(t){switch(t){case 5126:return mM;case 35664:return gM;case 35665:return vM;case 35666:return _M;case 35674:return xM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return bM;case 35667:case 35671:return EM;case 35668:case 35672:return MM;case 35669:case 35673:return TM;case 5125:return wM;case 36294:return AM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return DM}}class IM{constructor(e,r,n){this.id=e,this.addr=n,this.cache=[],this.type=r.type,this.setValue=pM(r.type)}}class OM{constructor(e,r,n){this.id=e,this.addr=n,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=UM(r.type)}}class kM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,n){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const o=i[a];o.setValue(e,r[o.id],n)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function vp(t,e){t.seq.push(e),t.map[e.id]=e}function FM(t,e,r){const n=t.name,i=n.length;for(Du.lastIndex=0;;){const a=Du.exec(n),s=Du.lastIndex;let o=a[1];const l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===i){vp(r,u===void 0?new IM(o,t,e):new OM(o,t,e));break}else{let d=r.map[o];d===void 0&&(d=new kM(o),vp(r,d)),r=d}}}class Lo{constructor(e,r){this.seq=[],this.map={};const n=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(r,i),s=e.getUniformLocation(r,a.name);FM(a,s,this)}}setValue(e,r,n,i){const a=this.map[r];a!==void 0&&a.setValue(e,n,i)}setOptional(e,r,n){const i=r[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,r,n,i){for(let a=0,s=r.length;a!==s;++a){const o=r[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,r){const n=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in r&&n.push(s)}return n}}function _p(t,e,r){const n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),n}const zM=37297;let BM=0;function HM(t,e){const r=t.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,r.length);for(let s=i;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${r[s]}`)}return n.join(`
`)}function GM(t){const e=Qe.getPrimaries(Qe.workingColorSpace),r=Qe.getPrimaries(t);let n;switch(e===r?n="":e===il&&r===nl?n="LinearDisplayP3ToLinearSRGB":e===nl&&r===il&&(n="LinearSRGBToLinearDisplayP3"),t){case mn:case Ml:return[n,"LinearTransferOETF"];case Lt:case Od:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[n,"LinearTransferOETF"]}}function xp(t,e,r){const n=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return r.toUpperCase()+`

`+i+`

`+HM(t.getShaderSource(e),s)}else return i}function VM(t,e){const r=GM(e);return`vec4 ${t}( vec4 value ) { return ${r[0]}( ${r[1]}( value ) ); }`}function WM(t,e){let r;switch(e){case ey:r="Linear";break;case ty:r="Reinhard";break;case ry:r="OptimizedCineon";break;case ny:r="ACESFilmic";break;case ay:r="AgX";break;case iy:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}function jM(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ea).join(`
`)}function XM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ea).join(`
`)}function qM(t){const e=[];for(const r in t){const n=t[r];n!==!1&&e.push("#define "+r+" "+n)}return e.join(`
`)}function YM(t,e){const r={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=t.getActiveAttrib(e,i),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),r[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return r}function ea(t){return t!==""}function yp(t,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $M=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(t){return t.replace($M,ZM)}const KM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ZM(t,e){let r=De[e];if(r===void 0){const n=KM.get(e);if(n!==void 0)r=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zc(r)}const QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(t){return t.replace(QM,JM)}function JM(t,e,r,n){let i="";for(let a=parseInt(e);a<parseInt(r);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Ep(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Kg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Cx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function t1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ga:case va:e="ENVMAP_TYPE_CUBE";break;case El:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case va:e="ENVMAP_MODE_REFRACTION";break}return e}function n1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Zg:e="ENVMAP_BLENDING_MULTIPLY";break;case Qx:e="ENVMAP_BLENDING_MIX";break;case Jx:e="ENVMAP_BLENDING_ADD";break}return e}function i1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:n,maxMip:r}}function a1(t,e,r,n){const i=t.getContext(),a=r.defines;let s=r.vertexShader,o=r.fragmentShader;const l=e1(r),u=t1(r),d=r1(r),f=n1(r),h=i1(r),p=r.isWebGL2?"":jM(r),_=XM(r),x=qM(a),v=i.createProgram();let c,m,g=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(c=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(ea).join(`
`),c.length>0&&(c+=`
`),m=[p,"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(ea).join(`
`),m.length>0&&(m+=`
`)):(c=[Ep(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+d:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors&&r.isWebGL2?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),m=[p,Ep(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+u:"",r.envMap?"#define "+d:"",r.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Bn?"#define TONE_MAPPING":"",r.toneMapping!==Bn?De.tonemapping_pars_fragment:"",r.toneMapping!==Bn?WM("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,VM("linearToOutputTexel",r.outputColorSpace),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(ea).join(`
`)),s=zc(s),s=yp(s,r),s=Sp(s,r),o=zc(o),o=yp(o,r),o=Sp(o,r),s=bp(s),o=bp(o),r.isWebGL2&&r.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,c=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,m=["precision mediump sampler2DArray;","#define varying in",r.glslVersion===Hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===Hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=g+c+s,R=g+m+o,A=_p(i,i.VERTEX_SHADER,b),w=_p(i,i.FRAGMENT_SHADER,R);i.attachShader(v,A),i.attachShader(v,w),r.index0AttributeName!==void 0?i.bindAttribLocation(v,0,r.index0AttributeName):r.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(X){if(t.debug.checkShaderErrors){const se=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(w).trim();let q=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,v,A,w);else{const D=xp(i,A,"vertex"),I=xp(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+D+`
`+I)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(N===""||V==="")&&($=!1);$&&(X.diagnostics={runnable:q,programLog:se,vertexShader:{log:N,prefix:c},fragmentShader:{log:V,prefix:m}})}i.deleteShader(A),i.deleteShader(w),y=new Lo(i,v),E=YM(i,v)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let G=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(v,zM)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=BM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let s1=0;class o1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(r),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const n of r)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let n=r.get(e);return n===void 0&&(n=new Set,r.set(e,n)),n}_getShaderStage(e){const r=this.shaderCache;let n=r.get(e);return n===void 0&&(n=new l1(e),r.set(e,n)),n}}class l1{constructor(e){this.id=s1++,this.code=e,this.usedTimes=0}}function u1(t,e,r,n,i,a,s){const o=new fv,l=new o1,u=[],d=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function v(y,E,G,X,se){const N=X.fog,V=se.geometry,q=y.isMeshStandardMaterial?X.environment:null,$=(y.isMeshStandardMaterial?r:e).get(y.envMap||q),D=$&&$.mapping===El?$.image.height:null,I=_[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const j=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Y=j!==void 0?j.length:0;let re=0;V.morphAttributes.position!==void 0&&(re=1),V.morphAttributes.normal!==void 0&&(re=2),V.morphAttributes.color!==void 0&&(re=3);let H,K,de,he;if(I){const mt=Vr[I];H=mt.vertexShader,K=mt.fragmentShader}else H=y.vertexShader,K=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const me=t.getRenderTarget(),Le=se.isInstancedMesh===!0,Pe=se.isBatchedMesh===!0,Te=!!y.map,je=!!y.matcap,z=!!$,Vt=!!y.aoMap,Se=!!y.lightMap,Ce=!!y.bumpMap,ge=!!y.normalMap,ot=!!y.displacementMap,Ue=!!y.emissiveMap,T=!!y.metalnessMap,S=!!y.roughnessMap,F=y.anisotropy>0,te=y.clearcoat>0,J=y.iridescence>0,ee=y.sheen>0,ve=y.transmission>0,le=F&&!!y.anisotropyMap,fe=te&&!!y.clearcoatMap,Ee=te&&!!y.clearcoatNormalMap,Ie=te&&!!y.clearcoatRoughnessMap,Q=J&&!!y.iridescenceMap,Ze=J&&!!y.iridescenceThicknessMap,He=ee&&!!y.sheenColorMap,Ae=ee&&!!y.sheenRoughnessMap,ye=!!y.specularMap,pe=!!y.specularColorMap,Ne=!!y.specularIntensityMap,$e=ve&&!!y.transmissionMap,dt=ve&&!!y.thicknessMap,Fe=!!y.gradientMap,ne=!!y.alphaMap,L=y.alphaTest>0,ie=!!y.alphaHash,ue=!!y.extensions,Re=!!V.attributes.uv1,be=!!V.attributes.uv2,Je=!!V.attributes.uv3;let et=Bn;return y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:d,shaderID:I,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:K,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Pe,instancing:Le,instancingColor:Le&&se.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:mn,map:Te,matcap:je,envMap:z,envMapMode:z&&$.mapping,envMapCubeUVHeight:D,aoMap:Vt,lightMap:Se,bumpMap:Ce,normalMap:ge,displacementMap:h&&ot,emissiveMap:Ue,normalMapObjectSpace:ge&&y.normalMapType===vy,normalMapTangentSpace:ge&&y.normalMapType===ov,metalnessMap:T,roughnessMap:S,anisotropy:F,anisotropyMap:le,clearcoat:te,clearcoatMap:fe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ie,iridescence:J,iridescenceMap:Q,iridescenceThicknessMap:Ze,sheen:ee,sheenColorMap:He,sheenRoughnessMap:Ae,specularMap:ye,specularColorMap:pe,specularIntensityMap:Ne,transmission:ve,transmissionMap:$e,thicknessMap:dt,gradientMap:Fe,opaque:y.transparent===!1&&y.blending===oa,alphaMap:ne,alphaTest:L,alphaHash:ie,combine:y.combine,mapUv:Te&&x(y.map.channel),aoMapUv:Vt&&x(y.aoMap.channel),lightMapUv:Se&&x(y.lightMap.channel),bumpMapUv:Ce&&x(y.bumpMap.channel),normalMapUv:ge&&x(y.normalMap.channel),displacementMapUv:ot&&x(y.displacementMap.channel),emissiveMapUv:Ue&&x(y.emissiveMap.channel),metalnessMapUv:T&&x(y.metalnessMap.channel),roughnessMapUv:S&&x(y.roughnessMap.channel),anisotropyMapUv:le&&x(y.anisotropyMap.channel),clearcoatMapUv:fe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(y.sheenRoughnessMap.channel),specularMapUv:ye&&x(y.specularMap.channel),specularColorMapUv:pe&&x(y.specularColorMap.channel),specularIntensityMapUv:Ne&&x(y.specularIntensityMap.channel),transmissionMapUv:$e&&x(y.transmissionMap.channel),thicknessMapUv:dt&&x(y.thicknessMap.channel),alphaMapUv:ne&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:be,vertexUv3s:Je,pointsUvs:se.isPoints===!0&&!!V.attributes.uv&&(Te||ne),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:se.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===ir,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ue&&y.extensions.derivatives===!0,extensionFragDepth:ue&&y.extensions.fragDepth===!0,extensionDrawBuffers:ue&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function c(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)E.push(G),E.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(m(E,y),g(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function m(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function g(y,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function b(y){const E=_[y.type];let G;if(E){const X=Vr[E];G=jy.clone(X.uniforms)}else G=y.uniforms;return G}function R(y,E){let G;for(let X=0,se=u.length;X<se;X++){const N=u[X];if(N.cacheKey===E){G=N,++G.usedTimes;break}}return G===void 0&&(G=new a1(t,E,y,a),u.push(G)),G}function A(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function P(){l.dispose()}return{getParameters:v,getProgramCacheKey:c,getUniforms:b,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:P}}function c1(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function r(a){t.delete(a)}function n(a,s,o){t.get(a)[s]=o}function i(){t=new WeakMap}return{get:e,remove:r,update:n,dispose:i}}function d1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tp(){const t=[];let e=0;const r=[],n=[],i=[];function a(){e=0,r.length=0,n.length=0,i.length=0}function s(f,h,p,_,x,v){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:v},t[e]=c):(c.id=f.id,c.object=f,c.geometry=h,c.material=p,c.groupOrder=_,c.renderOrder=f.renderOrder,c.z=x,c.group=v),e++,c}function o(f,h,p,_,x,v){const c=s(f,h,p,_,x,v);p.transmission>0?n.push(c):p.transparent===!0?i.push(c):r.push(c)}function l(f,h,p,_,x,v){const c=s(f,h,p,_,x,v);p.transmission>0?n.unshift(c):p.transparent===!0?i.unshift(c):r.unshift(c)}function u(f,h){r.length>1&&r.sort(f||d1),n.length>1&&n.sort(h||Mp),i.length>1&&i.sort(h||Mp)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:r,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:d,sort:u}}function h1(){let t=new WeakMap;function e(n,i){const a=t.get(n);let s;return a===void 0?(s=new Tp,t.set(n,[s])):i>=a.length?(s=new Tp,a.push(s)):s=a[i],s}function r(){t=new WeakMap}return{get:e,dispose:r}}function f1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new O,color:new Ye};break;case"SpotLight":r={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":r={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":r={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=r,r}}}function p1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=r,r}}}let m1=0;function g1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function v1(t,e){const r=new f1,n=p1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new O);const a=new O,s=new St,o=new St;function l(d,f){let h=0,p=0,_=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let x=0,v=0,c=0,m=0,g=0,b=0,R=0,A=0,w=0,P=0,y=0;d.sort(g1);const E=f===!0?Math.PI:1;for(let X=0,se=d.length;X<se;X++){const N=d[X],V=N.color,q=N.intensity,$=N.distance,D=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=V.r*q*E,p+=V.g*q*E,_+=V.b*q*E;else if(N.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(N.sh.coefficients[I],q);y++}else if(N.isDirectionalLight){const I=r.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const j=N.shadow,Y=n.get(N);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.directionalShadow[x]=Y,i.directionalShadowMap[x]=D,i.directionalShadowMatrix[x]=N.shadow.matrix,b++}i.directional[x]=I,x++}else if(N.isSpotLight){const I=r.get(N);I.position.setFromMatrixPosition(N.matrixWorld),I.color.copy(V).multiplyScalar(q*E),I.distance=$,I.coneCos=Math.cos(N.angle),I.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),I.decay=N.decay,i.spot[c]=I;const j=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,j.updateMatrices(N),N.castShadow&&P++),i.spotLightMatrix[c]=j.matrix,N.castShadow){const Y=n.get(N);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.spotShadow[c]=Y,i.spotShadowMap[c]=D,A++}c++}else if(N.isRectAreaLight){const I=r.get(N);I.color.copy(V).multiplyScalar(q),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=I,m++}else if(N.isPointLight){const I=r.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity*E),I.distance=N.distance,I.decay=N.decay,N.castShadow){const j=N.shadow,Y=n.get(N);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,i.pointShadow[v]=Y,i.pointShadowMap[v]=D,i.pointShadowMatrix[v]=N.shadow.matrix,R++}i.point[v]=I,v++}else if(N.isHemisphereLight){const I=r.get(N);I.skyColor.copy(N.color).multiplyScalar(q*E),I.groundColor.copy(N.groundColor).multiplyScalar(q*E),i.hemi[g]=I,g++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=_;const G=i.hash;(G.directionalLength!==x||G.pointLength!==v||G.spotLength!==c||G.rectAreaLength!==m||G.hemiLength!==g||G.numDirectionalShadows!==b||G.numPointShadows!==R||G.numSpotShadows!==A||G.numSpotMaps!==w||G.numLightProbes!==y)&&(i.directional.length=x,i.spot.length=c,i.rectArea.length=m,i.point.length=v,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=y,G.directionalLength=x,G.pointLength=v,G.spotLength=c,G.rectAreaLength=m,G.hemiLength=g,G.numDirectionalShadows=b,G.numPointShadows=R,G.numSpotShadows=A,G.numSpotMaps=w,G.numLightProbes=y,i.version=m1++)}function u(d,f){let h=0,p=0,_=0,x=0,v=0;const c=f.matrixWorldInverse;for(let m=0,g=d.length;m<g;m++){const b=d[m];if(b.isDirectionalLight){const R=i.directional[h];R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(c),h++}else if(b.isSpotLight){const R=i.spot[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(c),R.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(c),_++}else if(b.isRectAreaLight){const R=i.rectArea[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(c),o.identity(),s.copy(b.matrixWorld),s.premultiply(c),o.extractRotation(s),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){const R=i.point[p];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(c),p++}else if(b.isHemisphereLight){const R=i.hemi[v];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(c),v++}}}return{setup:l,setupView:u,state:i}}function wp(t,e){const r=new v1(t,e),n=[],i=[];function a(){n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function l(d){r.setup(n,d)}function u(d){r.setupView(n,d)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:r},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function _1(t,e){let r=new WeakMap;function n(a,s=0){const o=r.get(a);let l;return o===void 0?(l=new wp(t,e),r.set(a,[l])):s>=o.length?(l=new wp(t,e),o.push(l)):l=o[s],l}function i(){r=new WeakMap}return{get:n,dispose:i}}class x1 extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=my,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y1 extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const S1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E1(t,e,r){let n=new zd;const i=new We,a=new We,s=new At,o=new x1({depthPacking:gy}),l=new y1,u={},d=r.maxTextureSize,f={[Wn]:ir,[ir]:Wn,[sn]:sn},h=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:S1,fragmentShader:b1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Yn;_.setAttribute("position",new Yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new jr(_,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kg;let c=this.type;this.render=function(A,w,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;const y=t.getRenderTarget(),E=t.getActiveCubeFace(),G=t.getActiveMipmapLevel(),X=t.state;X.setBlending(zn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const se=c!==rn&&this.type===rn,N=c===rn&&this.type!==rn;for(let V=0,q=A.length;V<q;V++){const $=A[V],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const I=D.getFrameExtents();if(i.multiply(I),a.copy(D.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(a.x=Math.floor(d/I.x),i.x=a.x*I.x,D.mapSize.x=a.x),i.y>d&&(a.y=Math.floor(d/I.y),i.y=a.y*I.y,D.mapSize.y=a.y)),D.map===null||se===!0||N===!0){const Y=this.type!==rn?{minFilter:qt,magFilter:qt}:{};D.map!==null&&D.map.dispose(),D.map=new yi(i.x,i.y,Y),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const j=D.getViewportCount();for(let Y=0;Y<j;Y++){const re=D.getViewport(Y);s.set(a.x*re.x,a.y*re.y,a.x*re.z,a.y*re.w),X.viewport(s),D.updateMatrices($,Y),n=D.getFrustum(),b(w,P,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===rn&&m(D,P),D.needsUpdate=!1}c=this.type,v.needsUpdate=!1,t.setRenderTarget(y,E,G)};function m(A,w){const P=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yi(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,P,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,P,p,x,null)}function g(A,w,P,y){let E=null;const G=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)E=G;else if(E=P.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=E.uuid,se=w.uuid;let N=u[X];N===void 0&&(N={},u[X]=N);let V=N[se];V===void 0&&(V=E.clone(),N[se]=V,w.addEventListener("dispose",R)),E=V}if(E.visible=w.visible,E.wireframe=w.wireframe,y===rn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const X=t.properties.get(E);X.light=P}return E}function b(A,w,P,y,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const X=e.update(A),se=A.material;if(Array.isArray(se)){const N=X.groups;for(let V=0,q=N.length;V<q;V++){const $=N[V],D=se[$.materialIndex];if(D&&D.visible){const I=g(A,D,y,E);A.onBeforeShadow(t,A,w,P,X,I,$),t.renderBufferDirect(P,null,X,I,A,$),A.onAfterShadow(t,A,w,P,X,I,$)}}}else if(se.visible){const N=g(A,se,y,E);A.onBeforeShadow(t,A,w,P,X,N,null),t.renderBufferDirect(P,null,X,N,A,null),A.onAfterShadow(t,A,w,P,X,N,null)}}const G=A.children;for(let X=0,se=G.length;X<se;X++)b(G[X],w,P,y,E)}function R(A){A.target.removeEventListener("dispose",R);for(const w in u){const P=u[w],y=A.target.uuid;y in P&&(P[y].dispose(),delete P[y])}}}function M1(t,e,r){const n=r.isWebGL2;function i(){let L=!1;const ie=new At;let ue=null;const Re=new At(0,0,0,0);return{setMask:function(be){ue!==be&&!L&&(t.colorMask(be,be,be,be),ue=be)},setLocked:function(be){L=be},setClear:function(be,Je,et,mt,pr){pr===!0&&(be*=mt,Je*=mt,et*=mt),ie.set(be,Je,et,mt),Re.equals(ie)===!1&&(t.clearColor(be,Je,et,mt),Re.copy(ie))},reset:function(){L=!1,ue=null,Re.set(-1,0,0,0)}}}function a(){let L=!1,ie=null,ue=null,Re=null;return{setTest:function(be){be?Pe(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(be){ie!==be&&!L&&(t.depthMask(be),ie=be)},setFunc:function(be){if(ue!==be){switch(be){case jx:t.depthFunc(t.NEVER);break;case Xx:t.depthFunc(t.ALWAYS);break;case qx:t.depthFunc(t.LESS);break;case tl:t.depthFunc(t.LEQUAL);break;case Yx:t.depthFunc(t.EQUAL);break;case $x:t.depthFunc(t.GEQUAL);break;case Kx:t.depthFunc(t.GREATER);break;case Zx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=be}},setLocked:function(be){L=be},setClear:function(be){Re!==be&&(t.clearDepth(be),Re=be)},reset:function(){L=!1,ie=null,ue=null,Re=null}}}function s(){let L=!1,ie=null,ue=null,Re=null,be=null,Je=null,et=null,mt=null,pr=null;return{setTest:function(tt){L||(tt?Pe(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(tt){ie!==tt&&!L&&(t.stencilMask(tt),ie=tt)},setFunc:function(tt,Wt,Br){(ue!==tt||Re!==Wt||be!==Br)&&(t.stencilFunc(tt,Wt,Br),ue=tt,Re=Wt,be=Br)},setOp:function(tt,Wt,Br){(Je!==tt||et!==Wt||mt!==Br)&&(t.stencilOp(tt,Wt,Br),Je=tt,et=Wt,mt=Br)},setLocked:function(tt){L=tt},setClear:function(tt){pr!==tt&&(t.clearStencil(tt),pr=tt)},reset:function(){L=!1,ie=null,ue=null,Re=null,be=null,Je=null,et=null,mt=null,pr=null}}}const o=new i,l=new a,u=new s,d=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,x=[],v=null,c=!1,m=null,g=null,b=null,R=null,A=null,w=null,P=null,y=new Ye(0,0,0),E=0,G=!1,X=null,se=null,N=null,V=null,q=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,I=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(j)[1]),D=I>=1):j.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),D=I>=2);let Y=null,re={};const H=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),de=new At().fromArray(H),he=new At().fromArray(K);function me(L,ie,ue,Re){const be=new Uint8Array(4),Je=t.createTexture();t.bindTexture(L,Je),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<ue;et++)n&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ie,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(ie+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return Je}const Le={};Le[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Le[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Le[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Pe(t.DEPTH_TEST),l.setFunc(tl),Ue(!1),T(of),Pe(t.CULL_FACE),ge(zn);function Pe(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Te(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function je(L,ie){return p[L]!==ie?(t.bindFramebuffer(L,ie),p[L]=ie,n&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ie),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ie)),!0):!1}function z(L,ie){let ue=x,Re=!1;if(L)if(ue=_.get(ie),ue===void 0&&(ue=[],_.set(ie,ue)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(ue.length!==be.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,et=be.length;Je<et;Je++)ue[Je]=t.COLOR_ATTACHMENT0+Je;ue.length=be.length,Re=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Re=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Re=!0);Re&&(r.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Vt(L){return v!==L?(t.useProgram(L),v=L,!0):!1}const Se={[ai]:t.FUNC_ADD,[Lx]:t.FUNC_SUBTRACT,[Px]:t.FUNC_REVERSE_SUBTRACT};if(n)Se[df]=t.MIN,Se[hf]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Se[df]=L.MIN_EXT,Se[hf]=L.MAX_EXT)}const Ce={[Nx]:t.ZERO,[Dx]:t.ONE,[Ux]:t.SRC_COLOR,[Lc]:t.SRC_ALPHA,[Bx]:t.SRC_ALPHA_SATURATE,[Fx]:t.DST_COLOR,[Ox]:t.DST_ALPHA,[Ix]:t.ONE_MINUS_SRC_COLOR,[Pc]:t.ONE_MINUS_SRC_ALPHA,[zx]:t.ONE_MINUS_DST_COLOR,[kx]:t.ONE_MINUS_DST_ALPHA,[Hx]:t.CONSTANT_COLOR,[Gx]:t.ONE_MINUS_CONSTANT_COLOR,[Vx]:t.CONSTANT_ALPHA,[Wx]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(L,ie,ue,Re,be,Je,et,mt,pr,tt){if(L===zn){c===!0&&(Te(t.BLEND),c=!1);return}if(c===!1&&(Pe(t.BLEND),c=!0),L!==Rx){if(L!==m||tt!==G){if((g!==ai||A!==ai)&&(t.blendEquation(t.FUNC_ADD),g=ai,A=ai),tt)switch(L){case oa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lf:t.blendFunc(t.ONE,t.ONE);break;case uf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case cf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case oa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case uf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case cf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,R=null,w=null,P=null,y.set(0,0,0),E=0,m=L,G=tt}return}be=be||ie,Je=Je||ue,et=et||Re,(ie!==g||be!==A)&&(t.blendEquationSeparate(Se[ie],Se[be]),g=ie,A=be),(ue!==b||Re!==R||Je!==w||et!==P)&&(t.blendFuncSeparate(Ce[ue],Ce[Re],Ce[Je],Ce[et]),b=ue,R=Re,w=Je,P=et),(mt.equals(y)===!1||pr!==E)&&(t.blendColor(mt.r,mt.g,mt.b,pr),y.copy(mt),E=pr),m=L,G=!1}function ot(L,ie){L.side===sn?Te(t.CULL_FACE):Pe(t.CULL_FACE);let ue=L.side===ir;ie&&(ue=!ue),Ue(ue),L.blending===oa&&L.transparent===!1?ge(zn):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Re=L.stencilWrite;u.setTest(Re),Re&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(L){X!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),X=L)}function T(L){L!==wx?(Pe(t.CULL_FACE),L!==se&&(L===of?t.cullFace(t.BACK):L===Ax?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),se=L}function S(L){L!==N&&(D&&t.lineWidth(L),N=L)}function F(L,ie,ue){L?(Pe(t.POLYGON_OFFSET_FILL),(V!==ie||q!==ue)&&(t.polygonOffset(ie,ue),V=ie,q=ue)):Te(t.POLYGON_OFFSET_FILL)}function te(L){L?Pe(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function J(L){L===void 0&&(L=t.TEXTURE0+$-1),Y!==L&&(t.activeTexture(L),Y=L)}function ee(L,ie,ue){ue===void 0&&(Y===null?ue=t.TEXTURE0+$-1:ue=Y);let Re=re[ue];Re===void 0&&(Re={type:void 0,texture:void 0},re[ue]=Re),(Re.type!==L||Re.texture!==ie)&&(Y!==ue&&(t.activeTexture(ue),Y=ue),t.bindTexture(L,ie||Le[L]),Re.type=L,Re.texture=ie)}function ve(){const L=re[Y];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(L){de.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),de.copy(L))}function $e(L){he.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),he.copy(L))}function dt(L,ie){let ue=f.get(ie);ue===void 0&&(ue=new WeakMap,f.set(ie,ue));let Re=ue.get(L);Re===void 0&&(Re=t.getUniformBlockIndex(ie,L.name),ue.set(L,Re))}function Fe(L,ie){const ue=f.get(ie).get(L);d.get(ie)!==ue&&(t.uniformBlockBinding(ie,ue,L.__bindingPointIndex),d.set(ie,ue))}function ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),n===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Y=null,re={},p={},_=new WeakMap,x=[],v=null,c=!1,m=null,g=null,b=null,R=null,A=null,w=null,P=null,y=new Ye(0,0,0),E=0,G=!1,X=null,se=null,N=null,V=null,q=null,de.set(0,0,t.canvas.width,t.canvas.height),he.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Pe,disable:Te,bindFramebuffer:je,drawBuffers:z,useProgram:Vt,setBlending:ge,setMaterial:ot,setFlipSided:Ue,setCullFace:T,setLineWidth:S,setPolygonOffset:F,setScissorTest:te,activeTexture:J,bindTexture:ee,unbindTexture:ve,compressedTexImage2D:le,compressedTexImage3D:fe,texImage2D:ye,texImage3D:pe,updateUBOMapping:dt,uniformBlockBinding:Fe,texStorage2D:He,texStorage3D:Ae,texSubImage2D:Ee,texSubImage3D:Ie,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ze,scissor:Ne,viewport:$e,reset:ne}}function T1(t,e,r,n,i,a,s){const o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,S){return p?new OffscreenCanvas(T,S):sl("canvas")}function x(T,S,F,te){let J=1;if((T.width>te||T.height>te)&&(J=te/Math.max(T.width,T.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ee=S?Fc:Math.floor,ve=ee(J*T.width),le=ee(J*T.height);f===void 0&&(f=_(ve,le));const fe=F?_(ve,le):f;return fe.width=ve,fe.height=le,fe.getContext("2d").drawImage(T,0,0,ve,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ve+"x"+le+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return Gf(T.width)&&Gf(T.height)}function c(T){return o?!1:T.wrapS!==Ir||T.wrapT!==Ir||T.minFilter!==qt&&T.minFilter!==yr}function m(T,S){return T.generateMipmaps&&S&&T.minFilter!==qt&&T.minFilter!==yr}function g(T){t.generateMipmap(T)}function b(T,S,F,te,J=!1){if(o===!1)return S;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=S;if(S===t.RED&&(F===t.FLOAT&&(ee=t.R32F),F===t.HALF_FLOAT&&(ee=t.R16F),F===t.UNSIGNED_BYTE&&(ee=t.R8)),S===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(ee=t.R8UI),F===t.UNSIGNED_SHORT&&(ee=t.R16UI),F===t.UNSIGNED_INT&&(ee=t.R32UI),F===t.BYTE&&(ee=t.R8I),F===t.SHORT&&(ee=t.R16I),F===t.INT&&(ee=t.R32I)),S===t.RG&&(F===t.FLOAT&&(ee=t.RG32F),F===t.HALF_FLOAT&&(ee=t.RG16F),F===t.UNSIGNED_BYTE&&(ee=t.RG8)),S===t.RGBA){const ve=J?rl:Qe.getTransfer(te);F===t.FLOAT&&(ee=t.RGBA32F),F===t.HALF_FLOAT&&(ee=t.RGBA16F),F===t.UNSIGNED_BYTE&&(ee=ve===it?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function R(T,S,F){return m(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==qt&&T.minFilter!==yr?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function A(T){return T===qt||T===ff||T===iu?t.NEAREST:t.LINEAR}function w(T){const S=T.target;S.removeEventListener("dispose",w),y(S),S.isVideoTexture&&d.delete(S)}function P(T){const S=T.target;S.removeEventListener("dispose",P),G(S)}function y(T){const S=n.get(T);if(S.__webglInit===void 0)return;const F=T.source,te=h.get(F);if(te){const J=te[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys(te).length===0&&h.delete(F)}n.remove(T)}function E(T){const S=n.get(T);t.deleteTexture(S.__webglTexture);const F=T.source,te=h.get(F);delete te[S.__cacheKey],s.memory.textures--}function G(T){const S=T.texture,F=n.get(T),te=n.get(S);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),s.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let ee=0;ee<F.__webglFramebuffer[J].length;ee++)t.deleteFramebuffer(F.__webglFramebuffer[J][ee]);else t.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)t.deleteFramebuffer(F.__webglFramebuffer[J]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,ee=S.length;J<ee;J++){const ve=n.get(S[J]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),s.memory.textures--),n.remove(S[J])}n.remove(S),n.remove(T)}let X=0;function se(){X=0}function N(){const T=X;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),X+=1,T}function V(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function q(T,S){const F=n.get(T);if(T.isVideoTexture&&ot(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(F,T,S);return}}r.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+S)}function $(T,S){const F=n.get(T);if(T.version>0&&F.__version!==T.version){de(F,T,S);return}r.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+S)}function D(T,S){const F=n.get(T);if(T.version>0&&F.__version!==T.version){de(F,T,S);return}r.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+S)}function I(T,S){const F=n.get(T);if(T.version>0&&F.__version!==T.version){he(F,T,S);return}r.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+S)}const j={[Uc]:t.REPEAT,[Ir]:t.CLAMP_TO_EDGE,[Ic]:t.MIRRORED_REPEAT},Y={[qt]:t.NEAREST,[ff]:t.NEAREST_MIPMAP_NEAREST,[iu]:t.NEAREST_MIPMAP_LINEAR,[yr]:t.LINEAR,[sy]:t.LINEAR_MIPMAP_NEAREST,[vs]:t.LINEAR_MIPMAP_LINEAR},re={[_y]:t.NEVER,[My]:t.ALWAYS,[xy]:t.LESS,[lv]:t.LEQUAL,[yy]:t.EQUAL,[Ey]:t.GEQUAL,[Sy]:t.GREATER,[by]:t.NOTEQUAL};function H(T,S,F){if(F?(t.texParameteri(T,t.TEXTURE_WRAP_S,j[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,j[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,j[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Y[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Y[S.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Ir||S.wrapT!==Ir)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,A(S.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==qt&&S.minFilter!==yr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===qt||S.minFilter!==iu&&S.minFilter!==vs||S.type===Ln&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===_s&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(t.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function K(T,S){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));const te=S.source;let J=h.get(te);J===void 0&&(J={},h.set(te,J));const ee=V(S);if(ee!==T.__cacheKey){J[ee]===void 0&&(J[ee]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,F=!0),J[ee].usedTimes++;const ve=J[T.__cacheKey];ve!==void 0&&(J[T.__cacheKey].usedTimes--,ve.usedTimes===0&&E(S)),T.__cacheKey=ee,T.__webglTexture=J[ee].texture}return F}function de(T,S,F){let te=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=t.TEXTURE_3D);const J=K(T,S),ee=S.source;r.bindTexture(te,T.__webglTexture,t.TEXTURE0+F);const ve=n.get(ee);if(ee.version!==ve.__version||J===!0){r.activeTexture(t.TEXTURE0+F);const le=Qe.getPrimaries(Qe.workingColorSpace),fe=S.colorSpace===br?null:Qe.getPrimaries(S.colorSpace),Ee=S.colorSpace===br||le===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ie=c(S)&&v(S.image)===!1;let Q=x(S.image,Ie,!1,i.maxTextureSize);Q=Ue(S,Q);const Ze=v(Q)||o,He=a.convert(S.format,S.colorSpace);let Ae=a.convert(S.type),ye=b(S.internalFormat,He,Ae,S.colorSpace,S.isVideoTexture);H(te,S,Ze);let pe;const Ne=S.mipmaps,$e=o&&S.isVideoTexture!==!0&&ye!==av,dt=ve.__version===void 0||J===!0,Fe=R(S,Q,Ze);if(S.isDepthTexture)ye=t.DEPTH_COMPONENT,o?S.type===Ln?ye=t.DEPTH_COMPONENT32F:S.type===Rn?ye=t.DEPTH_COMPONENT24:S.type===hi?ye=t.DEPTH24_STENCIL8:ye=t.DEPTH_COMPONENT16:S.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===fi&&ye===t.DEPTH_COMPONENT&&S.type!==Id&&S.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Rn,Ae=a.convert(S.type)),S.format===_a&&ye===t.DEPTH_COMPONENT&&(ye=t.DEPTH_STENCIL,S.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=hi,Ae=a.convert(S.type))),dt&&($e?r.texStorage2D(t.TEXTURE_2D,1,ye,Q.width,Q.height):r.texImage2D(t.TEXTURE_2D,0,ye,Q.width,Q.height,0,He,Ae,null));else if(S.isDataTexture)if(Ne.length>0&&Ze){$e&&dt&&r.texStorage2D(t.TEXTURE_2D,Fe,ye,Ne[0].width,Ne[0].height);for(let ne=0,L=Ne.length;ne<L;ne++)pe=Ne[ne],$e?r.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,He,Ae,pe.data):r.texImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,He,Ae,pe.data);S.generateMipmaps=!1}else $e?(dt&&r.texStorage2D(t.TEXTURE_2D,Fe,ye,Q.width,Q.height),r.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,He,Ae,Q.data)):r.texImage2D(t.TEXTURE_2D,0,ye,Q.width,Q.height,0,He,Ae,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$e&&dt&&r.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,ye,Ne[0].width,Ne[0].height,Q.depth);for(let ne=0,L=Ne.length;ne<L;ne++)pe=Ne[ne],S.format!==Or?He!==null?$e?r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,Q.depth,He,pe.data,0,0):r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ye,pe.width,pe.height,Q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?r.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,Q.depth,He,Ae,pe.data):r.texImage3D(t.TEXTURE_2D_ARRAY,ne,ye,pe.width,pe.height,Q.depth,0,He,Ae,pe.data)}else{$e&&dt&&r.texStorage2D(t.TEXTURE_2D,Fe,ye,Ne[0].width,Ne[0].height);for(let ne=0,L=Ne.length;ne<L;ne++)pe=Ne[ne],S.format!==Or?He!==null?$e?r.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,He,pe.data):r.compressedTexImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?r.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,He,Ae,pe.data):r.texImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,He,Ae,pe.data)}else if(S.isDataArrayTexture)$e?(dt&&r.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,ye,Q.width,Q.height,Q.depth),r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,He,Ae,Q.data)):r.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,He,Ae,Q.data);else if(S.isData3DTexture)$e?(dt&&r.texStorage3D(t.TEXTURE_3D,Fe,ye,Q.width,Q.height,Q.depth),r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,He,Ae,Q.data)):r.texImage3D(t.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,He,Ae,Q.data);else if(S.isFramebufferTexture){if(dt)if($e)r.texStorage2D(t.TEXTURE_2D,Fe,ye,Q.width,Q.height);else{let ne=Q.width,L=Q.height;for(let ie=0;ie<Fe;ie++)r.texImage2D(t.TEXTURE_2D,ie,ye,ne,L,0,He,Ae,null),ne>>=1,L>>=1}}else if(Ne.length>0&&Ze){$e&&dt&&r.texStorage2D(t.TEXTURE_2D,Fe,ye,Ne[0].width,Ne[0].height);for(let ne=0,L=Ne.length;ne<L;ne++)pe=Ne[ne],$e?r.texSubImage2D(t.TEXTURE_2D,ne,0,0,He,Ae,pe):r.texImage2D(t.TEXTURE_2D,ne,ye,He,Ae,pe);S.generateMipmaps=!1}else $e?(dt&&r.texStorage2D(t.TEXTURE_2D,Fe,ye,Q.width,Q.height),r.texSubImage2D(t.TEXTURE_2D,0,0,0,He,Ae,Q)):r.texImage2D(t.TEXTURE_2D,0,ye,He,Ae,Q);m(S,Ze)&&g(te),ve.__version=ee.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function he(T,S,F){if(S.image.length!==6)return;const te=K(T,S),J=S.source;r.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+F);const ee=n.get(J);if(J.version!==ee.__version||te===!0){r.activeTexture(t.TEXTURE0+F);const ve=Qe.getPrimaries(Qe.workingColorSpace),le=S.colorSpace===br?null:Qe.getPrimaries(S.colorSpace),fe=S.colorSpace===br||ve===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ee=S.isCompressedTexture||S.image[0].isCompressedTexture,Ie=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let ne=0;ne<6;ne++)!Ee&&!Ie?Q[ne]=x(S.image[ne],!1,!0,i.maxCubemapSize):Q[ne]=Ie?S.image[ne].image:S.image[ne],Q[ne]=Ue(S,Q[ne]);const Ze=Q[0],He=v(Ze)||o,Ae=a.convert(S.format,S.colorSpace),ye=a.convert(S.type),pe=b(S.internalFormat,Ae,ye,S.colorSpace),Ne=o&&S.isVideoTexture!==!0,$e=ee.__version===void 0||te===!0;let dt=R(S,Ze,He);H(t.TEXTURE_CUBE_MAP,S,He);let Fe;if(Ee){Ne&&$e&&r.texStorage2D(t.TEXTURE_CUBE_MAP,dt,pe,Ze.width,Ze.height);for(let ne=0;ne<6;ne++){Fe=Q[ne].mipmaps;for(let L=0;L<Fe.length;L++){const ie=Fe[L];S.format!==Or?Ae!==null?Ne?r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ie.width,ie.height,Ae,ie.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,pe,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,ie.width,ie.height,Ae,ye,ie.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,pe,ie.width,ie.height,0,Ae,ye,ie.data)}}}else{Fe=S.mipmaps,Ne&&$e&&(Fe.length>0&&dt++,r.texStorage2D(t.TEXTURE_CUBE_MAP,dt,pe,Q[0].width,Q[0].height));for(let ne=0;ne<6;ne++)if(Ie){Ne?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Q[ne].width,Q[ne].height,Ae,ye,Q[ne].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,Q[ne].width,Q[ne].height,0,Ae,ye,Q[ne].data);for(let L=0;L<Fe.length;L++){const ie=Fe[L].image[ne].image;Ne?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,ie.width,ie.height,Ae,ye,ie.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,pe,ie.width,ie.height,0,Ae,ye,ie.data)}}else{Ne?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ae,ye,Q[ne]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,Ae,ye,Q[ne]);for(let L=0;L<Fe.length;L++){const ie=Fe[L];Ne?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,Ae,ye,ie.image[ne]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,pe,Ae,ye,ie.image[ne])}}}m(S,He)&&g(t.TEXTURE_CUBE_MAP),ee.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function me(T,S,F,te,J,ee){const ve=a.convert(F.format,F.colorSpace),le=a.convert(F.type),fe=b(F.internalFormat,ve,le,F.colorSpace);if(!n.get(S).__hasExternalTextures){const Ee=Math.max(1,S.width>>ee),Ie=Math.max(1,S.height>>ee);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?r.texImage3D(J,ee,fe,Ee,Ie,S.depth,0,ve,le,null):r.texImage2D(J,ee,fe,Ee,Ie,0,ve,le,null)}r.bindFramebuffer(t.FRAMEBUFFER,T),ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,n.get(F).__webglTexture,0,Ce(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,J,n.get(F).__webglTexture,ee),r.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(T,S,F){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let te=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(F||ge(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===Ln?te=t.DEPTH_COMPONENT32F:J.type===Rn&&(te=t.DEPTH_COMPONENT24));const ee=Ce(S);ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,te,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,te,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const te=Ce(S);F&&ge(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<te.length;J++){const ee=te[J],ve=a.convert(ee.format,ee.colorSpace),le=a.convert(ee.type),fe=b(ee.internalFormat,ve,le,ee.colorSpace),Ee=Ce(S);F&&ge(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,fe,S.width,S.height):ge(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,fe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,fe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const F=n.get(S.depthTexture).__webglTexture,te=Ce(S);if(S.depthTexture.format===fi)ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else if(S.depthTexture.format===_a)ge(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Te(T){const S=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(S.__webglFramebuffer,T)}else if(F){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)r.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=t.createRenderbuffer(),Le(S.__webglDepthbuffer[te],T,!1)}else r.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Le(S.__webglDepthbuffer,T,!1);r.bindFramebuffer(t.FRAMEBUFFER,null)}function je(T,S,F){const te=n.get(T);S!==void 0&&me(te.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Te(T)}function z(T){const S=T.texture,F=n.get(T),te=n.get(S);T.addEventListener("dispose",P),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=S.version,s.memory.textures++);const J=T.isWebGLCubeRenderTarget===!0,ee=T.isWebGLMultipleRenderTargets===!0,ve=v(T)||o;if(J){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let fe=0;fe<S.mipmaps.length;fe++)F.__webglFramebuffer[le][fe]=t.createFramebuffer()}else F.__webglFramebuffer[le]=t.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)F.__webglFramebuffer[le]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(ee)if(i.drawBuffers){const le=T.texture;for(let fe=0,Ee=le.length;fe<Ee;fe++){const Ie=n.get(le[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ge(T)===!1){const le=ee?S:[S];F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<le.length;fe++){const Ee=le[fe];F.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const Ie=a.convert(Ee.format,Ee.colorSpace),Q=a.convert(Ee.type),Ze=b(Ee.internalFormat,Ie,Q,Ee.colorSpace,T.isXRRenderTarget===!0),He=Ce(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Ze,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,T,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){r.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),H(t.TEXTURE_CUBE_MAP,S,ve);for(let le=0;le<6;le++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)me(F.__webglFramebuffer[le][fe],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else me(F.__webglFramebuffer[le],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S,ve)&&g(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(ee){const le=T.texture;for(let fe=0,Ee=le.length;fe<Ee;fe++){const Ie=le[fe],Q=n.get(Ie);r.bindTexture(t.TEXTURE_2D,Q.__webglTexture),H(t.TEXTURE_2D,Ie,ve),me(F.__webglFramebuffer,T,Ie,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Ie,ve)&&g(t.TEXTURE_2D)}r.unbindTexture()}else{let le=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?le=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),r.bindTexture(le,te.__webglTexture),H(le,S,ve),o&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)me(F.__webglFramebuffer[fe],T,S,t.COLOR_ATTACHMENT0,le,fe);else me(F.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,le,0);m(S,ve)&&g(le),r.unbindTexture()}T.depthBuffer&&Te(T)}function Vt(T){const S=v(T)||o,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,J=F.length;te<J;te++){const ee=F[te];if(m(ee,S)){const ve=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=n.get(ee).__webglTexture;r.bindTexture(ve,le),g(ve),r.unbindTexture()}}}function Se(T){if(o&&T.samples>0&&ge(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,te=T.height;let J=t.COLOR_BUFFER_BIT;const ee=[],ve=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=n.get(T),fe=T.isWebGLMultipleRenderTargets===!0;if(fe)for(let Ee=0;Ee<S.length;Ee++)r.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){ee.push(t.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&ee.push(ve);const Ie=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ie===!1&&(T.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Ie===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),fe){const Q=n.get(S[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,F,te,0,0,F,te,J,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Ee=0;Ee<S.length;Ee++){r.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Ie=n.get(S[Ee]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,Ie,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ce(T){return Math.min(i.maxSamples,T.samples)}function ge(T){const S=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ot(T){const S=s.render.frame;d.get(T)!==S&&(d.set(T,S),T.update())}function Ue(T,S){const F=T.colorSpace,te=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Oc||F!==mn&&F!==br&&(Qe.getTransfer(F)===it?o===!1?e.has("EXT_sRGB")===!0&&te===Or?(T.format=Oc,T.minFilter=yr,T.generateMipmaps=!1):S=cv.sRGBToLinear(S):(te!==Or||J!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=N,this.resetTextureUnits=se,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=D,this.setTextureCube=I,this.rebindTextures=je,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function w1(t,e,r){const n=r.isWebGL2;function i(a,s=br){let o;const l=Qe.getTransfer(s);if(a===Hn)return t.UNSIGNED_BYTE;if(a===ev)return t.UNSIGNED_SHORT_4_4_4_4;if(a===tv)return t.UNSIGNED_SHORT_5_5_5_1;if(a===oy)return t.BYTE;if(a===ly)return t.SHORT;if(a===Id)return t.UNSIGNED_SHORT;if(a===Jg)return t.INT;if(a===Rn)return t.UNSIGNED_INT;if(a===Ln)return t.FLOAT;if(a===_s)return n?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===uy)return t.ALPHA;if(a===Or)return t.RGBA;if(a===cy)return t.LUMINANCE;if(a===dy)return t.LUMINANCE_ALPHA;if(a===fi)return t.DEPTH_COMPONENT;if(a===_a)return t.DEPTH_STENCIL;if(a===Oc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===hy)return t.RED;if(a===rv)return t.RED_INTEGER;if(a===fy)return t.RG;if(a===nv)return t.RG_INTEGER;if(a===iv)return t.RGBA_INTEGER;if(a===au||a===su||a===ou||a===lu)if(l===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===au)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===su)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ou)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===lu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===au)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===su)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ou)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===lu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===pf||a===mf||a===gf||a===vf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===pf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===mf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===gf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===vf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===av)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===_f||a===xf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===_f)return l===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===xf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===yf||a===Sf||a===bf||a===Ef||a===Mf||a===Tf||a===wf||a===Af||a===Cf||a===Rf||a===Lf||a===Pf||a===Nf||a===Df)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===yf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Sf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===bf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ef)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Mf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Tf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===wf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Af)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Cf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Rf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Lf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Pf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Nf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Df)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===uu||a===Uf||a===If)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===uu)return l===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Uf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===If)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===py||a===Of||a===kf||a===Ff)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===uu)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Of)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===kf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ff)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===hi?n?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:i}}class A1 extends Sr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Va extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C1={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const n of e.hand.values())this._getHandJoint(r,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,n){let i=null,a=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const v=r.getJointPose(x,n),c=this._getHandJoint(u,x);v!==null&&(c.matrix.fromArray(v.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=v.radius),c.visible=v!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=r.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=r.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(C1)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const n=new Va;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[r.jointName]=n,e.add(n)}return e.joints[r.jointName]}}class R1 extends Ea{constructor(e,r){super();const n=this;let i=null,a=1,s=null,o="local-floor",l=1,u=null,d=null,f=null,h=null,p=null,_=null;const x=r.getContextAttributes();let v=null,c=null;const m=[],g=[],b=new We;let R=null;const A=new Sr;A.layers.enable(1),A.viewport=new At;const w=new Sr;w.layers.enable(2),w.viewport=new At;const P=[A,w],y=new A1;y.layers.enable(1),y.layers.enable(2);let E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=m[H];return K===void 0&&(K=new Uu,m[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=m[H];return K===void 0&&(K=new Uu,m[H]=K),K.getGripSpace()},this.getHand=function(H){let K=m[H];return K===void 0&&(K=new Uu,m[H]=K),K.getHandSpace()};function X(H){const K=g.indexOf(H.inputSource);if(K===-1)return;const de=m[K];de!==void 0&&(de.update(H.inputSource,H.frame,u||s),de.dispatchEvent({type:H.type,data:H.inputSource}))}function se(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",se),i.removeEventListener("inputsourceschange",N);for(let H=0;H<m.length;H++){const K=g[H];K!==null&&(g[H]=null,m[H].disconnect(K))}E=null,G=null,e.setRenderTarget(v),p=null,h=null,f=null,i=null,c=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",se),i.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await r.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,r,K),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),c=new yi(p.framebufferWidth,p.framebufferHeight,{format:Or,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,de=null,he=null;x.depth&&(he=x.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,K=x.stencil?_a:fi,de=x.stencil?hi:Rn);const me={colorFormat:r.RGBA8,depthFormat:he,scaleFactor:a};f=new XRWebGLBinding(i,r),h=f.createProjectionLayer(me),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),c=new yi(h.textureWidth,h.textureHeight,{format:Or,type:Hn,depthTexture:new bv(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Le=e.properties.get(c);Le.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await i.requestReferenceSpace(o),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(H){for(let K=0;K<H.removed.length;K++){const de=H.removed[K],he=g.indexOf(de);he>=0&&(g[he]=null,m[he].disconnect(de))}for(let K=0;K<H.added.length;K++){const de=H.added[K];let he=g.indexOf(de);if(he===-1){for(let Le=0;Le<m.length;Le++)if(Le>=g.length){g.push(de),he=Le;break}else if(g[Le]===null){g[Le]=de,he=Le;break}if(he===-1)break}const me=m[he];me&&me.connect(de)}}const V=new O,q=new O;function $(H,K,de){V.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(de.matrixWorld);const he=V.distanceTo(q),me=K.projectionMatrix.elements,Le=de.projectionMatrix.elements,Pe=me[14]/(me[10]-1),Te=me[14]/(me[10]+1),je=(me[9]+1)/me[5],z=(me[9]-1)/me[5],Vt=(me[8]-1)/me[0],Se=(Le[8]+1)/Le[0],Ce=Pe*Vt,ge=Pe*Se,ot=he/(-Vt+Se),Ue=ot*-Vt;K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ue),H.translateZ(ot),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const T=Pe+ot,S=Te+ot,F=Ce-Ue,te=ge+(he-Ue),J=je*Te/S*T,ee=z*Te/S*T;H.projectionMatrix.makePerspective(F,te,J,ee,T,S),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function D(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;y.near=w.near=A.near=H.near,y.far=w.far=A.far=H.far,(E!==y.near||G!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,G=y.far);const K=H.parent,de=y.cameras;D(y,K);for(let he=0;he<de.length;he++)D(de[he],K);de.length===2?$(y,A,w):y.projectionMatrix.copy(A.projectionMatrix),I(H,y,K)};function I(H,K,de){de===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=kc*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let j=null;function Y(H,K){if(d=K.getViewerPose(u||s),_=K,d!==null){const de=d.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let he=!1;de.length!==y.cameras.length&&(y.cameras.length=0,he=!0);for(let me=0;me<de.length;me++){const Le=de[me];let Pe=null;if(p!==null)Pe=p.getViewport(Le);else{const je=f.getViewSubImage(h,Le);Pe=je.viewport,me===0&&(e.setRenderTargetTextures(c,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(c))}let Te=P[me];Te===void 0&&(Te=new Sr,Te.layers.enable(me),Te.viewport=new At,P[me]=Te),Te.matrix.fromArray(Le.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Le.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),me===0&&(y.matrix.copy(Te.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),he===!0&&y.cameras.push(Te)}}for(let de=0;de<m.length;de++){const he=g[de],me=m[de];he!==null&&me!==void 0&&me.update(he,K,u||s)}j&&j(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const re=new yv;re.setAnimationLoop(Y),this.setAnimationLoop=function(H){j=H},this.dispose=function(){}}}function L1(t,e){function r(v,c){v.matrixAutoUpdate===!0&&v.updateMatrix(),c.value.copy(v.matrix)}function n(v,c){c.color.getRGB(v.fogColor.value,vv(t)),c.isFog?(v.fogNear.value=c.near,v.fogFar.value=c.far):c.isFogExp2&&(v.fogDensity.value=c.density)}function i(v,c,m,g,b){c.isMeshBasicMaterial||c.isMeshLambertMaterial?a(v,c):c.isMeshToonMaterial?(a(v,c),f(v,c)):c.isMeshPhongMaterial?(a(v,c),d(v,c)):c.isMeshStandardMaterial?(a(v,c),h(v,c),c.isMeshPhysicalMaterial&&p(v,c,b)):c.isMeshMatcapMaterial?(a(v,c),_(v,c)):c.isMeshDepthMaterial?a(v,c):c.isMeshDistanceMaterial?(a(v,c),x(v,c)):c.isMeshNormalMaterial?a(v,c):c.isLineBasicMaterial?(s(v,c),c.isLineDashedMaterial&&o(v,c)):c.isPointsMaterial?l(v,c,m,g):c.isSpriteMaterial?u(v,c):c.isShadowMaterial?(v.color.value.copy(c.color),v.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function a(v,c){v.opacity.value=c.opacity,c.color&&v.diffuse.value.copy(c.color),c.emissive&&v.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(v.map.value=c.map,r(c.map,v.mapTransform)),c.alphaMap&&(v.alphaMap.value=c.alphaMap,r(c.alphaMap,v.alphaMapTransform)),c.bumpMap&&(v.bumpMap.value=c.bumpMap,r(c.bumpMap,v.bumpMapTransform),v.bumpScale.value=c.bumpScale,c.side===ir&&(v.bumpScale.value*=-1)),c.normalMap&&(v.normalMap.value=c.normalMap,r(c.normalMap,v.normalMapTransform),v.normalScale.value.copy(c.normalScale),c.side===ir&&v.normalScale.value.negate()),c.displacementMap&&(v.displacementMap.value=c.displacementMap,r(c.displacementMap,v.displacementMapTransform),v.displacementScale.value=c.displacementScale,v.displacementBias.value=c.displacementBias),c.emissiveMap&&(v.emissiveMap.value=c.emissiveMap,r(c.emissiveMap,v.emissiveMapTransform)),c.specularMap&&(v.specularMap.value=c.specularMap,r(c.specularMap,v.specularMapTransform)),c.alphaTest>0&&(v.alphaTest.value=c.alphaTest);const m=e.get(c).envMap;if(m&&(v.envMap.value=m,v.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=c.reflectivity,v.ior.value=c.ior,v.refractionRatio.value=c.refractionRatio),c.lightMap){v.lightMap.value=c.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=c.lightMapIntensity*g,r(c.lightMap,v.lightMapTransform)}c.aoMap&&(v.aoMap.value=c.aoMap,v.aoMapIntensity.value=c.aoMapIntensity,r(c.aoMap,v.aoMapTransform))}function s(v,c){v.diffuse.value.copy(c.color),v.opacity.value=c.opacity,c.map&&(v.map.value=c.map,r(c.map,v.mapTransform))}function o(v,c){v.dashSize.value=c.dashSize,v.totalSize.value=c.dashSize+c.gapSize,v.scale.value=c.scale}function l(v,c,m,g){v.diffuse.value.copy(c.color),v.opacity.value=c.opacity,v.size.value=c.size*m,v.scale.value=g*.5,c.map&&(v.map.value=c.map,r(c.map,v.uvTransform)),c.alphaMap&&(v.alphaMap.value=c.alphaMap,r(c.alphaMap,v.alphaMapTransform)),c.alphaTest>0&&(v.alphaTest.value=c.alphaTest)}function u(v,c){v.diffuse.value.copy(c.color),v.opacity.value=c.opacity,v.rotation.value=c.rotation,c.map&&(v.map.value=c.map,r(c.map,v.mapTransform)),c.alphaMap&&(v.alphaMap.value=c.alphaMap,r(c.alphaMap,v.alphaMapTransform)),c.alphaTest>0&&(v.alphaTest.value=c.alphaTest)}function d(v,c){v.specular.value.copy(c.specular),v.shininess.value=Math.max(c.shininess,1e-4)}function f(v,c){c.gradientMap&&(v.gradientMap.value=c.gradientMap)}function h(v,c){v.metalness.value=c.metalness,c.metalnessMap&&(v.metalnessMap.value=c.metalnessMap,r(c.metalnessMap,v.metalnessMapTransform)),v.roughness.value=c.roughness,c.roughnessMap&&(v.roughnessMap.value=c.roughnessMap,r(c.roughnessMap,v.roughnessMapTransform)),e.get(c).envMap&&(v.envMapIntensity.value=c.envMapIntensity)}function p(v,c,m){v.ior.value=c.ior,c.sheen>0&&(v.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),v.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(v.sheenColorMap.value=c.sheenColorMap,r(c.sheenColorMap,v.sheenColorMapTransform)),c.sheenRoughnessMap&&(v.sheenRoughnessMap.value=c.sheenRoughnessMap,r(c.sheenRoughnessMap,v.sheenRoughnessMapTransform))),c.clearcoat>0&&(v.clearcoat.value=c.clearcoat,v.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(v.clearcoatMap.value=c.clearcoatMap,r(c.clearcoatMap,v.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,r(c.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(v.clearcoatNormalMap.value=c.clearcoatNormalMap,r(c.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===ir&&v.clearcoatNormalScale.value.negate())),c.iridescence>0&&(v.iridescence.value=c.iridescence,v.iridescenceIOR.value=c.iridescenceIOR,v.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(v.iridescenceMap.value=c.iridescenceMap,r(c.iridescenceMap,v.iridescenceMapTransform)),c.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=c.iridescenceThicknessMap,r(c.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),c.transmission>0&&(v.transmission.value=c.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(v.transmissionMap.value=c.transmissionMap,r(c.transmissionMap,v.transmissionMapTransform)),v.thickness.value=c.thickness,c.thicknessMap&&(v.thicknessMap.value=c.thicknessMap,r(c.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=c.attenuationDistance,v.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(v.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(v.anisotropyMap.value=c.anisotropyMap,r(c.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=c.specularIntensity,v.specularColor.value.copy(c.specularColor),c.specularColorMap&&(v.specularColorMap.value=c.specularColorMap,r(c.specularColorMap,v.specularColorMapTransform)),c.specularIntensityMap&&(v.specularIntensityMap.value=c.specularIntensityMap,r(c.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,c){c.matcap&&(v.matcap.value=c.matcap)}function x(v,c){const m=e.get(c).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function P1(t,e,r,n){let i={},a={},s=[];const o=r.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,g){const b=g.program;n.uniformBlockBinding(m,b)}function u(m,g){let b=i[m.id];b===void 0&&(_(m),b=d(m),i[m.id]=b,m.addEventListener("dispose",v));const R=g.program;n.updateUBOMapping(m,R);const A=e.render.frame;a[m.id]!==A&&(h(m),a[m.id]=A)}function d(m){const g=f();m.__bindingPointIndex=g;const b=t.createBuffer(),R=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,b),b}function f(){for(let m=0;m<o;m++)if(s.indexOf(m)===-1)return s.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const g=i[m.id],b=m.uniforms,R=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,w=b.length;A<w;A++){const P=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,E=P.length;y<E;y++){const G=P[y];if(p(G,A,y,R)===!0){const X=G.__offset,se=Array.isArray(G.value)?G.value:[G.value];let N=0;for(let V=0;V<se.length;V++){const q=se[V],$=x(q);typeof q=="number"||typeof q=="boolean"?(G.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,X+N,G.__data)):q.isMatrix3?(G.__data[0]=q.elements[0],G.__data[1]=q.elements[1],G.__data[2]=q.elements[2],G.__data[3]=0,G.__data[4]=q.elements[3],G.__data[5]=q.elements[4],G.__data[6]=q.elements[5],G.__data[7]=0,G.__data[8]=q.elements[6],G.__data[9]=q.elements[7],G.__data[10]=q.elements[8],G.__data[11]=0):(q.toArray(G.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,G.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,g,b,R){const A=m.value,w=g+"_"+b;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const P=R[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(m){const g=m.uniforms;let b=0;const R=16;for(let w=0,P=g.length;w<P;w++){const y=Array.isArray(g[w])?g[w]:[g[w]];for(let E=0,G=y.length;E<G;E++){const X=y[E],se=Array.isArray(X.value)?X.value:[X.value];for(let N=0,V=se.length;N<V;N++){const q=se[N],$=x(q),D=b%R;D!==0&&R-D<$.boundary&&(b+=R-D),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=$.storage}}}const A=b%R;return A>0&&(b+=R-A),m.__size=b,m.__cache={},this}function x(m){const g={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),g}function v(m){const g=m.target;g.removeEventListener("dispose",v);const b=s.indexOf(g.__bindingPointIndex);s.splice(b,1),t.deleteBuffer(i[g.id]),delete i[g.id],delete a[g.id]}function c(){for(const m in i)t.deleteBuffer(i[m]);s=[],i={},a={}}return{bind:l,update:u,dispose:c}}class Cv{constructor(e={}){const{canvas:r=wy(),context:n=null,depth:i=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=s;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,v=null;const c=[],m=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const g=this;let b=!1,R=0,A=0,w=null,P=-1,y=null;const E=new At,G=new At;let X=null;const se=new Ye(0);let N=0,V=r.width,q=r.height,$=1,D=null,I=null;const j=new At(0,0,V,q),Y=new At(0,0,V,q);let re=!1;const H=new zd;let K=!1,de=!1,he=null;const me=new St,Le=new We,Pe=new O,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return w===null?$:1}let z=n;function Vt(M,U){for(let B=0;B<M.length;B++){const W=M[B],k=r.getContext(W,U);if(k!==null)return k}return null}try{const M={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${Ud}`),r.addEventListener("webglcontextlost",ne,!1),r.addEventListener("webglcontextrestored",L,!1),r.addEventListener("webglcontextcreationerror",ie,!1),z===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),z=Vt(U,M),z===null)throw Vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Se,Ce,ge,ot,Ue,T,S,F,te,J,ee,ve,le,fe,Ee,Ie,Q,Ze,He,Ae,ye,pe,Ne,$e;function dt(){Se=new HE(z),Ce=new IE(z,Se,e),Se.init(Ce),pe=new w1(z,Se,Ce),ge=new M1(z,Se,Ce),ot=new WE(z),Ue=new c1,T=new T1(z,Se,ge,Ue,Ce,pe,ot),S=new kE(g),F=new BE(g),te=new Qy(z,Ce),Ne=new DE(z,Se,te,Ce),J=new GE(z,te,ot,Ne),ee=new YE(z,J,te,ot),He=new qE(z,Ce,T),Ie=new OE(Ue),ve=new u1(g,S,F,Se,Ce,Ne,Ie),le=new L1(g,Ue),fe=new h1,Ee=new _1(Se,Ce),Ze=new NE(g,S,F,ge,ee,h,l),Q=new E1(g,ee,Ce),$e=new P1(z,ot,Ce,ge),Ae=new UE(z,Se,ot,Ce),ye=new VE(z,Se,ot,Ce),ot.programs=ve.programs,g.capabilities=Ce,g.extensions=Se,g.properties=Ue,g.renderLists=fe,g.shadowMap=Q,g.state=ge,g.info=ot}dt();const Fe=new R1(g,z);this.xr=Fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(V,q,!1))},this.getSize=function(M){return M.set(V,q)},this.setSize=function(M,U,B=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,q=U,r.width=Math.floor(M*$),r.height=Math.floor(U*$),B===!0&&(r.style.width=M+"px",r.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(V*$,q*$).floor()},this.setDrawingBufferSize=function(M,U,B){V=M,q=U,$=B,r.width=Math.floor(M*B),r.height=Math.floor(U*B),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,U,B,W){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,U,B,W),ge.viewport(E.copy(j).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(Y)},this.setScissor=function(M,U,B,W){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,U,B,W),ge.scissor(G.copy(Y).multiplyScalar($).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(M){ge.setScissorTest(re=M)},this.setOpaqueSort=function(M){D=M},this.setTransparentSort=function(M){I=M},this.getClearColor=function(M){return M.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(M=!0,U=!0,B=!0){let W=0;if(M){let k=!1;if(w!==null){const oe=w.texture.format;k=oe===iv||oe===nv||oe===rv}if(k){const oe=w.texture.type,xe=oe===Hn||oe===Rn||oe===Id||oe===hi||oe===ev||oe===tv,Me=Ze.getClearColor(),we=Ze.getClearAlpha(),Ve=Me.r,Oe=Me.g,ke=Me.b;xe?(p[0]=Ve,p[1]=Oe,p[2]=ke,p[3]=we,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=Ve,_[1]=Oe,_[2]=ke,_[3]=we,z.clearBufferiv(z.COLOR,0,_))}else W|=z.COLOR_BUFFER_BIT}U&&(W|=z.DEPTH_BUFFER_BIT),B&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",ne,!1),r.removeEventListener("webglcontextrestored",L,!1),r.removeEventListener("webglcontextcreationerror",ie,!1),fe.dispose(),Ee.dispose(),Ue.dispose(),S.dispose(),F.dispose(),ee.dispose(),Ne.dispose(),$e.dispose(),ve.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",pr),Fe.removeEventListener("sessionend",tt),he&&(he.dispose(),he=null),Wt.stop()};function ne(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=ot.autoReset,U=Q.enabled,B=Q.autoUpdate,W=Q.needsUpdate,k=Q.type;dt(),ot.autoReset=M,Q.enabled=U,Q.autoUpdate=B,Q.needsUpdate=W,Q.type=k}function ie(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ue(M){const U=M.target;U.removeEventListener("dispose",ue),Re(U)}function Re(M){be(M),Ue.remove(M)}function be(M){const U=Ue.get(M).programs;U!==void 0&&(U.forEach(function(B){ve.releaseProgram(B)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,B,W,k,oe){U===null&&(U=Te);const xe=k.isMesh&&k.matrixWorld.determinant()<0,Me=Pv(M,U,B,W,k);ge.setMaterial(W,xe);let we=B.index,Ve=1;if(W.wireframe===!0){if(we=J.getWireframeAttribute(B),we===void 0)return;Ve=2}const Oe=B.drawRange,ke=B.attributes.position;let Ut=Oe.start*Ve,_t=(Oe.start+Oe.count)*Ve;oe!==null&&(Ut=Math.max(Ut,oe.start*Ve),_t=Math.min(_t,(oe.start+oe.count)*Ve)),we!==null?(Ut=Math.max(Ut,0),_t=Math.min(_t,we.count)):ke!=null&&(Ut=Math.max(Ut,0),_t=Math.min(_t,ke.count));const mr=_t-Ut;if(mr<0||mr===1/0)return;Ne.setup(k,W,Me,B,we);let Kr,ft=Ae;if(we!==null&&(Kr=te.get(we),ft=ye,ft.setIndex(Kr)),k.isMesh)W.wireframe===!0?(ge.setLineWidth(W.wireframeLinewidth*je()),ft.setMode(z.LINES)):ft.setMode(z.TRIANGLES);else if(k.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),ge.setLineWidth(ze*je()),k.isLineSegments?ft.setMode(z.LINES):k.isLineLoop?ft.setMode(z.LINE_LOOP):ft.setMode(z.LINE_STRIP)}else k.isPoints?ft.setMode(z.POINTS):k.isSprite&&ft.setMode(z.TRIANGLES);if(k.isBatchedMesh)ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ft.renderInstances(Ut,mr,k.count);else if(B.isInstancedBufferGeometry){const ze=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Al=Math.min(B.instanceCount,ze);ft.renderInstances(Ut,mr,Al)}else ft.render(Ut,mr)};function Je(M,U,B){M.transparent===!0&&M.side===sn&&M.forceSinglePass===!1?(M.side=ir,M.needsUpdate=!0,Ls(M,U,B),M.side=Wn,M.needsUpdate=!0,Ls(M,U,B),M.side=sn):Ls(M,U,B)}this.compile=function(M,U,B=null){B===null&&(B=M),v=Ee.get(B),v.init(),m.push(v),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),M!==B&&M.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),v.setupLights(g._useLegacyLights);const W=new Set;return M.traverse(function(k){const oe=k.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){const Me=oe[xe];Je(Me,B,k),W.add(Me)}else Je(oe,B,k),W.add(oe)}),m.pop(),v=null,W},this.compileAsync=function(M,U,B=null){const W=this.compile(M,U,B);return new Promise(k=>{function oe(){if(W.forEach(function(xe){Ue.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){k(M);return}setTimeout(oe,10)}Se.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let et=null;function mt(M){et&&et(M)}function pr(){Wt.stop()}function tt(){Wt.start()}const Wt=new yv;Wt.setAnimationLoop(mt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(M){et=M,Fe.setAnimationLoop(M),M===null?Wt.stop():Wt.start()},Fe.addEventListener("sessionstart",pr),Fe.addEventListener("sessionend",tt),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(U),U=Fe.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,U,w),v=Ee.get(M,m.length),v.init(),m.push(v),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(me),de=this.localClippingEnabled,K=Ie.init(this.clippingPlanes,de),x=fe.get(M,c.length),x.init(),c.push(x),Br(M,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(D,I),this.info.render.frame++,K===!0&&Ie.beginShadows();const B=v.state.shadowsArray;if(Q.render(B,M,U),K===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(x,M),v.setupLights(g._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let k=0,oe=W.length;k<oe;k++){const xe=W[k];Wd(x,M,xe,xe.viewport)}}else Wd(x,M,U);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(g,M,U),Ne.resetDefaultState(),P=-1,y=null,m.pop(),m.length>0?v=m[m.length-1]:v=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Br(M,U,B,W){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)v.pushLight(M),M.castShadow&&v.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||H.intersectsSprite(M)){W&&Pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);const oe=ee.update(M),xe=M.material;xe.visible&&x.push(M,oe,xe,B,Pe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||H.intersectsObject(M))){const oe=ee.update(M),xe=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pe.copy(M.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Pe.copy(oe.boundingSphere.center)),Pe.applyMatrix4(M.matrixWorld).applyMatrix4(me)),Array.isArray(xe)){const Me=oe.groups;for(let we=0,Ve=Me.length;we<Ve;we++){const Oe=Me[we],ke=xe[Oe.materialIndex];ke&&ke.visible&&x.push(M,oe,ke,B,Pe.z,Oe)}}else xe.visible&&x.push(M,oe,xe,B,Pe.z,null)}}const k=M.children;for(let oe=0,xe=k.length;oe<xe;oe++)Br(k[oe],U,B,W)}function Wd(M,U,B,W){const k=M.opaque,oe=M.transmissive,xe=M.transparent;v.setupLightsView(B),K===!0&&Ie.setGlobalState(g.clippingPlanes,B),oe.length>0&&Lv(k,oe,U,B),W&&ge.viewport(E.copy(W)),k.length>0&&Rs(k,U,B),oe.length>0&&Rs(oe,U,B),xe.length>0&&Rs(xe,U,B),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Lv(M,U,B,W){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const k=Ce.isWebGL2;he===null&&(he=new yi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?_s:Hn,minFilter:vs,samples:k?4:0})),g.getDrawingBufferSize(Le),k?he.setSize(Le.x,Le.y):he.setSize(Fc(Le.x),Fc(Le.y));const oe=g.getRenderTarget();g.setRenderTarget(he),g.getClearColor(se),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear();const xe=g.toneMapping;g.toneMapping=Bn,Rs(M,B,W),T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he);let Me=!1;for(let we=0,Ve=U.length;we<Ve;we++){const Oe=U[we],ke=Oe.object,Ut=Oe.geometry,_t=Oe.material,mr=Oe.group;if(_t.side===sn&&ke.layers.test(W.layers)){const Kr=_t.side;_t.side=ir,_t.needsUpdate=!0,jd(ke,B,W,Ut,_t,mr),_t.side=Kr,_t.needsUpdate=!0,Me=!0}}Me===!0&&(T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he)),g.setRenderTarget(oe),g.setClearColor(se,N),g.toneMapping=xe}function Rs(M,U,B){const W=U.isScene===!0?U.overrideMaterial:null;for(let k=0,oe=M.length;k<oe;k++){const xe=M[k],Me=xe.object,we=xe.geometry,Ve=W===null?xe.material:W,Oe=xe.group;Me.layers.test(B.layers)&&jd(Me,U,B,we,Ve,Oe)}}function jd(M,U,B,W,k,oe){M.onBeforeRender(g,U,B,W,k,oe),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(g,U,B,W,M,oe),k.transparent===!0&&k.side===sn&&k.forceSinglePass===!1?(k.side=ir,k.needsUpdate=!0,g.renderBufferDirect(B,U,W,k,M,oe),k.side=Wn,k.needsUpdate=!0,g.renderBufferDirect(B,U,W,k,M,oe),k.side=sn):g.renderBufferDirect(B,U,W,k,M,oe),M.onAfterRender(g,U,B,W,k,oe)}function Ls(M,U,B){U.isScene!==!0&&(U=Te);const W=Ue.get(M),k=v.state.lights,oe=v.state.shadowsArray,xe=k.state.version,Me=ve.getParameters(M,k.state,oe,U,B),we=ve.getProgramCacheKey(Me);let Ve=W.programs;W.environment=M.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(M.isMeshStandardMaterial?F:S).get(M.envMap||W.environment),Ve===void 0&&(M.addEventListener("dispose",ue),Ve=new Map,W.programs=Ve);let Oe=Ve.get(we);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===xe)return qd(M,Me),Oe}else Me.uniforms=ve.getUniforms(M),M.onBuild(B,Me,g),M.onBeforeCompile(Me,g),Oe=ve.acquireProgram(Me,we),Ve.set(we,Oe),W.uniforms=Me.uniforms;const ke=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=Ie.uniform),qd(M,Me),W.needsLights=Dv(M),W.lightsStateVersion=xe,W.needsLights&&(ke.ambientLightColor.value=k.state.ambient,ke.lightProbe.value=k.state.probe,ke.directionalLights.value=k.state.directional,ke.directionalLightShadows.value=k.state.directionalShadow,ke.spotLights.value=k.state.spot,ke.spotLightShadows.value=k.state.spotShadow,ke.rectAreaLights.value=k.state.rectArea,ke.ltc_1.value=k.state.rectAreaLTC1,ke.ltc_2.value=k.state.rectAreaLTC2,ke.pointLights.value=k.state.point,ke.pointLightShadows.value=k.state.pointShadow,ke.hemisphereLights.value=k.state.hemi,ke.directionalShadowMap.value=k.state.directionalShadowMap,ke.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ke.spotShadowMap.value=k.state.spotShadowMap,ke.spotLightMatrix.value=k.state.spotLightMatrix,ke.spotLightMap.value=k.state.spotLightMap,ke.pointShadowMap.value=k.state.pointShadowMap,ke.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function Xd(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Lo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function qd(M,U){const B=Ue.get(M);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Pv(M,U,B,W,k){U.isScene!==!0&&(U=Te),T.resetTextureUnits();const oe=U.fog,xe=W.isMeshStandardMaterial?U.environment:null,Me=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:mn,we=(W.isMeshStandardMaterial?F:S).get(W.envMap||xe),Ve=W.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Oe=!!B.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!B.morphAttributes.position,Ut=!!B.morphAttributes.normal,_t=!!B.morphAttributes.color;let mr=Bn;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mr=g.toneMapping);const Kr=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ft=Kr!==void 0?Kr.length:0,ze=Ue.get(W),Al=v.state.lights;if(K===!0&&(de===!0||M!==y)){const gr=M===y&&W.id===P;Ie.setState(W,M,gr)}let Cl=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Al.state.version||ze.outputColorSpace!==Me||k.isBatchedMesh&&ze.batching===!1||!k.isBatchedMesh&&ze.batching===!0||k.isInstancedMesh&&ze.instancing===!1||!k.isInstancedMesh&&ze.instancing===!0||k.isSkinnedMesh&&ze.skinning===!1||!k.isSkinnedMesh&&ze.skinning===!0||k.isInstancedMesh&&ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ze.instancingColor===!1&&k.instanceColor!==null||ze.envMap!==we||W.fog===!0&&ze.fog!==oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ie.numPlanes||ze.numIntersection!==Ie.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==Oe||ze.morphTargets!==ke||ze.morphNormals!==Ut||ze.morphColors!==_t||ze.toneMapping!==mr||Ce.isWebGL2===!0&&ze.morphTargetsCount!==ft)&&(Cl=!0):(Cl=!0,ze.__version=W.version);let $n=ze.currentProgram;Cl===!0&&($n=Ls(W,U,k));let Yd=!1,Ta=!1,Rl=!1;const It=$n.getUniforms(),Kn=ze.uniforms;if(ge.useProgram($n.program)&&(Yd=!0,Ta=!0,Rl=!0),W.id!==P&&(P=W.id,Ta=!0),Yd||y!==M){It.setValue(z,"projectionMatrix",M.projectionMatrix),It.setValue(z,"viewMatrix",M.matrixWorldInverse);const gr=It.map.cameraPosition;gr!==void 0&&gr.setValue(z,Pe.setFromMatrixPosition(M.matrixWorld)),Ce.logarithmicDepthBuffer&&It.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&It.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ta=!0,Rl=!0)}if(k.isSkinnedMesh){It.setOptional(z,k,"bindMatrix"),It.setOptional(z,k,"bindMatrixInverse");const gr=k.skeleton;gr&&(Ce.floatVertexTextures?(gr.boneTexture===null&&gr.computeBoneTexture(),It.setValue(z,"boneTexture",gr.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(It.setOptional(z,k,"batchingTexture"),It.setValue(z,"batchingTexture",k._matricesTexture,T));const Ll=B.morphAttributes;if((Ll.position!==void 0||Ll.normal!==void 0||Ll.color!==void 0&&Ce.isWebGL2===!0)&&He.update(k,B,$n),(Ta||ze.receiveShadow!==k.receiveShadow)&&(ze.receiveShadow=k.receiveShadow,It.setValue(z,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Kn.envMap.value=we,Kn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Ta&&(It.setValue(z,"toneMappingExposure",g.toneMappingExposure),ze.needsLights&&Nv(Kn,Rl),oe&&W.fog===!0&&le.refreshFogUniforms(Kn,oe),le.refreshMaterialUniforms(Kn,W,$,q,he),Lo.upload(z,Xd(ze),Kn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Lo.upload(z,Xd(ze),Kn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&It.setValue(z,"center",k.center),It.setValue(z,"modelViewMatrix",k.modelViewMatrix),It.setValue(z,"normalMatrix",k.normalMatrix),It.setValue(z,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const gr=W.uniformsGroups;for(let Pl=0,Uv=gr.length;Pl<Uv;Pl++)if(Ce.isWebGL2){const $d=gr[Pl];$e.update($d,$n),$e.bind($d,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function Nv(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Dv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,U,B){Ue.get(M.texture).__webglTexture=U,Ue.get(M.depthTexture).__webglTexture=B;const W=Ue.get(M);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=B===void 0,W.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){const B=Ue.get(M);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,B=0){w=M,R=U,A=B;let W=!0,k=null,oe=!1,xe=!1;if(M){const Me=Ue.get(M);Me.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Me.__webglFramebuffer===void 0?T.setupRenderTarget(M):Me.__hasExternalTextures&&T.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);const we=M.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);const Ve=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?k=Ve[U][B]:k=Ve[U],oe=!0):Ce.isWebGL2&&M.samples>0&&T.useMultisampledRTT(M)===!1?k=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(Ve)?k=Ve[B]:k=Ve,E.copy(M.viewport),G.copy(M.scissor),X=M.scissorTest}else E.copy(j).multiplyScalar($).floor(),G.copy(Y).multiplyScalar($).floor(),X=re;if(ge.bindFramebuffer(z.FRAMEBUFFER,k)&&Ce.drawBuffers&&W&&ge.drawBuffers(M,k),ge.viewport(E),ge.scissor(G),ge.setScissorTest(X),oe){const Me=Ue.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,B)}else if(xe){const Me=Ue.get(M.texture),we=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Me.__webglTexture,B||0,we)}P=-1},this.readRenderTargetPixels=function(M,U,B,W,k,oe,xe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){ge.bindFramebuffer(z.FRAMEBUFFER,Me);try{const we=M.texture,Ve=we.format,Oe=we.type;if(Ve!==Or&&pe.convert(Ve)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Oe===_s&&(Se.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Oe!==Hn&&pe.convert(Oe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Ln&&(Ce.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-W&&B>=0&&B<=M.height-k&&z.readPixels(U,B,W,k,pe.convert(Ve),pe.convert(Oe),oe)}finally{const we=w!==null?Ue.get(w).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(M,U,B=0){const W=Math.pow(2,-B),k=Math.floor(U.image.width*W),oe=Math.floor(U.image.height*W);T.setTexture2D(U,0),z.copyTexSubImage2D(z.TEXTURE_2D,B,0,0,M.x,M.y,k,oe),ge.unbindTexture()},this.copyTextureToTexture=function(M,U,B,W=0){const k=U.image.width,oe=U.image.height,xe=pe.convert(B.format),Me=pe.convert(B.type);T.setTexture2D(B,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,M.x,M.y,k,oe,xe,Me,U.image.data):U.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,M.x,M.y,xe,Me,U.image),W===0&&B.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(M,U,B,W,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const oe=M.max.x-M.min.x+1,xe=M.max.y-M.min.y+1,Me=M.max.z-M.min.z+1,we=pe.convert(W.format),Ve=pe.convert(W.type);let Oe;if(W.isData3DTexture)T.setTexture3D(W,0),Oe=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)T.setTexture2DArray(W,0),Oe=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const ke=z.getParameter(z.UNPACK_ROW_LENGTH),Ut=z.getParameter(z.UNPACK_IMAGE_HEIGHT),_t=z.getParameter(z.UNPACK_SKIP_PIXELS),mr=z.getParameter(z.UNPACK_SKIP_ROWS),Kr=z.getParameter(z.UNPACK_SKIP_IMAGES),ft=B.isCompressedTexture?B.mipmaps[k]:B.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,M.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,M.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?z.texSubImage3D(Oe,k,U.x,U.y,U.z,oe,xe,Me,we,Ve,ft.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Oe,k,U.x,U.y,U.z,oe,xe,Me,we,ft.data)):z.texSubImage3D(Oe,k,U.x,U.y,U.z,oe,xe,Me,we,Ve,ft),z.pixelStorei(z.UNPACK_ROW_LENGTH,ke),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut),z.pixelStorei(z.UNPACK_SKIP_PIXELS,_t),z.pixelStorei(z.UNPACK_SKIP_ROWS,mr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Kr),k===0&&W.generateMipmaps&&z.generateMipmap(Oe),ge.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=e===Od?"display-p3":"srgb",r.unpackColorSpace=Qe.workingColorSpace===Ml?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?pi:sv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===pi?Lt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class N1 extends Cv{}N1.prototype.isWebGL1Renderer=!0;class D1 extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r}}class Gd extends Yn{constructor(e=[],r=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:r,radius:n,detail:i};const a=[],s=[];o(i),u(n),d(),this.setAttribute("position",new $r(a,3)),this.setAttribute("normal",new $r(a.slice(),3)),this.setAttribute("uv",new $r(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const g=new O,b=new O,R=new O;for(let A=0;A<r.length;A+=3)p(r[A+0],g),p(r[A+1],b),p(r[A+2],R),l(g,b,R,m)}function l(m,g,b,R){const A=R+1,w=[];for(let P=0;P<=A;P++){w[P]=[];const y=m.clone().lerp(b,P/A),E=g.clone().lerp(b,P/A),G=A-P;for(let X=0;X<=G;X++)X===0&&P===A?w[P][X]=y:w[P][X]=y.clone().lerp(E,X/G)}for(let P=0;P<A;P++)for(let y=0;y<2*(A-P)-1;y++){const E=Math.floor(y/2);y%2===0?(h(w[P][E+1]),h(w[P+1][E]),h(w[P][E])):(h(w[P][E+1]),h(w[P+1][E+1]),h(w[P+1][E]))}}function u(m){const g=new O;for(let b=0;b<a.length;b+=3)g.x=a[b+0],g.y=a[b+1],g.z=a[b+2],g.normalize().multiplyScalar(m),a[b+0]=g.x,a[b+1]=g.y,a[b+2]=g.z}function d(){const m=new O;for(let g=0;g<a.length;g+=3){m.x=a[g+0],m.y=a[g+1],m.z=a[g+2];const b=v(m)/2/Math.PI+.5,R=c(m)/Math.PI+.5;s.push(b,1-R)}_(),f()}function f(){for(let m=0;m<s.length;m+=6){const g=s[m+0],b=s[m+2],R=s[m+4],A=Math.max(g,b,R),w=Math.min(g,b,R);A>.9&&w<.1&&(g<.2&&(s[m+0]+=1),b<.2&&(s[m+2]+=1),R<.2&&(s[m+4]+=1))}}function h(m){a.push(m.x,m.y,m.z)}function p(m,g){const b=m*3;g.x=e[b+0],g.y=e[b+1],g.z=e[b+2]}function _(){const m=new O,g=new O,b=new O,R=new O,A=new We,w=new We,P=new We;for(let y=0,E=0;y<a.length;y+=9,E+=6){m.set(a[y+0],a[y+1],a[y+2]),g.set(a[y+3],a[y+4],a[y+5]),b.set(a[y+6],a[y+7],a[y+8]),A.set(s[E+0],s[E+1]),w.set(s[E+2],s[E+3]),P.set(s[E+4],s[E+5]),R.copy(m).add(g).add(b).divideScalar(3);const G=v(R);x(A,E+0,m,G),x(w,E+2,g,G),x(P,E+4,b,G)}}function x(m,g,b,R){R<0&&m.x===1&&(s[g]=m.x-1),b.x===0&&b.z===0&&(s[g]=R/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function c(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.vertices,e.indices,e.radius,e.details)}}class Vd extends Gd{constructor(e=1,r=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,e,r),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:r}}static fromJSON(e){return new Vd(e.radius,e.detail)}}class U1 extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ov,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rv extends Ht{constructor(e,r=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=r}dispose(){}copy(e,r){return super.copy(e,r),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const r=super.toJSON(e);return r.object.color=this.color.getHex(),r.object.intensity=this.intensity,this.groundColor!==void 0&&(r.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(r.object.distance=this.distance),this.angle!==void 0&&(r.object.angle=this.angle),this.decay!==void 0&&(r.object.decay=this.decay),this.penumbra!==void 0&&(r.object.penumbra=this.penumbra),this.shadow!==void 0&&(r.object.shadow=this.shadow.toJSON()),r}}const Iu=new St,Ap=new O,Cp=new O;class I1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zd,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const r=this.camera,n=this.matrix;Ap.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ap),Cp.setFromMatrixPosition(e.target.matrixWorld),r.lookAt(Cp),r.updateMatrixWorld(),Iu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O1 extends I1{constructor(){super(new Sv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ou extends Rv{constructor(e,r){super(e,r),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new O1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class k1 extends Rv{constructor(e,r){super(e,r),this.isAmbientLight=!0,this.type="AmbientLight"}}class F1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const r=Rp();e=(r-this.oldTime)/1e3,this.oldTime=r,this.elapsedTime+=e}return e}}function Rp(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);function z1(){const t=Xe.useRef(null);return Xe.useEffect(()=>{const e=t.current;if(!e)return;const r=e.clientWidth||400,n=e.clientHeight||400,i=new D1,a=new Sr(35,r/n,.1,100);a.position.set(0,0,6);const s=new Cv({antialias:!0,alpha:!0});s.setSize(r,n),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(s.domElement),i.add(new k1(16777215,.2));const o=new Ou(58879,2.2);o.position.set(4,2,3),i.add(o);const l=new Ou(16722527,2.6);l.position.set(-4,1,-3),i.add(l);const u=new Ou(16777215,.35);u.position.set(0,-3,4),i.add(u);const d=new Va;i.add(d);const f=new U1({color:1315871,flatShading:!0,metalness:.35,roughness:.45}),h=new Fd({color:58879,wireframe:!0,transparent:!0,opacity:.15}),p=new Vd(1.4,1),_=p.attributes.position,x=new O;for(let P=0;P<_.count;P++){x.fromBufferAttribute(_,P);const y=Math.sin(x.x*3.1)*Math.cos(x.y*2.7)*Math.sin(x.z*3.7);x.multiplyScalar(1+y*.15),_.setXYZ(P,x.x,x.y,x.z)}p.computeVertexNormals();const v=new jr(p,f);v.add(new jr(p,h)),d.add(v);let c=0,m=0;const g=P=>{c=(P.clientY/window.innerHeight-.5)*.4,m=(P.clientX/window.innerWidth-.5)*.4},b=()=>{if(!e)return;const P=e.clientWidth,y=e.clientHeight;P&&y&&(a.aspect=P/y,a.updateProjectionMatrix(),s.setSize(P,y))};window.addEventListener("mousemove",g),window.addEventListener("resize",b);const R=new F1;let A;const w=()=>{const P=R.getElapsedTime();d.rotation.y=P*.45+m,d.rotation.x+=(c-d.rotation.x)*.05,d.position.y=Math.sin(P*.8)*.08,s.render(i,a),A=requestAnimationFrame(w)};return A=requestAnimationFrame(w),()=>{cancelAnimationFrame(A),window.removeEventListener("mousemove",g),window.removeEventListener("resize",b),e&&s.domElement&&e.removeChild(s.domElement),p.dispose(),f.dispose(),h.dispose(),s.dispose()}},[]),C.jsx("div",{id:"head-3d",ref:t,"aria-hidden":"true"})}function B1(){return C.jsxs("section",{className:"hero",id:"home",children:[C.jsx("div",{className:"ambient-light"}),C.jsx(z1,{}),C.jsxs("h1",{children:[C.jsx("svg",{className:"hero-name-svg",viewBox:"0 0 880 72",xmlns:"http://www.w3.org/2000/svg",children:C.jsx("text",{x:"0",y:"56",fontFamily:"'Syncopate', sans-serif",fontWeight:"700",fontSize:"50",letterSpacing:"3",className:"hero-name-text",children:_e.firstName.toUpperCase()})}),C.jsx("br",{}),C.jsx("span",{className:"outline",children:_e.lastName.toUpperCase()})]}),C.jsxs("div",{className:"hero-desc",children:[C.jsx("strong",{children:_e.primaryTitle})," ",C.jsx("br",{}),_e.secondaryTitle,". ",C.jsx("br",{}),_e.tagline,C.jsxs("div",{className:"work-tech2",children:[C.jsxs("a",{className:"tech-pill2",href:_e.resumeUrl,download:_e.resumeDownloadName,target:"_blank",rel:"noopener noreferrer",style:{borderColor:"var(--accent)",color:"#ff9cb3",background:"rgba(255, 42, 95, 0.08)"},children:[C.jsx(vx,{size:15}),"Download CV"]}),C.jsxs("a",{className:"tech-pill2",href:_e.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[C.jsx(qg,{size:15}),"GitHub"]}),C.jsxs("a",{className:"tech-pill2",href:_e.whatsappUrl,target:"_blank",rel:"noopener noreferrer",children:[C.jsx(Sx,{size:15}),"WhatsApp"]}),C.jsxs("a",{className:"tech-pill2",href:_e.instagramUrl,target:"_blank",rel:"noopener noreferrer",style:{borderColor:"rgba(228, 64, 95, 0.4)",color:"#ff809b"},children:[C.jsx(Yg,{size:15}),"Instagram"]}),C.jsxs("a",{className:"tech-pill2",href:`mailto:${_e.email}`,children:[C.jsx($g,{size:15}),"Email"]}),C.jsxs("span",{className:"tech-pill2",style:{borderColor:"rgba(0, 229, 255, 0.4)",color:"var(--accent2)"},children:[C.jsx(_x,{size:15}),_e.location]})]})]}),C.jsx("div",{className:"stats-banner",children:Wg.map((t,e)=>C.jsxs("div",{className:"stat-item",children:[C.jsx("h4",{children:t.value}),C.jsx("p",{children:t.label})]},e))})]})}function H1(){const t=["Full Stack Engineer","Next.js 14","QA Automation","Node.js & Express","WebSockets","PostgreSQL & MongoDB","Playwright & Jest","Docker Containers"];return C.jsx("div",{className:"marquee","aria-hidden":"true",children:C.jsx("div",{className:"marquee-track",children:t.concat(t).map((e,r)=>C.jsxs(Bp.Fragment,{children:[C.jsx("span",{children:e}),C.jsx("span",{className:"accent",children:"✦"})]},r))})})}function G1(){const[t,e]=Xe.useState("All"),[r,n]=Xe.useState(""),i=Xe.useMemo(()=>Ro.filter(a=>{const s=t==="All"||a.category===t,o=a.title.toLowerCase().includes(r.toLowerCase())||a.description.toLowerCase().includes(r.toLowerCase())||a.tech.some(l=>l.toLowerCase().includes(r.toLowerCase()));return s&&o}),[t,r]);return C.jsxs("section",{id:"work",children:[C.jsxs("h2",{className:"section-title",children:["Selected ",C.jsx("span",{children:"Work"})]}),C.jsxs("div",{className:"project-controls",children:[C.jsx("div",{className:"category-tabs",children:cx.map(a=>{const s=a==="All"?Ro.length:Ro.filter(o=>o.category===a).length;return C.jsxs("button",{type:"button",className:`tab-btn ${t===a?"active":""}`,onClick:()=>e(a),children:[a," (",s,")"]},a)})}),C.jsxs("div",{className:"search-input-wrap",children:[C.jsx(bx,{className:"search-icon-inside"}),C.jsx("input",{type:"text",placeholder:"Search projects or stack...",value:r,onChange:a=>n(a.target.value)})]})]}),C.jsx("div",{className:"work-grid",children:i.length===0?C.jsxs("div",{style:{padding:"3rem",textAlign:"center",color:"#888",background:"var(--surface)",borderRadius:"20px",border:"1px solid var(--border)"},children:['No projects found matching "',r,'". Try a different search term or category.']}):i.map(a=>C.jsxs("div",{className:"work-item",children:[C.jsxs("div",{className:"work-content",children:[C.jsx("span",{className:"work-category-badge",children:a.category}),C.jsx("h3",{className:"work-title",children:a.title}),C.jsx("div",{className:"work-desc",children:a.description}),C.jsx("div",{className:"work-tech",children:a.tech.map((s,o)=>C.jsx("span",{className:"tech-pill",children:s},o))}),C.jsxs("div",{className:"work-links",children:[a.liveUrl&&C.jsxs("a",{href:a.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"live-btn",children:[C.jsx(gx,{size:16}),"Live Platform"]}),a.githubUrl&&C.jsxs("a",{href:a.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[C.jsx(qg,{size:16}),"Source Code"]})]})]}),C.jsxs("div",{className:"work-metric",children:[C.jsx("span",{className:"metric-val",children:a.metric}),C.jsx("span",{className:"metric-label",children:a.metricLabel})]})]},a.id))})]})}function V1(){return C.jsxs("section",{id:"capabilities",children:[C.jsxs("h2",{className:"section-title",children:["Engine ",C.jsx("span",{children:"Capabilities"})]}),C.jsx("div",{className:"bento-grid",children:jg.map((t,e)=>{const r=e===0?"b-card b-large":e===1||e===3?"b-card b-wide":"b-card";return C.jsxs("div",{className:r,children:[C.jsxs("div",{children:[C.jsx("div",{className:"b-header",children:t.header}),C.jsx("div",{className:"b-title",style:{marginTop:"0.8rem"},children:t.title})]}),C.jsx("div",{className:"tag-cloud",children:t.tags.map((n,i)=>C.jsx("span",{children:n},i))})]},t.id)})})]})}function W1(){return C.jsxs("section",{id:"journey",children:[C.jsxs("h2",{className:"section-title",children:["Career ",C.jsx("span",{children:"Journey"})]}),C.jsx("div",{className:"journey-list",children:Xg.map((t,e)=>C.jsxs("div",{className:"j-row",children:[C.jsx("div",{className:"j-year",children:t.year}),C.jsxs("div",{className:"j-role",children:[t.role," ",C.jsx("br",{}),C.jsx("span",{style:{fontSize:"1rem",color:"var(--accent2)",fontFamily:"'Space Grotesk', sans-serif"},children:t.company})]}),C.jsx("div",{className:"j-desc",children:t.description})]},e))})]})}function j1(){const[t,e]=Xe.useState(!1);return C.jsxs("section",{id:"about",children:[C.jsxs("h2",{className:"section-title",children:["About ",C.jsx("span",{children:"Me"})]}),C.jsxs("div",{className:"about-content",children:[C.jsxs("figure",{className:"about-photo",children:[C.jsx("img",{src:"bilal.jpg",alt:_e.name,style:{display:t?"block":"none",width:"100%",aspectRatio:"4 / 5",objectFit:"cover",borderRadius:"20px",border:"1px solid var(--border)"},onLoad:()=>e(!0),onError:()=>e(!1)}),!t&&C.jsxs("div",{className:"avatar-card",children:[C.jsx("div",{className:"avatar-badge",children:_e.initials}),C.jsx("div",{className:"avatar-name",children:_e.name}),C.jsx("div",{className:"avatar-role",children:"Full Stack & QA Lead"})]}),C.jsxs("figcaption",{children:[_e.name," // ",_e.location]})]}),C.jsxs("div",{className:"about-info",children:[C.jsxs("div",{className:"about-text",children:[C.jsx("span",{className:"highlight",children:"Zero-Defect Engineering & High-Performance Web Architectures"}),C.jsx("p",{children:"I am a Full Stack Engineer and QA Automation Specialist based in Karachi, Pakistan, available for remote collaborations worldwide. I bridge the gap between creative, fluid frontend experiences and bulletproof, high-performance backend architectures."}),C.jsx("p",{children:"With commercial development experience across Next.js 14, Node.js, TypeScript, PHP, Laravel, and databases, I build production systems with automated QA testing pipelines (Playwright & Jest) to guarantee robust reliability and zero-regression deployments."})]}),C.jsx("div",{className:"stats-banner",style:{marginTop:"3.5rem"},children:Wg.map((r,n)=>C.jsxs("div",{className:"stat-item",children:[C.jsx("h4",{children:r.value}),C.jsx("p",{children:r.label})]},n))})]})]})]})}function X1(){const[t,e]=Xe.useState({name:"",email:"",subject:"",message:""}),[r,n]=Xe.useState({}),[i,a]=Xe.useState({type:"",message:""}),[s,o]=Xe.useState(!1),[l,u]=Xe.useState(!1),d=()=>{const _={};return t.name.trim()||(_.name="Please enter your name."),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email.trim())||(_.email="Please enter a valid email address (e.g. name@domain.com)."):_.email="Please enter your email address.",t.message.trim()||(_.message="Please enter your message details."),n(_),Object.keys(_).length===0},f=_=>{const{name:x,value:v}=_.target;e(c=>({...c,[x]:v})),r[x]&&n(c=>({...c,[x]:void 0}))},h=()=>{typeof navigator<"u"&&navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(_e.email).catch(()=>{}),u(!0),setTimeout(()=>u(!1),2500)},p=async _=>{if(_.preventDefault(),!s&&d()){o(!0),a({type:"",message:""});{const x=encodeURIComponent(t.subject.trim()||"Portfolio Project Inquiry"),v=encodeURIComponent(`Hi Muhammad Bilal Faisal,

Name: ${t.name.trim()}
Email: ${t.email.trim()}

Message:
${t.message.trim()}
`),c=`mailto:${_e.email}?subject=${x}&body=${v}`;window.location.href=c,setTimeout(()=>{o(!1)},1e3)}}};return C.jsx("section",{id:"contact",children:C.jsxs("div",{className:"contact-section-inner",children:[C.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[C.jsx("span",{style:{color:"var(--accent2)",textTransform:"uppercase",letterSpacing:"4px",fontSize:"0.8rem"},children:"Have an ambitious project or engineering role?"}),C.jsxs("h2",{className:"section-title",style:{marginTop:"0.8rem",marginBottom:"1rem"},children:["Let's build something ",C.jsx("span",{children:"extraordinary"})]}),C.jsxs("p",{style:{color:"#888",fontSize:"0.95rem"},children:["Based in ",_e.location," • Available for remote worldwide contracts & engineering teams"]})]}),C.jsxs("div",{className:"contact-form-card",children:[i.message&&C.jsx("div",{className:`form-status-alert ${i.type}`,children:i.message}),C.jsx("form",{onSubmit:p,noValidate:!0,children:C.jsxs("div",{className:"form-grid",children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"contact-name",children:"Your Name *"}),C.jsx("input",{id:"contact-name",type:"text",name:"name",placeholder:"e.g. John Doe",value:t.name,onChange:f,"aria-invalid":!!r.name}),r.name&&C.jsx("span",{className:"field-error-text",style:{color:"var(--accent)",fontSize:"0.78rem",marginTop:"4px",display:"block"},children:r.name})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"contact-email",children:"Your Email *"}),C.jsx("input",{id:"contact-email",type:"email",name:"email",placeholder:"e.g. john@enterprise.com",value:t.email,onChange:f,"aria-invalid":!!r.email}),r.email&&C.jsx("span",{className:"field-error-text",style:{color:"var(--accent)",fontSize:"0.78rem",marginTop:"4px",display:"block"},children:r.email})]}),C.jsxs("div",{className:"form-group full-width",children:[C.jsx("label",{htmlFor:"contact-subject",children:"Project Subject"}),C.jsx("input",{id:"contact-subject",type:"text",name:"subject",placeholder:"e.g. Full-Stack Web Architecture / QA Automation",value:t.subject,onChange:f})]}),C.jsxs("div",{className:"form-group full-width",children:[C.jsx("label",{htmlFor:"contact-message",children:"Message Details *"}),C.jsx("textarea",{id:"contact-message",name:"message",rows:4,placeholder:"Describe your project requirements, timeline, or engineering goals...",value:t.message,onChange:f,"aria-invalid":!!r.message}),r.message&&C.jsx("span",{className:"field-error-text",style:{color:"var(--accent)",fontSize:"0.78rem",marginTop:"4px",display:"block"},children:r.message})]}),C.jsxs("div",{className:"form-group full-width",style:{marginTop:"0.5rem"},children:[C.jsxs("button",{type:"submit",className:"submit-btn",disabled:s,children:[C.jsx(Ex,{size:16}),C.jsx("span",{children:s?"Processing...":"Send via your email app"})]}),C.jsxs("p",{style:{fontSize:"0.78rem",color:"#777",marginTop:"0.6rem"},children:["Clicking will open your default email app with a pre-filled draft to ",_e.email,". Or use the Copy Email button below."]})]})]})})]}),C.jsxs("div",{className:"contact-quick-actions",children:[C.jsxs("a",{className:"tech-pill2",href:`mailto:${_e.email}`,children:[C.jsx($g,{size:16}),"Email Directly"]}),C.jsxs("button",{id:"copy-email-btn",type:"button",className:"tech-pill2",onClick:h,style:{cursor:"pointer"},children:[l?C.jsx(px,{size:16,color:"#4ade80"}):C.jsx(mx,{size:16}),C.jsx("span",{children:l?"EMAIL COPIED!":"COPY EMAIL"})]}),C.jsxs("a",{className:"tech-pill2",href:_e.whatsappUrl,target:"_blank",rel:"noopener noreferrer",style:{borderColor:"rgba(37, 211, 102, 0.4)",color:"#4ade80"},children:[C.jsx(yx,{size:16}),"WhatsApp Desk"]}),C.jsxs("a",{className:"tech-pill2",href:_e.instagramUrl,target:"_blank",rel:"noopener noreferrer",style:{borderColor:"rgba(228, 64, 95, 0.4)",color:"#ff809b"},children:[C.jsx(Yg,{size:16}),"Instagram"]}),C.jsxs("a",{className:"tech-pill2",href:_e.resumeUrl,download:_e.resumeDownloadName,target:"_blank",rel:"noopener noreferrer",style:{borderColor:"var(--accent)",color:"#ff9cb3"},children:[C.jsx(Rc,{size:16}),"Resume CV"]})]})]})})}function q1(){const[t,e]=Xe.useState(!1);Xe.useEffect(()=>{const n=()=>{e(window.scrollY>400)};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]);const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return C.jsxs(C.Fragment,{children:[C.jsxs("footer",{children:[C.jsxs("p",{children:["Architected & Engineered by ",_e.name," // ",_e.primaryTitle]}),C.jsx("p",{style:{fontSize:"0.8rem",color:"#666",marginTop:"0.6rem"},children:"Next.js • Node.js • React • TypeScript • Automated QA • Cloud Systems"}),C.jsx("p",{style:{fontSize:"0.82rem",color:"#888",marginTop:"0.4rem"},children:_e.copyrightText})]}),t&&C.jsx("button",{id:"back-to-top",onClick:r,"aria-label":"Scroll back to top",title:"Back to Top",children:C.jsx(fx,{size:20})})]})}function Y1({isOpen:t,onClose:e}){const[r,n]=Xe.useState([{type:"system",text:`⚡ ${_e.name} — Developer Terminal v2.0.0
Type 'help' to view available system commands.`}]),[i,a]=Xe.useState(""),[s,o]=Xe.useState(-1),[l,u]=Xe.useState([]),d=Xe.useRef(null),f=Xe.useRef(null);if(Xe.useEffect(()=>{t&&setTimeout(()=>{var p;return(p=f.current)==null?void 0:p.focus()},100)},[t]),Xe.useEffect(()=>{var p;(p=d.current)==null||p.scrollIntoView({behavior:"smooth"})},[r]),!t)return null;const h=p=>{if(p.key==="ArrowUp"){if(p.preventDefault(),l.length>0){const m=s===-1?l.length-1:Math.max(0,s-1);o(m),a(l[m])}return}if(p.key==="ArrowDown"){if(p.preventDefault(),l.length>0){const m=s+1;m>=l.length?(o(-1),a("")):(o(m),a(l[m]))}return}if(p.key!=="Enter")return;const _=i.trim();if(!_)return;u(m=>[...m,_]),o(-1);const x=_.toLowerCase();let v="",c=!1;switch(x){case"help":v=`Available Commands:
  help       - Display this list of commands
  whoami     - Learn about ${_e.name}
  skills     - View full-stack tech stack & QA tools
  projects   - Output catalog of production projects
  exp        - View career journey & engineering timeline
  contact    - Get direct contact links (Email, WhatsApp, GitHub)
  sudo hire  - Fast-track interview invitation
  clear      - Clear terminal screen
  exit       - Close this terminal window`;break;case"whoami":v=`${_e.name}
Role: ${_e.primaryTitle}
Focus: ${_e.secondaryTitle}
Location: ${_e.location}
Bio: ${_e.tagline}`;break;case"skills":v=jg.map(m=>`[${m.header}]:
  ${m.tags.join(", ")}`).join(`

`);break;case"projects":v=Ro.map((m,g)=>`${g+1}. ${m.title} [${m.category}]
   Stack: ${m.tech.join(", ")}${m.githubUrl?`
   Code:  ${m.githubUrl}`:""}${m.liveUrl?`
   Live:  ${m.liveUrl}`:""}`).join(`

`);break;case"exp":v=Xg.map(m=>`• ${m.year} — ${m.role} (${m.company})
  ${m.description}`).join(`

`);break;case"contact":v=`Email:     ${_e.email}
WhatsApp:  ${_e.phone} (${_e.whatsappUrl})
GitHub:    ${_e.githubUrl}${`
Instagram: ${_e.instagramUrl}`}`;break;case"sudo hire":v=`ACCESS GRANTED! 🎉
Candidate Status: Available for Immediate High-Impact Remote Roles & Contracts.
Email directly:   ${_e.email}
WhatsApp desk:    ${_e.phone}`;break;case"clear":n([]),a("");return;case"exit":e();return;default:v=`Command not recognized: '${_}'. Type 'help' for valid commands.`,c=!0;break}n(m=>[...m,{type:"user",text:`$ ${_}`},{type:c?"error":"output",text:v}]),a("")};return C.jsx("div",{className:"terminal-overlay",onClick:e,children:C.jsxs("div",{className:"terminal-window",onClick:p=>p.stopPropagation(),role:"dialog","aria-modal":"true",children:[C.jsxs("div",{className:"terminal-topbar",children:[C.jsxs("div",{className:"terminal-dots",children:[C.jsx("span",{className:"dot dot-red",onClick:e,title:"Close Terminal"}),C.jsx("span",{className:"dot dot-yellow",title:"Minimize"}),C.jsx("span",{className:"dot dot-green",title:"Expand"})]}),C.jsx("div",{className:"terminal-title",children:"bash — bilalfaisal@portfolio:~"}),C.jsx("button",{type:"button",className:"terminal-close-btn",onClick:e,children:"✕"})]}),C.jsxs("div",{className:"terminal-screen",children:[r.map((p,_)=>C.jsx("div",{className:`term-line term-${p.type}`,children:p.text},_)),C.jsxs("div",{className:"term-input-line",children:[C.jsx("span",{className:"term-prompt",children:"bilal@mbf:~$"}),C.jsx("input",{ref:f,type:"text",value:i,onChange:p=>a(p.target.value),onKeyDown:h,autoFocus:!0,spellCheck:"false",autoComplete:"off"})]}),C.jsx("div",{ref:d})]})]})})}function $1(){const[t,e]=Xe.useState(!1);return C.jsxs(C.Fragment,{children:[C.jsx(lx,{}),C.jsx(ux,{}),C.jsx(Tx,{onOpenTerminal:()=>e(!0)}),C.jsxs("main",{children:[C.jsx(B1,{}),C.jsx(H1,{}),C.jsx(G1,{}),C.jsx(V1,{}),C.jsx(W1,{}),C.jsx(j1,{}),C.jsx(X1,{})]}),C.jsx(q1,{}),C.jsx(Y1,{isOpen:t,onClose:()=>e(!1)})]})}ku.createRoot(document.getElementById("root")).render(C.jsx(Bp.StrictMode,{children:C.jsx($1,{})}));
