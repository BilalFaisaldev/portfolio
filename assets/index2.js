(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();function Uv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lp={exports:{}},ol={},Pp={exports:{}},Ge={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var xs=Symbol.for("react.element"),Iv=Symbol.for("react.portal"),Ov=Symbol.for("react.fragment"),kv=Symbol.for("react.strict_mode"),Fv=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Bv=Symbol.for("react.context"),Hv=Symbol.for("react.forward_ref"),Gv=Symbol.for("react.suspense"),Vv=Symbol.for("react.memo"),Wv=Symbol.for("react.lazy"),Kd=Symbol.iterator;function jv(t){return t===null||typeof t!="object"?null:(t=Kd&&t[Kd]||t["@@iterator"],typeof t=="function"?t:null)}var Np={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dp=Object.assign,Up={};function ya(t,e,r){this.props=t,this.context=e,this.refs=Up,this.updater=r||Np}ya.prototype.isReactComponent={};ya.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ya.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ip(){}Ip.prototype=ya.prototype;function Bc(t,e,r){this.props=t,this.context=e,this.refs=Up,this.updater=r||Np}var Hc=Bc.prototype=new Ip;Hc.constructor=Bc;Dp(Hc,ya.prototype);Hc.isPureReactComponent=!0;var Zd=Array.isArray,Op=Object.prototype.hasOwnProperty,Gc={current:null},kp={key:!0,ref:!0,__self:!0,__source:!0};function Fp(t,e,r){var i,n={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)Op.call(e,i)&&!kp.hasOwnProperty(i)&&(n[i]=e[i]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];n.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)n[i]===void 0&&(n[i]=o[i]);return{$$typeof:xs,type:t,key:a,ref:s,props:n,_owner:Gc.current}}function Xv(t,e){return{$$typeof:xs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vc(t){return typeof t=="object"&&t!==null&&t.$$typeof===xs}function qv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Qd=/\/+/g;function Nl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qv(""+t.key):e.toString(36)}function vo(t,e,r,i,n){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case xs:case Iv:s=!0}}if(s)return s=t,n=n(s),t=i===""?"."+Nl(s,0):i,Zd(n)?(r="",t!=null&&(r=t.replace(Qd,"$&/")+"/"),vo(n,e,r,"",function(u){return u})):n!=null&&(Vc(n)&&(n=Xv(n,r+(!n.key||s&&s.key===n.key?"":(""+n.key).replace(Qd,"$&/")+"/")+t)),e.push(n)),1;if(s=0,i=i===""?".":i+":",Zd(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+Nl(a,o);s+=vo(a,e,r,l,n)}else if(l=jv(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+Nl(a,o++),s+=vo(a,e,r,l,n);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ps(t,e,r){if(t==null)return t;var i=[],n=0;return vo(t,i,"","",function(a){return e.call(r,a,n++)}),i}function Yv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},_o={transition:null},$v={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:_o,ReactCurrentOwner:Gc};function zp(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Ps,forEach:function(t,e,r){Ps(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ps(t,function(){e++}),e},toArray:function(t){return Ps(t,function(e){return e})||[]},only:function(t){if(!Vc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=ya;Ge.Fragment=Ov;Ge.Profiler=Fv;Ge.PureComponent=Bc;Ge.StrictMode=kv;Ge.Suspense=Gv;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;Ge.act=zp;Ge.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Dp({},t.props),n=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=Gc.current),e.key!==void 0&&(n=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Op.call(e,l)&&!kp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:xs,type:t.type,key:n,ref:a,props:i,_owner:s}};Ge.createContext=function(t){return t={$$typeof:Bv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zv,_context:t},t.Consumer=t};Ge.createElement=Fp;Ge.createFactory=function(t){var e=Fp.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Hv,render:t}};Ge.isValidElement=Vc;Ge.lazy=function(t){return{$$typeof:Wv,_payload:{_status:-1,_result:t},_init:Yv}};Ge.memo=function(t,e){return{$$typeof:Vv,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=_o.transition;_o.transition={};try{t()}finally{_o.transition=e}};Ge.unstable_act=zp;Ge.useCallback=function(t,e){return $t.current.useCallback(t,e)};Ge.useContext=function(t){return $t.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return $t.current.useEffect(t,e)};Ge.useId=function(){return $t.current.useId()};Ge.useImperativeHandle=function(t,e,r){return $t.current.useImperativeHandle(t,e,r)};Ge.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return $t.current.useMemo(t,e)};Ge.useReducer=function(t,e,r){return $t.current.useReducer(t,e,r)};Ge.useRef=function(t){return $t.current.useRef(t)};Ge.useState=function(t){return $t.current.useState(t)};Ge.useSyncExternalStore=function(t,e,r){return $t.current.useSyncExternalStore(t,e,r)};Ge.useTransition=function(){return $t.current.useTransition()};Ge.version="18.3.1";Pp.exports=Ge;var Xe=Pp.exports;const Bp=Uv(Xe);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Kv=Xe,Zv=Symbol.for("react.element"),Qv=Symbol.for("react.fragment"),Jv=Object.prototype.hasOwnProperty,e_=Kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t_={key:!0,ref:!0,__self:!0,__source:!0};function Hp(t,e,r){var i,n={},a=null,s=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Jv.call(e,i)&&!t_.hasOwnProperty(i)&&(n[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)n[i]===void 0&&(n[i]=e[i]);return{$$typeof:Zv,type:t,key:a,ref:s,props:n,_owner:e_.current}}ol.Fragment=Qv;ol.jsx=Hp;ol.jsxs=Hp;Lp.exports=ol;var R=Lp.exports,ku={},Gp={exports:{}},hr={},Vp={exports:{}},Wp={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(D,I){var j=D.length;D.push(I);e:for(;0<j;){var Y=j-1>>>1,re=D[Y];if(0<n(re,I))D[Y]=I,D[j]=re,j=Y;else break e}}function r(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var I=D[0],j=D.pop();if(j!==I){D[0]=j;e:for(var Y=0,re=D.length,H=re>>>1;Y<H;){var K=2*(Y+1)-1,de=D[K],he=K+1,me=D[he];if(0>n(de,j))he<re&&0>n(me,de)?(D[Y]=me,D[he]=j,Y=he):(D[Y]=de,D[K]=j,Y=K);else if(he<re&&0>n(me,j))D[Y]=me,D[he]=j,Y=he;else break e}}return I}function n(D,I){var j=D.sortIndex-I.sortIndex;return j!==0?j:D.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],u=[],d=1,f=null,h=3,p=!1,_=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var I=r(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=D)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=r(u)}}function S(D){if(x=!1,g(D),!_)if(r(l)!==null)_=!0,q(C);else{var I=r(u);I!==null&&$(S,I.startTime-D)}}function C(D,I){_=!1,x&&(x=!1,c(P),P=-1),p=!0;var j=h;try{for(g(I),f=r(l);f!==null&&(!(f.expirationTime>I)||D&&!G());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,h=f.priorityLevel;var re=Y(f.expirationTime<=I);I=t.unstable_now(),typeof re=="function"?f.callback=re:f===r(l)&&i(l),g(I)}else i(l);f=r(l)}if(f!==null)var H=!0;else{var K=r(u);K!==null&&$(S,K.startTime-I),H=!1}return H}finally{f=null,h=j,p=!1}}var A=!1,w=null,P=-1,y=5,E=-1;function G(){return!(t.unstable_now()-E<y)}function X(){if(w!==null){var D=t.unstable_now();E=D;var I=!0;try{I=w(!0,D)}finally{I?se():(A=!1,w=null)}}else A=!1}var se;if(typeof m=="function")se=function(){m(X)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,V=N.port2;N.port1.onmessage=X,se=function(){V.postMessage(null)}}else se=function(){v(X,0)};function q(D){w=D,A||(A=!0,se())}function $(D,I){P=v(function(){D(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,q(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var j=h;h=I;try{return D()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=h;h=D;try{return I()}finally{h=j}},t.unstable_scheduleCallback=function(D,I,j){var Y=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Y+j:Y):j=Y,D){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=j+re,D={id:d++,callback:I,priorityLevel:D,startTime:j,expirationTime:re,sortIndex:-1},j>Y?(D.sortIndex=j,e(u,D),r(l)===null&&D===r(u)&&(x?(c(P),P=-1):x=!0,$(S,j-Y))):(D.sortIndex=re,e(l,D),_||p||(_=!0,q(C))),D},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(D){var I=h;return function(){var j=h;h=I;try{return D.apply(this,arguments)}finally{h=j}}}})(Wp);Vp.exports=Wp;var r_=Vp.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var i_=Xe,dr=r_;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jp=new Set,es={};function Sn(t,e){ua(t,e),ua(t+"Capture",e)}function ua(t,e){for(es[t]=e,t=0;t<e.length;t++)jp.add(e[t])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,n_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jd={},eh={};function a_(t){return Fu.call(eh,t)?!0:Fu.call(Jd,t)?!1:n_.test(t)?eh[t]=!0:(Jd[t]=!0,!1)}function s_(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o_(t,e,r,i){if(e===null||typeof e>"u"||s_(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,r,i,n,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wc=/[\-:]([a-z])/g;function jc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wc,jc);Nt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wc,jc);Nt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wc,jc);Nt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xc(t,e,r,i){var n=Nt.hasOwnProperty(e)?Nt[e]:null;(n!==null?n.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o_(e,r,n,i)&&(r=null),i||n===null?a_(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):n.mustUseProperty?t[n.propertyName]=r===null?n.type===3?!1:"":r:(e=n.attributeName,i=n.attributeNamespace,r===null?t.removeAttribute(e):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var mi=i_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ns=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),Xp=Symbol.for("react.provider"),qp=Symbol.for("react.context"),Yc=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),$c=Symbol.for("react.memo"),Si=Symbol.for("react.lazy"),Yp=Symbol.for("react.offscreen"),th=Symbol.iterator;function wa(t){return t===null||typeof t!="object"?null:(t=th&&t[th]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Dl;function za(t){if(Dl===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Dl=e&&e[1]||""}return`
`+Dl+t}var Ul=!1;function Il(t,e){if(!t||Ul)return"";Ul=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var n=u.stack.split(`
`),a=i.stack.split(`
`),s=n.length-1,o=a.length-1;1<=s&&0<=o&&n[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(n[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||n[s]!==a[o]){var l=`
`+n[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{Ul=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?za(t):""}function l_(t){switch(t.tag){case 5:return za(t.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 2:case 15:return t=Il(t.type,!1),t;case 11:return t=Il(t.type.render,!1),t;case 1:return t=Il(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gn:return"Fragment";case Hn:return"Portal";case zu:return"Profiler";case qc:return"StrictMode";case Bu:return"Suspense";case Hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qp:return(t.displayName||"Context")+".Consumer";case Xp:return(t._context.displayName||"Context")+".Provider";case Yc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $c:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case Si:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function u_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $p(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c_(t){var e=$p(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ds(t){t._valueTracker||(t._valueTracker=c_(t))}function Kp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=$p(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function Po(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vu(t,e){var r=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function rh(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=Hi(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zp(t,e){e=e.checked,e!=null&&Xc(t,"checked",e,!1)}function Wu(t,e){Zp(t,e);var r=Hi(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ju(t,e.type,r):e.hasOwnProperty("defaultValue")&&ju(t,e.type,Hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ih(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function ju(t,e,r){(e!=="number"||Po(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ba=Array.isArray;function ta(t,e,r,i){if(t=t.options,e){e={};for(var n=0;n<r.length;n++)e["$"+r[n]]=!0;for(r=0;r<t.length;r++)n=e.hasOwnProperty("$"+t[r].value),t[r].selected!==n&&(t[r].selected=n),n&&i&&(t[r].defaultSelected=!0)}else{for(r=""+Hi(r),e=null,n=0;n<t.length;n++){if(t[n].value===r){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nh(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(Z(92));if(Ba(r)){if(1<r.length)throw Error(Z(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Hi(r)}}function Qp(t,e){var r=Hi(e.value),i=Hi(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function ah(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Us,em=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,n){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,n)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Us=Us||document.createElement("div"),Us.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Us.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ts(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d_=["Webkit","ms","Moz","O"];Object.keys(Wa).forEach(function(t){d_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wa[e]=Wa[t]})});function tm(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Wa.hasOwnProperty(t)&&Wa[t]?(""+e).trim():e+"px"}function rm(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=tm(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,n):t[r]=n}}var h_=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(h_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ku=null;function Kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zu=null,ra=null,ia=null;function sh(t){if(t=Ss(t)){if(typeof Zu!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=hl(e),Zu(t.stateNode,t.type,e))}}function im(t){ra?ia?ia.push(t):ia=[t]:ra=t}function nm(){if(ra){var t=ra,e=ia;if(ia=ra=null,sh(t),e)for(t=0;t<e.length;t++)sh(e[t])}}function am(t,e){return t(e)}function sm(){}var Ol=!1;function om(t,e,r){if(Ol)return t(e,r);Ol=!0;try{return am(t,e,r)}finally{Ol=!1,(ra!==null||ia!==null)&&(sm(),nm())}}function rs(t,e){var r=t.stateNode;if(r===null)return null;var i=hl(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(Z(231,e,typeof r));return r}var Qu=!1;if(ci)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{Qu=!1}function f_(t,e,r,i,n,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(d){this.onError(d)}}var ja=!1,No=null,Do=!1,Ju=null,p_={onError:function(t){ja=!0,No=t}};function m_(t,e,r,i,n,a,s,o,l){ja=!1,No=null,f_.apply(p_,arguments)}function g_(t,e,r,i,n,a,s,o,l){if(m_.apply(this,arguments),ja){if(ja){var u=No;ja=!1,No=null}else throw Error(Z(198));Do||(Do=!0,Ju=u)}}function En(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function lm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oh(t){if(En(t)!==t)throw Error(Z(188))}function v_(t){var e=t.alternate;if(!e){if(e=En(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var r=t,i=e;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return oh(n),t;if(a===i)return oh(n),e;a=a.sibling}throw Error(Z(188))}if(r.return!==i.return)r=n,i=a;else{for(var s=!1,o=n.child;o;){if(o===r){s=!0,r=n,i=a;break}if(o===i){s=!0,i=n,r=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===r){s=!0,r=a,i=n;break}if(o===i){s=!0,i=a,r=n;break}o=o.sibling}if(!s)throw Error(Z(189))}}if(r.alternate!==i)throw Error(Z(190))}if(r.tag!==3)throw Error(Z(188));return r.stateNode.current===r?t:e}function um(t){return t=v_(t),t!==null?cm(t):null}function cm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cm(t);if(e!==null)return e;t=t.sibling}return null}var dm=dr.unstable_scheduleCallback,lh=dr.unstable_cancelCallback,__=dr.unstable_shouldYield,x_=dr.unstable_requestPaint,pt=dr.unstable_now,y_=dr.unstable_getCurrentPriorityLevel,Zc=dr.unstable_ImmediatePriority,hm=dr.unstable_UserBlockingPriority,Uo=dr.unstable_NormalPriority,b_=dr.unstable_LowPriority,fm=dr.unstable_IdlePriority,ll=null,Xr=null;function S_(t){if(Xr&&typeof Xr.onCommitFiberRoot=="function")try{Xr.onCommitFiberRoot(ll,t,void 0,(t.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:T_,E_=Math.log,M_=Math.LN2;function T_(t){return t>>>=0,t===0?32:31-(E_(t)/M_|0)|0}var Is=64,Os=4194304;function Ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Io(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,n=t.suspendedLanes,a=t.pingedLanes,s=r&268435455;if(s!==0){var o=s&~n;o!==0?i=Ha(o):(a&=s,a!==0&&(i=Ha(a)))}else s=r&~n,s!==0?i=Ha(s):a!==0&&(i=Ha(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&n)&&(n=i&-i,a=e&-e,n>=a||n===16&&(a&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-kr(e),n=1<<r,i|=t[r],e&=~n;return i}function w_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A_(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-kr(a),o=1<<s,l=n[s];l===-1?(!(o&r)||o&i)&&(n[s]=w_(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function ec(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pm(){var t=Is;return Is<<=1,!(Is&4194240)&&(Is=64),t}function kl(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function ys(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kr(e),t[e]=r}function R_(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var n=31-kr(r),a=1<<n;e[n]=0,i[n]=-1,t[n]=-1,r&=~a}}function Qc(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-kr(r),n=1<<i;n&e|t[i]&e&&(t[i]|=e),r&=~n}}var Ke=0;function mm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gm,Jc,vm,_m,xm,tc=!1,ks=[],Li=null,Pi=null,Ni=null,is=new Map,ns=new Map,Mi=[],C_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(t,e){switch(t){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Pi=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":is.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(e.pointerId)}}function Ra(t,e,r,i,n,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[n]},e!==null&&(e=Ss(e),e!==null&&Jc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function L_(t,e,r,i,n){switch(e){case"focusin":return Li=Ra(Li,t,e,r,i,n),!0;case"dragenter":return Pi=Ra(Pi,t,e,r,i,n),!0;case"mouseover":return Ni=Ra(Ni,t,e,r,i,n),!0;case"pointerover":var a=n.pointerId;return is.set(a,Ra(is.get(a)||null,t,e,r,i,n)),!0;case"gotpointercapture":return a=n.pointerId,ns.set(a,Ra(ns.get(a)||null,t,e,r,i,n)),!0}return!1}function ym(t){var e=on(t.target);if(e!==null){var r=En(e);if(r!==null){if(e=r.tag,e===13){if(e=lm(r),e!==null){t.blockedOn=e,xm(t.priority,function(){vm(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=rc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);Ku=i,r.target.dispatchEvent(i),Ku=null}else return e=Ss(r),e!==null&&Jc(e),t.blockedOn=r,!1;e.shift()}return!0}function ch(t,e,r){xo(t)&&r.delete(e)}function P_(){tc=!1,Li!==null&&xo(Li)&&(Li=null),Pi!==null&&xo(Pi)&&(Pi=null),Ni!==null&&xo(Ni)&&(Ni=null),is.forEach(ch),ns.forEach(ch)}function Ca(t,e){t.blockedOn===e&&(t.blockedOn=null,tc||(tc=!0,dr.unstable_scheduleCallback(dr.unstable_NormalPriority,P_)))}function as(t){function e(n){return Ca(n,t)}if(0<ks.length){Ca(ks[0],t);for(var r=1;r<ks.length;r++){var i=ks[r];i.blockedOn===t&&(i.blockedOn=null)}}for(Li!==null&&Ca(Li,t),Pi!==null&&Ca(Pi,t),Ni!==null&&Ca(Ni,t),is.forEach(e),ns.forEach(e),r=0;r<Mi.length;r++)i=Mi[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<Mi.length&&(r=Mi[0],r.blockedOn===null);)ym(r),r.blockedOn===null&&Mi.shift()}var na=mi.ReactCurrentBatchConfig,Oo=!0;function N_(t,e,r,i){var n=Ke,a=na.transition;na.transition=null;try{Ke=1,ed(t,e,r,i)}finally{Ke=n,na.transition=a}}function D_(t,e,r,i){var n=Ke,a=na.transition;na.transition=null;try{Ke=4,ed(t,e,r,i)}finally{Ke=n,na.transition=a}}function ed(t,e,r,i){if(Oo){var n=rc(t,e,r,i);if(n===null)ql(t,e,i,ko,r),uh(t,i);else if(L_(n,t,e,r,i))i.stopPropagation();else if(uh(t,i),e&4&&-1<C_.indexOf(t)){for(;n!==null;){var a=Ss(n);if(a!==null&&gm(a),a=rc(t,e,r,i),a===null&&ql(t,e,i,ko,r),a===n)break;n=a}n!==null&&i.stopPropagation()}else ql(t,e,i,null,r)}}var ko=null;function rc(t,e,r,i){if(ko=null,t=Kc(i),t=on(t),t!==null)if(e=En(t),e===null)t=null;else if(r=e.tag,r===13){if(t=lm(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ko=t,null}function bm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y_()){case Zc:return 1;case hm:return 4;case Uo:case b_:return 16;case fm:return 536870912;default:return 16}default:return 16}}var wi=null,td=null,yo=null;function Sm(){if(yo)return yo;var t,e=td,r=e.length,i,n="value"in wi?wi.value:wi.textContent,a=n.length;for(t=0;t<r&&e[t]===n[t];t++);var s=r-t;for(i=1;i<=s&&e[r-i]===n[a-i];i++);return yo=n.slice(t,1<i?1-i:void 0)}function bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fs(){return!0}function dh(){return!1}function fr(t){function e(r,i,n,a,s){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(r=t[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Fs:dh,this.isPropagationStopped=dh,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),e}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=fr(ba),bs=ct({},ba,{view:0,detail:0}),U_=fr(bs),Fl,zl,La,ul=ct({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==La&&(La&&t.type==="mousemove"?(Fl=t.screenX-La.screenX,zl=t.screenY-La.screenY):zl=Fl=0,La=t),Fl)},movementY:function(t){return"movementY"in t?t.movementY:zl}}),hh=fr(ul),I_=ct({},ul,{dataTransfer:0}),O_=fr(I_),k_=ct({},bs,{relatedTarget:0}),Bl=fr(k_),F_=ct({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),z_=fr(F_),B_=ct({},ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H_=fr(B_),G_=ct({},ba,{data:0}),fh=fr(G_),V_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j_[t])?!!e[t]:!1}function id(){return X_}var q_=ct({},bs,{key:function(t){if(t.key){var e=V_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(t){return t.type==="keypress"?bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y_=fr(q_),$_=ct({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=fr($_),K_=ct({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),Z_=fr(K_),Q_=ct({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),J_=fr(Q_),e0=ct({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=fr(e0),r0=[9,13,27,32],nd=ci&&"CompositionEvent"in window,Xa=null;ci&&"documentMode"in document&&(Xa=document.documentMode);var i0=ci&&"TextEvent"in window&&!Xa,Em=ci&&(!nd||Xa&&8<Xa&&11>=Xa),mh=" ",gh=!1;function Mm(t,e){switch(t){case"keyup":return r0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vn=!1;function n0(t,e){switch(t){case"compositionend":return Tm(e);case"keypress":return e.which!==32?null:(gh=!0,mh);case"textInput":return t=e.data,t===mh&&gh?null:t;default:return null}}function a0(t,e){if(Vn)return t==="compositionend"||!nd&&Mm(t,e)?(t=Sm(),yo=td=wi=null,Vn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Em&&e.locale!=="ko"?null:e.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!s0[t.type]:e==="textarea"}function wm(t,e,r,i){im(i),e=Fo(e,"onChange"),0<e.length&&(r=new rd("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var qa=null,ss=null;function o0(t){km(t,0)}function cl(t){var e=Xn(t);if(Kp(e))return t}function l0(t,e){if(t==="change")return e}var Am=!1;if(ci){var Hl;if(ci){var Gl="oninput"in document;if(!Gl){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),Gl=typeof _h.oninput=="function"}Hl=Gl}else Hl=!1;Am=Hl&&(!document.documentMode||9<document.documentMode)}function xh(){qa&&(qa.detachEvent("onpropertychange",Rm),ss=qa=null)}function Rm(t){if(t.propertyName==="value"&&cl(ss)){var e=[];wm(e,ss,t,Kc(t)),om(o0,e)}}function u0(t,e,r){t==="focusin"?(xh(),qa=e,ss=r,qa.attachEvent("onpropertychange",Rm)):t==="focusout"&&xh()}function c0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(ss)}function d0(t,e){if(t==="click")return cl(e)}function h0(t,e){if(t==="input"||t==="change")return cl(e)}function f0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zr=typeof Object.is=="function"?Object.is:f0;function os(t,e){if(zr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!Fu.call(e,n)||!zr(t[n],e[n]))return!1}return!0}function yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bh(t,e){var r=yh(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=yh(r)}}function Cm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lm(){for(var t=window,e=Po();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Po(t.document)}return e}function ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function p0(t){var e=Lm(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Cm(r.ownerDocument.documentElement,r)){if(i!==null&&ad(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var n=r.textContent.length,a=Math.min(i.start,n);i=i.end===void 0?a:Math.min(i.end,n),!t.extend&&a>i&&(n=i,i=a,a=n),n=bh(r,a);var s=bh(r,i);n&&s&&(t.rangeCount!==1||t.anchorNode!==n.node||t.anchorOffset!==n.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var m0=ci&&"documentMode"in document&&11>=document.documentMode,Wn=null,ic=null,Ya=null,nc=!1;function Sh(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;nc||Wn==null||Wn!==Po(i)||(i=Wn,"selectionStart"in i&&ad(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ya&&os(Ya,i)||(Ya=i,i=Fo(ic,"onSelect"),0<i.length&&(e=new rd("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=Wn)))}function zs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var jn={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},Vl={},Pm={};ci&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function dl(t){if(Vl[t])return Vl[t];if(!jn[t])return t;var e=jn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Pm)return Vl[t]=e[r];return t}var Nm=dl("animationend"),Dm=dl("animationiteration"),Um=dl("animationstart"),Im=dl("transitionend"),Om=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){Om.set(t,e),Sn(e,[t])}for(var Wl=0;Wl<Eh.length;Wl++){var jl=Eh[Wl],g0=jl.toLowerCase(),v0=jl[0].toUpperCase()+jl.slice(1);Wi(g0,"on"+v0)}Wi(Nm,"onAnimationEnd");Wi(Dm,"onAnimationIteration");Wi(Um,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(Im,"onTransitionEnd");ua("onMouseEnter",["mouseout","mouseover"]);ua("onMouseLeave",["mouseout","mouseover"]);ua("onPointerEnter",["pointerout","pointerover"]);ua("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function Mh(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,g_(i,e,void 0,t),t.currentTarget=null}function km(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],n=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&n.isPropagationStopped())break e;Mh(n,o,u),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==a&&n.isPropagationStopped())break e;Mh(n,o,u),a=l}}}if(Do)throw t=Ju,Do=!1,Ju=null,t}function it(t,e){var r=e[uc];r===void 0&&(r=e[uc]=new Set);var i=t+"__bubble";r.has(i)||(Fm(e,t,2,!1),r.add(i))}function Xl(t,e,r){var i=0;e&&(i|=4),Fm(r,t,i,e)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function ls(t){if(!t[Bs]){t[Bs]=!0,jp.forEach(function(r){r!=="selectionchange"&&(_0.has(r)||Xl(r,!1,t),Xl(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bs]||(e[Bs]=!0,Xl("selectionchange",!1,e))}}function Fm(t,e,r,i){switch(bm(e)){case 1:var n=N_;break;case 4:n=D_;break;default:n=ed}r=n.bind(null,e,r,t),n=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,r,{capture:!0,passive:n}):t.addEventListener(e,r,!0):n!==void 0?t.addEventListener(e,r,{passive:n}):t.addEventListener(e,r,!1)}function ql(t,e,r,i,n){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===n||o.nodeType===8&&o.parentNode===n)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;s=s.return}for(;o!==null;){if(s=on(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}om(function(){var u=a,d=Kc(r),f=[];e:{var h=Om.get(t);if(h!==void 0){var p=rd,_=t;switch(t){case"keypress":if(bo(r)===0)break e;case"keydown":case"keyup":p=Y_;break;case"focusin":_="focus",p=Bl;break;case"focusout":_="blur",p=Bl;break;case"beforeblur":case"afterblur":p=Bl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=O_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Z_;break;case Nm:case Dm:case Um:p=z_;break;case Im:p=J_;break;case"scroll":p=U_;break;case"wheel":p=t0;break;case"copy":case"cut":case"paste":p=H_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ph}var x=(e&4)!==0,v=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var m=u,g;m!==null;){g=m;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,c!==null&&(S=rs(m,c),S!=null&&x.push(us(m,S,g)))),v)break;m=m.return}0<x.length&&(h=new p(h,_,null,r,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&r!==Ku&&(_=r.relatedTarget||r.fromElement)&&(on(_)||_[di]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=r.relatedTarget||r.toElement,p=u,_=_?on(_):null,_!==null&&(v=En(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=hh,S="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=ph,S="onPointerLeave",c="onPointerEnter",m="pointer"),v=p==null?h:Xn(p),g=_==null?h:Xn(_),h=new x(S,m+"leave",p,r,d),h.target=v,h.relatedTarget=g,S=null,on(d)===u&&(x=new x(c,m+"enter",_,r,d),x.target=g,x.relatedTarget=v,S=x),v=S,p&&_)t:{for(x=p,c=_,m=0,g=x;g;g=Mn(g))m++;for(g=0,S=c;S;S=Mn(S))g++;for(;0<m-g;)x=Mn(x),m--;for(;0<g-m;)c=Mn(c),g--;for(;m--;){if(x===c||c!==null&&x===c.alternate)break t;x=Mn(x),c=Mn(c)}x=null}else x=null;p!==null&&Th(f,h,p,x,!1),_!==null&&v!==null&&Th(f,v,_,x,!0)}}e:{if(h=u?Xn(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=l0;else if(vh(h))if(Am)C=h0;else{C=c0;var A=u0}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=d0);if(C&&(C=C(t,u))){wm(f,C,r,d);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&ju(h,"number",h.value)}switch(A=u?Xn(u):window,t){case"focusin":(vh(A)||A.contentEditable==="true")&&(Wn=A,ic=u,Ya=null);break;case"focusout":Ya=ic=Wn=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,Sh(f,r,d);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":Sh(f,r,d)}var w;if(nd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Vn?Mm(t,r)&&(P="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(Em&&r.locale!=="ko"&&(Vn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Vn&&(w=Sm()):(wi=d,td="value"in wi?wi.value:wi.textContent,Vn=!0)),A=Fo(u,P),0<A.length&&(P=new fh(P,t,null,r,d),f.push({event:P,listeners:A}),w?P.data=w:(w=Tm(r),w!==null&&(P.data=w)))),(w=i0?n0(t,r):a0(t,r))&&(u=Fo(u,"onBeforeInput"),0<u.length&&(d=new fh("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:u}),d.data=w))}km(f,e)})}function us(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Fo(t,e){for(var r=e+"Capture",i=[];t!==null;){var n=t,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=rs(t,r),a!=null&&i.unshift(us(t,a,n)),a=rs(t,e),a!=null&&i.push(us(t,a,n))),t=t.return}return i}function Mn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Th(t,e,r,i,n){for(var a=e._reactName,s=[];r!==null&&r!==i;){var o=r,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,n?(l=rs(r,a),l!=null&&s.unshift(us(r,l,o))):n||(l=rs(r,a),l!=null&&s.push(us(r,l,o)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var x0=/\r\n?/g,y0=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace(x0,`
`).replace(y0,"")}function Hs(t,e,r){if(e=wh(e),wh(t)!==e&&r)throw Error(Z(425))}function zo(){}var ac=null,sc=null;function oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lc=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(t){return Ah.resolve(null).then(t).catch(E0)}:lc;function E0(t){setTimeout(function(){throw t})}function Yl(t,e){var r=e,i=0;do{var n=r.nextSibling;if(t.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){t.removeChild(n),as(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);as(e)}function Di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Sa=Math.random().toString(36).slice(2),Wr="__reactFiber$"+Sa,cs="__reactProps$"+Sa,di="__reactContainer$"+Sa,uc="__reactEvents$"+Sa,M0="__reactListeners$"+Sa,T0="__reactHandles$"+Sa;function on(t){var e=t[Wr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[di]||r[Wr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Rh(t);t!==null;){if(r=t[Wr])return r;t=Rh(t)}return e}t=r,r=t.parentNode}return null}function Ss(t){return t=t[Wr]||t[di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function hl(t){return t[cs]||null}var cc=[],qn=-1;function ji(t){return{current:t}}function at(t){0>qn||(t.current=cc[qn],cc[qn]=null,qn--)}function rt(t,e){qn++,cc[qn]=t.current,t.current=e}var Gi={},Ht=ji(Gi),tr=ji(!1),mn=Gi;function ca(t,e){var r=t.type.contextTypes;if(!r)return Gi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=n),n}function rr(t){return t=t.childContextTypes,t!=null}function Bo(){at(tr),at(Ht)}function Ch(t,e,r){if(Ht.current!==Gi)throw Error(Z(168));rt(Ht,e),rt(tr,r)}function zm(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in e))throw Error(Z(108,u_(t)||"Unknown",n));return ct({},r,i)}function Ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gi,mn=Ht.current,rt(Ht,t),rt(tr,tr.current),!0}function Lh(t,e,r){var i=t.stateNode;if(!i)throw Error(Z(169));r?(t=zm(t,e,mn),i.__reactInternalMemoizedMergedChildContext=t,at(tr),at(Ht),rt(Ht,t)):at(tr),rt(tr,r)}var ni=null,fl=!1,$l=!1;function Bm(t){ni===null?ni=[t]:ni.push(t)}function w0(t){fl=!0,Bm(t)}function Xi(){if(!$l&&ni!==null){$l=!0;var t=0,e=Ke;try{var r=ni;for(Ke=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}ni=null,fl=!1}catch(n){throw ni!==null&&(ni=ni.slice(t+1)),dm(Zc,Xi),n}finally{Ke=e,$l=!1}}return null}var Yn=[],$n=0,Go=null,Vo=0,_r=[],xr=0,gn=null,si=1,oi="";function en(t,e){Yn[$n++]=Vo,Yn[$n++]=Go,Go=t,Vo=e}function Hm(t,e,r){_r[xr++]=si,_r[xr++]=oi,_r[xr++]=gn,gn=t;var i=si;t=oi;var n=32-kr(i)-1;i&=~(1<<n),r+=1;var a=32-kr(e)+n;if(30<a){var s=n-n%5;a=(i&(1<<s)-1).toString(32),i>>=s,n-=s,si=1<<32-kr(e)+n|r<<n|i,oi=a+t}else si=1<<a|r<<n|i,oi=t}function sd(t){t.return!==null&&(en(t,1),Hm(t,1,0))}function od(t){for(;t===Go;)Go=Yn[--$n],Yn[$n]=null,Vo=Yn[--$n],Yn[$n]=null;for(;t===gn;)gn=_r[--xr],_r[xr]=null,oi=_r[--xr],_r[xr]=null,si=_r[--xr],_r[xr]=null}var ur=null,lr=null,st=!1,Dr=null;function Gm(t,e){var r=Er(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Ph(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ur=t,lr=Di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ur=t,lr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=gn!==null?{id:si,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Er(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,ur=t,lr=null,!0):!1;default:return!1}}function dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hc(t){if(st){var e=lr;if(e){var r=e;if(!Ph(t,e)){if(dc(t))throw Error(Z(418));e=Di(r.nextSibling);var i=ur;e&&Ph(t,e)?Gm(i,r):(t.flags=t.flags&-4097|2,st=!1,ur=t)}}else{if(dc(t))throw Error(Z(418));t.flags=t.flags&-4097|2,st=!1,ur=t}}}function Nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ur=t}function Gs(t){if(t!==ur)return!1;if(!st)return Nh(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oc(t.type,t.memoizedProps)),e&&(e=lr)){if(dc(t))throw Vm(),Error(Z(418));for(;e;)Gm(t,e),e=Di(e.nextSibling)}if(Nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){lr=Di(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}lr=null}}else lr=ur?Di(t.stateNode.nextSibling):null;return!0}function Vm(){for(var t=lr;t;)t=Di(t.nextSibling)}function da(){lr=ur=null,st=!1}function ld(t){Dr===null?Dr=[t]:Dr.push(t)}var A0=mi.ReactCurrentBatchConfig;function Pa(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(Z(309));var i=r.stateNode}if(!i)throw Error(Z(147,t));var n=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=n.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(Z(284));if(!r._owner)throw Error(Z(290,t))}return t}function Vs(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dh(t){var e=t._init;return e(t._payload)}function Wm(t){function e(c,m){if(t){var g=c.deletions;g===null?(c.deletions=[m],c.flags|=16):g.push(m)}}function r(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function i(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function n(c,m){return c=ki(c,m),c.index=0,c.sibling=null,c}function a(c,m,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<m?(c.flags|=2,m):g):(c.flags|=2,m)):(c.flags|=1048576,m)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,m,g,S){return m===null||m.tag!==6?(m=ru(g,c.mode,S),m.return=c,m):(m=n(m,g),m.return=c,m)}function l(c,m,g,S){var C=g.type;return C===Gn?d(c,m,g.props.children,S,g.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Si&&Dh(C)===m.type)?(S=n(m,g.props),S.ref=Pa(c,m,g),S.return=c,S):(S=Ro(g.type,g.key,g.props,null,c.mode,S),S.ref=Pa(c,m,g),S.return=c,S)}function u(c,m,g,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=iu(g,c.mode,S),m.return=c,m):(m=n(m,g.children||[]),m.return=c,m)}function d(c,m,g,S,C){return m===null||m.tag!==7?(m=dn(g,c.mode,S,C),m.return=c,m):(m=n(m,g),m.return=c,m)}function f(c,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ru(""+m,c.mode,g),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ns:return g=Ro(m.type,m.key,m.props,null,c.mode,g),g.ref=Pa(c,null,m),g.return=c,g;case Hn:return m=iu(m,c.mode,g),m.return=c,m;case Si:var S=m._init;return f(c,S(m._payload),g)}if(Ba(m)||wa(m))return m=dn(m,c.mode,g,null),m.return=c,m;Vs(c,m)}return null}function h(c,m,g,S){var C=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:o(c,m,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ns:return g.key===C?l(c,m,g,S):null;case Hn:return g.key===C?u(c,m,g,S):null;case Si:return C=g._init,h(c,m,C(g._payload),S)}if(Ba(g)||wa(g))return C!==null?null:d(c,m,g,S,null);Vs(c,g)}return null}function p(c,m,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(g)||null,o(m,c,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ns:return c=c.get(S.key===null?g:S.key)||null,l(m,c,S,C);case Hn:return c=c.get(S.key===null?g:S.key)||null,u(m,c,S,C);case Si:var A=S._init;return p(c,m,g,A(S._payload),C)}if(Ba(S)||wa(S))return c=c.get(g)||null,d(m,c,S,C,null);Vs(m,S)}return null}function _(c,m,g,S){for(var C=null,A=null,w=m,P=m=0,y=null;w!==null&&P<g.length;P++){w.index>P?(y=w,w=null):y=w.sibling;var E=h(c,w,g[P],S);if(E===null){w===null&&(w=y);break}t&&w&&E.alternate===null&&e(c,w),m=a(E,m,P),A===null?C=E:A.sibling=E,A=E,w=y}if(P===g.length)return r(c,w),st&&en(c,P),C;if(w===null){for(;P<g.length;P++)w=f(c,g[P],S),w!==null&&(m=a(w,m,P),A===null?C=w:A.sibling=w,A=w);return st&&en(c,P),C}for(w=i(c,w);P<g.length;P++)y=p(w,c,P,g[P],S),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?P:y.key),m=a(y,m,P),A===null?C=y:A.sibling=y,A=y);return t&&w.forEach(function(G){return e(c,G)}),st&&en(c,P),C}function x(c,m,g,S){var C=wa(g);if(typeof C!="function")throw Error(Z(150));if(g=C.call(g),g==null)throw Error(Z(151));for(var A=C=null,w=m,P=m=0,y=null,E=g.next();w!==null&&!E.done;P++,E=g.next()){w.index>P?(y=w,w=null):y=w.sibling;var G=h(c,w,E.value,S);if(G===null){w===null&&(w=y);break}t&&w&&G.alternate===null&&e(c,w),m=a(G,m,P),A===null?C=G:A.sibling=G,A=G,w=y}if(E.done)return r(c,w),st&&en(c,P),C;if(w===null){for(;!E.done;P++,E=g.next())E=f(c,E.value,S),E!==null&&(m=a(E,m,P),A===null?C=E:A.sibling=E,A=E);return st&&en(c,P),C}for(w=i(c,w);!E.done;P++,E=g.next())E=p(w,c,P,E.value,S),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?P:E.key),m=a(E,m,P),A===null?C=E:A.sibling=E,A=E);return t&&w.forEach(function(X){return e(c,X)}),st&&en(c,P),C}function v(c,m,g,S){if(typeof g=="object"&&g!==null&&g.type===Gn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ns:e:{for(var C=g.key,A=m;A!==null;){if(A.key===C){if(C=g.type,C===Gn){if(A.tag===7){r(c,A.sibling),m=n(A,g.props.children),m.return=c,c=m;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Si&&Dh(C)===A.type){r(c,A.sibling),m=n(A,g.props),m.ref=Pa(c,A,g),m.return=c,c=m;break e}r(c,A);break}else e(c,A);A=A.sibling}g.type===Gn?(m=dn(g.props.children,c.mode,S,g.key),m.return=c,c=m):(S=Ro(g.type,g.key,g.props,null,c.mode,S),S.ref=Pa(c,m,g),S.return=c,c=S)}return s(c);case Hn:e:{for(A=g.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){r(c,m.sibling),m=n(m,g.children||[]),m.return=c,c=m;break e}else{r(c,m);break}else e(c,m);m=m.sibling}m=iu(g,c.mode,S),m.return=c,c=m}return s(c);case Si:return A=g._init,v(c,m,A(g._payload),S)}if(Ba(g))return _(c,m,g,S);if(wa(g))return x(c,m,g,S);Vs(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(r(c,m.sibling),m=n(m,g),m.return=c,c=m):(r(c,m),m=ru(g,c.mode,S),m.return=c,c=m),s(c)):r(c,m)}return v}var ha=Wm(!0),jm=Wm(!1),Wo=ji(null),jo=null,Kn=null,ud=null;function cd(){ud=Kn=jo=null}function dd(t){var e=Wo.current;at(Wo),t._currentValue=e}function fc(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function aa(t,e){jo=t,ud=Kn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(er=!0),t.firstContext=null)}function Tr(t){var e=t._currentValue;if(ud!==t)if(t={context:t,memoizedValue:e,next:null},Kn===null){if(jo===null)throw Error(Z(308));Kn=t,jo.dependencies={lanes:0,firstContext:t}}else Kn=Kn.next=t;return e}var ln=null;function hd(t){ln===null?ln=[t]:ln.push(t)}function Xm(t,e,r,i){var n=e.interleaved;return n===null?(r.next=r,hd(e)):(r.next=n.next,n.next=r),e.interleaved=r,hi(t,i)}function hi(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ei=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,hi(t,r)}return n=i.interleaved,n===null?(e.next=e,hd(i)):(e.next=n.next,n.next=e),i.interleaved=e,hi(t,r)}function So(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,Qc(t,r)}}function Uh(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?n=a=e:a=a.next=e}else n=a=e;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Xo(t,e,r,i){var n=t.updateQueue;Ei=!1;var a=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?a=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(a!==null){var f=n.baseState;s=0,d=u=l=null,o=a;do{var h=o.lane,p=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(h=e,p=r,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=ct({},f,h);break e;case 2:Ei=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=n.effects,h===null?n.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,s|=h;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;h=o,o=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);if(d===null&&(l=f),n.baseState=l,n.firstBaseUpdate=u,n.lastBaseUpdate=d,e=n.shared.interleaved,e!==null){n=e;do s|=n.lane,n=n.next;while(n!==e)}else a===null&&(n.shared.lanes=0);_n|=s,t.lanes=s,t.memoizedState=f}}function Ih(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(Z(191,n));n.call(i)}}}var Es={},qr=ji(Es),ds=ji(Es),hs=ji(Es);function un(t){if(t===Es)throw Error(Z(174));return t}function pd(t,e){switch(rt(hs,e),rt(ds,t),rt(qr,Es),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}at(qr),rt(qr,e)}function fa(){at(qr),at(ds),at(hs)}function Ym(t){un(hs.current);var e=un(qr.current),r=qu(e,t.type);e!==r&&(rt(ds,t),rt(qr,r))}function md(t){ds.current===t&&(at(qr),at(ds))}var lt=ji(0);function qo(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kl=[];function gd(){for(var t=0;t<Kl.length;t++)Kl[t]._workInProgressVersionPrimary=null;Kl.length=0}var Eo=mi.ReactCurrentDispatcher,Zl=mi.ReactCurrentBatchConfig,vn=0,ut=null,xt=null,Tt=null,Yo=!1,$a=!1,fs=0,R0=0;function It(){throw Error(Z(321))}function vd(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!zr(t[r],e[r]))return!1;return!0}function _d(t,e,r,i,n,a){if(vn=a,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Eo.current=t===null||t.memoizedState===null?N0:D0,t=r(i,n),$a){a=0;do{if($a=!1,fs=0,25<=a)throw Error(Z(301));a+=1,Tt=xt=null,e.updateQueue=null,Eo.current=U0,t=r(i,n)}while($a)}if(Eo.current=$o,e=xt!==null&&xt.next!==null,vn=0,Tt=xt=ut=null,Yo=!1,e)throw Error(Z(300));return t}function xd(){var t=fs!==0;return fs=0,t}function Gr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?ut.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function wr(){if(xt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=Tt===null?ut.memoizedState:Tt.next;if(e!==null)Tt=e,xt=t;else{if(t===null)throw Error(Z(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Tt===null?ut.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function ps(t,e){return typeof e=="function"?e(t):e}function Ql(t){var e=wr(),r=e.queue;if(r===null)throw Error(Z(311));r.lastRenderedReducer=t;var i=xt,n=i.baseQueue,a=r.pending;if(a!==null){if(n!==null){var s=n.next;n.next=a.next,a.next=s}i.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,i=i.baseState;var o=s=null,l=null,u=a;do{var d=u.lane;if((vn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,s=i):l=l.next=f,ut.lanes|=d,_n|=d}u=u.next}while(u!==null&&u!==a);l===null?s=i:l.next=o,zr(i,e.memoizedState)||(er=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,r.lastRenderedState=i}if(t=r.interleaved,t!==null){n=t;do a=n.lane,ut.lanes|=a,_n|=a,n=n.next;while(n!==t)}else n===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Jl(t){var e=wr(),r=e.queue;if(r===null)throw Error(Z(311));r.lastRenderedReducer=t;var i=r.dispatch,n=r.pending,a=e.memoizedState;if(n!==null){r.pending=null;var s=n=n.next;do a=t(a,s.action),s=s.next;while(s!==n);zr(a,e.memoizedState)||(er=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,i]}function $m(){}function Km(t,e){var r=ut,i=wr(),n=e(),a=!zr(i.memoizedState,n);if(a&&(i.memoizedState=n,er=!0),i=i.queue,yd(Jm.bind(null,r,i,t),[t]),i.getSnapshot!==e||a||Tt!==null&&Tt.memoizedState.tag&1){if(r.flags|=2048,ms(9,Qm.bind(null,r,i,n,e),void 0,null),At===null)throw Error(Z(349));vn&30||Zm(r,e,n)}return n}function Zm(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Qm(t,e,r,i){e.value=r,e.getSnapshot=i,eg(e)&&tg(t)}function Jm(t,e,r){return r(function(){eg(e)&&tg(t)})}function eg(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!zr(t,r)}catch{return!0}}function tg(t){var e=hi(t,1);e!==null&&Fr(e,t,1,-1)}function Oh(t){var e=Gr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:t},e.queue=t,t=t.dispatch=P0.bind(null,ut,t),[e.memoizedState,t]}function ms(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function rg(){return wr().memoizedState}function Mo(t,e,r,i){var n=Gr();ut.flags|=t,n.memoizedState=ms(1|e,r,void 0,i===void 0?null:i)}function pl(t,e,r,i){var n=wr();i=i===void 0?null:i;var a=void 0;if(xt!==null){var s=xt.memoizedState;if(a=s.destroy,i!==null&&vd(i,s.deps)){n.memoizedState=ms(e,r,a,i);return}}ut.flags|=t,n.memoizedState=ms(1|e,r,a,i)}function kh(t,e){return Mo(8390656,8,t,e)}function yd(t,e){return pl(2048,8,t,e)}function ig(t,e){return pl(4,2,t,e)}function ng(t,e){return pl(4,4,t,e)}function ag(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sg(t,e,r){return r=r!=null?r.concat([t]):null,pl(4,4,ag.bind(null,e,t),r)}function bd(){}function og(t,e){var r=wr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&vd(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function lg(t,e){var r=wr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&vd(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function ug(t,e,r){return vn&21?(zr(r,e)||(r=pm(),ut.lanes|=r,_n|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,er=!0),t.memoizedState=r)}function C0(t,e){var r=Ke;Ke=r!==0&&4>r?r:4,t(!0);var i=Zl.transition;Zl.transition={};try{t(!1),e()}finally{Ke=r,Zl.transition=i}}function cg(){return wr().memoizedState}function L0(t,e,r){var i=Oi(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},dg(t))hg(e,r);else if(r=Xm(t,e,r,i),r!==null){var n=Yt();Fr(r,t,i,n),fg(r,e,i)}}function P0(t,e,r){var i=Oi(t),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(dg(t))hg(e,n);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,r);if(n.hasEagerState=!0,n.eagerState=o,zr(o,s)){var l=e.interleaved;l===null?(n.next=n,hd(e)):(n.next=l.next,l.next=n),e.interleaved=n;return}}catch{}finally{}r=Xm(t,e,n,i),r!==null&&(n=Yt(),Fr(r,t,i,n),fg(r,e,i))}}function dg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function hg(t,e){$a=Yo=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function fg(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,Qc(t,r)}}var $o={readContext:Tr,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},N0={readContext:Tr,useCallback:function(t,e){return Gr().memoizedState=[t,e===void 0?null:e],t},useContext:Tr,useEffect:kh,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Mo(4194308,4,ag.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Mo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mo(4,2,t,e)},useMemo:function(t,e){var r=Gr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=Gr();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=L0.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Gr();return t={current:t},e.memoizedState=t},useState:Oh,useDebugValue:bd,useDeferredValue:function(t){return Gr().memoizedState=t},useTransition:function(){var t=Oh(!1),e=t[0];return t=C0.bind(null,t[1]),Gr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=ut,n=Gr();if(st){if(r===void 0)throw Error(Z(407));r=r()}else{if(r=e(),At===null)throw Error(Z(349));vn&30||Zm(i,e,r)}n.memoizedState=r;var a={value:r,getSnapshot:e};return n.queue=a,kh(Jm.bind(null,i,a,t),[t]),i.flags|=2048,ms(9,Qm.bind(null,i,a,r,e),void 0,null),r},useId:function(){var t=Gr(),e=At.identifierPrefix;if(st){var r=oi,i=si;r=(i&~(1<<32-kr(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=fs++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=R0++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},D0={readContext:Tr,useCallback:og,useContext:Tr,useEffect:yd,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ng,useMemo:lg,useReducer:Ql,useRef:rg,useState:function(){return Ql(ps)},useDebugValue:bd,useDeferredValue:function(t){var e=wr();return ug(e,xt.memoizedState,t)},useTransition:function(){var t=Ql(ps)[0],e=wr().memoizedState;return[t,e]},useMutableSource:$m,useSyncExternalStore:Km,useId:cg,unstable_isNewReconciler:!1},U0={readContext:Tr,useCallback:og,useContext:Tr,useEffect:yd,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ng,useMemo:lg,useReducer:Jl,useRef:rg,useState:function(){return Jl(ps)},useDebugValue:bd,useDeferredValue:function(t){var e=wr();return xt===null?e.memoizedState=t:ug(e,xt.memoizedState,t)},useTransition:function(){var t=Jl(ps)[0],e=wr().memoizedState;return[t,e]},useMutableSource:$m,useSyncExternalStore:Km,useId:cg,unstable_isNewReconciler:!1};function Pr(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function pc(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:ct({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ml={isMounted:function(t){return(t=t._reactInternals)?En(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=Yt(),n=Oi(t),a=ui(i,n);a.payload=e,r!=null&&(a.callback=r),e=Ui(t,a,n),e!==null&&(Fr(e,t,n,i),So(e,t,n))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=Yt(),n=Oi(t),a=ui(i,n);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=Ui(t,a,n),e!==null&&(Fr(e,t,n,i),So(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Yt(),i=Oi(t),n=ui(r,i);n.tag=2,e!=null&&(n.callback=e),e=Ui(t,n,i),e!==null&&(Fr(e,t,i,r),So(e,t,i))}};function Fh(t,e,r,i,n,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!os(r,i)||!os(n,a):!0}function pg(t,e,r){var i=!1,n=Gi,a=e.contextType;return typeof a=="object"&&a!==null?a=Tr(a):(n=rr(e)?mn:Ht.current,i=e.contextTypes,a=(i=i!=null)?ca(t,n):Gi),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ml,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=a),e}function zh(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&ml.enqueueReplaceState(e,e.state,null)}function mc(t,e,r,i){var n=t.stateNode;n.props=r,n.state=t.memoizedState,n.refs={},fd(t);var a=e.contextType;typeof a=="object"&&a!==null?n.context=Tr(a):(a=rr(e)?mn:Ht.current,n.context=ca(t,a)),n.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(pc(t,e,a,r),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&ml.enqueueReplaceState(n,n.state,null),Xo(t,r,n,i),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308)}function pa(t,e){try{var r="",i=e;do r+=l_(i),i=i.return;while(i);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:n,digest:null}}function eu(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function gc(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var I0=typeof WeakMap=="function"?WeakMap:Map;function mg(t,e,r){r=ui(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){Zo||(Zo=!0,Tc=i),gc(t,e)},r}function gg(t,e,r){r=ui(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;r.payload=function(){return i(n)},r.callback=function(){gc(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){gc(t,e),typeof i!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function Bh(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new I0;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(r)||(n.add(r),t=$0.bind(null,t,e,r),e.then(t,t))}function Hh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gh(t,e,r,i,n){return t.mode&1?(t.flags|=65536,t.lanes=n,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=ui(-1,1),e.tag=2,Ui(r,e,1))),r.lanes|=1),t)}var O0=mi.ReactCurrentOwner,er=!1;function Xt(t,e,r,i){e.child=t===null?jm(e,null,r,i):ha(e,t.child,r,i)}function Vh(t,e,r,i,n){r=r.render;var a=e.ref;return aa(e,n),i=_d(t,e,r,i,a,n),r=xd(),t!==null&&!er?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,fi(t,e,n)):(st&&r&&sd(e),e.flags|=1,Xt(t,e,i,n),e.child)}function Wh(t,e,r,i,n){if(t===null){var a=r.type;return typeof a=="function"&&!Cd(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,vg(t,e,a,i,n)):(t=Ro(r.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&n)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:os,r(s,i)&&t.ref===e.ref)return fi(t,e,n)}return e.flags|=1,t=ki(a,i),t.ref=e.ref,t.return=e,e.child=t}function vg(t,e,r,i,n){if(t!==null){var a=t.memoizedProps;if(os(a,i)&&t.ref===e.ref)if(er=!1,e.pendingProps=i=a,(t.lanes&n)!==0)t.flags&131072&&(er=!0);else return e.lanes=t.lanes,fi(t,e,n)}return vc(t,e,r,i,n)}function _g(t,e,r){var i=e.pendingProps,n=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Qn,or),or|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Qn,or),or|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,rt(Qn,or),or|=i}else a!==null?(i=a.baseLanes|r,e.memoizedState=null):i=r,rt(Qn,or),or|=i;return Xt(t,e,n,r),e.child}function xg(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function vc(t,e,r,i,n){var a=rr(r)?mn:Ht.current;return a=ca(e,a),aa(e,n),r=_d(t,e,r,i,a,n),i=xd(),t!==null&&!er?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,fi(t,e,n)):(st&&i&&sd(e),e.flags|=1,Xt(t,e,r,n),e.child)}function jh(t,e,r,i,n){if(rr(r)){var a=!0;Ho(e)}else a=!1;if(aa(e,n),e.stateNode===null)To(t,e),pg(e,r,i),mc(e,r,i,n),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Tr(u):(u=rr(r)?mn:Ht.current,u=ca(e,u));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==u)&&zh(e,s,i,u),Ei=!1;var h=e.memoizedState;s.state=h,Xo(e,i,s,n),l=e.memoizedState,o!==i||h!==l||tr.current||Ei?(typeof d=="function"&&(pc(e,r,d,i),l=e.memoizedState),(o=Ei||Fh(e,r,o,i,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,qm(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Pr(e.type,o),s.props=u,f=e.pendingProps,h=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Tr(l):(l=rr(r)?mn:Ht.current,l=ca(e,l));var p=r.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||h!==l)&&zh(e,s,i,l),Ei=!1,h=e.memoizedState,s.state=h,Xo(e,i,s,n);var _=e.memoizedState;o!==f||h!==_||tr.current||Ei?(typeof p=="function"&&(pc(e,r,p,i),_=e.memoizedState),(u=Ei||Fh(e,r,u,i,h,_,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return _c(t,e,r,i,a,n)}function _c(t,e,r,i,n,a){xg(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return n&&Lh(e,r,!1),fi(t,e,a);i=e.stateNode,O0.current=e;var o=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=ha(e,t.child,null,a),e.child=ha(e,null,o,a)):Xt(t,e,o,a),e.memoizedState=i.state,n&&Lh(e,r,!0),e.child}function yg(t){var e=t.stateNode;e.pendingContext?Ch(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ch(t,e.context,!1),pd(t,e.containerInfo)}function Xh(t,e,r,i,n){return da(),ld(n),e.flags|=256,Xt(t,e,r,i),e.child}var xc={dehydrated:null,treeContext:null,retryLane:0};function yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function bg(t,e,r){var i=e.pendingProps,n=lt.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(n&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(n|=1),rt(lt,n&1),t===null)return hc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=_l(s,i,0,null),t=dn(t,i,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=yc(r),e.memoizedState=xc,t):Sd(e,s));if(n=t.memoizedState,n!==null&&(o=n.dehydrated,o!==null))return k0(t,e,s,i,o,n,r);if(a){a=i.fallback,s=e.mode,n=t.child,o=n.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==n?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ki(n,l),i.subtreeFlags=n.subtreeFlags&14680064),o!==null?a=ki(o,a):(a=dn(a,s,r,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?yc(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~r,e.memoizedState=xc,i}return a=t.child,t=a.sibling,i=ki(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function Sd(t,e){return e=_l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ws(t,e,r,i){return i!==null&&ld(i),ha(e,t.child,null,r),t=Sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function k0(t,e,r,i,n,a,s){if(r)return e.flags&256?(e.flags&=-257,i=eu(Error(Z(422))),Ws(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,n=e.mode,i=_l({mode:"visible",children:i.children},n,0,null),a=dn(a,n,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&ha(e,t.child,null,s),e.child.memoizedState=yc(s),e.memoizedState=xc,a);if(!(e.mode&1))return Ws(t,e,s,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(Z(419)),i=eu(a,i,void 0),Ws(t,e,s,i)}if(o=(s&t.childLanes)!==0,er||o){if(i=At,i!==null){switch(s&-s){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(i.suspendedLanes|s)?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,hi(t,n),Fr(i,t,n,-1))}return Rd(),i=eu(Error(Z(421))),Ws(t,e,s,i)}return n.data==="$?"?(e.flags|=128,e.child=t.child,e=K0.bind(null,t),n._reactRetry=e,null):(t=a.treeContext,lr=Di(n.nextSibling),ur=e,st=!0,Dr=null,t!==null&&(_r[xr++]=si,_r[xr++]=oi,_r[xr++]=gn,si=t.id,oi=t.overflow,gn=e),e=Sd(e,i.children),e.flags|=4096,e)}function qh(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fc(t.return,e,r)}function tu(t,e,r,i,n){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=n)}function Sg(t,e,r){var i=e.pendingProps,n=i.revealOrder,a=i.tail;if(Xt(t,e,i.children,r),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qh(t,r,e);else if(t.tag===19)qh(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(r=e.child,n=null;r!==null;)t=r.alternate,t!==null&&qo(t)===null&&(n=r),r=r.sibling;r=n,r===null?(n=e.child,e.child=null):(n=r.sibling,r.sibling=null),tu(e,!1,n,r,a);break;case"backwards":for(r=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&qo(t)===null){e.child=n;break}t=n.sibling,n.sibling=r,r=n,n=t}tu(e,!0,r,null,a);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function To(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fi(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),_n|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,r=ki(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=ki(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function F0(t,e,r){switch(e.tag){case 3:yg(e),da();break;case 5:Ym(e);break;case 1:rr(e.type)&&Ho(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,n=e.memoizedProps.value;rt(Wo,i._currentValue),i._currentValue=n;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(lt,lt.current&1),e.flags|=128,null):r&e.child.childLanes?bg(t,e,r):(rt(lt,lt.current&1),t=fi(t,e,r),t!==null?t.sibling:null);rt(lt,lt.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return Sg(t,e,r);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),rt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,_g(t,e,r)}return fi(t,e,r)}var Eg,bc,Mg,Tg;Eg=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};bc=function(){};Mg=function(t,e,r,i){var n=t.memoizedProps;if(n!==i){t=e.stateNode,un(qr.current);var a=null;switch(r){case"input":n=Vu(t,n),i=Vu(t,i),a=[];break;case"select":n=ct({},n,{value:void 0}),i=ct({},i,{value:void 0}),a=[];break;case"textarea":n=Xu(t,n),i=Xu(t,i),a=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zo)}Yu(r,i);var s;r=null;for(u in n)if(!i.hasOwnProperty(u)&&n.hasOwnProperty(u)&&n[u]!=null)if(u==="style"){var o=n[u];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(es.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var l=i[u];if(o=n!=null?n[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(a||(a=[]),a.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(es.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),a||o===l||(a=[])):(a=a||[]).push(u,l))}r&&(a=a||[]).push("style",r);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};Tg=function(t,e,r,i){r!==i&&(e.flags|=4)};function Na(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function z0(t,e,r){var i=e.pendingProps;switch(od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return rr(e.type)&&Bo(),Ot(e),null;case 3:return i=e.stateNode,fa(),at(tr),at(Ht),gd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Gs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dr!==null&&(Rc(Dr),Dr=null))),bc(t,e),Ot(e),null;case 5:md(e);var n=un(hs.current);if(r=e.type,t!==null&&e.stateNode!=null)Mg(t,e,r,i,n),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Ot(e),null}if(t=un(qr.current),Gs(e)){i=e.stateNode,r=e.type;var a=e.memoizedProps;switch(i[Wr]=e,i[cs]=a,t=(e.mode&1)!==0,r){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(n=0;n<Ga.length;n++)it(Ga[n],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":rh(i,a),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},it("invalid",i);break;case"textarea":nh(i,a),it("invalid",i)}Yu(r,a),n=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&Hs(i.textContent,o,t),n=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&Hs(i.textContent,o,t),n=["children",""+o]):es.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&it("scroll",i)}switch(r){case"input":Ds(i),ih(i,a,!0);break;case"textarea":Ds(i),ah(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=zo)}i=n,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=n.nodeType===9?n:n.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jp(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(r,{is:i.is}):(t=s.createElement(r),r==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,r),t[Wr]=e,t[cs]=i,Eg(t,e,!1,!1),e.stateNode=t;e:{switch(s=$u(r,i),r){case"dialog":it("cancel",t),it("close",t),n=i;break;case"iframe":case"object":case"embed":it("load",t),n=i;break;case"video":case"audio":for(n=0;n<Ga.length;n++)it(Ga[n],t);n=i;break;case"source":it("error",t),n=i;break;case"img":case"image":case"link":it("error",t),it("load",t),n=i;break;case"details":it("toggle",t),n=i;break;case"input":rh(t,i),n=Vu(t,i),it("invalid",t);break;case"option":n=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},n=ct({},i,{value:void 0}),it("invalid",t);break;case"textarea":nh(t,i),n=Xu(t,i),it("invalid",t);break;default:n=i}Yu(r,n),o=n;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?rm(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&em(t,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&ts(t,l):typeof l=="number"&&ts(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(es.hasOwnProperty(a)?l!=null&&a==="onScroll"&&it("scroll",t):l!=null&&Xc(t,a,l,s))}switch(r){case"input":Ds(t),ih(t,i,!1);break;case"textarea":Ds(t),ah(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Hi(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?ta(t,!!i.multiple,a,!1):i.defaultValue!=null&&ta(t,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(t.onclick=zo)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)Tg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(r=un(hs.current),un(qr.current),Gs(e)){if(i=e.stateNode,r=e.memoizedProps,i[Wr]=e,(a=i.nodeValue!==r)&&(t=ur,t!==null))switch(t.tag){case 3:Hs(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hs(i.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Wr]=e,e.stateNode=i}return Ot(e),null;case 13:if(at(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&lr!==null&&e.mode&1&&!(e.flags&128))Vm(),da(),e.flags|=98560,a=!1;else if(a=Gs(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(Z(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Z(317));a[Wr]=e}else da(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),a=!1}else Dr!==null&&(Rc(Dr),Dr=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?yt===0&&(yt=3):Rd())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return fa(),bc(t,e),t===null&&ls(e.stateNode.containerInfo),Ot(e),null;case 10:return dd(e.type._context),Ot(e),null;case 17:return rr(e.type)&&Bo(),Ot(e),null;case 19:if(at(lt),a=e.memoizedState,a===null)return Ot(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)Na(a,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=qo(t),s!==null){for(e.flags|=128,Na(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)a=r,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return rt(lt,lt.current&1|2),e.child}t=t.sibling}a.tail!==null&&pt()>ma&&(e.flags|=128,i=!0,Na(a,!1),e.lanes=4194304)}else{if(!i)if(t=qo(s),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Na(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!st)return Ot(e),null}else 2*pt()-a.renderingStartTime>ma&&r!==1073741824&&(e.flags|=128,i=!0,Na(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(r=a.last,r!==null?r.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=pt(),e.sibling=null,r=lt.current,rt(lt,i?r&1|2:r&1),e):(Ot(e),null);case 22:case 23:return Ad(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?or&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function B0(t,e){switch(od(e),e.tag){case 1:return rr(e.type)&&Bo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fa(),at(tr),at(Ht),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return md(e),null;case 13:if(at(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));da()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(lt),null;case 4:return fa(),null;case 10:return dd(e.type._context),null;case 22:case 23:return Ad(),null;case 24:return null;default:return null}}var js=!1,zt=!1,H0=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Zn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){ht(t,e,i)}else r.current=null}function wg(t,e,r){try{r()}catch(i){ht(t,e,i)}}var Yh=!1;function G0(t,e){if(ac=Oo,t=Lm(),ad(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,o=-1,l=-1,u=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==r||n!==0&&f.nodeType!==3||(o=s+n),f!==a||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===r&&++u===n&&(o=s),h===a&&++d===i&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}r=o===-1||l===-1?null:{start:o,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(sc={focusedElem:t,selectionRange:r},Oo=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){e=ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,v=_.memoizedState,c=e.stateNode,m=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Pr(e.type,x),v);c.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(S){ht(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}return _=Yh,Yh=!1,_}function Ka(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&t)===t){var a=n.destroy;n.destroy=void 0,a!==void 0&&wg(e,r,a)}n=n.next}while(n!==i)}}function gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function Sc(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Ag(t){var e=t.alternate;e!==null&&(t.alternate=null,Ag(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wr],delete e[cs],delete e[uc],delete e[M0],delete e[T0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rg(t){return t.tag===5||t.tag===3||t.tag===4}function $h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ec(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=zo));else if(i!==4&&(t=t.child,t!==null))for(Ec(t,e,r),t=t.sibling;t!==null;)Ec(t,e,r),t=t.sibling}function Mc(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Mc(t,e,r),t=t.sibling;t!==null;)Mc(t,e,r),t=t.sibling}var Ct=null,Nr=!1;function gi(t,e,r){for(r=r.child;r!==null;)Cg(t,e,r),r=r.sibling}function Cg(t,e,r){if(Xr&&typeof Xr.onCommitFiberUnmount=="function")try{Xr.onCommitFiberUnmount(ll,r)}catch{}switch(r.tag){case 5:zt||Zn(r,e);case 6:var i=Ct,n=Nr;Ct=null,gi(t,e,r),Ct=i,Nr=n,Ct!==null&&(Nr?(t=Ct,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Ct.removeChild(r.stateNode));break;case 18:Ct!==null&&(Nr?(t=Ct,r=r.stateNode,t.nodeType===8?Yl(t.parentNode,r):t.nodeType===1&&Yl(t,r),as(t)):Yl(Ct,r.stateNode));break;case 4:i=Ct,n=Nr,Ct=r.stateNode.containerInfo,Nr=!0,gi(t,e,r),Ct=i,Nr=n;break;case 0:case 11:case 14:case 15:if(!zt&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var a=n,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&wg(r,e,s),n=n.next}while(n!==i)}gi(t,e,r);break;case 1:if(!zt&&(Zn(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(o){ht(r,e,o)}gi(t,e,r);break;case 21:gi(t,e,r);break;case 22:r.mode&1?(zt=(i=zt)||r.memoizedState!==null,gi(t,e,r),zt=i):gi(t,e,r);break;default:gi(t,e,r)}}function Kh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new H0),e.forEach(function(i){var n=Z0.bind(null,t,i);r.has(i)||(r.add(i),i.then(n,n))})}}function Ar(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Ct=o.stateNode,Nr=!1;break e;case 3:Ct=o.stateNode.containerInfo,Nr=!0;break e;case 4:Ct=o.stateNode.containerInfo,Nr=!0;break e}o=o.return}if(Ct===null)throw Error(Z(160));Cg(a,s,n),Ct=null,Nr=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(u){ht(n,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lg(e,t),e=e.sibling}function Lg(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ar(e,t),Hr(t),i&4){try{Ka(3,t,t.return),gl(3,t)}catch(x){ht(t,t.return,x)}try{Ka(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:Ar(e,t),Hr(t),i&512&&r!==null&&Zn(r,r.return);break;case 5:if(Ar(e,t),Hr(t),i&512&&r!==null&&Zn(r,r.return),t.flags&32){var n=t.stateNode;try{ts(n,"")}catch(x){ht(t,t.return,x)}}if(i&4&&(n=t.stateNode,n!=null)){var a=t.memoizedProps,s=r!==null?r.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Zp(n,a),$u(o,s);var u=$u(o,a);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?rm(n,f):d==="dangerouslySetInnerHTML"?em(n,f):d==="children"?ts(n,f):Xc(n,d,f,u)}switch(o){case"input":Wu(n,a);break;case"textarea":Qp(n,a);break;case"select":var h=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?ta(n,!!a.multiple,p,!1):h!==!!a.multiple&&(a.defaultValue!=null?ta(n,!!a.multiple,a.defaultValue,!0):ta(n,!!a.multiple,a.multiple?[]:"",!1))}n[cs]=a}catch(x){ht(t,t.return,x)}}break;case 6:if(Ar(e,t),Hr(t),i&4){if(t.stateNode===null)throw Error(Z(162));n=t.stateNode,a=t.memoizedProps;try{n.nodeValue=a}catch(x){ht(t,t.return,x)}}break;case 3:if(Ar(e,t),Hr(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{as(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:Ar(e,t),Hr(t);break;case 13:Ar(e,t),Hr(t),n=t.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(Td=pt())),i&4&&Kh(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(zt=(u=zt)||d,Ar(e,t),zt=u):Ar(e,t),Hr(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(ce=t,d=t.child;d!==null;){for(f=ce=d;ce!==null;){switch(h=ce,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ka(4,h,h.return);break;case 1:Zn(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,r=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){ht(i,r,x)}}break;case 5:Zn(h,h.return);break;case 22:if(h.memoizedState!==null){Qh(f);continue}}p!==null?(p.return=h,ce=p):Qh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{n=f.stateNode,u?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=tm("display",s))}catch(x){ht(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ht(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ar(e,t),Hr(t),i&4&&Kh(t);break;case 21:break;default:Ar(e,t),Hr(t)}}function Hr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Rg(r)){var i=r;break e}r=r.return}throw Error(Z(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(ts(n,""),i.flags&=-33);var a=$h(t);Mc(t,a,n);break;case 3:case 4:var s=i.stateNode.containerInfo,o=$h(t);Ec(t,o,s);break;default:throw Error(Z(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function V0(t,e,r){ce=t,Pg(t)}function Pg(t,e,r){for(var i=(t.mode&1)!==0;ce!==null;){var n=ce,a=n.child;if(n.tag===22&&i){var s=n.memoizedState!==null||js;if(!s){var o=n.alternate,l=o!==null&&o.memoizedState!==null||zt;o=js;var u=zt;if(js=s,(zt=l)&&!u)for(ce=n;ce!==null;)s=ce,l=s.child,s.tag===22&&s.memoizedState!==null?Jh(n):l!==null?(l.return=s,ce=l):Jh(n);for(;a!==null;)ce=a,Pg(a),a=a.sibling;ce=n,js=o,zt=u}Zh(t)}else n.subtreeFlags&8772&&a!==null?(a.return=n,ce=a):Zh(t)}}function Zh(t){for(;ce!==null;){var e=ce;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||gl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(r===null)i.componentDidMount();else{var n=e.elementType===e.type?r.memoizedProps:Pr(e.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Ih(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Ih(e,s,r)}break;case 5:var o=e.stateNode;if(r===null&&e.flags&4){r=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&as(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}zt||e.flags&512&&Sc(e)}catch(h){ht(e,e.return,h)}}if(e===t){ce=null;break}if(r=e.sibling,r!==null){r.return=e.return,ce=r;break}ce=e.return}}function Qh(t){for(;ce!==null;){var e=ce;if(e===t){ce=null;break}var r=e.sibling;if(r!==null){r.return=e.return,ce=r;break}ce=e.return}}function Jh(t){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{gl(4,e)}catch(l){ht(e,r,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var n=e.return;try{i.componentDidMount()}catch(l){ht(e,n,l)}}var a=e.return;try{Sc(e)}catch(l){ht(e,a,l)}break;case 5:var s=e.return;try{Sc(e)}catch(l){ht(e,s,l)}}}catch(l){ht(e,e.return,l)}if(e===t){ce=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ce=o;break}ce=e.return}}var W0=Math.ceil,Ko=mi.ReactCurrentDispatcher,Ed=mi.ReactCurrentOwner,Mr=mi.ReactCurrentBatchConfig,qe=0,At=null,vt=null,Pt=0,or=0,Qn=ji(0),yt=0,gs=null,_n=0,vl=0,Md=0,Za=null,Qt=null,Td=0,ma=1/0,ii=null,Zo=!1,Tc=null,Ii=null,Xs=!1,Ai=null,Qo=0,Qa=0,wc=null,wo=-1,Ao=0;function Yt(){return qe&6?pt():wo!==-1?wo:wo=pt()}function Oi(t){return t.mode&1?qe&2&&Pt!==0?Pt&-Pt:A0.transition!==null?(Ao===0&&(Ao=pm()),Ao):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:bm(t.type)),t):1}function Fr(t,e,r,i){if(50<Qa)throw Qa=0,wc=null,Error(Z(185));ys(t,r,i),(!(qe&2)||t!==At)&&(t===At&&(!(qe&2)&&(vl|=r),yt===4&&Ti(t,Pt)),ir(t,i),r===1&&qe===0&&!(e.mode&1)&&(ma=pt()+500,fl&&Xi()))}function ir(t,e){var r=t.callbackNode;A_(t,e);var i=Io(t,t===At?Pt:0);if(i===0)r!==null&&lh(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&lh(r),e===1)t.tag===0?w0(ef.bind(null,t)):Bm(ef.bind(null,t)),S0(function(){!(qe&6)&&Xi()}),r=null;else{switch(mm(i)){case 1:r=Zc;break;case 4:r=hm;break;case 16:r=Uo;break;case 536870912:r=fm;break;default:r=Uo}r=zg(r,Ng.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Ng(t,e){if(wo=-1,Ao=0,qe&6)throw Error(Z(327));var r=t.callbackNode;if(sa()&&t.callbackNode!==r)return null;var i=Io(t,t===At?Pt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Jo(t,i);else{e=i;var n=qe;qe|=2;var a=Ug();(At!==t||Pt!==e)&&(ii=null,ma=pt()+500,cn(t,e));do try{q0();break}catch(o){Dg(t,o)}while(!0);cd(),Ko.current=a,qe=n,vt!==null?e=0:(At=null,Pt=0,e=yt)}if(e!==0){if(e===2&&(n=ec(t),n!==0&&(i=n,e=Ac(t,n))),e===1)throw r=gs,cn(t,0),Ti(t,i),ir(t,pt()),r;if(e===6)Ti(t,i);else{if(n=t.current.alternate,!(i&30)&&!j0(n)&&(e=Jo(t,i),e===2&&(a=ec(t),a!==0&&(i=a,e=Ac(t,a))),e===1))throw r=gs,cn(t,0),Ti(t,i),ir(t,pt()),r;switch(t.finishedWork=n,t.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:tn(t,Qt,ii);break;case 3:if(Ti(t,i),(i&130023424)===i&&(e=Td+500-pt(),10<e)){if(Io(t,0)!==0)break;if(n=t.suspendedLanes,(n&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&n;break}t.timeoutHandle=lc(tn.bind(null,t,Qt,ii),e);break}tn(t,Qt,ii);break;case 4:if(Ti(t,i),(i&4194240)===i)break;for(e=t.eventTimes,n=-1;0<i;){var s=31-kr(i);a=1<<s,s=e[s],s>n&&(n=s),i&=~a}if(i=n,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*W0(i/1960))-i,10<i){t.timeoutHandle=lc(tn.bind(null,t,Qt,ii),i);break}tn(t,Qt,ii);break;case 5:tn(t,Qt,ii);break;default:throw Error(Z(329))}}}return ir(t,pt()),t.callbackNode===r?Ng.bind(null,t):null}function Ac(t,e){var r=Za;return t.current.memoizedState.isDehydrated&&(cn(t,e).flags|=256),t=Jo(t,e),t!==2&&(e=Qt,Qt=r,e!==null&&Rc(e)),t}function Rc(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function j0(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],a=n.getSnapshot;n=n.value;try{if(!zr(a(),n))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ti(t,e){for(e&=~Md,e&=~vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-kr(e),i=1<<r;t[r]=-1,e&=~i}}function ef(t){if(qe&6)throw Error(Z(327));sa();var e=Io(t,0);if(!(e&1))return ir(t,pt()),null;var r=Jo(t,e);if(t.tag!==0&&r===2){var i=ec(t);i!==0&&(e=i,r=Ac(t,i))}if(r===1)throw r=gs,cn(t,0),Ti(t,e),ir(t,pt()),r;if(r===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tn(t,Qt,ii),ir(t,pt()),null}function wd(t,e){var r=qe;qe|=1;try{return t(e)}finally{qe=r,qe===0&&(ma=pt()+500,fl&&Xi())}}function xn(t){Ai!==null&&Ai.tag===0&&!(qe&6)&&sa();var e=qe;qe|=1;var r=Mr.transition,i=Ke;try{if(Mr.transition=null,Ke=1,t)return t()}finally{Ke=i,Mr.transition=r,qe=e,!(qe&6)&&Xi()}}function Ad(){or=Qn.current,at(Qn)}function cn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,b0(r)),vt!==null)for(r=vt.return;r!==null;){var i=r;switch(od(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bo();break;case 3:fa(),at(tr),at(Ht),gd();break;case 5:md(i);break;case 4:fa();break;case 13:at(lt);break;case 19:at(lt);break;case 10:dd(i.type._context);break;case 22:case 23:Ad()}r=r.return}if(At=t,vt=t=ki(t.current,null),Pt=or=e,yt=0,gs=null,Md=vl=_n=0,Qt=Za=null,ln!==null){for(e=0;e<ln.length;e++)if(r=ln[e],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,a=r.pending;if(a!==null){var s=a.next;a.next=n,i.next=s}r.pending=i}ln=null}return t}function Dg(t,e){do{var r=vt;try{if(cd(),Eo.current=$o,Yo){for(var i=ut.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}Yo=!1}if(vn=0,Tt=xt=ut=null,$a=!1,fs=0,Ed.current=null,r===null||r.return===null){yt=1,gs=e,vt=null;break}e:{var a=t,s=r.return,o=r,l=e;if(e=Pt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Hh(s);if(p!==null){p.flags&=-257,Gh(p,s,o,a,e),p.mode&1&&Bh(a,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Bh(a,u,e),Rd();break e}l=Error(Z(426))}}else if(st&&o.mode&1){var v=Hh(s);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Gh(v,s,o,a,e),ld(pa(l,o));break e}}a=l=pa(l,o),yt!==4&&(yt=2),Za===null?Za=[a]:Za.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var c=mg(a,l,e);Uh(a,c);break e;case 1:o=l;var m=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ii===null||!Ii.has(g)))){a.flags|=65536,e&=-e,a.lanes|=e;var S=gg(a,o,e);Uh(a,S);break e}}a=a.return}while(a!==null)}Og(r)}catch(C){e=C,vt===r&&r!==null&&(vt=r=r.return);continue}break}while(!0)}function Ug(){var t=Ko.current;return Ko.current=$o,t===null?$o:t}function Rd(){(yt===0||yt===3||yt===2)&&(yt=4),At===null||!(_n&268435455)&&!(vl&268435455)||Ti(At,Pt)}function Jo(t,e){var r=qe;qe|=2;var i=Ug();(At!==t||Pt!==e)&&(ii=null,cn(t,e));do try{X0();break}catch(n){Dg(t,n)}while(!0);if(cd(),qe=r,Ko.current=i,vt!==null)throw Error(Z(261));return At=null,Pt=0,yt}function X0(){for(;vt!==null;)Ig(vt)}function q0(){for(;vt!==null&&!__();)Ig(vt)}function Ig(t){var e=Fg(t.alternate,t,or);t.memoizedProps=t.pendingProps,e===null?Og(t):vt=e,Ed.current=null}function Og(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=B0(r,e),r!==null){r.flags&=32767,vt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,vt=null;return}}else if(r=z0(r,e,or),r!==null){vt=r;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);yt===0&&(yt=5)}function tn(t,e,r){var i=Ke,n=Mr.transition;try{Mr.transition=null,Ke=1,Y0(t,e,r,i)}finally{Mr.transition=n,Ke=i}return null}function Y0(t,e,r,i){do sa();while(Ai!==null);if(qe&6)throw Error(Z(327));r=t.finishedWork;var n=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(R_(t,a),t===At&&(vt=At=null,Pt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Xs||(Xs=!0,zg(Uo,function(){return sa(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Mr.transition,Mr.transition=null;var s=Ke;Ke=1;var o=qe;qe|=4,Ed.current=null,G0(t,r),Lg(r,t),p0(sc),Oo=!!ac,sc=ac=null,t.current=r,V0(r),x_(),qe=o,Ke=s,Mr.transition=a}else t.current=r;if(Xs&&(Xs=!1,Ai=t,Qo=n),a=t.pendingLanes,a===0&&(Ii=null),S_(r.stateNode),ir(t,pt()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)n=e[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(Zo)throw Zo=!1,t=Tc,Tc=null,t;return Qo&1&&t.tag!==0&&sa(),a=t.pendingLanes,a&1?t===wc?Qa++:(Qa=0,wc=t):Qa=0,Xi(),null}function sa(){if(Ai!==null){var t=mm(Qo),e=Mr.transition,r=Ke;try{if(Mr.transition=null,Ke=16>t?16:t,Ai===null)var i=!1;else{if(t=Ai,Ai=null,Qo=0,qe&6)throw Error(Z(331));var n=qe;for(qe|=4,ce=t.current;ce!==null;){var a=ce,s=a.child;if(ce.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(ce=u;ce!==null;){var d=ce;switch(d.tag){case 0:case 11:case 15:Ka(8,d,a)}var f=d.child;if(f!==null)f.return=d,ce=f;else for(;ce!==null;){d=ce;var h=d.sibling,p=d.return;if(Ag(d),d===u){ce=null;break}if(h!==null){h.return=p,ce=h;break}ce=p}}}var _=a.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}ce=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,ce=s;else e:for(;ce!==null;){if(a=ce,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ka(9,a,a.return)}var c=a.sibling;if(c!==null){c.return=a.return,ce=c;break e}ce=a.return}}var m=t.current;for(ce=m;ce!==null;){s=ce;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,ce=g;else e:for(s=m;ce!==null;){if(o=ce,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:gl(9,o)}}catch(C){ht(o,o.return,C)}if(o===s){ce=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ce=S;break e}ce=o.return}}if(qe=n,Xi(),Xr&&typeof Xr.onPostCommitFiberRoot=="function")try{Xr.onPostCommitFiberRoot(ll,t)}catch{}i=!0}return i}finally{Ke=r,Mr.transition=e}}return!1}function tf(t,e,r){e=pa(r,e),e=mg(t,e,1),t=Ui(t,e,1),e=Yt(),t!==null&&(ys(t,1,e),ir(t,e))}function ht(t,e,r){if(t.tag===3)tf(t,t,r);else for(;e!==null;){if(e.tag===3){tf(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ii===null||!Ii.has(i))){t=pa(r,t),t=gg(e,t,1),e=Ui(e,t,1),t=Yt(),e!==null&&(ys(e,1,t),ir(e,t));break}}e=e.return}}function $0(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&r,At===t&&(Pt&r)===r&&(yt===4||yt===3&&(Pt&130023424)===Pt&&500>pt()-Td?cn(t,0):Md|=r),ir(t,e)}function kg(t,e){e===0&&(t.mode&1?(e=Os,Os<<=1,!(Os&130023424)&&(Os=4194304)):e=1);var r=Yt();t=hi(t,e),t!==null&&(ys(t,e,r),ir(t,r))}function K0(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),kg(t,r)}function Z0(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),kg(t,r)}var Fg;Fg=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||tr.current)er=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return er=!1,F0(t,e,r);er=!!(t.flags&131072)}else er=!1,st&&e.flags&1048576&&Hm(e,Vo,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;To(t,e),t=e.pendingProps;var n=ca(e,Ht.current);aa(e,r),n=_d(null,e,i,t,n,r);var a=xd();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rr(i)?(a=!0,Ho(e)):a=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,fd(e),n.updater=ml,e.stateNode=n,n._reactInternals=e,mc(e,i,t,r),e=_c(null,e,i,!0,a,r)):(e.tag=0,st&&a&&sd(e),Xt(null,e,n,r),e=e.child),e;case 16:i=e.elementType;e:{switch(To(t,e),t=e.pendingProps,n=i._init,i=n(i._payload),e.type=i,n=e.tag=J0(i),t=Pr(i,t),n){case 0:e=vc(null,e,i,t,r);break e;case 1:e=jh(null,e,i,t,r);break e;case 11:e=Vh(null,e,i,t,r);break e;case 14:e=Wh(null,e,i,Pr(i.type,t),r);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Pr(i,n),vc(t,e,i,n,r);case 1:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Pr(i,n),jh(t,e,i,n,r);case 3:e:{if(yg(e),t===null)throw Error(Z(387));i=e.pendingProps,a=e.memoizedState,n=a.element,qm(t,e),Xo(e,i,null,r);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){n=pa(Error(Z(423)),e),e=Xh(t,e,i,r,n);break e}else if(i!==n){n=pa(Error(Z(424)),e),e=Xh(t,e,i,r,n);break e}else for(lr=Di(e.stateNode.containerInfo.firstChild),ur=e,st=!0,Dr=null,r=jm(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(da(),i===n){e=fi(t,e,r);break e}Xt(t,e,i,r)}e=e.child}return e;case 5:return Ym(e),t===null&&hc(e),i=e.type,n=e.pendingProps,a=t!==null?t.memoizedProps:null,s=n.children,oc(i,n)?s=null:a!==null&&oc(i,a)&&(e.flags|=32),xg(t,e),Xt(t,e,s,r),e.child;case 6:return t===null&&hc(e),null;case 13:return bg(t,e,r);case 4:return pd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ha(e,null,i,r):Xt(t,e,i,r),e.child;case 11:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Pr(i,n),Vh(t,e,i,n,r);case 7:return Xt(t,e,e.pendingProps,r),e.child;case 8:return Xt(t,e,e.pendingProps.children,r),e.child;case 12:return Xt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,n=e.pendingProps,a=e.memoizedProps,s=n.value,rt(Wo,i._currentValue),i._currentValue=s,a!==null)if(zr(a.value,s)){if(a.children===n.children&&!tr.current){e=fi(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=ui(-1,r&-r),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),fc(a.return,r,e),o.lanes|=r;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(Z(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),fc(s,r,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Xt(t,e,n.children,r),e=e.child}return e;case 9:return n=e.type,i=e.pendingProps.children,aa(e,r),n=Tr(n),i=i(n),e.flags|=1,Xt(t,e,i,r),e.child;case 14:return i=e.type,n=Pr(i,e.pendingProps),n=Pr(i.type,n),Wh(t,e,i,n,r);case 15:return vg(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Pr(i,n),To(t,e),e.tag=1,rr(i)?(t=!0,Ho(e)):t=!1,aa(e,r),pg(e,i,n),mc(e,i,n,r),_c(null,e,i,!0,t,r);case 19:return Sg(t,e,r);case 22:return _g(t,e,r)}throw Error(Z(156,e.tag))};function zg(t,e){return dm(t,e)}function Q0(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Er(t,e,r,i){return new Q0(t,e,r,i)}function Cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function J0(t){if(typeof t=="function")return Cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yc)return 11;if(t===$c)return 14}return 2}function ki(t,e){var r=t.alternate;return r===null?(r=Er(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ro(t,e,r,i,n,a){var s=2;if(i=t,typeof t=="function")Cd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Gn:return dn(r.children,n,a,e);case qc:s=8,n|=8;break;case zu:return t=Er(12,r,e,n|2),t.elementType=zu,t.lanes=a,t;case Bu:return t=Er(13,r,e,n),t.elementType=Bu,t.lanes=a,t;case Hu:return t=Er(19,r,e,n),t.elementType=Hu,t.lanes=a,t;case Yp:return _l(r,n,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xp:s=10;break e;case qp:s=9;break e;case Yc:s=11;break e;case $c:s=14;break e;case Si:s=16,i=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=Er(s,r,e,n),e.elementType=t,e.type=i,e.lanes=a,e}function dn(t,e,r,i){return t=Er(7,t,i,e),t.lanes=r,t}function _l(t,e,r,i){return t=Er(22,t,i,e),t.elementType=Yp,t.lanes=r,t.stateNode={isHidden:!1},t}function ru(t,e,r){return t=Er(6,t,null,e),t.lanes=r,t}function iu(t,e,r){return e=Er(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ex(t,e,r,i,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Ld(t,e,r,i,n,a,s,o,l){return t=new ex(t,e,r,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Er(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(a),t}function tx(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function Bg(t){if(!t)return Gi;t=t._reactInternals;e:{if(En(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rr(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var r=t.type;if(rr(r))return zm(t,r,e)}return e}function Hg(t,e,r,i,n,a,s,o,l){return t=Ld(r,i,!0,t,n,a,s,o,l),t.context=Bg(null),r=t.current,i=Yt(),n=Oi(r),a=ui(i,n),a.callback=e??null,Ui(r,a,n),t.current.lanes=n,ys(t,n,i),ir(t,i),t}function xl(t,e,r,i){var n=e.current,a=Yt(),s=Oi(n);return r=Bg(r),e.context===null?e.context=r:e.pendingContext=r,e=ui(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(n,e,s),t!==null&&(Fr(t,n,s,a),So(t,n,s)),s}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Pd(t,e){rf(t,e),(t=t.alternate)&&rf(t,e)}function rx(){return null}var Gg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nd(t){this._internalRoot=t}yl.prototype.render=Nd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));xl(t,e,null,null)};yl.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xn(function(){xl(null,t,null,null)}),e[di]=null}};function yl(t){this._internalRoot=t}yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=_m();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Mi.length&&e!==0&&e<Mi[r].priority;r++);Mi.splice(r,0,t),r===0&&ym(t)}};function Dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nf(){}function ix(t,e,r,i,n){if(n){if(typeof i=="function"){var a=i;i=function(){var u=el(s);a.call(u)}}var s=Hg(e,i,t,0,null,!1,!1,"",nf);return t._reactRootContainer=s,t[di]=s.current,ls(t.nodeType===8?t.parentNode:t),xn(),s}for(;n=t.lastChild;)t.removeChild(n);if(typeof i=="function"){var o=i;i=function(){var u=el(l);o.call(u)}}var l=Ld(t,0,!1,null,null,!1,!1,"",nf);return t._reactRootContainer=l,t[di]=l.current,ls(t.nodeType===8?t.parentNode:t),xn(function(){xl(e,l,r,i)}),l}function Sl(t,e,r,i,n){var a=r._reactRootContainer;if(a){var s=a;if(typeof n=="function"){var o=n;n=function(){var l=el(s);o.call(l)}}xl(e,s,t,n)}else s=ix(r,e,t,n,i);return el(s)}gm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Ha(e.pendingLanes);r!==0&&(Qc(e,r|1),ir(e,pt()),!(qe&6)&&(ma=pt()+500,Xi()))}break;case 13:xn(function(){var i=hi(t,1);if(i!==null){var n=Yt();Fr(i,t,1,n)}}),Pd(t,1)}};Jc=function(t){if(t.tag===13){var e=hi(t,134217728);if(e!==null){var r=Yt();Fr(e,t,134217728,r)}Pd(t,134217728)}};vm=function(t){if(t.tag===13){var e=Oi(t),r=hi(t,e);if(r!==null){var i=Yt();Fr(r,t,e,i)}Pd(t,e)}};_m=function(){return Ke};xm=function(t,e){var r=Ke;try{return Ke=t,e()}finally{Ke=r}};Zu=function(t,e,r){switch(e){case"input":if(Wu(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var n=hl(i);if(!n)throw Error(Z(90));Kp(i),Wu(i,n)}}}break;case"textarea":Qp(t,r);break;case"select":e=r.value,e!=null&&ta(t,!!r.multiple,e,!1)}};am=wd;sm=xn;var nx={usingClientEntryPoint:!1,Events:[Ss,Xn,hl,im,nm,wd]},Da={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ax={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=um(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qs.isDisabled&&qs.supportsFiber)try{ll=qs.inject(ax),Xr=qs}catch{}}hr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nx;hr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(e))throw Error(Z(200));return tx(t,e,null,r)};hr.createRoot=function(t,e){if(!Dd(t))throw Error(Z(299));var r=!1,i="",n=Gg;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=Ld(t,1,!1,null,null,r,!1,i,n),t[di]=e.current,ls(t.nodeType===8?t.parentNode:t),new Nd(e)};hr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=um(e),t=t===null?null:t.stateNode,t};hr.flushSync=function(t){return xn(t)};hr.hydrate=function(t,e,r){if(!bl(e))throw Error(Z(200));return Sl(null,t,e,!0,r)};hr.hydrateRoot=function(t,e,r){if(!Dd(t))throw Error(Z(405));var i=r!=null&&r.hydratedSources||null,n=!1,a="",s=Gg;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=Hg(e,null,t,1,r??null,n,!1,a,s),t[di]=e.current,ls(t),i)for(t=0;t<i.length;t++)r=i[t],n=r._getVersion,n=n(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,n]:e.mutableSourceEagerHydrationData.push(r,n);return new yl(e)};hr.render=function(t,e,r){if(!bl(e))throw Error(Z(200));return Sl(null,t,e,!1,r)};hr.unmountComponentAtNode=function(t){if(!bl(t))throw Error(Z(40));return t._reactRootContainer?(xn(function(){Sl(null,null,t,!1,function(){t._reactRootContainer=null,t[di]=null})}),!0):!1};hr.unstable_batchedUpdates=wd;hr.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!bl(r))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return Sl(t,e,r,!1,i)};hr.version="18.3.1-next-f1338f8080-20240426";function Vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vg)}catch(t){console.error(t)}}Vg(),Gp.exports=hr;var sx=Gp.exports,af=sx;ku.createRoot=af.createRoot,ku.hydrateRoot=af.hydrateRoot;function ox(){const t=Xe.useRef(null),e=Xe.useRef(null),[r,i]=Xe.useState(!1);return Xe.useEffect(()=>{let n=-100,a=-100,s=-100,o=-100,l;const u=h=>{n=h.clientX,a=h.clientY,t.current&&(t.current.style.transform=`translate(${n}px, ${a}px) translate(-50%, -50%)`)},d=()=>{s+=(n-s)*.14,o+=(a-o)*.14,e.current&&(e.current.style.transform=`translate(${s}px, ${o}px) translate(-50%, -50%)`),l=requestAnimationFrame(d)},f=h=>{const p=h.target;p.tagName==="A"||p.tagName==="BUTTON"||p.tagName==="INPUT"||p.tagName==="TEXTAREA"||p.closest(".work-item")||p.closest(".b-card")||p.closest(".tech-pill2")?i(!0):i(!1)};return window.addEventListener("mousemove",u),window.addEventListener("mouseover",f),l=requestAnimationFrame(d),()=>{window.removeEventListener("mousemove",u),window.removeEventListener("mouseover",f),cancelAnimationFrame(l)}},[]),R.jsxs(R.Fragment,{children:[R.jsx("div",{ref:t,className:"cursor-dot"}),R.jsx("div",{ref:e,className:`cursor-outline ${r?"hovering":""}`})]})}function lx(){return R.jsx(R.Fragment,{children:R.jsx("div",{className:"background-canvas-layer",children:R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 750",width:"100%",height:"100%",preserveAspectRatio:"none",children:[R.jsxs("defs",{children:[R.jsxs("linearGradient",{id:"bgGrad",x1:"0%",y1:"0%",x2:"100%",y2:"50%",children:[R.jsx("stop",{offset:"0%",stopColor:"#ffb162"}),R.jsx("stop",{offset:"30%",stopColor:"#ff89cc"}),R.jsx("stop",{offset:"65%",stopColor:"#8a20ff"}),R.jsx("stop",{offset:"100%",stopColor:"#3400b8"})]}),R.jsxs("linearGradient",{id:"pinkGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[R.jsx("stop",{offset:"0%",stopColor:"#de7518"}),R.jsx("stop",{offset:"35%",stopColor:"#e86fc9"}),R.jsx("stop",{offset:"70%",stopColor:"#a31eff"}),R.jsx("stop",{offset:"100%",stopColor:"#4900d4"})]}),R.jsxs("linearGradient",{id:"darkPurpleGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[R.jsx("stop",{offset:"0%",stopColor:"#9519ff"}),R.jsx("stop",{offset:"60%",stopColor:"#3700b3"}),R.jsx("stop",{offset:"100%",stopColor:"#14005c"})]}),R.jsxs("linearGradient",{id:"blueGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[R.jsx("stop",{offset:"0%",stopColor:"#00d4ff"}),R.jsx("stop",{offset:"40%",stopColor:"#00a2ff"}),R.jsx("stop",{offset:"80%",stopColor:"#004ce6"}),R.jsx("stop",{offset:"100%",stopColor:"#001882"})]})]}),R.jsx("rect",{width:"1000",height:"750",fill:"url(#bgGrad)"}),R.jsx("path",{fill:"url(#pinkGrad)",children:R.jsx("animate",{attributeName:"d",dur:"8s",repeatCount:"indefinite",values:`
                M 0 240 C 300 240, 400 420, 650 400 C 850 380, 1000 240, 1000 240 L 1000 750 L 0 750 Z;
                M 0 340 C 360 110, 520 560, 730 330 C 940 170, 1000 320, 1000 320 L 1000 750 L 0 750 Z;
                M 0 200 C 260 320, 420 240, 640 440 C 860 600, 1000 220, 1000 220 L 1000 750 L 0 750 Z;
                M 0 240 C 300 240, 400 420, 650 400 C 850 380, 1000 240, 1000 240 L 1000 750 L 0 750 Z`})}),R.jsx("path",{fill:"url(#darkPurpleGrad)",children:R.jsx("animate",{attributeName:"d",dur:"10s",repeatCount:"indefinite",values:`
                M 400 750 C 450 500, 750 550, 1000 240 L 1000 750 Z;
                M 220 750 C 340 320, 680 660, 1000 100 L 1000 750 Z;
                M 520 750 C 560 560, 820 460, 1000 340 L 1000 750 Z;
                M 400 750 C 450 500, 750 550, 1000 240 L 1000 750 Z`})}),R.jsx("path",{fill:"url(#blueGrad)",children:R.jsx("animate",{attributeName:"d",dur:"12s",repeatCount:"indefinite",values:`
                M 0 390 C 250 250, 450 750, 850 750 L 0 750 Z;
                M 0 510 C 340 120, 600 700, 980 750 L 0 750 Z;
                M 0 300 C 200 420, 420 560, 760 700 L 0 750 Z;
                M 0 390 C 250 250, 450 750, 850 750 L 0 750 Z`})})]})})})}const Rt={NAME:"Muhammad Bilal Faisal",FIRST_NAME:"Muhammad Bilal",LAST_NAME:"Faisal",INITIALS:"MBF",PRIMARY_TITLE:"Full Stack Engineer & QA Specialist",SECONDARY_TITLE:"MERN & Next.js Production Architect",EMAIL:"bilalfaisalarain@gmail.com",WHATSAPP_NUMBER:"+92 320 3066554",WHATSAPP_LINK:"https://wa.me/923203066554",LOCATION:"Karachi, Pakistan",GITHUB_PROFILE:"https://github.com/BilalFaisaldev",EXPERIENCE_VALUE:"3+",EXPERIENCE_LABEL:"Years Commercial Exp",RESUME_URL:"resume.pdf",RESUME_DOWNLOAD_NAME:"Bilal_Faisal_CV.pdf",COPYRIGHT_TEXT:"© 2026 Muhammad Bilal Faisal. All rights reserved.",TAGLINE:"Crafting scalable, high-performance web applications and resilient backend architectures with Next.js, Node.js, and automated QA testing pipelines."},Se={name:Rt.NAME,firstName:Rt.FIRST_NAME,lastName:Rt.LAST_NAME,initials:Rt.INITIALS,primaryTitle:Rt.PRIMARY_TITLE,secondaryTitle:Rt.SECONDARY_TITLE,tagline:Rt.TAGLINE,email:Rt.EMAIL,phone:Rt.WHATSAPP_NUMBER,whatsappUrl:Rt.WHATSAPP_LINK,githubUrl:Rt.GITHUB_PROFILE,location:Rt.LOCATION,resumeUrl:Rt.RESUME_URL,resumeDownloadName:Rt.RESUME_DOWNLOAD_NAME,copyrightText:Rt.COPYRIGHT_TEXT},Wg=[{value:Rt.EXPERIENCE_VALUE,label:Rt.EXPERIENCE_LABEL},{value:"9",label:"Production & Client Projects"},{value:"100%",label:"QA Test Coverage Focus"}],ux=["All","Full Stack & MERN","AI & Voice","Utilities & Tools","QA & Arcade"],Co=[{id:"dropbeam",title:"DropBeam — Instant Wi-Fi Sharing & Live Clipboard",category:"Full Stack & MERN",description:"High-speed, privacy-first local file-sharing and live clipboard synchronization utility across local Wi-Fi networks. Zero registration, drag-and-drop transfers, and real-time room communication.",tech:["Node.js","Express.js","WebSockets","Wi-Fi Subnet","HTML5 Canvas"],metric:"Wi-Fi Sync",metricLabel:"Zero-Config Transfer",liveUrl:"https://dropbeem.onrender.com/",githubUrl:"https://github.com/BilalFaisaldev/DropBeem",featured:!0},{id:"ods",title:"Omar Digital Solutions (ODS)",category:"Full Stack & MERN",description:"Responsive educational platform landing page engineered with modern UI components, course directory showcases, and automated course enrollment inquiries.",tech:["Next.js 14","Node.js","MongoDB Atlas","TailwindCSS","Vercel"],metric:"EdTech",metricLabel:"Course Directory",liveUrl:"https://ods-courses.vercel.app/",githubUrl:null,featured:!0},{id:"nova-ai",title:"NOVA — Personal AI Voice Assistant",category:"AI & Voice",description:"Conversational AI voice assistant prototype featuring speech recognition, responsive 3D audio-reactive orb visualization, and dynamic telemetry HUD powered by Google Gemini API.",tech:["Google Gemini API","Web Speech API","Canvas Audio Viz","JavaScript ES6+"],metric:"AI Engine",metricLabel:"Voice Telemetry",liveUrl:null,githubUrl:null,featured:!0},{id:"luxurystay-hms",title:"LuxuryStay — Hotel Management Suite (HMS)",category:"Full Stack & MERN",description:"End-to-end commercial hospitality platform featuring real-time room inventory management, reservation checkout flows, staff RBAC privilege tiers, and dynamic analytics dashboard.",tech:["React.js","TypeScript","Vite","TailwindCSS","Cloud Run"],metric:"Hospitality",metricLabel:"Commercial Suite",liveUrl:"https://luxurystay-hms-103758282821.asia-southeast1.run.app/",githubUrl:"https://github.com/BilalFaisaldev/luxurystay-hms",featured:!0},{id:"hinglish-transcriber",title:"Hinglish Audio Transcriber",category:"AI & Voice",description:"Specialized speech-to-text intelligence system tuned for romanized Urdu/Hindi (Hinglish) phonetics and dialectal nuances with timestamped transcript exports.",tech:["React.js","TypeScript","TailwindCSS","Node.js Express","Vite"],metric:"Bilingual AI",metricLabel:"Speech-to-Text",liveUrl:null,githubUrl:"https://github.com/BilalFaisaldev/Hinglish-Audio-Transcriber",featured:!1},{id:"instapdf",title:"InstaPDF — In-Browser Document Studio",category:"Utilities & Tools",description:"High-performance client-side document processing tool enabling instant PDF merging, splitting, reordering, and format conversion without uploading sensitive files to external servers.",tech:["JavaScript ES6+","PDF-Lib","HTML5 Canvas","Modern CSS3"],metric:"Zero-Server",metricLabel:"Privacy Utility",liveUrl:"https://instapdf.netlify.app/",githubUrl:"https://github.com/BilalFaisaldev/instapdf",featured:!1},{id:"png-webp-converter",title:"PNG to WebP High-Efficiency Converter",category:"Utilities & Tools",description:"Client-side image compression tool utilizing modern browser WebP codecs to reduce asset file sizes by up to 80% while preserving alpha transparency and visual fidelity.",tech:["Canvas 2D API","WebP Encoding","Blob Compression","Modern CSS3"],metric:"80% Compression",metricLabel:"Asset Optimizer",liveUrl:"https://png-to-webp-converter-lrwt.vercel.app/",githubUrl:"https://github.com/BilalFaisaldev/png_to_webp_converter",featured:!1},{id:"cyber-2048",title:"2048 Cyber Dark Edition",category:"QA & Arcade",description:"High-performance web arcade puzzle game featuring sleek cyber dark aesthetics, fluid CSS grid animations, touch swipe controls, and local score persistence.",tech:["JavaScript ES6+","Modern CSS3","HTML5 Canvas","Touch Gestures"],metric:"Web Arcade",metricLabel:"Cyber Edition",liveUrl:null,githubUrl:null,featured:!0},{id:"code-creative-suite",title:"Code Creative — Commercial Software Suite",category:"QA & Arcade",description:"Production client delivery ecosystem featuring automated end-to-end testing, high-throughput web architectures, and containerized deployment.",tech:["Laravel","PHP","JavaScript","TailwindCSS","Postman","QA Automation"],metric:"Agency Delivery",metricLabel:"Client Production",liveUrl:"https://staging.codecreatives.com/",githubUrl:null,featured:!0}],jg=[{id:"frontend",header:"01 // Front-End & Modern UI",title:"Building responsive, zero-defect interfaces.",tags:["Next.js 14","React 18","TypeScript","TailwindCSS","HTML5 / Modern CSS3","JavaScript ES6+","Bootstrap"],highlight:!0},{id:"backend",header:"02 // Backend & API Architecture",title:"Resilient Scalable APIs",tags:["Node.js Runtime","Express.js","PHP & Laravel","WebSockets","RESTful APIs","JWT Auth"],highlight:!1},{id:"database",header:"03 // Databases & Caching",title:"Data Architecture",tags:["MySQL","MongoDB Atlas","PostgreSQL","Supabase","SQL"],highlight:!1},{id:"devops-qa",header:"04 // DevOps, Tooling & QA Automation",title:"Production Pipelines",tags:["Playwright E2E","Postman","Git & GitHub","Docker","Vercel","Figma","CI/CD Actions"],highlight:!1}],Xg=[{year:"DEC 2025 — PRES",role:"Software Engineer & QA Specialist",company:"Code Creative & Client Delivery",description:"Working with Code Creative while managing private client projects. Engineering scalable web architectures, conducting end-to-end Quality Assurance testing, and executing API integrations."},{year:"2024 — PRES",role:"Independent Full Stack Developer",company:"Personal & Commercial Clients",description:"Delivering custom end-to-end digital solutions for direct clients. Architected high-performance web applications (including DropBeam and ODS), interactive web platforms, RESTful APIs, and cloud deployments."},{year:"JAN 2023 — 2024",role:"Core Engineering Foundations",company:"Intensive Technical Deep-Dive",description:"Initiated dedicated software development journey in January 2023. Mastered modern JavaScript (ES6+), React, Node.js, Express, databases, and automated QA practices through building rigorous prototypes."}];/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var cx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Gt=(t,e)=>{const r=Xe.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:o="",children:l,...u},d)=>Xe.createElement("svg",{ref:d,...cx,width:n,height:n,stroke:i,strokeWidth:s?Number(a)*24/Number(n):a,className:["lucide",`lucide-${dx(t)}`,o].join(" "),...u},[...e.map(([f,h])=>Xe.createElement(f,h)),...Array.isArray(l)?l:[l]]));return r.displayName=`${t}`,r};/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hx=Gt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fx=Gt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const px=Gt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mx=Gt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cc=Gt("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gx=Gt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qg=Gt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yg=Gt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vx=Gt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _x=Gt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xx=Gt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yx=Gt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bx=Gt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sx=Gt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sf=Gt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ex=Gt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Mx({onOpenTerminal:t}){const[e,r]=Xe.useState(!1),i=()=>r(!1);return R.jsxs("nav",{className:"site-navbar",children:[R.jsxs("a",{href:"#home",className:"logo-badge",onClick:i,children:[Se.initials," ",R.jsx("span",{children:"( )"})]}),R.jsxs("div",{className:"nav-links",children:[R.jsx("a",{href:"#work",children:"Work"}),R.jsx("a",{href:"#capabilities",children:"Capabilities"}),R.jsx("a",{href:"#journey",children:"Journey"}),R.jsx("a",{href:"#about",children:"About"}),R.jsx("a",{href:Se.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),R.jsx("a",{href:Se.whatsappUrl,target:"_blank",rel:"noopener noreferrer",children:"WhatsApp"}),R.jsx("a",{href:"#contact",children:"Contact"}),R.jsxs("button",{type:"button",onClick:t,className:"nav-terminal-btn",title:"Open Developer Shell",children:[R.jsx(sf,{size:14}),R.jsx("span",{children:"SHELL"})]}),R.jsxs("a",{href:Se.resumeUrl,download:Se.resumeDownloadName,target:"_blank",rel:"noopener noreferrer",className:"nav-cv-btn",title:"Download Curriculum Vitae",children:[R.jsx(Cc,{size:14}),R.jsx("span",{children:"CV"})]})]}),R.jsxs("div",{className:"mobile-nav-actions",children:[R.jsx("button",{type:"button",onClick:t,className:"nav-terminal-btn mobile-shell-btn",title:"Open Developer Shell",children:R.jsx(sf,{size:14})}),R.jsx("button",{type:"button",className:"mobile-hamburger-btn",onClick:()=>r(!e),"aria-label":"Toggle navigation menu",children:e?R.jsx(Ex,{size:20}):R.jsx(_x,{size:20})})]}),e&&R.jsxs("div",{className:"mobile-drawer-menu",children:[R.jsx("a",{href:"#work",className:"mobile-nav-link",onClick:i,children:"Work"}),R.jsx("a",{href:"#capabilities",className:"mobile-nav-link",onClick:i,children:"Capabilities"}),R.jsx("a",{href:"#journey",className:"mobile-nav-link",onClick:i,children:"Journey"}),R.jsx("a",{href:"#about",className:"mobile-nav-link",onClick:i,children:"About"}),R.jsx("a",{href:"#contact",className:"mobile-nav-link",onClick:i,children:"Contact"}),R.jsxs("div",{className:"mobile-drawer-footer",children:[R.jsxs("a",{href:Se.resumeUrl,download:Se.resumeDownloadName,target:"_blank",rel:"noopener noreferrer",className:"submit-btn",style:{width:"100%",justifyContent:"center",textDecoration:"none"},onClick:i,children:[R.jsx(Cc,{size:16}),R.jsx("span",{children:"Download CV"})]}),R.jsxs("div",{className:"mobile-drawer-socials",children:[R.jsx("a",{href:Se.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),R.jsx("a",{href:Se.whatsappUrl,target:"_blank",rel:"noopener noreferrer",children:"WhatsApp"})]})]})]})]})}/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Ud="160",Tx=0,of=1,wx=2,$g=1,Ax=2,ri=3,Vi=0,nr=1,ai=2,Fi=0,oa=1,lf=2,uf=3,cf=4,Rx=5,an=100,Cx=101,Lx=102,df=103,hf=104,Px=200,Nx=201,Dx=202,Ux=203,Lc=204,Pc=205,Ix=206,Ox=207,kx=208,Fx=209,zx=210,Bx=211,Hx=212,Gx=213,Vx=214,Wx=0,jx=1,Xx=2,tl=3,qx=4,Yx=5,$x=6,Kx=7,Kg=0,Zx=1,Qx=2,zi=0,Jx=1,ey=2,ty=3,ry=4,iy=5,ny=6,Zg=300,ga=301,va=302,Nc=303,Dc=304,El=306,Uc=1e3,Ir=1001,Ic=1002,qt=1003,ff=1004,nu=1005,yr=1006,ay=1007,vs=1008,Bi=1009,sy=1010,oy=1011,Id=1012,Qg=1013,Ri=1014,Ci=1015,_s=1016,Jg=1017,ev=1018,hn=1020,ly=1021,Or=1023,uy=1024,cy=1025,fn=1026,_a=1027,dy=1028,tv=1029,hy=1030,rv=1031,iv=1033,au=33776,su=33777,ou=33778,lu=33779,pf=35840,mf=35841,gf=35842,vf=35843,nv=36196,_f=37492,xf=37496,yf=37808,bf=37809,Sf=37810,Ef=37811,Mf=37812,Tf=37813,wf=37814,Af=37815,Rf=37816,Cf=37817,Lf=37818,Pf=37819,Nf=37820,Df=37821,uu=36492,Uf=36494,If=36495,fy=36283,Of=36284,kf=36285,Ff=36286,av=3e3,pn=3001,py=3200,my=3201,sv=0,gy=1,Sr="",Lt="srgb",pi="srgb-linear",Od="display-p3",Ml="display-p3-linear",rl="linear",nt="srgb",il="rec709",nl="p3",Tn=7680,zf=519,vy=512,_y=513,xy=514,ov=515,yy=516,by=517,Sy=518,Ey=519,Bf=35044,Hf="300 es",Oc=1035,li=2e3,al=2001;class Ea{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(r)===-1&&i[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=Math.PI/180,kc=180/Math.PI;function Ms(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[r&63|128]+kt[r>>8&255]+"-"+kt[r>>16&255]+kt[r>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Jt(t,e,r){return Math.max(e,Math.min(r,t))}function My(t,e){return(t%e+e)%e}function du(t,e,r){return(1-r)*t+r*e}function Gf(t){return(t&t-1)===0&&t!==0}function Fc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ua(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,r=0){We.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,i=this.y,n=e.elements;return this.x=n[0]*r+n[3]*i+n[6],this.y=n[1]*r+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const i=Math.cos(r),n=Math.sin(r),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,r,i,n,a,s,o,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,s,o,l,u)}set(e,r,i,n,a,s,o,l,u){const d=this.elements;return d[0]=e,d[1]=n,d[2]=o,d[3]=r,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],d=i[4],f=i[7],h=i[2],p=i[5],_=i[8],x=n[0],v=n[3],c=n[6],m=n[1],g=n[4],S=n[7],C=n[2],A=n[5],w=n[8];return a[0]=s*x+o*m+l*C,a[3]=s*v+o*g+l*A,a[6]=s*c+o*S+l*w,a[1]=u*x+d*m+f*C,a[4]=u*v+d*g+f*A,a[7]=u*c+d*S+f*w,a[2]=h*x+p*m+_*C,a[5]=h*v+p*g+_*A,a[8]=h*c+p*S+_*w,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return r*s*d-r*o*u-i*a*d+i*o*l+n*a*u-n*s*l}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=d*s-o*u,h=o*l-d*a,p=u*a-s*l,_=r*f+i*h+n*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(n*u-d*i)*x,e[2]=(o*i-n*s)*x,e[3]=h*x,e[4]=(d*r-n*l)*x,e[5]=(n*a-o*r)*x,e[6]=p*x,e[7]=(i*l-u*r)*x,e[8]=(s*r-i*a)*x,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,n,a,s,o){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*s+u*o)+s+e,-n*u,n*l,-n*(-u*s+l*o)+o+r,0,0,1),this}scale(e,r){return this.premultiply(hu.makeScale(e,r)),this}rotate(e){return this.premultiply(hu.makeRotation(-e)),this}translate(e,r){return this.premultiply(hu.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<9;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hu=new Be;function lv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ty(){const t=sl("canvas");return t.style.display="block",t}const Vf={};function Ja(t){t in Vf||(Vf[t]=!0,console.warn(t))}const Wf=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jf=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[pi]:{transfer:rl,primaries:il,toReference:t=>t,fromReference:t=>t},[Lt]:{transfer:nt,primaries:il,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ml]:{transfer:rl,primaries:nl,toReference:t=>t.applyMatrix3(jf),fromReference:t=>t.applyMatrix3(Wf)},[Od]:{transfer:nt,primaries:nl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(jf),fromReference:t=>t.applyMatrix3(Wf).convertLinearToSRGB()}},wy=new Set([pi,Ml]),Qe={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!wy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,r){if(this.enabled===!1||e===r||!e||!r)return t;const i=Ys[e].toReference,n=Ys[r].fromReference;return n(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ys[t].primaries},getTransfer:function(t){return t===Sr?rl:Ys[t].transfer}};function la(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let wn;class uv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{wn===void 0&&(wn=sl("canvas")),wn.width=e.width,wn.height=e.height;const i=wn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=wn}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=sl("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=la(a[s]/255)*255;return i.putImageData(n,0,0),r}else if(e.data){const r=e.data.slice(0);for(let i=0;i<r.length;i++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[i]=Math.floor(la(r[i]/255)*255):r[i]=la(r[i]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ay=0;class cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Ms(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(pu(n[s].image)):a.push(pu(n[s]))}else a=pu(n);i.url=a}return r||(e.images[this.uuid]=i),i}}function pu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?uv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ry=0;class cr extends Ea{constructor(e=cr.DEFAULT_IMAGE,r=cr.DEFAULT_MAPPING,i=Ir,n=Ir,a=yr,s=vs,o=Or,l=Bi,u=cr.DEFAULT_ANISOTROPY,d=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Ms(),this.name="",this.source=new cv(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===pn?Lt:Sr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uc:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uc:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?pn:av}set encoding(e){Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pn?Lt:Sr}}cr.DEFAULT_IMAGE=null;cr.DEFAULT_MAPPING=Zg;cr.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,r=0,i=0,n=1){wt.prototype.isVector4=!0,this.x=e,this.y=r,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,n){return this.x=e,this.y=r,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*r+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*r+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*r+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*r+s[7]*i+s[11]*n+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,n,a;const s=e.elements,o=s[0],l=s[4],u=s[8],d=s[1],f=s[5],h=s[9],p=s[2],_=s[6],x=s[10];if(Math.abs(l-d)<.01&&Math.abs(u-p)<.01&&Math.abs(h-_)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+p)<.1&&Math.abs(h+_)<.1&&Math.abs(o+f+x-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const c=(o+1)/2,m=(f+1)/2,g=(x+1)/2,S=(l+d)/4,C=(u+p)/4,A=(h+_)/4;return c>m&&c>g?c<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(c),n=S/i,a=C/i):m>g?m<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(m),i=S/n,a=A/n):g<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(g),i=C/a,n=A/a),this.set(i,n,a,r),this}let v=Math.sqrt((_-h)*(_-h)+(u-p)*(u-p)+(d-l)*(d-l));return Math.abs(v)<.001&&(v=1),this.x=(_-h)/v,this.y=(u-p)/v,this.z=(d-l)/v,this.w=Math.acos((o+f+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cy extends Ea{constructor(e=1,r=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new wt(0,0,e,r),this.scissorTest=!1,this.viewport=new wt(0,0,e,r);const n={width:e,height:r,depth:1};i.encoding!==void 0&&(Ja("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===pn?Lt:Sr),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yr,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new cr(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,r,i=1){(this.width!==e||this.height!==r||this.depth!==i)&&(this.width=e,this.height=r,this.depth=i,this.texture.image.width=e,this.texture.image.height=r,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new cv(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Cy{constructor(e=1,r=1,i={}){super(e,r,i),this.isWebGLRenderTarget=!0}}class dv extends cr{constructor(e=null,r=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ly extends cr{constructor(e=null,r=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=qt,this.minFilter=qt,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=0,r=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=i,this._w=n}static slerpFlat(e,r,i,n,a,s,o){let l=i[n+0],u=i[n+1],d=i[n+2],f=i[n+3];const h=a[s+0],p=a[s+1],_=a[s+2],x=a[s+3];if(o===0){e[r+0]=l,e[r+1]=u,e[r+2]=d,e[r+3]=f;return}if(o===1){e[r+0]=h,e[r+1]=p,e[r+2]=_,e[r+3]=x;return}if(f!==x||l!==h||u!==p||d!==_){let v=1-o;const c=l*h+u*p+d*_+f*x,m=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const C=Math.sqrt(g),A=Math.atan2(C,c*m);v=Math.sin(v*A)/C,o=Math.sin(o*A)/C}const S=o*m;if(l=l*v+h*S,u=u*v+p*S,d=d*v+_*S,f=f*v+x*S,v===1-o){const C=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=C,u*=C,d*=C,f*=C}}e[r]=l,e[r+1]=u,e[r+2]=d,e[r+3]=f}static multiplyQuaternionsFlat(e,r,i,n,a,s){const o=i[n],l=i[n+1],u=i[n+2],d=i[n+3],f=a[s],h=a[s+1],p=a[s+2],_=a[s+3];return e[r]=o*_+d*f+l*p-u*h,e[r+1]=l*_+d*h+u*f-o*p,e[r+2]=u*_+d*p+o*h-l*f,e[r+3]=d*_-o*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,i,n){return this._x=e,this._y=r,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(n/2),f=o(a/2),h=l(i/2),p=l(n/2),_=l(a/2);switch(s){case"XYZ":this._x=h*d*f+u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f+h*p*_;break;case"YZX":this._x=h*d*f+u*p*_,this._y=u*p*f+h*d*_,this._z=u*d*_-h*p*f,this._w=u*d*f-h*p*_;break;case"XZY":this._x=h*d*f-u*p*_,this._y=u*p*f-h*d*_,this._z=u*d*_+h*p*f,this._w=u*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const i=r/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,i=r[0],n=r[4],a=r[8],s=r[1],o=r[5],l=r[9],u=r[2],d=r[6],f=r[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-u)*p,this._z=(s-n)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(a+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(a-u)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(s-n)/p,this._x=(a+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let i=e.dot(r)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,r){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,r/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const i=e._x,n=e._y,a=e._z,s=e._w,o=r._x,l=r._y,u=r._z,d=r._w;return this._x=i*d+s*o+n*u-a*l,this._y=n*d+s*l+a*o-i*u,this._z=a*d+s*u+i*l-n*o,this._w=s*d-i*o-n*l-a*u,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-r;return this._w=p*s+r*this._w,this._x=p*i+r*this._x,this._y=p*n+r*this._y,this._z=p*a+r*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,o),f=Math.sin((1-r)*d)/u,h=Math.sin(r*d)/u;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=n*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,r,i){return this.copy(e).slerp(r,i)}random(){const e=Math.random(),r=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(r*Math.cos(n),i*Math.sin(a),i*Math.cos(a),r*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,r=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(Xf.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(Xf.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[3]*i+a[6]*n,this.y=a[1]*r+a[4]*i+a[7]*n,this.z=a[2]*r+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*r+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*r+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*r+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*r+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){const r=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*n-o*i),d=2*(o*r-a*n),f=2*(a*i-s*r);return this.x=r+l*u+s*f-o*d,this.y=i+l*d+o*u-a*f,this.z=n+l*f+a*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[4]*i+a[8]*n,this.y=a[1]*r+a[5]*i+a[9]*n,this.z=a[2]*r+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const i=e.x,n=e.y,a=e.z,s=r.x,o=r.y,l=r.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mu.copy(this).projectOnVector(e),this.sub(mu)}reflect(e){return this.sub(mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return r*r+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){const n=Math.sin(r)*e;return this.x=n*Math.sin(i),this.y=Math.cos(r)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=n,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,r=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(r),this.y=i*Math.sin(r),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mu=new O,Xf=new Ts;class ws{constructor(e=new O(1/0,1/0,1/0),r=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r+=3)this.expandByPoint(Rr.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,i=e.count;r<i;r++)this.expandByPoint(Rr.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const i=Rr.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(r===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Rr):Rr.fromBufferAttribute(a,s),Rr.applyMatrix4(e.matrixWorld),this.expandByPoint(Rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],r);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rr),Rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,i;return e.normal.x>0?(r=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),r<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),Ks.subVectors(this.max,Ia),An.subVectors(e.a,Ia),Rn.subVectors(e.b,Ia),Cn.subVectors(e.c,Ia),vi.subVectors(Rn,An),_i.subVectors(Cn,Rn),Ki.subVectors(An,Cn);let r=[0,-vi.z,vi.y,0,-_i.z,_i.y,0,-Ki.z,Ki.y,vi.z,0,-vi.x,_i.z,0,-_i.x,Ki.z,0,-Ki.x,-vi.y,vi.x,0,-_i.y,_i.x,0,-Ki.y,Ki.x,0];return!gu(r,An,Rn,Cn,Ks)||(r=[1,0,0,0,1,0,0,0,1],!gu(r,An,Rn,Cn,Ks))?!1:(Zs.crossVectors(vi,_i),r=[Zs.x,Zs.y,Zs.z],gu(r,An,Rn,Cn,Ks))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zr=[new O,new O,new O,new O,new O,new O,new O,new O],Rr=new O,$s=new ws,An=new O,Rn=new O,Cn=new O,vi=new O,_i=new O,Ki=new O,Ia=new O,Ks=new O,Zs=new O,Zi=new O;function gu(t,e,r,i,n){for(let a=0,s=t.length-3;a<=s;a+=3){Zi.fromArray(t,a);const o=n.x*Math.abs(Zi.x)+n.y*Math.abs(Zi.y)+n.z*Math.abs(Zi.z),l=e.dot(Zi),u=r.dot(Zi),d=i.dot(Zi);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const Py=new ws,Oa=new O,vu=new O;class kd{constructor(e=new O,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const i=this.center;r!==void 0?i.copy(r):Py.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const i=this.center.distanceToSquared(e);return r.copy(e),i>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const r=Oa.lengthSq();if(r>this.radius*this.radius){const i=Math.sqrt(r),n=(i-this.radius)*.5;this.center.addScaledVector(Oa,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(vu)),this.expandByPoint(Oa.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qr=new O,_u=new O,Qs=new O,xi=new O,xu=new O,Js=new O,yu=new O;class Ny{constructor(e=new O,r=new O(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qr)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const i=r.dot(this.direction);return i<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=Qr.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(Qr.copy(this.origin).addScaledVector(this.direction,r),Qr.distanceToSquared(e))}distanceSqToSegment(e,r,i,n){_u.copy(e).add(r).multiplyScalar(.5),Qs.copy(r).sub(e).normalize(),xi.copy(this.origin).sub(_u);const a=e.distanceTo(r)*.5,s=-this.direction.dot(Qs),o=xi.dot(this.direction),l=-xi.dot(Qs),u=xi.lengthSq(),d=Math.abs(1-s*s);let f,h,p,_;if(d>0)if(f=s*l-o,h=s*o-l,_=a*d,f>=0)if(h>=-_)if(h<=_){const x=1/d;f*=x,h*=x,p=f*(f+s*h+2*o)+h*(s*f+h+2*l)+u}else h=a,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+u;else h=-a,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-s*a+o)),h=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+u):(f=Math.max(0,-(s*a+o)),h=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+u);else h=s>0?-a:a,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(_u).addScaledVector(Qs,h),p}intersectSphere(e,r){Qr.subVectors(e.center,this.origin);const i=Qr.dot(this.direction),n=Qr.dot(Qr)-i*i,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,r):this.at(o,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/r;return i>=0?i:null}intersectPlane(e,r){const i=this.distanceToPlane(e);return i===null?null:this.at(i,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let i,n,a,s,o,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,n=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,n=(e.min.x-h.x)*u),d>=0?(a=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(a=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,r)}intersectsBox(e){return this.intersectBox(e,Qr)!==null}intersectTriangle(e,r,i,n,a){xu.subVectors(r,e),Js.subVectors(i,e),yu.crossVectors(xu,Js);let s=this.direction.dot(yu),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;xi.subVectors(this.origin,e);const l=o*this.direction.dot(Js.crossVectors(xi,Js));if(l<0)return null;const u=o*this.direction.dot(xu.cross(xi));if(u<0||l+u>s)return null;const d=-o*xi.dot(yu);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,r,i,n,a,s,o,l,u,d,f,h,p,_,x,v){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,s,o,l,u,d,f,h,p,_,x,v)}set(e,r,i,n,a,s,o,l,u,d,f,h,p,_,x,v){const c=this.elements;return c[0]=e,c[4]=r,c[8]=i,c[12]=n,c[1]=a,c[5]=s,c[9]=o,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=h,c[3]=p,c[7]=_,c[11]=x,c[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){const r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,i=e.elements,n=1/Ln.setFromMatrixColumn(e,0).length(),a=1/Ln.setFromMatrixColumn(e,1).length(),s=1/Ln.setFromMatrixColumn(e,2).length();return r[0]=i[0]*n,r[1]=i[1]*n,r[2]=i[2]*n,r[3]=0,r[4]=i[4]*a,r[5]=i[5]*a,r[6]=i[6]*a,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),u=Math.sin(n),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=s*d,p=s*f,_=o*d,x=o*f;r[0]=l*d,r[4]=-l*f,r[8]=u,r[1]=p+_*u,r[5]=h-x*u,r[9]=-o*l,r[2]=x-h*u,r[6]=_+p*u,r[10]=s*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=u*d,x=u*f;r[0]=h+x*o,r[4]=_*o-p,r[8]=s*u,r[1]=s*f,r[5]=s*d,r[9]=-o,r[2]=p*o-_,r[6]=x+h*o,r[10]=s*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=u*d,x=u*f;r[0]=h-x*o,r[4]=-s*f,r[8]=_+p*o,r[1]=p+_*o,r[5]=s*d,r[9]=x-h*o,r[2]=-s*u,r[6]=o,r[10]=s*l}else if(e.order==="ZYX"){const h=s*d,p=s*f,_=o*d,x=o*f;r[0]=l*d,r[4]=_*u-p,r[8]=h*u+x,r[1]=l*f,r[5]=x*u+h,r[9]=p*u-_,r[2]=-u,r[6]=o*l,r[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,_=o*l,x=o*u;r[0]=l*d,r[4]=x-h*f,r[8]=_*f+p,r[1]=f,r[5]=s*d,r[9]=-o*d,r[2]=-u*d,r[6]=p*f+_,r[10]=h-x*f}else if(e.order==="XZY"){const h=s*l,p=s*u,_=o*l,x=o*u;r[0]=l*d,r[4]=-f,r[8]=u*d,r[1]=h*f+x,r[5]=s*d,r[9]=p*f-_,r[2]=_*f-p,r[6]=o*d,r[10]=x*f+h}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dy,e,Uy)}lookAt(e,r,i){const n=this.elements;return ar.subVectors(e,r),ar.lengthSq()===0&&(ar.z=1),ar.normalize(),yi.crossVectors(i,ar),yi.lengthSq()===0&&(Math.abs(i.z)===1?ar.x+=1e-4:ar.z+=1e-4,ar.normalize(),yi.crossVectors(i,ar)),yi.normalize(),eo.crossVectors(ar,yi),n[0]=yi.x,n[4]=eo.x,n[8]=ar.x,n[1]=yi.y,n[5]=eo.y,n[9]=ar.y,n[2]=yi.z,n[6]=eo.z,n[10]=ar.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],d=i[1],f=i[5],h=i[9],p=i[13],_=i[2],x=i[6],v=i[10],c=i[14],m=i[3],g=i[7],S=i[11],C=i[15],A=n[0],w=n[4],P=n[8],y=n[12],E=n[1],G=n[5],X=n[9],se=n[13],N=n[2],V=n[6],q=n[10],$=n[14],D=n[3],I=n[7],j=n[11],Y=n[15];return a[0]=s*A+o*E+l*N+u*D,a[4]=s*w+o*G+l*V+u*I,a[8]=s*P+o*X+l*q+u*j,a[12]=s*y+o*se+l*$+u*Y,a[1]=d*A+f*E+h*N+p*D,a[5]=d*w+f*G+h*V+p*I,a[9]=d*P+f*X+h*q+p*j,a[13]=d*y+f*se+h*$+p*Y,a[2]=_*A+x*E+v*N+c*D,a[6]=_*w+x*G+v*V+c*I,a[10]=_*P+x*X+v*q+c*j,a[14]=_*y+x*se+v*$+c*Y,a[3]=m*A+g*E+S*N+C*D,a[7]=m*w+g*G+S*V+C*I,a[11]=m*P+g*X+S*q+C*j,a[15]=m*y+g*se+S*$+C*Y,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],u=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],v=e[11],c=e[15];return _*(+a*l*f-n*u*f-a*o*h+i*u*h+n*o*p-i*l*p)+x*(+r*l*p-r*u*h+a*s*h-n*s*p+n*u*d-a*l*d)+v*(+r*u*f-r*o*p-a*s*f+i*s*p+a*o*d-i*u*d)+c*(-n*o*d-r*l*f+r*o*h+n*s*f-i*s*h+i*l*d)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=r,n[14]=i),this}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],v=e[14],c=e[15],m=f*v*u-x*h*u+x*l*p-o*v*p-f*l*c+o*h*c,g=_*h*u-d*v*u-_*l*p+s*v*p+d*l*c-s*h*c,S=d*x*u-_*f*u+_*o*p-s*x*p-d*o*c+s*f*c,C=_*f*l-d*x*l-_*o*h+s*x*h+d*o*v-s*f*v,A=r*m+i*g+n*S+a*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=m*w,e[1]=(x*h*a-f*v*a-x*n*p+i*v*p+f*n*c-i*h*c)*w,e[2]=(o*v*a-x*l*a+x*n*u-i*v*u-o*n*c+i*l*c)*w,e[3]=(f*l*a-o*h*a-f*n*u+i*h*u+o*n*p-i*l*p)*w,e[4]=g*w,e[5]=(d*v*a-_*h*a+_*n*p-r*v*p-d*n*c+r*h*c)*w,e[6]=(_*l*a-s*v*a-_*n*u+r*v*u+s*n*c-r*l*c)*w,e[7]=(s*h*a-d*l*a+d*n*u-r*h*u-s*n*p+r*l*p)*w,e[8]=S*w,e[9]=(_*f*a-d*x*a-_*i*p+r*x*p+d*i*c-r*f*c)*w,e[10]=(s*x*a-_*o*a+_*i*u-r*x*u-s*i*c+r*o*c)*w,e[11]=(d*o*a-s*f*a-d*i*u+r*f*u+s*i*p-r*o*p)*w,e[12]=C*w,e[13]=(d*x*n-_*f*n+_*i*h-r*x*h-d*i*v+r*f*v)*w,e[14]=(_*o*n-s*x*n-_*i*l+r*x*l+s*i*v-r*o*v)*w,e[15]=(s*f*n-d*o*n+d*i*l-r*f*l-s*i*h+r*o*h)*w,this}scale(e){const r=this.elements,i=e.x,n=e.y,a=e.z;return r[0]*=i,r[4]*=n,r[8]*=a,r[1]*=i,r[5]*=n,r[9]*=a,r[2]*=i,r[6]*=n,r[10]*=a,r[3]*=i,r[7]*=n,r[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,n))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const i=Math.cos(r),n=Math.sin(r),a=1-i,s=e.x,o=e.y,l=e.z,u=a*s,d=a*o;return this.set(u*s+i,u*o-n*l,u*l+n*o,0,u*o+n*l,d*o+i,d*l-n*s,0,u*l-n*o,d*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,r,n,1,0,0,0,0,1),this}compose(e,r,i){const n=this.elements,a=r._x,s=r._y,o=r._z,l=r._w,u=a+a,d=s+s,f=o+o,h=a*u,p=a*d,_=a*f,x=s*d,v=s*f,c=o*f,m=l*u,g=l*d,S=l*f,C=i.x,A=i.y,w=i.z;return n[0]=(1-(x+c))*C,n[1]=(p+S)*C,n[2]=(_-g)*C,n[3]=0,n[4]=(p-S)*A,n[5]=(1-(h+c))*A,n[6]=(v+m)*A,n[7]=0,n[8]=(_+g)*w,n[9]=(v-m)*w,n[10]=(1-(h+x))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,r,i){const n=this.elements;let a=Ln.set(n[0],n[1],n[2]).length();const s=Ln.set(n[4],n[5],n[6]).length(),o=Ln.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Cr.copy(this);const l=1/a,u=1/s,d=1/o;return Cr.elements[0]*=l,Cr.elements[1]*=l,Cr.elements[2]*=l,Cr.elements[4]*=u,Cr.elements[5]*=u,Cr.elements[6]*=u,Cr.elements[8]*=d,Cr.elements[9]*=d,Cr.elements[10]*=d,r.setFromRotationMatrix(Cr),i.x=a,i.y=s,i.z=o,this}makePerspective(e,r,i,n,a,s,o=li){const l=this.elements,u=2*a/(r-e),d=2*a/(i-n),f=(r+e)/(r-e),h=(i+n)/(i-n);let p,_;if(o===li)p=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===al)p=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,r,i,n,a,s,o=li){const l=this.elements,u=1/(r-e),d=1/(i-n),f=1/(s-a),h=(r+e)*u,p=(i+n)*d;let _,x;if(o===li)_=(s+a)*f,x=-2*f;else if(o===al)_=a*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<16;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}}const Ln=new O,Cr=new bt,Dy=new O(0,0,0),Uy=new O(1,1,1),yi=new O,eo=new O,ar=new O,qf=new bt,Yf=new Ts;class Tl{constructor(e=0,r=0,i=0,n=Tl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,n=this._order){return this._x=e,this._y=r,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],u=n[5],d=n[9],f=n[2],h=n[6],p=n[10];switch(r){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qf,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return Yf.setFromEuler(this),this.setFromQuaternion(Yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tl.DEFAULT_ORDER="XYZ";class hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iy=0;const $f=new O,Pn=new Ts,Jr=new bt,to=new O,ka=new O,Oy=new O,ky=new Ts,Kf=new O(1,0,0),Zf=new O(0,1,0),Qf=new O(0,0,1),Fy={type:"added"},zy={type:"removed"};class Bt extends Ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new O,r=new Tl,i=new Ts,n=new O(1,1,1);function a(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new bt},normalMatrix:{value:new Be}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return Pn.setFromAxisAngle(e,r),this.quaternion.multiply(Pn),this}rotateOnWorldAxis(e,r){return Pn.setFromAxisAngle(e,r),this.quaternion.premultiply(Pn),this}rotateX(e){return this.rotateOnAxis(Kf,e)}rotateY(e){return this.rotateOnAxis(Zf,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,r){return $f.copy(e).applyQuaternion(this.quaternion),this.position.add($f.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(Kf,e)}translateY(e){return this.translateOnAxis(Zf,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jr.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?to.copy(e):to.set(e,r,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jr.lookAt(ka,to,this.up):Jr.lookAt(to,ka,this.up),this.quaternion.setFromRotationMatrix(Jr),n&&(Jr.extractRotation(n.matrixWorld),Pn.setFromRotationMatrix(Jr),this.quaternion.premultiply(Pn.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(zy)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,r);if(a!==void 0)return a}}getObjectsByProperty(e,r,i=[]){this[e]===r&&i.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,r,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,Oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,ky,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let i=0,n=r.length;i<n;i++){const a=r[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,r){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),r===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++){const o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(r){const o=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=n,i;function s(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Bt.DEFAULT_UP=new O(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lr=new O,ei=new O,bu=new O,ti=new O,Nn=new O,Dn=new O,Jf=new O,Su=new O,Eu=new O,Mu=new O;let ro=!1;class Ur{constructor(e=new O,r=new O,i=new O){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,n){n.subVectors(i,r),Lr.subVectors(e,r),n.cross(Lr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,r,i,n,a){Lr.subVectors(n,r),ei.subVectors(i,r),bu.subVectors(e,r);const s=Lr.dot(Lr),o=Lr.dot(ei),l=Lr.dot(bu),u=ei.dot(ei),d=ei.dot(bu),f=s*u-o*o;if(f===0)return a.set(0,0,0),null;const h=1/f,p=(u*l-o*d)*h,_=(s*d-o*l)*h;return a.set(1-p-_,_,p)}static containsPoint(e,r,i,n){return this.getBarycoord(e,r,i,n,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,r,i,n,a,s,o,l){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),this.getInterpolation(e,r,i,n,a,s,o,l)}static getInterpolation(e,r,i,n,a,s,o,l){return this.getBarycoord(e,r,i,n,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ti.x),l.addScaledVector(s,ti.y),l.addScaledVector(o,ti.z),l)}static isFrontFacing(e,r,i,n){return Lr.subVectors(i,r),ei.subVectors(e,r),Lr.cross(ei).dot(n)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,n){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,r,i,n){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lr.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Lr.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ur.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return Ur.getBarycoord(e,this.a,this.b,this.c,r)}getUV(e,r,i,n,a){return ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ro=!0),Ur.getInterpolation(e,this.a,this.b,this.c,r,i,n,a)}getInterpolation(e,r,i,n,a){return Ur.getInterpolation(e,this.a,this.b,this.c,r,i,n,a)}containsPoint(e){return Ur.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ur.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const i=this.a,n=this.b,a=this.c;let s,o;Nn.subVectors(n,i),Dn.subVectors(a,i),Su.subVectors(e,i);const l=Nn.dot(Su),u=Dn.dot(Su);if(l<=0&&u<=0)return r.copy(i);Eu.subVectors(e,n);const d=Nn.dot(Eu),f=Dn.dot(Eu);if(d>=0&&f<=d)return r.copy(n);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),r.copy(i).addScaledVector(Nn,s);Mu.subVectors(e,a);const p=Nn.dot(Mu),_=Dn.dot(Mu);if(_>=0&&p<=_)return r.copy(a);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),r.copy(i).addScaledVector(Dn,o);const v=d*_-p*f;if(v<=0&&f-d>=0&&p-_>=0)return Jf.subVectors(a,n),o=(f-d)/(f-d+(p-_)),r.copy(n).addScaledVector(Jf,o);const c=1/(v+x+h);return s=x*c,o=h*c,r.copy(i).addScaledVector(Nn,s).addScaledVector(Dn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},io={h:0,s:0,l:0};function Tu(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*6*(2/3-r):t}class Ye{constructor(e,r,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,i)}set(e,r,i){if(r===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,r,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,r),this}setRGB(e,r,i,n=Qe.workingColorSpace){return this.r=e,this.g=r,this.b=i,Qe.toWorkingColorSpace(this,n),this}setHSL(e,r,i,n=Qe.workingColorSpace){if(e=My(e,1),r=Jt(r,0,1),i=Jt(i,0,1),r===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+r):i+r-i*r,s=2*i-a;this.r=Tu(s,a,e+1/3),this.g=Tu(s,a,e),this.b=Tu(s,a,e-1/3)}return Qe.toWorkingColorSpace(this,n),this}setStyle(e,r=Lt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,r);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,r);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,r);if(s===6)return this.setHex(parseInt(a,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=Lt){const i=fv[e.toLowerCase()];return i!==void 0?this.setHex(i,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=fu(e.r),this.g=fu(e.g),this.b=fu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Qe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Jt(Ft.r*255,0,255))*65536+Math.round(Jt(Ft.g*255,0,255))*256+Math.round(Jt(Ft.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ft.copy(this),r);const i=Ft.r,n=Ft.g,a=Ft.b,s=Math.max(i,n,a),o=Math.min(i,n,a);let l,u;const d=(o+s)/2;if(o===s)l=0,u=0;else{const f=s-o;switch(u=d<=.5?f/(s+o):f/(2-s-o),s){case i:l=(n-a)/f+(n<a?6:0);break;case n:l=(a-i)/f+2;break;case a:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,r=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ft.copy(this),r),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Lt){Qe.fromWorkingColorSpace(Ft.copy(this),e);const r=Ft.r,i=Ft.g,n=Ft.b;return e!==Lt?`color(${e} ${r.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,r,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+r,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,i){return this.r=e.r+(r.r-e.r)*i,this.g=e.g+(r.g-e.g)*i,this.b=e.b+(r.b-e.b)*i,this}lerpHSL(e,r){this.getHSL(bi),e.getHSL(io);const i=du(bi.h,io.h,r),n=du(bi.s,io.s,r),a=du(bi.l,io.l,r);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*r+a[3]*i+a[6]*n,this.g=a[1]*r+a[4]*i+a[7]*n,this.b=a[2]*r+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ye;Ye.NAMES=fv;let By=0;class As extends Ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=oa,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Pc,this.blendEquation=an,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tn,this.stencilZFail=Tn,this.stencilZPass=Tn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const i=e[r];if(i===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const n=this[r];if(n===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lc&&(i.blendSrc=this.blendSrc),this.blendDst!==Pc&&(i.blendDst=this.blendDst),this.blendEquation!==an&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(r){const a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let i=null;if(r!==null){const n=r.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=r[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fd extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new O,no=new We;class Yr{constructor(e,r,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=i,this.usage=Bf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,i){e*=this.itemSize,i*=r.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=r.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,i=this.count;r<i;r++)no.fromBufferAttribute(this,r),no.applyMatrix3(e),this.setXY(r,no.x,no.y);else if(this.itemSize===3)for(let r=0,i=this.count;r<i;r++)gt.fromBufferAttribute(this,r),gt.applyMatrix3(e),this.setXYZ(r,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let r=0,i=this.count;r<i;r++)gt.fromBufferAttribute(this,r),gt.applyMatrix4(e),this.setXYZ(r,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let r=0,i=this.count;r<i;r++)gt.fromBufferAttribute(this,r),gt.applyNormalMatrix(e),this.setXYZ(r,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let r=0,i=this.count;r<i;r++)gt.fromBufferAttribute(this,r),gt.transformDirection(e),this.setXYZ(r,gt.x,gt.y,gt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let i=this.array[e*this.itemSize+r];return this.normalized&&(i=Ua(i,this.array)),i}setComponent(e,r,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+r]=i,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=Ua(r,this.array)),r}setX(e,r){return this.normalized&&(r=Zt(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=Ua(r,this.array)),r}setY(e,r){return this.normalized&&(r=Zt(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=Ua(r,this.array)),r}setZ(e,r){return this.normalized&&(r=Zt(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=Ua(r,this.array)),r}setW(e,r){return this.normalized&&(r=Zt(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,i){return e*=this.itemSize,this.normalized&&(r=Zt(r,this.array),i=Zt(i,this.array)),this.array[e+0]=r,this.array[e+1]=i,this}setXYZ(e,r,i,n){return e*=this.itemSize,this.normalized&&(r=Zt(r,this.array),i=Zt(i,this.array),n=Zt(n,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,r,i,n,a){return e*=this.itemSize,this.normalized&&(r=Zt(r,this.array),i=Zt(i,this.array),n=Zt(n,this.array),a=Zt(a,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bf&&(e.usage=this.usage),e}}class pv extends Yr{constructor(e,r,i){super(new Uint16Array(e),r,i)}}class mv extends Yr{constructor(e,r,i){super(new Uint32Array(e),r,i)}}class $r extends Yr{constructor(e,r,i){super(new Float32Array(e),r,i)}}let Hy=0;const vr=new bt,wu=new Bt,Un=new O,sr=new ws,Fa=new ws,Mt=new O;class qi extends Ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lv(e)?mv:pv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Be().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vr.makeRotationFromQuaternion(e),this.applyMatrix4(vr),this}rotateX(e){return vr.makeRotationX(e),this.applyMatrix4(vr),this}rotateY(e){return vr.makeRotationY(e),this.applyMatrix4(vr),this}rotateZ(e){return vr.makeRotationZ(e),this.applyMatrix4(vr),this}translate(e,r,i){return vr.makeTranslation(e,r,i),this.applyMatrix4(vr),this}scale(e,r,i){return vr.makeScale(e,r,i),this.applyMatrix4(vr),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Un).negate(),this.translate(Un.x,Un.y,Un.z),this}setFromPoints(e){const r=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];r.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new $r(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,n=r.length;i<n;i++){const a=r[i];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,sr.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,sr.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(sr.min),this.boundingBox.expandByPoint(sr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kd);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(sr.setFromBufferAttribute(e),r)for(let a=0,s=r.length;a<s;a++){const o=r[a];Fa.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(sr.min,Fa.min),sr.expandByPoint(Mt),Mt.addVectors(sr.max,Fa.max),sr.expandByPoint(Mt)):(sr.expandByPoint(Fa.min),sr.expandByPoint(Fa.max))}sr.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)Mt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(Mt));if(r)for(let a=0,s=r.length;a<s;a++){const o=r[a],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Mt.fromBufferAttribute(o,u),l&&(Un.fromBufferAttribute(e,u),Mt.add(Un)),n=Math.max(n,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=r.position.array,a=r.normal.array,s=r.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yr(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let E=0;E<o;E++)u[E]=new O,d[E]=new O;const f=new O,h=new O,p=new O,_=new We,x=new We,v=new We,c=new O,m=new O;function g(E,G,X){f.fromArray(n,E*3),h.fromArray(n,G*3),p.fromArray(n,X*3),_.fromArray(s,E*2),x.fromArray(s,G*2),v.fromArray(s,X*2),h.sub(f),p.sub(f),x.sub(_),v.sub(_);const se=1/(x.x*v.y-v.x*x.y);isFinite(se)&&(c.copy(h).multiplyScalar(v.y).addScaledVector(p,-x.y).multiplyScalar(se),m.copy(p).multiplyScalar(x.x).addScaledVector(h,-v.x).multiplyScalar(se),u[E].add(c),u[G].add(c),u[X].add(c),d[E].add(m),d[G].add(m),d[X].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let E=0,G=S.length;E<G;++E){const X=S[E],se=X.start,N=X.count;for(let V=se,q=se+N;V<q;V+=3)g(i[V+0],i[V+1],i[V+2])}const C=new O,A=new O,w=new O,P=new O;function y(E){w.fromArray(a,E*3),P.copy(w);const G=u[E];C.copy(G),C.sub(w.multiplyScalar(w.dot(G))).normalize(),A.crossVectors(P,G);const X=A.dot(d[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=X}for(let E=0,G=S.length;E<G;++E){const X=S[E],se=X.start,N=X.count;for(let V=se,q=se+N;V<q;V+=3)y(i[V+0]),y(i[V+1]),y(i[V+2])}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yr(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const n=new O,a=new O,s=new O,o=new O,l=new O,u=new O,d=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),v=e.getX(h+2);n.fromBufferAttribute(r,_),a.fromBufferAttribute(r,x),s.fromBufferAttribute(r,v),d.subVectors(s,a),f.subVectors(n,a),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,v),o.add(d),l.add(d),u.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let h=0,p=r.count;h<p;h+=3)n.fromBufferAttribute(r,h+0),a.fromBufferAttribute(r,h+1),s.fromBufferAttribute(r,h+2),d.subVectors(s,a),f.subVectors(n,a),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)Mt.fromBufferAttribute(e,r),Mt.normalize(),e.setXYZ(r,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,f=o.normalized,h=new u.constructor(l.length*d);let p=0,_=0;for(let x=0,v=l.length;x<v;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*d;for(let c=0;c<d;c++)h[_++]=u[p++]}return new Yr(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new qi,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],u=e(l,i);r.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const l=[],u=a[o];for(let d=0,f=u.length;d<f;d++){const h=u[d],p=e(h,i);l.push(p)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];r.addGroup(u.start,u.count,u.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];d.push(p.toJSON(e.data))}d.length>0&&(n[l]=d,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(r));const n=e.attributes;for(const u in n){const d=n[u];this.setAttribute(u,d.clone(r))}const a=e.morphAttributes;for(const u in a){const d=[],f=a[u];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(r));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ep=new bt,Qi=new Ny,ao=new kd,tp=new O,In=new O,On=new O,kn=new O,Au=new O,so=new O,oo=new We,lo=new We,uo=new We,rp=new O,ip=new O,np=new O,co=new O,ho=new O;class jr extends Bt{constructor(e=new qi,r=new Fd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,r){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;r.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){so.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const d=o[l],f=a[l];d!==0&&(Au.fromBufferAttribute(f,e),s?so.addScaledVector(Au,d):so.addScaledVector(Au.sub(r),d))}r.add(so)}return r}raycast(e,r){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(a),Qi.copy(e.ray).recast(e.near),!(ao.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ao,tp)===null||Qi.origin.distanceToSquared(tp)>(e.far-e.near)**2))&&(ep.copy(a).invert(),Qi.copy(e.ray).applyMatrix4(ep),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,r,Qi)))}_computeIntersections(e,r,i){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const v=h[_],c=s[v.materialIndex],m=Math.max(v.start,p.start),g=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let S=m,C=g;S<C;S+=3){const A=o.getX(S),w=o.getX(S+1),P=o.getX(S+2);n=fo(this,c,e,i,u,d,f,A,w,P),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=v.materialIndex,r.push(n))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let v=_,c=x;v<c;v+=3){const m=o.getX(v),g=o.getX(v+1),S=o.getX(v+2);n=fo(this,s,e,i,u,d,f,m,g,S),n&&(n.faceIndex=Math.floor(v/3),r.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const v=h[_],c=s[v.materialIndex],m=Math.max(v.start,p.start),g=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let S=m,C=g;S<C;S+=3){const A=S,w=S+1,P=S+2;n=fo(this,c,e,i,u,d,f,A,w,P),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=v.materialIndex,r.push(n))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let v=_,c=x;v<c;v+=3){const m=v,g=v+1,S=v+2;n=fo(this,s,e,i,u,d,f,m,g,S),n&&(n.faceIndex=Math.floor(v/3),r.push(n))}}}}function Gy(t,e,r,i,n,a,s,o){let l;if(e.side===nr?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,e.side===Vi,o),l===null)return null;ho.copy(o),ho.applyMatrix4(t.matrixWorld);const u=r.ray.origin.distanceTo(ho);return u<r.near||u>r.far?null:{distance:u,point:ho.clone(),object:t}}function fo(t,e,r,i,n,a,s,o,l,u){t.getVertexPosition(o,In),t.getVertexPosition(l,On),t.getVertexPosition(u,kn);const d=Gy(t,e,r,i,In,On,kn,co);if(d){n&&(oo.fromBufferAttribute(n,o),lo.fromBufferAttribute(n,l),uo.fromBufferAttribute(n,u),d.uv=Ur.getInterpolation(co,In,On,kn,oo,lo,uo,new We)),a&&(oo.fromBufferAttribute(a,o),lo.fromBufferAttribute(a,l),uo.fromBufferAttribute(a,u),d.uv1=Ur.getInterpolation(co,In,On,kn,oo,lo,uo,new We),d.uv2=d.uv1),s&&(rp.fromBufferAttribute(s,o),ip.fromBufferAttribute(s,l),np.fromBufferAttribute(s,u),d.normal=Ur.getInterpolation(co,In,On,kn,rp,ip,np,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new O,materialIndex:0};Ur.getNormal(In,On,kn,f.normal),d.face=f}return d}class Rs extends qi{constructor(e=1,r=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],u=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,r,e,s,a,0),_("z","y","x",1,-1,i,r,-e,s,a,1),_("x","z","y",1,1,e,i,r,n,s,2),_("x","z","y",1,-1,e,i,-r,n,s,3),_("x","y","z",1,-1,e,r,i,n,a,4),_("x","y","z",-1,-1,e,r,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new $r(u,3)),this.setAttribute("normal",new $r(d,3)),this.setAttribute("uv",new $r(f,2));function _(x,v,c,m,g,S,C,A,w,P,y){const E=S/w,G=C/P,X=S/2,se=C/2,N=A/2,V=w+1,q=P+1;let $=0,D=0;const I=new O;for(let j=0;j<q;j++){const Y=j*G-se;for(let re=0;re<V;re++){const H=re*E-X;I[x]=H*m,I[v]=Y*g,I[c]=N,u.push(I.x,I.y,I.z),I[x]=0,I[v]=0,I[c]=A>0?1:-1,d.push(I.x,I.y,I.z),f.push(re/w),f.push(1-j/P),$+=1}}for(let j=0;j<P;j++)for(let Y=0;Y<w;Y++){const re=h+Y+V*j,H=h+Y+V*(j+1),K=h+(Y+1)+V*(j+1),de=h+(Y+1)+V*j;l.push(re,H,de),l.push(H,K,de),D+=6}o.addGroup(p,D,y),p+=D,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xa(t){const e={};for(const r in t){e[r]={};for(const i in t[r]){const n=t[r][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=n.clone():Array.isArray(n)?e[r][i]=n.slice():e[r][i]=n}}return e}function jt(t){const e={};for(let r=0;r<t.length;r++){const i=xa(t[r]);for(const n in i)e[n]=i[n]}return e}function Vy(t){const e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}function gv(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const Wy={clone:xa,merge:jt};var jy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jy,this.fragmentShader=Xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=Vy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?r.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?r.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?r.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?r.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?r.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?r.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?r.uniforms[n]={type:"m4",value:a.toArray()}:r.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(r.extensions=i),r}}class vv extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=li}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class br extends vv{constructor(e=50,r=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=kc*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,r,i,n,a,s){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(cu*.5*this.fov)/this.zoom,i=2*r,n=this.aspect*i,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;a+=s.offsetX*n/l,r-=s.offsetY*i/u,n*=s.width/l,i*=s.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,r,r-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Fn=-90,zn=1;class qy extends Bt{constructor(e,r,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new br(Fn,zn,e,r);n.layers=this.layers,this.add(n);const a=new br(Fn,zn,e,r);a.layers=this.layers,this.add(a);const s=new br(Fn,zn,e,r);s.layers=this.layers,this.add(s);const o=new br(Fn,zn,e,r);o.layers=this.layers,this.add(o);const l=new br(Fn,zn,e,r);l.layers=this.layers,this.add(l);const u=new br(Fn,zn,e,r);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[i,n,a,s,o,l]=r;for(const u of r)this.remove(u);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===al)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of r)this.add(u),u.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,u,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(r,a),e.setRenderTarget(i,1,n),e.render(r,s),e.setRenderTarget(i,2,n),e.render(r,o),e.setRenderTarget(i,3,n),e.render(r,l),e.setRenderTarget(i,4,n),e.render(r,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),e.render(r,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class _v extends cr{constructor(e,r,i,n,a,s,o,l,u,d){e=e!==void 0?e:[],r=r!==void 0?r:ga,super(e,r,i,n,a,s,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yy extends yn{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];r.encoding!==void 0&&(Ja("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===pn?Lt:Sr),this.texture=new _v(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:yr}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Rs(5,5,5),a=new bn({name:"CubemapFromEquirect",uniforms:xa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nr,blending:Fi});a.uniforms.tEquirect.value=r;const s=new jr(n,a),o=r.minFilter;return r.minFilter===vs&&(r.minFilter=yr),new qy(1,10,this).update(e,s),r.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,r,i,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(r,i,n);e.setRenderTarget(a)}}const Ru=new O,$y=new O,Ky=new Be;class rn{constructor(e=new O(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,i,n){return this.normal.set(e,r,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,i){const n=Ru.subVectors(i,r).cross($y.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const i=e.delta(Ru),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:r.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const r=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return r<0&&i>0||i<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const i=r||Ky.getNormalMatrix(e),n=this.coplanarPoint(Ru).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new kd,po=new O;class zd{constructor(e=new rn,r=new rn,i=new rn,n=new rn,a=new rn,s=new rn){this.planes=[e,r,i,n,a,s]}set(e,r,i,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(r),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const r=this.planes;for(let i=0;i<6;i++)r[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,r=li){const i=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],u=n[4],d=n[5],f=n[6],h=n[7],p=n[8],_=n[9],x=n[10],v=n[11],c=n[12],m=n[13],g=n[14],S=n[15];if(i[0].setComponents(l-a,h-u,v-p,S-c).normalize(),i[1].setComponents(l+a,h+u,v+p,S+c).normalize(),i[2].setComponents(l+s,h+d,v+_,S+m).normalize(),i[3].setComponents(l-s,h-d,v-_,S-m).normalize(),i[4].setComponents(l-o,h-f,v-x,S-g).normalize(),r===li)i[5].setComponents(l+o,h+f,v+x,S+g).normalize();else if(r===al)i[5].setComponents(o,f,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),Ji.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const r=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(r[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const r=this.planes;for(let i=0;i<6;i++){const n=r[i];if(po.x=n.normal.x>0?e.max.x:e.min.x,po.y=n.normal.y>0?e.max.y:e.min.y,po.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let i=0;i<6;i++)if(r[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xv(){let t=null,e=!1,r=null,i=null;function n(a,s){r(a,s),i=t.requestAnimationFrame(n)}return{start:function(){e!==!0&&r!==null&&(i=t.requestAnimationFrame(n),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){r=a},setContext:function(a){t=a}}}function Zy(t,e){const r=e.isWebGL2,i=new WeakMap;function n(u,d){const f=u.array,h=u.usage,p=f.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,f,h),u.onUploadCallback();let x;if(f instanceof Float32Array)x=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(r)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=t.SHORT;else if(f instanceof Uint32Array)x=t.UNSIGNED_INT;else if(f instanceof Int32Array)x=t.INT;else if(f instanceof Int8Array)x=t.BYTE;else if(f instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function a(u,d,f){const h=d.array,p=d._updateRange,_=d.updateRanges;if(t.bindBuffer(f,u),p.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let x=0,v=_.length;x<v;x++){const c=_[x];r?t.bufferSubData(f,c.start*h.BYTES_PER_ELEMENT,h,c.start,c.count):t.bufferSubData(f,c.start*h.BYTES_PER_ELEMENT,h.subarray(c.start,c.start+c.count))}d.clearUpdateRanges()}p.count!==-1&&(r?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(t.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,n(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,u,d),f.version=u.version}}return{get:s,remove:o,update:l}}class Bd extends qi{constructor(e=1,r=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:n};const a=e/2,s=r/2,o=Math.floor(i),l=Math.floor(n),u=o+1,d=l+1,f=e/o,h=r/l,p=[],_=[],x=[],v=[];for(let c=0;c<d;c++){const m=c*h-s;for(let g=0;g<u;g++){const S=g*f-a;_.push(S,-m,0),x.push(0,0,1),v.push(g/o),v.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<o;m++){const g=m+u*c,S=m+u*(c+1),C=m+1+u*(c+1),A=m+1+u*c;p.push(g,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new $r(_,3)),this.setAttribute("normal",new $r(x,3)),this.setAttribute("uv",new $r(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jy=`#ifdef USE_ALPHAHASH
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
#endif`,eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nb=`#ifdef USE_AOMAP
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
#endif`,ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sb=`#ifdef USE_BATCHING
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
#endif`,ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,db=`#ifdef USE_IRIDESCENCE
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
#endif`,hb=`#ifdef USE_BUMPMAP
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bb=`#define PI 3.141592653589793
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
} // validated`,Sb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eb=`vec3 transformedNormal = objectNormal;
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
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cb=`
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
}`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zb=`#ifdef USE_GRADIENTMAP
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
}`,Bb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wb=`uniform bool receiveShadow;
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
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kb=`PhysicalMaterial material;
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
#endif`,Zb=`struct PhysicalMaterial {
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
}`,Qb=`
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
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
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
#endif`,eS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lS=`#if defined( USE_POINTS_UV )
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
#endif`,uS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hS=`#ifdef USE_MORPHNORMALS
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
#endif`,fS=`#ifdef USE_MORPHTARGETS
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
#endif`,pS=`#ifdef USE_MORPHTARGETS
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
#endif`,mS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yS=`#ifdef USE_NORMALMAP
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
#endif`,bS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ES=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OS=`float getShadowMask() {
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
}`,kS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,zS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BS=`#ifdef USE_SKINNING
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
#endif`,HS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jS=`#ifdef USE_TRANSMISSION
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
#endif`,XS=`#ifdef USE_TRANSMISSION
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QS=`uniform sampler2D t2D;
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rE=`uniform samplerCube tCube;
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
}`,nE=`#if DEPTH_PACKING == 3200
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
}`,aE=`#define DISTANCE
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
}`,sE=`#define DISTANCE
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
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`uniform float scale;
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
}`,cE=`uniform vec3 diffuse;
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
}`,dE=`#include <common>
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
}`,hE=`uniform vec3 diffuse;
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
}`,fE=`#define LAMBERT
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
}`,pE=`#define LAMBERT
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
}`,mE=`#define MATCAP
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
}`,gE=`#define MATCAP
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
}`,vE=`#define NORMAL
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
}`,_E=`#define NORMAL
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
}`,xE=`#define PHONG
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
}`,yE=`#define PHONG
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
}`,SE=`#define STANDARD
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
}`,EE=`#define TOON
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
}`,ME=`#define TOON
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
}`,TE=`uniform float size;
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
}`,wE=`uniform vec3 diffuse;
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
}`,AE=`#include <common>
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
}`,CE=`uniform float rotation;
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
}`,LE=`uniform vec3 diffuse;
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
}`,De={alphahash_fragment:Qy,alphahash_pars_fragment:Jy,alphamap_fragment:eb,alphamap_pars_fragment:tb,alphatest_fragment:rb,alphatest_pars_fragment:ib,aomap_fragment:nb,aomap_pars_fragment:ab,batching_pars_vertex:sb,batching_vertex:ob,begin_vertex:lb,beginnormal_vertex:ub,bsdfs:cb,iridescence_fragment:db,bumpmap_pars_fragment:hb,clipping_planes_fragment:fb,clipping_planes_pars_fragment:pb,clipping_planes_pars_vertex:mb,clipping_planes_vertex:gb,color_fragment:vb,color_pars_fragment:_b,color_pars_vertex:xb,color_vertex:yb,common:bb,cube_uv_reflection_fragment:Sb,defaultnormal_vertex:Eb,displacementmap_pars_vertex:Mb,displacementmap_vertex:Tb,emissivemap_fragment:wb,emissivemap_pars_fragment:Ab,colorspace_fragment:Rb,colorspace_pars_fragment:Cb,envmap_fragment:Lb,envmap_common_pars_fragment:Pb,envmap_pars_fragment:Nb,envmap_pars_vertex:Db,envmap_physical_pars_fragment:jb,envmap_vertex:Ub,fog_vertex:Ib,fog_pars_vertex:Ob,fog_fragment:kb,fog_pars_fragment:Fb,gradientmap_pars_fragment:zb,lightmap_fragment:Bb,lightmap_pars_fragment:Hb,lights_lambert_fragment:Gb,lights_lambert_pars_fragment:Vb,lights_pars_begin:Wb,lights_toon_fragment:Xb,lights_toon_pars_fragment:qb,lights_phong_fragment:Yb,lights_phong_pars_fragment:$b,lights_physical_fragment:Kb,lights_physical_pars_fragment:Zb,lights_fragment_begin:Qb,lights_fragment_maps:Jb,lights_fragment_end:eS,logdepthbuf_fragment:tS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:iS,logdepthbuf_vertex:nS,map_fragment:aS,map_pars_fragment:sS,map_particle_fragment:oS,map_particle_pars_fragment:lS,metalnessmap_fragment:uS,metalnessmap_pars_fragment:cS,morphcolor_vertex:dS,morphnormal_vertex:hS,morphtarget_pars_vertex:fS,morphtarget_vertex:pS,normal_fragment_begin:mS,normal_fragment_maps:gS,normal_pars_fragment:vS,normal_pars_vertex:_S,normal_vertex:xS,normalmap_pars_fragment:yS,clearcoat_normal_fragment_begin:bS,clearcoat_normal_fragment_maps:SS,clearcoat_pars_fragment:ES,iridescence_pars_fragment:MS,opaque_fragment:TS,packing:wS,premultiplied_alpha_fragment:AS,project_vertex:RS,dithering_fragment:CS,dithering_pars_fragment:LS,roughnessmap_fragment:PS,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:DS,shadowmap_pars_vertex:US,shadowmap_vertex:IS,shadowmask_pars_fragment:OS,skinbase_vertex:kS,skinning_pars_vertex:FS,skinning_vertex:zS,skinnormal_vertex:BS,specularmap_fragment:HS,specularmap_pars_fragment:GS,tonemapping_fragment:VS,tonemapping_pars_fragment:WS,transmission_fragment:jS,transmission_pars_fragment:XS,uv_pars_fragment:qS,uv_pars_vertex:YS,uv_vertex:$S,worldpos_vertex:KS,background_vert:ZS,background_frag:QS,backgroundCube_vert:JS,backgroundCube_frag:eE,cube_vert:tE,cube_frag:rE,depth_vert:iE,depth_frag:nE,distanceRGBA_vert:aE,distanceRGBA_frag:sE,equirect_vert:oE,equirect_frag:lE,linedashed_vert:uE,linedashed_frag:cE,meshbasic_vert:dE,meshbasic_frag:hE,meshlambert_vert:fE,meshlambert_frag:pE,meshmatcap_vert:mE,meshmatcap_frag:gE,meshnormal_vert:vE,meshnormal_frag:_E,meshphong_vert:xE,meshphong_frag:yE,meshphysical_vert:bE,meshphysical_frag:SE,meshtoon_vert:EE,meshtoon_frag:ME,points_vert:TE,points_frag:wE,shadow_vert:AE,shadow_frag:RE,sprite_vert:CE,sprite_frag:LE},ae={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Vr={basic:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:jt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:jt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:jt([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:jt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:jt([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:jt([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:jt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:jt([ae.lights,ae.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Vr.physical={uniforms:jt([Vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const mo={r:0,b:0,g:0};function PE(t,e,r,i,n,a,s){const o=new Ye(0);let l=a===!0?0:1,u,d,f=null,h=0,p=null;function _(v,c){let m=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?r:e).get(g)),g===null?x(o,l):g&&g.isColor&&(x(g,1),m=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===El)?(d===void 0&&(d=new jr(new Rs(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:xa(Vr.backgroundCube.uniforms),vertexShader:Vr.backgroundCube.vertexShader,fragmentShader:Vr.backgroundCube.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=Qe.getTransfer(g.colorSpace)!==nt,(f!==g||h!==g.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new jr(new Bd(2,2),new bn({name:"BackgroundMaterial",uniforms:xa(Vr.background.uniforms),vertexShader:Vr.background.vertexShader,fragmentShader:Vr.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(g.colorSpace)!==nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function x(v,c){v.getRGB(mo,gv(t)),i.buffers.color.setClear(mo.r,mo.g,mo.b,c,s)}return{getClearColor:function(){return o},setClearColor:function(v,c=1){o.set(v),l=c,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,x(o,l)},render:_}}function NE(t,e,r,i){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=v(null);let u=l,d=!1;function f(N,V,q,$,D){let I=!1;if(s){const j=x($,q,V);u!==j&&(u=j,p(u.object)),I=c(N,$,q,D),I&&m(N,$,q,D)}else{const j=V.wireframe===!0;(u.geometry!==$.id||u.program!==q.id||u.wireframe!==j)&&(u.geometry=$.id,u.program=q.id,u.wireframe=j,I=!0)}D!==null&&r.update(D,t.ELEMENT_ARRAY_BUFFER),(I||d)&&(d=!1,P(N,V,q,$),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(N){return i.isWebGL2?t.bindVertexArray(N):a.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?t.deleteVertexArray(N):a.deleteVertexArrayOES(N)}function x(N,V,q){const $=q.wireframe===!0;let D=o[N.id];D===void 0&&(D={},o[N.id]=D);let I=D[V.id];I===void 0&&(I={},D[V.id]=I);let j=I[$];return j===void 0&&(j=v(h()),I[$]=j),j}function v(N){const V=[],q=[],$=[];for(let D=0;D<n;D++)V[D]=0,q[D]=0,$[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:$,object:N,attributes:{},index:null}}function c(N,V,q,$){const D=u.attributes,I=V.attributes;let j=0;const Y=q.getAttributes();for(const re in Y)if(Y[re].location>=0){const H=D[re];let K=I[re];if(K===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),H===void 0||H.attribute!==K||K&&H.data!==K.data)return!0;j++}return u.attributesNum!==j||u.index!==$}function m(N,V,q,$){const D={},I=V.attributes;let j=0;const Y=q.getAttributes();for(const re in Y)if(Y[re].location>=0){let H=I[re];H===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(H=N.instanceColor));const K={};K.attribute=H,H&&H.data&&(K.data=H.data),D[re]=K,j++}u.attributes=D,u.attributesNum=j,u.index=$}function g(){const N=u.newAttributes;for(let V=0,q=N.length;V<q;V++)N[V]=0}function S(N){C(N,0)}function C(N,V){const q=u.newAttributes,$=u.enabledAttributes,D=u.attributeDivisors;q[N]=1,$[N]===0&&(t.enableVertexAttribArray(N),$[N]=1),D[N]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),D[N]=V)}function A(){const N=u.newAttributes,V=u.enabledAttributes;for(let q=0,$=V.length;q<$;q++)V[q]!==N[q]&&(t.disableVertexAttribArray(q),V[q]=0)}function w(N,V,q,$,D,I,j){j===!0?t.vertexAttribIPointer(N,V,q,D,I):t.vertexAttribPointer(N,V,q,$,D,I)}function P(N,V,q,$){if(i.isWebGL2===!1&&(N.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=$.attributes,I=q.getAttributes(),j=V.defaultAttributeValues;for(const Y in I){const re=I[Y];if(re.location>=0){let H=D[Y];if(H===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(H=N.instanceColor)),H!==void 0){const K=H.normalized,de=H.itemSize,he=r.get(H);if(he===void 0)continue;const me=he.buffer,Le=he.type,Pe=he.bytesPerElement,Te=i.isWebGL2===!0&&(Le===t.INT||Le===t.UNSIGNED_INT||H.gpuType===Qg);if(H.isInterleavedBufferAttribute){const je=H.data,z=je.stride,Vt=H.offset;if(je.isInstancedInterleavedBuffer){for(let ye=0;ye<re.locationSize;ye++)C(re.location+ye,je.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let ye=0;ye<re.locationSize;ye++)S(re.location+ye);t.bindBuffer(t.ARRAY_BUFFER,me);for(let ye=0;ye<re.locationSize;ye++)w(re.location+ye,de/re.locationSize,Le,K,z*Pe,(Vt+de/re.locationSize*ye)*Pe,Te)}else{if(H.isInstancedBufferAttribute){for(let je=0;je<re.locationSize;je++)C(re.location+je,H.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let je=0;je<re.locationSize;je++)S(re.location+je);t.bindBuffer(t.ARRAY_BUFFER,me);for(let je=0;je<re.locationSize;je++)w(re.location+je,de/re.locationSize,Le,K,de*Pe,de/re.locationSize*je*Pe,Te)}}else if(j!==void 0){const K=j[Y];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(re.location,K);break;case 3:t.vertexAttrib3fv(re.location,K);break;case 4:t.vertexAttrib4fv(re.location,K);break;default:t.vertexAttrib1fv(re.location,K)}}}}A()}function y(){X();for(const N in o){const V=o[N];for(const q in V){const $=V[q];for(const D in $)_($[D].object),delete $[D];delete V[q]}delete o[N]}}function E(N){if(o[N.id]===void 0)return;const V=o[N.id];for(const q in V){const $=V[q];for(const D in $)_($[D].object),delete $[D];delete V[q]}delete o[N.id]}function G(N){for(const V in o){const q=o[V];if(q[N.id]===void 0)continue;const $=q[N.id];for(const D in $)_($[D].object),delete $[D];delete q[N.id]}}function X(){se(),d=!0,u!==l&&(u=l,p(u.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:se,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:G,initAttributes:g,enableAttribute:S,disableUnusedAttributes:A}}function DE(t,e,r,i){const n=i.isWebGL2;let a;function s(d){a=d}function o(d,f){t.drawArrays(a,d,f),r.update(f,a,1)}function l(d,f,h){if(h===0)return;let p,_;if(n)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](a,d,f,h),r.update(f,a,h)}function u(d,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(d[_],f[_]);else{p.multiDrawArraysWEBGL(a,d,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=f[x];r.update(_,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function UE(t,e,r){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=r.precision!==void 0?r.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=s||e.has("WEBGL_draw_buffers"),d=r.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,S=s||e.has("OES_texture_float"),C=g&&S,A=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:n,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:v,maxVaryings:c,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:A}}function IE(t){const e=this;let r=null,i=0,n=!1,a=!1;const s=new rn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||n;return n=h,i=f.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){r=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,v=f.clipShadows,c=t.get(f);if(!n||_===null||_.length===0||a&&!v)a?d(null):u();else{const m=a?0:i,g=m*4;let S=c.clippingState||null;l.value=S,S=d(_,h,g,p);for(let C=0;C!==g;++C)S[C]=r[C];c.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,_){const x=f!==null?f.length:0;let v=null;if(x!==0){if(v=l.value,_!==!0||v===null){const c=p+x*4,m=h.matrixWorldInverse;o.getNormalMatrix(m),(v===null||v.length<c)&&(v=new Float32Array(c));for(let g=0,S=p;g!==x;++g,S+=4)s.copy(f[g]).applyMatrix4(m,o),s.normal.toArray(v,S),v[S+3]=s.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function OE(t){let e=new WeakMap;function r(s,o){return o===Nc?s.mapping=ga:o===Dc&&(s.mapping=va),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Nc||o===Dc)if(e.has(s)){const l=e.get(s).texture;return r(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new Yy(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",n),r(u.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class yv extends vv{constructor(e=-1,r=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=n+r,l=n-r;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,s=a+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const Jn=4,ap=[.125,.215,.35,.446,.526,.582],sn=20,Cu=new yv,sp=new Ye;let Lu=null,Pu=0,Nu=0;const nn=(1+Math.sqrt(5))/2,Bn=1/nn,op=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,nn,Bn),new O(0,nn,-Bn),new O(Bn,0,nn),new O(-Bn,0,nn),new O(nn,Bn,0),new O(-nn,Bn,0)];class lp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,i=.1,n=100){Lu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),r>0&&this._blur(a,0,0,r),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lu,Pu,Nu),e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===ga||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel();const i=r||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,i={magFilter:yr,minFilter:yr,generateMipmaps:!1,type:_s,format:Or,colorSpace:pi,depthBuffer:!1},n=up(e,r,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(e,r,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kE(a)),this._blurMaterial=FE(a,e,r)}return n}_compileMaterial(e){const r=new jr(this._lodPlanes[0],e);this._renderer.compile(r,Cu)}_sceneToCubeUV(e,r,i,n){const a=new br(90,1,r,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(sp),l.toneMapping=zi,l.autoClear=!1;const f=new Fd({name:"PMREM.Background",side:nr,depthWrite:!1,depthTest:!1}),h=new jr(new Rs,f);let p=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,p=!0):(f.color.copy(sp),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(a.up.set(0,s[x],0),a.lookAt(o[x],0,0)):v===1?(a.up.set(0,0,s[x]),a.lookAt(0,o[x],0)):(a.up.set(0,s[x],0),a.lookAt(0,0,o[x]));const c=this._cubeSize;go(n,v*c,x>2?c:0,c,c),l.setRenderTarget(n),p&&l.render(h,a),l.render(e,a)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=d,l.autoClear=u,e.background=_}_textureToCubeUV(e,r){const i=this._renderer,n=e.mapping===ga||e.mapping===va;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cp());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new jr(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;go(r,0,0,3*l,2*l),i.setRenderTarget(r),i.render(s,Cu)}_applyPMREM(e){const r=this._renderer,i=r.autoClear;r.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=op[(n-1)%op.length];this._blur(e,n-1,n,a,s)}r.autoClear=i}_blur(e,r,i,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,r,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,r,i,n,a,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new jr(this._lodPlanes[n],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*sn-1),x=a/_,v=isFinite(a)?1+Math.floor(d*x):sn;v>sn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${sn}`);const c=[];let m=0;for(let w=0;w<sn;++w){const P=w/x,y=Math.exp(-P*P/2);c.push(y),w===0?m+=y:w<v&&(m+=2*y)}for(let w=0;w<c.length;w++)c[w]=c[w]/m;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=c,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const S=this._sizeLods[n],C=3*S*(n>g-Jn?n-g+Jn:0),A=4*(this._cubeSize-S);go(r,C,A,3*S,2*S),l.setRenderTarget(r),l.render(f,Cu)}}function kE(t){const e=[],r=[],i=[];let n=t;const a=t-Jn+1+ap.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);r.push(o);let l=1/o;s>t-Jn?l=ap[s-t+Jn-1]:s===0&&(l=0),i.push(l);const u=1/(o-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,x=3,v=2,c=1,m=new Float32Array(x*_*p),g=new Float32Array(v*_*p),S=new Float32Array(c*_*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,y=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];m.set(y,x*_*A),g.set(h,v*_*A);const E=[A,A,A,A,A,A];S.set(E,c*_*A)}const C=new qi;C.setAttribute("position",new Yr(m,x)),C.setAttribute("uv",new Yr(g,v)),C.setAttribute("faceIndex",new Yr(S,c)),e.push(C),n>Jn&&n--}return{lodPlanes:e,sizeLods:r,sigmas:i}}function up(t,e,r){const i=new yn(t,e,r);return i.texture.mapping=El,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function go(t,e,r,i,n){t.viewport.set(e,r,i,n),t.scissor.set(e,r,i,n)}function FE(t,e,r){const i=new Float32Array(sn),n=new O(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:sn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Hd(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function cp(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hd(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function dp(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Hd(){return`

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
	`}function zE(t){let e=new WeakMap,r=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Nc||l===Dc,d=l===ga||l===va;if(u||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return r===null&&(r=new lp(t)),f=u?r.fromEquirectangular(o,f):r.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||d&&f&&n(f)){r===null&&(r=new lp(t));const h=u?r.fromEquirectangular(o):r.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",a),h.texture}else return null}}}return o}function n(o){let l=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&l++;return l===u}function a(o){const l=o.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function BE(t){const e={};function r(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=t.getExtension(i)}return e[i]=n,n}return{has:function(i){return r(i)!==null},init:function(i){i.isWebGL2?(r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance")):(r("WEBGL_depth_texture"),r("OES_texture_float"),r("OES_texture_half_float"),r("OES_texture_half_float_linear"),r("OES_standard_derivatives"),r("OES_element_index_uint"),r("OES_vertex_array_object"),r("ANGLE_instanced_arrays")),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture")},get:function(i){const n=r(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function HE(t,e,r,i){const n={},a=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let v=0,c=x.length;v<c;v++)e.remove(x[v])}h.removeEventListener("dispose",s),delete n[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,r.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,r.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let v=0,c=x.length;v<c;v++)e.update(x[v],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const m=p.array;x=p.version;for(let g=0,S=m.length;g<S;g+=3){const C=m[g+0],A=m[g+1],w=m[g+2];h.push(C,A,A,w,w,C)}}else if(_!==void 0){const m=_.array;x=_.version;for(let g=0,S=m.length/3-1;g<S;g+=3){const C=g+0,A=g+1,w=g+2;h.push(C,A,A,w,w,C)}}else return;const v=new(lv(h)?mv:pv)(h,1);v.version=x;const c=a.get(f);c&&e.remove(c),a.set(f,v)}function d(f){const h=a.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function GE(t,e,r,i){const n=i.isWebGL2;let a;function s(p){a=p}let o,l;function u(p){o=p.type,l=p.bytesPerElement}function d(p,_){t.drawElements(a,_,o,p*l),r.update(_,a,1)}function f(p,_,x){if(x===0)return;let v,c;if(n)v=t,c="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[c](a,_,o,p*l,x),r.update(_,a,x)}function h(p,_,x){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let c=0;c<x;c++)this.render(p[c]/l,_[c]);else{v.multiDrawElementsWEBGL(a,_,0,o,p,0,x);let c=0;for(let m=0;m<x;m++)c+=_[m];r.update(c,a,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function VE(t){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(r.calls++,s){case t.TRIANGLES:r.triangles+=o*(a/3);break;case t.LINES:r.lines+=o*(a/2);break;case t.LINE_STRIP:r.lines+=o*(a-1);break;case t.LINE_LOOP:r.lines+=o*a;break;case t.POINTS:r.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:n,update:i}}function WE(t,e){return t[0]-e[0]}function jE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function XE(t,e,r){const i={},n=new Float32Array(8),a=new WeakMap,s=new wt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,d,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=p!==void 0?p.length:0;let x=a.get(d);if(x===void 0||x.count!==_){let m=function(){se.dispose(),a.delete(d),d.removeEventListener("dispose",m)};x!==void 0&&x.texture.dispose();const g=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let y=0;g===!0&&(y=1),S===!0&&(y=2),C===!0&&(y=3);let E=d.attributes.position.count*y,G=1;E>e.maxTextureSize&&(G=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const X=new Float32Array(E*G*4*_),se=new dv(X,E,G,_);se.type=Ci,se.needsUpdate=!0;const N=y*4;for(let V=0;V<_;V++){const q=A[V],$=w[V],D=P[V],I=E*G*4*V;for(let j=0;j<q.count;j++){const Y=j*N;g===!0&&(s.fromBufferAttribute(q,j),X[I+Y+0]=s.x,X[I+Y+1]=s.y,X[I+Y+2]=s.z,X[I+Y+3]=0),S===!0&&(s.fromBufferAttribute($,j),X[I+Y+4]=s.x,X[I+Y+5]=s.y,X[I+Y+6]=s.z,X[I+Y+7]=0),C===!0&&(s.fromBufferAttribute(D,j),X[I+Y+8]=s.x,X[I+Y+9]=s.y,X[I+Y+10]=s.z,X[I+Y+11]=D.itemSize===4?s.w:1)}}x={count:_,texture:se,size:new We(E,G)},a.set(d,x),d.addEventListener("dispose",m)}let v=0;for(let m=0;m<h.length;m++)v+=h[m];const c=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",c),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",x.texture,r),f.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=h===void 0?0:h.length;let _=i[d.id];if(_===void 0||_.length!==p){_=[];for(let g=0;g<p;g++)_[g]=[g,0];i[d.id]=_}for(let g=0;g<p;g++){const S=_[g];S[0]=g,S[1]=h[g]}_.sort(jE);for(let g=0;g<8;g++)g<p&&_[g][1]?(o[g][0]=_[g][0],o[g][1]=_[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(WE);const x=d.morphAttributes.position,v=d.morphAttributes.normal;let c=0;for(let g=0;g<8;g++){const S=o[g],C=S[0],A=S[1];C!==Number.MAX_SAFE_INTEGER&&A?(x&&d.getAttribute("morphTarget"+g)!==x[C]&&d.setAttribute("morphTarget"+g,x[C]),v&&d.getAttribute("morphNormal"+g)!==v[C]&&d.setAttribute("morphNormal"+g,v[C]),n[g]=A,c+=A):(x&&d.hasAttribute("morphTarget"+g)===!0&&d.deleteAttribute("morphTarget"+g),v&&d.hasAttribute("morphNormal"+g)===!0&&d.deleteAttribute("morphNormal"+g),n[g]=0)}const m=d.morphTargetsRelative?1:1-c;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",n)}}return{update:l}}function qE(t,e,r,i){let n=new WeakMap;function a(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);if(n.get(f)!==u&&(e.update(f),n.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==u&&(r.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,t.ARRAY_BUFFER),n.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==u&&(h.update(),n.set(h,u))}return f}function s(){n=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),r.remove(u.instanceMatrix),u.instanceColor!==null&&r.remove(u.instanceColor)}return{update:a,dispose:s}}class bv extends cr{constructor(e,r,i,n,a,s,o,l,u,d){if(d=d!==void 0?d:fn,d!==fn&&d!==_a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===fn&&(i=Ri),i===void 0&&d===_a&&(i=hn),super(null,n,a,s,o,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}const Sv=new cr,Ev=new bv(1,1);Ev.compareFunction=ov;const Mv=new dv,Tv=new Ly,wv=new _v,hp=[],fp=[],pp=new Float32Array(16),mp=new Float32Array(9),gp=new Float32Array(4);function Ma(t,e,r){const i=t[0];if(i<=0||i>0)return t;const n=e*r;let a=hp[n];if(a===void 0&&(a=new Float32Array(n),hp[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=r,t[s].toArray(a,o)}return a}function St(t,e){if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}function Et(t,e){for(let r=0,i=e.length;r<i;r++)t[r]=e[r]}function wl(t,e){let r=fp[e];r===void 0&&(r=new Int32Array(e),fp[e]=r);for(let i=0;i!==e;++i)r[i]=t.allocateTextureUnit();return r}function YE(t,e){const r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function $E(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(St(r,e))return;t.uniform2fv(this.addr,e),Et(r,e)}}function KE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(St(r,e))return;t.uniform3fv(this.addr,e),Et(r,e)}}function ZE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(St(r,e))return;t.uniform4fv(this.addr,e),Et(r,e)}}function QE(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(St(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(r,e)}else{if(St(r,i))return;gp.set(i),t.uniformMatrix2fv(this.addr,!1,gp),Et(r,i)}}function JE(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(St(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(r,e)}else{if(St(r,i))return;mp.set(i),t.uniformMatrix3fv(this.addr,!1,mp),Et(r,i)}}function eM(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(St(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(r,e)}else{if(St(r,i))return;pp.set(i),t.uniformMatrix4fv(this.addr,!1,pp),Et(r,i)}}function tM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function rM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(St(r,e))return;t.uniform2iv(this.addr,e),Et(r,e)}}function iM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(St(r,e))return;t.uniform3iv(this.addr,e),Et(r,e)}}function nM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(St(r,e))return;t.uniform4iv(this.addr,e),Et(r,e)}}function aM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1ui(this.addr,e),r[0]=e)}function sM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(St(r,e))return;t.uniform2uiv(this.addr,e),Et(r,e)}}function oM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(St(r,e))return;t.uniform3uiv(this.addr,e),Et(r,e)}}function lM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(St(r,e))return;t.uniform4uiv(this.addr,e),Et(r,e)}}function uM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n);const a=this.type===t.SAMPLER_2D_SHADOW?Ev:Sv;r.setTexture2D(e||a,n)}function cM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture3D(e||Tv,n)}function dM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTextureCube(e||wv,n)}function hM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture2DArray(e||Mv,n)}function fM(t){switch(t){case 5126:return YE;case 35664:return $E;case 35665:return KE;case 35666:return ZE;case 35674:return QE;case 35675:return JE;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return rM;case 35668:case 35672:return iM;case 35669:case 35673:return nM;case 5125:return aM;case 36294:return sM;case 36295:return oM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return hM}}function pM(t,e){t.uniform1fv(this.addr,e)}function mM(t,e){const r=Ma(e,this.size,2);t.uniform2fv(this.addr,r)}function gM(t,e){const r=Ma(e,this.size,3);t.uniform3fv(this.addr,r)}function vM(t,e){const r=Ma(e,this.size,4);t.uniform4fv(this.addr,r)}function _M(t,e){const r=Ma(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function xM(t,e){const r=Ma(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function yM(t,e){const r=Ma(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function bM(t,e){t.uniform1iv(this.addr,e)}function SM(t,e){t.uniform2iv(this.addr,e)}function EM(t,e){t.uniform3iv(this.addr,e)}function MM(t,e){t.uniform4iv(this.addr,e)}function TM(t,e){t.uniform1uiv(this.addr,e)}function wM(t,e){t.uniform2uiv(this.addr,e)}function AM(t,e){t.uniform3uiv(this.addr,e)}function RM(t,e){t.uniform4uiv(this.addr,e)}function CM(t,e,r){const i=this.cache,n=e.length,a=wl(r,n);St(i,a)||(t.uniform1iv(this.addr,a),Et(i,a));for(let s=0;s!==n;++s)r.setTexture2D(e[s]||Sv,a[s])}function LM(t,e,r){const i=this.cache,n=e.length,a=wl(r,n);St(i,a)||(t.uniform1iv(this.addr,a),Et(i,a));for(let s=0;s!==n;++s)r.setTexture3D(e[s]||Tv,a[s])}function PM(t,e,r){const i=this.cache,n=e.length,a=wl(r,n);St(i,a)||(t.uniform1iv(this.addr,a),Et(i,a));for(let s=0;s!==n;++s)r.setTextureCube(e[s]||wv,a[s])}function NM(t,e,r){const i=this.cache,n=e.length,a=wl(r,n);St(i,a)||(t.uniform1iv(this.addr,a),Et(i,a));for(let s=0;s!==n;++s)r.setTexture2DArray(e[s]||Mv,a[s])}function DM(t){switch(t){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return vM;case 35674:return _M;case 35675:return xM;case 35676:return yM;case 5124:case 35670:return bM;case 35667:case 35671:return SM;case 35668:case 35672:return EM;case 35669:case 35673:return MM;case 5125:return TM;case 36294:return wM;case 36295:return AM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return NM}}class UM{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.setValue=fM(r.type)}}class IM{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=DM(r.type)}}class OM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,i){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,r[o.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function vp(t,e){t.seq.push(e),t.map[e.id]=e}function kM(t,e,r){const i=t.name,n=i.length;for(Du.lastIndex=0;;){const a=Du.exec(i),s=Du.lastIndex;let o=a[1];const l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===n){vp(r,u===void 0?new UM(o,t,e):new IM(o,t,e));break}else{let d=r.map[o];d===void 0&&(d=new OM(o),vp(r,d)),r=d}}}class Lo{constructor(e,r){this.seq=[],this.map={};const i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(r,n),s=e.getUniformLocation(r,a.name);kM(a,s,this)}}setValue(e,r,i,n){const a=this.map[r];a!==void 0&&a.setValue(e,i,n)}setOptional(e,r,i){const n=r[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,r,i,n){for(let a=0,s=r.length;a!==s;++a){const o=r[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,r){const i=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in r&&i.push(s)}return i}}function _p(t,e,r){const i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),i}const FM=37297;let zM=0;function BM(t,e){const r=t.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,r.length);for(let s=n;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}function HM(t){const e=Qe.getPrimaries(Qe.workingColorSpace),r=Qe.getPrimaries(t);let i;switch(e===r?i="":e===nl&&r===il?i="LinearDisplayP3ToLinearSRGB":e===il&&r===nl&&(i="LinearSRGBToLinearDisplayP3"),t){case pi:case Ml:return[i,"LinearTransferOETF"];case Lt:case Od:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function xp(t,e,r){const i=t.getShaderParameter(e,t.COMPILE_STATUS),n=t.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return r.toUpperCase()+`

`+n+`

`+BM(t.getShaderSource(e),s)}else return n}function GM(t,e){const r=HM(e);return`vec4 ${t}( vec4 value ) { return ${r[0]}( ${r[1]}( value ) ); }`}function VM(t,e){let r;switch(e){case Jx:r="Linear";break;case ey:r="Reinhard";break;case ty:r="OptimizedCineon";break;case ry:r="ACESFilmic";break;case ny:r="AgX";break;case iy:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}function WM(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ea).join(`
`)}function jM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ea).join(`
`)}function XM(t){const e=[];for(const r in t){const i=t[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function qM(t,e){const r={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=t.getActiveAttrib(e,n),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),r[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return r}function ea(t){return t!==""}function yp(t,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(t){return t.replace(YM,KM)}const $M=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function KM(t,e){let r=De[e];if(r===void 0){const i=$M.get(e);if(i!==void 0)r=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zc(r)}const ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(t){return t.replace(ZM,QM)}function QM(t,e,r,i){let n="";for(let a=parseInt(e);a<parseInt(r);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Ep(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ax?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function e1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ga:case va:e="ENVMAP_TYPE_CUBE";break;case El:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case va:e="ENVMAP_MODE_REFRACTION";break}return e}function r1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Kg:e="ENVMAP_BLENDING_MULTIPLY";break;case Zx:e="ENVMAP_BLENDING_MIX";break;case Qx:e="ENVMAP_BLENDING_ADD";break}return e}function i1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:i,maxMip:r}}function n1(t,e,r,i){const n=t.getContext(),a=r.defines;let s=r.vertexShader,o=r.fragmentShader;const l=JM(r),u=e1(r),d=t1(r),f=r1(r),h=i1(r),p=r.isWebGL2?"":WM(r),_=jM(r),x=XM(a),v=n.createProgram();let c,m,g=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(c=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(ea).join(`
`),c.length>0&&(c+=`
`),m=[p,"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(ea).join(`
`),m.length>0&&(m+=`
`)):(c=[Ep(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+d:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors&&r.isWebGL2?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),m=[p,Ep(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+u:"",r.envMap?"#define "+d:"",r.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==zi?"#define TONE_MAPPING":"",r.toneMapping!==zi?De.tonemapping_pars_fragment:"",r.toneMapping!==zi?VM("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,GM("linearToOutputTexel",r.outputColorSpace),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(ea).join(`
`)),s=zc(s),s=yp(s,r),s=bp(s,r),o=zc(o),o=yp(o,r),o=bp(o,r),s=Sp(s),o=Sp(o),r.isWebGL2&&r.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,c=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,m=["precision mediump sampler2DArray;","#define varying in",r.glslVersion===Hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===Hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=g+c+s,C=g+m+o,A=_p(n,n.VERTEX_SHADER,S),w=_p(n,n.FRAGMENT_SHADER,C);n.attachShader(v,A),n.attachShader(v,w),r.index0AttributeName!==void 0?n.bindAttribLocation(v,0,r.index0AttributeName):r.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function P(X){if(t.debug.checkShaderErrors){const se=n.getProgramInfoLog(v).trim(),N=n.getShaderInfoLog(A).trim(),V=n.getShaderInfoLog(w).trim();let q=!0,$=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,v,A,w);else{const D=xp(n,A,"vertex"),I=xp(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+D+`
`+I)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(N===""||V==="")&&($=!1);$&&(X.diagnostics={runnable:q,programLog:se,vertexShader:{log:N,prefix:c},fragmentShader:{log:V,prefix:m}})}n.deleteShader(A),n.deleteShader(w),y=new Lo(n,v),E=qM(n,v)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let G=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=n.getProgramParameter(v,FM)),G},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let a1=0;class s1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(r),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const i of r)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let i=r.get(e);return i===void 0&&(i=new Set,r.set(e,i)),i}_getShaderStage(e){const r=this.shaderCache;let i=r.get(e);return i===void 0&&(i=new o1(e),r.set(e,i)),i}}class o1{constructor(e){this.id=a1++,this.code=e,this.usedTimes=0}}function l1(t,e,r,i,n,a,s){const o=new hv,l=new s1,u=[],d=n.isWebGL2,f=n.logarithmicDepthBuffer,h=n.vertexTextures;let p=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function v(y,E,G,X,se){const N=X.fog,V=se.geometry,q=y.isMeshStandardMaterial?X.environment:null,$=(y.isMeshStandardMaterial?r:e).get(y.envMap||q),D=$&&$.mapping===El?$.image.height:null,I=_[y.type];y.precision!==null&&(p=n.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const j=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Y=j!==void 0?j.length:0;let re=0;V.morphAttributes.position!==void 0&&(re=1),V.morphAttributes.normal!==void 0&&(re=2),V.morphAttributes.color!==void 0&&(re=3);let H,K,de,he;if(I){const mt=Vr[I];H=mt.vertexShader,K=mt.fragmentShader}else H=y.vertexShader,K=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const me=t.getRenderTarget(),Le=se.isInstancedMesh===!0,Pe=se.isBatchedMesh===!0,Te=!!y.map,je=!!y.matcap,z=!!$,Vt=!!y.aoMap,ye=!!y.lightMap,Re=!!y.bumpMap,ge=!!y.normalMap,ot=!!y.displacementMap,Ue=!!y.emissiveMap,T=!!y.metalnessMap,b=!!y.roughnessMap,F=y.anisotropy>0,te=y.clearcoat>0,J=y.iridescence>0,ee=y.sheen>0,ve=y.transmission>0,le=F&&!!y.anisotropyMap,fe=te&&!!y.clearcoatMap,Ee=te&&!!y.clearcoatNormalMap,Ie=te&&!!y.clearcoatRoughnessMap,Q=J&&!!y.iridescenceMap,Ze=J&&!!y.iridescenceThicknessMap,He=ee&&!!y.sheenColorMap,Ae=ee&&!!y.sheenRoughnessMap,xe=!!y.specularMap,pe=!!y.specularColorMap,Ne=!!y.specularIntensityMap,$e=ve&&!!y.transmissionMap,dt=ve&&!!y.thicknessMap,Fe=!!y.gradientMap,ie=!!y.alphaMap,L=y.alphaTest>0,ne=!!y.alphaHash,ue=!!y.extensions,Ce=!!V.attributes.uv1,be=!!V.attributes.uv2,Je=!!V.attributes.uv3;let et=zi;return y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:d,shaderID:I,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:K,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Pe,instancing:Le,instancingColor:Le&&se.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:pi,map:Te,matcap:je,envMap:z,envMapMode:z&&$.mapping,envMapCubeUVHeight:D,aoMap:Vt,lightMap:ye,bumpMap:Re,normalMap:ge,displacementMap:h&&ot,emissiveMap:Ue,normalMapObjectSpace:ge&&y.normalMapType===gy,normalMapTangentSpace:ge&&y.normalMapType===sv,metalnessMap:T,roughnessMap:b,anisotropy:F,anisotropyMap:le,clearcoat:te,clearcoatMap:fe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ie,iridescence:J,iridescenceMap:Q,iridescenceThicknessMap:Ze,sheen:ee,sheenColorMap:He,sheenRoughnessMap:Ae,specularMap:xe,specularColorMap:pe,specularIntensityMap:Ne,transmission:ve,transmissionMap:$e,thicknessMap:dt,gradientMap:Fe,opaque:y.transparent===!1&&y.blending===oa,alphaMap:ie,alphaTest:L,alphaHash:ne,combine:y.combine,mapUv:Te&&x(y.map.channel),aoMapUv:Vt&&x(y.aoMap.channel),lightMapUv:ye&&x(y.lightMap.channel),bumpMapUv:Re&&x(y.bumpMap.channel),normalMapUv:ge&&x(y.normalMap.channel),displacementMapUv:ot&&x(y.displacementMap.channel),emissiveMapUv:Ue&&x(y.emissiveMap.channel),metalnessMapUv:T&&x(y.metalnessMap.channel),roughnessMapUv:b&&x(y.roughnessMap.channel),anisotropyMapUv:le&&x(y.anisotropyMap.channel),clearcoatMapUv:fe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(y.sheenRoughnessMap.channel),specularMapUv:xe&&x(y.specularMap.channel),specularColorMapUv:pe&&x(y.specularColorMap.channel),specularIntensityMapUv:Ne&&x(y.specularIntensityMap.channel),transmissionMapUv:$e&&x(y.transmissionMap.channel),thicknessMapUv:dt&&x(y.thicknessMap.channel),alphaMapUv:ie&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ge||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:be,vertexUv3s:Je,pointsUvs:se.isPoints===!0&&!!V.attributes.uv&&(Te||ie),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:se.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ai,flipSided:y.side===nr,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ue&&y.extensions.derivatives===!0,extensionFragDepth:ue&&y.extensions.fragDepth===!0,extensionDrawBuffers:ue&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function c(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)E.push(G),E.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(m(E,y),g(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function m(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function g(y,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function S(y){const E=_[y.type];let G;if(E){const X=Vr[E];G=Wy.clone(X.uniforms)}else G=y.uniforms;return G}function C(y,E){let G;for(let X=0,se=u.length;X<se;X++){const N=u[X];if(N.cacheKey===E){G=N,++G.usedTimes;break}}return G===void 0&&(G=new n1(t,E,y,a),u.push(G)),G}function A(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function P(){l.dispose()}return{getParameters:v,getProgramCacheKey:c,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:P}}function u1(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function r(a){t.delete(a)}function i(a,s,o){t.get(a)[s]=o}function n(){t=new WeakMap}return{get:e,remove:r,update:i,dispose:n}}function c1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tp(){const t=[];let e=0;const r=[],i=[],n=[];function a(){e=0,r.length=0,i.length=0,n.length=0}function s(f,h,p,_,x,v){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:v},t[e]=c):(c.id=f.id,c.object=f,c.geometry=h,c.material=p,c.groupOrder=_,c.renderOrder=f.renderOrder,c.z=x,c.group=v),e++,c}function o(f,h,p,_,x,v){const c=s(f,h,p,_,x,v);p.transmission>0?i.push(c):p.transparent===!0?n.push(c):r.push(c)}function l(f,h,p,_,x,v){const c=s(f,h,p,_,x,v);p.transmission>0?i.unshift(c):p.transparent===!0?n.unshift(c):r.unshift(c)}function u(f,h){r.length>1&&r.sort(f||c1),i.length>1&&i.sort(h||Mp),n.length>1&&n.sort(h||Mp)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:r,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:d,sort:u}}function d1(){let t=new WeakMap;function e(i,n){const a=t.get(i);let s;return a===void 0?(s=new Tp,t.set(i,[s])):n>=a.length?(s=new Tp,a.push(s)):s=a[n],s}function r(){t=new WeakMap}return{get:e,dispose:r}}function h1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new O,color:new Ye};break;case"SpotLight":r={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":r={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":r={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=r,r}}}function f1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=r,r}}}let p1=0;function m1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function g1(t,e){const r=new h1,i=f1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new O);const a=new O,s=new bt,o=new bt;function l(d,f){let h=0,p=0,_=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let x=0,v=0,c=0,m=0,g=0,S=0,C=0,A=0,w=0,P=0,y=0;d.sort(m1);const E=f===!0?Math.PI:1;for(let X=0,se=d.length;X<se;X++){const N=d[X],V=N.color,q=N.intensity,$=N.distance,D=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=V.r*q*E,p+=V.g*q*E,_+=V.b*q*E;else if(N.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(N.sh.coefficients[I],q);y++}else if(N.isDirectionalLight){const I=r.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const j=N.shadow,Y=i.get(N);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,n.directionalShadow[x]=Y,n.directionalShadowMap[x]=D,n.directionalShadowMatrix[x]=N.shadow.matrix,S++}n.directional[x]=I,x++}else if(N.isSpotLight){const I=r.get(N);I.position.setFromMatrixPosition(N.matrixWorld),I.color.copy(V).multiplyScalar(q*E),I.distance=$,I.coneCos=Math.cos(N.angle),I.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),I.decay=N.decay,n.spot[c]=I;const j=N.shadow;if(N.map&&(n.spotLightMap[w]=N.map,w++,j.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[c]=j.matrix,N.castShadow){const Y=i.get(N);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,n.spotShadow[c]=Y,n.spotShadowMap[c]=D,A++}c++}else if(N.isRectAreaLight){const I=r.get(N);I.color.copy(V).multiplyScalar(q),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=I,m++}else if(N.isPointLight){const I=r.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity*E),I.distance=N.distance,I.decay=N.decay,N.castShadow){const j=N.shadow,Y=i.get(N);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=D,n.pointShadowMatrix[v]=N.shadow.matrix,C++}n.point[v]=I,v++}else if(N.isHemisphereLight){const I=r.get(N);I.skyColor.copy(N.color).multiplyScalar(q*E),I.groundColor.copy(N.groundColor).multiplyScalar(q*E),n.hemi[g]=I,g++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=_;const G=n.hash;(G.directionalLength!==x||G.pointLength!==v||G.spotLength!==c||G.rectAreaLength!==m||G.hemiLength!==g||G.numDirectionalShadows!==S||G.numPointShadows!==C||G.numSpotShadows!==A||G.numSpotMaps!==w||G.numLightProbes!==y)&&(n.directional.length=x,n.spot.length=c,n.rectArea.length=m,n.point.length=v,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=A+w-P,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=y,G.directionalLength=x,G.pointLength=v,G.spotLength=c,G.rectAreaLength=m,G.hemiLength=g,G.numDirectionalShadows=S,G.numPointShadows=C,G.numSpotShadows=A,G.numSpotMaps=w,G.numLightProbes=y,n.version=p1++)}function u(d,f){let h=0,p=0,_=0,x=0,v=0;const c=f.matrixWorldInverse;for(let m=0,g=d.length;m<g;m++){const S=d[m];if(S.isDirectionalLight){const C=n.directional[h];C.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(c),h++}else if(S.isSpotLight){const C=n.spot[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(c),C.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(c),_++}else if(S.isRectAreaLight){const C=n.rectArea[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(c),o.identity(),s.copy(S.matrixWorld),s.premultiply(c),o.extractRotation(s),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const C=n.point[p];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(c),p++}else if(S.isHemisphereLight){const C=n.hemi[v];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(c),v++}}}return{setup:l,setupView:u,state:n}}function wp(t,e){const r=new g1(t,e),i=[],n=[];function a(){i.length=0,n.length=0}function s(d){i.push(d)}function o(d){n.push(d)}function l(d){r.setup(i,d)}function u(d){r.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:r},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function v1(t,e){let r=new WeakMap;function i(a,s=0){const o=r.get(a);let l;return o===void 0?(l=new wp(t,e),r.set(a,[l])):s>=o.length?(l=new wp(t,e),o.push(l)):l=o[s],l}function n(){r=new WeakMap}return{get:i,dispose:n}}class _1 extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x1 extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y1=`void main() {
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
}`;function S1(t,e,r){let i=new zd;const n=new We,a=new We,s=new wt,o=new _1({depthPacking:my}),l=new x1,u={},d=r.maxTextureSize,f={[Vi]:nr,[nr]:Vi,[ai]:ai},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:y1,fragmentShader:b1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new qi;_.setAttribute("position",new Yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new jr(_,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let c=this.type;this.render=function(A,w,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;const y=t.getRenderTarget(),E=t.getActiveCubeFace(),G=t.getActiveMipmapLevel(),X=t.state;X.setBlending(Fi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const se=c!==ri&&this.type===ri,N=c===ri&&this.type!==ri;for(let V=0,q=A.length;V<q;V++){const $=A[V],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;n.copy(D.mapSize);const I=D.getFrameExtents();if(n.multiply(I),a.copy(D.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(a.x=Math.floor(d/I.x),n.x=a.x*I.x,D.mapSize.x=a.x),n.y>d&&(a.y=Math.floor(d/I.y),n.y=a.y*I.y,D.mapSize.y=a.y)),D.map===null||se===!0||N===!0){const Y=this.type!==ri?{minFilter:qt,magFilter:qt}:{};D.map!==null&&D.map.dispose(),D.map=new yn(n.x,n.y,Y),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const j=D.getViewportCount();for(let Y=0;Y<j;Y++){const re=D.getViewport(Y);s.set(a.x*re.x,a.y*re.y,a.x*re.z,a.y*re.w),X.viewport(s),D.updateMatrices($,Y),i=D.getFrustum(),S(w,P,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===ri&&m(D,P),D.needsUpdate=!1}c=this.type,v.needsUpdate=!1,t.setRenderTarget(y,E,G)};function m(A,w){const P=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yn(n.x,n.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,P,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,P,p,x,null)}function g(A,w,P,y){let E=null;const G=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)E=G;else if(E=P.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=E.uuid,se=w.uuid;let N=u[X];N===void 0&&(N={},u[X]=N);let V=N[se];V===void 0&&(V=E.clone(),N[se]=V,w.addEventListener("dispose",C)),E=V}if(E.visible=w.visible,E.wireframe=w.wireframe,y===ri?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:f[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const X=t.properties.get(E);X.light=P}return E}function S(A,w,P,y,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const X=e.update(A),se=A.material;if(Array.isArray(se)){const N=X.groups;for(let V=0,q=N.length;V<q;V++){const $=N[V],D=se[$.materialIndex];if(D&&D.visible){const I=g(A,D,y,E);A.onBeforeShadow(t,A,w,P,X,I,$),t.renderBufferDirect(P,null,X,I,A,$),A.onAfterShadow(t,A,w,P,X,I,$)}}}else if(se.visible){const N=g(A,se,y,E);A.onBeforeShadow(t,A,w,P,X,N,null),t.renderBufferDirect(P,null,X,N,A,null),A.onAfterShadow(t,A,w,P,X,N,null)}}const G=A.children;for(let X=0,se=G.length;X<se;X++)S(G[X],w,P,y,E)}function C(A){A.target.removeEventListener("dispose",C);for(const w in u){const P=u[w],y=A.target.uuid;y in P&&(P[y].dispose(),delete P[y])}}}function E1(t,e,r){const i=r.isWebGL2;function n(){let L=!1;const ne=new wt;let ue=null;const Ce=new wt(0,0,0,0);return{setMask:function(be){ue!==be&&!L&&(t.colorMask(be,be,be,be),ue=be)},setLocked:function(be){L=be},setClear:function(be,Je,et,mt,pr){pr===!0&&(be*=mt,Je*=mt,et*=mt),ne.set(be,Je,et,mt),Ce.equals(ne)===!1&&(t.clearColor(be,Je,et,mt),Ce.copy(ne))},reset:function(){L=!1,ue=null,Ce.set(-1,0,0,0)}}}function a(){let L=!1,ne=null,ue=null,Ce=null;return{setTest:function(be){be?Pe(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(be){ne!==be&&!L&&(t.depthMask(be),ne=be)},setFunc:function(be){if(ue!==be){switch(be){case Wx:t.depthFunc(t.NEVER);break;case jx:t.depthFunc(t.ALWAYS);break;case Xx:t.depthFunc(t.LESS);break;case tl:t.depthFunc(t.LEQUAL);break;case qx:t.depthFunc(t.EQUAL);break;case Yx:t.depthFunc(t.GEQUAL);break;case $x:t.depthFunc(t.GREATER);break;case Kx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=be}},setLocked:function(be){L=be},setClear:function(be){Ce!==be&&(t.clearDepth(be),Ce=be)},reset:function(){L=!1,ne=null,ue=null,Ce=null}}}function s(){let L=!1,ne=null,ue=null,Ce=null,be=null,Je=null,et=null,mt=null,pr=null;return{setTest:function(tt){L||(tt?Pe(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(tt){ne!==tt&&!L&&(t.stencilMask(tt),ne=tt)},setFunc:function(tt,Wt,Br){(ue!==tt||Ce!==Wt||be!==Br)&&(t.stencilFunc(tt,Wt,Br),ue=tt,Ce=Wt,be=Br)},setOp:function(tt,Wt,Br){(Je!==tt||et!==Wt||mt!==Br)&&(t.stencilOp(tt,Wt,Br),Je=tt,et=Wt,mt=Br)},setLocked:function(tt){L=tt},setClear:function(tt){pr!==tt&&(t.clearStencil(tt),pr=tt)},reset:function(){L=!1,ne=null,ue=null,Ce=null,be=null,Je=null,et=null,mt=null,pr=null}}}const o=new n,l=new a,u=new s,d=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,x=[],v=null,c=!1,m=null,g=null,S=null,C=null,A=null,w=null,P=null,y=new Ye(0,0,0),E=0,G=!1,X=null,se=null,N=null,V=null,q=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,I=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(j)[1]),D=I>=1):j.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),D=I>=2);let Y=null,re={};const H=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),de=new wt().fromArray(H),he=new wt().fromArray(K);function me(L,ne,ue,Ce){const be=new Uint8Array(4),Je=t.createTexture();t.bindTexture(L,Je),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<ue;et++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ne,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(ne+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return Je}const Le={};Le[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Le[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Le[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Pe(t.DEPTH_TEST),l.setFunc(tl),Ue(!1),T(of),Pe(t.CULL_FACE),ge(Fi);function Pe(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Te(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function je(L,ne){return p[L]!==ne?(t.bindFramebuffer(L,ne),p[L]=ne,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ne),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ne)),!0):!1}function z(L,ne){let ue=x,Ce=!1;if(L)if(ue=_.get(ne),ue===void 0&&(ue=[],_.set(ne,ue)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(ue.length!==be.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,et=be.length;Je<et;Je++)ue[Je]=t.COLOR_ATTACHMENT0+Je;ue.length=be.length,Ce=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Ce=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Ce=!0);Ce&&(r.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Vt(L){return v!==L?(t.useProgram(L),v=L,!0):!1}const ye={[an]:t.FUNC_ADD,[Cx]:t.FUNC_SUBTRACT,[Lx]:t.FUNC_REVERSE_SUBTRACT};if(i)ye[df]=t.MIN,ye[hf]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ye[df]=L.MIN_EXT,ye[hf]=L.MAX_EXT)}const Re={[Px]:t.ZERO,[Nx]:t.ONE,[Dx]:t.SRC_COLOR,[Lc]:t.SRC_ALPHA,[zx]:t.SRC_ALPHA_SATURATE,[kx]:t.DST_COLOR,[Ix]:t.DST_ALPHA,[Ux]:t.ONE_MINUS_SRC_COLOR,[Pc]:t.ONE_MINUS_SRC_ALPHA,[Fx]:t.ONE_MINUS_DST_COLOR,[Ox]:t.ONE_MINUS_DST_ALPHA,[Bx]:t.CONSTANT_COLOR,[Hx]:t.ONE_MINUS_CONSTANT_COLOR,[Gx]:t.CONSTANT_ALPHA,[Vx]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(L,ne,ue,Ce,be,Je,et,mt,pr,tt){if(L===Fi){c===!0&&(Te(t.BLEND),c=!1);return}if(c===!1&&(Pe(t.BLEND),c=!0),L!==Rx){if(L!==m||tt!==G){if((g!==an||A!==an)&&(t.blendEquation(t.FUNC_ADD),g=an,A=an),tt)switch(L){case oa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lf:t.blendFunc(t.ONE,t.ONE);break;case uf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case cf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case oa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case uf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case cf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,C=null,w=null,P=null,y.set(0,0,0),E=0,m=L,G=tt}return}be=be||ne,Je=Je||ue,et=et||Ce,(ne!==g||be!==A)&&(t.blendEquationSeparate(ye[ne],ye[be]),g=ne,A=be),(ue!==S||Ce!==C||Je!==w||et!==P)&&(t.blendFuncSeparate(Re[ue],Re[Ce],Re[Je],Re[et]),S=ue,C=Ce,w=Je,P=et),(mt.equals(y)===!1||pr!==E)&&(t.blendColor(mt.r,mt.g,mt.b,pr),y.copy(mt),E=pr),m=L,G=!1}function ot(L,ne){L.side===ai?Te(t.CULL_FACE):Pe(t.CULL_FACE);let ue=L.side===nr;ne&&(ue=!ue),Ue(ue),L.blending===oa&&L.transparent===!1?ge(Fi):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Ce=L.stencilWrite;u.setTest(Ce),Ce&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(L){X!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),X=L)}function T(L){L!==Tx?(Pe(t.CULL_FACE),L!==se&&(L===of?t.cullFace(t.BACK):L===wx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),se=L}function b(L){L!==N&&(D&&t.lineWidth(L),N=L)}function F(L,ne,ue){L?(Pe(t.POLYGON_OFFSET_FILL),(V!==ne||q!==ue)&&(t.polygonOffset(ne,ue),V=ne,q=ue)):Te(t.POLYGON_OFFSET_FILL)}function te(L){L?Pe(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function J(L){L===void 0&&(L=t.TEXTURE0+$-1),Y!==L&&(t.activeTexture(L),Y=L)}function ee(L,ne,ue){ue===void 0&&(Y===null?ue=t.TEXTURE0+$-1:ue=Y);let Ce=re[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},re[ue]=Ce),(Ce.type!==L||Ce.texture!==ne)&&(Y!==ue&&(t.activeTexture(ue),Y=ue),t.bindTexture(L,ne||Le[L]),Ce.type=L,Ce.texture=ne)}function ve(){const L=re[Y];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(L){de.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),de.copy(L))}function $e(L){he.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),he.copy(L))}function dt(L,ne){let ue=f.get(ne);ue===void 0&&(ue=new WeakMap,f.set(ne,ue));let Ce=ue.get(L);Ce===void 0&&(Ce=t.getUniformBlockIndex(ne,L.name),ue.set(L,Ce))}function Fe(L,ne){const ue=f.get(ne).get(L);d.get(ne)!==ue&&(t.uniformBlockBinding(ne,ue,L.__bindingPointIndex),d.set(ne,ue))}function ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Y=null,re={},p={},_=new WeakMap,x=[],v=null,c=!1,m=null,g=null,S=null,C=null,A=null,w=null,P=null,y=new Ye(0,0,0),E=0,G=!1,X=null,se=null,N=null,V=null,q=null,de.set(0,0,t.canvas.width,t.canvas.height),he.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Pe,disable:Te,bindFramebuffer:je,drawBuffers:z,useProgram:Vt,setBlending:ge,setMaterial:ot,setFlipSided:Ue,setCullFace:T,setLineWidth:b,setPolygonOffset:F,setScissorTest:te,activeTexture:J,bindTexture:ee,unbindTexture:ve,compressedTexImage2D:le,compressedTexImage3D:fe,texImage2D:xe,texImage3D:pe,updateUBOMapping:dt,uniformBlockBinding:Fe,texStorage2D:He,texStorage3D:Ae,texSubImage2D:Ee,texSubImage3D:Ie,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ze,scissor:Ne,viewport:$e,reset:ie}}function M1(t,e,r,i,n,a,s){const o=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,b){return p?new OffscreenCanvas(T,b):sl("canvas")}function x(T,b,F,te){let J=1;if((T.width>te||T.height>te)&&(J=te/Math.max(T.width,T.height)),J<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ee=b?Fc:Math.floor,ve=ee(J*T.width),le=ee(J*T.height);f===void 0&&(f=_(ve,le));const fe=F?_(ve,le):f;return fe.width=ve,fe.height=le,fe.getContext("2d").drawImage(T,0,0,ve,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ve+"x"+le+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return Gf(T.width)&&Gf(T.height)}function c(T){return o?!1:T.wrapS!==Ir||T.wrapT!==Ir||T.minFilter!==qt&&T.minFilter!==yr}function m(T,b){return T.generateMipmaps&&b&&T.minFilter!==qt&&T.minFilter!==yr}function g(T){t.generateMipmap(T)}function S(T,b,F,te,J=!1){if(o===!1)return b;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=b;if(b===t.RED&&(F===t.FLOAT&&(ee=t.R32F),F===t.HALF_FLOAT&&(ee=t.R16F),F===t.UNSIGNED_BYTE&&(ee=t.R8)),b===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(ee=t.R8UI),F===t.UNSIGNED_SHORT&&(ee=t.R16UI),F===t.UNSIGNED_INT&&(ee=t.R32UI),F===t.BYTE&&(ee=t.R8I),F===t.SHORT&&(ee=t.R16I),F===t.INT&&(ee=t.R32I)),b===t.RG&&(F===t.FLOAT&&(ee=t.RG32F),F===t.HALF_FLOAT&&(ee=t.RG16F),F===t.UNSIGNED_BYTE&&(ee=t.RG8)),b===t.RGBA){const ve=J?rl:Qe.getTransfer(te);F===t.FLOAT&&(ee=t.RGBA32F),F===t.HALF_FLOAT&&(ee=t.RGBA16F),F===t.UNSIGNED_BYTE&&(ee=ve===nt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function C(T,b,F){return m(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==qt&&T.minFilter!==yr?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function A(T){return T===qt||T===ff||T===nu?t.NEAREST:t.LINEAR}function w(T){const b=T.target;b.removeEventListener("dispose",w),y(b),b.isVideoTexture&&d.delete(b)}function P(T){const b=T.target;b.removeEventListener("dispose",P),G(b)}function y(T){const b=i.get(T);if(b.__webglInit===void 0)return;const F=T.source,te=h.get(F);if(te){const J=te[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(T),Object.keys(te).length===0&&h.delete(F)}i.remove(T)}function E(T){const b=i.get(T);t.deleteTexture(b.__webglTexture);const F=T.source,te=h.get(F);delete te[b.__cacheKey],s.memory.textures--}function G(T){const b=T.texture,F=i.get(T),te=i.get(b);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),s.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(F.__webglFramebuffer[J]))for(let ee=0;ee<F.__webglFramebuffer[J].length;ee++)t.deleteFramebuffer(F.__webglFramebuffer[J][ee]);else t.deleteFramebuffer(F.__webglFramebuffer[J]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[J])}else{if(Array.isArray(F.__webglFramebuffer))for(let J=0;J<F.__webglFramebuffer.length;J++)t.deleteFramebuffer(F.__webglFramebuffer[J]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let J=0;J<F.__webglColorRenderbuffer.length;J++)F.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[J]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,ee=b.length;J<ee;J++){const ve=i.get(b[J]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),s.memory.textures--),i.remove(b[J])}i.remove(b),i.remove(T)}let X=0;function se(){X=0}function N(){const T=X;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),X+=1,T}function V(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function q(T,b){const F=i.get(T);if(T.isVideoTexture&&ot(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(F,T,b);return}}r.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+b)}function $(T,b){const F=i.get(T);if(T.version>0&&F.__version!==T.version){de(F,T,b);return}r.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+b)}function D(T,b){const F=i.get(T);if(T.version>0&&F.__version!==T.version){de(F,T,b);return}r.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+b)}function I(T,b){const F=i.get(T);if(T.version>0&&F.__version!==T.version){he(F,T,b);return}r.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+b)}const j={[Uc]:t.REPEAT,[Ir]:t.CLAMP_TO_EDGE,[Ic]:t.MIRRORED_REPEAT},Y={[qt]:t.NEAREST,[ff]:t.NEAREST_MIPMAP_NEAREST,[nu]:t.NEAREST_MIPMAP_LINEAR,[yr]:t.LINEAR,[ay]:t.LINEAR_MIPMAP_NEAREST,[vs]:t.LINEAR_MIPMAP_LINEAR},re={[vy]:t.NEVER,[Ey]:t.ALWAYS,[_y]:t.LESS,[ov]:t.LEQUAL,[xy]:t.EQUAL,[Sy]:t.GEQUAL,[yy]:t.GREATER,[by]:t.NOTEQUAL};function H(T,b,F){if(F?(t.texParameteri(T,t.TEXTURE_WRAP_S,j[b.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,j[b.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,j[b.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Y[b.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Y[b.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(b.wrapS!==Ir||b.wrapT!==Ir)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,A(b.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,A(b.minFilter)),b.minFilter!==qt&&b.minFilter!==yr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===qt||b.minFilter!==nu&&b.minFilter!==vs||b.type===Ci&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===_s&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function K(T,b){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",w));const te=b.source;let J=h.get(te);J===void 0&&(J={},h.set(te,J));const ee=V(b);if(ee!==T.__cacheKey){J[ee]===void 0&&(J[ee]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,F=!0),J[ee].usedTimes++;const ve=J[T.__cacheKey];ve!==void 0&&(J[T.__cacheKey].usedTimes--,ve.usedTimes===0&&E(b)),T.__cacheKey=ee,T.__webglTexture=J[ee].texture}return F}function de(T,b,F){let te=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=t.TEXTURE_3D);const J=K(T,b),ee=b.source;r.bindTexture(te,T.__webglTexture,t.TEXTURE0+F);const ve=i.get(ee);if(ee.version!==ve.__version||J===!0){r.activeTexture(t.TEXTURE0+F);const le=Qe.getPrimaries(Qe.workingColorSpace),fe=b.colorSpace===Sr?null:Qe.getPrimaries(b.colorSpace),Ee=b.colorSpace===Sr||le===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ie=c(b)&&v(b.image)===!1;let Q=x(b.image,Ie,!1,n.maxTextureSize);Q=Ue(b,Q);const Ze=v(Q)||o,He=a.convert(b.format,b.colorSpace);let Ae=a.convert(b.type),xe=S(b.internalFormat,He,Ae,b.colorSpace,b.isVideoTexture);H(te,b,Ze);let pe;const Ne=b.mipmaps,$e=o&&b.isVideoTexture!==!0&&xe!==nv,dt=ve.__version===void 0||J===!0,Fe=C(b,Q,Ze);if(b.isDepthTexture)xe=t.DEPTH_COMPONENT,o?b.type===Ci?xe=t.DEPTH_COMPONENT32F:b.type===Ri?xe=t.DEPTH_COMPONENT24:b.type===hn?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:b.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===fn&&xe===t.DEPTH_COMPONENT&&b.type!==Id&&b.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ri,Ae=a.convert(b.type)),b.format===_a&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,b.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=hn,Ae=a.convert(b.type))),dt&&($e?r.texStorage2D(t.TEXTURE_2D,1,xe,Q.width,Q.height):r.texImage2D(t.TEXTURE_2D,0,xe,Q.width,Q.height,0,He,Ae,null));else if(b.isDataTexture)if(Ne.length>0&&Ze){$e&&dt&&r.texStorage2D(t.TEXTURE_2D,Fe,xe,Ne[0].width,Ne[0].height);for(let ie=0,L=Ne.length;ie<L;ie++)pe=Ne[ie],$e?r.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,He,Ae,pe.data):r.texImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,He,Ae,pe.data);b.generateMipmaps=!1}else $e?(dt&&r.texStorage2D(t.TEXTURE_2D,Fe,xe,Q.width,Q.height),r.texSubImage2D(t.TEXTURE_2D,0,0,0,Q.width,Q.height,He,Ae,Q.data)):r.texImage2D(t.TEXTURE_2D,0,xe,Q.width,Q.height,0,He,Ae,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$e&&dt&&r.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,xe,Ne[0].width,Ne[0].height,Q.depth);for(let ie=0,L=Ne.length;ie<L;ie++)pe=Ne[ie],b.format!==Or?He!==null?$e?r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Q.depth,He,pe.data,0,0):r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,xe,pe.width,pe.height,Q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?r.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,Q.depth,He,Ae,pe.data):r.texImage3D(t.TEXTURE_2D_ARRAY,ie,xe,pe.width,pe.height,Q.depth,0,He,Ae,pe.data)}else{$e&&dt&&r.texStorage2D(t.TEXTURE_2D,Fe,xe,Ne[0].width,Ne[0].height);for(let ie=0,L=Ne.length;ie<L;ie++)pe=Ne[ie],b.format!==Or?He!==null?$e?r.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,He,pe.data):r.compressedTexImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?r.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,He,Ae,pe.data):r.texImage2D(t.TEXTURE_2D,ie,xe,pe.width,pe.height,0,He,Ae,pe.data)}else if(b.isDataArrayTexture)$e?(dt&&r.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,xe,Q.width,Q.height,Q.depth),r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,He,Ae,Q.data)):r.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,He,Ae,Q.data);else if(b.isData3DTexture)$e?(dt&&r.texStorage3D(t.TEXTURE_3D,Fe,xe,Q.width,Q.height,Q.depth),r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,He,Ae,Q.data)):r.texImage3D(t.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,He,Ae,Q.data);else if(b.isFramebufferTexture){if(dt)if($e)r.texStorage2D(t.TEXTURE_2D,Fe,xe,Q.width,Q.height);else{let ie=Q.width,L=Q.height;for(let ne=0;ne<Fe;ne++)r.texImage2D(t.TEXTURE_2D,ne,xe,ie,L,0,He,Ae,null),ie>>=1,L>>=1}}else if(Ne.length>0&&Ze){$e&&dt&&r.texStorage2D(t.TEXTURE_2D,Fe,xe,Ne[0].width,Ne[0].height);for(let ie=0,L=Ne.length;ie<L;ie++)pe=Ne[ie],$e?r.texSubImage2D(t.TEXTURE_2D,ie,0,0,He,Ae,pe):r.texImage2D(t.TEXTURE_2D,ie,xe,He,Ae,pe);b.generateMipmaps=!1}else $e?(dt&&r.texStorage2D(t.TEXTURE_2D,Fe,xe,Q.width,Q.height),r.texSubImage2D(t.TEXTURE_2D,0,0,0,He,Ae,Q)):r.texImage2D(t.TEXTURE_2D,0,xe,He,Ae,Q);m(b,Ze)&&g(te),ve.__version=ee.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function he(T,b,F){if(b.image.length!==6)return;const te=K(T,b),J=b.source;r.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+F);const ee=i.get(J);if(J.version!==ee.__version||te===!0){r.activeTexture(t.TEXTURE0+F);const ve=Qe.getPrimaries(Qe.workingColorSpace),le=b.colorSpace===Sr?null:Qe.getPrimaries(b.colorSpace),fe=b.colorSpace===Sr||ve===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ee=b.isCompressedTexture||b.image[0].isCompressedTexture,Ie=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let ie=0;ie<6;ie++)!Ee&&!Ie?Q[ie]=x(b.image[ie],!1,!0,n.maxCubemapSize):Q[ie]=Ie?b.image[ie].image:b.image[ie],Q[ie]=Ue(b,Q[ie]);const Ze=Q[0],He=v(Ze)||o,Ae=a.convert(b.format,b.colorSpace),xe=a.convert(b.type),pe=S(b.internalFormat,Ae,xe,b.colorSpace),Ne=o&&b.isVideoTexture!==!0,$e=ee.__version===void 0||te===!0;let dt=C(b,Ze,He);H(t.TEXTURE_CUBE_MAP,b,He);let Fe;if(Ee){Ne&&$e&&r.texStorage2D(t.TEXTURE_CUBE_MAP,dt,pe,Ze.width,Ze.height);for(let ie=0;ie<6;ie++){Fe=Q[ie].mipmaps;for(let L=0;L<Fe.length;L++){const ne=Fe[L];b.format!==Or?Ae!==null?Ne?r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,0,0,ne.width,ne.height,Ae,ne.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,pe,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,0,0,ne.width,ne.height,Ae,xe,ne.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L,pe,ne.width,ne.height,0,Ae,xe,ne.data)}}}else{Fe=b.mipmaps,Ne&&$e&&(Fe.length>0&&dt++,r.texStorage2D(t.TEXTURE_CUBE_MAP,dt,pe,Q[0].width,Q[0].height));for(let ie=0;ie<6;ie++)if(Ie){Ne?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Q[ie].width,Q[ie].height,Ae,xe,Q[ie].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Q[ie].width,Q[ie].height,0,Ae,xe,Q[ie].data);for(let L=0;L<Fe.length;L++){const ne=Fe[L].image[ie].image;Ne?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,0,0,ne.width,ne.height,Ae,xe,ne.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,pe,ne.width,ne.height,0,Ae,xe,ne.data)}}else{Ne?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,xe,Q[ie]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,pe,Ae,xe,Q[ie]);for(let L=0;L<Fe.length;L++){const ne=Fe[L];Ne?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,0,0,Ae,xe,ne.image[ie]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,L+1,pe,Ae,xe,ne.image[ie])}}}m(b,He)&&g(t.TEXTURE_CUBE_MAP),ee.__version=J.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function me(T,b,F,te,J,ee){const ve=a.convert(F.format,F.colorSpace),le=a.convert(F.type),fe=S(F.internalFormat,ve,le,F.colorSpace);if(!i.get(b).__hasExternalTextures){const Ee=Math.max(1,b.width>>ee),Ie=Math.max(1,b.height>>ee);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?r.texImage3D(J,ee,fe,Ee,Ie,b.depth,0,ve,le,null):r.texImage2D(J,ee,fe,Ee,Ie,0,ve,le,null)}r.bindFramebuffer(t.FRAMEBUFFER,T),ge(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,i.get(F).__webglTexture,0,Re(b)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,J,i.get(F).__webglTexture,ee),r.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(T,b,F){if(t.bindRenderbuffer(t.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let te=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(F||ge(b)){const J=b.depthTexture;J&&J.isDepthTexture&&(J.type===Ci?te=t.DEPTH_COMPONENT32F:J.type===Ri&&(te=t.DEPTH_COMPONENT24));const ee=Re(b);ge(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,te,b.width,b.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,te,b.width,b.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,b.width,b.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){const te=Re(b);F&&ge(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,b.width,b.height):ge(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const te=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0;J<te.length;J++){const ee=te[J],ve=a.convert(ee.format,ee.colorSpace),le=a.convert(ee.type),fe=S(ee.internalFormat,ve,le,ee.colorSpace),Ee=Re(b);F&&ge(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,fe,b.width,b.height):ge(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,fe,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,fe,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(t.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const F=i.get(b.depthTexture).__webglTexture,te=Re(b);if(b.depthTexture.format===fn)ge(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else if(b.depthTexture.format===_a)ge(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Te(T){const b=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(b.__webglFramebuffer,T)}else if(F){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)r.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]=t.createRenderbuffer(),Le(b.__webglDepthbuffer[te],T,!1)}else r.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),Le(b.__webglDepthbuffer,T,!1);r.bindFramebuffer(t.FRAMEBUFFER,null)}function je(T,b,F){const te=i.get(T);b!==void 0&&me(te.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Te(T)}function z(T){const b=T.texture,F=i.get(T),te=i.get(b);T.addEventListener("dispose",P),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=b.version,s.memory.textures++);const J=T.isWebGLCubeRenderTarget===!0,ee=T.isWebGLMultipleRenderTargets===!0,ve=v(T)||o;if(J){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let fe=0;fe<b.mipmaps.length;fe++)F.__webglFramebuffer[le][fe]=t.createFramebuffer()}else F.__webglFramebuffer[le]=t.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)F.__webglFramebuffer[le]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(ee)if(n.drawBuffers){const le=T.texture;for(let fe=0,Ee=le.length;fe<Ee;fe++){const Ie=i.get(le[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ge(T)===!1){const le=ee?b:[b];F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<le.length;fe++){const Ee=le[fe];F.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const Ie=a.convert(Ee.format,Ee.colorSpace),Q=a.convert(Ee.type),Ze=S(Ee.internalFormat,Ie,Q,Ee.colorSpace,T.isXRRenderTarget===!0),He=Re(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Ze,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,T,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){r.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),H(t.TEXTURE_CUBE_MAP,b,ve);for(let le=0;le<6;le++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)me(F.__webglFramebuffer[le][fe],T,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else me(F.__webglFramebuffer[le],T,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(b,ve)&&g(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(ee){const le=T.texture;for(let fe=0,Ee=le.length;fe<Ee;fe++){const Ie=le[fe],Q=i.get(Ie);r.bindTexture(t.TEXTURE_2D,Q.__webglTexture),H(t.TEXTURE_2D,Ie,ve),me(F.__webglFramebuffer,T,Ie,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Ie,ve)&&g(t.TEXTURE_2D)}r.unbindTexture()}else{let le=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?le=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),r.bindTexture(le,te.__webglTexture),H(le,b,ve),o&&b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)me(F.__webglFramebuffer[fe],T,b,t.COLOR_ATTACHMENT0,le,fe);else me(F.__webglFramebuffer,T,b,t.COLOR_ATTACHMENT0,le,0);m(b,ve)&&g(le),r.unbindTexture()}T.depthBuffer&&Te(T)}function Vt(T){const b=v(T)||o,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,J=F.length;te<J;te++){const ee=F[te];if(m(ee,b)){const ve=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ee).__webglTexture;r.bindTexture(ve,le),g(ve),r.unbindTexture()}}}function ye(T){if(o&&T.samples>0&&ge(T)===!1){const b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,te=T.height;let J=t.COLOR_BUFFER_BIT;const ee=[],ve=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(T),fe=T.isWebGLMultipleRenderTargets===!0;if(fe)for(let Ee=0;Ee<b.length;Ee++)r.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<b.length;Ee++){ee.push(t.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&ee.push(ve);const Ie=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ie===!1&&(T.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Ie===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),fe){const Q=i.get(b[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,F,te,0,0,F,te,J,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Ee=0;Ee<b.length;Ee++){r.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Ie=i.get(b[Ee]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,Ie,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Re(T){return Math.min(n.maxSamples,T.samples)}function ge(T){const b=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ot(T){const b=s.render.frame;d.get(T)!==b&&(d.set(T,b),T.update())}function Ue(T,b){const F=T.colorSpace,te=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Oc||F!==pi&&F!==Sr&&(Qe.getTransfer(F)===nt?o===!1?e.has("EXT_sRGB")===!0&&te===Or?(T.format=Oc,T.minFilter=yr,T.generateMipmaps=!1):b=uv.sRGBToLinear(b):(te!==Or||J!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}this.allocateTextureUnit=N,this.resetTextureUnits=se,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=D,this.setTextureCube=I,this.rebindTextures=je,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function T1(t,e,r){const i=r.isWebGL2;function n(a,s=Sr){let o;const l=Qe.getTransfer(s);if(a===Bi)return t.UNSIGNED_BYTE;if(a===Jg)return t.UNSIGNED_SHORT_4_4_4_4;if(a===ev)return t.UNSIGNED_SHORT_5_5_5_1;if(a===sy)return t.BYTE;if(a===oy)return t.SHORT;if(a===Id)return t.UNSIGNED_SHORT;if(a===Qg)return t.INT;if(a===Ri)return t.UNSIGNED_INT;if(a===Ci)return t.FLOAT;if(a===_s)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===ly)return t.ALPHA;if(a===Or)return t.RGBA;if(a===uy)return t.LUMINANCE;if(a===cy)return t.LUMINANCE_ALPHA;if(a===fn)return t.DEPTH_COMPONENT;if(a===_a)return t.DEPTH_STENCIL;if(a===Oc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===dy)return t.RED;if(a===tv)return t.RED_INTEGER;if(a===hy)return t.RG;if(a===rv)return t.RG_INTEGER;if(a===iv)return t.RGBA_INTEGER;if(a===au||a===su||a===ou||a===lu)if(l===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===au)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===su)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ou)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===lu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===au)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===su)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ou)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===lu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===pf||a===mf||a===gf||a===vf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===pf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===mf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===gf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===vf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===nv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===_f||a===xf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===_f)return l===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===xf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===yf||a===bf||a===Sf||a===Ef||a===Mf||a===Tf||a===wf||a===Af||a===Rf||a===Cf||a===Lf||a===Pf||a===Nf||a===Df)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===yf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===bf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Sf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ef)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Mf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Tf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===wf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Af)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Rf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Cf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Lf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Pf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Nf)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Df)return l===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===uu||a===Uf||a===If)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===uu)return l===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Uf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===If)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===fy||a===Of||a===kf||a===Ff)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===uu)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Of)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===kf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ff)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===hn?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:n}}class w1 extends br{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Va extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A1={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const i of e.hand.values())this._getHandJoint(r,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,i){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const v=r.getJointPose(x,i),c=this._getHandJoint(u,x);v!==null&&(c.matrix.fromArray(v.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=v.radius),c.visible=v!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=r.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=r.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A1)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const i=new Va;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[r.jointName]=i,e.add(i)}return e.joints[r.jointName]}}class R1 extends Ea{constructor(e,r){super();const i=this;let n=null,a=1,s=null,o="local-floor",l=1,u=null,d=null,f=null,h=null,p=null,_=null;const x=r.getContextAttributes();let v=null,c=null;const m=[],g=[],S=new We;let C=null;const A=new br;A.layers.enable(1),A.viewport=new wt;const w=new br;w.layers.enable(2),w.viewport=new wt;const P=[A,w],y=new w1;y.layers.enable(1),y.layers.enable(2);let E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=m[H];return K===void 0&&(K=new Uu,m[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=m[H];return K===void 0&&(K=new Uu,m[H]=K),K.getGripSpace()},this.getHand=function(H){let K=m[H];return K===void 0&&(K=new Uu,m[H]=K),K.getHandSpace()};function X(H){const K=g.indexOf(H.inputSource);if(K===-1)return;const de=m[K];de!==void 0&&(de.update(H.inputSource,H.frame,u||s),de.dispatchEvent({type:H.type,data:H.inputSource}))}function se(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",se),n.removeEventListener("inputsourceschange",N);for(let H=0;H<m.length;H++){const K=g[H];K!==null&&(g[H]=null,m[H].disconnect(K))}E=null,G=null,e.setRenderTarget(v),p=null,h=null,f=null,n=null,c=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",se),n.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await r.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:n.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,r,K),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),c=new yn(p.framebufferWidth,p.framebufferHeight,{format:Or,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,de=null,he=null;x.depth&&(he=x.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,K=x.stencil?_a:fn,de=x.stencil?hn:Ri);const me={colorFormat:r.RGBA8,depthFormat:he,scaleFactor:a};f=new XRWebGLBinding(n,r),h=f.createProjectionLayer(me),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),c=new yn(h.textureWidth,h.textureHeight,{format:Or,type:Bi,depthTexture:new bv(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Le=e.properties.get(c);Le.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await n.requestReferenceSpace(o),re.setContext(n),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function N(H){for(let K=0;K<H.removed.length;K++){const de=H.removed[K],he=g.indexOf(de);he>=0&&(g[he]=null,m[he].disconnect(de))}for(let K=0;K<H.added.length;K++){const de=H.added[K];let he=g.indexOf(de);if(he===-1){for(let Le=0;Le<m.length;Le++)if(Le>=g.length){g.push(de),he=Le;break}else if(g[Le]===null){g[Le]=de,he=Le;break}if(he===-1)break}const me=m[he];me&&me.connect(de)}}const V=new O,q=new O;function $(H,K,de){V.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(de.matrixWorld);const he=V.distanceTo(q),me=K.projectionMatrix.elements,Le=de.projectionMatrix.elements,Pe=me[14]/(me[10]-1),Te=me[14]/(me[10]+1),je=(me[9]+1)/me[5],z=(me[9]-1)/me[5],Vt=(me[8]-1)/me[0],ye=(Le[8]+1)/Le[0],Re=Pe*Vt,ge=Pe*ye,ot=he/(-Vt+ye),Ue=ot*-Vt;K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ue),H.translateZ(ot),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const T=Pe+ot,b=Te+ot,F=Re-Ue,te=ge+(he-Ue),J=je*Te/b*T,ee=z*Te/b*T;H.projectionMatrix.makePerspective(F,te,J,ee,T,b),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function D(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;y.near=w.near=A.near=H.near,y.far=w.far=A.far=H.far,(E!==y.near||G!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,G=y.far);const K=H.parent,de=y.cameras;D(y,K);for(let he=0;he<de.length;he++)D(de[he],K);de.length===2?$(y,A,w):y.projectionMatrix.copy(A.projectionMatrix),I(H,y,K)};function I(H,K,de){de===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=kc*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let j=null;function Y(H,K){if(d=K.getViewerPose(u||s),_=K,d!==null){const de=d.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let he=!1;de.length!==y.cameras.length&&(y.cameras.length=0,he=!0);for(let me=0;me<de.length;me++){const Le=de[me];let Pe=null;if(p!==null)Pe=p.getViewport(Le);else{const je=f.getViewSubImage(h,Le);Pe=je.viewport,me===0&&(e.setRenderTargetTextures(c,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(c))}let Te=P[me];Te===void 0&&(Te=new br,Te.layers.enable(me),Te.viewport=new wt,P[me]=Te),Te.matrix.fromArray(Le.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Le.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),me===0&&(y.matrix.copy(Te.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),he===!0&&y.cameras.push(Te)}}for(let de=0;de<m.length;de++){const he=g[de],me=m[de];he!==null&&me!==void 0&&me.update(he,K,u||s)}j&&j(H,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const re=new xv;re.setAnimationLoop(Y),this.setAnimationLoop=function(H){j=H},this.dispose=function(){}}}function C1(t,e){function r(v,c){v.matrixAutoUpdate===!0&&v.updateMatrix(),c.value.copy(v.matrix)}function i(v,c){c.color.getRGB(v.fogColor.value,gv(t)),c.isFog?(v.fogNear.value=c.near,v.fogFar.value=c.far):c.isFogExp2&&(v.fogDensity.value=c.density)}function n(v,c,m,g,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?a(v,c):c.isMeshToonMaterial?(a(v,c),f(v,c)):c.isMeshPhongMaterial?(a(v,c),d(v,c)):c.isMeshStandardMaterial?(a(v,c),h(v,c),c.isMeshPhysicalMaterial&&p(v,c,S)):c.isMeshMatcapMaterial?(a(v,c),_(v,c)):c.isMeshDepthMaterial?a(v,c):c.isMeshDistanceMaterial?(a(v,c),x(v,c)):c.isMeshNormalMaterial?a(v,c):c.isLineBasicMaterial?(s(v,c),c.isLineDashedMaterial&&o(v,c)):c.isPointsMaterial?l(v,c,m,g):c.isSpriteMaterial?u(v,c):c.isShadowMaterial?(v.color.value.copy(c.color),v.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function a(v,c){v.opacity.value=c.opacity,c.color&&v.diffuse.value.copy(c.color),c.emissive&&v.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(v.map.value=c.map,r(c.map,v.mapTransform)),c.alphaMap&&(v.alphaMap.value=c.alphaMap,r(c.alphaMap,v.alphaMapTransform)),c.bumpMap&&(v.bumpMap.value=c.bumpMap,r(c.bumpMap,v.bumpMapTransform),v.bumpScale.value=c.bumpScale,c.side===nr&&(v.bumpScale.value*=-1)),c.normalMap&&(v.normalMap.value=c.normalMap,r(c.normalMap,v.normalMapTransform),v.normalScale.value.copy(c.normalScale),c.side===nr&&v.normalScale.value.negate()),c.displacementMap&&(v.displacementMap.value=c.displacementMap,r(c.displacementMap,v.displacementMapTransform),v.displacementScale.value=c.displacementScale,v.displacementBias.value=c.displacementBias),c.emissiveMap&&(v.emissiveMap.value=c.emissiveMap,r(c.emissiveMap,v.emissiveMapTransform)),c.specularMap&&(v.specularMap.value=c.specularMap,r(c.specularMap,v.specularMapTransform)),c.alphaTest>0&&(v.alphaTest.value=c.alphaTest);const m=e.get(c).envMap;if(m&&(v.envMap.value=m,v.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=c.reflectivity,v.ior.value=c.ior,v.refractionRatio.value=c.refractionRatio),c.lightMap){v.lightMap.value=c.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=c.lightMapIntensity*g,r(c.lightMap,v.lightMapTransform)}c.aoMap&&(v.aoMap.value=c.aoMap,v.aoMapIntensity.value=c.aoMapIntensity,r(c.aoMap,v.aoMapTransform))}function s(v,c){v.diffuse.value.copy(c.color),v.opacity.value=c.opacity,c.map&&(v.map.value=c.map,r(c.map,v.mapTransform))}function o(v,c){v.dashSize.value=c.dashSize,v.totalSize.value=c.dashSize+c.gapSize,v.scale.value=c.scale}function l(v,c,m,g){v.diffuse.value.copy(c.color),v.opacity.value=c.opacity,v.size.value=c.size*m,v.scale.value=g*.5,c.map&&(v.map.value=c.map,r(c.map,v.uvTransform)),c.alphaMap&&(v.alphaMap.value=c.alphaMap,r(c.alphaMap,v.alphaMapTransform)),c.alphaTest>0&&(v.alphaTest.value=c.alphaTest)}function u(v,c){v.diffuse.value.copy(c.color),v.opacity.value=c.opacity,v.rotation.value=c.rotation,c.map&&(v.map.value=c.map,r(c.map,v.mapTransform)),c.alphaMap&&(v.alphaMap.value=c.alphaMap,r(c.alphaMap,v.alphaMapTransform)),c.alphaTest>0&&(v.alphaTest.value=c.alphaTest)}function d(v,c){v.specular.value.copy(c.specular),v.shininess.value=Math.max(c.shininess,1e-4)}function f(v,c){c.gradientMap&&(v.gradientMap.value=c.gradientMap)}function h(v,c){v.metalness.value=c.metalness,c.metalnessMap&&(v.metalnessMap.value=c.metalnessMap,r(c.metalnessMap,v.metalnessMapTransform)),v.roughness.value=c.roughness,c.roughnessMap&&(v.roughnessMap.value=c.roughnessMap,r(c.roughnessMap,v.roughnessMapTransform)),e.get(c).envMap&&(v.envMapIntensity.value=c.envMapIntensity)}function p(v,c,m){v.ior.value=c.ior,c.sheen>0&&(v.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),v.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(v.sheenColorMap.value=c.sheenColorMap,r(c.sheenColorMap,v.sheenColorMapTransform)),c.sheenRoughnessMap&&(v.sheenRoughnessMap.value=c.sheenRoughnessMap,r(c.sheenRoughnessMap,v.sheenRoughnessMapTransform))),c.clearcoat>0&&(v.clearcoat.value=c.clearcoat,v.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(v.clearcoatMap.value=c.clearcoatMap,r(c.clearcoatMap,v.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,r(c.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(v.clearcoatNormalMap.value=c.clearcoatNormalMap,r(c.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===nr&&v.clearcoatNormalScale.value.negate())),c.iridescence>0&&(v.iridescence.value=c.iridescence,v.iridescenceIOR.value=c.iridescenceIOR,v.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(v.iridescenceMap.value=c.iridescenceMap,r(c.iridescenceMap,v.iridescenceMapTransform)),c.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=c.iridescenceThicknessMap,r(c.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),c.transmission>0&&(v.transmission.value=c.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(v.transmissionMap.value=c.transmissionMap,r(c.transmissionMap,v.transmissionMapTransform)),v.thickness.value=c.thickness,c.thicknessMap&&(v.thicknessMap.value=c.thicknessMap,r(c.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=c.attenuationDistance,v.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(v.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(v.anisotropyMap.value=c.anisotropyMap,r(c.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=c.specularIntensity,v.specularColor.value.copy(c.specularColor),c.specularColorMap&&(v.specularColorMap.value=c.specularColorMap,r(c.specularColorMap,v.specularColorMapTransform)),c.specularIntensityMap&&(v.specularIntensityMap.value=c.specularIntensityMap,r(c.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,c){c.matcap&&(v.matcap.value=c.matcap)}function x(v,c){const m=e.get(c).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function L1(t,e,r,i){let n={},a={},s=[];const o=r.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,g){const S=g.program;i.uniformBlockBinding(m,S)}function u(m,g){let S=n[m.id];S===void 0&&(_(m),S=d(m),n[m.id]=S,m.addEventListener("dispose",v));const C=g.program;i.updateUBOMapping(m,C);const A=e.render.frame;a[m.id]!==A&&(h(m),a[m.id]=A)}function d(m){const g=f();m.__bindingPointIndex=g;const S=t.createBuffer(),C=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function f(){for(let m=0;m<o;m++)if(s.indexOf(m)===-1)return s.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const g=n[m.id],S=m.uniforms,C=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,w=S.length;A<w;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,E=P.length;y<E;y++){const G=P[y];if(p(G,A,y,C)===!0){const X=G.__offset,se=Array.isArray(G.value)?G.value:[G.value];let N=0;for(let V=0;V<se.length;V++){const q=se[V],$=x(q);typeof q=="number"||typeof q=="boolean"?(G.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,X+N,G.__data)):q.isMatrix3?(G.__data[0]=q.elements[0],G.__data[1]=q.elements[1],G.__data[2]=q.elements[2],G.__data[3]=0,G.__data[4]=q.elements[3],G.__data[5]=q.elements[4],G.__data[6]=q.elements[5],G.__data[7]=0,G.__data[8]=q.elements[6],G.__data[9]=q.elements[7],G.__data[10]=q.elements[8],G.__data[11]=0):(q.toArray(G.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,G.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,g,S,C){const A=m.value,w=g+"_"+S;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const P=C[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(m){const g=m.uniforms;let S=0;const C=16;for(let w=0,P=g.length;w<P;w++){const y=Array.isArray(g[w])?g[w]:[g[w]];for(let E=0,G=y.length;E<G;E++){const X=y[E],se=Array.isArray(X.value)?X.value:[X.value];for(let N=0,V=se.length;N<V;N++){const q=se[N],$=x(q),D=S%C;D!==0&&C-D<$.boundary&&(S+=C-D),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=$.storage}}}const A=S%C;return A>0&&(S+=C-A),m.__size=S,m.__cache={},this}function x(m){const g={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),g}function v(m){const g=m.target;g.removeEventListener("dispose",v);const S=s.indexOf(g.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(n[g.id]),delete n[g.id],delete a[g.id]}function c(){for(const m in n)t.deleteBuffer(n[m]);s=[],n={},a={}}return{bind:l,update:u,dispose:c}}class Av{constructor(e={}){const{canvas:r=Ty(),context:i=null,depth:n=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,v=null;const c=[],m=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const g=this;let S=!1,C=0,A=0,w=null,P=-1,y=null;const E=new wt,G=new wt;let X=null;const se=new Ye(0);let N=0,V=r.width,q=r.height,$=1,D=null,I=null;const j=new wt(0,0,V,q),Y=new wt(0,0,V,q);let re=!1;const H=new zd;let K=!1,de=!1,he=null;const me=new bt,Le=new We,Pe=new O,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return w===null?$:1}let z=i;function Vt(M,U){for(let B=0;B<M.length;B++){const W=M[B],k=r.getContext(W,U);if(k!==null)return k}return null}try{const M={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${Ud}`),r.addEventListener("webglcontextlost",ie,!1),r.addEventListener("webglcontextrestored",L,!1),r.addEventListener("webglcontextcreationerror",ne,!1),z===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),z=Vt(U,M),z===null)throw Vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ye,Re,ge,ot,Ue,T,b,F,te,J,ee,ve,le,fe,Ee,Ie,Q,Ze,He,Ae,xe,pe,Ne,$e;function dt(){ye=new BE(z),Re=new UE(z,ye,e),ye.init(Re),pe=new T1(z,ye,Re),ge=new E1(z,ye,Re),ot=new VE(z),Ue=new u1,T=new M1(z,ye,ge,Ue,Re,pe,ot),b=new OE(g),F=new zE(g),te=new Zy(z,Re),Ne=new NE(z,ye,te,Re),J=new HE(z,te,ot,Ne),ee=new qE(z,J,te,ot),He=new XE(z,Re,T),Ie=new IE(Ue),ve=new l1(g,b,F,ye,Re,Ne,Ie),le=new C1(g,Ue),fe=new d1,Ee=new v1(ye,Re),Ze=new PE(g,b,F,ge,ee,h,l),Q=new S1(g,ee,Re),$e=new L1(z,ot,Re,ge),Ae=new DE(z,ye,ot,Re),xe=new GE(z,ye,ot,Re),ot.programs=ve.programs,g.capabilities=Re,g.extensions=ye,g.properties=Ue,g.renderLists=fe,g.shadowMap=Q,g.state=ge,g.info=ot}dt();const Fe=new R1(g,z);this.xr=Fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const M=ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(V,q,!1))},this.getSize=function(M){return M.set(V,q)},this.setSize=function(M,U,B=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,q=U,r.width=Math.floor(M*$),r.height=Math.floor(U*$),B===!0&&(r.style.width=M+"px",r.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(V*$,q*$).floor()},this.setDrawingBufferSize=function(M,U,B){V=M,q=U,$=B,r.width=Math.floor(M*B),r.height=Math.floor(U*B),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,U,B,W){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,U,B,W),ge.viewport(E.copy(j).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(Y)},this.setScissor=function(M,U,B,W){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,U,B,W),ge.scissor(G.copy(Y).multiplyScalar($).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(M){ge.setScissorTest(re=M)},this.setOpaqueSort=function(M){D=M},this.setTransparentSort=function(M){I=M},this.getClearColor=function(M){return M.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(M=!0,U=!0,B=!0){let W=0;if(M){let k=!1;if(w!==null){const oe=w.texture.format;k=oe===iv||oe===rv||oe===tv}if(k){const oe=w.texture.type,_e=oe===Bi||oe===Ri||oe===Id||oe===hn||oe===Jg||oe===ev,Me=Ze.getClearColor(),we=Ze.getClearAlpha(),Ve=Me.r,Oe=Me.g,ke=Me.b;_e?(p[0]=Ve,p[1]=Oe,p[2]=ke,p[3]=we,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=Ve,_[1]=Oe,_[2]=ke,_[3]=we,z.clearBufferiv(z.COLOR,0,_))}else W|=z.COLOR_BUFFER_BIT}U&&(W|=z.DEPTH_BUFFER_BIT),B&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",ie,!1),r.removeEventListener("webglcontextrestored",L,!1),r.removeEventListener("webglcontextcreationerror",ne,!1),fe.dispose(),Ee.dispose(),Ue.dispose(),b.dispose(),F.dispose(),ee.dispose(),Ne.dispose(),$e.dispose(),ve.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",pr),Fe.removeEventListener("sessionend",tt),he&&(he.dispose(),he=null),Wt.stop()};function ie(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=ot.autoReset,U=Q.enabled,B=Q.autoUpdate,W=Q.needsUpdate,k=Q.type;dt(),ot.autoReset=M,Q.enabled=U,Q.autoUpdate=B,Q.needsUpdate=W,Q.type=k}function ne(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ue(M){const U=M.target;U.removeEventListener("dispose",ue),Ce(U)}function Ce(M){be(M),Ue.remove(M)}function be(M){const U=Ue.get(M).programs;U!==void 0&&(U.forEach(function(B){ve.releaseProgram(B)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,B,W,k,oe){U===null&&(U=Te);const _e=k.isMesh&&k.matrixWorld.determinant()<0,Me=Lv(M,U,B,W,k);ge.setMaterial(W,_e);let we=B.index,Ve=1;if(W.wireframe===!0){if(we=J.getWireframeAttribute(B),we===void 0)return;Ve=2}const Oe=B.drawRange,ke=B.attributes.position;let Dt=Oe.start*Ve,_t=(Oe.start+Oe.count)*Ve;oe!==null&&(Dt=Math.max(Dt,oe.start*Ve),_t=Math.min(_t,(oe.start+oe.count)*Ve)),we!==null?(Dt=Math.max(Dt,0),_t=Math.min(_t,we.count)):ke!=null&&(Dt=Math.max(Dt,0),_t=Math.min(_t,ke.count));const mr=_t-Dt;if(mr<0||mr===1/0)return;Ne.setup(k,W,Me,B,we);let Kr,ft=Ae;if(we!==null&&(Kr=te.get(we),ft=xe,ft.setIndex(Kr)),k.isMesh)W.wireframe===!0?(ge.setLineWidth(W.wireframeLinewidth*je()),ft.setMode(z.LINES)):ft.setMode(z.TRIANGLES);else if(k.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),ge.setLineWidth(ze*je()),k.isLineSegments?ft.setMode(z.LINES):k.isLineLoop?ft.setMode(z.LINE_LOOP):ft.setMode(z.LINE_STRIP)}else k.isPoints?ft.setMode(z.POINTS):k.isSprite&&ft.setMode(z.TRIANGLES);if(k.isBatchedMesh)ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ft.renderInstances(Dt,mr,k.count);else if(B.isInstancedBufferGeometry){const ze=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Al=Math.min(B.instanceCount,ze);ft.renderInstances(Dt,mr,Al)}else ft.render(Dt,mr)};function Je(M,U,B){M.transparent===!0&&M.side===ai&&M.forceSinglePass===!1?(M.side=nr,M.needsUpdate=!0,Ls(M,U,B),M.side=Vi,M.needsUpdate=!0,Ls(M,U,B),M.side=ai):Ls(M,U,B)}this.compile=function(M,U,B=null){B===null&&(B=M),v=Ee.get(B),v.init(),m.push(v),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),M!==B&&M.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),v.setupLights(g._useLegacyLights);const W=new Set;return M.traverse(function(k){const oe=k.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){const Me=oe[_e];Je(Me,B,k),W.add(Me)}else Je(oe,B,k),W.add(oe)}),m.pop(),v=null,W},this.compileAsync=function(M,U,B=null){const W=this.compile(M,U,B);return new Promise(k=>{function oe(){if(W.forEach(function(_e){Ue.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){k(M);return}setTimeout(oe,10)}ye.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let et=null;function mt(M){et&&et(M)}function pr(){Wt.stop()}function tt(){Wt.start()}const Wt=new xv;Wt.setAnimationLoop(mt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(M){et=M,Fe.setAnimationLoop(M),M===null?Wt.stop():Wt.start()},Fe.addEventListener("sessionstart",pr),Fe.addEventListener("sessionend",tt),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(U),U=Fe.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,U,w),v=Ee.get(M,m.length),v.init(),m.push(v),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H.setFromProjectionMatrix(me),de=this.localClippingEnabled,K=Ie.init(this.clippingPlanes,de),x=fe.get(M,c.length),x.init(),c.push(x),Br(M,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(D,I),this.info.render.frame++,K===!0&&Ie.beginShadows();const B=v.state.shadowsArray;if(Q.render(B,M,U),K===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(x,M),v.setupLights(g._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let k=0,oe=W.length;k<oe;k++){const _e=W[k];Wd(x,M,_e,_e.viewport)}}else Wd(x,M,U);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(g,M,U),Ne.resetDefaultState(),P=-1,y=null,m.pop(),m.length>0?v=m[m.length-1]:v=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Br(M,U,B,W){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)v.pushLight(M),M.castShadow&&v.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||H.intersectsSprite(M)){W&&Pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);const oe=ee.update(M),_e=M.material;_e.visible&&x.push(M,oe,_e,B,Pe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||H.intersectsObject(M))){const oe=ee.update(M),_e=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pe.copy(M.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Pe.copy(oe.boundingSphere.center)),Pe.applyMatrix4(M.matrixWorld).applyMatrix4(me)),Array.isArray(_e)){const Me=oe.groups;for(let we=0,Ve=Me.length;we<Ve;we++){const Oe=Me[we],ke=_e[Oe.materialIndex];ke&&ke.visible&&x.push(M,oe,ke,B,Pe.z,Oe)}}else _e.visible&&x.push(M,oe,_e,B,Pe.z,null)}}const k=M.children;for(let oe=0,_e=k.length;oe<_e;oe++)Br(k[oe],U,B,W)}function Wd(M,U,B,W){const k=M.opaque,oe=M.transmissive,_e=M.transparent;v.setupLightsView(B),K===!0&&Ie.setGlobalState(g.clippingPlanes,B),oe.length>0&&Cv(k,oe,U,B),W&&ge.viewport(E.copy(W)),k.length>0&&Cs(k,U,B),oe.length>0&&Cs(oe,U,B),_e.length>0&&Cs(_e,U,B),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Cv(M,U,B,W){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const k=Re.isWebGL2;he===null&&(he=new yn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?_s:Bi,minFilter:vs,samples:k?4:0})),g.getDrawingBufferSize(Le),k?he.setSize(Le.x,Le.y):he.setSize(Fc(Le.x),Fc(Le.y));const oe=g.getRenderTarget();g.setRenderTarget(he),g.getClearColor(se),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear();const _e=g.toneMapping;g.toneMapping=zi,Cs(M,B,W),T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he);let Me=!1;for(let we=0,Ve=U.length;we<Ve;we++){const Oe=U[we],ke=Oe.object,Dt=Oe.geometry,_t=Oe.material,mr=Oe.group;if(_t.side===ai&&ke.layers.test(W.layers)){const Kr=_t.side;_t.side=nr,_t.needsUpdate=!0,jd(ke,B,W,Dt,_t,mr),_t.side=Kr,_t.needsUpdate=!0,Me=!0}}Me===!0&&(T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he)),g.setRenderTarget(oe),g.setClearColor(se,N),g.toneMapping=_e}function Cs(M,U,B){const W=U.isScene===!0?U.overrideMaterial:null;for(let k=0,oe=M.length;k<oe;k++){const _e=M[k],Me=_e.object,we=_e.geometry,Ve=W===null?_e.material:W,Oe=_e.group;Me.layers.test(B.layers)&&jd(Me,U,B,we,Ve,Oe)}}function jd(M,U,B,W,k,oe){M.onBeforeRender(g,U,B,W,k,oe),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(g,U,B,W,M,oe),k.transparent===!0&&k.side===ai&&k.forceSinglePass===!1?(k.side=nr,k.needsUpdate=!0,g.renderBufferDirect(B,U,W,k,M,oe),k.side=Vi,k.needsUpdate=!0,g.renderBufferDirect(B,U,W,k,M,oe),k.side=ai):g.renderBufferDirect(B,U,W,k,M,oe),M.onAfterRender(g,U,B,W,k,oe)}function Ls(M,U,B){U.isScene!==!0&&(U=Te);const W=Ue.get(M),k=v.state.lights,oe=v.state.shadowsArray,_e=k.state.version,Me=ve.getParameters(M,k.state,oe,U,B),we=ve.getProgramCacheKey(Me);let Ve=W.programs;W.environment=M.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(M.isMeshStandardMaterial?F:b).get(M.envMap||W.environment),Ve===void 0&&(M.addEventListener("dispose",ue),Ve=new Map,W.programs=Ve);let Oe=Ve.get(we);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===_e)return qd(M,Me),Oe}else Me.uniforms=ve.getUniforms(M),M.onBuild(B,Me,g),M.onBeforeCompile(Me,g),Oe=ve.acquireProgram(Me,we),Ve.set(we,Oe),W.uniforms=Me.uniforms;const ke=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=Ie.uniform),qd(M,Me),W.needsLights=Nv(M),W.lightsStateVersion=_e,W.needsLights&&(ke.ambientLightColor.value=k.state.ambient,ke.lightProbe.value=k.state.probe,ke.directionalLights.value=k.state.directional,ke.directionalLightShadows.value=k.state.directionalShadow,ke.spotLights.value=k.state.spot,ke.spotLightShadows.value=k.state.spotShadow,ke.rectAreaLights.value=k.state.rectArea,ke.ltc_1.value=k.state.rectAreaLTC1,ke.ltc_2.value=k.state.rectAreaLTC2,ke.pointLights.value=k.state.point,ke.pointLightShadows.value=k.state.pointShadow,ke.hemisphereLights.value=k.state.hemi,ke.directionalShadowMap.value=k.state.directionalShadowMap,ke.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ke.spotShadowMap.value=k.state.spotShadowMap,ke.spotLightMatrix.value=k.state.spotLightMatrix,ke.spotLightMap.value=k.state.spotLightMap,ke.pointShadowMap.value=k.state.pointShadowMap,ke.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function Xd(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Lo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function qd(M,U){const B=Ue.get(M);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Lv(M,U,B,W,k){U.isScene!==!0&&(U=Te),T.resetTextureUnits();const oe=U.fog,_e=W.isMeshStandardMaterial?U.environment:null,Me=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:pi,we=(W.isMeshStandardMaterial?F:b).get(W.envMap||_e),Ve=W.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Oe=!!B.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!B.morphAttributes.position,Dt=!!B.morphAttributes.normal,_t=!!B.morphAttributes.color;let mr=zi;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mr=g.toneMapping);const Kr=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ft=Kr!==void 0?Kr.length:0,ze=Ue.get(W),Al=v.state.lights;if(K===!0&&(de===!0||M!==y)){const gr=M===y&&W.id===P;Ie.setState(W,M,gr)}let Rl=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Al.state.version||ze.outputColorSpace!==Me||k.isBatchedMesh&&ze.batching===!1||!k.isBatchedMesh&&ze.batching===!0||k.isInstancedMesh&&ze.instancing===!1||!k.isInstancedMesh&&ze.instancing===!0||k.isSkinnedMesh&&ze.skinning===!1||!k.isSkinnedMesh&&ze.skinning===!0||k.isInstancedMesh&&ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ze.instancingColor===!1&&k.instanceColor!==null||ze.envMap!==we||W.fog===!0&&ze.fog!==oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ie.numPlanes||ze.numIntersection!==Ie.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==Oe||ze.morphTargets!==ke||ze.morphNormals!==Dt||ze.morphColors!==_t||ze.toneMapping!==mr||Re.isWebGL2===!0&&ze.morphTargetsCount!==ft)&&(Rl=!0):(Rl=!0,ze.__version=W.version);let Yi=ze.currentProgram;Rl===!0&&(Yi=Ls(W,U,k));let Yd=!1,Ta=!1,Cl=!1;const Ut=Yi.getUniforms(),$i=ze.uniforms;if(ge.useProgram(Yi.program)&&(Yd=!0,Ta=!0,Cl=!0),W.id!==P&&(P=W.id,Ta=!0),Yd||y!==M){Ut.setValue(z,"projectionMatrix",M.projectionMatrix),Ut.setValue(z,"viewMatrix",M.matrixWorldInverse);const gr=Ut.map.cameraPosition;gr!==void 0&&gr.setValue(z,Pe.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&Ut.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ta=!0,Cl=!0)}if(k.isSkinnedMesh){Ut.setOptional(z,k,"bindMatrix"),Ut.setOptional(z,k,"bindMatrixInverse");const gr=k.skeleton;gr&&(Re.floatVertexTextures?(gr.boneTexture===null&&gr.computeBoneTexture(),Ut.setValue(z,"boneTexture",gr.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ut.setOptional(z,k,"batchingTexture"),Ut.setValue(z,"batchingTexture",k._matricesTexture,T));const Ll=B.morphAttributes;if((Ll.position!==void 0||Ll.normal!==void 0||Ll.color!==void 0&&Re.isWebGL2===!0)&&He.update(k,B,Yi),(Ta||ze.receiveShadow!==k.receiveShadow)&&(ze.receiveShadow=k.receiveShadow,Ut.setValue(z,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&($i.envMap.value=we,$i.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Ta&&(Ut.setValue(z,"toneMappingExposure",g.toneMappingExposure),ze.needsLights&&Pv($i,Cl),oe&&W.fog===!0&&le.refreshFogUniforms($i,oe),le.refreshMaterialUniforms($i,W,$,q,he),Lo.upload(z,Xd(ze),$i,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Lo.upload(z,Xd(ze),$i,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue(z,"center",k.center),Ut.setValue(z,"modelViewMatrix",k.modelViewMatrix),Ut.setValue(z,"normalMatrix",k.normalMatrix),Ut.setValue(z,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const gr=W.uniformsGroups;for(let Pl=0,Dv=gr.length;Pl<Dv;Pl++)if(Re.isWebGL2){const $d=gr[Pl];$e.update($d,Yi),$e.bind($d,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function Pv(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Nv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,U,B){Ue.get(M.texture).__webglTexture=U,Ue.get(M.depthTexture).__webglTexture=B;const W=Ue.get(M);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=B===void 0,W.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){const B=Ue.get(M);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,B=0){w=M,C=U,A=B;let W=!0,k=null,oe=!1,_e=!1;if(M){const Me=Ue.get(M);Me.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Me.__webglFramebuffer===void 0?T.setupRenderTarget(M):Me.__hasExternalTextures&&T.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);const we=M.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(_e=!0);const Ve=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?k=Ve[U][B]:k=Ve[U],oe=!0):Re.isWebGL2&&M.samples>0&&T.useMultisampledRTT(M)===!1?k=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(Ve)?k=Ve[B]:k=Ve,E.copy(M.viewport),G.copy(M.scissor),X=M.scissorTest}else E.copy(j).multiplyScalar($).floor(),G.copy(Y).multiplyScalar($).floor(),X=re;if(ge.bindFramebuffer(z.FRAMEBUFFER,k)&&Re.drawBuffers&&W&&ge.drawBuffers(M,k),ge.viewport(E),ge.scissor(G),ge.setScissorTest(X),oe){const Me=Ue.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,B)}else if(_e){const Me=Ue.get(M.texture),we=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Me.__webglTexture,B||0,we)}P=-1},this.readRenderTargetPixels=function(M,U,B,W,k,oe,_e){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){ge.bindFramebuffer(z.FRAMEBUFFER,Me);try{const we=M.texture,Ve=we.format,Oe=we.type;if(Ve!==Or&&pe.convert(Ve)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Oe===_s&&(ye.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Oe!==Bi&&pe.convert(Oe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Ci&&(Re.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-W&&B>=0&&B<=M.height-k&&z.readPixels(U,B,W,k,pe.convert(Ve),pe.convert(Oe),oe)}finally{const we=w!==null?Ue.get(w).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(M,U,B=0){const W=Math.pow(2,-B),k=Math.floor(U.image.width*W),oe=Math.floor(U.image.height*W);T.setTexture2D(U,0),z.copyTexSubImage2D(z.TEXTURE_2D,B,0,0,M.x,M.y,k,oe),ge.unbindTexture()},this.copyTextureToTexture=function(M,U,B,W=0){const k=U.image.width,oe=U.image.height,_e=pe.convert(B.format),Me=pe.convert(B.type);T.setTexture2D(B,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,M.x,M.y,k,oe,_e,Me,U.image.data):U.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,_e,U.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,M.x,M.y,_e,Me,U.image),W===0&&B.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(M,U,B,W,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const oe=M.max.x-M.min.x+1,_e=M.max.y-M.min.y+1,Me=M.max.z-M.min.z+1,we=pe.convert(W.format),Ve=pe.convert(W.type);let Oe;if(W.isData3DTexture)T.setTexture3D(W,0),Oe=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)T.setTexture2DArray(W,0),Oe=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const ke=z.getParameter(z.UNPACK_ROW_LENGTH),Dt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),_t=z.getParameter(z.UNPACK_SKIP_PIXELS),mr=z.getParameter(z.UNPACK_SKIP_ROWS),Kr=z.getParameter(z.UNPACK_SKIP_IMAGES),ft=B.isCompressedTexture?B.mipmaps[k]:B.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,M.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,M.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?z.texSubImage3D(Oe,k,U.x,U.y,U.z,oe,_e,Me,we,Ve,ft.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Oe,k,U.x,U.y,U.z,oe,_e,Me,we,ft.data)):z.texSubImage3D(Oe,k,U.x,U.y,U.z,oe,_e,Me,we,Ve,ft),z.pixelStorei(z.UNPACK_ROW_LENGTH,ke),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,_t),z.pixelStorei(z.UNPACK_SKIP_ROWS,mr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Kr),k===0&&W.generateMipmaps&&z.generateMipmap(Oe),ge.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=e===Od?"display-p3":"srgb",r.unpackColorSpace=Qe.workingColorSpace===Ml?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?pn:av}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===pn?Lt:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class P1 extends Av{}P1.prototype.isWebGL1Renderer=!0;class N1 extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r}}class Gd extends qi{constructor(e=[],r=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:r,radius:i,detail:n};const a=[],s=[];o(n),u(i),d(),this.setAttribute("position",new $r(a,3)),this.setAttribute("normal",new $r(a.slice(),3)),this.setAttribute("uv",new $r(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const g=new O,S=new O,C=new O;for(let A=0;A<r.length;A+=3)p(r[A+0],g),p(r[A+1],S),p(r[A+2],C),l(g,S,C,m)}function l(m,g,S,C){const A=C+1,w=[];for(let P=0;P<=A;P++){w[P]=[];const y=m.clone().lerp(S,P/A),E=g.clone().lerp(S,P/A),G=A-P;for(let X=0;X<=G;X++)X===0&&P===A?w[P][X]=y:w[P][X]=y.clone().lerp(E,X/G)}for(let P=0;P<A;P++)for(let y=0;y<2*(A-P)-1;y++){const E=Math.floor(y/2);y%2===0?(h(w[P][E+1]),h(w[P+1][E]),h(w[P][E])):(h(w[P][E+1]),h(w[P+1][E+1]),h(w[P+1][E]))}}function u(m){const g=new O;for(let S=0;S<a.length;S+=3)g.x=a[S+0],g.y=a[S+1],g.z=a[S+2],g.normalize().multiplyScalar(m),a[S+0]=g.x,a[S+1]=g.y,a[S+2]=g.z}function d(){const m=new O;for(let g=0;g<a.length;g+=3){m.x=a[g+0],m.y=a[g+1],m.z=a[g+2];const S=v(m)/2/Math.PI+.5,C=c(m)/Math.PI+.5;s.push(S,1-C)}_(),f()}function f(){for(let m=0;m<s.length;m+=6){const g=s[m+0],S=s[m+2],C=s[m+4],A=Math.max(g,S,C),w=Math.min(g,S,C);A>.9&&w<.1&&(g<.2&&(s[m+0]+=1),S<.2&&(s[m+2]+=1),C<.2&&(s[m+4]+=1))}}function h(m){a.push(m.x,m.y,m.z)}function p(m,g){const S=m*3;g.x=e[S+0],g.y=e[S+1],g.z=e[S+2]}function _(){const m=new O,g=new O,S=new O,C=new O,A=new We,w=new We,P=new We;for(let y=0,E=0;y<a.length;y+=9,E+=6){m.set(a[y+0],a[y+1],a[y+2]),g.set(a[y+3],a[y+4],a[y+5]),S.set(a[y+6],a[y+7],a[y+8]),A.set(s[E+0],s[E+1]),w.set(s[E+2],s[E+3]),P.set(s[E+4],s[E+5]),C.copy(m).add(g).add(S).divideScalar(3);const G=v(C);x(A,E+0,m,G),x(w,E+2,g,G),x(P,E+4,S,G)}}function x(m,g,S,C){C<0&&m.x===1&&(s[g]=m.x-1),S.x===0&&S.z===0&&(s[g]=C/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function c(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.vertices,e.indices,e.radius,e.details)}}class Vd extends Gd{constructor(e=1,r=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,e,r),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:r}}static fromJSON(e){return new Vd(e.radius,e.detail)}}class D1 extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sv,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rv extends Bt{constructor(e,r=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=r}dispose(){}copy(e,r){return super.copy(e,r),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const r=super.toJSON(e);return r.object.color=this.color.getHex(),r.object.intensity=this.intensity,this.groundColor!==void 0&&(r.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(r.object.distance=this.distance),this.angle!==void 0&&(r.object.angle=this.angle),this.decay!==void 0&&(r.object.decay=this.decay),this.penumbra!==void 0&&(r.object.penumbra=this.penumbra),this.shadow!==void 0&&(r.object.shadow=this.shadow.toJSON()),r}}const Iu=new bt,Ap=new O,Rp=new O;class U1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zd,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const r=this.camera,i=this.matrix;Ap.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ap),Rp.setFromMatrixPosition(e.target.matrixWorld),r.lookAt(Rp),r.updateMatrixWorld(),Iu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class I1 extends U1{constructor(){super(new yv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ou extends Rv{constructor(e,r){super(e,r),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new I1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class O1 extends Rv{constructor(e,r){super(e,r),this.isAmbientLight=!0,this.type="AmbientLight"}}class k1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const r=Cp();e=(r-this.oldTime)/1e3,this.oldTime=r,this.elapsedTime+=e}return e}}function Cp(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);function F1(){const t=Xe.useRef(null);return Xe.useEffect(()=>{const e=t.current;if(!e)return;const r=e.clientWidth||400,i=e.clientHeight||400,n=new N1,a=new br(35,r/i,.1,100);a.position.set(0,0,6);const s=new Av({antialias:!0,alpha:!0});s.setSize(r,i),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(s.domElement),n.add(new O1(16777215,.2));const o=new Ou(58879,2.2);o.position.set(4,2,3),n.add(o);const l=new Ou(16722527,2.6);l.position.set(-4,1,-3),n.add(l);const u=new Ou(16777215,.35);u.position.set(0,-3,4),n.add(u);const d=new Va;n.add(d);const f=new D1({color:1315871,flatShading:!0,metalness:.35,roughness:.45}),h=new Fd({color:58879,wireframe:!0,transparent:!0,opacity:.15}),p=new Vd(1.4,1),_=p.attributes.position,x=new O;for(let P=0;P<_.count;P++){x.fromBufferAttribute(_,P);const y=Math.sin(x.x*3.1)*Math.cos(x.y*2.7)*Math.sin(x.z*3.7);x.multiplyScalar(1+y*.15),_.setXYZ(P,x.x,x.y,x.z)}p.computeVertexNormals();const v=new jr(p,f);v.add(new jr(p,h)),d.add(v);let c=0,m=0;const g=P=>{c=(P.clientY/window.innerHeight-.5)*.4,m=(P.clientX/window.innerWidth-.5)*.4},S=()=>{if(!e)return;const P=e.clientWidth,y=e.clientHeight;P&&y&&(a.aspect=P/y,a.updateProjectionMatrix(),s.setSize(P,y))};window.addEventListener("mousemove",g),window.addEventListener("resize",S);const C=new k1;let A;const w=()=>{const P=C.getElapsedTime();d.rotation.y=P*.45+m,d.rotation.x+=(c-d.rotation.x)*.05,d.position.y=Math.sin(P*.8)*.08,s.render(n,a),A=requestAnimationFrame(w)};return A=requestAnimationFrame(w),()=>{cancelAnimationFrame(A),window.removeEventListener("mousemove",g),window.removeEventListener("resize",S),e&&s.domElement&&e.removeChild(s.domElement),p.dispose(),f.dispose(),h.dispose(),s.dispose()}},[]),R.jsx("div",{id:"head-3d",ref:t,"aria-hidden":"true"})}function z1(){return R.jsxs("section",{className:"hero",id:"home",children:[R.jsx("div",{className:"ambient-light"}),R.jsx(F1,{}),R.jsxs("h1",{children:[R.jsx("svg",{className:"hero-name-svg",viewBox:"0 0 880 72",xmlns:"http://www.w3.org/2000/svg",children:R.jsx("text",{x:"0",y:"56",fontFamily:"'Syncopate', sans-serif",fontWeight:"700",fontSize:"50",letterSpacing:"3",className:"hero-name-text",children:Se.firstName.toUpperCase()})}),R.jsx("br",{}),R.jsx("span",{className:"outline",children:Se.lastName.toUpperCase()})]}),R.jsxs("div",{className:"hero-desc",children:[R.jsx("strong",{children:Se.primaryTitle})," ",R.jsx("br",{}),Se.secondaryTitle,". ",R.jsx("br",{}),Se.tagline,R.jsxs("div",{className:"work-tech2",children:[R.jsxs("a",{className:"tech-pill2",href:Se.resumeUrl,download:Se.resumeDownloadName,target:"_blank",rel:"noopener noreferrer",style:{borderColor:"var(--accent)",color:"#ff9cb3",background:"rgba(255, 42, 95, 0.08)"},children:[R.jsx(gx,{size:15}),"Download CV"]}),R.jsxs("a",{className:"tech-pill2",href:Se.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[R.jsx(qg,{size:15}),"GitHub"]}),R.jsxs("a",{className:"tech-pill2",href:Se.whatsappUrl,target:"_blank",rel:"noopener noreferrer",children:[R.jsx(yx,{size:15}),"WhatsApp"]}),R.jsxs("a",{className:"tech-pill2",href:`mailto:${Se.email}`,children:[R.jsx(Yg,{size:15}),"Email"]}),R.jsxs("span",{className:"tech-pill2",style:{borderColor:"rgba(0, 229, 255, 0.4)",color:"var(--accent2)"},children:[R.jsx(vx,{size:15}),Se.location]})]})]}),R.jsx("div",{className:"stats-banner",children:Wg.map((t,e)=>R.jsxs("div",{className:"stat-item",children:[R.jsx("h4",{children:t.value}),R.jsx("p",{children:t.label})]},e))})]})}function B1(){const t=["Full Stack Engineer","Next.js 14","QA Automation","Node.js & Express","WebSockets","PostgreSQL & MongoDB","Playwright & Jest","Docker Containers"];return R.jsx("div",{className:"marquee","aria-hidden":"true",children:R.jsx("div",{className:"marquee-track",children:t.concat(t).map((e,r)=>R.jsxs(Bp.Fragment,{children:[R.jsx("span",{children:e}),R.jsx("span",{className:"accent",children:"✦"})]},r))})})}function H1(){const[t,e]=Xe.useState("All"),[r,i]=Xe.useState(""),n=Xe.useMemo(()=>Co.filter(a=>{const s=t==="All"||a.category===t,o=a.title.toLowerCase().includes(r.toLowerCase())||a.description.toLowerCase().includes(r.toLowerCase())||a.tech.some(l=>l.toLowerCase().includes(r.toLowerCase()));return s&&o}),[t,r]);return R.jsxs("section",{id:"work",children:[R.jsxs("h2",{className:"section-title",children:["Selected ",R.jsx("span",{children:"Work"})]}),R.jsxs("div",{className:"project-controls",children:[R.jsx("div",{className:"category-tabs",children:ux.map(a=>{const s=a==="All"?Co.length:Co.filter(o=>o.category===a).length;return R.jsxs("button",{type:"button",className:`tab-btn ${t===a?"active":""}`,onClick:()=>e(a),children:[a," (",s,")"]},a)})}),R.jsxs("div",{className:"search-input-wrap",children:[R.jsx(bx,{className:"search-icon-inside"}),R.jsx("input",{type:"text",placeholder:"Search projects or stack...",value:r,onChange:a=>i(a.target.value)})]})]}),R.jsx("div",{className:"work-grid",children:n.length===0?R.jsxs("div",{style:{padding:"3rem",textAlign:"center",color:"#888",background:"var(--surface)",borderRadius:"20px",border:"1px solid var(--border)"},children:['No projects found matching "',r,'". Try a different search term or category.']}):n.map(a=>R.jsxs("div",{className:"work-item",children:[R.jsxs("div",{className:"work-content",children:[R.jsx("span",{className:"work-category-badge",children:a.category}),R.jsx("h3",{className:"work-title",children:a.title}),R.jsx("div",{className:"work-desc",children:a.description}),R.jsx("div",{className:"work-tech",children:a.tech.map((s,o)=>R.jsx("span",{className:"tech-pill",children:s},o))}),R.jsxs("div",{className:"work-links",children:[a.liveUrl&&R.jsxs("a",{href:a.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"live-btn",children:[R.jsx(mx,{size:16}),"Live Platform"]}),a.githubUrl&&R.jsxs("a",{href:a.githubUrl,target:"_blank",rel:"noopener noreferrer",children:[R.jsx(qg,{size:16}),"Source Code"]})]})]}),R.jsxs("div",{className:"work-metric",children:[R.jsx("span",{className:"metric-val",children:a.metric}),R.jsx("span",{className:"metric-label",children:a.metricLabel})]})]},a.id))})]})}function G1(){return R.jsxs("section",{id:"capabilities",children:[R.jsxs("h2",{className:"section-title",children:["Engine ",R.jsx("span",{children:"Capabilities"})]}),R.jsx("div",{className:"bento-grid",children:jg.map((t,e)=>{const r=e===0?"b-card b-large":e===1||e===3?"b-card b-wide":"b-card";return R.jsxs("div",{className:r,children:[R.jsxs("div",{children:[R.jsx("div",{className:"b-header",children:t.header}),R.jsx("div",{className:"b-title",style:{marginTop:"0.8rem"},children:t.title})]}),R.jsx("div",{className:"tag-cloud",children:t.tags.map((i,n)=>R.jsx("span",{children:i},n))})]},t.id)})})]})}function V1(){return R.jsxs("section",{id:"journey",children:[R.jsxs("h2",{className:"section-title",children:["Career ",R.jsx("span",{children:"Journey"})]}),R.jsx("div",{className:"journey-list",children:Xg.map((t,e)=>R.jsxs("div",{className:"j-row",children:[R.jsx("div",{className:"j-year",children:t.year}),R.jsxs("div",{className:"j-role",children:[t.role," ",R.jsx("br",{}),R.jsx("span",{style:{fontSize:"1rem",color:"var(--accent2)",fontFamily:"'Space Grotesk', sans-serif"},children:t.company})]}),R.jsx("div",{className:"j-desc",children:t.description})]},e))})]})}function W1(){const[t,e]=Xe.useState(!1);return R.jsxs("section",{id:"about",children:[R.jsxs("h2",{className:"section-title",children:["About ",R.jsx("span",{children:"Me"})]}),R.jsxs("div",{className:"about-content",children:[R.jsxs("figure",{className:"about-photo",children:[R.jsx("img",{src:"bilal.jpg",alt:Se.name,style:{display:t?"block":"none",width:"100%",aspectRatio:"4 / 5",objectFit:"cover",borderRadius:"20px",border:"1px solid var(--border)"},onLoad:()=>e(!0),onError:()=>e(!1)}),!t&&R.jsxs("div",{className:"avatar-card",children:[R.jsx("div",{className:"avatar-badge",children:Se.initials}),R.jsx("div",{className:"avatar-name",children:Se.name}),R.jsx("div",{className:"avatar-role",children:"Full Stack & QA Lead"})]}),R.jsxs("figcaption",{children:[Se.name," // ",Se.location]})]}),R.jsxs("div",{className:"about-info",children:[R.jsxs("div",{className:"about-text",children:[R.jsx("span",{className:"highlight",children:"Zero-Defect Engineering & High-Performance Web Architectures"}),R.jsx("p",{children:"I am a Full Stack Engineer and QA Automation Specialist based in Karachi, Pakistan, available for remote collaborations worldwide. I bridge the gap between creative, fluid frontend experiences and bulletproof, high-performance backend architectures."}),R.jsx("p",{children:"With commercial development experience across Next.js 14, Node.js, TypeScript, PHP, Laravel, and databases, I build production systems with automated QA testing pipelines (Playwright & Jest) to guarantee robust reliability and zero-regression deployments."})]}),R.jsx("div",{className:"stats-banner",style:{marginTop:"3.5rem"},children:Wg.map((r,i)=>R.jsxs("div",{className:"stat-item",children:[R.jsx("h4",{children:r.value}),R.jsx("p",{children:r.label})]},i))})]})]})]})}function j1(){const[t,e]=Xe.useState({name:"",email:"",subject:"",message:""}),[r,i]=Xe.useState({}),[n,a]=Xe.useState({type:"",message:""}),[s,o]=Xe.useState(!1),[l,u]=Xe.useState(!1),d=()=>{const _={};return t.name.trim()||(_.name="Please enter your name."),t.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email.trim())||(_.email="Please enter a valid email address (e.g. name@domain.com)."):_.email="Please enter your email address.",t.message.trim()||(_.message="Please enter your message details."),i(_),Object.keys(_).length===0},f=_=>{const{name:x,value:v}=_.target;e(c=>({...c,[x]:v})),r[x]&&i(c=>({...c,[x]:void 0}))},h=()=>{typeof navigator<"u"&&navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(Se.email).catch(()=>{}),u(!0),setTimeout(()=>u(!1),2500)},p=async _=>{if(_.preventDefault(),!s&&d()){o(!0),a({type:"",message:""});{const x=encodeURIComponent(t.subject.trim()||"Portfolio Project Inquiry"),v=encodeURIComponent(`Hi Muhammad Bilal Faisal,

Name: ${t.name.trim()}
Email: ${t.email.trim()}

Message:
${t.message.trim()}
`),c=`mailto:${Se.email}?subject=${x}&body=${v}`;window.location.href=c,setTimeout(()=>{o(!1)},1e3)}}};return R.jsx("section",{id:"contact",children:R.jsxs("div",{className:"contact-section-inner",children:[R.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[R.jsx("span",{style:{color:"var(--accent2)",textTransform:"uppercase",letterSpacing:"4px",fontSize:"0.8rem"},children:"Have an ambitious project or engineering role?"}),R.jsxs("h2",{className:"section-title",style:{marginTop:"0.8rem",marginBottom:"1rem"},children:["Let's build something ",R.jsx("span",{children:"extraordinary"})]}),R.jsxs("p",{style:{color:"#888",fontSize:"0.95rem"},children:["Based in ",Se.location," • Available for remote worldwide contracts & engineering teams"]})]}),R.jsxs("div",{className:"contact-form-card",children:[n.message&&R.jsx("div",{className:`form-status-alert ${n.type}`,children:n.message}),R.jsx("form",{onSubmit:p,noValidate:!0,children:R.jsxs("div",{className:"form-grid",children:[R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"contact-name",children:"Your Name *"}),R.jsx("input",{id:"contact-name",type:"text",name:"name",placeholder:"e.g. John Doe",value:t.name,onChange:f,"aria-invalid":!!r.name}),r.name&&R.jsx("span",{className:"field-error-text",style:{color:"var(--accent)",fontSize:"0.78rem",marginTop:"4px",display:"block"},children:r.name})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"contact-email",children:"Your Email *"}),R.jsx("input",{id:"contact-email",type:"email",name:"email",placeholder:"e.g. john@enterprise.com",value:t.email,onChange:f,"aria-invalid":!!r.email}),r.email&&R.jsx("span",{className:"field-error-text",style:{color:"var(--accent)",fontSize:"0.78rem",marginTop:"4px",display:"block"},children:r.email})]}),R.jsxs("div",{className:"form-group full-width",children:[R.jsx("label",{htmlFor:"contact-subject",children:"Project Subject"}),R.jsx("input",{id:"contact-subject",type:"text",name:"subject",placeholder:"e.g. Full-Stack Web Architecture / QA Automation",value:t.subject,onChange:f})]}),R.jsxs("div",{className:"form-group full-width",children:[R.jsx("label",{htmlFor:"contact-message",children:"Message Details *"}),R.jsx("textarea",{id:"contact-message",name:"message",rows:4,placeholder:"Describe your project requirements, timeline, or engineering goals...",value:t.message,onChange:f,"aria-invalid":!!r.message}),r.message&&R.jsx("span",{className:"field-error-text",style:{color:"var(--accent)",fontSize:"0.78rem",marginTop:"4px",display:"block"},children:r.message})]}),R.jsxs("div",{className:"form-group full-width",style:{marginTop:"0.5rem"},children:[R.jsxs("button",{type:"submit",className:"submit-btn",disabled:s,children:[R.jsx(Sx,{size:16}),R.jsx("span",{children:s?"Processing...":"Send via your email app"})]}),R.jsxs("p",{style:{fontSize:"0.78rem",color:"#777",marginTop:"0.6rem"},children:["Clicking will open your default email app with a pre-filled draft to ",Se.email,". Or use the Copy Email button below."]})]})]})})]}),R.jsxs("div",{className:"contact-quick-actions",children:[R.jsxs("a",{className:"tech-pill2",href:`mailto:${Se.email}`,children:[R.jsx(Yg,{size:16}),"Email Directly"]}),R.jsxs("button",{id:"copy-email-btn",type:"button",className:"tech-pill2",onClick:h,style:{cursor:"pointer"},children:[l?R.jsx(fx,{size:16,color:"#4ade80"}):R.jsx(px,{size:16}),R.jsx("span",{children:l?"EMAIL COPIED!":"COPY EMAIL"})]}),R.jsxs("a",{className:"tech-pill2",href:Se.whatsappUrl,target:"_blank",rel:"noopener noreferrer",style:{borderColor:"rgba(37, 211, 102, 0.4)",color:"#4ade80"},children:[R.jsx(xx,{size:16}),"WhatsApp Desk"]}),R.jsxs("a",{className:"tech-pill2",href:Se.resumeUrl,download:Se.resumeDownloadName,target:"_blank",rel:"noopener noreferrer",style:{borderColor:"var(--accent)",color:"#ff9cb3"},children:[R.jsx(Cc,{size:16}),"Resume CV"]})]})]})})}function X1(){const[t,e]=Xe.useState(!1);Xe.useEffect(()=>{const i=()=>{e(window.scrollY>400)};return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]);const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return R.jsxs(R.Fragment,{children:[R.jsxs("footer",{children:[R.jsxs("p",{children:["Architected & Engineered by ",Se.name," // ",Se.primaryTitle]}),R.jsx("p",{style:{fontSize:"0.8rem",color:"#666",marginTop:"0.6rem"},children:"Next.js • Node.js • React • TypeScript • Automated QA • Cloud Systems"}),R.jsx("p",{style:{fontSize:"0.82rem",color:"#888",marginTop:"0.4rem"},children:Se.copyrightText})]}),t&&R.jsx("button",{id:"back-to-top",onClick:r,"aria-label":"Scroll back to top",title:"Back to Top",children:R.jsx(hx,{size:20})})]})}function q1({isOpen:t,onClose:e}){const[r,i]=Xe.useState([{type:"system",text:`⚡ ${Se.name} — Developer Terminal v2.0.0
Type 'help' to view available system commands.`}]),[n,a]=Xe.useState(""),[s,o]=Xe.useState(-1),[l,u]=Xe.useState([]),d=Xe.useRef(null),f=Xe.useRef(null);if(Xe.useEffect(()=>{t&&setTimeout(()=>{var p;return(p=f.current)==null?void 0:p.focus()},100)},[t]),Xe.useEffect(()=>{var p;(p=d.current)==null||p.scrollIntoView({behavior:"smooth"})},[r]),!t)return null;const h=p=>{if(p.key==="ArrowUp"){if(p.preventDefault(),l.length>0){const m=s===-1?l.length-1:Math.max(0,s-1);o(m),a(l[m])}return}if(p.key==="ArrowDown"){if(p.preventDefault(),l.length>0){const m=s+1;m>=l.length?(o(-1),a("")):(o(m),a(l[m]))}return}if(p.key!=="Enter")return;const _=n.trim();if(!_)return;u(m=>[...m,_]),o(-1);const x=_.toLowerCase();let v="",c=!1;switch(x){case"help":v=`Available Commands:
  help       - Display this list of commands
  whoami     - Learn about ${Se.name}
  skills     - View full-stack tech stack & QA tools
  projects   - Output catalog of production projects
  exp        - View career journey & engineering timeline
  contact    - Get direct contact links (Email, WhatsApp, GitHub)
  sudo hire  - Fast-track interview invitation
  clear      - Clear terminal screen
  exit       - Close this terminal window`;break;case"whoami":v=`${Se.name}
Role: ${Se.primaryTitle}
Focus: ${Se.secondaryTitle}
Location: ${Se.location}
Bio: ${Se.tagline}`;break;case"skills":v=jg.map(m=>`[${m.header}]:
  ${m.tags.join(", ")}`).join(`

`);break;case"projects":v=Co.map((m,g)=>`${g+1}. ${m.title} [${m.category}]
   Stack: ${m.tech.join(", ")}${m.githubUrl?`
   Code:  ${m.githubUrl}`:""}${m.liveUrl?`
   Live:  ${m.liveUrl}`:""}`).join(`

`);break;case"exp":v=Xg.map(m=>`• ${m.year} — ${m.role} (${m.company})
  ${m.description}`).join(`

`);break;case"contact":v=`Email:    ${Se.email}
WhatsApp: ${Se.phone} (${Se.whatsappUrl})
GitHub:   ${Se.githubUrl}`;break;case"sudo hire":v=`ACCESS GRANTED! 🎉
Candidate Status: Available for Immediate High-Impact Remote Roles & Contracts.
Email directly:   ${Se.email}
WhatsApp desk:    ${Se.phone}`;break;case"clear":i([]),a("");return;case"exit":e();return;default:v=`Command not recognized: '${_}'. Type 'help' for valid commands.`,c=!0;break}i(m=>[...m,{type:"user",text:`$ ${_}`},{type:c?"error":"output",text:v}]),a("")};return R.jsx("div",{className:"terminal-overlay",onClick:e,children:R.jsxs("div",{className:"terminal-window",onClick:p=>p.stopPropagation(),role:"dialog","aria-modal":"true",children:[R.jsxs("div",{className:"terminal-topbar",children:[R.jsxs("div",{className:"terminal-dots",children:[R.jsx("span",{className:"dot dot-red",onClick:e,title:"Close Terminal"}),R.jsx("span",{className:"dot dot-yellow",title:"Minimize"}),R.jsx("span",{className:"dot dot-green",title:"Expand"})]}),R.jsx("div",{className:"terminal-title",children:"bash — bilalfaisal@portfolio:~"}),R.jsx("button",{type:"button",className:"terminal-close-btn",onClick:e,children:"✕"})]}),R.jsxs("div",{className:"terminal-screen",children:[r.map((p,_)=>R.jsx("div",{className:`term-line term-${p.type}`,children:p.text},_)),R.jsxs("div",{className:"term-input-line",children:[R.jsx("span",{className:"term-prompt",children:"bilal@mbf:~$"}),R.jsx("input",{ref:f,type:"text",value:n,onChange:p=>a(p.target.value),onKeyDown:h,autoFocus:!0,spellCheck:"false",autoComplete:"off"})]}),R.jsx("div",{ref:d})]})]})})}function Y1(){const[t,e]=Xe.useState(!1);return R.jsxs(R.Fragment,{children:[R.jsx(ox,{}),R.jsx(lx,{}),R.jsx(Mx,{onOpenTerminal:()=>e(!0)}),R.jsxs("main",{children:[R.jsx(z1,{}),R.jsx(B1,{}),R.jsx(H1,{}),R.jsx(G1,{}),R.jsx(V1,{}),R.jsx(W1,{}),R.jsx(j1,{})]}),R.jsx(X1,{}),R.jsx(q1,{isOpen:t,onClose:()=>e(!1)})]})}ku.createRoot(document.getElementById("root")).render(R.jsx(Bp.StrictMode,{children:R.jsx(Y1,{})}));
