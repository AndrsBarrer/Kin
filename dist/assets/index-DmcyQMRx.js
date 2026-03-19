(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var jv={exports:{}},Vc={},Xv={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),Ty=Symbol.for("react.portal"),by=Symbol.for("react.fragment"),Cy=Symbol.for("react.strict_mode"),Ay=Symbol.for("react.profiler"),Ry=Symbol.for("react.provider"),Py=Symbol.for("react.context"),Ly=Symbol.for("react.forward_ref"),Ny=Symbol.for("react.suspense"),Dy=Symbol.for("react.memo"),Iy=Symbol.for("react.lazy"),Qp=Symbol.iterator;function Uy(t){return t===null||typeof t!="object"?null:(t=Qp&&t[Qp]||t["@@iterator"],typeof t=="function"?t:null)}var $v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yv=Object.assign,qv={};function ca(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||$v}ca.prototype.isReactComponent={};ca.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ca.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kv(){}Kv.prototype=ca.prototype;function Eh(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||$v}var wh=Eh.prototype=new Kv;wh.constructor=Eh;Yv(wh,ca.prototype);wh.isPureReactComponent=!0;var em=Array.isArray,Zv=Object.prototype.hasOwnProperty,Th={current:null},Jv={key:!0,ref:!0,__self:!0,__source:!0};function Qv(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Zv.call(e,i)&&!Jv.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Lo,type:t,key:s,ref:a,props:r,_owner:Th.current}}function Fy(t,e){return{$$typeof:Lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lo}function Oy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tm=/\/+/g;function hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Oy(""+t.key):e.toString(36)}function Fl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Lo:case Ty:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+hu(a,0):i,em(r)?(n="",t!=null&&(n=t.replace(tm,"$&/")+"/"),Fl(r,e,n,"",function(c){return c})):r!=null&&(bh(r)&&(r=Fy(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(tm,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",em(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+hu(s,o);a+=Fl(s,e,n,l,r)}else if(l=Uy(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+hu(s,o++),a+=Fl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Go(t,e,n){if(t==null)return t;var i=[],r=0;return Fl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ky(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Ol={transition:null},By={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:Th};function e0(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:Go,forEach:function(t,e,n){Go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Go(t,function(){e++}),e},toArray:function(t){return Go(t,function(e){return e})||[]},only:function(t){if(!bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};it.Component=ca;it.Fragment=by;it.Profiler=Ay;it.PureComponent=Eh;it.StrictMode=Cy;it.Suspense=Ny;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;it.act=e0;it.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yv({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Th.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Zv.call(e,l)&&!Jv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Lo,type:t.type,key:r,ref:s,props:i,_owner:a}};it.createContext=function(t){return t={$$typeof:Py,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ry,_context:t},t.Consumer=t};it.createElement=Qv;it.createFactory=function(t){var e=Qv.bind(null,t);return e.type=t,e};it.createRef=function(){return{current:null}};it.forwardRef=function(t){return{$$typeof:Ly,render:t}};it.isValidElement=bh;it.lazy=function(t){return{$$typeof:Iy,_payload:{_status:-1,_result:t},_init:ky}};it.memo=function(t,e){return{$$typeof:Dy,type:t,compare:e===void 0?null:e}};it.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};it.unstable_act=e0;it.useCallback=function(t,e){return pn.current.useCallback(t,e)};it.useContext=function(t){return pn.current.useContext(t)};it.useDebugValue=function(){};it.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};it.useEffect=function(t,e){return pn.current.useEffect(t,e)};it.useId=function(){return pn.current.useId()};it.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};it.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};it.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};it.useMemo=function(t,e){return pn.current.useMemo(t,e)};it.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};it.useRef=function(t){return pn.current.useRef(t)};it.useState=function(t){return pn.current.useState(t)};it.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};it.useTransition=function(){return pn.current.useTransition()};it.version="18.3.1";Xv.exports=it;var D=Xv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=D,Vy=Symbol.for("react.element"),Hy=Symbol.for("react.fragment"),Gy=Object.prototype.hasOwnProperty,Wy=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jy={key:!0,ref:!0,__self:!0,__source:!0};function t0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Gy.call(e,i)&&!jy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Vy,type:t,key:s,ref:a,props:r,_owner:Wy.current}}Vc.Fragment=Hy;Vc.jsx=t0;Vc.jsxs=t0;jv.exports=Vc;var E=jv.exports,n0={exports:{}},Ln={},i0={exports:{}},r0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,$){var te=z.length;z.push($);e:for(;0<te;){var re=te-1>>>1,se=z[re];if(0<r(se,$))z[re]=$,z[te]=se,te=re;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var $=z[0],te=z.pop();if(te!==$){z[0]=te;e:for(var re=0,se=z.length,be=se>>>1;re<be;){var Ge=2*(re+1)-1,Ze=z[Ge],Z=Ge+1,le=z[Z];if(0>r(Ze,te))Z<se&&0>r(le,Ze)?(z[re]=le,z[Z]=te,re=Z):(z[re]=Ze,z[Ge]=te,re=Ge);else if(Z<se&&0>r(le,te))z[re]=le,z[Z]=te,re=Z;else break e}}return $}function r(z,$){var te=z.sortIndex-$.sortIndex;return te!==0?te:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,u=3,p=!1,m=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=z)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function S(z){if(x=!1,_(z),!m)if(n(l)!==null)m=!0,G(b);else{var $=n(c);$!==null&&N(S,$.startTime-z)}}function b(z,$){m=!1,x&&(x=!1,h(y),y=-1),p=!0;var te=u;try{for(_($),f=n(l);f!==null&&(!(f.expirationTime>$)||z&&!R());){var re=f.callback;if(typeof re=="function"){f.callback=null,u=f.priorityLevel;var se=re(f.expirationTime<=$);$=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(l)&&i(l),_($)}else i(l);f=n(l)}if(f!==null)var be=!0;else{var Ge=n(c);Ge!==null&&N(S,Ge.startTime-$),be=!1}return be}finally{f=null,u=te,p=!1}}var C=!1,A=null,y=-1,T=5,F=-1;function R(){return!(t.unstable_now()-F<T)}function U(){if(A!==null){var z=t.unstable_now();F=z;var $=!0;try{$=A(!0,z)}finally{$?I():(C=!1,A=null)}}else C=!1}var I;if(typeof v=="function")I=function(){v(U)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,O=B.port2;B.port1.onmessage=U,I=function(){O.postMessage(null)}}else I=function(){g(U,0)};function G(z){A=z,C||(C=!0,I())}function N(z,$){y=g(function(){z(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,G(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(u){case 1:case 2:case 3:var $=3;break;default:$=u}var te=u;u=$;try{return z()}finally{u=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=u;u=z;try{return $()}finally{u=te}},t.unstable_scheduleCallback=function(z,$,te){var re=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?re+te:re):te=re,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=te+se,z={id:d++,callback:$,priorityLevel:z,startTime:te,expirationTime:se,sortIndex:-1},te>re?(z.sortIndex=te,e(c,z),n(l)===null&&z===n(c)&&(x?(h(y),y=-1):x=!0,N(S,te-re))):(z.sortIndex=se,e(l,z),m||p||(m=!0,G(b))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var $=u;return function(){var te=u;u=$;try{return z.apply(this,arguments)}finally{u=te}}}})(r0);i0.exports=r0;var Xy=i0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y=D,Pn=Xy;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,ao={};function rs(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(ao[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cd=Object.prototype.hasOwnProperty,Yy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nm={},im={};function qy(t){return Cd.call(im,t)?!0:Cd.call(nm,t)?!1:Yy.test(t)?im[t]=!0:(nm[t]=!0,!1)}function Ky(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zy(t,e,n,i){if(e===null||typeof e>"u"||Ky(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function Ah(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ch,Ah);Qt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ch,Ah);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ch,Ah);Qt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rh(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zy(e,n,r,i)&&(n=null),i||r===null?qy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ki=$y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),As=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),Ph=Symbol.for("react.strict_mode"),Ad=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),Lh=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),Nh=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),l0=Symbol.for("react.offscreen"),rm=Symbol.iterator;function _a(t){return t===null||typeof t!="object"?null:(t=rm&&t[rm]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,pu;function Ba(t){if(pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pu=e&&e[1]||""}return`
`+pu+t}var mu=!1;function gu(t,e){if(!t||mu)return"";mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ba(t):""}function Jy(t){switch(t.tag){case 5:return Ba(t.type);case 16:return Ba("Lazy");case 13:return Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 2:case 15:return t=gu(t.type,!1),t;case 11:return t=gu(t.type.render,!1),t;case 1:return t=gu(t.type,!0),t;default:return""}}function Ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case As:return"Portal";case Ad:return"Profiler";case Ph:return"StrictMode";case Rd:return"Suspense";case Pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case o0:return(t.displayName||"Context")+".Consumer";case a0:return(t._context.displayName||"Context")+".Provider";case Lh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nh:return e=t.displayName||null,e!==null?e:Ld(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Ld(t(e))}catch{}}return null}function Qy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ld(e);case 8:return e===Ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function eS(t){var e=c0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jo(t){t._valueTracker||(t._valueTracker=eS(t))}function u0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=c0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nd(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d0(t,e){e=e.checked,e!=null&&Rh(t,"checked",e,!1)}function Dd(t,e){d0(t,e);var n=wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Id(t,e.type,n):e.hasOwnProperty("defaultValue")&&Id(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function am(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Id(t,e,n){(e!=="number"||ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var za=Array.isArray;function zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ud(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(za(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function f0(t,e){var n=wr(e.value),i=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xo,p0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tS=["Webkit","ms","Moz","O"];Object.keys(Xa).forEach(function(t){tS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xa[e]=Xa[t]})});function m0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xa.hasOwnProperty(t)&&Xa[t]?(""+e).trim():e+"px"}function g0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=m0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var nS=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Od(t,e){if(e){if(nS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function kd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bd=null;function Dh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zd=null,Vs=null,Hs=null;function cm(t){if(t=Io(t)){if(typeof zd!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=Xc(e),zd(t.stateNode,t.type,e))}}function v0(t){Vs?Hs?Hs.push(t):Hs=[t]:Vs=t}function _0(){if(Vs){var t=Vs,e=Hs;if(Hs=Vs=null,cm(t),e)for(t=0;t<e.length;t++)cm(e[t])}}function x0(t,e){return t(e)}function y0(){}var vu=!1;function S0(t,e,n){if(vu)return t(e,n);vu=!0;try{return x0(t,e,n)}finally{vu=!1,(Vs!==null||Hs!==null)&&(y0(),_0())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var i=Xc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Vd=!1;if(Vi)try{var xa={};Object.defineProperty(xa,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",xa,xa),window.removeEventListener("test",xa,xa)}catch{Vd=!1}function iS(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var $a=!1,rc=null,sc=!1,Hd=null,rS={onError:function(t){$a=!0,rc=t}};function sS(t,e,n,i,r,s,a,o,l){$a=!1,rc=null,iS.apply(rS,arguments)}function aS(t,e,n,i,r,s,a,o,l){if(sS.apply(this,arguments),$a){if($a){var c=rc;$a=!1,rc=null}else throw Error(ue(198));sc||(sc=!0,Hd=c)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function M0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function um(t){if(ss(t)!==t)throw Error(ue(188))}function oS(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return um(r),t;if(s===i)return um(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function E0(t){return t=oS(t),t!==null?w0(t):null}function w0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w0(t);if(e!==null)return e;t=t.sibling}return null}var T0=Pn.unstable_scheduleCallback,dm=Pn.unstable_cancelCallback,lS=Pn.unstable_shouldYield,cS=Pn.unstable_requestPaint,It=Pn.unstable_now,uS=Pn.unstable_getCurrentPriorityLevel,Ih=Pn.unstable_ImmediatePriority,b0=Pn.unstable_UserBlockingPriority,ac=Pn.unstable_NormalPriority,dS=Pn.unstable_LowPriority,C0=Pn.unstable_IdlePriority,Hc=null,mi=null;function fS(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(Hc,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:mS,hS=Math.log,pS=Math.LN2;function mS(t){return t>>>=0,t===0?32:31-(hS(t)/pS|0)|0}var $o=64,Yo=4194304;function Va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Va(o):(s&=a,s!==0&&(i=Va(s)))}else a=n&~r,a!==0?i=Va(a):s!==0&&(i=Va(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function gS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ei(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=gS(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function A0(){var t=$o;return $o<<=1,!($o&4194240)&&($o=64),t}function _u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function No(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function _S(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function R0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P0,Fh,L0,N0,D0,Wd=!1,qo=[],gr=null,vr=null,_r=null,co=new Map,uo=new Map,cr=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fm(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function ya(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Io(e),e!==null&&Fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function yS(t,e,n,i,r){switch(e){case"focusin":return gr=ya(gr,t,e,n,i,r),!0;case"dragenter":return vr=ya(vr,t,e,n,i,r),!0;case"mouseover":return _r=ya(_r,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return co.set(s,ya(co.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,uo.set(s,ya(uo.get(s)||null,t,e,n,i,r)),!0}return!1}function I0(t){var e=jr(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=M0(n),e!==null){t.blockedOn=e,D0(t.priority,function(){L0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bd=i,n.target.dispatchEvent(i),Bd=null}else return e=Io(n),e!==null&&Fh(e),t.blockedOn=n,!1;e.shift()}return!0}function hm(t,e,n){kl(t)&&n.delete(e)}function SS(){Wd=!1,gr!==null&&kl(gr)&&(gr=null),vr!==null&&kl(vr)&&(vr=null),_r!==null&&kl(_r)&&(_r=null),co.forEach(hm),uo.forEach(hm)}function Sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Wd||(Wd=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,SS)))}function fo(t){function e(r){return Sa(r,t)}if(0<qo.length){Sa(qo[0],t);for(var n=1;n<qo.length;n++){var i=qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&Sa(gr,t),vr!==null&&Sa(vr,t),_r!==null&&Sa(_r,t),co.forEach(e),uo.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)I0(n),n.blockedOn===null&&cr.shift()}var Gs=Ki.ReactCurrentBatchConfig,lc=!0;function MS(t,e,n,i){var r=pt,s=Gs.transition;Gs.transition=null;try{pt=1,Oh(t,e,n,i)}finally{pt=r,Gs.transition=s}}function ES(t,e,n,i){var r=pt,s=Gs.transition;Gs.transition=null;try{pt=4,Oh(t,e,n,i)}finally{pt=r,Gs.transition=s}}function Oh(t,e,n,i){if(lc){var r=jd(t,e,n,i);if(r===null)Au(t,e,i,cc,n),fm(t,i);else if(yS(r,t,e,n,i))i.stopPropagation();else if(fm(t,i),e&4&&-1<xS.indexOf(t)){for(;r!==null;){var s=Io(r);if(s!==null&&P0(s),s=jd(t,e,n,i),s===null&&Au(t,e,i,cc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Au(t,e,i,null,n)}}var cc=null;function jd(t,e,n,i){if(cc=null,t=Dh(i),t=jr(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=M0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cc=t,null}function U0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uS()){case Ih:return 1;case b0:return 4;case ac:case dS:return 16;case C0:return 536870912;default:return 16}default:return 16}}var fr=null,kh=null,Bl=null;function F0(){if(Bl)return Bl;var t,e=kh,n=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Bl=r.slice(t,1<i?1-i:void 0)}function zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function pm(){return!1}function Nn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ko:pm,this.isPropagationStopped=pm,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),e}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=Nn(ua),Do=At({},ua,{view:0,detail:0}),wS=Nn(Do),xu,yu,Ma,Gc=At({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ma&&(Ma&&t.type==="mousemove"?(xu=t.screenX-Ma.screenX,yu=t.screenY-Ma.screenY):yu=xu=0,Ma=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:yu}}),mm=Nn(Gc),TS=At({},Gc,{dataTransfer:0}),bS=Nn(TS),CS=At({},Do,{relatedTarget:0}),Su=Nn(CS),AS=At({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),RS=Nn(AS),PS=At({},ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LS=Nn(PS),NS=At({},ua,{data:0}),gm=Nn(NS),DS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},US={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=US[t])?!!e[t]:!1}function zh(){return FS}var OS=At({},Do,{key:function(t){if(t.key){var e=DS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kS=Nn(OS),BS=At({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vm=Nn(BS),zS=At({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),VS=Nn(zS),HS=At({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),GS=Nn(HS),WS=At({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jS=Nn(WS),XS=[9,13,27,32],Vh=Vi&&"CompositionEvent"in window,Ya=null;Vi&&"documentMode"in document&&(Ya=document.documentMode);var $S=Vi&&"TextEvent"in window&&!Ya,O0=Vi&&(!Vh||Ya&&8<Ya&&11>=Ya),_m=" ",xm=!1;function k0(t,e){switch(t){case"keyup":return XS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function YS(t,e){switch(t){case"compositionend":return B0(e);case"keypress":return e.which!==32?null:(xm=!0,_m);case"textInput":return t=e.data,t===_m&&xm?null:t;default:return null}}function qS(t,e){if(Ps)return t==="compositionend"||!Vh&&k0(t,e)?(t=F0(),Bl=kh=fr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O0&&e.locale!=="ko"?null:e.data;default:return null}}var KS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KS[t.type]:e==="textarea"}function z0(t,e,n,i){v0(i),e=uc(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qa=null,ho=null;function ZS(t){Z0(t,0)}function Wc(t){var e=Ds(t);if(u0(e))return t}function JS(t,e){if(t==="change")return e}var V0=!1;if(Vi){var Mu;if(Vi){var Eu="oninput"in document;if(!Eu){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),Eu=typeof Sm.oninput=="function"}Mu=Eu}else Mu=!1;V0=Mu&&(!document.documentMode||9<document.documentMode)}function Mm(){qa&&(qa.detachEvent("onpropertychange",H0),ho=qa=null)}function H0(t){if(t.propertyName==="value"&&Wc(ho)){var e=[];z0(e,ho,t,Dh(t)),S0(ZS,e)}}function QS(t,e,n){t==="focusin"?(Mm(),qa=e,ho=n,qa.attachEvent("onpropertychange",H0)):t==="focusout"&&Mm()}function eM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wc(ho)}function tM(t,e){if(t==="click")return Wc(e)}function nM(t,e){if(t==="input"||t==="change")return Wc(e)}function iM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:iM;function po(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cd.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function Em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wm(t,e){var n=Em(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Em(n)}}function G0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W0(){for(var t=window,e=ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ic(t.document)}return e}function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rM(t){var e=W0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G0(n.ownerDocument.documentElement,n)){if(i!==null&&Hh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wm(n,s);var a=wm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sM=Vi&&"documentMode"in document&&11>=document.documentMode,Ls=null,Xd=null,Ka=null,$d=!1;function Tm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$d||Ls==null||Ls!==ic(i)||(i=Ls,"selectionStart"in i&&Hh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ka&&po(Ka,i)||(Ka=i,i=uc(Xd,"onSelect"),0<i.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ls)))}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ns={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},wu={},j0={};Vi&&(j0=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function jc(t){if(wu[t])return wu[t];if(!Ns[t])return t;var e=Ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in j0)return wu[t]=e[n];return t}var X0=jc("animationend"),$0=jc("animationiteration"),Y0=jc("animationstart"),q0=jc("transitionend"),K0=new Map,bm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){K0.set(t,e),rs(e,[t])}for(var Tu=0;Tu<bm.length;Tu++){var bu=bm[Tu],aM=bu.toLowerCase(),oM=bu[0].toUpperCase()+bu.slice(1);Cr(aM,"on"+oM)}Cr(X0,"onAnimationEnd");Cr($0,"onAnimationIteration");Cr(Y0,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(q0,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function Cm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,aS(i,e,void 0,t),t.currentTarget=null}function Z0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Cm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Cm(r,o,c),s=l}}}if(sc)throw t=Hd,sc=!1,Hd=null,t}function yt(t,e){var n=e[Jd];n===void 0&&(n=e[Jd]=new Set);var i=t+"__bubble";n.has(i)||(J0(e,t,2,!1),n.add(i))}function Cu(t,e,n){var i=0;e&&(i|=4),J0(n,t,i,e)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[Jo]){t[Jo]=!0,s0.forEach(function(n){n!=="selectionchange"&&(lM.has(n)||Cu(n,!1,t),Cu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jo]||(e[Jo]=!0,Cu("selectionchange",!1,e))}}function J0(t,e,n,i){switch(U0(e)){case 1:var r=MS;break;case 4:r=ES;break;default:r=Oh}n=r.bind(null,e,n,t),r=void 0,!Vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Au(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}S0(function(){var c=s,d=Dh(n),f=[];e:{var u=K0.get(t);if(u!==void 0){var p=Bh,m=t;switch(t){case"keypress":if(zl(n)===0)break e;case"keydown":case"keyup":p=kS;break;case"focusin":m="focus",p=Su;break;case"focusout":m="blur",p=Su;break;case"beforeblur":case"afterblur":p=Su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=VS;break;case X0:case $0:case Y0:p=RS;break;case q0:p=GS;break;case"scroll":p=wS;break;case"wheel":p=jS;break;case"copy":case"cut":case"paste":p=LS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=vm}var x=(e&4)!==0,g=!x&&t==="scroll",h=x?u!==null?u+"Capture":null:u;x=[];for(var v=c,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,h!==null&&(S=lo(v,h),S!=null&&x.push(go(v,S,_)))),g)break;v=v.return}0<x.length&&(u=new p(u,m,null,n,d),f.push({event:u,listeners:x}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Bd&&(m=n.relatedTarget||n.fromElement)&&(jr(m)||m[Hi]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?jr(m):null,m!==null&&(g=ss(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(x=mm,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=vm,S="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?u:Ds(p),_=m==null?u:Ds(m),u=new x(S,v+"leave",p,n,d),u.target=g,u.relatedTarget=_,S=null,jr(d)===c&&(x=new x(h,v+"enter",m,n,d),x.target=_,x.relatedTarget=g,S=x),g=S,p&&m)t:{for(x=p,h=m,v=0,_=x;_;_=ls(_))v++;for(_=0,S=h;S;S=ls(S))_++;for(;0<v-_;)x=ls(x),v--;for(;0<_-v;)h=ls(h),_--;for(;v--;){if(x===h||h!==null&&x===h.alternate)break t;x=ls(x),h=ls(h)}x=null}else x=null;p!==null&&Am(f,u,p,x,!1),m!==null&&g!==null&&Am(f,g,m,x,!0)}}e:{if(u=c?Ds(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=JS;else if(ym(u))if(V0)b=nM;else{b=eM;var C=QS}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=tM);if(b&&(b=b(t,c))){z0(f,b,n,d);break e}C&&C(t,u,c),t==="focusout"&&(C=u._wrapperState)&&C.controlled&&u.type==="number"&&Id(u,"number",u.value)}switch(C=c?Ds(c):window,t){case"focusin":(ym(C)||C.contentEditable==="true")&&(Ls=C,Xd=c,Ka=null);break;case"focusout":Ka=Xd=Ls=null;break;case"mousedown":$d=!0;break;case"contextmenu":case"mouseup":case"dragend":$d=!1,Tm(f,n,d);break;case"selectionchange":if(sM)break;case"keydown":case"keyup":Tm(f,n,d)}var A;if(Vh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ps?k0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(O0&&n.locale!=="ko"&&(Ps||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ps&&(A=F0()):(fr=d,kh="value"in fr?fr.value:fr.textContent,Ps=!0)),C=uc(c,y),0<C.length&&(y=new gm(y,t,null,n,d),f.push({event:y,listeners:C}),A?y.data=A:(A=B0(n),A!==null&&(y.data=A)))),(A=$S?YS(t,n):qS(t,n))&&(c=uc(c,"onBeforeInput"),0<c.length&&(d=new gm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}Z0(f,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=lo(t,n),s!=null&&i.unshift(go(t,s,r)),s=lo(t,e),s!=null&&i.push(go(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Am(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=lo(n,s),l!=null&&a.unshift(go(n,l,o))):r||(l=lo(n,s),l!=null&&a.push(go(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var cM=/\r\n?/g,uM=/\u0000|\uFFFD/g;function Rm(t){return(typeof t=="string"?t:""+t).replace(cM,`
`).replace(uM,"")}function Qo(t,e,n){if(e=Rm(e),Rm(t)!==e&&n)throw Error(ue(425))}function dc(){}var Yd=null,qd=null;function Kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,dM=typeof clearTimeout=="function"?clearTimeout:void 0,Pm=typeof Promise=="function"?Promise:void 0,fM=typeof queueMicrotask=="function"?queueMicrotask:typeof Pm<"u"?function(t){return Pm.resolve(null).then(t).catch(hM)}:Zd;function hM(t){setTimeout(function(){throw t})}function Ru(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fo(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var da=Math.random().toString(36).slice(2),di="__reactFiber$"+da,vo="__reactProps$"+da,Hi="__reactContainer$"+da,Jd="__reactEvents$"+da,pM="__reactListeners$"+da,mM="__reactHandles$"+da;function jr(t){var e=t[di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hi]||n[di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lm(t);t!==null;){if(n=t[di])return n;t=Lm(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[di]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function Xc(t){return t[vo]||null}var Qd=[],Is=-1;function Ar(t){return{current:t}}function St(t){0>Is||(t.current=Qd[Is],Qd[Is]=null,Is--)}function xt(t,e){Is++,Qd[Is]=t.current,t.current=e}var Tr={},cn=Ar(Tr),_n=Ar(!1),Zr=Tr;function Zs(t,e){var n=t.type.contextTypes;if(!n)return Tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function fc(){St(_n),St(cn)}function Nm(t,e,n){if(cn.current!==Tr)throw Error(ue(168));xt(cn,e),xt(_n,n)}function Q0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,Qy(t)||"Unknown",r));return At({},n,i)}function hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Zr=cn.current,xt(cn,t),xt(_n,_n.current),!0}function Dm(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=Q0(t,e,Zr),i.__reactInternalMemoizedMergedChildContext=t,St(_n),St(cn),xt(cn,t)):St(_n),xt(_n,n)}var Ni=null,$c=!1,Pu=!1;function e_(t){Ni===null?Ni=[t]:Ni.push(t)}function gM(t){$c=!0,e_(t)}function Rr(){if(!Pu&&Ni!==null){Pu=!0;var t=0,e=pt;try{var n=Ni;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,$c=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),T0(Ih,Rr),r}finally{pt=e,Pu=!1}}return null}var Us=[],Fs=0,pc=null,mc=0,In=[],Un=0,Jr=null,Ii=1,Ui="";function zr(t,e){Us[Fs++]=mc,Us[Fs++]=pc,pc=t,mc=e}function t_(t,e,n){In[Un++]=Ii,In[Un++]=Ui,In[Un++]=Jr,Jr=t;var i=Ii;t=Ui;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ii=1<<32-ei(e)+r|n<<r|i,Ui=s+t}else Ii=1<<s|n<<r|i,Ui=t}function Gh(t){t.return!==null&&(zr(t,1),t_(t,1,0))}function Wh(t){for(;t===pc;)pc=Us[--Fs],Us[Fs]=null,mc=Us[--Fs],Us[Fs]=null;for(;t===Jr;)Jr=In[--Un],In[Un]=null,Ui=In[--Un],In[Un]=null,Ii=In[--Un],In[Un]=null}var Rn=null,An=null,wt=!1,Zn=null;function n_(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,An=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Ii,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,An=null,!0):!1;default:return!1}}function ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tf(t){if(wt){var e=An;if(e){var n=e;if(!Im(t,e)){if(ef(t))throw Error(ue(418));e=xr(n.nextSibling);var i=Rn;e&&Im(t,e)?n_(i,n):(t.flags=t.flags&-4097|2,wt=!1,Rn=t)}}else{if(ef(t))throw Error(ue(418));t.flags=t.flags&-4097|2,wt=!1,Rn=t}}}function Um(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function el(t){if(t!==Rn)return!1;if(!wt)return Um(t),wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kd(t.type,t.memoizedProps)),e&&(e=An)){if(ef(t))throw i_(),Error(ue(418));for(;e;)n_(t,e),e=xr(e.nextSibling)}if(Um(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Rn?xr(t.stateNode.nextSibling):null;return!0}function i_(){for(var t=An;t;)t=xr(t.nextSibling)}function Js(){An=Rn=null,wt=!1}function jh(t){Zn===null?Zn=[t]:Zn.push(t)}var vM=Ki.ReactCurrentBatchConfig;function Ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function tl(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fm(t){var e=t._init;return e(t._payload)}function r_(t){function e(h,v){if(t){var _=h.deletions;_===null?(h.deletions=[v],h.flags|=16):_.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Er(h,v),h.index=0,h.sibling=null,h}function s(h,v,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<v?(h.flags|=2,v):_):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,v,_,S){return v===null||v.tag!==6?(v=Ou(_,h.mode,S),v.return=h,v):(v=r(v,_),v.return=h,v)}function l(h,v,_,S){var b=_.type;return b===Rs?d(h,v,_.props.children,S,_.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===or&&Fm(b)===v.type)?(S=r(v,_.props),S.ref=Ea(h,v,_),S.return=h,S):(S=$l(_.type,_.key,_.props,null,h.mode,S),S.ref=Ea(h,v,_),S.return=h,S)}function c(h,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=ku(_,h.mode,S),v.return=h,v):(v=r(v,_.children||[]),v.return=h,v)}function d(h,v,_,S,b){return v===null||v.tag!==7?(v=Kr(_,h.mode,S,b),v.return=h,v):(v=r(v,_),v.return=h,v)}function f(h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ou(""+v,h.mode,_),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wo:return _=$l(v.type,v.key,v.props,null,h.mode,_),_.ref=Ea(h,null,v),_.return=h,_;case As:return v=ku(v,h.mode,_),v.return=h,v;case or:var S=v._init;return f(h,S(v._payload),_)}if(za(v)||_a(v))return v=Kr(v,h.mode,_,null),v.return=h,v;tl(h,v)}return null}function u(h,v,_,S){var b=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:o(h,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wo:return _.key===b?l(h,v,_,S):null;case As:return _.key===b?c(h,v,_,S):null;case or:return b=_._init,u(h,v,b(_._payload),S)}if(za(_)||_a(_))return b!==null?null:d(h,v,_,S,null);tl(h,_)}return null}function p(h,v,_,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(_)||null,o(v,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Wo:return h=h.get(S.key===null?_:S.key)||null,l(v,h,S,b);case As:return h=h.get(S.key===null?_:S.key)||null,c(v,h,S,b);case or:var C=S._init;return p(h,v,_,C(S._payload),b)}if(za(S)||_a(S))return h=h.get(_)||null,d(v,h,S,b,null);tl(v,S)}return null}function m(h,v,_,S){for(var b=null,C=null,A=v,y=v=0,T=null;A!==null&&y<_.length;y++){A.index>y?(T=A,A=null):T=A.sibling;var F=u(h,A,_[y],S);if(F===null){A===null&&(A=T);break}t&&A&&F.alternate===null&&e(h,A),v=s(F,v,y),C===null?b=F:C.sibling=F,C=F,A=T}if(y===_.length)return n(h,A),wt&&zr(h,y),b;if(A===null){for(;y<_.length;y++)A=f(h,_[y],S),A!==null&&(v=s(A,v,y),C===null?b=A:C.sibling=A,C=A);return wt&&zr(h,y),b}for(A=i(h,A);y<_.length;y++)T=p(A,h,y,_[y],S),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?y:T.key),v=s(T,v,y),C===null?b=T:C.sibling=T,C=T);return t&&A.forEach(function(R){return e(h,R)}),wt&&zr(h,y),b}function x(h,v,_,S){var b=_a(_);if(typeof b!="function")throw Error(ue(150));if(_=b.call(_),_==null)throw Error(ue(151));for(var C=b=null,A=v,y=v=0,T=null,F=_.next();A!==null&&!F.done;y++,F=_.next()){A.index>y?(T=A,A=null):T=A.sibling;var R=u(h,A,F.value,S);if(R===null){A===null&&(A=T);break}t&&A&&R.alternate===null&&e(h,A),v=s(R,v,y),C===null?b=R:C.sibling=R,C=R,A=T}if(F.done)return n(h,A),wt&&zr(h,y),b;if(A===null){for(;!F.done;y++,F=_.next())F=f(h,F.value,S),F!==null&&(v=s(F,v,y),C===null?b=F:C.sibling=F,C=F);return wt&&zr(h,y),b}for(A=i(h,A);!F.done;y++,F=_.next())F=p(A,h,y,F.value,S),F!==null&&(t&&F.alternate!==null&&A.delete(F.key===null?y:F.key),v=s(F,v,y),C===null?b=F:C.sibling=F,C=F);return t&&A.forEach(function(U){return e(h,U)}),wt&&zr(h,y),b}function g(h,v,_,S){if(typeof _=="object"&&_!==null&&_.type===Rs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Wo:e:{for(var b=_.key,C=v;C!==null;){if(C.key===b){if(b=_.type,b===Rs){if(C.tag===7){n(h,C.sibling),v=r(C,_.props.children),v.return=h,h=v;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===or&&Fm(b)===C.type){n(h,C.sibling),v=r(C,_.props),v.ref=Ea(h,C,_),v.return=h,h=v;break e}n(h,C);break}else e(h,C);C=C.sibling}_.type===Rs?(v=Kr(_.props.children,h.mode,S,_.key),v.return=h,h=v):(S=$l(_.type,_.key,_.props,null,h.mode,S),S.ref=Ea(h,v,_),S.return=h,h=S)}return a(h);case As:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(h,v.sibling),v=r(v,_.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=ku(_,h.mode,S),v.return=h,h=v}return a(h);case or:return C=_._init,g(h,v,C(_._payload),S)}if(za(_))return m(h,v,_,S);if(_a(_))return x(h,v,_,S);tl(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,_),v.return=h,h=v):(n(h,v),v=Ou(_,h.mode,S),v.return=h,h=v),a(h)):n(h,v)}return g}var Qs=r_(!0),s_=r_(!1),gc=Ar(null),vc=null,Os=null,Xh=null;function $h(){Xh=Os=vc=null}function Yh(t){var e=gc.current;St(gc),t._currentValue=e}function nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){vc=t,Xh=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Xh!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(vc===null)throw Error(ue(308));Os=t,vc.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var Xr=null;function qh(t){Xr===null?Xr=[t]:Xr.push(t)}function a_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,qh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Gi(t,i)}function Gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function Kh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gi(t,n)}return r=i.interleaved,r===null?(e.next=e,qh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gi(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uh(t,n)}}function Om(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _c(t,e,n,i){var r=t.updateQueue;lr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var u=o.lane,p=o.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,x=o;switch(u=e,p=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){f=m.call(p,f,u);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,u=typeof m=="function"?m.call(p,f,u):m,u==null)break e;f=At({},f,u);break e;case 2:lr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);es|=a,t.lanes=a,t.memoizedState=f}}function km(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Uo={},gi=Ar(Uo),_o=Ar(Uo),xo=Ar(Uo);function $r(t){if(t===Uo)throw Error(ue(174));return t}function Zh(t,e){switch(xt(xo,e),xt(_o,t),xt(gi,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fd(e,t)}St(gi),xt(gi,e)}function ea(){St(gi),St(_o),St(xo)}function l_(t){$r(xo.current);var e=$r(gi.current),n=Fd(e,t.type);e!==n&&(xt(_o,t),xt(gi,n))}function Jh(t){_o.current===t&&(St(gi),St(_o))}var Tt=Ar(0);function xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lu=[];function Qh(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var Hl=Ki.ReactCurrentDispatcher,Nu=Ki.ReactCurrentBatchConfig,Qr=0,bt=null,kt=null,Wt=null,yc=!1,Za=!1,yo=0,_M=0;function tn(){throw Error(ue(321))}function ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function tp(t,e,n,i,r,s){if(Qr=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?MM:EM,t=n(i,r),Za){s=0;do{if(Za=!1,yo=0,25<=s)throw Error(ue(301));s+=1,Wt=kt=null,e.updateQueue=null,Hl.current=wM,t=n(i,r)}while(Za)}if(Hl.current=Sc,e=kt!==null&&kt.next!==null,Qr=0,Wt=kt=bt=null,yc=!1,e)throw Error(ue(300));return t}function np(){var t=yo!==0;return yo=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?bt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Vn(){if(kt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Wt===null?bt.memoizedState:Wt.next;if(e!==null)Wt=e,kt=t;else{if(t===null)throw Error(ue(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Wt===null?bt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function So(t,e){return typeof e=="function"?e(t):e}function Du(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Qr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,bt.lanes|=d,es|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ii(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,bt.lanes|=s,es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Iu(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ii(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function c_(){}function u_(t,e){var n=bt,i=Vn(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,ip(h_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Mo(9,f_.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(ue(349));Qr&30||d_(n,e,r)}return r}function d_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f_(t,e,n,i){e.value=n,e.getSnapshot=i,p_(e)&&m_(t)}function h_(t,e,n){return n(function(){p_(e)&&m_(t)})}function p_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function m_(t){var e=Gi(t,1);e!==null&&ti(e,t,1,-1)}function Bm(t){var e=ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=SM.bind(null,bt,t),[e.memoizedState,t]}function Mo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function g_(){return Vn().memoizedState}function Gl(t,e,n,i){var r=ci();bt.flags|=t,r.memoizedState=Mo(1|e,n,void 0,i===void 0?null:i)}function Yc(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&ep(i,a.deps)){r.memoizedState=Mo(e,n,s,i);return}}bt.flags|=t,r.memoizedState=Mo(1|e,n,s,i)}function zm(t,e){return Gl(8390656,8,t,e)}function ip(t,e){return Yc(2048,8,t,e)}function v_(t,e){return Yc(4,2,t,e)}function __(t,e){return Yc(4,4,t,e)}function x_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y_(t,e,n){return n=n!=null?n.concat([t]):null,Yc(4,4,x_.bind(null,e,t),n)}function rp(){}function S_(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ep(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function M_(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ep(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function E_(t,e,n){return Qr&21?(ii(n,e)||(n=A0(),bt.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function xM(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=Nu.transition;Nu.transition={};try{t(!1),e()}finally{pt=n,Nu.transition=i}}function w_(){return Vn().memoizedState}function yM(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},T_(t))b_(e,n);else if(n=a_(t,e,n,i),n!==null){var r=hn();ti(n,t,i,r),C_(n,e,i)}}function SM(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(T_(t))b_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ii(o,a)){var l=e.interleaved;l===null?(r.next=r,qh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=a_(t,e,r,i),n!==null&&(r=hn(),ti(n,t,i,r),C_(n,e,i))}}function T_(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function b_(t,e){Za=yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uh(t,n)}}var Sc={readContext:zn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},MM={readContext:zn,useCallback:function(t,e){return ci().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:zm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,x_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yM.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=ci();return t={current:t},e.memoizedState=t},useState:Bm,useDebugValue:rp,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=Bm(!1),e=t[0];return t=xM.bind(null,t[1]),ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=ci();if(wt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),jt===null)throw Error(ue(349));Qr&30||d_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,zm(h_.bind(null,i,s,t),[t]),i.flags|=2048,Mo(9,f_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ci(),e=jt.identifierPrefix;if(wt){var n=Ui,i=Ii;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_M++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EM={readContext:zn,useCallback:S_,useContext:zn,useEffect:ip,useImperativeHandle:y_,useInsertionEffect:v_,useLayoutEffect:__,useMemo:M_,useReducer:Du,useRef:g_,useState:function(){return Du(So)},useDebugValue:rp,useDeferredValue:function(t){var e=Vn();return E_(e,kt.memoizedState,t)},useTransition:function(){var t=Du(So)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:u_,useId:w_,unstable_isNewReconciler:!1},wM={readContext:zn,useCallback:S_,useContext:zn,useEffect:ip,useImperativeHandle:y_,useInsertionEffect:v_,useLayoutEffect:__,useMemo:M_,useReducer:Iu,useRef:g_,useState:function(){return Iu(So)},useDebugValue:rp,useDeferredValue:function(t){var e=Vn();return kt===null?e.memoizedState=t:E_(e,kt.memoizedState,t)},useTransition:function(){var t=Iu(So)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:u_,useId:w_,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qc={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Mr(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ti(e,t,r,i),Vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Mr(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ti(e,t,r,i),Vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=Mr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(ti(e,t,i,n),Vl(e,t,i))}};function Vm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!po(n,i)||!po(r,s):!0}function A_(t,e,n){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=xn(e)?Zr:cn.current,i=e.contextTypes,s=(i=i!=null)?Zs(t,r):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&qc.enqueueReplaceState(e,e.state,null)}function sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Kh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=xn(e)?Zr:cn.current,r.context=Zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&qc.enqueueReplaceState(r,r.state,null),_c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e){try{var n="",i=e;do n+=Jy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TM=typeof WeakMap=="function"?WeakMap:Map;function R_(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ec||(Ec=!0,gf=i),af(t,e)},n}function P_(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){af(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Gm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new TM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=BM.bind(null,t,e,n),e.then(t,t))}function Wm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var bM=Ki.ReactCurrentOwner,vn=!1;function fn(t,e,n,i){e.child=t===null?s_(e,null,n,i):Qs(e,t.child,n,i)}function Xm(t,e,n,i,r){n=n.render;var s=e.ref;return Ws(e,r),i=tp(t,e,n,i,s,r),n=np(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(wt&&n&&Gh(e),e.flags|=1,fn(t,e,i,r),e.child)}function $m(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!fp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,L_(t,e,s,i,r)):(t=$l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(a,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=Er(s,i),t.ref=e.ref,t.return=e,e.child=t}function L_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(po(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return of(t,e,n,i,r)}function N_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Bs,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Bs,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(Bs,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(Bs,Tn),Tn|=i;return fn(t,e,r,n),e.child}function D_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function of(t,e,n,i,r){var s=xn(n)?Zr:cn.current;return s=Zs(e,s),Ws(e,r),n=tp(t,e,n,i,s,r),i=np(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(wt&&i&&Gh(e),e.flags|=1,fn(t,e,n,r),e.child)}function Ym(t,e,n,i,r){if(xn(n)){var s=!0;hc(e)}else s=!1;if(Ws(e,r),e.stateNode===null)Wl(t,e),A_(e,n,i),sf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=xn(n)?Zr:cn.current,c=Zs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Hm(e,a,i,c),lr=!1;var u=e.memoizedState;a.state=u,_c(e,i,a,r),l=e.memoizedState,o!==i||u!==l||_n.current||lr?(typeof d=="function"&&(rf(e,n,d,i),l=e.memoizedState),(o=lr||Vm(e,n,o,i,u,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,o_(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:qn(e.type,o),a.props=c,f=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=xn(n)?Zr:cn.current,l=Zs(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||u!==l)&&Hm(e,a,i,l),lr=!1,u=e.memoizedState,a.state=u,_c(e,i,a,r);var m=e.memoizedState;o!==f||u!==m||_n.current||lr?(typeof p=="function"&&(rf(e,n,p,i),m=e.memoizedState),(c=lr||Vm(e,n,c,i,u,m,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return lf(t,e,n,i,s,r)}function lf(t,e,n,i,r,s){D_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Dm(e,n,!1),Wi(t,e,s);i=e.stateNode,bM.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,o,s)):fn(t,e,o,s),e.memoizedState=i.state,r&&Dm(e,n,!0),e.child}function I_(t){var e=t.stateNode;e.pendingContext?Nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nm(t,e.context,!1),Zh(t,e.containerInfo)}function qm(t,e,n,i,r){return Js(),jh(r),e.flags|=256,fn(t,e,n,i),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function U_(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(Tt,r&1),t===null)return tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Jc(a,i,0,null),t=Kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uf(n),e.memoizedState=cf,t):sp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return CM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Er(o,s):(s=Kr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?uf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=cf,i}return s=t.child,t=s.sibling,i=Er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sp(t,e){return e=Jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nl(t,e,n,i){return i!==null&&jh(i),Qs(e,t.child,null,n),t=sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function CM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Uu(Error(ue(422))),nl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jc({mode:"visible",children:i.children},r,0,null),s=Kr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qs(e,t.child,null,a),e.child.memoizedState=uf(a),e.memoizedState=cf,s);if(!(e.mode&1))return nl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ue(419)),i=Uu(s,i,void 0),nl(t,e,a,i)}if(o=(a&t.childLanes)!==0,vn||o){if(i=jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gi(t,r),ti(i,t,r,-1))}return dp(),i=Uu(Error(ue(421))),nl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=xr(r.nextSibling),Rn=e,wt=!0,Zn=null,t!==null&&(In[Un++]=Ii,In[Un++]=Ui,In[Un++]=Jr,Ii=t.id,Ui=t.overflow,Jr=e),e=sp(e,i.children),e.flags|=4096,e)}function Km(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nf(t.return,e,n)}function Fu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function F_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Km(t,n,e);else if(t.tag===19)Km(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fu(e,!0,n,null,s);break;case"together":Fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AM(t,e,n){switch(e.tag){case 3:I_(e),Js();break;case 5:l_(e);break;case 1:xn(e.type)&&hc(e);break;case 4:Zh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(gc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?U_(t,e,n):(xt(Tt,Tt.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);xt(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return F_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,N_(t,e,n)}return Wi(t,e,n)}var O_,df,k_,B_;O_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};df=function(){};k_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,$r(gi.current);var s=null;switch(n){case"input":r=Nd(t,r),i=Nd(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Ud(t,r),i=Ud(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dc)}Od(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ao.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ao.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};B_=function(t,e,n,i){n!==i&&(e.flags|=4)};function wa(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function RM(t,e,n){var i=e.pendingProps;switch(Wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return xn(e.type)&&fc(),nn(e),null;case 3:return i=e.stateNode,ea(),St(_n),St(cn),Qh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(el(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(xf(Zn),Zn=null))),df(t,e),nn(e),null;case 5:Jh(e);var r=$r(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)k_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return nn(e),null}if(t=$r(gi.current),el(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[di]=e,i[vo]=s,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Ha.length;r++)yt(Ha[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":sm(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":om(i,s),yt("invalid",i)}Od(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Qo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Qo(i.textContent,o,t),r=["children",""+o]):ao.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&yt("scroll",i)}switch(n){case"input":jo(i),am(i,s,!0);break;case"textarea":jo(i),lm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[di]=e,t[vo]=i,O_(t,e,!1,!1),e.stateNode=t;e:{switch(a=kd(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ha.length;r++)yt(Ha[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":sm(t,i),r=Nd(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),yt("invalid",t);break;case"textarea":om(t,i),r=Ud(t,i),yt("invalid",t);break;default:r=i}Od(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?g0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oo(t,l):typeof l=="number"&&oo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",t):l!=null&&Rh(t,s,l,a))}switch(n){case"input":jo(t),am(t,i,!1);break;case"textarea":jo(t),lm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)B_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=$r(xo.current),$r(gi.current),el(e)){if(i=e.stateNode,n=e.memoizedProps,i[di]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:Qo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return nn(e),null;case 13:if(St(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&An!==null&&e.mode&1&&!(e.flags&128))i_(),Js(),e.flags|=98560,s=!1;else if(s=el(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[di]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else Zn!==null&&(xf(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Bt===0&&(Bt=3):dp())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return ea(),df(t,e),t===null&&mo(e.stateNode.containerInfo),nn(e),null;case 10:return Yh(e.type._context),nn(e),null;case 17:return xn(e.type)&&fc(),nn(e),null;case 19:if(St(Tt),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)wa(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=xc(t),a!==null){for(e.flags|=128,wa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>na&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304)}else{if(!i)if(t=xc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!wt)return nn(e),null}else 2*It()-s.renderingStartTime>na&&n!==1073741824&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=Tt.current,xt(Tt,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return up(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function PM(t,e){switch(Wh(e),e.tag){case 1:return xn(e.type)&&fc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ea(),St(_n),St(cn),Qh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jh(e),null;case 13:if(St(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(Tt),null;case 4:return ea(),null;case 10:return Yh(e.type._context),null;case 22:case 23:return up(),null;case 24:return null;default:return null}}var il=!1,on=!1,LM=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function ff(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var Zm=!1;function NM(t,e){if(Yd=lc,t=W0(),Hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++d===i&&(l=a),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qd={focusedElem:t,selectionRange:n},lc=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,g=m.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:qn(e.type,x),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(S){Pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return m=Zm,Zm=!1,m}function Ja(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ff(e,n,s)}r=r.next}while(r!==i)}}function Kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z_(t){var e=t.alternate;e!==null&&(t.alternate=null,z_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[di],delete e[vo],delete e[Jd],delete e[pM],delete e[mM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function V_(t){return t.tag===5||t.tag===3||t.tag===4}function Jm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||V_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dc));else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}var qt=null,Kn=!1;function er(t,e,n){for(n=n.child;n!==null;)H_(t,e,n),n=n.sibling}function H_(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(Hc,n)}catch{}switch(n.tag){case 5:on||ks(n,e);case 6:var i=qt,r=Kn;qt=null,er(t,e,n),qt=i,Kn=r,qt!==null&&(Kn?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(Kn?(t=qt,n=n.stateNode,t.nodeType===8?Ru(t.parentNode,n):t.nodeType===1&&Ru(t,n),fo(t)):Ru(qt,n.stateNode));break;case 4:i=qt,r=Kn,qt=n.stateNode.containerInfo,Kn=!0,er(t,e,n),qt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ff(n,e,a),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!on&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Pt(n,e,o)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,er(t,e,n),on=i):er(t,e,n);break;default:er(t,e,n)}}function Qm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LM),e.forEach(function(i){var r=VM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:qt=o.stateNode,Kn=!1;break e;case 3:qt=o.stateNode.containerInfo,Kn=!0;break e;case 4:qt=o.stateNode.containerInfo,Kn=!0;break e}o=o.return}if(qt===null)throw Error(ue(160));H_(s,a,r),qt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G_(e,t),e=e.sibling}function G_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),ai(t),i&4){try{Ja(3,t,t.return),Kc(3,t)}catch(x){Pt(t,t.return,x)}try{Ja(5,t,t.return)}catch(x){Pt(t,t.return,x)}}break;case 1:jn(e,t),ai(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(jn(e,t),ai(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{oo(r,"")}catch(x){Pt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&d0(r,s),kd(o,a);var c=kd(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?g0(r,f):d==="dangerouslySetInnerHTML"?p0(r,f):d==="children"?oo(r,f):Rh(r,d,f,c)}switch(o){case"input":Dd(r,s);break;case"textarea":f0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?zs(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[vo]=s}catch(x){Pt(t,t.return,x)}}break;case 6:if(jn(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Pt(t,t.return,x)}}break;case 3:if(jn(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(x){Pt(t,t.return,x)}break;case 4:jn(e,t),ai(t);break;case 13:jn(e,t),ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lp=It())),i&4&&Qm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||d,jn(e,t),on=c):jn(e,t),ai(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ae=t,d=t.child;d!==null;){for(f=Ae=d;Ae!==null;){switch(u=Ae,p=u.child,u.tag){case 0:case 11:case 14:case 15:Ja(4,u,u.return);break;case 1:ks(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(x){Pt(i,n,x)}}break;case 5:ks(u,u.return);break;case 22:if(u.memoizedState!==null){tg(f);continue}}p!==null?(p.return=u,Ae=p):tg(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=m0("display",a))}catch(x){Pt(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Pt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jn(e,t),ai(t),i&4&&Qm(t);break;case 21:break;default:jn(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(V_(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oo(r,""),i.flags&=-33);var s=Jm(t);mf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Jm(t);pf(t,o,a);break;default:throw Error(ue(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DM(t,e,n){Ae=t,W_(t)}function W_(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||il;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||on;o=il;var c=on;if(il=a,(on=l)&&!c)for(Ae=r;Ae!==null;)a=Ae,l=a.child,a.tag===22&&a.memoizedState!==null?ng(r):l!==null?(l.return=a,Ae=l):ng(r);for(;s!==null;)Ae=s,W_(s),s=s.sibling;Ae=r,il=o,on=c}eg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):eg(t)}}function eg(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||Kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&km(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}km(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&fo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}on||e.flags&512&&hf(e)}catch(u){Pt(e,e.return,u)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function tg(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function ng(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kc(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{hf(e)}catch(l){Pt(e,s,l)}break;case 5:var a=e.return;try{hf(e)}catch(l){Pt(e,a,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){Ae=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ae=o;break}Ae=e.return}}var IM=Math.ceil,Mc=Ki.ReactCurrentDispatcher,ap=Ki.ReactCurrentOwner,Bn=Ki.ReactCurrentBatchConfig,ct=0,jt=null,Ft=null,Jt=0,Tn=0,Bs=Ar(0),Bt=0,Eo=null,es=0,Zc=0,op=0,Qa=null,gn=null,lp=0,na=1/0,Li=null,Ec=!1,gf=null,Sr=null,rl=!1,hr=null,wc=0,eo=0,vf=null,jl=-1,Xl=0;function hn(){return ct&6?It():jl!==-1?jl:jl=It()}function Mr(t){return t.mode&1?ct&2&&Jt!==0?Jt&-Jt:vM.transition!==null?(Xl===0&&(Xl=A0()),Xl):(t=pt,t!==0||(t=window.event,t=t===void 0?16:U0(t.type)),t):1}function ti(t,e,n,i){if(50<eo)throw eo=0,vf=null,Error(ue(185));No(t,n,i),(!(ct&2)||t!==jt)&&(t===jt&&(!(ct&2)&&(Zc|=n),Bt===4&&ur(t,Jt)),yn(t,i),n===1&&ct===0&&!(e.mode&1)&&(na=It()+500,$c&&Rr()))}function yn(t,e){var n=t.callbackNode;vS(t,e);var i=oc(t,t===jt?Jt:0);if(i===0)n!==null&&dm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&dm(n),e===1)t.tag===0?gM(ig.bind(null,t)):e_(ig.bind(null,t)),fM(function(){!(ct&6)&&Rr()}),n=null;else{switch(R0(i)){case 1:n=Ih;break;case 4:n=b0;break;case 16:n=ac;break;case 536870912:n=C0;break;default:n=ac}n=J_(n,j_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j_(t,e){if(jl=-1,Xl=0,ct&6)throw Error(ue(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var i=oc(t,t===jt?Jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Tc(t,i);else{e=i;var r=ct;ct|=2;var s=$_();(jt!==t||Jt!==e)&&(Li=null,na=It()+500,qr(t,e));do try{OM();break}catch(o){X_(t,o)}while(!0);$h(),Mc.current=s,ct=r,Ft!==null?e=0:(jt=null,Jt=0,e=Bt)}if(e!==0){if(e===2&&(r=Gd(t),r!==0&&(i=r,e=_f(t,r))),e===1)throw n=Eo,qr(t,0),ur(t,i),yn(t,It()),n;if(e===6)ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!UM(r)&&(e=Tc(t,i),e===2&&(s=Gd(t),s!==0&&(i=s,e=_f(t,s))),e===1))throw n=Eo,qr(t,0),ur(t,i),yn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Vr(t,gn,Li);break;case 3:if(ur(t,i),(i&130023424)===i&&(e=lp+500-It(),10<e)){if(oc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zd(Vr.bind(null,t,gn,Li),e);break}Vr(t,gn,Li);break;case 4:if(ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ei(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*IM(i/1960))-i,10<i){t.timeoutHandle=Zd(Vr.bind(null,t,gn,Li),i);break}Vr(t,gn,Li);break;case 5:Vr(t,gn,Li);break;default:throw Error(ue(329))}}}return yn(t,It()),t.callbackNode===n?j_.bind(null,t):null}function _f(t,e){var n=Qa;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=Tc(t,e),t!==2&&(e=gn,gn=n,e!==null&&xf(e)),t}function xf(t){gn===null?gn=t:gn.push.apply(gn,t)}function UM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~op,e&=~Zc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function ig(t){if(ct&6)throw Error(ue(327));js();var e=oc(t,0);if(!(e&1))return yn(t,It()),null;var n=Tc(t,e);if(t.tag!==0&&n===2){var i=Gd(t);i!==0&&(e=i,n=_f(t,i))}if(n===1)throw n=Eo,qr(t,0),ur(t,e),yn(t,It()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,gn,Li),yn(t,It()),null}function cp(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(na=It()+500,$c&&Rr())}}function ts(t){hr!==null&&hr.tag===0&&!(ct&6)&&js();var e=ct;ct|=1;var n=Bn.transition,i=pt;try{if(Bn.transition=null,pt=1,t)return t()}finally{pt=i,Bn.transition=n,ct=e,!(ct&6)&&Rr()}}function up(){Tn=Bs.current,St(Bs)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dM(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(Wh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fc();break;case 3:ea(),St(_n),St(cn),Qh();break;case 5:Jh(i);break;case 4:ea();break;case 13:St(Tt);break;case 19:St(Tt);break;case 10:Yh(i.type._context);break;case 22:case 23:up()}n=n.return}if(jt=t,Ft=t=Er(t.current,null),Jt=Tn=e,Bt=0,Eo=null,op=Zc=es=0,gn=Qa=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Xr=null}return t}function X_(t,e){do{var n=Ft;try{if($h(),Hl.current=Sc,yc){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yc=!1}if(Qr=0,Wt=kt=bt=null,Za=!1,yo=0,ap.current=null,n===null||n.return===null){Bt=1,Eo=e,Ft=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Wm(a);if(p!==null){p.flags&=-257,jm(p,a,o,s,e),p.mode&1&&Gm(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var x=new Set;x.add(l),e.updateQueue=x}else m.add(l);break e}else{if(!(e&1)){Gm(s,c,e),dp();break e}l=Error(ue(426))}}else if(wt&&o.mode&1){var g=Wm(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),jm(g,a,o,s,e),jh(ta(l,o));break e}}s=l=ta(l,o),Bt!==4&&(Bt=2),Qa===null?Qa=[s]:Qa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=R_(s,l,e);Om(s,h);break e;case 1:o=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Sr===null||!Sr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=P_(s,o,e);Om(s,S);break e}}s=s.return}while(s!==null)}q_(n)}catch(b){e=b,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function $_(){var t=Mc.current;return Mc.current=Sc,t===null?Sc:t}function dp(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),jt===null||!(es&268435455)&&!(Zc&268435455)||ur(jt,Jt)}function Tc(t,e){var n=ct;ct|=2;var i=$_();(jt!==t||Jt!==e)&&(Li=null,qr(t,e));do try{FM();break}catch(r){X_(t,r)}while(!0);if($h(),ct=n,Mc.current=i,Ft!==null)throw Error(ue(261));return jt=null,Jt=0,Bt}function FM(){for(;Ft!==null;)Y_(Ft)}function OM(){for(;Ft!==null&&!lS();)Y_(Ft)}function Y_(t){var e=Z_(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?q_(t):Ft=e,ap.current=null}function q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PM(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ft=null;return}}else if(n=RM(n,e,Tn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Bt===0&&(Bt=5)}function Vr(t,e,n){var i=pt,r=Bn.transition;try{Bn.transition=null,pt=1,kM(t,e,n,i)}finally{Bn.transition=r,pt=i}return null}function kM(t,e,n,i){do js();while(hr!==null);if(ct&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_S(t,s),t===jt&&(Ft=jt=null,Jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,J_(ac,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var a=pt;pt=1;var o=ct;ct|=4,ap.current=null,NM(t,n),G_(n,t),rM(qd),lc=!!Yd,qd=Yd=null,t.current=n,DM(n),cS(),ct=o,pt=a,Bn.transition=s}else t.current=n;if(rl&&(rl=!1,hr=t,wc=r),s=t.pendingLanes,s===0&&(Sr=null),fS(n.stateNode),yn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ec)throw Ec=!1,t=gf,gf=null,t;return wc&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===vf?eo++:(eo=0,vf=t):eo=0,Rr(),null}function js(){if(hr!==null){var t=R0(wc),e=Bn.transition,n=pt;try{if(Bn.transition=null,pt=16>t?16:t,hr===null)var i=!1;else{if(t=hr,hr=null,wc=0,ct&6)throw Error(ue(331));var r=ct;for(ct|=4,Ae=t.current;Ae!==null;){var s=Ae,a=s.child;if(Ae.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ae=c;Ae!==null;){var d=Ae;switch(d.tag){case 0:case 11:case 15:Ja(8,d,s)}var f=d.child;if(f!==null)f.return=d,Ae=f;else for(;Ae!==null;){d=Ae;var u=d.sibling,p=d.return;if(z_(d),d===c){Ae=null;break}if(u!==null){u.return=p,Ae=u;break}Ae=p}}}var m=s.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}Ae=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ae=a;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ja(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ae=h;break e}Ae=s.return}}var v=t.current;for(Ae=v;Ae!==null;){a=Ae;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,Ae=_;else e:for(a=v;Ae!==null;){if(o=Ae,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Kc(9,o)}}catch(b){Pt(o,o.return,b)}if(o===a){Ae=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ae=S;break e}Ae=o.return}}if(ct=r,Rr(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(Hc,t)}catch{}i=!0}return i}finally{pt=n,Bn.transition=e}}return!1}function rg(t,e,n){e=ta(n,e),e=R_(t,e,1),t=yr(t,e,1),e=hn(),t!==null&&(No(t,1,e),yn(t,e))}function Pt(t,e,n){if(t.tag===3)rg(t,t,n);else for(;e!==null;){if(e.tag===3){rg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=ta(n,t),t=P_(e,t,1),e=yr(e,t,1),t=hn(),e!==null&&(No(e,1,t),yn(e,t));break}}e=e.return}}function BM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Jt&n)===n&&(Bt===4||Bt===3&&(Jt&130023424)===Jt&&500>It()-lp?qr(t,0):op|=n),yn(t,e)}function K_(t,e){e===0&&(t.mode&1?(e=Yo,Yo<<=1,!(Yo&130023424)&&(Yo=4194304)):e=1);var n=hn();t=Gi(t,e),t!==null&&(No(t,e,n),yn(t,n))}function zM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),K_(t,n)}function VM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),K_(t,n)}var Z_;Z_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,AM(t,e,n);vn=!!(t.flags&131072)}else vn=!1,wt&&e.flags&1048576&&t_(e,mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wl(t,e),t=e.pendingProps;var r=Zs(e,cn.current);Ws(e,n),r=tp(null,e,i,t,r,n);var s=np();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,hc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kh(e),r.updater=qc,e.stateNode=r,r._reactInternals=e,sf(e,i,t,n),e=lf(null,e,i,!0,s,n)):(e.tag=0,wt&&s&&Gh(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=GM(i),t=qn(i,t),r){case 0:e=of(null,e,i,t,n);break e;case 1:e=Ym(null,e,i,t,n);break e;case 11:e=Xm(null,e,i,t,n);break e;case 14:e=$m(null,e,i,qn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),of(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Ym(t,e,i,r,n);case 3:e:{if(I_(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,o_(t,e),_c(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ta(Error(ue(423)),e),e=qm(t,e,i,n,r);break e}else if(i!==r){r=ta(Error(ue(424)),e),e=qm(t,e,i,n,r);break e}else for(An=xr(e.stateNode.containerInfo.firstChild),Rn=e,wt=!0,Zn=null,n=s_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),i===r){e=Wi(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return l_(e),t===null&&tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Kd(i,r)?a=null:s!==null&&Kd(i,s)&&(e.flags|=32),D_(t,e),fn(t,e,a,n),e.child;case 6:return t===null&&tf(e),null;case 13:return U_(t,e,n);case 4:return Zh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qs(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Xm(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(gc,i._currentValue),i._currentValue=a,s!==null)if(ii(s.value,a)){if(s.children===r.children&&!_n.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Oi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ue(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),nf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,n),r=zn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),$m(t,e,i,r,n);case 15:return L_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Wl(t,e),e.tag=1,xn(i)?(t=!0,hc(e)):t=!1,Ws(e,n),A_(e,i,r),sf(e,i,r,n),lf(null,e,i,!0,t,n);case 19:return F_(t,e,n);case 22:return N_(t,e,n)}throw Error(ue(156,e.tag))};function J_(t,e){return T0(t,e)}function HM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new HM(t,e,n,i)}function fp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GM(t){if(typeof t=="function")return fp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lh)return 11;if(t===Nh)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")fp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Rs:return Kr(n.children,r,s,e);case Ph:a=8,r|=8;break;case Ad:return t=kn(12,n,e,r|2),t.elementType=Ad,t.lanes=s,t;case Rd:return t=kn(13,n,e,r),t.elementType=Rd,t.lanes=s,t;case Pd:return t=kn(19,n,e,r),t.elementType=Pd,t.lanes=s,t;case l0:return Jc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case a0:a=10;break e;case o0:a=9;break e;case Lh:a=11;break e;case Nh:a=14;break e;case or:a=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=kn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Kr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function Jc(t,e,n,i){return t=kn(22,t,i,e),t.elementType=l0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ou(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function ku(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_u(0),this.expirationTimes=_u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_u(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hp(t,e,n,i,r,s,a,o,l){return t=new WM(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kh(s),t}function jM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Q_(t){if(!t)return Tr;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(xn(n))return Q0(t,n,e)}return e}function ex(t,e,n,i,r,s,a,o,l){return t=hp(n,i,!0,t,r,s,a,o,l),t.context=Q_(null),n=t.current,i=hn(),r=Mr(n),s=Oi(i,r),s.callback=e??null,yr(n,s,r),t.current.lanes=r,No(t,r,i),yn(t,i),t}function Qc(t,e,n,i){var r=e.current,s=hn(),a=Mr(r);return n=Q_(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,a),t!==null&&(ti(t,r,a,s),Vl(t,r,a)),a}function bc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pp(t,e){sg(t,e),(t=t.alternate)&&sg(t,e)}function XM(){return null}var tx=typeof reportError=="function"?reportError:function(t){console.error(t)};function mp(t){this._internalRoot=t}eu.prototype.render=mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));Qc(t,e,null,null)};eu.prototype.unmount=mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){Qc(null,t,null,null)}),e[Hi]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=N0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&I0(t)}};function gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ag(){}function $M(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=bc(a);s.call(c)}}var a=ex(e,i,t,0,null,!1,!1,"",ag);return t._reactRootContainer=a,t[Hi]=a.current,mo(t.nodeType===8?t.parentNode:t),ts(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=bc(l);o.call(c)}}var l=hp(t,0,!1,null,null,!1,!1,"",ag);return t._reactRootContainer=l,t[Hi]=l.current,mo(t.nodeType===8?t.parentNode:t),ts(function(){Qc(e,l,n,i)}),l}function nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=bc(a);o.call(l)}}Qc(e,a,t,r)}else a=$M(n,e,t,r,i);return bc(a)}P0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Va(e.pendingLanes);n!==0&&(Uh(e,n|1),yn(e,It()),!(ct&6)&&(na=It()+500,Rr()))}break;case 13:ts(function(){var i=Gi(t,1);if(i!==null){var r=hn();ti(i,t,1,r)}}),pp(t,1)}};Fh=function(t){if(t.tag===13){var e=Gi(t,134217728);if(e!==null){var n=hn();ti(e,t,134217728,n)}pp(t,134217728)}};L0=function(t){if(t.tag===13){var e=Mr(t),n=Gi(t,e);if(n!==null){var i=hn();ti(n,t,e,i)}pp(t,e)}};N0=function(){return pt};D0=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};zd=function(t,e,n){switch(e){case"input":if(Dd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xc(i);if(!r)throw Error(ue(90));u0(i),Dd(i,r)}}}break;case"textarea":f0(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};x0=cp;y0=ts;var YM={usingClientEntryPoint:!1,Events:[Io,Ds,Xc,v0,_0,cp]},Ta={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qM={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=E0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||XM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Hc=sl.inject(qM),mi=sl}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YM;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(e))throw Error(ue(200));return jM(t,e,null,n)};Ln.createRoot=function(t,e){if(!gp(t))throw Error(ue(299));var n=!1,i="",r=tx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hp(t,1,!1,null,null,n,!1,i,r),t[Hi]=e.current,mo(t.nodeType===8?t.parentNode:t),new mp(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=E0(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return ts(t)};Ln.hydrate=function(t,e,n){if(!tu(e))throw Error(ue(200));return nu(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!gp(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=tx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ex(e,null,t,1,n??null,r,!1,s,a),t[Hi]=e.current,mo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new eu(e)};Ln.render=function(t,e,n){if(!tu(e))throw Error(ue(200));return nu(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!tu(t))throw Error(ue(40));return t._reactRootContainer?(ts(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1};Ln.unstable_batchedUpdates=cp;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tu(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return nu(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nx)}catch(t){console.error(t)}}nx(),n0.exports=Ln;var KM=n0.exports,ix,og=KM;ix=og.createRoot,og.hydrateRoot;/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var lg="popstate";function cg(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function ZM(t={}){function e(i,r){var c;let s=(c=r.state)==null?void 0:c.masked,{pathname:a,search:o,hash:l}=s||i.location;return yf("",{pathname:a,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default",s?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function n(i,r){return typeof r=="string"?r:wo(r)}return QM(e,n,null,t)}function Ct(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ri(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JM(){return Math.random().toString(36).substring(2,10)}function ug(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function yf(t,e,n=null,i,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?fa(e):e,state:n,key:e&&e.key||i||JM(),unstable_mask:r}}function wo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function fa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function QM(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o="POP",l=null,c=d();c==null&&(c=0,a.replaceState({...a.state,idx:c},""));function d(){return(a.state||{idx:null}).idx}function f(){o="POP";let g=d(),h=g==null?null:g-c;c=g,l&&l({action:o,location:x.location,delta:h})}function u(g,h){o="PUSH";let v=cg(g)?g:yf(x.location,g,h);c=d()+1;let _=ug(v,c),S=x.createHref(v.unstable_mask||v);try{a.pushState(_,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(S)}s&&l&&l({action:o,location:x.location,delta:1})}function p(g,h){o="REPLACE";let v=cg(g)?g:yf(x.location,g,h);c=d();let _=ug(v,c),S=x.createHref(v.unstable_mask||v);a.replaceState(_,"",S),s&&l&&l({action:o,location:x.location,delta:0})}function m(g){return eE(g)}let x={get action(){return o},get location(){return t(r,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(lg,f),l=g,()=>{r.removeEventListener(lg,f),l=null}},createHref(g){return e(r,g)},createURL:m,encodeLocation(g){let h=m(g);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:u,replace:p,go(g){return a.go(g)}};return x}function eE(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ct(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:wo(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function rx(t,e,n="/"){return tE(t,e,n,!1)}function tE(t,e,n,i){let r=typeof e=="string"?fa(e):e,s=ji(r.pathname||"/",n);if(s==null)return null;let a=sx(t);nE(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=hE(s);o=dE(a[l],c,i)}return o}function sx(t,e=[],n=[],i="",r=!1){let s=(a,o,l=r,c)=>{let d={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(i)&&l)return;Ct(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length)}let f=vi([i,d.relativePath]),u=n.concat(d);a.children&&a.children.length>0&&(Ct(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),sx(a.children,e,u,f,l)),!(a.path==null&&!a.index)&&e.push({path:f,score:cE(f,a.index),routesMeta:u})};return t.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of ax(a.path))s(a,o,!0,c)}),e}function ax(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=ax(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function nE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:uE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var iE=/^:[\w-]+$/,rE=3,sE=2,aE=1,oE=10,lE=-2,dg=t=>t==="*";function cE(t,e){let n=t.split("/"),i=n.length;return n.some(dg)&&(i+=lE),e&&(i+=sE),n.filter(r=>!dg(r)).reduce((r,s)=>r+(iE.test(s)?rE:s===""?aE:oE),i)}function uE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function dE(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Cc({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),u=l.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=Cc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:vi([s,f.pathname]),pathnameBase:vE(vi([s,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(s=vi([s,f.pathnameBase]))}return a}function Cc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=fE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,{paramName:d,isOptional:f},u)=>{if(d==="*"){let m=o[u]||"";a=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}const p=o[u];return f&&!p?c[d]=void 0:c[d]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function fE(t,e=!1,n=!0){ri(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l,c,d)=>{if(i.push({paramName:o,isOptional:l!=null}),l){let f=d.charAt(c+a.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function hE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ri(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function ji(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}var pE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function mE(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?fa(t):t,s;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?s=fg(n.substring(1),"/"):s=fg(n,e)):s=e,{pathname:s,search:_E(i),hash:xE(r)}}function fg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Bu(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ox(t){let e=gE(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function vp(t,e,n,i=!1){let r;typeof t=="string"?r=fa(t):(r={...t},Ct(!r.pathname||!r.pathname.includes("?"),Bu("?","pathname","search",r)),Ct(!r.pathname||!r.pathname.includes("#"),Bu("#","pathname","hash",r)),Ct(!r.search||!r.search.includes("#"),Bu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let u=a.split("/");for(;u[0]==="..";)u.shift(),f-=1;r.pathname=u.join("/")}o=f>=0?e[f]:"/"}let l=mE(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}var vi=t=>t.join("/").replace(/\/\/+/g,"/"),vE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_E=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,yE=class{constructor(t,e,n,i=!1){this.status=t,this.statusText=e||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function SE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function ME(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var lx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function cx(t,e){let n=t;if(typeof n!="string"||!pE.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let i=n,r=!1;if(lx)try{let s=new URL(window.location.href),a=n.startsWith("//")?new URL(s.protocol+n):new URL(n),o=ji(a.pathname,e);a.origin===s.origin&&o!=null?n=o+a.search+a.hash:r=!0}catch{ri(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:r,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ux=["POST","PUT","PATCH","DELETE"];new Set(ux);var EE=["GET",...ux];new Set(EE);var ha=D.createContext(null);ha.displayName="DataRouter";var iu=D.createContext(null);iu.displayName="DataRouterState";var wE=D.createContext(!1),dx=D.createContext({isTransitioning:!1});dx.displayName="ViewTransition";var TE=D.createContext(new Map);TE.displayName="Fetchers";var bE=D.createContext(null);bE.displayName="Await";var Hn=D.createContext(null);Hn.displayName="Navigation";var Fo=D.createContext(null);Fo.displayName="Location";var Ei=D.createContext({outlet:null,matches:[],isDataRoute:!1});Ei.displayName="Route";var _p=D.createContext(null);_p.displayName="RouteError";var fx="REACT_ROUTER_ERROR",CE="REDIRECT",AE="ROUTE_ERROR_RESPONSE";function RE(t){if(t.startsWith(`${fx}:${CE}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function PE(t){if(t.startsWith(`${fx}:${AE}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new yE(e.status,e.statusText,e.data)}catch{}}function LE(t,{relative:e}={}){Ct(Oo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=D.useContext(Hn),{hash:r,pathname:s,search:a}=ko(t,{relative:e}),o=s;return n!=="/"&&(o=s==="/"?n:vi([n,s])),i.createHref({pathname:o,search:a,hash:r})}function Oo(){return D.useContext(Fo)!=null}function Zi(){return Ct(Oo(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(Fo).location}var hx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function px(t){D.useContext(Hn).static||D.useLayoutEffect(t)}function xp(){let{isDataRoute:t}=D.useContext(Ei);return t?jE():NE()}function NE(){Ct(Oo(),"useNavigate() may be used only in the context of a <Router> component.");let t=D.useContext(ha),{basename:e,navigator:n}=D.useContext(Hn),{matches:i}=D.useContext(Ei),{pathname:r}=Zi(),s=JSON.stringify(ox(i)),a=D.useRef(!1);return px(()=>{a.current=!0}),D.useCallback((l,c={})=>{if(ri(a.current,hx),!a.current)return;if(typeof l=="number"){n.go(l);return}let d=vp(l,JSON.parse(s),r,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:vi([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,r,t])}D.createContext(null);function DE(){let{matches:t}=D.useContext(Ei),e=t[t.length-1];return e?e.params:{}}function ko(t,{relative:e}={}){let{matches:n}=D.useContext(Ei),{pathname:i}=Zi(),r=JSON.stringify(ox(n));return D.useMemo(()=>vp(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function IE(t,e){return mx(t,e)}function mx(t,e,n){var g;Ct(Oo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=D.useContext(Hn),{matches:r}=D.useContext(Ei),s=r[r.length-1],a=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",c=s&&s.route;{let h=c&&c.path||"";vx(o,!c||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let d=Zi(),f;if(e){let h=typeof e=="string"?fa(e):e;Ct(l==="/"||((g=h.pathname)==null?void 0:g.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${h.pathname}" was given in the \`location\` prop.`),f=h}else f=d;let u=f.pathname||"/",p=u;if(l!=="/"){let h=l.replace(/^\//,"").split("/");p="/"+u.replace(/^\//,"").split("/").slice(h.length).join("/")}let m=rx(t,{pathname:p});ri(c||m!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),ri(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=BE(m&&m.map(h=>Object.assign({},h,{params:Object.assign({},a,h.params),pathname:vi([l,i.encodeLocation?i.encodeLocation(h.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:vi([l,i.encodeLocation?i.encodeLocation(h.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathnameBase])})),r,n);return e&&x?D.createElement(Fo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...f},navigationType:"POP"}},x):x}function UE(){let t=WE(),e=SE(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:s},"ErrorBoundary")," or"," ",D.createElement("code",{style:s},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:r},n):null,a)}var FE=D.createElement(UE,null),gx=class extends D.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=PE(t.digest);n&&(t=n)}let e=t!==void 0?D.createElement(Ei.Provider,{value:this.props.routeContext},D.createElement(_p.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?D.createElement(OE,{error:t},e):e}};gx.contextType=wE;var zu=new WeakMap;function OE({children:t,error:e}){let{basename:n}=D.useContext(Hn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=RE(e.digest);if(i){let r=zu.get(e);if(r)throw r;let s=cx(i.location,n);if(lx&&!zu.get(e))if(s.isExternal||i.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const a=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:i.replace}));throw zu.set(e,a),a}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function kE({routeContext:t,match:e,children:n}){let i=D.useContext(ha);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),D.createElement(Ei.Provider,{value:t},n)}function BE(t,e=[],n){let i=n==null?void 0:n.state;if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let r=t,s=i==null?void 0:i.errors;if(s!=null){let d=r.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);Ct(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,d+1))}let a=!1,o=-1;if(n&&i){a=i.renderFallback;for(let d=0;d<r.length;d++){let f=r[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(o=d),f.route.id){let{loaderData:u,errors:p}=i,m=f.route.loader&&!u.hasOwnProperty(f.route.id)&&(!p||p[f.route.id]===void 0);if(f.route.lazy||m){n.isStatic&&(a=!0),o>=0?r=r.slice(0,o+1):r=[r[0]];break}}}}let l=n==null?void 0:n.onError,c=i&&l?(d,f)=>{var u,p;l(d,{location:i.location,params:((p=(u=i.matches)==null?void 0:u[0])==null?void 0:p.params)??{},unstable_pattern:ME(i.matches),errorInfo:f})}:void 0;return r.reduceRight((d,f,u)=>{let p,m=!1,x=null,g=null;i&&(p=s&&f.route.id?s[f.route.id]:void 0,x=f.route.errorElement||FE,a&&(o<0&&u===0?(vx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,g=null):o===u&&(m=!0,g=f.route.hydrateFallbackElement||null)));let h=e.concat(r.slice(0,u+1)),v=()=>{let _;return p?_=x:m?_=g:f.route.Component?_=D.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=d,D.createElement(kE,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:i!=null},children:_})};return i&&(f.route.ErrorBoundary||f.route.errorElement||u===0)?D.createElement(gx,{location:i.location,revalidation:i.revalidation,component:x,error:p,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:c}):v()},null)}function yp(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zE(t){let e=D.useContext(ha);return Ct(e,yp(t)),e}function VE(t){let e=D.useContext(iu);return Ct(e,yp(t)),e}function HE(t){let e=D.useContext(Ei);return Ct(e,yp(t)),e}function Sp(t){let e=HE(t),n=e.matches[e.matches.length-1];return Ct(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function GE(){return Sp("useRouteId")}function WE(){var i;let t=D.useContext(_p),e=VE("useRouteError"),n=Sp("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function jE(){let{router:t}=zE("useNavigate"),e=Sp("useNavigate"),n=D.useRef(!1);return px(()=>{n.current=!0}),D.useCallback(async(r,s={})=>{ri(n.current,hx),n.current&&(typeof r=="number"?await t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var hg={};function vx(t,e,n){!e&&!hg[t]&&(hg[t]=!0,ri(!1,n))}D.memo(XE);function XE({routes:t,future:e,state:n,isStatic:i,onError:r}){return mx(t,void 0,{state:n,isStatic:i,onError:r})}function Ga(t){Ct(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $E({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1,unstable_useTransitions:a}){Ct(!Oo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),l=D.useMemo(()=>({basename:o,navigator:r,static:s,unstable_useTransitions:a,future:{}}),[o,r,s,a]);typeof n=="string"&&(n=fa(n));let{pathname:c="/",search:d="",hash:f="",state:u=null,key:p="default",unstable_mask:m}=n,x=D.useMemo(()=>{let g=ji(c,o);return g==null?null:{location:{pathname:g,search:d,hash:f,state:u,key:p,unstable_mask:m},navigationType:i}},[o,c,d,f,u,p,i,m]);return ri(x!=null,`<Router basename="${o}"> is not able to match the URL "${c}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:D.createElement(Hn.Provider,{value:l},D.createElement(Fo.Provider,{children:e,value:x}))}function YE({children:t,location:e}){return IE(Sf(t),e)}function Sf(t,e=[]){let n=[];return D.Children.forEach(t,(i,r)=>{if(!D.isValidElement(i))return;let s=[...e,r];if(i.type===D.Fragment){n.push.apply(n,Sf(i.props.children,s));return}Ct(i.type===Ga,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ct(!i.props.index||!i.props.children,"An index route cannot have child routes.");let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Sf(i.props.children,s)),n.push(a)}),n}var Yl="get",ql="application/x-www-form-urlencoded";function ru(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function qE(t){return ru(t)&&t.tagName.toLowerCase()==="button"}function KE(t){return ru(t)&&t.tagName.toLowerCase()==="form"}function ZE(t){return ru(t)&&t.tagName.toLowerCase()==="input"}function JE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function QE(t,e){return t.button===0&&(!e||e==="_self")&&!JE(t)}function Mf(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function e1(t,e){let n=Mf(t);return e&&e.forEach((i,r)=>{n.has(r)||e.getAll(r).forEach(s=>{n.append(r,s)})}),n}var al=null;function t1(){if(al===null)try{new FormData(document.createElement("form"),0),al=!1}catch{al=!0}return al}var n1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vu(t){return t!=null&&!n1.has(t)?(ri(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ql}"`),null):t}function i1(t,e){let n,i,r,s,a;if(KE(t)){let o=t.getAttribute("action");i=o?ji(o,e):null,n=t.getAttribute("method")||Yl,r=Vu(t.getAttribute("enctype"))||ql,s=new FormData(t)}else if(qE(t)||ZE(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?ji(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||Yl,r=Vu(t.getAttribute("formenctype"))||Vu(o.getAttribute("enctype"))||ql,s=new FormData(o,t),!t1()){let{name:c,type:d,value:f}=t;if(d==="image"){let u=c?`${c}.`:"";s.append(`${u}x`,"0"),s.append(`${u}y`,"0")}else c&&s.append(c,f)}}else{if(ru(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Yl,i=null,r=ql,a=t}return s&&r==="text/plain"&&(a=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Mp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function r1(t,e,n,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${i}`:r.pathname=`${r.pathname}.${i}`:r.pathname==="/"?r.pathname=`_root.${i}`:e&&ji(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function s1(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function a1(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function o1(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let a=await s1(s,n);return a.links?a.links():[]}return[]}));return d1(i.flat(1).filter(a1).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function pg(t,e,n,i,r,s){let a=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,o=(l,c)=>{var d;return n[c].pathname!==l.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,c)=>a(l,c)||o(l,c)):s==="data"?e.filter((l,c)=>{var f;let d=i.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(a(l,c)||o(l,c))return!0;if(l.route.shouldRevalidate){let u=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof u=="boolean")return u}return!0}):[]}function l1(t,e,{includeHydrateFallback:n}={}){return c1(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function c1(t){return[...new Set(t)]}function u1(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function d1(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(u1(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}function _x(){let t=D.useContext(ha);return Mp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function f1(){let t=D.useContext(iu);return Mp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ep=D.createContext(void 0);Ep.displayName="FrameworkContext";function xx(){let t=D.useContext(Ep);return Mp(t,"You must render this element inside a <HydratedRouter> element"),t}function h1(t,e){let n=D.useContext(Ep),[i,r]=D.useState(!1),[s,a]=D.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=e,u=D.useRef(null);D.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let x=h=>{h.forEach(v=>{a(v.isIntersecting)})},g=new IntersectionObserver(x,{threshold:.5});return u.current&&g.observe(u.current),()=>{g.disconnect()}}},[t]),D.useEffect(()=>{if(i){let x=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{r(!0)},m=()=>{r(!1),a(!1)};return n?t!=="intent"?[s,u,{}]:[s,u,{onFocus:ba(o,p),onBlur:ba(l,m),onMouseEnter:ba(c,p),onMouseLeave:ba(d,m),onTouchStart:ba(f,p)}]:[!1,u,{}]}function ba(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function p1({page:t,...e}){let{router:n}=_x(),i=D.useMemo(()=>rx(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?D.createElement(g1,{page:t,matches:i,...e}):null}function m1(t){let{manifest:e,routeModules:n}=xx(),[i,r]=D.useState([]);return D.useEffect(()=>{let s=!1;return o1(t,e,n).then(a=>{s||r(a)}),()=>{s=!0}},[t,e,n]),i}function g1({page:t,matches:e,...n}){let i=Zi(),{future:r,manifest:s,routeModules:a}=xx(),{basename:o}=_x(),{loaderData:l,matches:c}=f1(),d=D.useMemo(()=>pg(t,e,c,s,i,"data"),[t,e,c,s,i]),f=D.useMemo(()=>pg(t,e,c,s,i,"assets"),[t,e,c,s,i]),u=D.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let x=new Set,g=!1;if(e.forEach(v=>{var S;let _=s.routes[v.route.id];!_||!_.hasLoader||(!d.some(b=>b.route.id===v.route.id)&&v.route.id in l&&((S=a[v.route.id])!=null&&S.shouldRevalidate)||_.hasClientLoader?g=!0:x.add(v.route.id))}),x.size===0)return[];let h=r1(t,o,r.unstable_trailingSlashAwareDataRequests,"data");return g&&x.size>0&&h.searchParams.set("_routes",e.filter(v=>x.has(v.route.id)).map(v=>v.route.id).join(",")),[h.pathname+h.search]},[o,r.unstable_trailingSlashAwareDataRequests,l,i,s,d,e,t,a]),p=D.useMemo(()=>l1(f,s),[f,s]),m=m1(f);return D.createElement(D.Fragment,null,u.map(x=>D.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),p.map(x=>D.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),m.map(({key:x,link:g})=>D.createElement("link",{key:x,nonce:n.nonce,...g,crossOrigin:g.crossOrigin??n.crossOrigin})))}function v1(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var _1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_1&&(window.__reactRouterVersion="7.13.1")}catch{}function x1({basename:t,children:e,unstable_useTransitions:n,window:i}){let r=D.useRef();r.current==null&&(r.current=ZM({window:i,v5Compat:!0}));let s=r.current,[a,o]=D.useState({action:s.action,location:s.location}),l=D.useCallback(c=>{n===!1?o(c):D.startTransition(()=>o(c))},[n]);return D.useLayoutEffect(()=>s.listen(l),[s,l]),D.createElement($E,{basename:t,children:e,location:a.location,navigationType:a.action,navigator:s,unstable_useTransitions:n})}var yx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ac=D.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:a,unstable_mask:o,state:l,target:c,to:d,preventScrollReset:f,viewTransition:u,unstable_defaultShouldRevalidate:p,...m},x){let{basename:g,navigator:h,unstable_useTransitions:v}=D.useContext(Hn),_=typeof d=="string"&&yx.test(d),S=cx(d,g);d=S.to;let b=LE(d,{relative:r}),C=Zi(),A=null;if(o){let O=vp(o,[],C.unstable_mask?C.unstable_mask.pathname:"/",!0);g!=="/"&&(O.pathname=O.pathname==="/"?g:vi([g,O.pathname])),A=h.createHref(O)}let[y,T,F]=h1(i,m),R=E1(d,{replace:a,unstable_mask:o,state:l,target:c,preventScrollReset:f,relative:r,viewTransition:u,unstable_defaultShouldRevalidate:p,unstable_useTransitions:v});function U(O){e&&e(O),O.defaultPrevented||R(O)}let I=!(S.isExternal||s),B=D.createElement("a",{...m,...F,href:(I?A:void 0)||S.absoluteURL||b,onClick:I?U:e,ref:v1(x,T),target:c,"data-discover":!_&&n==="render"?"true":void 0});return y&&!_?D.createElement(D.Fragment,null,B,D.createElement(p1,{page:b})):B});Ac.displayName="Link";var y1=D.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:a,viewTransition:o,children:l,...c},d){let f=ko(a,{relative:c.relative}),u=Zi(),p=D.useContext(iu),{navigator:m,basename:x}=D.useContext(Hn),g=p!=null&&A1(f)&&o===!0,h=m.encodeLocation?m.encodeLocation(f).pathname:f.pathname,v=u.pathname,_=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(v=v.toLowerCase(),_=_?_.toLowerCase():null,h=h.toLowerCase()),_&&x&&(_=ji(_,x)||_);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let b=v===h||!r&&v.startsWith(h)&&v.charAt(S)==="/",C=_!=null&&(_===h||!r&&_.startsWith(h)&&_.charAt(h.length)==="/"),A={isActive:b,isPending:C,isTransitioning:g},y=b?e:void 0,T;typeof i=="function"?T=i(A):T=[i,b?"active":null,C?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let F=typeof s=="function"?s(A):s;return D.createElement(Ac,{...c,"aria-current":y,className:T,ref:d,style:F,to:a,viewTransition:o},typeof l=="function"?l(A):l)});y1.displayName="NavLink";var S1=D.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:a=Yl,action:o,onSubmit:l,relative:c,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:u,...p},m)=>{let{unstable_useTransitions:x}=D.useContext(Hn),g=b1(),h=C1(o,{relative:c}),v=a.toLowerCase()==="get"?"get":"post",_=typeof o=="string"&&yx.test(o),S=b=>{if(l&&l(b),b.defaultPrevented)return;b.preventDefault();let C=b.nativeEvent.submitter,A=(C==null?void 0:C.getAttribute("formmethod"))||a,y=()=>g(C||b.currentTarget,{fetcherKey:e,method:A,navigate:n,replace:r,state:s,relative:c,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:u});x&&n!==!1?D.startTransition(()=>y()):y()};return D.createElement("form",{ref:m,method:v,action:h,onSubmit:i?l:S,...p,"data-discover":!_&&t==="render"?"true":void 0})});S1.displayName="Form";function M1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sx(t){let e=D.useContext(ha);return Ct(e,M1(t)),e}function E1(t,{target:e,replace:n,unstable_mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,unstable_defaultShouldRevalidate:l,unstable_useTransitions:c}={}){let d=xp(),f=Zi(),u=ko(t,{relative:a});return D.useCallback(p=>{if(QE(p,e)){p.preventDefault();let m=n!==void 0?n:wo(f)===wo(u),x=()=>d(t,{replace:m,unstable_mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,unstable_defaultShouldRevalidate:l});c?D.startTransition(()=>x()):x()}},[f,d,u,n,i,r,e,t,s,a,o,l,c])}function wp(t){ri(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=D.useRef(Mf(t)),n=D.useRef(!1),i=Zi(),r=D.useMemo(()=>e1(i.search,n.current?null:e.current),[i.search]),s=xp(),a=D.useCallback((o,l)=>{const c=Mf(typeof o=="function"?o(new URLSearchParams(r)):o);n.current=!0,s("?"+c,l)},[s,r]);return[r,a]}var w1=0,T1=()=>`__${String(++w1)}__`;function b1(){let{router:t}=Sx("useSubmit"),{basename:e}=D.useContext(Hn),n=GE(),i=t.fetch,r=t.navigate;return D.useCallback(async(s,a={})=>{let{action:o,method:l,encType:c,formData:d,body:f}=i1(s,e);if(a.navigate===!1){let u=a.fetcherKey||T1();await i(u,n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||c,flushSync:a.flushSync})}else await r(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:d,body:f,formMethod:a.method||l,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[i,r,e,n])}function C1(t,{relative:e}={}){let{basename:n}=D.useContext(Hn),i=D.useContext(Ei);Ct(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...ko(t||".",{relative:e})},a=Zi();if(t==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(d=>d==="")){o.delete("index"),l.filter(f=>f).forEach(f=>o.append("index",f));let d=o.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:vi([n,s.pathname])),wo(s)}function A1(t,{relative:e}={}){let n=D.useContext(dx);Ct(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Sx("useViewTransitionState"),r=ko(t,{relative:e});if(!n.isTransitioning)return!1;let s=ji(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=ji(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Cc(r.pathname,a)!=null||Cc(r.pathname,s)!=null}const R1="http://localhost:3001/api";function P1(){return localStorage.getItem("kin_token")}function Mx(t){t?localStorage.setItem("kin_token",t):localStorage.removeItem("kin_token")}async function ot(t,e={}){const n=P1(),i={"Content-Type":"application/json",...e.headers};n&&(i.Authorization=`Bearer ${n}`);const r=await fetch(`${R1}${t}`,{...e,headers:i});if(!r.ok){const s=await r.json().catch(()=>({})),a=new Error(s.error||`HTTP ${r.status}`);throw a.status=r.status,a.body=s,a}return r.json()}const Tp={sendMagicLink:({email:t,displayName:e,claimToken:n}={})=>ot("/auth/magic-link",{method:"POST",body:JSON.stringify({email:t,displayName:e,claimToken:n})}),verify:t=>ot("/auth/verify",{method:"POST",body:JSON.stringify({token:t})}),login:(t,e)=>ot("/auth/login",{method:"POST",body:JSON.stringify({email:t,password:e})}),logout:()=>ot("/auth/logout",{method:"POST"}),me:()=>ot("/auth/me")},L1={init:()=>ot("/bootstrap",{method:"POST"})},mg={list:()=>ot("/trees"),get:t=>ot(`/trees/${t}`),create:t=>ot("/trees",{method:"POST",body:JSON.stringify(t)}),remove:t=>ot(`/trees/${t}`,{method:"DELETE"})},Ef={list:t=>ot(`/profiles?treeId=${encodeURIComponent(t)}`),get:t=>ot(`/profiles/${t}`),create:t=>ot("/profiles",{method:"POST",body:JSON.stringify(t)}),update:(t,e)=>ot(`/profiles/${t}`,{method:"PUT",body:JSON.stringify(e)}),claim:t=>ot(`/profiles/${t}/claim`,{method:"POST"}),duplicates:(t,e,n)=>ot(`/profiles/duplicates?treeId=${encodeURIComponent(t)}&firstName=${encodeURIComponent(e)}&lastName=${encodeURIComponent(n)}`)},N1={list:({profileId:t,treeId:e}={})=>{const n=new URLSearchParams;return t&&n.set("profileId",t),e&&n.set("treeId",e),ot(`/media?${n.toString()}`)},create:t=>ot("/media",{method:"POST",body:JSON.stringify(t)})},gg={async fetchAll(t){const[e,n]=await Promise.all([Ef.list(t),Rc.list(t)]);return{profiles:e,relationships:n}},async createPerson(t,e){const n=await Ef.create({treeId:t,firstName:e.firstName,lastName:e.lastName,maidenName:e.maiden||null,isLiving:!e.death,metadata:{branch:e.branch,gender:e.gender,birth:e.birth,death:e.death,bio:e.bio},skipDuplicateCheck:!0}),i=[],r=[];e.parent1&&r.push({treeId:t,type:"parent_child",profileA:e.parent1,profileB:n.id}),e.parent2&&r.push({treeId:t,type:"parent_child",profileA:e.parent2,profileB:n.id}),e.spouse&&r.push({treeId:t,type:"marriage",profileA:e.spouse,profileB:n.id});for(const s of r){const a=await Rc.create(s);i.push(a)}return{profile:n,relationships:i}}},Ex={verify:t=>ot(`/join/verify?token=${encodeURIComponent(t)}`),claim:(t,e,n,i)=>ot("/join/claim",{method:"POST",body:JSON.stringify({token:t,email:e,displayName:n,password:i})}),claimAuthenticated:t=>ot("/join/claim-authenticated",{method:"POST",body:JSON.stringify({token:t})})},vg={add:t=>ot("/facts",{method:"POST",body:JSON.stringify(t)}),update:(t,e)=>ot(`/facts/${t}`,{method:"PUT",body:JSON.stringify(e)}),remove:t=>ot(`/facts/${t}`,{method:"DELETE"}),verify:t=>ot(`/facts/${t}/verify`,{method:"PUT"}),lock:t=>ot(`/facts/${t}/lock`,{method:"PUT"})},Rc={list:t=>ot(`/relationships?treeId=${encodeURIComponent(t)}`),create:t=>ot("/relationships",{method:"POST",body:JSON.stringify(t)}),remove:t=>ot(`/relationships/${t}`,{method:"DELETE"})},_g={list:t=>ot(`/stories?profileId=${encodeURIComponent(t)}`),get:t=>ot(`/stories/${t}`),create:t=>ot("/stories",{method:"POST",body:JSON.stringify(t)}),update:(t,e)=>ot(`/stories/${t}`,{method:"PUT",body:JSON.stringify(e)}),remove:t=>ot(`/stories/${t}`,{method:"DELETE"})},wx=D.createContext(null);function bp(){const t=D.useContext(wx);if(!t)throw new Error("useTree must be used within TreeProvider");return t}function D1({children:t}){const[e,n]=D.useState([]),[i,r]=D.useState(null),[s,a]=D.useState(()=>localStorage.getItem("kin_active_tree")||null),[o,l]=D.useState(!0);function c(d){a(d),d?localStorage.setItem("kin_active_tree",d):localStorage.removeItem("kin_active_tree")}return D.useEffect(()=>{async function d(){function f(p){if(n(p),p.length===0)return;const m=p.map(x=>x.id);(!s||!m.includes(s))&&(c(p[0].id),console.log("[Kin] Auto-selected first tree:",p[0].id))}async function u(){const p=await L1.init();p.sessionToken&&Mx(p.sessionToken),p.userId&&r(p.userId);const m=await mg.list();f(m)}try{let p=await mg.list();if(p.length===0)console.log("[Kin] No trees found — bootstrapping…"),await u();else{f(p);try{const m=await Tp.me();m!=null&&m.id&&r(m.id)}catch{}}}catch(p){console.warn("[Kin] Tree list failed, attempting bootstrap…",p.message);try{await u()}catch(m){console.error("[Kin] Bootstrap failed:",m.message)}}finally{l(!1)}}d()},[]),E.jsx(wx.Provider,{value:{activeTreeId:s,setActiveTreeId:c,treeList:e,loading:o,currentUserId:i},children:t})}const We=t=>typeof t=="string",Ca=()=>{let t,e;const n=new Promise((i,r)=>{t=i,e=r});return n.resolve=t,n.reject=e,n},xg=t=>t==null?"":""+t,I1=(t,e,n)=>{t.forEach(i=>{e[i]&&(n[i]=e[i])})},U1=/###/g,yg=t=>t&&t.indexOf("###")>-1?t.replace(U1,"."):t,Sg=t=>!t||We(t),to=(t,e,n)=>{const i=We(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(Sg(t))return{};const s=yg(i[r]);!t[s]&&n&&(t[s]=new n),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++r}return Sg(t)?{}:{obj:t,k:yg(i[r])}},Mg=(t,e,n)=>{const{obj:i,k:r}=to(t,e,Object);if(i!==void 0||e.length===1){i[r]=n;return}let s=e[e.length-1],a=e.slice(0,e.length-1),o=to(t,a,Object);for(;o.obj===void 0&&a.length;)s=`${a[a.length-1]}.${s}`,a=a.slice(0,a.length-1),o=to(t,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${s}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${s}`]=n},F1=(t,e,n,i)=>{const{obj:r,k:s}=to(t,e,Object);r[s]=r[s]||[],r[s].push(n)},Pc=(t,e)=>{const{obj:n,k:i}=to(t,e);if(n&&Object.prototype.hasOwnProperty.call(n,i))return n[i]},O1=(t,e,n)=>{const i=Pc(t,n);return i!==void 0?i:Pc(e,n)},Tx=(t,e,n)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?We(t[i])||t[i]instanceof String||We(e[i])||e[i]instanceof String?n&&(t[i]=e[i]):Tx(t[i],e[i],n):t[i]=e[i]);return t},Dr=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var k1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const B1=t=>We(t)?t.replace(/[&<>"'\/]/g,e=>k1[e]):t;class z1{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const V1=[" ",",","?","!",";"],H1=new z1(20),G1=(t,e,n)=>{e=e||"",n=n||"";const i=V1.filter(a=>e.indexOf(a)<0&&n.indexOf(a)<0);if(i.length===0)return!0;const r=H1.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let s=!r.test(t);if(!s){const a=t.indexOf(n);a>0&&!r.test(t.substring(0,a))&&(s=!0)}return s},wf=(t,e,n=".")=>{if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const i=e.split(n);let r=t;for(let s=0;s<i.length;){if(!r||typeof r!="object")return;let a,o="";for(let l=s;l<i.length;++l)if(l!==s&&(o+=n),o+=i[l],a=r[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;s+=l-s+1;break}r=a}return r},To=t=>t==null?void 0:t.replace(/_/g,"-"),W1={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var n,i;(i=(n=console==null?void 0:console[t])==null?void 0:n.apply)==null||i.call(n,console,e)}};class Lc{constructor(e,n={}){this.init(e,n)}init(e,n={}){this.prefix=n.prefix||"i18next:",this.logger=e||W1,this.options=n,this.debug=n.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,i,r){return r&&!this.debug?null:(We(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new Lc(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Lc(this.logger,e)}}var fi=new Lc;class su{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(n)||0;this.observers[i].set(n,r+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e,...n){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([r,s])=>{for(let a=0;a<s;a++)r(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([r,s])=>{for(let a=0;a<s;a++)r.apply(r,[e,...n])})}}class Eg extends su{constructor(e,n={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,i,r={}){var c,d;const s=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,a=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,n],i&&(Array.isArray(i)?o.push(...i):We(i)&&s?o.push(...i.split(s)):o.push(i)));const l=Pc(this.data,o);return!l&&!n&&!i&&e.indexOf(".")>-1&&(e=o[0],n=o[1],i=o.slice(2).join(".")),l||!a||!We(i)?l:wf((d=(c=this.data)==null?void 0:c[e])==null?void 0:d[n],i,s)}addResource(e,n,i,r,s={silent:!1}){const a=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let o=[e,n];i&&(o=o.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(o=e.split("."),r=n,n=o[1]),this.addNamespaces(n),Mg(this.data,o,r),s.silent||this.emit("added",e,n,i,r)}addResources(e,n,i,r={silent:!1}){for(const s in i)(We(i[s])||Array.isArray(i[s]))&&this.addResource(e,n,s,i[s],{silent:!0});r.silent||this.emit("added",e,n,i)}addResourceBundle(e,n,i,r,s,a={silent:!1,skipCopy:!1}){let o=[e,n];e.indexOf(".")>-1&&(o=e.split("."),r=i,i=n,n=o[1]),this.addNamespaces(n);let l=Pc(this.data,o)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?Tx(l,i,s):l={...l,...i},Mg(this.data,o,l),a.silent||this.emit("added",e,n,i)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(r=>n[r]&&Object.keys(n[r]).length>0)}toJSON(){return this.data}}var bx={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,i,r){return t.forEach(s=>{var a;e=((a=this.processors[s])==null?void 0:a.process(e,n,i,r))??e}),e}};const Cx=Symbol("i18next/PATH_KEY");function j1(){const t=[],e=Object.create(null);let n;return e.get=(i,r)=>{var s;return(s=n==null?void 0:n.revoke)==null||s.call(n),r===Cx?t:(t.push(r),n=Proxy.revocable(i,e),n.proxy)},Proxy.revocable(Object.create(null),e).proxy}function no(t,e){const{[Cx]:n}=t(j1()),i=(e==null?void 0:e.keySeparator)??".",r=(e==null?void 0:e.nsSeparator)??":";if(n.length>1&&r){const s=e==null?void 0:e.ns,a=Array.isArray(s)?s:null;if(a&&a.length>1&&a.slice(1).includes(n[0]))return`${n[0]}${r}${n.slice(1).join(i)}`}return n.join(i)}const wg={},Hu=t=>!We(t)&&typeof t!="boolean"&&typeof t!="number";class Nc extends su{constructor(e,n={}){super(),I1(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=fi.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,n={interpolation:{}}){const i={...n};if(e==null)return!1;const r=this.resolve(e,i);if((r==null?void 0:r.res)===void 0)return!1;const s=Hu(r.res);return!(i.returnObjects===!1&&s)}extractFromKey(e,n){let i=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,o=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!G1(e,i,r);if(a&&!o){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:We(s)?[s]:s};const c=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(c[0])>-1)&&(s=c.shift()),e=c.join(r)}return{key:e,namespaces:We(s)?[s]:s}}translate(e,n,i){let r=typeof n=="object"?{...n}:n;if(typeof r!="object"&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),typeof r=="object"&&(r={...r}),r||(r={}),e==null)return"";typeof e=="function"&&(e=no(e,{...this.options,...r})),Array.isArray(e)||(e=[String(e)]),e=e.map(I=>typeof I=="function"?no(I,{...this.options,...r}):String(I));const s=r.returnDetails!==void 0?r.returnDetails:this.options.returnDetails,a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,{key:o,namespaces:l}=this.extractFromKey(e[e.length-1],r),c=l[l.length-1];let d=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;d===void 0&&(d=":");const f=r.lng||this.language,u=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((f==null?void 0:f.toLowerCase())==="cimode")return u?s?{res:`${c}${d}${o}`,usedKey:o,exactUsedKey:o,usedLng:f,usedNS:c,usedParams:this.getUsedParamsDetails(r)}:`${c}${d}${o}`:s?{res:o,usedKey:o,exactUsedKey:o,usedLng:f,usedNS:c,usedParams:this.getUsedParamsDetails(r)}:o;const p=this.resolve(e,r);let m=p==null?void 0:p.res;const x=(p==null?void 0:p.usedKey)||o,g=(p==null?void 0:p.exactUsedKey)||o,h=["[object Number]","[object Function]","[object RegExp]"],v=r.joinArrays!==void 0?r.joinArrays:this.options.joinArrays,_=!this.i18nFormat||this.i18nFormat.handleAsObject,S=r.count!==void 0&&!We(r.count),b=Nc.hasDefaultValue(r),C=S?this.pluralResolver.getSuffix(f,r.count,r):"",A=r.ordinal&&S?this.pluralResolver.getSuffix(f,r.count,{ordinal:!1}):"",y=S&&!r.ordinal&&r.count===0,T=y&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${C}`]||r[`defaultValue${A}`]||r.defaultValue;let F=m;_&&!m&&b&&(F=T);const R=Hu(F),U=Object.prototype.toString.apply(F);if(_&&F&&R&&h.indexOf(U)<0&&!(We(v)&&Array.isArray(F))){if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const I=this.options.returnedObjectHandler?this.options.returnedObjectHandler(x,F,{...r,ns:l}):`key '${o} (${this.language})' returned an object instead of string.`;return s?(p.res=I,p.usedParams=this.getUsedParamsDetails(r),p):I}if(a){const I=Array.isArray(F),B=I?[]:{},O=I?g:x;for(const G in F)if(Object.prototype.hasOwnProperty.call(F,G)){const N=`${O}${a}${G}`;b&&!m?B[G]=this.translate(N,{...r,defaultValue:Hu(T)?T[G]:void 0,joinArrays:!1,ns:l}):B[G]=this.translate(N,{...r,joinArrays:!1,ns:l}),B[G]===N&&(B[G]=F[G])}m=B}}else if(_&&We(v)&&Array.isArray(m))m=m.join(v),m&&(m=this.extendTranslation(m,e,r,i));else{let I=!1,B=!1;!this.isValidLookup(m)&&b&&(I=!0,m=T),this.isValidLookup(m)||(B=!0,m=o);const G=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&B?void 0:m,N=b&&T!==m&&this.options.updateMissing;if(B||I||N){if(this.logger.log(N?"updateKey":"missingKey",f,c,o,N?T:m),a){const re=this.resolve(o,{...r,keySeparator:!1});re&&re.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let z=[];const $=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if(this.options.saveMissingTo==="fallback"&&$&&$[0])for(let re=0;re<$.length;re++)z.push($[re]);else this.options.saveMissingTo==="all"?z=this.languageUtils.toResolveHierarchy(r.lng||this.language):z.push(r.lng||this.language);const te=(re,se,be)=>{var Ze;const Ge=b&&be!==m?be:G;this.options.missingKeyHandler?this.options.missingKeyHandler(re,c,se,Ge,N,r):(Ze=this.backendConnector)!=null&&Ze.saveMissing&&this.backendConnector.saveMissing(re,c,se,Ge,N,r),this.emit("missingKey",re,c,se,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&S?z.forEach(re=>{const se=this.pluralResolver.getSuffixes(re,r);y&&r[`defaultValue${this.options.pluralSeparator}zero`]&&se.indexOf(`${this.options.pluralSeparator}zero`)<0&&se.push(`${this.options.pluralSeparator}zero`),se.forEach(be=>{te([re],o+be,r[`defaultValue${be}`]||T)})}):te(z,o,T))}m=this.extendTranslation(m,e,r,p,i),B&&m===o&&this.options.appendNamespaceToMissingKey&&(m=`${c}${d}${o}`),(B||I)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${d}${o}`:o,I?m:void 0,r))}return s?(p.res=m,p.usedParams=this.getUsedParamsDetails(r),p):m}extendTranslation(e,n,i,r,s){var l,c;if((l=this.i18nFormat)!=null&&l.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=We(e)&&(((c=i==null?void 0:i.interpolation)==null?void 0:c.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(d){const p=e.match(this.interpolator.nestingRegexp);f=p&&p.length}let u=i.replace&&!We(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,i.lng||this.language||r.usedLng,i),d){const p=e.match(this.interpolator.nestingRegexp),m=p&&p.length;f<m&&(i.nest=!1)}!i.lng&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,(...p)=>(s==null?void 0:s[0])===p[0]&&!i.context?(this.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`),null):this.translate(...p,n),i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,o=We(a)?[a]:a;return e!=null&&(o!=null&&o.length)&&i.applyPostProcessor!==!1&&(e=bx.handle(o,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e,n={}){let i,r,s,a,o;return We(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(l=>typeof l=="function"?no(l,{...this.options,...n}):l)),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,n),d=c.key;r=d;let f=c.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const u=n.count!==void 0&&!We(n.count),p=u&&!n.ordinal&&n.count===0,m=n.context!==void 0&&(We(n.context)||typeof n.context=="number")&&n.context!=="",x=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);f.forEach(g=>{var h,v;this.isValidLookup(i)||(o=g,!wg[`${x[0]}-${g}`]&&((h=this.utils)!=null&&h.hasLoadedNamespace)&&!((v=this.utils)!=null&&v.hasLoadedNamespace(o))&&(wg[`${x[0]}-${g}`]=!0,this.logger.warn(`key "${r}" for languages "${x.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(_=>{var C;if(this.isValidLookup(i))return;a=_;const S=[d];if((C=this.i18nFormat)!=null&&C.addLookupKeys)this.i18nFormat.addLookupKeys(S,d,_,g,n);else{let A;u&&(A=this.pluralResolver.getSuffix(_,n.count,n));const y=`${this.options.pluralSeparator}zero`,T=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(n.ordinal&&A.indexOf(T)===0&&S.push(d+A.replace(T,this.options.pluralSeparator)),S.push(d+A),p&&S.push(d+y)),m){const F=`${d}${this.options.contextSeparator||"_"}${n.context}`;S.push(F),u&&(n.ordinal&&A.indexOf(T)===0&&S.push(F+A.replace(T,this.options.pluralSeparator)),S.push(F+A),p&&S.push(F+y))}}let b;for(;b=S.pop();)this.isValidLookup(i)||(s=b,i=this.getResource(_,g,b,n))}))})}),{res:i,usedKey:r,exactUsedKey:s,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,i,r={}){var s;return(s=this.i18nFormat)!=null&&s.getResource?this.i18nFormat.getResource(e,n,i,r):this.resourceStore.getResource(e,n,i,r)}getUsedParamsDetails(e={}){const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!We(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const s of n)delete r[s]}return r}static hasDefaultValue(e){const n="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&n===i.substring(0,n.length)&&e[i]!==void 0)return!0;return!1}}class Tg{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=fi.create("languageUtils")}getScriptPartFromCode(e){if(e=To(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=To(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(We(e)&&e.indexOf("-")>-1){let n;try{n=Intl.getCanonicalLocales(e)[0]}catch{}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(i=>{if(n)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(n=r)}),!n&&this.options.supportedLngs&&e.forEach(i=>{if(n)return;const r=this.getScriptPartFromCode(i);if(this.isSupportedCode(r))return n=r;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return n=s;n=this.options.supportedLngs.find(a=>{if(a===s)return a;if(!(a.indexOf("-")<0&&s.indexOf("-")<0)&&(a.indexOf("-")>0&&s.indexOf("-")<0&&a.substring(0,a.indexOf("-"))===s||a.indexOf(s)===0&&s.length>1))return a})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),We(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let i=e[n];return i||(i=e[this.getScriptPartFromCode(n)]),i||(i=e[this.formatLanguageCode(n)]),i||(i=e[this.getLanguagePartFromCode(n)]),i||(i=e.default),i||[]}toResolveHierarchy(e,n){const i=this.getFallbackCodes((n===!1?[]:n)||this.options.fallbackLng||[],e),r=[],s=a=>{a&&(this.isSupportedCode(a)?r.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return We(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):We(e)&&s(this.formatLanguageCode(e)),i.forEach(a=>{r.indexOf(a)<0&&s(this.formatLanguageCode(a))}),r}}const bg={zero:0,one:1,two:2,few:3,many:4,other:5},Cg={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class X1{constructor(e,n={}){this.languageUtils=e,this.options=n,this.logger=fi.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,n={}){const i=To(e==="dev"?"en":e),r=n.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:r});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let a;try{a=new Intl.PluralRules(i,{type:r})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Cg;if(!e.match(/-|_/))return Cg;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,n)}return this.pluralRulesCache[s]=a,a}needsPlural(e,n={}){let i=this.getRule(e,n);return i||(i=this.getRule("dev",n)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,n,i={}){return this.getSuffixes(e,i).map(r=>`${n}${r}`)}getSuffixes(e,n={}){let i=this.getRule(e,n);return i||(i=this.getRule("dev",n)),i?i.resolvedOptions().pluralCategories.sort((r,s)=>bg[r]-bg[s]).map(r=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r}`):[]}getSuffix(e,n,i={}){const r=this.getRule(e,i);return r?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(n)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",n,i))}}const Ag=(t,e,n,i=".",r=!0)=>{let s=O1(t,e,n);return!s&&r&&We(n)&&(s=wf(t,n,i),s===void 0&&(s=wf(e,n,i))),s},Gu=t=>t.replace(/\$/g,"$$$$");class Rg{constructor(e={}){var n;this.logger=fi.create("interpolator"),this.options=e,this.format=((n=e==null?void 0:e.interpolation)==null?void 0:n.format)||(i=>i),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:i,useRawValueToEscape:r,prefix:s,prefixEscaped:a,suffix:o,suffixEscaped:l,formatSeparator:c,unescapeSuffix:d,unescapePrefix:f,nestingPrefix:u,nestingPrefixEscaped:p,nestingSuffix:m,nestingSuffixEscaped:x,nestingOptionsSeparator:g,maxReplaces:h,alwaysFormat:v}=e.interpolation;this.escape=n!==void 0?n:B1,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=s?Dr(s):a||"{{",this.suffix=o?Dr(o):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=d?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":d||"",this.nestingPrefix=u?Dr(u):p||Dr("$t("),this.nestingSuffix=m?Dr(m):x||Dr(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=h||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,i)=>(n==null?void 0:n.source)===i?(n.lastIndex=0,n):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,n,i,r){var p;let s,a,o;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=m=>{if(m.indexOf(this.formatSeparator)<0){const v=Ag(n,l,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(v,void 0,i,{...r,...n,interpolationkey:m}):v}const x=m.split(this.formatSeparator),g=x.shift().trim(),h=x.join(this.formatSeparator).trim();return this.format(Ag(n,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),h,i,{...r,...n,interpolationkey:g})};this.resetRegExp();const d=(r==null?void 0:r.missingInterpolationHandler)||this.options.missingInterpolationHandler,f=((p=r==null?void 0:r.interpolation)==null?void 0:p.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>Gu(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?Gu(this.escape(m)):Gu(m)}].forEach(m=>{for(o=0;s=m.regex.exec(e);){const x=s[1].trim();if(a=c(x),a===void 0)if(typeof d=="function"){const h=d(e,s,r);a=We(h)?h:""}else if(r&&Object.prototype.hasOwnProperty.call(r,x))a="";else if(f){a=s[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),a="";else!We(a)&&!this.useRawValueToEscape&&(a=xg(a));const g=m.safeValue(a);if(e=e.replace(s[0],g),f?(m.regex.lastIndex+=a.length,m.regex.lastIndex-=s[0].length):m.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,n,i={}){let r,s,a;const o=(l,c)=>{const d=this.nestingOptionsSeparator;if(l.indexOf(d)<0)return l;const f=l.split(new RegExp(`${Dr(d)}[ ]*{`));let u=`{${f[1]}`;l=f[0],u=this.interpolate(u,a);const p=u.match(/'/g),m=u.match(/"/g);(((p==null?void 0:p.length)??0)%2===0&&!m||((m==null?void 0:m.length)??0)%2!==0)&&(u=u.replace(/'/g,'"'));try{a=JSON.parse(u),c&&(a={...c,...a})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,x),`${l}${d}${u}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!We(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;const c=/{.*}/.test(r[1])?r[1].lastIndexOf("}")+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(l=r[1].slice(c).split(this.formatSeparator).map(d=>d.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),s=n(o.call(this,r[1].trim(),a),a),s&&r[0]===e&&!We(s))return s;We(s)||(s=xg(s)),s||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),s=""),l.length&&(s=l.reduce((d,f)=>this.format(d,f,i.lng,{...i,interpolationkey:r[1].trim()}),s.trim())),e=e.replace(r[0],s),this.regexp.lastIndex=0}return e}}const $1=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?n.currency||(n.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?n.range||(n.range=r.trim()):r.split(";").forEach(a=>{if(a){const[o,...l]=a.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),d=o.trim();n[d]||(n[d]=c),c==="false"&&(n[d]=!1),c==="true"&&(n[d]=!0),isNaN(c)||(n[d]=parseInt(c,10))}})}return{formatName:e,formatOptions:n}},Pg=t=>{const e={};return(n,i,r)=>{let s=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(s={...s,[r.interpolationkey]:void 0});const a=i+JSON.stringify(s);let o=e[a];return o||(o=t(To(i),r),e[a]=o),o(n)}},Y1=t=>(e,n,i)=>t(To(n),i)(e);class q1{constructor(e={}){this.logger=fi.create("formatter"),this.options=e,this.init(e)}init(e,n={interpolation:{}}){this.formatSeparator=n.interpolation.formatSeparator||",";const i=n.cacheInBuiltFormats?Pg:Y1;this.formats={number:i((r,s)=>{const a=new Intl.NumberFormat(r,{...s});return o=>a.format(o)}),currency:i((r,s)=>{const a=new Intl.NumberFormat(r,{...s,style:"currency"});return o=>a.format(o)}),datetime:i((r,s)=>{const a=new Intl.DateTimeFormat(r,{...s});return o=>a.format(o)}),relativetime:i((r,s)=>{const a=new Intl.RelativeTimeFormat(r,{...s});return o=>a.format(o,s.range||"day")}),list:i((r,s)=>{const a=new Intl.ListFormat(r,{...s});return o=>a.format(o)})}}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=Pg(n)}format(e,n,i,r={}){const s=n.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(o=>o.indexOf(")")>-1)){const o=s.findIndex(l=>l.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,o)].join(this.formatSeparator)}return s.reduce((o,l)=>{var f;const{formatName:c,formatOptions:d}=$1(l);if(this.formats[c]){let u=o;try{const p=((f=r==null?void 0:r.formatParams)==null?void 0:f[r.interpolationkey])||{},m=p.locale||p.lng||r.locale||r.lng||i;u=this.formats[c](o,m,{...d,...r,...p})}catch(p){this.logger.warn(p)}return u}else this.logger.warn(`there was no format function for ${c}`);return o},e)}}const K1=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Z1 extends su{constructor(e,n,i,r={}){var s,a;super(),this.backend=e,this.store=n,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=fi.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],(a=(s=this.backend)==null?void 0:s.init)==null||a.call(s,i,r.backend,r)}queueLoad(e,n,i,r){const s={},a={},o={},l={};return e.forEach(c=>{let d=!0;n.forEach(f=>{const u=`${c}|${f}`;!i.reload&&this.store.hasResourceBundle(c,f)?this.state[u]=2:this.state[u]<0||(this.state[u]===1?a[u]===void 0&&(a[u]=!0):(this.state[u]=1,d=!1,a[u]===void 0&&(a[u]=!0),s[u]===void 0&&(s[u]=!0),l[f]===void 0&&(l[f]=!0)))}),d||(o[c]=!0)}),(Object.keys(s).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(s),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(l)}}loaded(e,n,i){const r=e.split("|"),s=r[0],a=r[1];n&&this.emit("failedLoading",s,a,n),!n&&i&&this.store.addResourceBundle(s,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&i&&(this.state[e]=0);const o={};this.queue.forEach(l=>{F1(l.loaded,[s],a),K1(l,e),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{o[c]||(o[c]={});const d=l.loaded[c];d.length&&d.forEach(f=>{o[c][f]===void 0&&(o[c][f]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(l=>!l.done)}read(e,n,i,r=0,s=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:i,tried:r,wait:s,callback:a});return}this.readingCalls++;const o=(c,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(c&&d&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,i,r+1,s*2,a)},s);return}a(c,d)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,n);c&&typeof c.then=="function"?c.then(d=>o(null,d)).catch(o):o(null,c)}catch(c){o(c)}return}return l(e,n,o)}prepareLoading(e,n,i={},r){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();We(e)&&(e=this.languageUtils.toResolveHierarchy(e)),We(n)&&(n=[n]);const s=this.queueLoad(e,n,i,r);if(!s.toLoad.length)return s.pending.length||r(),null;s.toLoad.forEach(a=>{this.loadOne(a)})}load(e,n,i){this.prepareLoading(e,n,{},i)}reload(e,n,i){this.prepareLoading(e,n,{reload:!0},i)}loadOne(e,n=""){const i=e.split("|"),r=i[0],s=i[1];this.read(r,s,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${n}loading namespace ${s} for language ${r} failed`,a),!a&&o&&this.logger.log(`${n}loaded namespace ${s} for language ${r}`,o),this.loaded(e,a,o)})}saveMissing(e,n,i,r,s,a={},o=()=>{}){var l,c,d,f,u;if((c=(l=this.services)==null?void 0:l.utils)!=null&&c.hasLoadedNamespace&&!((f=(d=this.services)==null?void 0:d.utils)!=null&&f.hasLoadedNamespace(n))){this.logger.warn(`did not save key "${i}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((u=this.backend)!=null&&u.create){const p={...a,isUpdate:s},m=this.backend.create.bind(this.backend);if(m.length<6)try{let x;m.length===5?x=m(e,n,i,r,p):x=m(e,n,i,r),x&&typeof x.then=="function"?x.then(g=>o(null,g)).catch(o):o(null,x)}catch(x){o(x)}else m(e,n,i,r,o,p)}!e||!e[0]||this.store.addResource(e[0],n,i,r)}}}const Wu=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),We(t[1])&&(e.defaultValue=t[1]),We(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(i=>{e[i]=n[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Lg=t=>{var e,n;return We(t.ns)&&(t.ns=[t.ns]),We(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),We(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),((n=(e=t.supportedLngs)==null?void 0:e.indexOf)==null?void 0:n.call(e,"cimode"))<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),typeof t.initImmediate=="boolean"&&(t.initAsync=t.initImmediate),t},ol=()=>{},J1=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})},Ax="__i18next_supportNoticeShown",Q1=()=>typeof globalThis<"u"&&!!globalThis[Ax],ew=()=>{typeof globalThis<"u"&&(globalThis[Ax]=!0)},tw=t=>{var e,n,i,r,s,a,o,l,c,d,f,u,p;return!!(((i=(n=(e=t==null?void 0:t.modules)==null?void 0:e.backend)==null?void 0:n.name)==null?void 0:i.indexOf("Locize"))>0||((o=(a=(s=(r=t==null?void 0:t.modules)==null?void 0:r.backend)==null?void 0:s.constructor)==null?void 0:a.name)==null?void 0:o.indexOf("Locize"))>0||(c=(l=t==null?void 0:t.options)==null?void 0:l.backend)!=null&&c.backends&&t.options.backend.backends.some(m=>{var x,g,h;return((x=m==null?void 0:m.name)==null?void 0:x.indexOf("Locize"))>0||((h=(g=m==null?void 0:m.constructor)==null?void 0:g.name)==null?void 0:h.indexOf("Locize"))>0})||(f=(d=t==null?void 0:t.options)==null?void 0:d.backend)!=null&&f.projectId||(p=(u=t==null?void 0:t.options)==null?void 0:u.backend)!=null&&p.backendOptions&&t.options.backend.backendOptions.some(m=>m==null?void 0:m.projectId))};class io extends su{constructor(e={},n){if(super(),this.options=Lg(e),this.services={},this.logger=fi,this.modules={external:[]},J1(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(e={},n){this.isInitializing=!0,typeof e=="function"&&(n=e,e={}),e.defaultNS==null&&e.ns&&(We(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const i=Wu();this.options={...i,...this.options,...Lg(e)},this.options.interpolation={...i.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=i.overloadTranslationOptionHandler),this.options.showSupportNotice!==!1&&!tw(this)&&!Q1()&&(typeof console<"u"&&typeof console.info<"u"&&console.info("🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"),ew());const r=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?fi.init(r(this.modules.logger),this.options):fi.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=q1;const d=new Tg(this.options);this.store=new Eg(this.options.resources,this.options);const f=this.services;f.logger=fi,f.resourceStore=this.store,f.languageUtils=d,f.pluralResolver=new X1(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),c&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(f.formatter=r(c),f.formatter.init&&f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new Rg(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new Z1(r(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",(p,...m)=>{this.emit(p,...m)}),this.modules.languageDetector&&(f.languageDetector=r(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=r(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new Nc(this.services,this.options),this.translator.on("*",(p,...m)=>{this.emit(p,...m)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,n||(n=ol),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...d)=>this.store[c](...d)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...d)=>(this.store[c](...d),this)});const o=Ca(),l=()=>{const c=(d,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),o.resolve(f),n(d,f)};if(this.languages&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),o}loadResources(e,n=ol){var s,a;let i=n;const r=We(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((r==null?void 0:r.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],l=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(f=>{f!=="cimode"&&o.indexOf(f)<0&&o.push(f)})};r?l(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(d=>l(d)),(a=(s=this.options.preload)==null?void 0:s.forEach)==null||a.call(s,c=>l(c)),this.services.backendConnector.load(o,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(c)})}else i(null)}reloadResources(e,n,i){const r=Ca();return typeof e=="function"&&(i=e,e=void 0),typeof n=="function"&&(i=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),i||(i=ol),this.services.backendConnector.reload(e,n,s=>{r.resolve(),i(s)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&bx.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let n=0;n<this.languages.length;n++){const i=this.languages[n];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,n){this.isLanguageChangingTo=e;const i=Ca();this.emit("languageChanging",e);const r=o=>{this.language=o,this.languages=this.services.languageUtils.toResolveHierarchy(o),this.resolvedLanguage=void 0,this.setResolvedLanguage(o)},s=(o,l)=>{l?this.isLanguageChangingTo===e&&(r(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,i.resolve((...c)=>this.t(...c)),n&&n(o,(...c)=>this.t(...c))},a=o=>{var d,f;!e&&!o&&this.services.languageDetector&&(o=[]);const l=We(o)?o:o&&o[0],c=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(We(o)?[o]:o);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),(f=(d=this.services.languageDetector)==null?void 0:d.cacheUserLanguage)==null||f.call(d,c)),this.loadResources(c,u=>{s(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),i}getFixedT(e,n,i){const r=(s,a,...o)=>{let l;typeof a!="object"?l=this.options.overloadTranslationOptionHandler([s,a].concat(o)):l={...a},l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const c={...this.options,...l},d=this.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(s)?f=s.map(u=>(typeof u=="function"&&(u=no(u,c)),`${l.keyPrefix}${d}${u}`)):(typeof s=="function"&&(s=no(s,c)),f=l.keyPrefix?`${l.keyPrefix}${d}${s}`:s),this.t(f,l)};return We(e)?r.lng=e:r.lngs=e,r.ns=n,r.keyPrefix=i,r}t(...e){var n;return(n=this.translator)==null?void 0:n.translate(...e)}exists(...e){var n;return(n=this.translator)==null?void 0:n.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,n={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=n.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(o,l)=>{const c=this.services.backendConnector.state[`${o}|${l}`];return c===-1||c===0||c===2};if(n.precheck){const o=n.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!r||a(s,e)))}loadNamespaces(e,n){const i=Ca();return this.options.ns?(We(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),n&&n(r)}),i):(n&&n(),Promise.resolve())}loadLanguages(e,n){const i=Ca();We(e)&&(e=[e]);const r=this.options.preload||[],s=e.filter(a=>r.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return s.length?(this.options.preload=r.concat(s),this.loadResources(a=>{i.resolve(),n&&n(a)}),i):(n&&n(),Promise.resolve())}dir(e){var r,s;if(e||(e=this.resolvedLanguage||(((r=this.languages)==null?void 0:r.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const a=new Intl.Locale(e);if(a&&a.getTextInfo){const o=a.getTextInfo();if(o&&o.direction)return o.direction}}catch{}const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((s=this.services)==null?void 0:s.languageUtils)||new Tg(Wu());return e.toLowerCase().indexOf("-latn")>1?"ltr":n.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},n){const i=new io(e,n);return i.createInstance=io.createInstance,i}cloneInstance(e={},n=ol){const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},s=new io(r);if((e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(o=>{s[o]=this[o]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i){const o=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},l[c]=Object.keys(l[c]).reduce((d,f)=>(d[f]={...l[c][f]},d),l[c]),l),{});s.store=new Eg(o,r),s.services.resourceStore=s.store}if(e.interpolation){const l={...Wu().interpolation,...this.options.interpolation,...e.interpolation},c={...r,interpolation:l};s.services.interpolator=new Rg(c)}return s.translator=new Nc(s.services,r),s.translator.on("*",(o,...l)=>{s.emit(o,...l)}),s.init(r,n),s.translator.options=r,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Xt=io.createInstance();Xt.createInstance;Xt.dir;Xt.init;Xt.loadResources;Xt.reloadResources;Xt.use;Xt.changeLanguage;Xt.getFixedT;Xt.t;Xt.exists;Xt.setDefaultNamespace;Xt.hasLoadedNamespace;Xt.loadNamespaces;Xt.loadLanguages;const nw=(t,e,n,i)=>{var s,a,o,l;const r=[n,{code:e,...i||{}}];if((a=(s=t==null?void 0:t.services)==null?void 0:s.logger)!=null&&a.forward)return t.services.logger.forward(r,"warn","react-i18next::",!0);ns(r[0])&&(r[0]=`react-i18next:: ${r[0]}`),(l=(o=t==null?void 0:t.services)==null?void 0:o.logger)!=null&&l.warn?t.services.logger.warn(...r):console!=null&&console.warn&&console.warn(...r)},Ng={},Rx=(t,e,n,i)=>{ns(n)&&Ng[n]||(ns(n)&&(Ng[n]=new Date),nw(t,e,n,i))},Px=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},Tf=(t,e,n)=>{t.loadNamespaces(e,Px(t,n))},Dg=(t,e,n,i)=>{if(ns(n)&&(n=[n]),t.options.preload&&t.options.preload.indexOf(e)>-1)return Tf(t,n,i);n.forEach(r=>{t.options.ns.indexOf(r)<0&&t.options.ns.push(r)}),t.loadLanguages(e,Px(t,i))},iw=(t,e,n={})=>!e.languages||!e.languages.length?(Rx(e,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:e.languages}),!0):e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,r)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!r(i.isLanguageChangingTo,t))return!1}}),ns=t=>typeof t=="string",rw=t=>typeof t=="object"&&t!==null,sw=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,aw={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ow=t=>aw[t],lw=t=>t.replace(sw,ow);let bf={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:lw,transDefaultProps:void 0};const cw=(t={})=>{bf={...bf,...t}},uw=()=>bf;let Lx;const dw=t=>{Lx=t},fw=()=>Lx,hw={type:"3rdParty",init(t){cw(t.options.react),dw(t)}},pw=D.createContext();class mw{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var Nx={exports:{}},Dx={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=D;function gw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vw=typeof Object.is=="function"?Object.is:gw,_w=ia.useState,xw=ia.useEffect,yw=ia.useLayoutEffect,Sw=ia.useDebugValue;function Mw(t,e){var n=e(),i=_w({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return yw(function(){r.value=n,r.getSnapshot=e,ju(r)&&s({inst:r})},[t,n,e]),xw(function(){return ju(r)&&s({inst:r}),t(function(){ju(r)&&s({inst:r})})},[t]),Sw(n),n}function ju(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vw(t,n)}catch{return!0}}function Ew(t,e){return e()}var ww=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ew:Mw;Dx.useSyncExternalStore=ia.useSyncExternalStore!==void 0?ia.useSyncExternalStore:ww;Nx.exports=Dx;var Tw=Nx.exports;const bw=(t,e)=>{if(ns(e))return e;if(rw(e)&&ns(e.defaultValue))return e.defaultValue;if(typeof t=="function")return"";if(Array.isArray(t)){const n=t[t.length-1];return typeof n=="function"?"":n}return t},Cw={t:bw,ready:!1},Aw=()=>()=>{},Pr=(t,e={})=>{var T,F,R;const{i18n:n}=e,{i18n:i,defaultNS:r}=D.useContext(pw)||{},s=n||i||fw();s&&!s.reportNamespaces&&(s.reportNamespaces=new mw),s||Rx(s,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const a=D.useMemo(()=>{var U;return{...uw(),...(U=s==null?void 0:s.options)==null?void 0:U.react,...e}},[s,e]),{useSuspense:o,keyPrefix:l}=a,c=r||((T=s==null?void 0:s.options)==null?void 0:T.defaultNS),d=ns(c)?[c]:c||["translation"],f=D.useMemo(()=>d,d);(R=(F=s==null?void 0:s.reportNamespaces)==null?void 0:F.addUsedNamespaces)==null||R.call(F,f);const u=D.useRef(0),p=D.useCallback(U=>{if(!s)return Aw;const{bindI18n:I,bindI18nStore:B}=a,O=()=>{u.current+=1,U()};return I&&s.on(I,O),B&&s.store.on(B,O),()=>{I&&I.split(" ").forEach(G=>s.off(G,O)),B&&B.split(" ").forEach(G=>s.store.off(G,O))}},[s,a]),m=D.useRef(),x=D.useCallback(()=>{if(!s)return Cw;const U=!!(s.isInitialized||s.initializedStoreOnce)&&f.every(z=>iw(z,s,a)),I=e.lng||s.language,B=u.current,O=m.current;if(O&&O.ready===U&&O.lng===I&&O.keyPrefix===l&&O.revision===B)return O;const N={t:s.getFixedT(I,a.nsMode==="fallback"?f:f[0],l),ready:U,lng:I,keyPrefix:l,revision:B};return m.current=N,N},[s,f,l,a,e.lng]),[g,h]=D.useState(0),{t:v,ready:_}=Tw.useSyncExternalStore(p,x,x);D.useEffect(()=>{if(s&&!_&&!o){const U=()=>h(I=>I+1);e.lng?Dg(s,e.lng,f,U):Tf(s,f,U)}},[s,e.lng,f,_,o,g]);const S=s||{},b=D.useRef(null),C=D.useRef(),A=U=>{const I=Object.getOwnPropertyDescriptors(U);I.__original&&delete I.__original;const B=Object.create(Object.getPrototypeOf(U),I);if(!Object.prototype.hasOwnProperty.call(B,"__original"))try{Object.defineProperty(B,"__original",{value:U,writable:!1,enumerable:!1,configurable:!1})}catch{}return B},y=D.useMemo(()=>{const U=S,I=U==null?void 0:U.language;let B=U;U&&(b.current&&b.current.__original===U?C.current!==I?(B=A(U),b.current=B,C.current=I):B=b.current:(B=A(U),b.current=B,C.current=I));const O=[v,B,_];return O.t=v,O.i18n=B,O.ready=_,O},[v,S,_,S.resolvedLanguage,S.language,S.languages]);if(s&&o&&!_)throw new Promise(U=>{const I=()=>U();e.lng?Dg(s,e.lng,f,I):Tf(s,f,I)});return y},Cf="kin-language",Af="en",Rf=["en","es"],Rw={en:{translation:{common:{loading:"Loading...",loadingFamilyTree:"Loading family tree...",cancel:"Cancel",save:"Save",copy:"Copy",copied:"Copied",none:"none",unknown:"Unknown",open:"Open",view:"View",focus:"Focus",add:"Add",dismiss:"Dismiss",remove:"Remove"},languageToggle:{label:"Language",english:"English",spanish:"Spanish"},topBar:{searchPlaceholder:"Search family members...",noMatches:"No matching family members found.",findConnection:"Find Connection",addPerson:"Add Person",resetView:"Reset View",openMenu:"Open mobile actions",closeMenu:"Close mobile actions",switchTo2d:"Switch to 2D view",switchTo3d:"Switch to 3D view",view2d:"2D View",view3d:"3D View",viewingConnectionsFor:"Viewing connections for",clearFocus:"Clear focus",pathLabel:"Find Connection",pathStepOne:"Step 1: Click the first person in the tree.",pathStepTwo:"Step 2: {{name}} selected. Click the second person.",pathFound:"Connection found. Review the highlighted path below.",firstPerson:"First person",secondPerson:"Second person",notSelectedYet:"Not selected yet",cancelPath:"Cancel",selectedFirst:"<strong>{{name}}</strong> selected as the first person. Click a second person to see how they are connected.",noConnection:"No connection found between <strong>{{first}}</strong> and <strong>{{second}}</strong>.",connectionFound:"<strong>{{first}}</strong> and <strong>{{second}}</strong> are connected by <strong>{{relationships}} relationship{{relationshipSuffix}}</strong> across <strong>{{people}} node{{peopleSuffix}}</strong>."},addPersonModal:{title:"Add to Family Tree",firstName:"First Name",lastName:"Last Name",maidenName:"Maiden Name",gender:"Gender",birthYear:"Birth Year",deathYear:"Death Year",branch:"Branch",biography:"Biography",parent1:"Parent 1",parent2:"Parent 2",spouse:"Spouse / Partner",addPerson:"Add Person",saving:"Saving...",duplicateTitle:"Possible duplicates found:",duplicateMatch:"{{score}}% match",firstNameRequired:"First and last name required.",placeholders:{firstName:"Maria",lastName:"Garcia",birthYear:"1945",deathYear:"if applicable",biography:"A few words about this person..."},genderOptions:{male:"Male",female:"Female",other:"Other / Unknown"},branchOptions:{paternal:"Paternal",maternal:"Maternal",sibling:"Sibling branch",married:"Married in"},noneOption:"none"},detailPanel:{personDetailsViews:"Person details views",profileDetails:"Profile Details",shareExplore:"Share & Explore",biography:"Biography",noBiography:"No biography on record.",details:"Details",connections:"Connections",noConnections:"No connections yet.",addConnection:"Add Connection",parentOf:"Parent of {{name}}",childOf:"Child of {{name}}",spousePartner:"Spouse / Partner",spouseAlreadyLinked:"Spouse / Partner (already linked)",sibling:"Sibling",selectPerson:"select person",spouseRule:"Only people without an existing spouse can be linked as a partner.",saving:"Saving...",documents:"Documents",noDocuments:"No documents added yet.",storiesMemories:"Stories & Memories",noStories:"No stories yet. Be the first to share a memory.",addStory:"Add Story",storyTitlePlaceholder:"Story title",storyBodyPlaceholder:"Share a memory or story...",uploadPhoto:"Upload Photo",failedPhoto:"Failed to save photo",connectionAdded:"Connection added",failedConnectionAdd:"Failed to add connection",connectionRemoved:"Connection removed",failedConnectionRemove:"Failed to remove connection",storyAdded:"Story added",failedStory:"Failed to save story",publicPage:"Public Page",browseTitle:"What other relatives can browse",browseBody:"Use this view as the ancestry-style, read-only surface for stories, photos, and documents that should feel safe to explore.",openPublicPage:"Open Public Page",copyLink:"Copy Link",publicLinkCopied:"Public link copied",noPublicPage:"No public page has been generated for this person yet.",exploreSummary:"Explore Summary",stories:"Stories",photos:"Photos",documentsLabel:"Documents",storiesPeopleCanRead:"Stories People Can Read",noPublicStories:"No public stories are available for this person yet.",photosDocuments:"Photos & Documents",profilePhoto:"Profile photo",noPublicMedia:"No public photos or documents are available yet.",inviteLink:"Invite Link",inviteDescription:"Share this link so {{name}} can claim their profile:",profileStatus:"Profile Status",profileClaimed:"Profile Claimed",publicProfile:"Public Profile",publicUrlCopied:"Public URL copied",deceased:"Deceased",born:"b. {{year}}",unverify:"Unverify",verify:"Verify",unlock:"Unlock",lock:"Lock",verified:"Verified",unverified:"Unverified",locked:"Locked",unlocked:"Unlocked",removeConnection:"Remove connection",unknownAuthor:"Unknown"},joinPage:{verifyingInvite:"Verifying invite...",noToken:"No invite token provided.",invalidToken:"Invalid or expired invite token.",backToTree:"Back to family tree",invitedToClaim:"You've been invited to claim the profile for",createAccountLabel:"Enter your email to receive a magic link and claim this profile:",displayName:"Display Name",email:"Email Address",yourName:"Your name",yourEmail:"you@example.com",createAccountClaim:"Send Magic Link",creatingAccount:"Sending your magic link...",accountCreated:"Magic link sent.",magicLinkHint:"We will email you a secure link. Opening it will sign you in and claim this profile.",openEmail:"Open the email on this device to finish claiming the profile.",openTree:"Open Family Tree",emailRequired:"Email is required.",claimFailed:"Failed to send magic link."},authVerify:{missingToken:"The sign-in link is missing a token.",verifying:"Verifying your magic link...",claiming:"Finishing your profile claim...",success:"You are signed in. Redirecting to the family tree...",failed:"The magic link is invalid or has expired."},publicProfile:{profileNotFound:"Profile not found",backToTree:"Back to Tree",living:"Living",biography:"Biography",details:"Details",stories:"Stories",photos:"Photos",documents:"Documents",storiesMemories:"Stories & Memories",noPublicStories:"No public stories have been shared yet.",photosDocuments:"Photos & Documents",photoArchiveItem:"Photo archive item",openDocument:"Open document",noPublicMedia:"No public photos or documents are available yet.",unknownAuthor:"Unknown"},app:{proposalUpdate:"Proposal Update",proposalApproved:"Proposal approved",proposalApprovedBody:"The suggested change was applied to the family tree.",proposalRejected:"Proposal rejected",proposalRejectedBody:"The suggested change was declined and no tree data was changed.",proposalUnavailable:"Proposal unavailable",proposalUnavailableBody:"That approval link has already been used or is no longer valid.",dismissProposalNotice:"Dismiss proposal notice",failedLoadData:"Failed to load data from server",photoSaved:"Photo saved",noActiveTree:"No active tree selected",personAdded:"{{name}} added to the tree!",failedAddPerson:"Failed to add person"}}},es:{translation:{common:{loading:"Cargando...",loadingFamilyTree:"Cargando arbol familiar...",cancel:"Cancelar",save:"Guardar",copy:"Copiar",copied:"Copiado",none:"ninguno",unknown:"Desconocido",open:"Abrir",view:"Ver",focus:"Centrar",add:"Agregar",dismiss:"Cerrar",remove:"Quitar"},languageToggle:{label:"Idioma",english:"Ingles",spanish:"Espanol"},topBar:{searchPlaceholder:"Buscar familiares...",noMatches:"No se encontraron familiares.",findConnection:"Buscar conexion",addPerson:"Agregar persona",resetView:"Restablecer vista",openMenu:"Abrir acciones moviles",closeMenu:"Cerrar acciones moviles",switchTo2d:"Cambiar a vista 2D",switchTo3d:"Cambiar a vista 3D",view2d:"Vista 2D",view3d:"Vista 3D",viewingConnectionsFor:"Viendo conexiones de",clearFocus:"Quitar foco",pathLabel:"Buscar conexion",pathStepOne:"Paso 1: haz clic en la primera persona del arbol.",pathStepTwo:"Paso 2: {{name}} seleccionado. Haz clic en la segunda persona.",pathFound:"Conexion encontrada. Revisa la ruta resaltada abajo.",firstPerson:"Primera persona",secondPerson:"Segunda persona",notSelectedYet:"Aun no seleccionada",cancelPath:"Cancelar",selectedFirst:"<strong>{{name}}</strong> fue seleccionado primero. Haz clic en una segunda persona para ver como se conectan.",noConnection:"No se encontro conexion entre <strong>{{first}}</strong> y <strong>{{second}}</strong>.",connectionFound:"<strong>{{first}}</strong> y <strong>{{second}}</strong> estan conectados por <strong>{{relationships}} relacion{{relationshipSuffix}}</strong> a traves de <strong>{{people}} nodo{{peopleSuffix}}</strong>."},addPersonModal:{title:"Agregar al arbol familiar",firstName:"Nombre",lastName:"Apellido",maidenName:"Apellido de soltera",gender:"Genero",birthYear:"Ano de nacimiento",deathYear:"Ano de fallecimiento",branch:"Rama",biography:"Biografia",parent1:"Progenitor 1",parent2:"Progenitor 2",spouse:"Esposo/a o pareja",addPerson:"Agregar persona",saving:"Guardando...",duplicateTitle:"Posibles duplicados encontrados:",duplicateMatch:"{{score}}% de coincidencia",firstNameRequired:"Se requieren nombre y apellido.",placeholders:{firstName:"Maria",lastName:"Garcia",birthYear:"1945",deathYear:"si corresponde",biography:"Unas palabras sobre esta persona..."},genderOptions:{male:"Masculino",female:"Femenino",other:"Otro / Desconocido"},branchOptions:{paternal:"Paterna",maternal:"Materna",sibling:"Rama de hermanos",married:"Ingreso por matrimonio"},noneOption:"ninguno"},detailPanel:{personDetailsViews:"Vistas de detalles de la persona",profileDetails:"Detalles del perfil",shareExplore:"Compartir y explorar",biography:"Biografia",noBiography:"No hay biografia registrada.",details:"Detalles",connections:"Conexiones",noConnections:"Aun no hay conexiones.",addConnection:"Agregar conexion",parentOf:"Progenitor de {{name}}",childOf:"Hijo/a de {{name}}",spousePartner:"Esposo/a o pareja",spouseAlreadyLinked:"Esposo/a o pareja (ya vinculado)",sibling:"Hermano/a",selectPerson:"selecciona una persona",spouseRule:"Solo se puede vincular como pareja a personas sin un conyuge existente.",saving:"Guardando...",documents:"Documentos",noDocuments:"Todavia no hay documentos.",storiesMemories:"Historias y recuerdos",noStories:"Todavia no hay historias. Comparte el primer recuerdo.",addStory:"Agregar historia",storyTitlePlaceholder:"Titulo de la historia",storyBodyPlaceholder:"Comparte un recuerdo o una historia...",uploadPhoto:"Subir foto",failedPhoto:"No se pudo guardar la foto",connectionAdded:"Conexion agregada",failedConnectionAdd:"No se pudo agregar la conexion",connectionRemoved:"Conexion eliminada",failedConnectionRemove:"No se pudo eliminar la conexion",storyAdded:"Historia agregada",failedStory:"No se pudo guardar la historia",publicPage:"Pagina publica",browseTitle:"Lo que otros familiares pueden explorar",browseBody:"Usa esta vista como una superficie publica y de solo lectura para historias, fotos y documentos.",openPublicPage:"Abrir pagina publica",copyLink:"Copiar enlace",publicLinkCopied:"Enlace publico copiado",noPublicPage:"Todavia no se genero una pagina publica para esta persona.",exploreSummary:"Resumen para explorar",stories:"Historias",photos:"Fotos",documentsLabel:"Documentos",storiesPeopleCanRead:"Historias publicas",noPublicStories:"Todavia no hay historias publicas para esta persona.",photosDocuments:"Fotos y documentos",profilePhoto:"Foto de perfil",noPublicMedia:"Todavia no hay fotos o documentos publicos.",inviteLink:"Enlace de invitacion",inviteDescription:"Comparte este enlace para que {{name}} reclame su perfil:",profileStatus:"Estado del perfil",profileClaimed:"Perfil reclamado",publicProfile:"Perfil publico",publicUrlCopied:"URL publica copiada",deceased:"Fallecido/a",born:"n. {{year}}",unverify:"Quitar verificacion",verify:"Verificar",unlock:"Desbloquear",lock:"Bloquear",verified:"Verificado",unverified:"Sin verificacion",locked:"Bloqueado",unlocked:"Desbloqueado",removeConnection:"Eliminar conexion",unknownAuthor:"Desconocido"},joinPage:{verifyingInvite:"Verificando invitacion...",noToken:"No se proporciono un token de invitacion.",invalidToken:"El token es invalido o vencio.",backToTree:"Volver al arbol familiar",invitedToClaim:"Has sido invitado/a a reclamar el perfil de",createAccountLabel:"Ingresa tu correo para recibir un enlace magico y reclamar este perfil:",displayName:"Nombre visible",email:"Correo electronico",yourName:"Tu nombre",yourEmail:"tu@ejemplo.com",createAccountClaim:"Enviar enlace magico",creatingAccount:"Enviando tu enlace magico...",accountCreated:"Enlace magico enviado.",magicLinkHint:"Te enviaremos un enlace seguro. Al abrirlo, iniciaras sesion y reclamaras este perfil.",openEmail:"Abre el correo en este dispositivo para terminar de reclamar el perfil.",openTree:"Abrir arbol familiar",emailRequired:"El correo es obligatorio.",claimFailed:"No se pudo enviar el enlace magico."},authVerify:{missingToken:"Al enlace de acceso le falta el token.",verifying:"Verificando tu enlace magico...",claiming:"Terminando de reclamar tu perfil...",success:"Sesion iniciada. Redirigiendo al arbol familiar...",failed:"El enlace magico es invalido o vencio."},publicProfile:{profileNotFound:"Perfil no encontrado",backToTree:"Volver al arbol",living:"Con vida",biography:"Biografia",details:"Detalles",stories:"Historias",photos:"Fotos",documents:"Documentos",storiesMemories:"Historias y recuerdos",noPublicStories:"Todavia no se compartieron historias publicas.",photosDocuments:"Fotos y documentos",photoArchiveItem:"Elemento fotografico del archivo",openDocument:"Abrir documento",noPublicMedia:"Todavia no hay fotos o documentos publicos.",unknownAuthor:"Desconocido"},app:{proposalUpdate:"Actualizacion de propuesta",proposalApproved:"Propuesta aprobada",proposalApprovedBody:"El cambio sugerido fue aplicado al arbol familiar.",proposalRejected:"Propuesta rechazada",proposalRejectedBody:"El cambio sugerido fue rechazado y no se modificaron datos.",proposalUnavailable:"Propuesta no disponible",proposalUnavailableBody:"Ese enlace ya fue usado o ya no es valido.",dismissProposalNotice:"Cerrar aviso de propuesta",failedLoadData:"No se pudieron cargar los datos del servidor",photoSaved:"Foto guardada",noActiveTree:"No hay un arbol activo seleccionado",personAdded:"{{name}} fue agregado/a al arbol",failedAddPerson:"No se pudo agregar la persona"}}}};function Pw(){var n;if(typeof window>"u")return Af;const t=window.localStorage.getItem(Cf);if(t&&Rf.includes(t))return t;const e=(n=window.navigator.language)==null?void 0:n.slice(0,2).toLowerCase();return Rf.includes(e)?e:Af}Xt.use(hw).init({resources:Rw,lng:Pw(),fallbackLng:Af,supportedLngs:Rf,interpolation:{escapeValue:!1}});typeof window<"u"&&(window.localStorage.setItem(Cf,Xt.language.slice(0,2)),document.documentElement.lang=Xt.language.slice(0,2),Xt.on("languageChanged",t=>{const e=t.slice(0,2);window.localStorage.setItem(Cf,e),document.documentElement.lang=e}));/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cp="183",Lw=0,Ig=1,Nw=2,Kl=1,Dw=2,Wa=3,br=0,Sn=1,Di=2,ki=0,Xs=1,Ug=2,Fg=3,Og=4,Iw=5,Gr=100,Uw=101,Fw=102,Ow=103,kw=104,Bw=200,zw=201,Vw=202,Hw=203,Pf=204,Lf=205,Gw=206,Ww=207,jw=208,Xw=209,$w=210,Yw=211,qw=212,Kw=213,Zw=214,Nf=0,Df=1,If=2,ra=3,Uf=4,Ff=5,Of=6,kf=7,Ix=0,Jw=1,Qw=2,_i=0,Ux=1,Fx=2,Ox=3,kx=4,Bx=5,zx=6,Vx=7,Hx=300,is=301,sa=302,Xu=303,$u=304,au=306,Bf=1e3,Fi=1001,zf=1002,Kt=1003,eT=1004,ll=1005,Zt=1006,Yu=1007,pr=1008,Cn=1009,Gx=1010,Wx=1011,bo=1012,Ap=1013,Si=1014,hi=1015,Xi=1016,Rp=1017,Pp=1018,Co=1020,jx=35902,Xx=35899,$x=1021,Yx=1022,Qn=1023,$i=1026,Yr=1027,qx=1028,Lp=1029,aa=1030,Np=1031,Dp=1033,Zl=33776,Jl=33777,Ql=33778,ec=33779,Vf=35840,Hf=35841,Gf=35842,Wf=35843,jf=36196,Xf=37492,$f=37496,Yf=37488,qf=37489,Kf=37490,Zf=37491,Jf=37808,Qf=37809,eh=37810,th=37811,nh=37812,ih=37813,rh=37814,sh=37815,ah=37816,oh=37817,lh=37818,ch=37819,uh=37820,dh=37821,fh=36492,hh=36494,ph=36495,mh=36283,gh=36284,vh=36285,_h=36286,tT=3200,nT=0,iT=1,dr="",bn="srgb",oa="srgb-linear",Dc="linear",ft="srgb",cs=7680,kg=519,rT=512,sT=513,aT=514,Ip=515,oT=516,lT=517,Up=518,cT=519,xh=35044,Bg="300 es",pi=2e3,Ao=2001;function uT(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ic(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dT(){const t=Ic("canvas");return t.style.display="block",t}const zg={};function Uc(...t){const e="THREE."+t.shift();console.log(e,...t)}function Kx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function je(...t){t=Kx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function at(...t){t=Kx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Fc(...t){const e=t.join(" ");e in zg||(zg[e]=!0,je(...t))}function fT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const hT={[Nf]:Df,[If]:Of,[Uf]:kf,[ra]:Ff,[Df]:Nf,[Of]:If,[kf]:Uf,[Ff]:ra};class pa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vg=1234567;const ro=Math.PI/180,Ro=180/Math.PI;function Bi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function rt(t,e,n){return Math.max(e,Math.min(n,t))}function Fp(t,e){return(t%e+e)%e}function pT(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function mT(t,e,n){return t!==e?(n-t)/(e-t):0}function so(t,e,n){return(1-n)*t+n*e}function gT(t,e,n,i){return so(t,e,1-Math.exp(-n*i))}function vT(t,e=1){return e-Math.abs(Fp(t,e*2)-e)}function _T(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function xT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function yT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ST(t,e){return t+Math.random()*(e-t)}function MT(t){return t*(.5-Math.random())}function ET(t){t!==void 0&&(Vg=t);let e=Vg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wT(t){return t*ro}function TT(t){return t*Ro}function bT(t){return(t&t-1)===0&&t!==0}function CT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function AT(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function RT(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),f=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*f,l*u,o*c);break;case"YZY":t.set(l*u,o*d,l*f,o*c);break;case"ZXZ":t.set(l*f,l*u,o*d,o*c);break;case"XZX":t.set(o*d,l*m,l*p,o*c);break;case"YXY":t.set(l*p,o*d,l*m,o*c);break;case"ZYZ":t.set(l*m,l*p,o*d,o*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ht(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const PT={DEG2RAD:ro,RAD2DEG:Ro,generateUUID:Bi,clamp:rt,euclideanModulo:Fp,mapLinear:pT,inverseLerp:mT,lerp:so,damp:gT,pingpong:vT,smoothstep:_T,smootherstep:xT,randInt:yT,randFloat:ST,randFloatSpread:MT,seededRandom:ET,degToRad:wT,radToDeg:TT,isPowerOfTwo:bT,ceilPowerOfTwo:CT,floorPowerOfTwo:AT,setQuaternionFromProperEuler:RT,normalize:ht,denormalize:Jn};class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ma{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3],u=s[a+0],p=s[a+1],m=s[a+2],x=s[a+3];if(f!==x||l!==u||c!==p||d!==m){let g=l*u+c*p+d*m+f*x;g<0&&(u=-u,p=-p,m=-m,x=-x,g=-g);let h=1-o;if(g<.9995){const v=Math.acos(g),_=Math.sin(v);h=Math.sin(h*v)/_,o=Math.sin(o*v)/_,l=l*h+u*o,c=c*h+p*o,d=d*h+m*o,f=f*h+x*o}else{l=l*h+u*o,c=c*h+p*o,d=d*h+m*o,f=f*h+x*o;const v=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=v,c*=v,d*=v,f*=v}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],u=s[a+1],p=s[a+2],m=s[a+3];return e[n]=o*m+d*f+l*p-c*u,e[n+1]=l*m+d*u+c*f-o*p,e[n+2]=c*m+d*p+o*u-l*f,e[n+3]=d*m-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),u=l(i/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=u*d*f+c*p*m,this._y=c*p*f-u*d*m,this._z=c*d*m+u*p*f,this._w=c*d*f-u*p*m;break;case"YXZ":this._x=u*d*f+c*p*m,this._y=c*p*f-u*d*m,this._z=c*d*m-u*p*f,this._w=c*d*f+u*p*m;break;case"ZXY":this._x=u*d*f-c*p*m,this._y=c*p*f+u*d*m,this._z=c*d*m+u*p*f,this._w=c*d*f-u*p*m;break;case"ZYX":this._x=u*d*f-c*p*m,this._y=c*p*f+u*d*m,this._z=c*d*m-u*p*f,this._w=c*d*f+u*p*m;break;case"YZX":this._x=u*d*f+c*p*m,this._y=c*p*f+u*d*m,this._z=c*d*m-u*p*f,this._w=c*d*f-u*p*m;break;case"XZY":this._x=u*d*f-c*p*m,this._y=c*p*f-u*d*m,this._z=c*d*m+u*p*f,this._w=c*d*f+u*p*m;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],u=i+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qu=new j,Hg=new ma;class Ke{constructor(e,n,i,r,s,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],p=i[5],m=i[8],x=r[0],g=r[3],h=r[6],v=r[1],_=r[4],S=r[7],b=r[2],C=r[5],A=r[8];return s[0]=a*x+o*v+l*b,s[3]=a*g+o*_+l*C,s[6]=a*h+o*S+l*A,s[1]=c*x+d*v+f*b,s[4]=c*g+d*_+f*C,s[7]=c*h+d*S+f*A,s[2]=u*x+p*v+m*b,s[5]=u*g+p*_+m*C,s[8]=u*h+p*S+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,u=o*l-d*s,p=c*s-a*l,m=n*f+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=u*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ku.makeScale(e,n)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new Ke,Gg=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wg=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LT(){const t={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=$s(r.r),r.g=$s(r.g),r.b=$s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dr?Dc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[oa]:{primaries:e,whitePoint:i,transfer:Dc,toXYZ:Gg,fromXYZ:Wg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Gg,fromXYZ:Wg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),t}const lt=LT();function zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $s(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let us;class NT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=Ic("canvas")),us.width=e.width,us.height=e.height;const r=us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ic("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DT=0;class Op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zu(r[a].image)):s.push(Zu(r[a]))}else s=Zu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Zu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?NT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let IT=0;const Ju=new j;class ln extends pa{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Fi,r=Fi,s=Zt,a=pr,o=Qn,l=Cn,c=ln.DEFAULT_ANISOTROPY,d=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=Bi(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bf:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bf:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Hx;ln.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],m=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,b=(h+1)/2,C=(d+u)/4,A=(f+x)/4,y=(m+g)/4;return _>S&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=A/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-x)/v,this.z=(u-d)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this.w=rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this.w=rt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UT extends pa{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new ln(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Op(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends UT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zx extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FT extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mt{constructor(e,n,i,r,s,a,o,l,c,d,f,u,p,m,x,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,u,p,m,x,g)}set(e,n,i,r,s,a,o,l,c,d,f,u,p,m,x,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=m,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*d,p=a*f,m=o*d,x=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+m*c,n[5]=u-x*c,n[9]=-o*l,n[2]=x-u*c,n[6]=m+p*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,m=c*d,x=c*f;n[0]=u+x*o,n[4]=m*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=p*o-m,n[6]=x+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,m=c*d,x=c*f;n[0]=u-x*o,n[4]=-a*f,n[8]=m+p*o,n[1]=p+m*o,n[5]=a*d,n[9]=x-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*d,p=a*f,m=o*d,x=o*f;n[0]=l*d,n[4]=m*c-p,n[8]=u*c+x,n[1]=l*f,n[5]=x*c+u,n[9]=p*c-m,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,m=o*l,x=o*c;n[0]=l*d,n[4]=x-u*f,n[8]=m*f+p,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*f+m,n[10]=u-x*f}else if(e.order==="XZY"){const u=a*l,p=a*c,m=o*l,x=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=u*f+x,n[5]=a*d,n[9]=p*f-m,n[2]=m*f-p,n[6]=o*d,n[10]=x*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OT,e,kT)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),tr.crossVectors(i,En),tr.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),tr.crossVectors(i,En)),tr.normalize(),cl.crossVectors(En,tr),r[0]=tr.x,r[4]=cl.x,r[8]=En.x,r[1]=tr.y,r[5]=cl.y,r[9]=En.y,r[2]=tr.z,r[6]=cl.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],p=i[13],m=i[2],x=i[6],g=i[10],h=i[14],v=i[3],_=i[7],S=i[11],b=i[15],C=r[0],A=r[4],y=r[8],T=r[12],F=r[1],R=r[5],U=r[9],I=r[13],B=r[2],O=r[6],G=r[10],N=r[14],z=r[3],$=r[7],te=r[11],re=r[15];return s[0]=a*C+o*F+l*B+c*z,s[4]=a*A+o*R+l*O+c*$,s[8]=a*y+o*U+l*G+c*te,s[12]=a*T+o*I+l*N+c*re,s[1]=d*C+f*F+u*B+p*z,s[5]=d*A+f*R+u*O+p*$,s[9]=d*y+f*U+u*G+p*te,s[13]=d*T+f*I+u*N+p*re,s[2]=m*C+x*F+g*B+h*z,s[6]=m*A+x*R+g*O+h*$,s[10]=m*y+x*U+g*G+h*te,s[14]=m*T+x*I+g*N+h*re,s[3]=v*C+_*F+S*B+b*z,s[7]=v*A+_*R+S*O+b*$,s[11]=v*y+_*U+S*G+b*te,s[15]=v*T+_*I+S*N+b*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],m=e[3],x=e[7],g=e[11],h=e[15],v=l*p-c*u,_=o*p-c*f,S=o*u-l*f,b=a*p-c*d,C=a*u-l*d,A=a*f-o*d;return n*(x*v-g*_+h*S)-i*(m*v-g*b+h*C)+r*(m*_-x*b+h*A)-s*(m*S-x*C+g*A)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],m=e[12],x=e[13],g=e[14],h=e[15],v=n*o-i*a,_=n*l-r*a,S=n*c-s*a,b=i*l-r*o,C=i*c-s*o,A=r*c-s*l,y=d*x-f*m,T=d*g-u*m,F=d*h-p*m,R=f*g-u*x,U=f*h-p*x,I=u*h-p*g,B=v*I-_*U+S*R+b*F-C*T+A*y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=(o*I-l*U+c*R)*O,e[1]=(r*U-i*I-s*R)*O,e[2]=(x*A-g*C+h*b)*O,e[3]=(u*C-f*A-p*b)*O,e[4]=(l*F-a*I-c*T)*O,e[5]=(n*I-r*F+s*T)*O,e[6]=(g*S-m*A-h*_)*O,e[7]=(d*A-u*S+p*_)*O,e[8]=(a*U-o*F+c*y)*O,e[9]=(i*F-n*U-s*y)*O,e[10]=(m*C-x*S+h*v)*O,e[11]=(f*S-d*C-p*v)*O,e[12]=(o*T-a*R-l*y)*O,e[13]=(n*R-i*T+r*y)*O,e[14]=(x*_-m*b-g*v)*O,e[15]=(d*b-f*_+u*v)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,u=s*c,p=s*d,m=s*f,x=a*d,g=a*f,h=o*f,v=l*c,_=l*d,S=l*f,b=i.x,C=i.y,A=i.z;return r[0]=(1-(x+h))*b,r[1]=(p+S)*b,r[2]=(m-_)*b,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(u+h))*C,r[6]=(g+v)*C,r[7]=0,r[8]=(m+_)*A,r[9]=(g-v)*A,r[10]=(1-(u+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ds.set(r[0],r[1],r[2]).length();const o=ds.set(r[4],r[5],r[6]).length(),l=ds.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Xn.copy(this);const c=1/a,d=1/o,f=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=d,Xn.elements[5]*=d,Xn.elements[6]*=d,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=pi,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let m,x;if(l)m=s/(a-s),x=a*s/(a-s);else if(o===pi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ao)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=pi,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,x;if(l)m=1/(a-s),x=a/(a-s);else if(o===pi)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ao)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ds=new j,Xn=new Mt,OT=new j(0,0,0),kT=new j(1,1,1),tr=new j,cl=new j,En=new j,jg=new Mt,Xg=new ma;class Yi{constructor(e=0,n=0,i=0,r=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xg.setFromEuler(this),this.setFromQuaternion(Xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class kp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BT=0;const $g=new j,fs=new ma,bi=new Mt,ul=new j,Aa=new j,zT=new j,VT=new ma,Yg=new j(1,0,0),qg=new j(0,1,0),Kg=new j(0,0,1),Zg={type:"added"},HT={type:"removed"},hs={type:"childadded",child:null},Qu={type:"childremoved",child:null};class $t extends pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new j,n=new Yi,i=new ma,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ke}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Yg,e)}rotateY(e){return this.rotateOnAxis(qg,e)}rotateZ(e){return this.rotateOnAxis(Kg,e)}translateOnAxis(e,n){return $g.copy(e).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yg,e)}translateY(e){return this.translateOnAxis(qg,e)}translateZ(e){return this.translateOnAxis(Kg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ul.copy(e):ul.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Aa,ul,this.up):bi.lookAt(ul,Aa,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(bi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zg),hs.child=e,this.dispatchEvent(hs),hs.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(HT),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zg),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,zT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,VT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new j(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dl extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GT={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(GT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new dl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function td(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=Fp(e,1),n=rt(n,0,1),i=rt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=td(a,s,e+1/3),this.g=td(a,s,e),this.b=td(a,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=Jx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return lt.workingToColorSpace(sn.copy(this),e),Math.round(rt(sn.r*255,0,255))*65536+Math.round(rt(sn.g*255,0,255))*256+Math.round(rt(sn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(sn.copy(this),n);const i=sn.r,r=sn.g,s=sn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=bn){lt.workingToColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,r=sn.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+n,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(nr),e.getHSL(fl);const i=so(nr.h,fl.h,n),r=so(nr.s,fl.s,n),s=so(nr.l,fl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new st;st.NAMES=Jx;class Bp{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=n,this.far=i}clone(){return new Bp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let WT=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};const $n=new j,Ci=new j,nd=new j,Ai=new j,ps=new j,ms=new j,Jg=new j,id=new j,rd=new j,sd=new j,ad=new Lt,od=new Lt,ld=new Lt;class On{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Ci.subVectors(i,n),nd.subVectors(e,n);const a=$n.dot($n),o=$n.dot(Ci),l=$n.dot(nd),c=Ci.dot(Ci),d=Ci.dot(nd),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-o*d)*u,m=(a*d-o*l)*u;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return ad.setScalar(0),od.setScalar(0),ld.setScalar(0),ad.fromBufferAttribute(e,n),od.fromBufferAttribute(e,i),ld.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ad,s.x),a.addScaledVector(od,s.y),a.addScaledVector(ld,s.z),a}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Ci.subVectors(e,n),$n.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),$n.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ps.subVectors(r,i),ms.subVectors(s,i),id.subVectors(e,i);const l=ps.dot(id),c=ms.dot(id);if(l<=0&&c<=0)return n.copy(i);rd.subVectors(e,r);const d=ps.dot(rd),f=ms.dot(rd);if(d>=0&&f<=d)return n.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(ps,a);sd.subVectors(e,s);const p=ps.dot(sd),m=ms.dot(sd);if(m>=0&&p<=m)return n.copy(s);const x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),n.copy(i).addScaledVector(ms,o);const g=d*m-p*f;if(g<=0&&f-d>=0&&p-m>=0)return Jg.subVectors(s,r),o=(f-d)/(f-d+(p-m)),n.copy(r).addScaledVector(Jg,o);const h=1/(g+x+u);return a=x*h,o=u*h,n.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bo{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hl.copy(i.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),pl.subVectors(this.max,Ra),gs.subVectors(e.a,Ra),vs.subVectors(e.b,Ra),_s.subVectors(e.c,Ra),ir.subVectors(vs,gs),rr.subVectors(_s,vs),Ir.subVectors(gs,_s);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Ir.z,Ir.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Ir.z,0,-Ir.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Ir.y,Ir.x,0];return!cd(n,gs,vs,_s,pl)||(n=[1,0,0,0,1,0,0,0,1],!cd(n,gs,vs,_s,pl))?!1:(ml.crossVectors(ir,rr),n=[ml.x,ml.y,ml.z],cd(n,gs,vs,_s,pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new j,new j,new j,new j,new j,new j,new j,new j],Yn=new j,hl=new Bo,gs=new j,vs=new j,_s=new j,ir=new j,rr=new j,Ir=new j,Ra=new j,pl=new j,ml=new j,Ur=new j;function cd(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ur.fromArray(t,s);const o=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=n.dot(Ur),d=i.dot(Ur);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ut=new j,gl=new nt;let jT=0;class ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xh,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gl.fromBufferAttribute(this,n),gl.applyMatrix3(e),this.setXY(n,gl.x,gl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jn(n,this.array)),n}setX(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jn(n,this.array)),n}setY(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jn(n,this.array)),n}setW(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xh&&(e.usage=this.usage),e}}class Qx extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ey extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yi extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}const XT=new Bo,Pa=new j,ud=new j;class ou{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const n=Pa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(ud)),this.expandByPoint(Pa.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $T=0;const Dn=new Mt,dd=new $t,xs=new j,wn=new Bo,La=new Bo,Gt=new j;class Gn extends pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uT(e)?ey:Qx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];La.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(wn.min,La.min),wn.expandByPoint(Gt),Gt.addVectors(wn.max,La.max),wn.expandByPoint(Gt)):(wn.expandByPoint(La.min),wn.expandByPoint(La.max))}wn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Gt.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(e,c),Gt.add(xs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new j,l[y]=new j;const c=new j,d=new j,f=new j,u=new nt,p=new nt,m=new nt,x=new j,g=new j;function h(y,T,F){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,F),u.fromBufferAttribute(s,y),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,F),d.sub(c),f.sub(c),p.sub(u),m.sub(u);const R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(x.copy(d).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(R),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(R),o[y].add(x),o[T].add(x),o[F].add(x),l[y].add(g),l[T].add(g),l[F].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,T=v.length;y<T;++y){const F=v[y],R=F.start,U=F.count;for(let I=R,B=R+U;I<B;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const _=new j,S=new j,b=new j,C=new j;function A(y){b.fromBufferAttribute(r,y),C.copy(b);const T=o[y];_.copy(T),_.sub(b.multiplyScalar(b.dot(T))).normalize(),S.crossVectors(C,T);const R=S.dot(l[y])<0?-1:1;a.setXYZW(y,_.x,_.y,_.z,R)}for(let y=0,T=v.length;y<T;++y){const F=v[y],R=F.start,U=F.count;for(let I=R,B=R+U;I<B;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,d=new j,f=new j;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*d;for(let h=0;h<d;h++)u[m++]=c[p++]}return new ni(u,d,f)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class YT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=xh,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new j;class Oc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(e),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(e),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.transformDirection(e),this.setXYZ(n,un.x,un.y,un.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Jn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Jn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Jn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Jn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Uc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new ni(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Oc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Uc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let qT=0;class ga extends pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=Xs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=Lf,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){je(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pf&&(i.blendSrc=this.blendSrc),this.blendDst!==Lf&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ty extends ga{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ys;const Na=new j,Ss=new j,Ms=new j,Es=new nt,Da=new nt,ny=new Mt,vl=new j,Ia=new j,_l=new j,Qg=new nt,fd=new nt,ev=new nt;class KT extends $t{constructor(e=new ty){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Gn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new YT(n,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Oc(i,3,0,!1)),ys.setAttribute("uv",new Oc(i,2,3,!1))}this.geometry=ys,this.material=e,this.center=new nt(.5,.5),this.count=1}raycast(e,n){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),ny.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Ms.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;xl(vl.set(-.5,-.5,0),Ms,a,Ss,r,s),xl(Ia.set(.5,-.5,0),Ms,a,Ss,r,s),xl(_l.set(.5,.5,0),Ms,a,Ss,r,s),Qg.set(0,0),fd.set(1,0),ev.set(1,1);let o=e.ray.intersectTriangle(vl,Ia,_l,!1,Na);if(o===null&&(xl(Ia.set(-.5,.5,0),Ms,a,Ss,r,s),fd.set(0,1),o=e.ray.intersectTriangle(vl,_l,Ia,!1,Na),o===null))return;const l=e.ray.origin.distanceTo(Na);l<e.near||l>e.far||n.push({distance:l,point:Na.clone(),uv:On.getInterpolation(Na,vl,Ia,_l,Qg,fd,ev,new nt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xl(t,e,n,i,r,s){Es.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Da.x=s*Es.x-r*Es.y,Da.y=r*Es.x+s*Es.y):Da.copy(Es),t.copy(e),t.x+=Da.x,t.y+=Da.y,t.applyMatrix4(ny)}const Pi=new j,hd=new j,yl=new j,sr=new j,pd=new j,Sl=new j,md=new j;class zp{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hd.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(hd);const s=e.distanceTo(n)*.5,a=-this.direction.dot(yl),o=sr.dot(this.direction),l=-sr.dot(yl),c=sr.lengthSq(),d=Math.abs(1-a*a);let f,u,p,m;if(d>0)if(f=a*l-o,u=a*o-l,m=s*d,f>=0)if(u>=-m)if(u<=m){const x=1/d;f*=x,u*=x,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hd).addScaledVector(yl,u),p}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,s){pd.subVectors(n,e),Sl.subVectors(i,e),md.crossVectors(pd,Sl);let a=this.direction.dot(md),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sr.subVectors(this.origin,e);const l=o*this.direction.dot(Sl.crossVectors(sr,Sl));if(l<0)return null;const c=o*this.direction.dot(pd.cross(sr));if(c<0||l+c>a)return null;const d=-o*sr.dot(md);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class iy extends ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=Ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tv=new Mt,Fr=new zp,Ml=new ou,nv=new j,El=new j,wl=new j,Tl=new j,gd=new j,bl=new j,iv=new j,Cl=new j;class qi extends $t{constructor(e=new Gn,n=new iy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(gd.fromBufferAttribute(f,e),a?bl.addScaledVector(gd,d):bl.addScaledVector(gd.sub(n),d))}n.add(bl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Ml,nv)===null||Fr.origin.distanceToSquared(nv)>(e.far-e.near)**2))&&(tv.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(tv),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],h=a[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,b=_;S<b;S+=3){const C=o.getX(S),A=o.getX(S+1),y=o.getX(S+2);r=Al(this,h,e,i,c,d,f,C,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,h=x;g<h;g+=3){const v=o.getX(g),_=o.getX(g+1),S=o.getX(g+2);r=Al(this,a,e,i,c,d,f,v,_,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],h=a[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,b=_;S<b;S+=3){const C=S,A=S+1,y=S+2;r=Al(this,h,e,i,c,d,f,C,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,h=x;g<h;g+=3){const v=g,_=g+1,S=g+2;r=Al(this,a,e,i,c,d,f,v,_,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function ZT(t,e,n,i,r,s,a,o){let l;if(e.side===Sn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===br,o),l===null)return null;Cl.copy(o),Cl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Cl);return c<n.near||c>n.far?null:{distance:c,point:Cl.clone(),object:t}}function Al(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,El),t.getVertexPosition(l,wl),t.getVertexPosition(c,Tl);const d=ZT(t,e,n,i,El,wl,Tl,iv);if(d){const f=new j;On.getBarycoord(iv,El,wl,Tl,f),r&&(d.uv=On.getInterpolatedAttribute(r,o,l,c,f,new nt)),s&&(d.uv1=On.getInterpolatedAttribute(s,o,l,c,f,new nt)),a&&(d.normal=On.getInterpolatedAttribute(a,o,l,c,f,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new j,materialIndex:0};On.getNormal(El,wl,Tl,u.normal),d.face=u,d.barycoord=f}return d}class JT extends ln{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Kt,d=Kt,f,u){super(null,a,o,l,c,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new j,QT=new j,eb=new Ke;class Hr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vd.subVectors(i,n).cross(QT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||eb.getNormalMatrix(e),r=this.coplanarPoint(vd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new ou,tb=new nt(.5,.5),Rl=new j;class Vp{constructor(e=new Hr,n=new Hr,i=new Hr,r=new Hr,s=new Hr,a=new Hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],f=s[5],u=s[6],p=s[7],m=s[8],x=s[9],g=s[10],h=s[11],v=s[12],_=s[13],S=s[14],b=s[15];if(r[0].setComponents(c-a,p-d,h-m,b-v).normalize(),r[1].setComponents(c+a,p+d,h+m,b+v).normalize(),r[2].setComponents(c+o,p+f,h+x,b+_).normalize(),r[3].setComponents(c-o,p-f,h-x,b-_).normalize(),i)r[4].setComponents(l,u,g,S).normalize(),r[5].setComponents(c-l,p-u,h-g,b-S).normalize();else if(r[4].setComponents(c-l,p-u,h-g,b-S).normalize(),n===pi)r[5].setComponents(c+l,p+u,h+g,b+S).normalize();else if(n===Ao)r[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const n=tb.distanceTo(e.center);return Or.radius=.7071067811865476+n,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Rl.x=r.normal.x>0?e.max.x:e.min.x,Rl.y=r.normal.y>0?e.max.y:e.min.y,Rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hp extends ga{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new j,Bc=new j,rv=new Mt,Ua=new zp,Pl=new ou,_d=new j,sv=new j;class nb extends $t{constructor(e=new Gn,n=new Hp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)kc.fromBufferAttribute(n,r-1),Bc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=kc.distanceTo(Bc);e.setAttribute("lineDistance",new yi(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(r),Pl.radius+=s,e.ray.intersectsSphere(Pl)===!1)return;rv.copy(r).invert(),Ua.copy(e.ray).applyMatrix4(rv);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){const h=d.getX(x),v=d.getX(x+1),_=Ll(this,e,Ua,l,h,v,x);_&&n.push(_)}if(this.isLineLoop){const x=d.getX(m-1),g=d.getX(p),h=Ll(this,e,Ua,l,x,g,m-1);h&&n.push(h)}}else{const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){const h=Ll(this,e,Ua,l,x,x+1,x);h&&n.push(h)}if(this.isLineLoop){const x=Ll(this,e,Ua,l,m-1,p,m-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ll(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(kc.fromBufferAttribute(o,r),Bc.fromBufferAttribute(o,s),n.distanceSqToSegment(kc,Bc,_d,sv)>i)return;_d.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(_d);if(!(c<e.near||c>e.far))return{distance:c,point:sv.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class ry extends ln{constructor(e=[],n=is,i,r,s,a,o,l,c,d){super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ib extends ln{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Po extends ln{constructor(e,n,i=Si,r,s,a,o=Kt,l=Kt,c,d=$i,f=1){if(d!==$i&&d!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class rb extends Po{constructor(e,n=Si,i=is,r,s,a=Kt,o=Kt,l,c=$i){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sy extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zo extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let u=0,p=0;m("z","y","x",-1,-1,i,n,e,a,s,0),m("z","y","x",1,-1,i,n,-e,a,s,1),m("x","z","y",1,1,e,i,n,r,a,2),m("x","z","y",1,-1,e,i,-n,r,a,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(d,3)),this.setAttribute("uv",new yi(f,2));function m(x,g,h,v,_,S,b,C,A,y,T){const F=S/A,R=b/y,U=S/2,I=b/2,B=C/2,O=A+1,G=y+1;let N=0,z=0;const $=new j;for(let te=0;te<G;te++){const re=te*R-I;for(let se=0;se<O;se++){const be=se*F-U;$[x]=be*v,$[g]=re*_,$[h]=B,c.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[h]=C>0?1:-1,d.push($.x,$.y,$.z),f.push(se/A),f.push(1-te/y),N+=1}}for(let te=0;te<y;te++)for(let re=0;re<A;re++){const se=u+re+O*te,be=u+re+O*(te+1),Ge=u+(re+1)+O*(te+1),Ze=u+(re+1)+O*te;l.push(se,be,Ze),l.push(be,Ge,Ze),z+=6}o.addGroup(p,z,T),p+=z,u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lu extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,u=n/l,p=[],m=[],x=[],g=[];for(let h=0;h<d;h++){const v=h*u-a;for(let _=0;_<c;_++){const S=_*f-s;m.push(S,-v,0),x.push(0,0,1),g.push(_/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const _=v+c*h,S=v+c*(h+1),b=v+1+c*(h+1),C=v+1+c*h;p.push(_,S,C),p.push(S,b,C)}this.setIndex(p),this.setAttribute("position",new yi(m,3)),this.setAttribute("normal",new yi(x,3)),this.setAttribute("uv",new yi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.width,e.height,e.widthSegments,e.heightSegments)}}function la(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=la(t[n]);for(const r in i)e[r]=i[r]}return e}function sb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ay(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const ab={clone:la,merge:dn};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends ga{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class cb extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ub extends ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class db extends ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fb extends Hp{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class oy extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const xd=new Mt,av=new j,ov=new j;class hb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vp,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;av.setFromMatrixPosition(e.matrixWorld),n.position.copy(av),ov.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ov),n.updateMatrixWorld(),xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ao||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nl=new j,Dl=new ma,oi=new j;class ly extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nl,Dl,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Dl,oi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Nl,Dl,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Dl,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new j,lv=new nt,cv=new nt;class Fn extends ly{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,lv,cv),n.subVectors(cv,lv)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ro*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Gp extends ly{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class pb extends hb{constructor(){super(new Gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mb extends oy{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new pb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class gb extends oy{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ws=-90,Ts=1;class vb extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(ws,Ts,e,n);r.layers=this.layers,this.add(r);const s=new Fn(ws,Ts,e,n);s.layers=this.layers,this.add(s);const a=new Fn(ws,Ts,e,n);a.layers=this.layers,this.add(a);const o=new Fn(ws,Ts,e,n);o.layers=this.layers,this.add(o);const l=new Fn(ws,Ts,e,n);l.layers=this.layers,this.add(l);const c=new Fn(ws,Ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(f,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class _b extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const uv=new Mt;class xb{constructor(e,n,i=0,r=1/0){this.ray=new zp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new kp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):at("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return uv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uv),this}intersectObject(e,n=!0,i=[]){return yh(e,this,i,n),i.sort(dv),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)yh(e[r],this,i,n);return i.sort(dv),i}}function dv(t,e){return t.distance-e.distance}function yh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)yh(s[a],e,n,!0)}}function fv(t,e,n,i){const r=yb(i);switch(n){case $x:return t*e;case qx:return t*e/r.components*r.byteLength;case Lp:return t*e/r.components*r.byteLength;case aa:return t*e*2/r.components*r.byteLength;case Np:return t*e*2/r.components*r.byteLength;case Yx:return t*e*3/r.components*r.byteLength;case Qn:return t*e*4/r.components*r.byteLength;case Dp:return t*e*4/r.components*r.byteLength;case Zl:case Jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ql:case ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hf:case Wf:return Math.max(t,16)*Math.max(e,8)/4;case Vf:case Gf:return Math.max(t,8)*Math.max(e,8)/2;case jf:case Xf:case Yf:case qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $f:case Kf:case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case fh:case hh:case ph:return Math.ceil(t/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vh:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yb(t){switch(t){case Cn:case Gx:return{byteLength:1,components:1};case bo:case Wx:case Xi:return{byteLength:2,components:1};case Rp:case Pp:return{byteLength:2,components:4};case Si:case Ap:case hi:return{byteLength:4,components:1};case jx:case Xx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cy(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Sb(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<f.length;p++){const m=f[u],x=f[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,m=f.length;p<m;p++){const x=f[p];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eb=`#ifdef USE_ALPHAHASH
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
#endif`,wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ab=`#ifdef USE_AOMAP
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
#endif`,Rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ub=`#ifdef USE_IRIDESCENCE
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
#endif`,Fb=`#ifdef USE_BUMPMAP
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
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jb=`#define PI 3.141592653589793
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
} // validated`,Xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$b=`vec3 transformedNormal = objectNormal;
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
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eC=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nC=`#ifdef USE_ENVMAP
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
#endif`,iC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rC=`#ifdef USE_ENVMAP
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
#endif`,sC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cC=`#ifdef USE_GRADIENTMAP
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
}`,uC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hC=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,pC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,mC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_C=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,yC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SC=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,MC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,EC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LC=`#if defined( USE_POINTS_UV )
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
#endif`,NC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WC=`#ifdef USE_NORMALMAP
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
#endif`,jC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$C=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ZC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lA=`#ifdef USE_SKINNING
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
#endif`,cA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uA=`#ifdef USE_SKINNING
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
#endif`,dA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pA=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mA=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gA=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MA=`uniform sampler2D t2D;
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
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,AA=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RA=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,PA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UA=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,FA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,OA=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,kA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,BA=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,zA=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,VA=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,HA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GA=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,WA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jA=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,XA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,$A=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,YA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,qA=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,KA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,JA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,QA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,eR=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Je={alphahash_fragment:Mb,alphahash_pars_fragment:Eb,alphamap_fragment:wb,alphamap_pars_fragment:Tb,alphatest_fragment:bb,alphatest_pars_fragment:Cb,aomap_fragment:Ab,aomap_pars_fragment:Rb,batching_pars_vertex:Pb,batching_vertex:Lb,begin_vertex:Nb,beginnormal_vertex:Db,bsdfs:Ib,iridescence_fragment:Ub,bumpmap_pars_fragment:Fb,clipping_planes_fragment:Ob,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Bb,clipping_planes_vertex:zb,color_fragment:Vb,color_pars_fragment:Hb,color_pars_vertex:Gb,color_vertex:Wb,common:jb,cube_uv_reflection_fragment:Xb,defaultnormal_vertex:$b,displacementmap_pars_vertex:Yb,displacementmap_vertex:qb,emissivemap_fragment:Kb,emissivemap_pars_fragment:Zb,colorspace_fragment:Jb,colorspace_pars_fragment:Qb,envmap_fragment:eC,envmap_common_pars_fragment:tC,envmap_pars_fragment:nC,envmap_pars_vertex:iC,envmap_physical_pars_fragment:pC,envmap_vertex:rC,fog_vertex:sC,fog_pars_vertex:aC,fog_fragment:oC,fog_pars_fragment:lC,gradientmap_pars_fragment:cC,lightmap_pars_fragment:uC,lights_lambert_fragment:dC,lights_lambert_pars_fragment:fC,lights_pars_begin:hC,lights_toon_fragment:mC,lights_toon_pars_fragment:gC,lights_phong_fragment:vC,lights_phong_pars_fragment:_C,lights_physical_fragment:xC,lights_physical_pars_fragment:yC,lights_fragment_begin:SC,lights_fragment_maps:MC,lights_fragment_end:EC,logdepthbuf_fragment:wC,logdepthbuf_pars_fragment:TC,logdepthbuf_pars_vertex:bC,logdepthbuf_vertex:CC,map_fragment:AC,map_pars_fragment:RC,map_particle_fragment:PC,map_particle_pars_fragment:LC,metalnessmap_fragment:NC,metalnessmap_pars_fragment:DC,morphinstance_vertex:IC,morphcolor_vertex:UC,morphnormal_vertex:FC,morphtarget_pars_vertex:OC,morphtarget_vertex:kC,normal_fragment_begin:BC,normal_fragment_maps:zC,normal_pars_fragment:VC,normal_pars_vertex:HC,normal_vertex:GC,normalmap_pars_fragment:WC,clearcoat_normal_fragment_begin:jC,clearcoat_normal_fragment_maps:XC,clearcoat_pars_fragment:$C,iridescence_pars_fragment:YC,opaque_fragment:qC,packing:KC,premultiplied_alpha_fragment:ZC,project_vertex:JC,dithering_fragment:QC,dithering_pars_fragment:eA,roughnessmap_fragment:tA,roughnessmap_pars_fragment:nA,shadowmap_pars_fragment:iA,shadowmap_pars_vertex:rA,shadowmap_vertex:sA,shadowmask_pars_fragment:aA,skinbase_vertex:oA,skinning_pars_vertex:lA,skinning_vertex:cA,skinnormal_vertex:uA,specularmap_fragment:dA,specularmap_pars_fragment:fA,tonemapping_fragment:hA,tonemapping_pars_fragment:pA,transmission_fragment:mA,transmission_pars_fragment:gA,uv_pars_fragment:vA,uv_pars_vertex:_A,uv_vertex:xA,worldpos_vertex:yA,background_vert:SA,background_frag:MA,backgroundCube_vert:EA,backgroundCube_frag:wA,cube_vert:TA,cube_frag:bA,depth_vert:CA,depth_frag:AA,distance_vert:RA,distance_frag:PA,equirect_vert:LA,equirect_frag:NA,linedashed_vert:DA,linedashed_frag:IA,meshbasic_vert:UA,meshbasic_frag:FA,meshlambert_vert:OA,meshlambert_frag:kA,meshmatcap_vert:BA,meshmatcap_frag:zA,meshnormal_vert:VA,meshnormal_frag:HA,meshphong_vert:GA,meshphong_frag:WA,meshphysical_vert:jA,meshphysical_frag:XA,meshtoon_vert:$A,meshtoon_frag:YA,points_vert:qA,points_frag:KA,shadow_vert:ZA,shadow_frag:JA,sprite_vert:QA,sprite_frag:eR},_e={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ui={basic:{uniforms:dn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:dn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:dn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:dn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:dn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new st(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:dn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:dn([_e.points,_e.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:dn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:dn([_e.common,_e.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:dn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:dn([_e.sprite,_e.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:dn([_e.common,_e.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:dn([_e.lights,_e.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ui.physical={uniforms:dn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Il={r:0,b:0,g:0},kr=new Yi,tR=new Mt;function nR(t,e,n,i,r,s){const a=new st(0);let o=r===!0?0:1,l,c,d=null,f=0,u=null;function p(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){const S=v.backgroundBlurriness>0;_=e.get(_,S)}return _}function m(v){let _=!1;const S=p(v);S===null?g(a,o):S&&S.isColor&&(g(S,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(v,_){const S=p(_);S&&(S.isCubeTexture||S.mapping===au)?(c===void 0&&(c=new qi(new zo(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:la(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),kr.copy(_.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tR.makeRotationFromEuler(kr)),c.material.toneMapped=lt.getTransfer(S.colorSpace)!==ft,(d!==S||f!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new qi(new lu(2,2),new Mi({name:"BackgroundMaterial",uniforms:la(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=lt.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,_){v.getRGB(Il,ay(t)),n.buffers.color.setClear(Il.r,Il.g,Il.b,_,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),o=_,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:x,dispose:h}}function iR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(R,U,I,B,O){let G=!1;const N=f(R,B,I,U);s!==N&&(s=N,c(s.object)),G=p(R,B,I,O),G&&m(R,B,I,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,S(R,U,I,B),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function d(R){return t.deleteVertexArray(R)}function f(R,U,I,B){const O=B.wireframe===!0;let G=i[U.id];G===void 0&&(G={},i[U.id]=G);const N=R.isInstancedMesh===!0?R.id:0;let z=G[N];z===void 0&&(z={},G[N]=z);let $=z[I.id];$===void 0&&($={},z[I.id]=$);let te=$[O];return te===void 0&&(te=u(l()),$[O]=te),te}function u(R){const U=[],I=[],B=[];for(let O=0;O<n;O++)U[O]=0,I[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:B,object:R,attributes:{},index:null}}function p(R,U,I,B){const O=s.attributes,G=U.attributes;let N=0;const z=I.getAttributes();for(const $ in z)if(z[$].location>=0){const re=O[$];let se=G[$];if(se===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),re===void 0||re.attribute!==se||se&&re.data!==se.data)return!0;N++}return s.attributesNum!==N||s.index!==B}function m(R,U,I,B){const O={},G=U.attributes;let N=0;const z=I.getAttributes();for(const $ in z)if(z[$].location>=0){let re=G[$];re===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const se={};se.attribute=re,re&&re.data&&(se.data=re.data),O[$]=se,N++}s.attributes=O,s.attributesNum=N,s.index=B}function x(){const R=s.newAttributes;for(let U=0,I=R.length;U<I;U++)R[U]=0}function g(R){h(R,0)}function h(R,U){const I=s.newAttributes,B=s.enabledAttributes,O=s.attributeDivisors;I[R]=1,B[R]===0&&(t.enableVertexAttribArray(R),B[R]=1),O[R]!==U&&(t.vertexAttribDivisor(R,U),O[R]=U)}function v(){const R=s.newAttributes,U=s.enabledAttributes;for(let I=0,B=U.length;I<B;I++)U[I]!==R[I]&&(t.disableVertexAttribArray(I),U[I]=0)}function _(R,U,I,B,O,G,N){N===!0?t.vertexAttribIPointer(R,U,I,O,G):t.vertexAttribPointer(R,U,I,B,O,G)}function S(R,U,I,B){x();const O=B.attributes,G=I.getAttributes(),N=U.defaultAttributeValues;for(const z in G){const $=G[z];if($.location>=0){let te=O[z];if(te===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),te!==void 0){const re=te.normalized,se=te.itemSize,be=e.get(te);if(be===void 0)continue;const Ge=be.buffer,Ze=be.type,Z=be.bytesPerElement,le=Ze===t.INT||Ze===t.UNSIGNED_INT||te.gpuType===Ap;if(te.isInterleavedBufferAttribute){const q=te.data,ie=q.stride,Q=te.offset;if(q.isInstancedInterleavedBuffer){for(let oe=0;oe<$.locationSize;oe++)h($.location+oe,q.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let oe=0;oe<$.locationSize;oe++)g($.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let oe=0;oe<$.locationSize;oe++)_($.location+oe,se/$.locationSize,Ze,re,ie*Z,(Q+se/$.locationSize*oe)*Z,le)}else{if(te.isInstancedBufferAttribute){for(let q=0;q<$.locationSize;q++)h($.location+q,te.meshPerAttribute);R.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let q=0;q<$.locationSize;q++)g($.location+q);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let q=0;q<$.locationSize;q++)_($.location+q,se/$.locationSize,Ze,re,se*Z,se/$.locationSize*q*Z,le)}}else if(N!==void 0){const re=N[z];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv($.location,re);break;case 3:t.vertexAttrib3fv($.location,re);break;case 4:t.vertexAttrib4fv($.location,re);break;default:t.vertexAttrib1fv($.location,re)}}}}v()}function b(){T();for(const R in i){const U=i[R];for(const I in U){const B=U[I];for(const O in B){const G=B[O];for(const N in G)d(G[N].object),delete G[N];delete B[O]}}delete i[R]}}function C(R){if(i[R.id]===void 0)return;const U=i[R.id];for(const I in U){const B=U[I];for(const O in B){const G=B[O];for(const N in G)d(G[N].object),delete G[N];delete B[O]}}delete i[R.id]}function A(R){for(const U in i){const I=i[U];for(const B in I){const O=I[B];if(O[R.id]===void 0)continue;const G=O[R.id];for(const N in G)d(G[N].object),delete G[N];delete O[R.id]}}}function y(R){for(const U in i){const I=i[U],B=R.isInstancedMesh===!0?R.id:0,O=I[B];if(O!==void 0){for(const G in O){const N=O[G];for(const z in N)d(N[z].object),delete N[z];delete O[G]}delete I[B],Object.keys(I).length===0&&delete i[U]}}}function T(){F(),a=!0,s!==r&&(s=r,c(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function rR(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let m=0;m<f;m++)p+=d[m];n.update(p,i,1)}function l(c,d,f,u){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],d[m],u[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,f);let m=0;for(let x=0;x<f;x++)m+=d[x]*u[x];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sR(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Qn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Cn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==hi&&!y)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(je("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:S,maxSamples:b,samples:C}}function aR(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Hr,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=d(f,u,0)},this.setState=function(f,u,p){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!r||m===null||m.length===0||s&&!g)s?d(null):c();else{const v=s?0:i,_=v*4;let S=h.clippingState||null;l.value=S,S=d(m,u,_,p);for(let b=0;b!==_;++b)S[b]=n[b];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const h=p+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let _=0,S=p;_!==x;++_,S+=4)a.copy(f[_]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const mr=4,hv=[.125,.215,.35,.446,.526,.582],Wr=20,oR=256,Fa=new Gp,pv=new st;let yd=null,Sd=0,Md=0,Ed=!1;const lR=new j;class mv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=lR}=s;yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Sd,Md),this._renderer.xr.enabled=Ed,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Xi,format:Qn,colorSpace:oa,depthBuffer:!1},r=gv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gv(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cR(s)),this._blurMaterial=dR(s,e,n),this._ggxMaterial=uR(s,e,n)}return r}_compileMaterial(e){const n=new qi(new Gn,e);this._renderer.compile(n,Fa)}_sceneToCubeUV(e,n,i,r,s){const l=new Fn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(pv),f.toneMapping=_i,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new zo,new iy({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let h=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,h=!0):(g.color.copy(pv),h=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const b=this._cubeSize;bs(r,S*b,_>2?b:0,b,b),f.setRenderTarget(r),h&&f.render(x,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===is||e.mapping===sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vv());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Fa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=0+c*1.25,p=f*u,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-mr?i-m+mr:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,bs(s,g,h,3*x,2*x),r.setRenderTarget(s),r.render(o,Fa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,bs(e,g,h,3*x,2*x),r.setRenderTarget(e),r.render(o,Fa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),x=s/m,g=isFinite(s)?1+Math.floor(d*x):Wr;g>Wr&&je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wr}`);const h=[];let v=0;for(let A=0;A<Wr;++A){const y=A/x,T=Math.exp(-y*y/2);h.push(T),A===0?v+=T:A<g&&(v+=2*T)}for(let A=0;A<h.length;A++)h[A]=h[A]/v;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-i;const S=this._sizeLods[r],b=3*S*(r>_-mr?r-_+mr:0),C=4*(this._cubeSize-S);bs(n,b,C,3*S,2*S),l.setRenderTarget(n),l.render(f,Fa)}}function cR(t){const e=[],n=[],i=[];let r=t;const s=t-mr+1+hv.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-mr?l=hv[a-t+mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,m=6,x=3,g=2,h=1,v=new Float32Array(x*m*p),_=new Float32Array(g*m*p),S=new Float32Array(h*m*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,y=C>2?0:-1,T=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];v.set(T,x*m*C),_.set(u,g*m*C);const F=[C,C,C,C,C,C];S.set(F,h*m*C)}const b=new Gn;b.setAttribute("position",new ni(v,x)),b.setAttribute("uv",new ni(_,g)),b.setAttribute("faceIndex",new ni(S,h)),i.push(new qi(b,null)),r>mr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function gv(t,e,n){const i=new xi(t,e,n);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uR(t,e,n){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function dR(t,e,n){const i=new Float32Array(Wr),r=new j(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function vv(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function _v(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}class uy extends xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ry(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zo(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:ki});s.uniforms.tEquirect.value=n;const a=new qi(r,s),o=n.minFilter;return n.minFilter===pr&&(n.minFilter=Zt),new vb(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function fR(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Xu||p===$u)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const x=new uy(m.height);return x.fromEquirectangularTexture(t,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,m=p===Xu||p===$u,x=p===is||p===sa;if(m||x){let g=n.get(u);const h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new mv(t)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new mv(t)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,p){return p===Xu?u.mapping=is:p===$u&&(u.mapping=sa),u}function l(u){let p=0;const m=6;for(let x=0;x<m;x++)u[x]!==void 0&&p++;return p===m}function c(u){const p=u.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function hR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Fc("WebGLRenderer: "+i+" extension not supported."),r}}}function pR(t,e,n,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,m=f.attributes.position;let x=0;if(m===void 0)return;if(p!==null){const v=p.array;x=p.version;for(let _=0,S=v.length;_<S;_+=3){const b=v[_+0],C=v[_+1],A=v[_+2];u.push(b,C,C,A,A,b)}}else{const v=m.array;x=m.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const b=_+0,C=_+1,A=_+2;u.push(b,C,C,A,A,b)}}const g=new(m.count>=65535?ey:Qx)(u,1);g.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function d(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function mR(t,e,n){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,p){t.drawElements(i,p,s,u*a),n.update(p,i,1)}function c(u,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,u*a,m),n.update(p,i,m))}function d(u,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,m);let g=0;for(let h=0;h<m;h++)g+=p[h];n.update(g,i,1)}function f(u,p,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<u.length;h++)c(u[h]/a,p[h],x[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,x,0,m);let h=0;for(let v=0;v<m;v++)h+=p[v]*x[v];n.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function gR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vR(t,e,n){const i=new WeakMap,r=new Lt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let F=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",F)};var p=F;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),x===!0&&(S=2),g===!0&&(S=3);let b=o.attributes.position.count*S,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*C*4*f),y=new Zx(A,b,C,f);y.type=hi,y.needsUpdate=!0;const T=S*4;for(let R=0;R<f;R++){const U=h[R],I=v[R],B=_[R],O=b*C*4*R;for(let G=0;G<U.count;G++){const N=G*T;m===!0&&(r.fromBufferAttribute(U,G),A[O+N+0]=r.x,A[O+N+1]=r.y,A[O+N+2]=r.z,A[O+N+3]=0),x===!0&&(r.fromBufferAttribute(I,G),A[O+N+4]=r.x,A[O+N+5]=r.y,A[O+N+6]=r.z,A[O+N+7]=0),g===!0&&(r.fromBufferAttribute(B,G),A[O+N+8]=r.x,A[O+N+9]=r.y,A[O+N+10]=r.z,A[O+N+11]=B.itemSize===4?r.w:1)}}u={count:f,texture:y,size:new nt(b,C)},i.set(o,u),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function _R(t,e,n,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const xR={[Ux]:"LINEAR_TONE_MAPPING",[Fx]:"REINHARD_TONE_MAPPING",[Ox]:"CINEON_TONE_MAPPING",[kx]:"ACES_FILMIC_TONE_MAPPING",[zx]:"AGX_TONE_MAPPING",[Vx]:"NEUTRAL_TONE_MAPPING",[Bx]:"CUSTOM_TONE_MAPPING"};function yR(t,e,n,i,r){const s=new xi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new xi(e,n,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),o=new Gn;o.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new yi([0,2,0,0,2,0],2));const l=new cb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new qi(o,l),d=new Gp(-1,1,1,-1,0,1);let f=null,u=null,p=!1,m,x=null,g=[],h=!1;this.setSize=function(v,_){s.setSize(v,_),a.setSize(v,_);for(let S=0;S<g.length;S++){const b=g[S];b.setSize&&b.setSize(v,_)}},this.setEffects=function(v){g=v,h=g.length>0&&g[0].isRenderPass===!0;const _=s.width,S=s.height;for(let b=0;b<g.length;b++){const C=g[b];C.setSize&&C.setSize(_,S)}},this.begin=function(v,_){if(p||v.toneMapping===_i&&g.length===0)return!1;if(x=_,_!==null){const S=_.width,b=_.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return h===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=_i,!0},this.hasRenderPass=function(){return h},this.end=function(v,_){v.toneMapping=m,p=!0;let S=s,b=a;for(let C=0;C<g.length;C++){const A=g[C];if(A.enabled!==!1&&(A.render(v,b,S,_),A.needsSwap!==!1)){const y=S;S=b,b=y}}if(f!==v.outputColorSpace||u!==v.toneMapping){f=v.outputColorSpace,u=v.toneMapping,l.defines={},lt.getTransfer(f)===ft&&(l.defines.SRGB_TRANSFER="");const C=xR[u];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(x),v.render(c,d),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const dy=new ln,Sh=new Po(1,1),fy=new Zx,hy=new FT,py=new ry,xv=[],yv=[],Sv=new Float32Array(16),Mv=new Float32Array(9),Ev=new Float32Array(4);function va(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=xv[r];if(s===void 0&&(s=new Float32Array(r),xv[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uu(t,e){let n=yv[e];n===void 0&&(n=new Int32Array(e),yv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function SR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function MR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function ER(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function wR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function TR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Ev.set(i),t.uniformMatrix2fv(this.addr,!1,Ev),Vt(n,i)}}function bR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Mv.set(i),t.uniformMatrix3fv(this.addr,!1,Mv),Vt(n,i)}}function CR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Sv.set(i),t.uniformMatrix4fv(this.addr,!1,Sv),Vt(n,i)}}function AR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function PR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function LR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function NR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function IR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function UR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function FR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Sh.compareFunction=n.isReversedDepthBuffer()?Up:Ip,s=Sh):s=dy,n.setTexture2D(e||s,r)}function OR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||hy,r)}function kR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||py,r)}function BR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||fy,r)}function zR(t){switch(t){case 5126:return SR;case 35664:return MR;case 35665:return ER;case 35666:return wR;case 35674:return TR;case 35675:return bR;case 35676:return CR;case 5124:case 35670:return AR;case 35667:case 35671:return RR;case 35668:case 35672:return PR;case 35669:case 35673:return LR;case 5125:return NR;case 36294:return DR;case 36295:return IR;case 36296:return UR;case 35678:case 36198:case 36298:case 36306:case 35682:return FR;case 35679:case 36299:case 36307:return OR;case 35680:case 36300:case 36308:case 36293:return kR;case 36289:case 36303:case 36311:case 36292:return BR}}function VR(t,e){t.uniform1fv(this.addr,e)}function HR(t,e){const n=va(e,this.size,2);t.uniform2fv(this.addr,n)}function GR(t,e){const n=va(e,this.size,3);t.uniform3fv(this.addr,n)}function WR(t,e){const n=va(e,this.size,4);t.uniform4fv(this.addr,n)}function jR(t,e){const n=va(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XR(t,e){const n=va(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $R(t,e){const n=va(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YR(t,e){t.uniform1iv(this.addr,e)}function qR(t,e){t.uniform2iv(this.addr,e)}function KR(t,e){t.uniform3iv(this.addr,e)}function ZR(t,e){t.uniform4iv(this.addr,e)}function JR(t,e){t.uniform1uiv(this.addr,e)}function QR(t,e){t.uniform2uiv(this.addr,e)}function eP(t,e){t.uniform3uiv(this.addr,e)}function tP(t,e){t.uniform4uiv(this.addr,e)}function nP(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Sh:a=dy;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function iP(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||hy,s[a])}function rP(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||py,s[a])}function sP(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||fy,s[a])}function aP(t){switch(t){case 5126:return VR;case 35664:return HR;case 35665:return GR;case 35666:return WR;case 35674:return jR;case 35675:return XR;case 35676:return $R;case 5124:case 35670:return YR;case 35667:case 35671:return qR;case 35668:case 35672:return KR;case 35669:case 35673:return ZR;case 5125:return JR;case 36294:return QR;case 36295:return eP;case 36296:return tP;case 35678:case 36198:case 36298:case 36306:case 35682:return nP;case 35679:case 36299:case 36307:return iP;case 35680:case 36300:case 36308:case 36293:return rP;case 36289:case 36303:case 36311:case 36292:return sP}}class oP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zR(n.type)}}class lP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aP(n.type)}}class cP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function wv(t,e){t.seq.push(e),t.map[e.id]=e}function uP(t,e,n){const i=t.name,r=i.length;for(wd.lastIndex=0;;){const s=wd.exec(i),a=wd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){wv(n,c===void 0?new oP(o,t,e):new lP(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new cP(o),wv(n,f)),n=f}}}class tc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);uP(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Tv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dP=37297;let fP=0;function hP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const bv=new Ke;function pP(t){lt._getMatrix(bv,lt.workingColorSpace,t);const e=`mat3( ${bv.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case Dc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Cv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+hP(t.getShaderSource(e),o)}else return s}function mP(t,e){const n=pP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const gP={[Ux]:"Linear",[Fx]:"Reinhard",[Ox]:"Cineon",[kx]:"ACESFilmic",[zx]:"AgX",[Vx]:"Neutral",[Bx]:"Custom"};function vP(t,e){const n=gP[e];return n===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ul=new j;function _P(){lt.getLuminanceCoefficients(Ul);const t=Ul.x.toFixed(4),e=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function yP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function SP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ja(t){return t!==""}function Av(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(t){return t.replace(MP,wP)}const EP=new Map;function wP(t,e){let n=Je[e];if(n===void 0){const i=EP.get(e);if(i!==void 0)n=Je[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mh(n)}const TP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pv(t){return t.replace(TP,bP)}function bP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const CP={[Kl]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function AP(t){return CP[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RP={[is]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE",[au]:"ENVMAP_TYPE_CUBE_UV"};function PP(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":RP[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const LP={[sa]:"ENVMAP_MODE_REFRACTION"};function NP(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":LP[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DP={[Ix]:"ENVMAP_BLENDING_MULTIPLY",[Jw]:"ENVMAP_BLENDING_MIX",[Qw]:"ENVMAP_BLENDING_ADD"};function IP(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":DP[t.combine]||"ENVMAP_BLENDING_NONE"}function UP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function FP(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=AP(n),c=PP(n),d=NP(n),f=IP(n),u=UP(n),p=xP(n),m=yP(s),x=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ja).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ja).join(`
`),h.length>0&&(h+=`
`)):(g=[Lv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),h=[Lv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_i?"#define TONE_MAPPING":"",n.toneMapping!==_i?Je.tonemapping_pars_fragment:"",n.toneMapping!==_i?vP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,mP("linearToOutputTexel",n.outputColorSpace),_P(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ja).join(`
`)),a=Mh(a),a=Av(a,n),a=Rv(a,n),o=Mh(o),o=Av(o,n),o=Rv(o,n),a=Pv(a),o=Pv(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Bg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=v+g+a,S=v+h+o,b=Tv(r,r.VERTEX_SHADER,_),C=Tv(r,r.FRAGMENT_SHADER,S);r.attachShader(x,b),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(R){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(x)||"",I=r.getShaderInfoLog(b)||"",B=r.getShaderInfoLog(C)||"",O=U.trim(),G=I.trim(),N=B.trim();let z=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,C);else{const te=Cv(r,b,"vertex"),re=Cv(r,C,"fragment");at("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+te+`
`+re)}else O!==""?je("WebGLProgram: Program Info Log:",O):(G===""||N==="")&&($=!1);$&&(R.diagnostics={runnable:z,programLog:O,vertexShader:{log:G,prefix:g},fragmentShader:{log:N,prefix:h}})}r.deleteShader(b),r.deleteShader(C),y=new tc(r,x),T=SP(r,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(x,dP)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fP++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=C,this}let OP=0;class kP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BP(e),n.set(e,i)),i}}class BP{constructor(e){this.id=OP++,this.code=e,this.usedTimes=0}}function zP(t,e,n,i,r,s){const a=new kp,o=new kP,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,T,F,R,U){const I=R.fog,B=U.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=e.get(y.envMap||O,G),z=N&&N.mapping===au?N.image.height:null,$=p[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&je("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=te!==void 0?te.length:0;let se=0;B.morphAttributes.position!==void 0&&(se=1),B.morphAttributes.normal!==void 0&&(se=2),B.morphAttributes.color!==void 0&&(se=3);let be,Ge,Ze,Z;if($){const dt=ui[$];be=dt.vertexShader,Ge=dt.fragmentShader}else be=y.vertexShader,Ge=y.fragmentShader,o.update(y),Ze=o.getVertexShaderID(y),Z=o.getFragmentShaderID(y);const le=t.getRenderTarget(),q=t.state.buffers.depth.getReversed(),ie=U.isInstancedMesh===!0,Q=U.isBatchedMesh===!0,oe=!!y.map,ve=!!y.matcap,we=!!N,Se=!!y.aoMap,Be=!!y.lightMap,W=!!y.bumpMap,Me=!!y.normalMap,L=!!y.displacementMap,Xe=!!y.emissiveMap,Ue=!!y.metalnessMap,Qe=!!y.roughnessMap,Ee=y.anisotropy>0,P=y.clearcoat>0,M=y.dispersion>0,V=y.iridescence>0,ne=y.sheen>0,ae=y.transmission>0,ee=Ee&&!!y.anisotropyMap,Pe=P&&!!y.clearcoatMap,me=P&&!!y.clearcoatNormalMap,ze=P&&!!y.clearcoatRoughnessMap,He=V&&!!y.iridescenceMap,de=V&&!!y.iridescenceThicknessMap,he=ne&&!!y.sheenColorMap,Le=ne&&!!y.sheenRoughnessMap,De=!!y.specularMap,Te=!!y.specularColorMap,et=!!y.specularIntensityMap,k=ae&&!!y.transmissionMap,ge=ae&&!!y.thicknessMap,pe=!!y.gradientMap,Re=!!y.alphaMap,fe=y.alphaTest>0,J=!!y.alphaHash,Ne=!!y.extensions;let $e=_i;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&($e=t.toneMapping);const _t={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:be,fragmentShader:Ge,defines:y.defines,customVertexShaderID:Ze,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Q,batchingColor:Q&&U._colorsTexture!==null,instancing:ie,instancingColor:ie&&U.instanceColor!==null,instancingMorph:ie&&U.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:oa,alphaToCoverage:!!y.alphaToCoverage,map:oe,matcap:ve,envMap:we,envMapMode:we&&N.mapping,envMapCubeUVHeight:z,aoMap:Se,lightMap:Be,bumpMap:W,normalMap:Me,displacementMap:L,emissiveMap:Xe,normalMapObjectSpace:Me&&y.normalMapType===iT,normalMapTangentSpace:Me&&y.normalMapType===nT,metalnessMap:Ue,roughnessMap:Qe,anisotropy:Ee,anisotropyMap:ee,clearcoat:P,clearcoatMap:Pe,clearcoatNormalMap:me,clearcoatRoughnessMap:ze,dispersion:M,iridescence:V,iridescenceMap:He,iridescenceThicknessMap:de,sheen:ne,sheenColorMap:he,sheenRoughnessMap:Le,specularMap:De,specularColorMap:Te,specularIntensityMap:et,transmission:ae,transmissionMap:k,thicknessMap:ge,gradientMap:pe,opaque:y.transparent===!1&&y.blending===Xs&&y.alphaToCoverage===!1,alphaMap:Re,alphaTest:fe,alphaHash:J,combine:y.combine,mapUv:oe&&m(y.map.channel),aoMapUv:Se&&m(y.aoMap.channel),lightMapUv:Be&&m(y.lightMap.channel),bumpMapUv:W&&m(y.bumpMap.channel),normalMapUv:Me&&m(y.normalMap.channel),displacementMapUv:L&&m(y.displacementMap.channel),emissiveMapUv:Xe&&m(y.emissiveMap.channel),metalnessMapUv:Ue&&m(y.metalnessMap.channel),roughnessMapUv:Qe&&m(y.roughnessMap.channel),anisotropyMapUv:ee&&m(y.anisotropyMap.channel),clearcoatMapUv:Pe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&m(y.sheenRoughnessMap.channel),specularMapUv:De&&m(y.specularMap.channel),specularColorMapUv:Te&&m(y.specularColorMap.channel),specularIntensityMapUv:et&&m(y.specularIntensityMap.channel),transmissionMapUv:k&&m(y.transmissionMap.channel),thicknessMapUv:ge&&m(y.thicknessMap.channel),alphaMapUv:Re&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Me||Ee),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(oe||Re),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&Me===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:q,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:oe&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===ft,decodeVideoTextureEmissive:Xe&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Di,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&y.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function g(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)T.push(F),T.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(h(T,y),v(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function h(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const T=p[y.type];let F;if(T){const R=ui[T];F=ab.clone(R.uniforms)}else F=y.uniforms;return F}function S(y,T){let F=d.get(T);return F!==void 0?++F.usedTimes:(F=new FP(t,T,y,r),c.push(F),d.set(T,F)),F}function b(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function C(y){o.remove(y)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:_,acquireProgram:S,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:A}}function VP(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function HP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Nv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,m,x,g,h){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:p,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:h},t[e]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=m,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=h),e++,v}function l(u,p,m,x,g,h){const v=o(u,p,m,x,g,h);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):n.push(v)}function c(u,p,m,x,g,h){const v=o(u,p,m,x,g,h);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function d(u,p){n.length>1&&n.sort(u||HP),i.length>1&&i.sort(p||Nv),r.length>1&&r.sort(p||Nv)}function f(){for(let u=e,p=t.length;u<p;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:d}}function GP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Dv,t.set(i,[a])):r>=s.length?(a=new Dv,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function WP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new st};break;case"SpotLight":n={position:new j,direction:new j,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function jP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XP=0;function $P(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YP(t){const e=new WP,n=jP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Mt,a=new Mt;function o(c){let d=0,f=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,m=0,x=0,g=0,h=0,v=0,_=0,S=0,b=0,C=0,A=0;c.sort($P);for(let T=0,F=c.length;T<F;T++){const R=c[T],U=R.color,I=R.intensity,B=R.distance;let O=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===aa?O=R.shadow.map.texture:O=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=U.r*I,f+=U.g*I,u+=U.b*I;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],I);A++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const N=R.shadow,z=n.get(R);z.shadowIntensity=N.intensity,z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=R.shadow.matrix,v++}i.directional[p]=G,p++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(U).multiplyScalar(I),G.distance=B,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[x]=G;const N=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,N.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[x]=N.matrix,R.castShadow){const z=n.get(R);z.shadowIntensity=N.intensity,z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=O,S++}x++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(U).multiplyScalar(I),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=G,g++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const N=R.shadow,z=n.get(R);z.shadowIntensity=N.intensity,z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,z.shadowCameraNear=N.camera.near,z.shadowCameraFar=N.camera.far,i.pointShadow[m]=z,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=R.shadow.matrix,_++}i.point[m]=G,m++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(I),G.groundColor.copy(R.groundColor).multiplyScalar(I),i.hemi[h]=G,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const y=i.hash;(y.directionalLength!==p||y.pointLength!==m||y.spotLength!==x||y.rectAreaLength!==g||y.hemiLength!==h||y.numDirectionalShadows!==v||y.numPointShadows!==_||y.numSpotShadows!==S||y.numSpotMaps!==b||y.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,y.directionalLength=p,y.pointLength=m,y.spotLength=x,y.rectAreaLength=g,y.hemiLength=h,y.numDirectionalShadows=v,y.numPointShadows=_,y.numSpotShadows=S,y.numSpotMaps=b,y.numLightProbes=A,i.version=XP++)}function l(c,d){let f=0,u=0,p=0,m=0,x=0;const g=d.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const _=c[h];if(_.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function Iv(t){const e=new YP(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function qP(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Iv(t),e.set(r,[o])):s>=a.length?(o=new Iv(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const KP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JP=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],QP=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Uv=new Mt,Oa=new j,Td=new j;function eL(t,e,n){let i=new Vp;const r=new nt,s=new nt,a=new Lt,o=new ub,l=new db,c={},d=n.maxTextureSize,f={[br]:Sn,[Sn]:br,[Di]:Di},u=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:KP,fragmentShader:ZP}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new Gn;m.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qi(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let h=this.type;this.render=function(C,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===Dw&&(je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kl);const T=t.getRenderTarget(),F=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),U=t.state;U.setBlending(ki),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=h!==this.type;I&&A.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(O=>O.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,O=C.length;B<O;B++){const G=C[B],N=G.shadow;if(N===void 0){je("WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const z=N.getFrameExtents();r.multiply(z),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/z.x),r.x=s.x*z.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/z.y),r.y=s.y*z.y,N.mapSize.y=s.y));const $=t.state.buffers.depth.getReversed();if(N.camera._reversedDepth=$,N.map===null||I===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Wa){if(G.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new xi(r.x,r.y,{format:aa,type:Xi,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),N.map.texture.name=G.name+".shadowMap",N.map.depthTexture=new Po(r.x,r.y,hi),N.map.depthTexture.name=G.name+".shadowMapDepth",N.map.depthTexture.format=$i,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Kt,N.map.depthTexture.magFilter=Kt}else G.isPointLight?(N.map=new uy(r.x),N.map.depthTexture=new rb(r.x,Si)):(N.map=new xi(r.x,r.y),N.map.depthTexture=new Po(r.x,r.y,Si)),N.map.depthTexture.name=G.name+".shadowMap",N.map.depthTexture.format=$i,this.type===Kl?(N.map.depthTexture.compareFunction=$?Up:Ip,N.map.depthTexture.minFilter=Zt,N.map.depthTexture.magFilter=Zt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Kt,N.map.depthTexture.magFilter=Kt);N.camera.updateProjectionMatrix()}const te=N.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<te;re++){if(N.map.isWebGLCubeRenderTarget)t.setRenderTarget(N.map,re),t.clear();else{re===0&&(t.setRenderTarget(N.map),t.clear());const se=N.getViewport(re);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),U.viewport(a)}if(G.isPointLight){const se=N.camera,be=N.matrix,Ge=G.distance||se.far;Ge!==se.far&&(se.far=Ge,se.updateProjectionMatrix()),Oa.setFromMatrixPosition(G.matrixWorld),se.position.copy(Oa),Td.copy(se.position),Td.add(JP[re]),se.up.copy(QP[re]),se.lookAt(Td),se.updateMatrixWorld(),be.makeTranslation(-Oa.x,-Oa.y,-Oa.z),Uv.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Uv,se.coordinateSystem,se.reversedDepth)}else N.updateMatrices(G);i=N.getFrustum(),S(A,y,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===Wa&&v(N,y),N.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(T,F,R)};function v(C,A){const y=e.update(x);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xi(r.x,r.y,{format:aa,type:Xi})),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,y,u,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,y,p,x,null)}function _(C,A,y,T){let F=null;const R=y.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)F=R;else if(F=y.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=F.uuid,I=A.uuid;let B=c[U];B===void 0&&(B={},c[U]=B);let O=B[I];O===void 0&&(O=F.clone(),B[I]=O,A.addEventListener("dispose",b)),F=O}if(F.visible=A.visible,F.wireframe=A.wireframe,T===Wa?F.side=A.shadowSide!==null?A.shadowSide:A.side:F.side=A.shadowSide!==null?A.shadowSide:f[A.side],F.alphaMap=A.alphaMap,F.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,F.map=A.map,F.clipShadows=A.clipShadows,F.clippingPlanes=A.clippingPlanes,F.clipIntersection=A.clipIntersection,F.displacementMap=A.displacementMap,F.displacementScale=A.displacementScale,F.displacementBias=A.displacementBias,F.wireframeLinewidth=A.wireframeLinewidth,F.linewidth=A.linewidth,y.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const U=t.properties.get(F);U.light=y}return F}function S(C,A,y,T,F){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&F===Wa)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,C.matrixWorld);const I=e.update(C),B=C.material;if(Array.isArray(B)){const O=I.groups;for(let G=0,N=O.length;G<N;G++){const z=O[G],$=B[z.materialIndex];if($&&$.visible){const te=_(C,$,T,F);C.onBeforeShadow(t,C,A,y,I,te,z),t.renderBufferDirect(y,null,I,te,C,z),C.onAfterShadow(t,C,A,y,I,te,z)}}}else if(B.visible){const O=_(C,B,T,F);C.onBeforeShadow(t,C,A,y,I,O,null),t.renderBufferDirect(y,null,I,O,C,null),C.onAfterShadow(t,C,A,y,I,O,null)}}const U=C.children;for(let I=0,B=U.length;I<B;I++)S(U[I],A,y,T,F)}function b(C){C.target.removeEventListener("dispose",b);for(const y in c){const T=c[y],F=C.target.uuid;F in T&&(T[F].dispose(),delete T[F])}}}function tL(t,e){function n(){let k=!1;const ge=new Lt;let pe=null;const Re=new Lt(0,0,0,0);return{setMask:function(fe){pe!==fe&&!k&&(t.colorMask(fe,fe,fe,fe),pe=fe)},setLocked:function(fe){k=fe},setClear:function(fe,J,Ne,$e,_t){_t===!0&&(fe*=$e,J*=$e,Ne*=$e),ge.set(fe,J,Ne,$e),Re.equals(ge)===!1&&(t.clearColor(fe,J,Ne,$e),Re.copy(ge))},reset:function(){k=!1,pe=null,Re.set(-1,0,0,0)}}}function i(){let k=!1,ge=!1,pe=null,Re=null,fe=null;return{setReversed:function(J){if(ge!==J){const Ne=e.get("EXT_clip_control");J?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ge=J;const $e=fe;fe=null,this.setClear($e)}},getReversed:function(){return ge},setTest:function(J){J?le(t.DEPTH_TEST):q(t.DEPTH_TEST)},setMask:function(J){pe!==J&&!k&&(t.depthMask(J),pe=J)},setFunc:function(J){if(ge&&(J=hT[J]),Re!==J){switch(J){case Nf:t.depthFunc(t.NEVER);break;case Df:t.depthFunc(t.ALWAYS);break;case If:t.depthFunc(t.LESS);break;case ra:t.depthFunc(t.LEQUAL);break;case Uf:t.depthFunc(t.EQUAL);break;case Ff:t.depthFunc(t.GEQUAL);break;case Of:t.depthFunc(t.GREATER);break;case kf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=J}},setLocked:function(J){k=J},setClear:function(J){fe!==J&&(fe=J,ge&&(J=1-J),t.clearDepth(J))},reset:function(){k=!1,pe=null,Re=null,fe=null,ge=!1}}}function r(){let k=!1,ge=null,pe=null,Re=null,fe=null,J=null,Ne=null,$e=null,_t=null;return{setTest:function(dt){k||(dt?le(t.STENCIL_TEST):q(t.STENCIL_TEST))},setMask:function(dt){ge!==dt&&!k&&(t.stencilMask(dt),ge=dt)},setFunc:function(dt,wi,Ti){(pe!==dt||Re!==wi||fe!==Ti)&&(t.stencilFunc(dt,wi,Ti),pe=dt,Re=wi,fe=Ti)},setOp:function(dt,wi,Ti){(J!==dt||Ne!==wi||$e!==Ti)&&(t.stencilOp(dt,wi,Ti),J=dt,Ne=wi,$e=Ti)},setLocked:function(dt){k=dt},setClear:function(dt){_t!==dt&&(t.clearStencil(dt),_t=dt)},reset:function(){k=!1,ge=null,pe=null,Re=null,fe=null,J=null,Ne=null,$e=null,_t=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u=new WeakMap,p=[],m=null,x=!1,g=null,h=null,v=null,_=null,S=null,b=null,C=null,A=new st(0,0,0),y=0,T=!1,F=null,R=null,U=null,I=null,B=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,N=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=N>=1):z.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=N>=2);let $=null,te={};const re=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),be=new Lt().fromArray(re),Ge=new Lt().fromArray(se);function Ze(k,ge,pe,Re){const fe=new Uint8Array(4),J=t.createTexture();t.bindTexture(k,J),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<pe;Ne++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(ge+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return J}const Z={};Z[t.TEXTURE_2D]=Ze(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=Ze(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=Ze(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=Ze(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(t.DEPTH_TEST),a.setFunc(ra),W(!1),Me(Ig),le(t.CULL_FACE),Se(ki);function le(k){d[k]!==!0&&(t.enable(k),d[k]=!0)}function q(k){d[k]!==!1&&(t.disable(k),d[k]=!1)}function ie(k,ge){return f[k]!==ge?(t.bindFramebuffer(k,ge),f[k]=ge,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ge),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function Q(k,ge){let pe=p,Re=!1;if(k){pe=u.get(ge),pe===void 0&&(pe=[],u.set(ge,pe));const fe=k.textures;if(pe.length!==fe.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let J=0,Ne=fe.length;J<Ne;J++)pe[J]=t.COLOR_ATTACHMENT0+J;pe.length=fe.length,Re=!0}}else pe[0]!==t.BACK&&(pe[0]=t.BACK,Re=!0);Re&&t.drawBuffers(pe)}function oe(k){return m!==k?(t.useProgram(k),m=k,!0):!1}const ve={[Gr]:t.FUNC_ADD,[Uw]:t.FUNC_SUBTRACT,[Fw]:t.FUNC_REVERSE_SUBTRACT};ve[Ow]=t.MIN,ve[kw]=t.MAX;const we={[Bw]:t.ZERO,[zw]:t.ONE,[Vw]:t.SRC_COLOR,[Pf]:t.SRC_ALPHA,[$w]:t.SRC_ALPHA_SATURATE,[jw]:t.DST_COLOR,[Gw]:t.DST_ALPHA,[Hw]:t.ONE_MINUS_SRC_COLOR,[Lf]:t.ONE_MINUS_SRC_ALPHA,[Xw]:t.ONE_MINUS_DST_COLOR,[Ww]:t.ONE_MINUS_DST_ALPHA,[Yw]:t.CONSTANT_COLOR,[qw]:t.ONE_MINUS_CONSTANT_COLOR,[Kw]:t.CONSTANT_ALPHA,[Zw]:t.ONE_MINUS_CONSTANT_ALPHA};function Se(k,ge,pe,Re,fe,J,Ne,$e,_t,dt){if(k===ki){x===!0&&(q(t.BLEND),x=!1);return}if(x===!1&&(le(t.BLEND),x=!0),k!==Iw){if(k!==g||dt!==T){if((h!==Gr||S!==Gr)&&(t.blendEquation(t.FUNC_ADD),h=Gr,S=Gr),dt)switch(k){case Xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ug:t.blendFunc(t.ONE,t.ONE);break;case Fg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Og:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",k);break}else switch(k){case Xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ug:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Fg:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Og:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",k);break}v=null,_=null,b=null,C=null,A.set(0,0,0),y=0,g=k,T=dt}return}fe=fe||ge,J=J||pe,Ne=Ne||Re,(ge!==h||fe!==S)&&(t.blendEquationSeparate(ve[ge],ve[fe]),h=ge,S=fe),(pe!==v||Re!==_||J!==b||Ne!==C)&&(t.blendFuncSeparate(we[pe],we[Re],we[J],we[Ne]),v=pe,_=Re,b=J,C=Ne),($e.equals(A)===!1||_t!==y)&&(t.blendColor($e.r,$e.g,$e.b,_t),A.copy($e),y=_t),g=k,T=!1}function Be(k,ge){k.side===Di?q(t.CULL_FACE):le(t.CULL_FACE);let pe=k.side===Sn;ge&&(pe=!pe),W(pe),k.blending===Xs&&k.transparent===!1?Se(ki):Se(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const Re=k.stencilWrite;o.setTest(Re),Re&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Xe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):q(t.SAMPLE_ALPHA_TO_COVERAGE)}function W(k){F!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),F=k)}function Me(k){k!==Lw?(le(t.CULL_FACE),k!==R&&(k===Ig?t.cullFace(t.BACK):k===Nw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):q(t.CULL_FACE),R=k}function L(k){k!==U&&(G&&t.lineWidth(k),U=k)}function Xe(k,ge,pe){k?(le(t.POLYGON_OFFSET_FILL),(I!==ge||B!==pe)&&(I=ge,B=pe,a.getReversed()&&(ge=-ge),t.polygonOffset(ge,pe))):q(t.POLYGON_OFFSET_FILL)}function Ue(k){k?le(t.SCISSOR_TEST):q(t.SCISSOR_TEST)}function Qe(k){k===void 0&&(k=t.TEXTURE0+O-1),$!==k&&(t.activeTexture(k),$=k)}function Ee(k,ge,pe){pe===void 0&&($===null?pe=t.TEXTURE0+O-1:pe=$);let Re=te[pe];Re===void 0&&(Re={type:void 0,texture:void 0},te[pe]=Re),(Re.type!==k||Re.texture!==ge)&&($!==pe&&(t.activeTexture(pe),$=pe),t.bindTexture(k,ge||Z[k]),Re.type=k,Re.texture=ge)}function P(){const k=te[$];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function V(){try{t.compressedTexImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function ne(){try{t.texSubImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function ae(){try{t.texSubImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function ee(){try{t.compressedTexSubImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function Pe(){try{t.compressedTexSubImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function me(){try{t.texStorage2D(...arguments)}catch(k){at("WebGLState:",k)}}function ze(){try{t.texStorage3D(...arguments)}catch(k){at("WebGLState:",k)}}function He(){try{t.texImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function de(){try{t.texImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function he(k){be.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),be.copy(k))}function Le(k){Ge.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Ge.copy(k))}function De(k,ge){let pe=c.get(ge);pe===void 0&&(pe=new WeakMap,c.set(ge,pe));let Re=pe.get(k);Re===void 0&&(Re=t.getUniformBlockIndex(ge,k.name),pe.set(k,Re))}function Te(k,ge){const Re=c.get(ge).get(k);l.get(ge)!==Re&&(t.uniformBlockBinding(ge,Re,k.__bindingPointIndex),l.set(ge,Re))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},$=null,te={},f={},u=new WeakMap,p=[],m=null,x=!1,g=null,h=null,v=null,_=null,S=null,b=null,C=null,A=new st(0,0,0),y=0,T=!1,F=null,R=null,U=null,I=null,B=null,be.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:q,bindFramebuffer:ie,drawBuffers:Q,useProgram:oe,setBlending:Se,setMaterial:Be,setFlipSided:W,setCullFace:Me,setLineWidth:L,setPolygonOffset:Xe,setScissorTest:Ue,activeTexture:Qe,bindTexture:Ee,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:He,texImage3D:de,updateUBOMapping:De,uniformBlockBinding:Te,texStorage2D:me,texStorage3D:ze,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:ee,compressedTexSubImage3D:Pe,scissor:he,viewport:Le,reset:et}}function nL(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,d=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,M){return p?new OffscreenCanvas(P,M):Ic("canvas")}function x(P,M,V){let ne=1;const ae=Ee(P);if((ae.width>V||ae.height>V)&&(ne=V/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor(ne*ae.width),Pe=Math.floor(ne*ae.height);f===void 0&&(f=m(ee,Pe));const me=M?m(ee,Pe):f;return me.width=ee,me.height=Pe,me.getContext("2d").drawImage(P,0,0,ee,Pe),je("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ee+"x"+Pe+")."),me}else return"data"in P&&je("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function g(P){return P.generateMipmaps}function h(P){t.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(P,M,V,ne,ae=!1){if(P!==null){if(t[P]!==void 0)return t[P];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=M;if(M===t.RED&&(V===t.FLOAT&&(ee=t.R32F),V===t.HALF_FLOAT&&(ee=t.R16F),V===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.R8UI),V===t.UNSIGNED_SHORT&&(ee=t.R16UI),V===t.UNSIGNED_INT&&(ee=t.R32UI),V===t.BYTE&&(ee=t.R8I),V===t.SHORT&&(ee=t.R16I),V===t.INT&&(ee=t.R32I)),M===t.RG&&(V===t.FLOAT&&(ee=t.RG32F),V===t.HALF_FLOAT&&(ee=t.RG16F),V===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RG8UI),V===t.UNSIGNED_SHORT&&(ee=t.RG16UI),V===t.UNSIGNED_INT&&(ee=t.RG32UI),V===t.BYTE&&(ee=t.RG8I),V===t.SHORT&&(ee=t.RG16I),V===t.INT&&(ee=t.RG32I)),M===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),V===t.UNSIGNED_INT&&(ee=t.RGB32UI),V===t.BYTE&&(ee=t.RGB8I),V===t.SHORT&&(ee=t.RGB16I),V===t.INT&&(ee=t.RGB32I)),M===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),V===t.UNSIGNED_INT&&(ee=t.RGBA32UI),V===t.BYTE&&(ee=t.RGBA8I),V===t.SHORT&&(ee=t.RGBA16I),V===t.INT&&(ee=t.RGBA32I)),M===t.RGB&&(V===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),M===t.RGBA){const Pe=ae?Dc:lt.getTransfer(ne);V===t.FLOAT&&(ee=t.RGBA32F),V===t.HALF_FLOAT&&(ee=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ee=Pe===ft?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(P,M){let V;return P?M===null||M===Si||M===Co?V=t.DEPTH24_STENCIL8:M===hi?V=t.DEPTH32F_STENCIL8:M===bo&&(V=t.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Si||M===Co?V=t.DEPTH_COMPONENT24:M===hi?V=t.DEPTH_COMPONENT32F:M===bo&&(V=t.DEPTH_COMPONENT16),V}function b(P,M){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Kt&&P.minFilter!==Zt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){const M=P.target;M.removeEventListener("dispose",C),y(M),M.isVideoTexture&&d.delete(M)}function A(P){const M=P.target;M.removeEventListener("dispose",A),F(M)}function y(P){const M=i.get(P);if(M.__webglInit===void 0)return;const V=P.source,ne=u.get(V);if(ne){const ae=ne[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&T(P),Object.keys(ne).length===0&&u.delete(V)}i.remove(P)}function T(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const V=P.source,ne=u.get(V);delete ne[M.__cacheKey],a.memory.textures--}function F(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(M.__webglFramebuffer[ne]))for(let ae=0;ae<M.__webglFramebuffer[ne].length;ae++)t.deleteFramebuffer(M.__webglFramebuffer[ne][ae]);else t.deleteFramebuffer(M.__webglFramebuffer[ne]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ne])}else{if(Array.isArray(M.__webglFramebuffer))for(let ne=0;ne<M.__webglFramebuffer.length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[ne]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ne=0;ne<M.__webglColorRenderbuffer.length;ne++)M.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ne]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=P.textures;for(let ne=0,ae=V.length;ne<ae;ne++){const ee=i.get(V[ne]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(V[ne])}i.remove(P)}let R=0;function U(){R=0}function I(){const P=R;return P>=r.maxTextures&&je("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),R+=1,P}function B(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function O(P,M){const V=i.get(P);if(P.isVideoTexture&&Ue(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const ne=P.image;if(ne===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,P,M);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function G(P,M){const V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Z(V,P,M);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function N(P,M){const V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Z(V,P,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function z(P,M){const V=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){le(V,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const $={[Bf]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[zf]:t.MIRRORED_REPEAT},te={[Kt]:t.NEAREST,[eT]:t.NEAREST_MIPMAP_NEAREST,[ll]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Yu]:t.LINEAR_MIPMAP_NEAREST,[pr]:t.LINEAR_MIPMAP_LINEAR},re={[rT]:t.NEVER,[cT]:t.ALWAYS,[sT]:t.LESS,[Ip]:t.LEQUAL,[aT]:t.EQUAL,[Up]:t.GEQUAL,[oT]:t.GREATER,[lT]:t.NOTEQUAL};function se(P,M){if(M.type===hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Zt||M.magFilter===Yu||M.magFilter===ll||M.magFilter===pr||M.minFilter===Zt||M.minFilter===Yu||M.minFilter===ll||M.minFilter===pr)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,$[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,$[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,$[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,te[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==ll&&M.minFilter!==pr||M.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function be(P,M){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));const ne=M.source;let ae=u.get(ne);ae===void 0&&(ae={},u.set(ne,ae));const ee=B(M);if(ee!==P.__cacheKey){ae[ee]===void 0&&(ae[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ae[ee].usedTimes++;const Pe=ae[P.__cacheKey];Pe!==void 0&&(ae[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&T(M)),P.__cacheKey=ee,P.__webglTexture=ae[ee].texture}return V}function Ge(P,M,V){return Math.floor(Math.floor(P/V)/M)}function Ze(P,M,V,ne){const ee=P.updateRanges;if(ee.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,V,ne,M.data);else{ee.sort((de,he)=>de.start-he.start);let Pe=0;for(let de=1;de<ee.length;de++){const he=ee[Pe],Le=ee[de],De=he.start+he.count,Te=Ge(Le.start,M.width,4),et=Ge(he.start,M.width,4);Le.start<=De+1&&Te===et&&Ge(Le.start+Le.count-1,M.width,4)===Te?he.count=Math.max(he.count,Le.start+Le.count-he.start):(++Pe,ee[Pe]=Le)}ee.length=Pe+1;const me=t.getParameter(t.UNPACK_ROW_LENGTH),ze=t.getParameter(t.UNPACK_SKIP_PIXELS),He=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let de=0,he=ee.length;de<he;de++){const Le=ee[de],De=Math.floor(Le.start/4),Te=Math.ceil(Le.count/4),et=De%M.width,k=Math.floor(De/M.width),ge=Te,pe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,et),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,et,k,ge,pe,V,ne,M.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,me),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,He)}}function Z(P,M,V){let ne=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=t.TEXTURE_3D);const ae=be(P,M),ee=M.source;n.bindTexture(ne,P.__webglTexture,t.TEXTURE0+V);const Pe=i.get(ee);if(ee.version!==Pe.__version||ae===!0){n.activeTexture(t.TEXTURE0+V);const me=lt.getPrimaries(lt.workingColorSpace),ze=M.colorSpace===dr?null:lt.getPrimaries(M.colorSpace),He=M.colorSpace===dr||me===ze?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let de=x(M.image,!1,r.maxTextureSize);de=Qe(M,de);const he=s.convert(M.format,M.colorSpace),Le=s.convert(M.type);let De=_(M.internalFormat,he,Le,M.colorSpace,M.isVideoTexture);se(ne,M);let Te;const et=M.mipmaps,k=M.isVideoTexture!==!0,ge=Pe.__version===void 0||ae===!0,pe=ee.dataReady,Re=b(M,de);if(M.isDepthTexture)De=S(M.format===Yr,M.type),ge&&(k?n.texStorage2D(t.TEXTURE_2D,1,De,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,De,de.width,de.height,0,he,Le,null));else if(M.isDataTexture)if(et.length>0){k&&ge&&n.texStorage2D(t.TEXTURE_2D,Re,De,et[0].width,et[0].height);for(let fe=0,J=et.length;fe<J;fe++)Te=et[fe],k?pe&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Te.width,Te.height,he,Le,Te.data):n.texImage2D(t.TEXTURE_2D,fe,De,Te.width,Te.height,0,he,Le,Te.data);M.generateMipmaps=!1}else k?(ge&&n.texStorage2D(t.TEXTURE_2D,Re,De,de.width,de.height),pe&&Ze(M,de,he,Le)):n.texImage2D(t.TEXTURE_2D,0,De,de.width,de.height,0,he,Le,de.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,De,et[0].width,et[0].height,de.depth);for(let fe=0,J=et.length;fe<J;fe++)if(Te=et[fe],M.format!==Qn)if(he!==null)if(k){if(pe)if(M.layerUpdates.size>0){const Ne=fv(Te.width,Te.height,M.format,M.type);for(const $e of M.layerUpdates){const _t=Te.data.subarray($e*Ne/Te.data.BYTES_PER_ELEMENT,($e+1)*Ne/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,$e,Te.width,Te.height,1,he,_t)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Te.width,Te.height,de.depth,he,Te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,De,Te.width,Te.height,de.depth,0,Te.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Te.width,Te.height,de.depth,he,Le,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,De,Te.width,Te.height,de.depth,0,he,Le,Te.data)}else{k&&ge&&n.texStorage2D(t.TEXTURE_2D,Re,De,et[0].width,et[0].height);for(let fe=0,J=et.length;fe<J;fe++)Te=et[fe],M.format!==Qn?he!==null?k?pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,Te.width,Te.height,he,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,De,Te.width,Te.height,0,Te.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?pe&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Te.width,Te.height,he,Le,Te.data):n.texImage2D(t.TEXTURE_2D,fe,De,Te.width,Te.height,0,he,Le,Te.data)}else if(M.isDataArrayTexture)if(k){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,De,de.width,de.height,de.depth),pe)if(M.layerUpdates.size>0){const fe=fv(de.width,de.height,M.format,M.type);for(const J of M.layerUpdates){const Ne=de.data.subarray(J*fe/de.data.BYTES_PER_ELEMENT,(J+1)*fe/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,de.width,de.height,1,he,Le,Ne)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,he,Le,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,de.width,de.height,de.depth,0,he,Le,de.data);else if(M.isData3DTexture)k?(ge&&n.texStorage3D(t.TEXTURE_3D,Re,De,de.width,de.height,de.depth),pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,he,Le,de.data)):n.texImage3D(t.TEXTURE_3D,0,De,de.width,de.height,de.depth,0,he,Le,de.data);else if(M.isFramebufferTexture){if(ge)if(k)n.texStorage2D(t.TEXTURE_2D,Re,De,de.width,de.height);else{let fe=de.width,J=de.height;for(let Ne=0;Ne<Re;Ne++)n.texImage2D(t.TEXTURE_2D,Ne,De,fe,J,0,he,Le,null),fe>>=1,J>>=1}}else if(et.length>0){if(k&&ge){const fe=Ee(et[0]);n.texStorage2D(t.TEXTURE_2D,Re,De,fe.width,fe.height)}for(let fe=0,J=et.length;fe<J;fe++)Te=et[fe],k?pe&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,he,Le,Te):n.texImage2D(t.TEXTURE_2D,fe,De,he,Le,Te);M.generateMipmaps=!1}else if(k){if(ge){const fe=Ee(de);n.texStorage2D(t.TEXTURE_2D,Re,De,fe.width,fe.height)}pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Le,de)}else n.texImage2D(t.TEXTURE_2D,0,De,he,Le,de);g(M)&&h(ne),Pe.__version=ee.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function le(P,M,V){if(M.image.length!==6)return;const ne=be(P,M),ae=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+V);const ee=i.get(ae);if(ae.version!==ee.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const Pe=lt.getPrimaries(lt.workingColorSpace),me=M.colorSpace===dr?null:lt.getPrimaries(M.colorSpace),ze=M.colorSpace===dr||Pe===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const He=M.isCompressedTexture||M.image[0].isCompressedTexture,de=M.image[0]&&M.image[0].isDataTexture,he=[];for(let J=0;J<6;J++)!He&&!de?he[J]=x(M.image[J],!0,r.maxCubemapSize):he[J]=de?M.image[J].image:M.image[J],he[J]=Qe(M,he[J]);const Le=he[0],De=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),et=_(M.internalFormat,De,Te,M.colorSpace),k=M.isVideoTexture!==!0,ge=ee.__version===void 0||ne===!0,pe=ae.dataReady;let Re=b(M,Le);se(t.TEXTURE_CUBE_MAP,M);let fe;if(He){k&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,et,Le.width,Le.height);for(let J=0;J<6;J++){fe=he[J].mipmaps;for(let Ne=0;Ne<fe.length;Ne++){const $e=fe[Ne];M.format!==Qn?De!==null?k?pe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne,0,0,$e.width,$e.height,De,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne,et,$e.width,$e.height,0,$e.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne,0,0,$e.width,$e.height,De,Te,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne,et,$e.width,$e.height,0,De,Te,$e.data)}}}else{if(fe=M.mipmaps,k&&ge){fe.length>0&&Re++;const J=Ee(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,et,J.width,J.height)}for(let J=0;J<6;J++)if(de){k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,he[J].width,he[J].height,De,Te,he[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,et,he[J].width,he[J].height,0,De,Te,he[J].data);for(let Ne=0;Ne<fe.length;Ne++){const _t=fe[Ne].image[J].image;k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne+1,0,0,_t.width,_t.height,De,Te,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne+1,et,_t.width,_t.height,0,De,Te,_t.data)}}else{k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,Te,he[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,et,De,Te,he[J]);for(let Ne=0;Ne<fe.length;Ne++){const $e=fe[Ne];k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne+1,0,0,De,Te,$e.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne+1,et,De,Te,$e.image[J])}}}g(M)&&h(t.TEXTURE_CUBE_MAP),ee.__version=ae.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function q(P,M,V,ne,ae,ee){const Pe=s.convert(V.format,V.colorSpace),me=s.convert(V.type),ze=_(V.internalFormat,Pe,me,V.colorSpace),He=i.get(M),de=i.get(V);if(de.__renderTarget=M,!He.__hasExternalTextures){const he=Math.max(1,M.width>>ee),Le=Math.max(1,M.height>>ee);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,ee,ze,he,Le,M.depth,0,Pe,me,null):n.texImage2D(ae,ee,ze,he,Le,0,Pe,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Xe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ae,de.__webglTexture,0,L(M)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ae,de.__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(P,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const ne=M.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,ee=S(M.stencilBuffer,ae),Pe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Xe(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(M),ee,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(M),ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,P)}else{const ne=M.textures;for(let ae=0;ae<ne.length;ae++){const ee=ne[ae],Pe=s.convert(ee.format,ee.colorSpace),me=s.convert(ee.type),ze=_(ee.internalFormat,Pe,me,ee.colorSpace);Xe(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(M),ze,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(M),ze,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ze,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Q(P,M,V){const ne=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(M.depthTexture);if(ae.__renderTarget=M,(!ae.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ne){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),ae.__webglTexture===void 0){ae.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),se(t.TEXTURE_CUBE_MAP,M.depthTexture);const He=s.convert(M.depthTexture.format),de=s.convert(M.depthTexture.type);let he;M.depthTexture.format===$i?he=t.DEPTH_COMPONENT24:M.depthTexture.format===Yr&&(he=t.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,he,M.width,M.height,0,He,de,null)}}else O(M.depthTexture,0);const ee=ae.__webglTexture,Pe=L(M),me=ne?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,ze=M.depthTexture.format===Yr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===$i)Xe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ze,me,ee,0,Pe):t.framebufferTexture2D(t.FRAMEBUFFER,ze,me,ee,0);else if(M.depthTexture.format===Yr)Xe(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ze,me,ee,0,Pe):t.framebufferTexture2D(t.FRAMEBUFFER,ze,me,ee,0);else throw new Error("Unknown depthTexture format")}function oe(P){const M=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const ne=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){const ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=ne}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let ne=0;ne<6;ne++)Q(M.__webglFramebuffer[ne],P,ne);else{const ne=P.texture.mipmaps;ne&&ne.length>0?Q(M.__webglFramebuffer[0],P,0):Q(M.__webglFramebuffer,P,0)}else if(V){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=t.createRenderbuffer(),ie(M.__webglDepthbuffer[ne],P,!1);else{const ae=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,ee)}}else{const ne=P.texture.mipmaps;if(ne&&ne.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ie(M.__webglDepthbuffer,P,!1);else{const ae=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,ee)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(P,M,V){const ne=i.get(P);M!==void 0&&q(ne.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&oe(P)}function we(P){const M=P.texture,V=i.get(P),ne=i.get(M);P.addEventListener("dispose",A);const ae=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Pe=ae.length>1;if(Pe||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=M.version,a.memory.textures++),ee){V.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[me]=[];for(let ze=0;ze<M.mipmaps.length;ze++)V.__webglFramebuffer[me][ze]=t.createFramebuffer()}else V.__webglFramebuffer[me]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)V.__webglFramebuffer[me]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let me=0,ze=ae.length;me<ze;me++){const He=i.get(ae[me]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Xe(P)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let me=0;me<ae.length;me++){const ze=ae[me];V.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[me]);const He=s.convert(ze.format,ze.colorSpace),de=s.convert(ze.type),he=_(ze.internalFormat,He,de,ze.colorSpace,P.isXRRenderTarget===!0),Le=L(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,he,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,V.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(V.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)q(V.__webglFramebuffer[me][ze],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,ze);else q(V.__webglFramebuffer[me],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let me=0,ze=ae.length;me<ze;me++){const He=ae[me],de=i.get(He);let he=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,de.__webglTexture),se(he,He),q(V.__webglFramebuffer,P,He,t.COLOR_ATTACHMENT0+me,he,0),g(He)&&h(he)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,ne.__webglTexture),se(me,M),M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)q(V.__webglFramebuffer[ze],P,M,t.COLOR_ATTACHMENT0,me,ze);else q(V.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,me,0);g(M)&&h(me),n.unbindTexture()}P.depthBuffer&&oe(P)}function Se(P){const M=P.textures;for(let V=0,ne=M.length;V<ne;V++){const ae=M[V];if(g(ae)){const ee=v(P),Pe=i.get(ae).__webglTexture;n.bindTexture(ee,Pe),h(ee),n.unbindTexture()}}}const Be=[],W=[];function Me(P){if(P.samples>0){if(Xe(P)===!1){const M=P.textures,V=P.width,ne=P.height;let ae=t.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(P),me=M.length>1;if(me)for(let He=0;He<M.length;He++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ze=P.texture.mipmaps;ze&&ze.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let He=0;He<M.length;He++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[He]);const de=i.get(M[He]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,V,ne,0,0,V,ne,ae,t.NEAREST),l===!0&&(Be.length=0,W.length=0,Be.push(t.COLOR_ATTACHMENT0+He),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Be.push(ee),W.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,W)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let He=0;He<M.length;He++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[He]);const de=i.get(M[He]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.TEXTURE_2D,de,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function L(P){return Math.min(r.maxSamples,P.samples)}function Xe(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ue(P){const M=a.render.frame;d.get(P)!==M&&(d.set(P,M),P.update())}function Qe(P,M){const V=P.colorSpace,ne=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==oa&&V!==dr&&(lt.getTransfer(V)===ft?(ne!==Qn||ae!==Cn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",V)),M}function Ee(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=N,this.setTextureCube=z,this.rebindTextures=ve,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iL(t,e){function n(i,r=dr){let s;const a=lt.getTransfer(r);if(i===Cn)return t.UNSIGNED_BYTE;if(i===Rp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Pp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===jx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gx)return t.BYTE;if(i===Wx)return t.SHORT;if(i===bo)return t.UNSIGNED_SHORT;if(i===Ap)return t.INT;if(i===Si)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===Xi)return t.HALF_FLOAT;if(i===$x)return t.ALPHA;if(i===Yx)return t.RGB;if(i===Qn)return t.RGBA;if(i===$i)return t.DEPTH_COMPONENT;if(i===Yr)return t.DEPTH_STENCIL;if(i===qx)return t.RED;if(i===Lp)return t.RED_INTEGER;if(i===aa)return t.RG;if(i===Np)return t.RG_INTEGER;if(i===Dp)return t.RGBA_INTEGER;if(i===Zl||i===Jl||i===Ql||i===ec)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ql)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ec)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vf||i===Hf||i===Gf||i===Wf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jf||i===Xf||i===$f||i===Yf||i===qf||i===Kf||i===Zf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jf||i===Xf)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$f)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yf)return s.COMPRESSED_R11_EAC;if(i===qf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Kf)return s.COMPRESSED_RG11_EAC;if(i===Zf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jf||i===Qf||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===ah||i===oh||i===lh||i===ch||i===uh||i===dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qf)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===th)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ih)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ah)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ch)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dh)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fh||i===hh||i===ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fh)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mh||i===gh||i===vh||i===_h)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_h)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Co?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const rL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new sy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Mi({vertexShader:rL,fragmentShader:sL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qi(new lu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oL extends pa{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,m=null;const x=typeof XRWebGLBinding<"u",g=new aL,h={},v=n.getContextAttributes();let _=null,S=null;const b=[],C=[],A=new nt;let y=null;const T=new Fn;T.viewport=new Lt;const F=new Fn;F.viewport=new Lt;const R=[T,F],U=new _b;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=b[Z];return le===void 0&&(le=new ed,b[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=b[Z];return le===void 0&&(le=new ed,b[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=b[Z];return le===void 0&&(le=new ed,b[Z]=le),le.getHandSpace()};function O(Z){const le=C.indexOf(Z.inputSource);if(le===-1)return;const q=b[le];q!==void 0&&(q.update(Z.inputSource,Z.frame,c||a),q.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",N);for(let Z=0;Z<b.length;Z++){const le=C[Z];le!==null&&(C[Z]=null,b[Z].disconnect(le))}I=null,B=null,g.reset();for(const Z in h)delete h[Z];e.setRenderTarget(_),p=null,u=null,f=null,r=null,S=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,ie=null,Q=null;v.depth&&(Q=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,q=v.stencil?Yr:$i,ie=v.stencil?Co:Si);const oe={colorFormat:n.RGBA8,depthFormat:Q,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(oe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new xi(u.textureWidth,u.textureHeight,{format:Qn,type:Cn,depthTexture:new Po(u.textureWidth,u.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new xi(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(Z){for(let le=0;le<Z.removed.length;le++){const q=Z.removed[le],ie=C.indexOf(q);ie>=0&&(C[ie]=null,b[ie].disconnect(q))}for(let le=0;le<Z.added.length;le++){const q=Z.added[le];let ie=C.indexOf(q);if(ie===-1){for(let oe=0;oe<b.length;oe++)if(oe>=C.length){C.push(q),ie=oe;break}else if(C[oe]===null){C[oe]=q,ie=oe;break}if(ie===-1)break}const Q=b[ie];Q&&Q.connect(q)}}const z=new j,$=new j;function te(Z,le,q){z.setFromMatrixPosition(le.matrixWorld),$.setFromMatrixPosition(q.matrixWorld);const ie=z.distanceTo($),Q=le.projectionMatrix.elements,oe=q.projectionMatrix.elements,ve=Q[14]/(Q[10]-1),we=Q[14]/(Q[10]+1),Se=(Q[9]+1)/Q[5],Be=(Q[9]-1)/Q[5],W=(Q[8]-1)/Q[0],Me=(oe[8]+1)/oe[0],L=ve*W,Xe=ve*Me,Ue=ie/(-W+Me),Qe=Ue*-W;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Qe),Z.translateZ(Ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Q[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ee=ve+Ue,P=we+Ue,M=L-Qe,V=Xe+(ie-Qe),ne=Se*we/P*Ee,ae=Be*we/P*Ee;Z.projectionMatrix.makePerspective(M,V,ne,ae,Ee,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let le=Z.near,q=Z.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(q=g.depthFar)),U.near=F.near=T.near=le,U.far=F.far=T.far=q,(I!==U.near||B!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,B=U.far),U.layers.mask=Z.layers.mask|6,T.layers.mask=U.layers.mask&-5,F.layers.mask=U.layers.mask&-3;const ie=Z.parent,Q=U.cameras;re(U,ie);for(let oe=0;oe<Q.length;oe++)re(Q[oe],ie);Q.length===2?te(U,T,F):U.projectionMatrix.copy(T.projectionMatrix),se(Z,U,ie)};function se(Z,le,q){q===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(q.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ro*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(Z){return h[Z]};let be=null;function Ge(Z,le){if(d=le.getViewerPose(c||a),m=le,d!==null){const q=d.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ie=!1;q.length!==U.cameras.length&&(U.cameras.length=0,ie=!0);for(let we=0;we<q.length;we++){const Se=q[we];let Be=null;if(p!==null)Be=p.getViewport(Se);else{const Me=f.getViewSubImage(u,Se);Be=Me.viewport,we===0&&(e.setRenderTargetTextures(S,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(S))}let W=R[we];W===void 0&&(W=new Fn,W.layers.enable(we),W.viewport=new Lt,R[we]=W),W.matrix.fromArray(Se.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Se.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Be.x,Be.y,Be.width,Be.height),we===0&&(U.matrix.copy(W.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ie===!0&&U.cameras.push(W)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const we=f.getDepthInformation(q[0]);we&&we.isValid&&we.texture&&g.init(we,r.renderState)}if(Q&&Q.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let we=0;we<q.length;we++){const Se=q[we].camera;if(Se){let Be=h[Se];Be||(Be=new sy,h[Se]=Be);const W=f.getCameraImage(Se);Be.sourceTexture=W}}}}for(let q=0;q<b.length;q++){const ie=C[q],Q=b[q];ie!==null&&Q!==void 0&&Q.update(ie,le,c||a)}be&&be(Z,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),m=null}const Ze=new cy;Ze.setAnimationLoop(Ge),this.setAnimationLoop=function(Z){be=Z},this.dispose=function(){}}}const Br=new Yi,lL=new Mt;function cL(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,ay(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,_,S){h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),d(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),u(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),x(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,v,_):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Sn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Sn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),_=v.envMap,S=v.envMapRotation;_&&(g.envMap.value=_,Br.copy(S),Br.x*=-1,Br.y*=-1,Br.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),g.envMapRotation.value.setFromMatrix4(lL.makeRotationFromEuler(Br)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,_){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=_*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function d(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uL(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function c(v,_){let S=r[v.id];S===void 0&&(m(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",g));const b=_.program;i.updateUBOMapping(v,b);const C=e.render.frame;s[v.id]!==C&&(u(v),s[v.id]=C)}function d(v){const _=f();v.__bindingPointIndex=_;const S=t.createBuffer(),b=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const _=r[v.id],S=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,A=S.length;C<A;C++){const y=Array.isArray(S[C])?S[C]:[S[C]];for(let T=0,F=y.length;T<F;T++){const R=y[T];if(p(R,C,T,b)===!0){const U=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let O=0;O<I.length;O++){const G=I[O],N=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,U+B,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,B),B+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,S,b){const C=v.value,A=_+"_"+S;if(b[A]===void 0)return typeof C=="number"||typeof C=="boolean"?b[A]=C:b[A]=C.clone(),!0;{const y=b[A];if(typeof C=="number"||typeof C=="boolean"){if(y!==C)return b[A]=C,!0}else if(y.equals(C)===!1)return y.copy(C),!0}return!1}function m(v){const _=v.uniforms;let S=0;const b=16;for(let A=0,y=_.length;A<y;A++){const T=Array.isArray(_[A])?_[A]:[_[A]];for(let F=0,R=T.length;F<R;F++){const U=T[F],I=Array.isArray(U.value)?U.value:[U.value];for(let B=0,O=I.length;B<O;B++){const G=I[B],N=x(G),z=S%b,$=z%N.boundary,te=z+$;S+=$,te!==0&&b-te<N.storage&&(S+=b-te),U.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=N.storage}}}const C=S%b;return C>0&&(S+=b-C),v.__size=S,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):je("WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}const dL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function fL(){return li===null&&(li=new JT(dL,16,16,aa,Xi),li.name="DFG_LUT",li.minFilter=Zt,li.magFilter=Zt,li.wrapS=Fi,li.wrapT=Fi,li.generateMipmaps=!1,li.needsUpdate=!0),li}class hL{constructor(e={}){const{canvas:n=dT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Cn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const x=p,g=new Set([Dp,Np,Lp]),h=new Set([Cn,Si,bo,Co,Rp,Pp]),v=new Uint32Array(4),_=new Int32Array(4);let S=null,b=null;const C=[],A=[];let y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let F=!1;this._outputColorSpace=bn;let R=0,U=0,I=null,B=-1,O=null;const G=new Lt,N=new Lt;let z=null;const $=new st(0);let te=0,re=n.width,se=n.height,be=1,Ge=null,Ze=null;const Z=new Lt(0,0,re,se),le=new Lt(0,0,re,se);let q=!1;const ie=new Vp;let Q=!1,oe=!1;const ve=new Mt,we=new j,Se=new Lt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let W=!1;function Me(){return I===null?be:1}let L=i;function Xe(w,H){return n.getContext(w,H)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cp}`),n.addEventListener("webglcontextlost",Ne,!1),n.addEventListener("webglcontextrestored",$e,!1),n.addEventListener("webglcontextcreationerror",_t,!1),L===null){const H="webgl2";if(L=Xe(H,w),L===null)throw Xe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw at("WebGLRenderer: "+w.message),w}let Ue,Qe,Ee,P,M,V,ne,ae,ee,Pe,me,ze,He,de,he,Le,De,Te,et,k,ge,pe,Re;function fe(){Ue=new hR(L),Ue.init(),ge=new iL(L,Ue),Qe=new sR(L,Ue,e,ge),Ee=new tL(L,Ue),Qe.reversedDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),P=new gR(L),M=new VP,V=new nL(L,Ue,Ee,M,Qe,ge,P),ne=new fR(T),ae=new Sb(L),pe=new iR(L,ae),ee=new pR(L,ae,P,pe),Pe=new _R(L,ee,ae,pe,P),Te=new vR(L,Qe,V),he=new aR(M),me=new zP(T,ne,Ue,Qe,pe,he),ze=new cL(T,M),He=new GP,de=new qP(Ue),De=new nR(T,ne,Ee,Pe,m,l),Le=new eL(T,Pe,Qe),Re=new uL(L,P,Qe,Ee),et=new rR(L,Ue,P),k=new mR(L,Ue,P),P.programs=me.programs,T.capabilities=Qe,T.extensions=Ue,T.properties=M,T.renderLists=He,T.shadowMap=Le,T.state=Ee,T.info=P}fe(),x!==Cn&&(y=new yR(x,n.width,n.height,r,s));const J=new oL(T,L);this.xr=J,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Ue.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ue.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(w){w!==void 0&&(be=w,this.setSize(re,se,!1))},this.getSize=function(w){return w.set(re,se)},this.setSize=function(w,H,K=!0){if(J.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,se=H,n.width=Math.floor(w*be),n.height=Math.floor(H*be),K===!0&&(n.style.width=w+"px",n.style.height=H+"px"),y!==null&&y.setSize(n.width,n.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(re*be,se*be).floor()},this.setDrawingBufferSize=function(w,H,K){re=w,se=H,be=K,n.width=Math.floor(w*K),n.height=Math.floor(H*K),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(x===Cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,H,K,Y){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,H,K,Y),Ee.viewport(G.copy(Z).multiplyScalar(be).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,H,K,Y){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,H,K,Y),Ee.scissor(N.copy(le).multiplyScalar(be).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(w){Ee.setScissorTest(q=w)},this.setOpaqueSort=function(w){Ge=w},this.setTransparentSort=function(w){Ze=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,K=!0){let Y=0;if(w){let X=!1;if(I!==null){const xe=I.texture.format;X=g.has(xe)}if(X){const xe=I.texture.type,Ce=h.has(xe),ye=De.getClearColor(),Ie=De.getClearAlpha(),Oe=ye.r,qe=ye.g,tt=ye.b;Ce?(v[0]=Oe,v[1]=qe,v[2]=tt,v[3]=Ie,L.clearBufferuiv(L.COLOR,0,v)):(_[0]=Oe,_[1]=qe,_[2]=tt,_[3]=Ie,L.clearBufferiv(L.COLOR,0,_))}else Y|=L.COLOR_BUFFER_BIT}H&&(Y|=L.DEPTH_BUFFER_BIT),K&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",$e,!1),n.removeEventListener("webglcontextcreationerror",_t,!1),De.dispose(),He.dispose(),de.dispose(),M.dispose(),ne.dispose(),Pe.dispose(),pe.dispose(),Re.dispose(),me.dispose(),J.dispose(),J.removeEventListener("sessionstart",jp),J.removeEventListener("sessionend",Xp),Lr.stop()};function Ne(w){w.preventDefault(),Uc("WebGLRenderer: Context Lost."),F=!0}function $e(){Uc("WebGLRenderer: Context Restored."),F=!1;const w=P.autoReset,H=Le.enabled,K=Le.autoUpdate,Y=Le.needsUpdate,X=Le.type;fe(),P.autoReset=w,Le.enabled=H,Le.autoUpdate=K,Le.needsUpdate=Y,Le.type=X}function _t(w){at("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function dt(w){const H=w.target;H.removeEventListener("dispose",dt),wi(H)}function wi(w){Ti(w),M.remove(w)}function Ti(w){const H=M.get(w).programs;H!==void 0&&(H.forEach(function(K){me.releaseProgram(K)}),w.isShaderMaterial&&me.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,K,Y,X,xe){H===null&&(H=Be);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,ye=xy(w,H,K,Y,X);Ee.setMaterial(Y,Ce);let Ie=K.index,Oe=1;if(Y.wireframe===!0){if(Ie=ee.getWireframeAttribute(K),Ie===void 0)return;Oe=2}const qe=K.drawRange,tt=K.attributes.position;let ke=qe.start*Oe,mt=(qe.start+qe.count)*Oe;xe!==null&&(ke=Math.max(ke,xe.start*Oe),mt=Math.min(mt,(xe.start+xe.count)*Oe)),Ie!==null?(ke=Math.max(ke,0),mt=Math.min(mt,Ie.count)):tt!=null&&(ke=Math.max(ke,0),mt=Math.min(mt,tt.count));const Nt=mt-ke;if(Nt<0||Nt===1/0)return;pe.setup(X,Y,ye,K,Ie);let Rt,gt=et;if(Ie!==null&&(Rt=ae.get(Ie),gt=k,gt.setIndex(Rt)),X.isMesh)Y.wireframe===!0?(Ee.setLineWidth(Y.wireframeLinewidth*Me()),gt.setMode(L.LINES)):gt.setMode(L.TRIANGLES);else if(X.isLine){let en=Y.linewidth;en===void 0&&(en=1),Ee.setLineWidth(en*Me()),X.isLineSegments?gt.setMode(L.LINES):X.isLineLoop?gt.setMode(L.LINE_LOOP):gt.setMode(L.LINE_STRIP)}else X.isPoints?gt.setMode(L.POINTS):X.isSprite&&gt.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Fc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))gt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const en=X._multiDrawStarts,Fe=X._multiDrawCounts,Mn=X._multiDrawCount,ut=Ie?ae.get(Ie).bytesPerElement:1,Wn=M.get(Y).currentProgram.getUniforms();for(let si=0;si<Mn;si++)Wn.setValue(L,"_gl_DrawID",si),gt.render(en[si]/ut,Fe[si])}else if(X.isInstancedMesh)gt.renderInstances(ke,Nt,X.count);else if(K.isInstancedBufferGeometry){const en=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Fe=Math.min(K.instanceCount,en);gt.renderInstances(ke,Nt,Fe)}else gt.render(ke,Nt)};function Wp(w,H,K){w.transparent===!0&&w.side===Di&&w.forceSinglePass===!1?(w.side=Sn,w.needsUpdate=!0,Ho(w,H,K),w.side=br,w.needsUpdate=!0,Ho(w,H,K),w.side=Di):Ho(w,H,K)}this.compile=function(w,H,K=null){K===null&&(K=w),b=de.get(K),b.init(H),A.push(b),K.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),w!==K&&w.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights();const Y=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xe=X.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){const ye=xe[Ce];Wp(ye,K,X),Y.add(ye)}else Wp(xe,K,X),Y.add(xe)}),b=A.pop(),Y},this.compileAsync=function(w,H,K=null){const Y=this.compile(w,H,K);return new Promise(X=>{function xe(){if(Y.forEach(function(Ce){M.get(Ce).currentProgram.isReady()&&Y.delete(Ce)}),Y.size===0){X(w);return}setTimeout(xe,10)}Ue.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let du=null;function _y(w){du&&du(w)}function jp(){Lr.stop()}function Xp(){Lr.start()}const Lr=new cy;Lr.setAnimationLoop(_y),typeof self<"u"&&Lr.setContext(self),this.setAnimationLoop=function(w){du=w,J.setAnimationLoop(w),w===null?Lr.stop():Lr.start()},J.addEventListener("sessionstart",jp),J.addEventListener("sessionend",Xp),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const K=J.enabled===!0&&J.isPresenting===!0,Y=y!==null&&(I===null||K)&&y.begin(T,I);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(H),H=J.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,H,I),b=de.get(w,A.length),b.init(H),A.push(b),ve.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ie.setFromProjectionMatrix(ve,pi,H.reversedDepth),oe=this.localClippingEnabled,Q=he.init(this.clippingPlanes,oe),S=He.get(w,C.length),S.init(),C.push(S),J.enabled===!0&&J.isPresenting===!0){const Ce=T.xr.getDepthSensingMesh();Ce!==null&&fu(Ce,H,-1/0,T.sortObjects)}fu(w,H,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(Ge,Ze),W=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,W&&De.addToRenderList(S,w),this.info.render.frame++,Q===!0&&he.beginShadows();const X=b.state.shadowsArray;if(Le.render(X,w,H),Q===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&y.hasRenderPass())===!1){const Ce=S.opaque,ye=S.transmissive;if(b.setupLights(),H.isArrayCamera){const Ie=H.cameras;if(ye.length>0)for(let Oe=0,qe=Ie.length;Oe<qe;Oe++){const tt=Ie[Oe];Yp(Ce,ye,w,tt)}W&&De.render(w);for(let Oe=0,qe=Ie.length;Oe<qe;Oe++){const tt=Ie[Oe];$p(S,w,tt,tt.viewport)}}else ye.length>0&&Yp(Ce,ye,w,H),W&&De.render(w),$p(S,w,H)}I!==null&&U===0&&(V.updateMultisampleRenderTarget(I),V.updateRenderTargetMipmap(I)),Y&&y.end(T),w.isScene===!0&&w.onAfterRender(T,w,H),pe.resetDefaultState(),B=-1,O=null,A.pop(),A.length>0?(b=A[A.length-1],Q===!0&&he.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function fu(w,H,K,Y){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ie.intersectsSprite(w)){Y&&Se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);const Ce=Pe.update(w),ye=w.material;ye.visible&&S.push(w,Ce,ye,K,Se.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ie.intersectsObject(w))){const Ce=Pe.update(w),ye=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Se.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Se.copy(Ce.boundingSphere.center)),Se.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(ye)){const Ie=Ce.groups;for(let Oe=0,qe=Ie.length;Oe<qe;Oe++){const tt=Ie[Oe],ke=ye[tt.materialIndex];ke&&ke.visible&&S.push(w,Ce,ke,K,Se.z,tt)}}else ye.visible&&S.push(w,Ce,ye,K,Se.z,null)}}const xe=w.children;for(let Ce=0,ye=xe.length;Ce<ye;Ce++)fu(xe[Ce],H,K,Y)}function $p(w,H,K,Y){const{opaque:X,transmissive:xe,transparent:Ce}=w;b.setupLightsView(K),Q===!0&&he.setGlobalState(T.clippingPlanes,K),Y&&Ee.viewport(G.copy(Y)),X.length>0&&Vo(X,H,K),xe.length>0&&Vo(xe,H,K),Ce.length>0&&Vo(Ce,H,K),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Yp(w,H,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const ke=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new xi(1,1,{generateMipmaps:!0,type:ke?Xi:Cn,minFilter:pr,samples:Math.max(4,Qe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const xe=b.state.transmissionRenderTarget[Y.id],Ce=Y.viewport||G;xe.setSize(Ce.z*T.transmissionResolutionScale,Ce.w*T.transmissionResolutionScale);const ye=T.getRenderTarget(),Ie=T.getActiveCubeFace(),Oe=T.getActiveMipmapLevel();T.setRenderTarget(xe),T.getClearColor($),te=T.getClearAlpha(),te<1&&T.setClearColor(16777215,.5),T.clear(),W&&De.render(K);const qe=T.toneMapping;T.toneMapping=_i;const tt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),Q===!0&&he.setGlobalState(T.clippingPlanes,Y),Vo(w,K,Y),V.updateMultisampleRenderTarget(xe),V.updateRenderTargetMipmap(xe),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let mt=0,Nt=H.length;mt<Nt;mt++){const Rt=H[mt],{object:gt,geometry:en,material:Fe,group:Mn}=Rt;if(Fe.side===Di&&gt.layers.test(Y.layers)){const ut=Fe.side;Fe.side=Sn,Fe.needsUpdate=!0,qp(gt,K,Y,en,Fe,Mn),Fe.side=ut,Fe.needsUpdate=!0,ke=!0}}ke===!0&&(V.updateMultisampleRenderTarget(xe),V.updateRenderTargetMipmap(xe))}T.setRenderTarget(ye,Ie,Oe),T.setClearColor($,te),tt!==void 0&&(Y.viewport=tt),T.toneMapping=qe}function Vo(w,H,K){const Y=H.isScene===!0?H.overrideMaterial:null;for(let X=0,xe=w.length;X<xe;X++){const Ce=w[X],{object:ye,geometry:Ie,group:Oe}=Ce;let qe=Ce.material;qe.allowOverride===!0&&Y!==null&&(qe=Y),ye.layers.test(K.layers)&&qp(ye,H,K,Ie,qe,Oe)}}function qp(w,H,K,Y,X,xe){w.onBeforeRender(T,H,K,Y,X,xe),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(T,H,K,Y,w,xe),X.transparent===!0&&X.side===Di&&X.forceSinglePass===!1?(X.side=Sn,X.needsUpdate=!0,T.renderBufferDirect(K,H,Y,X,w,xe),X.side=br,X.needsUpdate=!0,T.renderBufferDirect(K,H,Y,X,w,xe),X.side=Di):T.renderBufferDirect(K,H,Y,X,w,xe),w.onAfterRender(T,H,K,Y,X,xe)}function Ho(w,H,K){H.isScene!==!0&&(H=Be);const Y=M.get(w),X=b.state.lights,xe=b.state.shadowsArray,Ce=X.state.version,ye=me.getParameters(w,X.state,xe,H,K),Ie=me.getProgramCacheKey(ye);let Oe=Y.programs;Y.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;const qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Y.envMap=ne.get(w.envMap||Y.environment,qe),Y.envMapRotation=Y.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",dt),Oe=new Map,Y.programs=Oe);let tt=Oe.get(Ie);if(tt!==void 0){if(Y.currentProgram===tt&&Y.lightsStateVersion===Ce)return Zp(w,ye),tt}else ye.uniforms=me.getUniforms(w),w.onBeforeCompile(ye,T),tt=me.acquireProgram(ye,Ie),Oe.set(Ie,tt),Y.uniforms=ye.uniforms;const ke=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=he.uniform),Zp(w,ye),Y.needsLights=Sy(w),Y.lightsStateVersion=Ce,Y.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=tt,Y.uniformsList=null,tt}function Kp(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=tc.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Zp(w,H){const K=M.get(w);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function xy(w,H,K,Y,X){H.isScene!==!0&&(H=Be),V.resetTextureUnits();const xe=H.fog,Ce=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,ye=I===null?T.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:oa,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Oe=ne.get(Y.envMap||Ce,Ie),qe=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,tt=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!K.morphAttributes.position,mt=!!K.morphAttributes.normal,Nt=!!K.morphAttributes.color;let Rt=_i;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Rt=T.toneMapping);const gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,en=gt!==void 0?gt.length:0,Fe=M.get(Y),Mn=b.state.lights;if(Q===!0&&(oe===!0||w!==O)){const Ht=w===O&&Y.id===B;he.setState(Y,w,Ht)}let ut=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Mn.state.version||Fe.outputColorSpace!==ye||X.isBatchedMesh&&Fe.batching===!1||!X.isBatchedMesh&&Fe.batching===!0||X.isBatchedMesh&&Fe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Fe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Fe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Fe.instancingMorph===!1&&X.morphTexture!==null||Fe.envMap!==Oe||Y.fog===!0&&Fe.fog!==xe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==he.numPlanes||Fe.numIntersection!==he.numIntersection)||Fe.vertexAlphas!==qe||Fe.vertexTangents!==tt||Fe.morphTargets!==ke||Fe.morphNormals!==mt||Fe.morphColors!==Nt||Fe.toneMapping!==Rt||Fe.morphTargetsCount!==en)&&(ut=!0):(ut=!0,Fe.__version=Y.version);let Wn=Fe.currentProgram;ut===!0&&(Wn=Ho(Y,H,X));let si=!1,Nr=!1,as=!1;const vt=Wn.getUniforms(),Yt=Fe.uniforms;if(Ee.useProgram(Wn.program)&&(si=!0,Nr=!0,as=!0),Y.id!==B&&(B=Y.id,Nr=!0),si||O!==w){Ee.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",w.projectionMatrix),vt.setValue(L,"viewMatrix",w.matrixWorldInverse);const Qi=vt.map.cameraPosition;Qi!==void 0&&Qi.setValue(L,we.setFromMatrixPosition(w.matrixWorld)),Qe.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,Nr=!0,as=!0)}if(Fe.needsLights&&(Mn.state.directionalShadowMap.length>0&&vt.setValue(L,"directionalShadowMap",Mn.state.directionalShadowMap,V),Mn.state.spotShadowMap.length>0&&vt.setValue(L,"spotShadowMap",Mn.state.spotShadowMap,V),Mn.state.pointShadowMap.length>0&&vt.setValue(L,"pointShadowMap",Mn.state.pointShadowMap,V)),X.isSkinnedMesh){vt.setOptional(L,X,"bindMatrix"),vt.setOptional(L,X,"bindMatrixInverse");const Ht=X.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),vt.setValue(L,"boneTexture",Ht.boneTexture,V))}X.isBatchedMesh&&(vt.setOptional(L,X,"batchingTexture"),vt.setValue(L,"batchingTexture",X._matricesTexture,V),vt.setOptional(L,X,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",X._indirectTexture,V),vt.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",X._colorsTexture,V));const Ji=K.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Te.update(X,K,Wn),(Nr||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,vt.setValue(L,"receiveShadow",X.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(Yt.envMapIntensity.value=H.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=fL()),Nr&&(vt.setValue(L,"toneMappingExposure",T.toneMappingExposure),Fe.needsLights&&yy(Yt,as),xe&&Y.fog===!0&&ze.refreshFogUniforms(Yt,xe),ze.refreshMaterialUniforms(Yt,Y,be,se,b.state.transmissionRenderTarget[w.id]),tc.upload(L,Kp(Fe),Yt,V)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(tc.upload(L,Kp(Fe),Yt,V),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(L,"center",X.center),vt.setValue(L,"modelViewMatrix",X.modelViewMatrix),vt.setValue(L,"normalMatrix",X.normalMatrix),vt.setValue(L,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ht=Y.uniformsGroups;for(let Qi=0,os=Ht.length;Qi<os;Qi++){const Jp=Ht[Qi];Re.update(Jp,Wn),Re.bind(Jp,Wn)}}return Wn}function yy(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Sy(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,H,K){const Y=M.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=H,M.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const K=M.get(w);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const My=L.createFramebuffer();this.setRenderTarget=function(w,H=0,K=0){I=w,R=H,U=K;let Y=null,X=!1,xe=!1;if(w){const ye=M.get(w);if(ye.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(L.FRAMEBUFFER,ye.__webglFramebuffer),G.copy(w.viewport),N.copy(w.scissor),z=w.scissorTest,Ee.viewport(G),Ee.scissor(N),Ee.setScissorTest(z),B=-1;return}else if(ye.__webglFramebuffer===void 0)V.setupRenderTarget(w);else if(ye.__hasExternalTextures)V.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const qe=w.depthTexture;if(ye.__boundDepthTexture!==qe){if(qe!==null&&M.has(qe)&&(w.width!==qe.image.width||w.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(w)}}const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(xe=!0);const Oe=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[H])?Y=Oe[H][K]:Y=Oe[H],X=!0):w.samples>0&&V.useMultisampledRTT(w)===!1?Y=M.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?Y=Oe[K]:Y=Oe,G.copy(w.viewport),N.copy(w.scissor),z=w.scissorTest}else G.copy(Z).multiplyScalar(be).floor(),N.copy(le).multiplyScalar(be).floor(),z=q;if(K!==0&&(Y=My),Ee.bindFramebuffer(L.FRAMEBUFFER,Y)&&Ee.drawBuffers(w,Y),Ee.viewport(G),Ee.scissor(N),Ee.setScissorTest(z),X){const ye=M.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,ye.__webglTexture,K)}else if(xe){const ye=H;for(let Ie=0;Ie<w.textures.length;Ie++){const Oe=M.get(w.textures[Ie]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,K,ye)}}else if(w!==null&&K!==0){const ye=M.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ye.__webglTexture,K)}B=-1},this.readRenderTargetPixels=function(w,H,K,Y,X,xe,Ce,ye=0){if(!(w&&w.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){Ee.bindFramebuffer(L.FRAMEBUFFER,Ie);try{const Oe=w.textures[ye],qe=Oe.format,tt=Oe.type;if(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ye),!Qe.textureFormatReadable(qe)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(tt)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-Y&&K>=0&&K<=w.height-X&&L.readPixels(H,K,Y,X,ge.convert(qe),ge.convert(tt),xe)}finally{const Oe=I!==null?M.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,H,K,Y,X,xe,Ce,ye=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(H>=0&&H<=w.width-Y&&K>=0&&K<=w.height-X){Ee.bindFramebuffer(L.FRAMEBUFFER,Ie);const Oe=w.textures[ye],qe=Oe.format,tt=Oe.type;if(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ye),!Qe.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,xe.byteLength,L.STREAM_READ),L.readPixels(H,K,Y,X,ge.convert(qe),ge.convert(tt),0);const mt=I!==null?M.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,mt);const Nt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fT(L,Nt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,xe),L.deleteBuffer(ke),L.deleteSync(Nt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,K=0){const Y=Math.pow(2,-K),X=Math.floor(w.image.width*Y),xe=Math.floor(w.image.height*Y),Ce=H!==null?H.x:0,ye=H!==null?H.y:0;V.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Ce,ye,X,xe),Ee.unbindTexture()};const Ey=L.createFramebuffer(),wy=L.createFramebuffer();this.copyTextureToTexture=function(w,H,K=null,Y=null,X=0,xe=0){let Ce,ye,Ie,Oe,qe,tt,ke,mt,Nt;const Rt=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(K!==null)Ce=K.max.x-K.min.x,ye=K.max.y-K.min.y,Ie=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,qe=K.min.y,tt=K.isBox3?K.min.z:0;else{const Yt=Math.pow(2,-X);Ce=Math.floor(Rt.width*Yt),ye=Math.floor(Rt.height*Yt),w.isDataArrayTexture?Ie=Rt.depth:w.isData3DTexture?Ie=Math.floor(Rt.depth*Yt):Ie=1,Oe=0,qe=0,tt=0}Y!==null?(ke=Y.x,mt=Y.y,Nt=Y.z):(ke=0,mt=0,Nt=0);const gt=ge.convert(H.format),en=ge.convert(H.type);let Fe;H.isData3DTexture?(V.setTexture3D(H,0),Fe=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(V.setTexture2DArray(H,0),Fe=L.TEXTURE_2D_ARRAY):(V.setTexture2D(H,0),Fe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const Mn=L.getParameter(L.UNPACK_ROW_LENGTH),ut=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Wn=L.getParameter(L.UNPACK_SKIP_PIXELS),si=L.getParameter(L.UNPACK_SKIP_ROWS),Nr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Rt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Oe),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,tt);const as=w.isDataArrayTexture||w.isData3DTexture,vt=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const Yt=M.get(w),Ji=M.get(H),Ht=M.get(Yt.__renderTarget),Qi=M.get(Ji.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let os=0;os<Ie;os++)as&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(w).__webglTexture,X,tt+os),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,M.get(H).__webglTexture,xe,Nt+os)),L.blitFramebuffer(Oe,qe,Ce,ye,ke,mt,Ce,ye,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||M.has(w)){const Yt=M.get(w),Ji=M.get(H);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Ey),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,wy);for(let Ht=0;Ht<Ie;Ht++)as?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Yt.__webglTexture,X,tt+Ht):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Yt.__webglTexture,X),vt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ji.__webglTexture,xe,Nt+Ht):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ji.__webglTexture,xe),X!==0?L.blitFramebuffer(Oe,qe,Ce,ye,ke,mt,Ce,ye,L.COLOR_BUFFER_BIT,L.NEAREST):vt?L.copyTexSubImage3D(Fe,xe,ke,mt,Nt+Ht,Oe,qe,Ce,ye):L.copyTexSubImage2D(Fe,xe,ke,mt,Oe,qe,Ce,ye);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else vt?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Fe,xe,ke,mt,Nt,Ce,ye,Ie,gt,en,Rt.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(Fe,xe,ke,mt,Nt,Ce,ye,Ie,gt,Rt.data):L.texSubImage3D(Fe,xe,ke,mt,Nt,Ce,ye,Ie,gt,en,Rt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,xe,ke,mt,Ce,ye,gt,en,Rt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,xe,ke,mt,Rt.width,Rt.height,gt,Rt.data):L.texSubImage2D(L.TEXTURE_2D,xe,ke,mt,Ce,ye,gt,en,Rt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wn),L.pixelStorei(L.UNPACK_SKIP_ROWS,si),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nr),xe===0&&H.generateMipmaps&&L.generateMipmap(Fe),Ee.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&V.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?V.setTextureCube(w,0):w.isData3DTexture?V.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?V.setTexture2DArray(w,0):V.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){R=0,U=0,I=null,Ee.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}let nc=null;function Ot(t,e="success"){nc==null||nc(t,e)}function pL(){const[t,e]=D.useState([]),n=D.useRef(0);return nc=D.useCallback((i,r)=>{const s=++n.current;e(a=>[...a,{id:s,message:i,type:r}]),setTimeout(()=>e(a=>a.filter(o=>o.id!==s)),4e3)},[]),t.length===0?null:E.jsx("div",{style:{position:"fixed",bottom:20,right:20,zIndex:9999,display:"flex",flexDirection:"column",gap:8},children:t.map(i=>E.jsx("div",{style:{padding:"10px 18px",borderRadius:8,fontFamily:"'Inter', sans-serif",fontSize:13,fontWeight:500,color:"#fff",background:i.type==="error"?"#c0392b":i.type==="info"?"#3A72A0":"#3D7C47",boxShadow:"0 4px 16px rgba(0,0,0,0.12)",animation:"toast-in .3s ease",maxWidth:360},children:i.message},i.id))})}const Ys={paternal:{hex:"#2F6B3E",css:"var(--green)",bg:"rgba(47,107,62,0.10)",three:3107646,label:"Paternal"},maternal:{hex:"#1A5C8A",css:"var(--accent)",bg:"rgba(26,92,138,0.10)",three:1727626,label:"Maternal"},sibling:{hex:"#7A3A8A",css:"#7A3A8A",bg:"rgba(122,58,138,0.10)",three:8010378,label:"Sibling branch"},married:{hex:"#8A5A1A",css:"#8A5A1A",bg:"rgba(138,90,26,0.10)",three:9067034,label:"Married in"}};function mL(t,e){const n=[];return e.forEach(i=>{i.type==="marriage"?(i.a===t&&n.push({id:i.b,label:"Spouse",type:"marriage"}),i.b===t&&n.push({id:i.a,label:"Spouse",type:"marriage"})):(i.a===t&&n.push({id:i.b,label:"Child",type:"child"}),i.b===t&&n.push({id:i.a,label:"Parent",type:"parent"}))}),n}function gL(t,e,n){const i=[[t]],r=new Set([t]);for(;i.length;){const s=i.shift(),a=s[s.length-1];if(a===e)return s;for(const o of vL(a,n))r.has(o)||(r.add(o),i.push([...s,o]))}return null}function vL(t,e){const n=[];return e.forEach(i=>{i.a===t&&n.push(i.b),i.b===t&&n.push(i.a)}),n}const _L=14e3,xL=.009,yL=.8,SL=150,zc=512,ML=256,my=216,EL=1-my/zc,Fv=4;function gy(t,e){return e?128:t?122:112}function vy(t,e){return e?110:t?105:95}function Ov(t,e){return vy(t,e)*gy(t,e)/zc}function kv(t,e){const n=t._p.clone();return e==="2d"&&(n.z=0),n}function Bv(t,e,n,i,r){const s=kv(t,r),a=kv(e,r),o=a.clone().sub(s),l=o.length();if(l<1e-6)return[s,a];o.normalize();const c=Ov(t.id===n,t.id===i)+Fv,d=Ov(e.id===n,e.id===i)+Fv,f=Math.max(l/2-1,0),u=Math.min(c,f),p=Math.min(d,f);return s.addScaledVector(o,u),a.addScaledVector(o,-p),[s,a]}function wL(t,e,n){var c;const i=document.createElement("canvas");i.width=zc,i.height=zc;const r=i.getContext("2d"),s=ML,a=my,o=gy(e,n),l=((c=Ys[t.branch])==null?void 0:c.hex)||"#888";if((e||n)&&(r.beginPath(),r.arc(s,a,o+6,0,Math.PI*2),r.fillStyle=n?l+"55":l+"33",r.fill()),r.beginPath(),r.arc(s,a,o,0,Math.PI*2),r.fillStyle="#FDFBF8",r.fill(),r.beginPath(),r.arc(s,a,o+1,0,Math.PI*2),r.strokeStyle="rgba(0,0,0,0.08)",r.lineWidth=6,r.stroke(),r.beginPath(),r.arc(s,a,o,0,Math.PI*2),r.strokeStyle=l,r.lineWidth=n?14:e?12:10,r.stroke(),r.font=`600 ${n?60:52}px Inter, sans-serif`,r.fillStyle=l,r.textAlign="center",r.textBaseline="middle",r.fillText(t.firstName[0]+t.lastName[0],s,a),r.font="600 34px Inter, sans-serif",r.fillStyle="#2D2A26",r.fillText(t.firstName,s,a+o+46),r.font="500 28px Inter, sans-serif",r.fillStyle="#5E5850",r.fillText(t.lastName,s,a+o+84),t.birth){r.font="400 24px Inter, sans-serif",r.fillStyle="#9A948E";const d=t.birth+(t.death?`–${t.death}`:"");r.fillText(d,s,a+o+120)}return i}function zv(t,e,n){const i=new ib(wL(t,e,n));i.colorSpace=bn,i.minFilter=pr,i.magFilter=Zt,i.needsUpdate=!0;const r=new ty({map:i,transparent:!0,depthWrite:!1}),s=new KT(r),a=vy(e,n);return s.scale.set(a,a,1),s.center.set(.5,EL),s.userData.pid=t.id,s}function TL(t){return t.type==="marriage"?new fb({color:9073488,dashSize:6,gapSize:4,transparent:!0,opacity:.45}):new Hp({color:12892581,transparent:!0,opacity:.4})}const bL=D.forwardRef(function({people:e,rels:n,selectedId:i,focusedId:r,pathMode:s,graphMode:a,onNodeClick:o,onPathSelect:l,tooltipRef:c},d){const f=D.useRef(null),u=D.useRef(null);return D.useEffect(()=>{const p=new WT;p.background=new st(16118251),p.fog=new Bp(16118251,800,1600);const m=new hL({antialias:!0});m.setPixelRatio(Math.min(devicePixelRatio,2)),m.setSize(innerWidth,innerHeight),m.shadowMap.enabled=!1;const x=f.current;x.appendChild(m.domElement);const g=new Fn(50,innerWidth/innerHeight,.1,3e3);g.position.set(0,0,620),p.add(new gb(16777215,1));const h=new mb(16775408,.4);h.position.set(100,200,200),p.add(h);const v={},_=[],S=new xb,b=new nt;let C=!1,A=0,y=0,T=0,F=Math.PI/2,R=620,U=null,I=!1;const B=new j;let O=!0,G=null;function N(){var oe;if((((oe=u.current)==null?void 0:oe.graphMode)||"2d")==="2d"){g.position.set(B.x,B.y,Math.max(R,180)),g.lookAt(B.x,B.y,0);return}g.position.x=B.x+R*Math.sin(F)*Math.sin(T),g.position.y=B.y+R*Math.cos(F),g.position.z=B.z+R*Math.sin(F)*Math.cos(T),g.lookAt(B)}function z(Q,oe){b.x=Q/innerWidth*2-1,b.y=-(oe/innerHeight)*2+1}function $(Q,oe){var we,Se,Be;return z(Q,oe),S.setFromCamera(b,g),((Be=(Se=(we=S.intersectObjects(Object.values(v).map(W=>W.sp),!1)[0])==null?void 0:we.object)==null?void 0:Se.userData)==null?void 0:Be.pid)||null}function te(Q){var oe,ve;U=Q.pointerId,I=!1,C=!0,A=Q.clientX,y=Q.clientY,(ve=(oe=m.domElement).setPointerCapture)==null||ve.call(oe,Q.pointerId)}function re(Q){var Se;if(!C||U!==null&&Q.pointerId!==U)return;const oe=Q.clientX-A,ve=Q.clientY-y;if((Math.abs(oe)>2||Math.abs(ve)>2)&&(I=!0),(((Se=u.current)==null?void 0:Se.graphMode)||"2d")==="2d"){const Be=R/620;B.x-=oe*Be,B.y+=ve*Be,A=Q.clientX,y=Q.clientY,N();return}T-=oe*.005,F=Math.max(.08,Math.min(Math.PI-.08,F+ve*.005)),A=Q.clientX,y=Q.clientY,N()}function se(Q){var oe,ve,we,Se;if(!(U!==null&&Q.pointerId!==U)&&(C=!1,(ve=(oe=m.domElement).releasePointerCapture)==null||ve.call(oe,Q.pointerId),U=null,!I)){const Be=$(Q.clientX,Q.clientY);if(!Be)return;const W=u.current;W!=null&&W.pathMode?(we=W.onPathSelect)==null||we.call(W,Be):(Se=W==null?void 0:W.onNodeClick)==null||Se.call(W,Be)}}m.domElement.addEventListener("pointerdown",te),window.addEventListener("pointermove",re,{passive:!0}),window.addEventListener("pointerup",se),window.addEventListener("pointercancel",se),m.domElement.addEventListener("wheel",Q=>{R=Math.max(120,Math.min(1800,R+Q.deltaY*.5)),N()},{passive:!0}),m.domElement.style.cursor="grab",m.domElement.style.touchAction="none";function be(Q){var we;if(Q.pointerType&&Q.pointerType!=="mouse"||C)return;z(Q.clientX,Q.clientY),S.setFromCamera(b,g);const oe=S.intersectObjects(Object.values(v).map(Se=>Se.sp),!1),ve=c.current;if(ve)if(oe.length){const Se=oe[0].object.userData.pid;if(Se!==G){G=Se;const Be=(we=u.current)==null?void 0:we.people,W=Be==null?void 0:Be.find(Me=>Me.id===Se);W&&(ve.textContent=W.firstName+" "+W.lastName+(W.birth?` · ${W.birth}${W.death?"–"+W.death:""}`:""))}ve.classList.add("show"),ve.style.left=Q.clientX+14+"px",ve.style.top=Q.clientY-8+"px",m.domElement.style.cursor="pointer"}else G=null,ve.classList.remove("show"),m.domElement.style.cursor=C?"grabbing":"grab"}m.domElement.addEventListener("pointermove",be);function Ge(){var we,Se,Be;if(!O)return;const Q=(we=u.current)==null?void 0:we.people,oe=(Se=u.current)==null?void 0:Se.rels,ve=(Be=u.current)==null?void 0:Be.focusedId;!Q||!oe||(Q.forEach((W,Me)=>{var Ue;const L=((Ue=u.current)==null?void 0:Ue.graphMode)||"2d";if(W.id===ve){W._p.set(0,0,L==="2d"?0:W._p.z),W._v.set(0,0,0);return}const Xe=new j;Q.forEach((Qe,Ee)=>{if(Me===Ee)return;const P=new j().subVectors(W._p,Qe._p);L==="2d"&&(P.z=0);const M=Math.max(P.lengthSq(),900);P.normalize().multiplyScalar(_L/M),Xe.add(P)}),L==="2d"&&(Xe.z=0),Xe.add(W._p.clone().multiplyScalar(-.0015)),W._v.add(Xe),W._v.multiplyScalar(yL),W._p.add(W._v),L==="2d"&&(W._v.z=0,W._p.z=PT.lerp(W._p.z,0,.35))}),oe.forEach(W=>{var Qe;const Me=Q.find(Ee=>Ee.id===W.a),L=Q.find(Ee=>Ee.id===W.b);if(!Me||!L)return;const Xe=new j().subVectors(L._p,Me._p);(((Qe=u.current)==null?void 0:Qe.graphMode)||"2d")==="2d"&&(Xe.z=0);const Ue=(Xe.length()-SL)*xL;Xe.normalize().multiplyScalar(Ue),Me.id!==ve&&Me._v.add(Xe),L.id!==ve&&L._v.sub(Xe)}))}function Ze(){var Se,Be,W,Me;const Q=(Se=u.current)==null?void 0:Se.people,oe=((Be=u.current)==null?void 0:Be.graphMode)||"2d",ve=(W=u.current)==null?void 0:W.selectedId,we=(Me=u.current)==null?void 0:Me.focusedId;Q&&_.forEach(L=>{const Xe=Q.find(Ee=>Ee.id===L.a),Ue=Q.find(Ee=>Ee.id===L.b);if(!Xe||!Ue)return;const Qe=Bv(Xe,Ue,ve,we,oe);L.geo.setFromPoints(Qe),L.type==="marriage"&&L.line.computeLineDistances()})}let Z=0,le;function q(){var Q;if(le=requestAnimationFrame(q),Z++,Z%2===0){Ge();const oe=((Q=u.current)==null?void 0:Q.graphMode)||"2d";Object.values(v).forEach(({sp:ve,p:we})=>{const Se=we._p.clone();oe==="2d"&&(Se.z=0),ve.position.lerp(Se,.12)}),Ze()}m.render(p,g)}function ie(){g.aspect=innerWidth/innerHeight,g.updateProjectionMatrix(),m.setSize(innerWidth,innerHeight)}return window.addEventListener("resize",ie),N(),q(),setTimeout(()=>{O=!1},7e3),u.current={scene:p,renderer:m,camera:g,nodeMap:v,edgeArr:_,ray:S,mo:b,simOn:O,ct:B,updCam:N,people:null,rels:null,selectedId:null,focusedId:null,pathMode:!1,graphMode:"2d",onNodeClick:null,onPathSelect:null,setSimOn:Q=>{O=Q},getSimOn:()=>O,resetView:()=>{T=0,F=Math.PI/2,R=620,B.set(0,0,0),N()}},()=>{cancelAnimationFrame(le),window.removeEventListener("resize",ie),window.removeEventListener("pointermove",re),window.removeEventListener("pointerup",se),window.removeEventListener("pointercancel",se),m.domElement.removeEventListener("pointerdown",te),m.domElement.removeEventListener("pointermove",be),x&&m.domElement.parentNode===x&&x.removeChild(m.domElement),m.dispose()}},[]),D.useEffect(()=>{const p=u.current;if(!p)return;const{scene:m,nodeMap:x,edgeArr:g}=p;e.forEach((h,v)=>{if(!h._p){const _=v/e.length*Math.PI*2,S=140+Math.random()*120;h._p=new j(Math.cos(_)*S+(Math.random()-.5)*40,Math.sin(_)*S+(Math.random()-.5)*40,(Math.random()-.5)*50),h._v=new j}}),Object.values(x).forEach(h=>m.remove(h.sp)),g.forEach(h=>m.remove(h.line)),g.length=0,Object.keys(x).forEach(h=>delete x[h]),e.forEach(h=>{const v=h.id===i,_=h.id===r,S=zv(h,v,_);S.position.copy(h._p),m.add(S),x[h.id]={sp:S,p:h}}),n.forEach(h=>{const v=e.find(y=>y.id===h.a),_=e.find(y=>y.id===h.b);if(!v||!_)return;const S=Bv(v,_,i,r,a||"2d"),b=new Gn().setFromPoints(S),C=TL(h),A=new nb(b,C);h.type==="marriage"&&A.computeLineDistances(),m.add(A),g.push({line:A,a:h.a,b:h.b,type:h.type,geo:b,mat:C})}),p.people=e,p.rels=n},[e,n,i,r,a]),D.useEffect(()=>{const p=u.current;p&&(p.selectedId=i,p.focusedId=r,p.pathMode=s,p.graphMode=a,p.updCam(),p.onNodeClick=o,p.onPathSelect=l)},[i,r,s,a,o,l]),D.useEffect(()=>{const p=u.current;if(!p)return;a==="3d"&&e.forEach(x=>{Math.abs(x._p.z)<1&&(x._p.z=(Math.random()-.5)*140)}),p.setSimOn(!0),p.updCam();const m=setTimeout(()=>p.setSimOn(!1),3500);return()=>clearTimeout(m)},[a,e]),D.useEffect(()=>{const p=u.current;if(!p)return;const m={resetView:p.resetView,setSimOn:p.setSimOn,getSimOn:p.getSimOn,recenter:()=>{p.ct.set(0,0,0),p.updCam()},shiftToOrigin:x=>{const g=e.find(v=>v.id===x);if(!g)return;const h=g._p.clone();e.forEach(v=>v._p.sub(h)),p.setSimOn(!0),setTimeout(()=>p.setSimOn(!1),5e3),p.ct.set(0,0,0),p.resetView()},highlightPath:x=>{const{nodeMap:g,edgeArr:h}=p,v=new Set(x);Object.values(g).forEach(({sp:_,p:S})=>{_.material.opacity=x.length===0||v.has(S.id)?1:.15}),h.forEach(_=>{const S=x.length===0||v.has(_.a)&&v.has(_.b)&&(x.indexOf(_.a)===x.indexOf(_.b)-1||x.indexOf(_.b)===x.indexOf(_.a)-1);_.line.material.opacity=x.length===0?_.type==="marriage"?.55:.5:S?1:.06,S&&x.length>0?_.line.material.color=new st(4029511):x.length===0&&(_.line.material.color=new st(_.type==="marriage"?9073488:12892581))})},refreshNode:x=>{const{nodeMap:g,scene:h}=p,v=g[x];if(!v)return;h.remove(v.sp);const _=v.p,S=zv(_,_.id===p.selectedId,_.id===p.focusedId);S.position.copy(_._p),h.add(S),g[x]={sp:S,p:_}},startSim:(x=5e3)=>{p.setSimOn(!0),setTimeout(()=>p.setSimOn(!1),x)}};f.current&&(f.current.__sceneApi=m),d&&(typeof d=="function"?d({__sceneApi:m}):d.current={__sceneApi:m})}),E.jsx("div",{ref:f,style:{position:"fixed",inset:0,zIndex:0,touchAction:"none"}})}),qs={active:"#4A5D23",background:"#F9F7F2",border:"#D8D2C4",text:"#3D3A34",shadow:"rgba(43, 52, 25, 0.12)"};function Vv(t,e,n){return{appearance:"none",border:"none",background:t?qs.active:"transparent",color:t?qs.background:qs.text,cursor:t?"default":"pointer",fontFamily:"'Inter', sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.08em",lineHeight:1,minHeight:30,minWidth:34,padding:"0 10px",borderRadius:e?"999px 0 0 999px":n?"0 999px 999px 0":0,transition:"background 160ms ease, color 160ms ease, transform 160ms ease"}}function CL(){var i;const{i18n:t}=Pr(),e=((i=t.language)==null?void 0:i.slice(0,2))==="es"?"es":"en",n=async r=>{r!==e&&await t.changeLanguage(r)};return E.jsxs("div",{role:"group","aria-label":"Language switcher",style:{display:"inline-flex",alignItems:"center",padding:3,borderRadius:999,background:qs.background,border:`1px solid ${qs.border}`,boxShadow:`0 4px 12px ${qs.shadow}`,flexShrink:0},children:[E.jsx("button",{type:"button",onClick:()=>n("en"),"aria-pressed":e==="en","aria-label":"Switch language to English",style:Vv(e==="en",!0,!1),children:"EN"}),E.jsx("button",{type:"button",onClick:()=>n("es"),"aria-pressed":e==="es","aria-label":"Cambiar idioma a espanol",style:Vv(e==="es",!1,!0),children:"ES"})]})}const AL="_topbar_1k63l_1",RL="_logo_1k63l_7",PL="_logoLeaf_1k63l_10",LL="_logoText_1k63l_11",NL="_sep_1k63l_15",DL="_searchWrap_1k63l_18",IL="_searchInput_1k63l_19",UL="_searchIco_1k63l_27",FL="_searchResults_1k63l_31",OL="_srItem_1k63l_37",kL="_searchEmpty_1k63l_43",BL="_srAvatar_1k63l_46",zL="_srName_1k63l_50",VL="_srDates_1k63l_51",HL="_tbtn_1k63l_52",GL="_pathBtnActive_1k63l_58",WL="_addBtn_1k63l_59",jL="_desktopActions_1k63l_61",XL="_viewToggle_1k63l_62",$L="_viewBtn_1k63l_66",YL="_viewBtnActive_1k63l_71",qL="_mobileMenuBtn_1k63l_74",KL="_mobileMenuBackdrop_1k63l_79",ZL="_mobileMenu_1k63l_74",JL="_mobileAction_1k63l_83",QL="_mobileActionPrimary_1k63l_84",e3="_mobileActionActive_1k63l_85",t3="_focusLabel_1k63l_90",n3="_focusLabelClose_1k63l_97",i3="_focusLabelAvatar_1k63l_102",r3="_pathbar_1k63l_109",s3="_pathcopy_1k63l_116",a3="_pathlabel_1k63l_119",o3="_pathhelp_1k63l_122",l3="_pathslots_1k63l_125",c3="_psel_1k63l_128",u3="_pselEmpty_1k63l_128",d3="_pathslotLabel_1k63l_138",f3="_pathsep_1k63l_141",h3="_pathclear_1k63l_142",p3="_pathbanner_1k63l_150",m3="_pbtext_1k63l_156",Ve={topbar:AL,logo:RL,logoLeaf:PL,logoText:LL,sep:NL,searchWrap:DL,searchInput:IL,searchIco:UL,searchResults:FL,srItem:OL,searchEmpty:kL,srAvatar:BL,srName:zL,srDates:VL,tbtn:HL,pathBtnActive:GL,addBtn:WL,desktopActions:jL,viewToggle:XL,viewBtn:$L,viewBtnActive:YL,mobileMenuBtn:qL,mobileMenuBackdrop:KL,mobileMenu:ZL,mobileAction:JL,mobileActionPrimary:QL,mobileActionActive:e3,focusLabel:t3,focusLabelClose:n3,focusLabelAvatar:i3,pathbar:r3,pathcopy:s3,pathlabel:a3,pathhelp:o3,pathslots:l3,psel:c3,pselEmpty:u3,pathslotLabel:d3,pathsep:f3,pathclear:h3,pathbanner:p3,pbtext:m3};function Hv(t){return(t||"").normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toLowerCase().trim()}function g3({people:t,rels:e,focusedId:n,pathMode:i,graphMode:r,is3DAvailable:s,onSetFocus:a,onOpenPanel:o,onTogglePathMode:l,onToggleGraphMode:c,onResetView:d,onOpenModal:f,sceneRef:u}){var Z,le;const{t:p}=Pr(),[m,x]=D.useState(""),[g,h]=D.useState(!1),[v,_]=D.useState(!1),[S,b]=D.useState(null),[C,A]=D.useState(null),[y,T]=D.useState(null),F=D.useRef(null),R=Hv(m),U=R?t.filter(q=>Hv([q.firstName,q.lastName,q.maiden,`${q.firstName} ${q.lastName}`,q.birth].filter(Boolean).join(" ")).includes(R)).slice(0,8):[],I=n?t.find(q=>q.id===n):null,B=q=>{h(!1),x(""),_(!1),a(q.id),o(q.id)},O=D.useCallback(()=>{U.length!==0&&B(U[0])},[U]),G=()=>{var q,ie;_(!1),i?(b(null),A(null),T(null),(ie=(q=u.current)==null?void 0:q.__sceneApi)==null||ie.highlightPath([])):(b(null),A(null),T(null)),l()},N=()=>{var q,ie;b(null),A(null),T(null),(ie=(q=u.current)==null?void 0:q.__sceneApi)==null||ie.highlightPath([]),i&&l()},z=()=>{_(!1),f()},$=()=>{_(!1),d()},te=()=>{_(!1),c==null||c()},re=D.useCallback(q=>{var ie,Q;if(S){if(!C&&q!==S){A(q);const oe=gL(S,q,e),ve=t.find(Se=>Se.id===S),we=t.find(Se=>Se.id===q);if(!oe)T(p("topBar.noConnection",{first:ve.firstName,second:we.firstName}));else{const Se=oe.length-1,Be=oe.length;T(p("topBar.connectionFound",{first:`${ve.firstName} ${ve.lastName}`,second:`${we.firstName} ${we.lastName}`,relationships:Se,relationshipSuffix:Se!==1?"s":"",people:Be,peopleSuffix:Be!==1?"s":""})),(Q=(ie=u.current)==null?void 0:ie.__sceneApi)==null||Q.highlightPath(oe)}}}else{b(q);const oe=t.find(ve=>ve.id===q);oe&&T(p("topBar.selectedFirst",{name:`${oe.firstName} ${oe.lastName}`}))}},[S,C,t,e,u,p]);D.useEffect(()=>{if(!(typeof window>"u"))return window.__topBarPathSelect=re,()=>{window.__topBarPathSelect===re&&delete window.__topBarPathSelect}},[re]);const se=()=>{var q,ie;(ie=(q=u.current)==null?void 0:q.__sceneApi)==null||ie.startSim(4e3),a(null)},be=S?t.find(q=>q.id===S):null,Ge=C?t.find(q=>q.id===C):null,Ze=S?C?p("topBar.pathFound"):p("topBar.pathStepTwo",{name:(be==null?void 0:be.firstName)||p("topBar.firstPerson")}):p("topBar.pathStepOne");return E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:Ve.topbar,children:[E.jsxs("div",{className:Ve.logo,children:[E.jsxs("svg",{className:Ve.logoLeaf,viewBox:"0 0 26 26",fill:"none",children:[E.jsx("path",{d:"M13 3C7.5 3 4 8 4 13c0 4.5 3 8 9 9.5C19 21 22 17 22 13 22 7.5 18 3 13 3z",fill:"#3D7C47",opacity:".15"}),E.jsx("path",{d:"M13 22.5V10M13 10C13 10 9 13 7 17M13 10C13 10 17 13 19 17",stroke:"#3D7C47",strokeWidth:"1.5",strokeLinecap:"round"})]}),E.jsx("span",{className:Ve.logoText,children:"Kin"})]}),E.jsx("div",{className:Ve.sep}),E.jsxs("div",{className:Ve.searchWrap,ref:F,children:[E.jsxs("svg",{className:Ve.searchIco,viewBox:"0 0 16 16",fill:"none",children:[E.jsx("circle",{cx:"7",cy:"7",r:"4.5",stroke:"currentColor",strokeWidth:"1.3"}),E.jsx("path",{d:"M10.5 10.5L13.5 13.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]}),E.jsx("input",{className:Ve.searchInput,type:"text",placeholder:p("topBar.searchPlaceholder"),autoComplete:"off",value:m,onChange:q=>{x(q.target.value),h(!0)},onFocus:()=>m.trim()&&h(!0),onBlur:()=>setTimeout(()=>h(!1),200),onKeyDown:q=>{q.key==="Enter"&&(q.preventDefault(),O())}}),g&&R&&E.jsx("div",{className:Ve.searchResults,children:U.length>0?U.map(q=>{const ie=Ys[q.branch];return E.jsxs("div",{className:Ve.srItem,onMouseDown:()=>B(q),children:[E.jsx("div",{className:Ve.srAvatar,style:{background:(ie==null?void 0:ie.bg)||"#eee",color:(ie==null?void 0:ie.hex)||"#333"},children:q.firstName[0]+q.lastName[0]}),E.jsxs("div",{children:[E.jsxs("div",{className:Ve.srName,children:[q.firstName," ",q.lastName]}),E.jsxs("div",{className:Ve.srDates,children:[q.birth||""," ",q.maiden?`· née ${q.maiden}`:""]})]})]},q.id)}):E.jsx("div",{className:Ve.searchEmpty,children:p("topBar.noMatches")})})]}),E.jsxs("div",{className:Ve.desktopActions,children:[E.jsx("button",{className:`${Ve.tbtn} ${i?Ve.pathBtnActive:""}`,onClick:G,children:p("topBar.findConnection")}),s&&E.jsxs("div",{className:Ve.viewToggle,"aria-label":"Graph view mode",children:[E.jsx("button",{className:`${Ve.viewBtn} ${r==="2d"?Ve.viewBtnActive:""}`,onClick:r==="3d"?c:void 0,type:"button",children:p("topBar.view2d")}),E.jsx("button",{className:`${Ve.viewBtn} ${r==="3d"?Ve.viewBtnActive:""}`,onClick:r==="2d"?c:void 0,type:"button",children:p("topBar.view3d")})]}),E.jsxs("button",{className:`${Ve.tbtn} ${Ve.addBtn}`,onClick:z,children:["+ ",p("topBar.addPerson")]}),E.jsx("button",{className:Ve.tbtn,onClick:$,children:p("topBar.resetView")})]}),E.jsx("div",{style:{flexShrink:0},children:E.jsx(CL,{})}),E.jsx("button",{type:"button",className:Ve.mobileMenuBtn,onClick:()=>_(q=>!q),"aria-expanded":v,"aria-label":p(v?"topBar.closeMenu":"topBar.openMenu"),children:"☰"})]}),v&&E.jsxs(E.Fragment,{children:[E.jsx("button",{className:Ve.mobileMenuBackdrop,onClick:()=>_(!1),"aria-label":p("topBar.closeMenu")}),E.jsxs("div",{className:Ve.mobileMenu,children:[E.jsx("button",{className:`${Ve.mobileAction} ${i?Ve.mobileActionActive:""}`,onClick:G,children:p("topBar.findConnection")}),E.jsx("button",{className:`${Ve.mobileAction} ${Ve.mobileActionPrimary}`,onClick:z,children:p("topBar.addPerson")}),E.jsx("button",{className:Ve.mobileAction,onClick:$,children:p("topBar.resetView")}),s&&E.jsx("button",{className:Ve.mobileAction,onClick:te,children:p(r==="2d"?"topBar.switchTo3d":"topBar.switchTo2d")})]})]}),I&&E.jsxs("div",{className:Ve.focusLabel,children:[E.jsx("div",{className:Ve.focusLabelAvatar,style:{background:((Z=Ys[I.branch])==null?void 0:Z.bg)||"#eee",color:((le=Ys[I.branch])==null?void 0:le.hex)||"#888"},children:I.firstName[0]+I.lastName[0]}),E.jsxs("span",{children:[p("topBar.viewingConnectionsFor")," ",E.jsxs("strong",{children:[I.firstName," ",I.lastName]})]}),E.jsx("button",{className:Ve.focusLabelClose,onClick:se,title:p("topBar.clearFocus"),children:"×"})]}),i&&E.jsxs("div",{className:Ve.pathbar,children:[E.jsxs("div",{className:Ve.pathcopy,children:[E.jsx("span",{className:Ve.pathlabel,children:p("topBar.pathLabel")}),E.jsx("span",{className:Ve.pathhelp,children:Ze})]}),E.jsxs("div",{className:Ve.pathslots,children:[E.jsxs("div",{className:be?Ve.psel:Ve.pselEmpty,children:[E.jsx("span",{className:Ve.pathslotLabel,children:p("topBar.firstPerson")}),E.jsx("span",{children:be?`${be.firstName} ${be.lastName}`:p("topBar.notSelectedYet")})]}),E.jsx("span",{className:Ve.pathsep,children:"→"}),E.jsxs("div",{className:Ge?Ve.psel:Ve.pselEmpty,children:[E.jsx("span",{className:Ve.pathslotLabel,children:p("topBar.secondPerson")}),E.jsx("span",{children:Ge?`${Ge.firstName} ${Ge.lastName}`:p("topBar.notSelectedYet")})]})]}),E.jsxs("button",{className:Ve.pathclear,onClick:N,children:["✕ ",p("topBar.cancelPath")]})]}),y&&E.jsxs("div",{className:Ve.pathbanner,children:[E.jsx("p",{className:Ve.pbtext,dangerouslySetInnerHTML:{__html:y}}),E.jsx("button",{onClick:()=>{var q,ie;T(null),(ie=(q=u.current)==null?void 0:q.__sceneApi)==null||ie.highlightPath([])},children:p("common.dismiss")})]})]})}const v3="_panel_nnk9b_1",_3="_open_nnk9b_8",x3="_pclose_nnk9b_9",y3="_photoWrap_nnk9b_16",S3="_photo_nnk9b_16",M3="_avatar_nnk9b_21",E3="_body_nnk9b_29",w3="_pname_nnk9b_34",T3="_pmaiden_nnk9b_38",b3="_pdates_nnk9b_39",C3="_branchBadge_nnk9b_40",A3="_psect_nnk9b_44",R3="_pbio_nnk9b_49",P3="_tabRow_nnk9b_50",L3="_tabBtn_nnk9b_53",N3="_tabBtnActive_nnk9b_60",D3="_rels_nnk9b_63",I3="_rchip_nnk9b_64",U3="_rchipAvatar_nnk9b_69",F3="_rchipInfo_nnk9b_73",O3="_rchipName_nnk9b_74",k3="_rchipLbl_nnk9b_77",B3="_rchipActions_nnk9b_81",z3="_rchipBtn_nnk9b_82",V3="_docs_nnk9b_88",H3="_ditem_nnk9b_89",G3="_dico_nnk9b_93",W3="_uploadBtn_nnk9b_94",j3="_emptyState_nnk9b_101",X3="_exploreCard_nnk9b_106",$3="_exploreTitle_nnk9b_110",Y3="_exploreBody_nnk9b_113",q3="_linkBox_nnk9b_116",K3="_actionRow_nnk9b_121",Z3="_primaryAction_nnk9b_124",J3="_secondaryAction_nnk9b_124",Q3="_summaryGrid_nnk9b_134",e2="_summaryCard_nnk9b_137",t2="_summaryCount_nnk9b_141",n2="_summaryLabel_nnk9b_144",i2="_mediaCard_nnk9b_147",r2="_mediaPreview_nnk9b_150",s2="_mediaMeta_nnk9b_153",a2="_factsGrid_nnk9b_157",o2="_factRow_nnk9b_158",l2="_factLabel_nnk9b_159",c2="_factValue_nnk9b_163",u2="_factActions_nnk9b_164",d2="_factIconBtn_nnk9b_165",f2="_storyCard_nnk9b_173",h2="_storyTitle_nnk9b_177",p2="_storyBody_nnk9b_180",m2="_storyMeta_nnk9b_184",g2="_storyInput_nnk9b_187",v2="_storyTextarea_nnk9b_194 _storyInput_nnk9b_187",ce={panel:v3,open:_3,pclose:x3,photoWrap:y3,photo:S3,avatar:M3,body:E3,pname:w3,pmaiden:T3,pdates:b3,branchBadge:C3,psect:A3,pbio:R3,tabRow:P3,tabBtn:L3,tabBtnActive:N3,rels:D3,rchip:I3,rchipAvatar:U3,rchipInfo:F3,rchipName:O3,rchipLbl:k3,rchipActions:B3,rchipBtn:z3,docs:V3,ditem:H3,dico:G3,uploadBtn:W3,emptyState:j3,exploreCard:X3,exploreTitle:$3,exploreBody:Y3,linkBox:q3,actionRow:K3,primaryAction:Z3,secondaryAction:J3,summaryGrid:Q3,summaryCard:e2,summaryCount:t2,summaryLabel:n2,mediaCard:i2,mediaPreview:r2,mediaMeta:s2,factsGrid:a2,factRow:o2,factLabel:l2,factValue:c2,factActions:u2,factIconBtn:d2,storyCard:f2,storyTitle:h2,storyBody:p2,storyMeta:m2,storyInput:g2,storyTextarea:v2};function _2({person:t,people:e,rels:n,onClose:i,onViewPerson:r,onFocusPerson:s,onPhotoChange:a,onRelationshipAdded:o,onRelationshipRemoved:l}){var Be;const{t:c,i18n:d}=Pr(),f=D.useRef(null),[u,p]=D.useState(!1),[m,x]=D.useState(!1),[g,h]=D.useState("parent"),[v,_]=D.useState(""),[S,b]=D.useState(!1),[C,A]=D.useState([]),[y,T]=D.useState(!1),[F,R]=D.useState({title:"",body:""}),[U,I]=D.useState(!1),[B,O]=D.useState("profile"),{activeTreeId:G}=bp();if(D.useEffect(()=>{t&&(A([]),I(!1),R({title:"",body:""}),O("profile"),T(!1),_g.list(t.id).then(W=>{A(W),T(!0)}).catch(()=>{A([]),T(!0)}))},[t]),!t)return null;const N=mL(t.id,n),z=Ys[t.branch],$=(z==null?void 0:z.hex)||"#888",te=t.public_slug?`${window.location.origin}/p/${t.public_slug}`:null,re=t.photo?1:0,se=((Be=t.docs)==null?void 0:Be.length)||0,be=t.birth?t.death?`${t.birth} – ${t.death} · ${c("detailPanel.deceased")}`:c("detailPanel.born",{year:t.birth}):"",Ge=t.branch?c(`addPersonModal.branchOptions.${t.branch}`,{defaultValue:(z==null?void 0:z.label)||t.branch}):t.branch,Ze=W=>W.type==="parent"?c("detailPanel.parentOf",{name:t.firstName}):W.type==="child"?c("detailPanel.childOf",{name:t.firstName}):W.type==="marriage"?c("detailPanel.spousePartner"):W.label,Z=()=>{var W;return(W=f.current)==null?void 0:W.click()},le=W=>{var Xe;const Me=(Xe=W.target.files)==null?void 0:Xe[0];if(!Me)return;const L=new FileReader;L.onload=async Ue=>{try{await a(t.id,Ue.target.result)}catch(Qe){Ot(Qe.message||c("detailPanel.failedPhoto"),"error")}finally{W.target.value=""}},L.readAsDataURL(Me)},q=W=>W==="parent"?{background:"var(--tag-parent-bg)",color:"var(--tag-parent)"}:W==="marriage"?{background:"var(--tag-marry-bg)",color:"var(--tag-marry)"}:{background:"var(--tag-child-bg)",color:"var(--tag-child)"},ie=async()=>{if(!(!v||!G)){b(!0);try{let W,Me,L;g==="parent"?(L="parent_child",W=v,Me=t.id):g==="child"?(L="parent_child",W=t.id,Me=v):g==="spouse"?(L="marriage",W=t.id,Me=v):g==="sibling"&&(L="sibling",W=t.id,Me=v);const Xe=await Rc.create({treeId:G,type:L,profileA:W,profileB:Me});o==null||o(Xe),x(!1),_(""),Ot(c("detailPanel.connectionAdded"),"info")}catch(W){console.error("[Kin] Failed to add relationship:",W),Ot(W.message||c("detailPanel.failedConnectionAdd"),"error")}finally{b(!1)}}},Q=async W=>{try{await Rc.remove(W),l==null||l(W),Ot(c("detailPanel.connectionRemoved"),"info")}catch(Me){console.error("[Kin] Failed to remove relationship:",Me),Ot(Me.message||c("detailPanel.failedConnectionRemove"),"error")}},oe=new Set(N.map(W=>W.id)),ve=new Set(n.filter(W=>W.type==="marriage").flatMap(W=>[W.a,W.b])),we=ve.has(t.id),Se=e.filter(W=>W.id===t.id||oe.has(W.id)?!1:g==="spouse"?!we&&!ve.has(W.id):!0);return E.jsxs("div",{className:`${ce.panel} ${ce.open}`,children:[E.jsx("button",{className:ce.pclose,onClick:i,children:"✕"}),E.jsx("div",{className:ce.photoWrap,children:t.photo?E.jsx("img",{className:ce.photo,src:t.photo,alt:""}):E.jsx("div",{className:ce.avatar,style:{color:$,background:(z==null?void 0:z.bg)||"#eee"},children:t.firstName[0]+t.lastName[0]})}),E.jsxs("div",{className:ce.body,children:[E.jsxs("div",{className:ce.pname,children:[t.firstName," ",t.lastName]}),t.maiden&&E.jsxs("div",{className:ce.pmaiden,children:["née ",t.maiden]}),E.jsx("div",{className:ce.pdates,children:be}),E.jsx("div",{className:ce.branchBadge,style:{background:(z==null?void 0:z.bg)||"#eee",color:$},children:Ge}),E.jsxs("div",{className:ce.tabRow,role:"tablist","aria-label":c("detailPanel.personDetailsViews"),children:[E.jsx("button",{className:`${ce.tabBtn} ${B==="profile"?ce.tabBtnActive:""}`,onClick:()=>O("profile"),role:"tab","aria-selected":B==="profile",children:c("detailPanel.profileDetails")}),E.jsx("button",{className:`${ce.tabBtn} ${B==="explore"?ce.tabBtnActive:""}`,onClick:()=>O("explore"),role:"tab","aria-selected":B==="explore",children:c("detailPanel.shareExplore")})]}),B==="profile"&&E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ce.psect,children:c("detailPanel.biography")}),E.jsx("div",{className:ce.pbio,children:t.bio||c("detailPanel.noBiography")}),t.facts&&Object.keys(t.facts).length>0&&(()=>{const W=new Set(["gender","birth_year","death_year","biography"]),Me=Object.entries(t.facts).filter(([L])=>!W.has(L));return Me.length===0?null:E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ce.psect,children:c("detailPanel.details")}),E.jsx("div",{className:ce.factsGrid,children:Me.map(([L,Xe])=>E.jsxs("div",{className:ce.factRow,children:[E.jsx("span",{className:ce.factLabel,children:L.replace(/_/g," ")}),E.jsx("span",{className:ce.factValue,children:Xe.map(Ue=>Ue.value).join(", ")}),t.isOwner&&Xe.map(Ue=>E.jsxs("span",{className:ce.factActions,children:[E.jsx("button",{className:ce.factIconBtn,title:Ue.verified?c("detailPanel.unverify"):c("detailPanel.verify"),onClick:async()=>{try{await vg.verify(Ue.id),Ot(Ue.verified?c("detailPanel.unverified"):c("detailPanel.verified"),"info")}catch(Qe){Ot(Qe.message,"error")}},children:Ue.verified?"✅":"☑️"}),E.jsx("button",{className:ce.factIconBtn,title:Ue.locked?c("detailPanel.unlock"):c("detailPanel.lock"),onClick:async()=>{try{await vg.lock(Ue.id),Ot(Ue.locked?c("detailPanel.unlocked"):c("detailPanel.locked"),"info")}catch(Qe){Ot(Qe.message,"error")}},children:Ue.locked?"🔒":"🔓"})]},Ue.id))]},L))})]})})(),E.jsx("div",{className:ce.psect,children:c("detailPanel.connections")}),E.jsxs("div",{className:ce.rels,children:[N.map(W=>{const Me=e.find(Ue=>Ue.id===W.id);if(!Me)return null;const L=Ys[Me.branch],Xe=n.find(Ue=>Ue.a===t.id&&Ue.b===W.id||Ue.b===t.id&&Ue.a===W.id);return E.jsxs("div",{className:ce.rchip,children:[E.jsx("div",{className:ce.rchipAvatar,style:{background:(L==null?void 0:L.bg)||"#eee",color:(L==null?void 0:L.hex)||"#333"},children:Me.firstName[0]+Me.lastName[0]}),E.jsxs("div",{className:ce.rchipInfo,children:[E.jsxs("div",{className:ce.rchipName,children:[Me.firstName," ",Me.lastName]}),E.jsx("span",{className:ce.rchipLbl,style:q(W.type),children:Ze(W)})]}),E.jsxs("div",{className:ce.rchipActions,children:[E.jsx("button",{className:ce.rchipBtn,onClick:()=>r(Me.id),children:c("common.view")}),E.jsx("button",{className:ce.rchipBtn,onClick:()=>s(Me.id),children:c("common.focus")}),Xe&&E.jsx("button",{className:ce.rchipBtn,style:{color:"#c44",background:"rgba(204,68,68,0.1)"},onClick:()=>Q(Xe.id),title:c("detailPanel.removeConnection"),children:"✕"})]})]},W.id+W.type)}),N.length===0&&E.jsx("div",{style:{fontSize:13,color:"var(--text-muted)",padding:"4px 0"},children:c("detailPanel.noConnections")})]}),m?E.jsxs("div",{style:{marginTop:8,padding:10,borderRadius:8,background:"var(--surface2)",border:"1px solid var(--border)"},children:[E.jsx("div",{style:{display:"flex",gap:6,marginBottom:6},children:E.jsxs("select",{value:g,onChange:W=>h(W.target.value),style:{flex:1,padding:"6px 8px",fontSize:12,borderRadius:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontFamily:"'Inter', sans-serif"},children:[E.jsx("option",{value:"parent",children:c("detailPanel.parentOf",{name:t.firstName})}),E.jsx("option",{value:"child",children:c("detailPanel.childOf",{name:t.firstName})}),E.jsx("option",{value:"spouse",disabled:we,children:c(we?"detailPanel.spouseAlreadyLinked":"detailPanel.spousePartner")}),E.jsx("option",{value:"sibling",children:c("detailPanel.sibling")})]})}),E.jsxs("select",{value:v,onChange:W=>_(W.target.value),style:{width:"100%",padding:"6px 8px",fontSize:12,borderRadius:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontFamily:"'Inter', sans-serif",marginBottom:6},children:[E.jsxs("option",{value:"",children:["— ",c("detailPanel.selectPerson")," —"]}),Se.map(W=>E.jsxs("option",{value:W.id,children:[W.firstName," ",W.lastName]},W.id))]}),g==="spouse"&&Se.length===0&&E.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:6},children:c("detailPanel.spouseRule")}),E.jsxs("div",{style:{display:"flex",gap:6},children:[E.jsx("button",{className:ce.rchipBtn,onClick:ie,disabled:!v||S,style:{flex:1,padding:"6px 0",textAlign:"center"},children:c(S?"detailPanel.saving":"common.add")}),E.jsx("button",{className:ce.rchipBtn,onClick:()=>{x(!1),_("")},style:{padding:"6px 10px"},children:c("common.cancel")})]})]}):E.jsxs("button",{className:ce.uploadBtn,style:{marginTop:6},onClick:()=>x(!0),children:["+ ",c("detailPanel.addConnection")]}),E.jsx("div",{className:ce.psect,children:c("detailPanel.documents")}),E.jsxs("div",{className:ce.docs,children:[(t.docs||[]).map((W,Me)=>E.jsxs("div",{className:ce.ditem,children:[E.jsx("span",{className:ce.dico,children:"📄"}),E.jsx("span",{children:W})]},Me)),(t.docs||[]).length===0&&E.jsx("div",{className:ce.emptyState,children:c("detailPanel.noDocuments")})]}),E.jsx("div",{className:ce.psect,children:c("detailPanel.storiesMemories")}),C.map(W=>E.jsxs("div",{className:ce.storyCard,children:[E.jsx("div",{className:ce.storyTitle,children:W.title}),E.jsx("div",{className:ce.storyBody,children:W.body}),E.jsxs("div",{className:ce.storyMeta,children:[W.author_name||c("detailPanel.unknownAuthor")," · ",new Date(W.created_at).toLocaleDateString(d.language)]})]},W.id)),C.length===0&&!U&&y&&E.jsx("div",{className:ce.emptyState,children:c("detailPanel.noStories")}),U?E.jsxs("div",{style:{marginTop:6},children:[E.jsx("input",{className:ce.storyInput,placeholder:c("detailPanel.storyTitlePlaceholder"),value:F.title,onChange:W=>R(Me=>({...Me,title:W.target.value}))}),E.jsx("textarea",{className:ce.storyTextarea,placeholder:c("detailPanel.storyBodyPlaceholder"),value:F.body,onChange:W=>R(Me=>({...Me,body:W.target.value}))}),E.jsxs("div",{style:{display:"flex",gap:6},children:[E.jsx("button",{className:ce.rchipBtn,style:{flex:1,padding:"6px 0",textAlign:"center"},disabled:!F.title.trim()||!F.body.trim(),onClick:async()=>{try{const W=await _g.create({profileId:t.id,title:F.title.trim(),body:F.body.trim()});A(Me=>[W,...Me]),R({title:"",body:""}),I(!1),Ot(c("detailPanel.storyAdded"),"info")}catch(W){Ot(W.message||c("detailPanel.failedStory"),"error")}},children:c("common.save")}),E.jsx("button",{className:ce.rchipBtn,style:{padding:"6px 10px"},onClick:()=>{I(!1),R({title:"",body:""})},children:c("common.cancel")})]})]}):E.jsxs("button",{className:ce.uploadBtn,style:{marginTop:6},onClick:()=>I(!0),children:["+ ",c("detailPanel.addStory")]}),E.jsx("button",{className:ce.uploadBtn,onClick:Z,children:c("detailPanel.uploadPhoto")}),E.jsx("input",{ref:f,type:"file",accept:"image/*",style:{display:"none"},onChange:le})]}),B==="explore"&&E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ce.psect,children:c("detailPanel.publicPage")}),E.jsxs("div",{className:ce.exploreCard,children:[E.jsx("div",{className:ce.exploreTitle,children:c("detailPanel.browseTitle")}),E.jsx("div",{className:ce.exploreBody,children:c("detailPanel.browseBody")}),te?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ce.linkBox,children:te}),E.jsxs("div",{className:ce.actionRow,children:[E.jsx("button",{className:ce.primaryAction,onClick:()=>window.open(te,"_blank","noopener,noreferrer"),children:c("detailPanel.openPublicPage")}),E.jsx("button",{className:ce.secondaryAction,onClick:()=>{navigator.clipboard.writeText(te),Ot(c("detailPanel.publicLinkCopied"),"info")},children:c("detailPanel.copyLink")})]})]}):E.jsx("div",{className:ce.emptyState,children:c("detailPanel.noPublicPage")})]}),E.jsx("div",{className:ce.psect,children:c("detailPanel.exploreSummary")}),E.jsxs("div",{className:ce.summaryGrid,children:[E.jsxs("div",{className:ce.summaryCard,children:[E.jsx("div",{className:ce.summaryCount,children:C.length}),E.jsx("div",{className:ce.summaryLabel,children:c("detailPanel.stories")})]}),E.jsxs("div",{className:ce.summaryCard,children:[E.jsx("div",{className:ce.summaryCount,children:re}),E.jsx("div",{className:ce.summaryLabel,children:c("detailPanel.photos")})]}),E.jsxs("div",{className:ce.summaryCard,children:[E.jsx("div",{className:ce.summaryCount,children:se}),E.jsx("div",{className:ce.summaryLabel,children:c("detailPanel.documentsLabel")})]})]}),E.jsx("div",{className:ce.psect,children:c("detailPanel.storiesPeopleCanRead")}),C.length>0?C.map(W=>E.jsxs("div",{className:ce.storyCard,children:[E.jsx("div",{className:ce.storyTitle,children:W.title}),E.jsx("div",{className:ce.storyBody,children:W.body}),E.jsxs("div",{className:ce.storyMeta,children:[W.author_name||c("detailPanel.unknownAuthor")," · ",new Date(W.created_at).toLocaleDateString(d.language)]})]},W.id)):E.jsx("div",{className:ce.emptyState,children:c("detailPanel.noPublicStories")}),E.jsx("div",{className:ce.psect,children:c("detailPanel.photosDocuments")}),t.photo&&E.jsxs("div",{className:ce.mediaCard,children:[E.jsx("img",{className:ce.mediaPreview,src:t.photo,alt:`${t.firstName} ${t.lastName}`}),E.jsx("div",{className:ce.mediaMeta,children:c("detailPanel.profilePhoto")})]}),(t.docs||[]).map((W,Me)=>E.jsxs("div",{className:ce.ditem,children:[E.jsx("span",{className:ce.dico,children:"📄"}),E.jsx("span",{children:W})]},`${W}-${Me}`)),!t.photo&&se===0&&E.jsx("div",{className:ce.emptyState,children:c("detailPanel.noPublicMedia")})]}),t.invite_token&&!t.claimed_by&&E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ce.psect,children:c("detailPanel.inviteLink")}),E.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:6},children:c("detailPanel.inviteDescription",{name:t.firstName})}),E.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[E.jsx("input",{readOnly:!0,value:`${window.location.origin}/join?token=${t.invite_token}`,style:{flex:1,padding:"7px 10px",fontSize:12,borderRadius:6,border:"1px solid var(--border)",background:"var(--surface2)",fontFamily:"monospace",color:"var(--text-dim)"},onClick:W=>W.target.select()}),E.jsx("button",{className:ce.rchipBtn,onClick:()=>{navigator.clipboard.writeText(`${window.location.origin}/join?token=${t.invite_token}`),p(!0),setTimeout(()=>p(!1),2e3)},children:u?`✓ ${c("common.copied")}`:c("common.copy")})]})]}),t.claimed_by&&E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ce.psect,children:c("detailPanel.profileStatus")}),E.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"3px 9px",borderRadius:20,fontSize:11,fontWeight:600,background:"var(--tag-marry-bg)",color:"var(--tag-marry)"},children:["✓ ",c("detailPanel.profileClaimed")]})]}),t.public_slug&&E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ce.psect,children:c("detailPanel.publicProfile")}),E.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[E.jsx("input",{readOnly:!0,value:`${window.location.origin}/p/${t.public_slug}`,style:{flex:1,padding:"7px 10px",fontSize:12,borderRadius:6,border:"1px solid var(--border)",background:"var(--surface2)",fontFamily:"monospace",color:"var(--text-dim)"},onClick:W=>W.target.select()}),E.jsx("button",{className:ce.rchipBtn,onClick:()=>{navigator.clipboard.writeText(`${window.location.origin}/p/${t.public_slug}`),Ot(c("detailPanel.publicUrlCopied"),"info")},children:c("common.copy")})]})]})]})]})}const x2="_backdrop_k2vb2_1",y2="_modal_k2vb2_6",S2="_frow_k2vb2_14",M2="_fg_k2vb2_15",E2="_actions_k2vb2_30",w2="_cancelBtn_k2vb2_31",T2="_saveBtn_k2vb2_37",b2="_dupeWarning_k2vb2_45",C2="_dupeTitle_k2vb2_49",A2="_dupeItem_k2vb2_52",R2="_dupeScore_k2vb2_55",Et={backdrop:x2,modal:y2,frow:S2,fg:M2,actions:E2,cancelBtn:w2,saveBtn:T2,dupeWarning:b2,dupeTitle:C2,dupeItem:A2,dupeScore:R2};function P2({people:t,onSave:e,onClose:n}){const{t:i}=Pr(),[r,s]=D.useState(""),[a,o]=D.useState(""),[l,c]=D.useState(""),[d,f]=D.useState("M"),[u,p]=D.useState(""),[m,x]=D.useState(""),[g,h]=D.useState("paternal"),[v,_]=D.useState(""),[S,b]=D.useState(""),[C,A]=D.useState(""),[y,T]=D.useState(""),[F,R]=D.useState(!1),[U,I]=D.useState([]),B=D.useRef(null),{activeTreeId:O}=bp();D.useEffect(()=>{B.current&&clearTimeout(B.current);const N=r.trim(),z=a.trim();if(!N||!z||!O){I([]);return}return B.current=setTimeout(async()=>{try{const $=await Ef.duplicates(O,N,z);I($)}catch{I([])}},400),()=>clearTimeout(B.current)},[r,a,O]);const G=async()=>{if(!r.trim()||!a.trim()){alert(i("addPersonModal.firstNameRequired"));return}R(!0),await e({firstName:r.trim(),lastName:a.trim(),maiden:l.trim(),gender:d,birth:parseInt(u)||null,death:parseInt(m)||null,branch:g,bio:v.trim(),parent1:S||null,parent2:C||null,spouse:y||null}),n()};return E.jsx("div",{className:Et.backdrop,onClick:N=>N.target===N.currentTarget&&n(),children:E.jsxs("div",{className:Et.modal,children:[E.jsx("h2",{children:i("addPersonModal.title")}),E.jsxs("div",{className:Et.frow,children:[E.jsxs("div",{className:Et.fg,children:[E.jsxs("label",{children:[i("addPersonModal.firstName")," *"]}),E.jsx("input",{type:"text",placeholder:i("addPersonModal.placeholders.firstName"),value:r,onChange:N=>s(N.target.value)})]}),E.jsxs("div",{className:Et.fg,children:[E.jsxs("label",{children:[i("addPersonModal.lastName")," *"]}),E.jsx("input",{type:"text",placeholder:i("addPersonModal.placeholders.lastName"),value:a,onChange:N=>o(N.target.value)})]})]}),U.length>0&&E.jsxs("div",{className:Et.dupeWarning,children:[E.jsxs("div",{className:Et.dupeTitle,children:["⚠ ",i("addPersonModal.duplicateTitle")]}),U.map(N=>E.jsxs("div",{className:Et.dupeItem,children:[N.first_name," ",N.last_name,N.maiden_name?` (née ${N.maiden_name})`:"",E.jsx("span",{className:Et.dupeScore,children:i("addPersonModal.duplicateMatch",{score:N.score})})]},N.id))]}),E.jsxs("div",{className:Et.frow,children:[E.jsxs("div",{className:Et.fg,children:[E.jsx("label",{children:i("addPersonModal.maidenName")}),E.jsx("input",{type:"text",value:l,onChange:N=>c(N.target.value)})]}),E.jsxs("div",{className:Et.fg,children:[E.jsx("label",{children:i("addPersonModal.gender")}),E.jsxs("select",{value:d,onChange:N=>f(N.target.value),children:[E.jsx("option",{value:"M",children:i("addPersonModal.genderOptions.male")}),E.jsx("option",{value:"F",children:i("addPersonModal.genderOptions.female")}),E.jsx("option",{value:"O",children:i("addPersonModal.genderOptions.other")})]})]})]}),E.jsxs("div",{className:Et.frow,children:[E.jsxs("div",{className:Et.fg,children:[E.jsx("label",{children:i("addPersonModal.birthYear")}),E.jsx("input",{type:"text",placeholder:i("addPersonModal.placeholders.birthYear"),value:u,onChange:N=>p(N.target.value)})]}),E.jsxs("div",{className:Et.fg,children:[E.jsx("label",{children:i("addPersonModal.deathYear")}),E.jsx("input",{type:"text",placeholder:i("addPersonModal.placeholders.deathYear"),value:m,onChange:N=>x(N.target.value)})]})]}),E.jsxs("div",{className:Et.fg,children:[E.jsx("label",{children:i("addPersonModal.branch")}),E.jsxs("select",{value:g,onChange:N=>h(N.target.value),children:[E.jsx("option",{value:"paternal",children:i("addPersonModal.branchOptions.paternal")}),E.jsx("option",{value:"maternal",children:i("addPersonModal.branchOptions.maternal")}),E.jsx("option",{value:"sibling",children:i("addPersonModal.branchOptions.sibling")}),E.jsx("option",{value:"married",children:i("addPersonModal.branchOptions.married")})]})]}),E.jsxs("div",{className:Et.fg,children:[E.jsx("label",{children:i("addPersonModal.biography")}),E.jsx("textarea",{placeholder:i("addPersonModal.placeholders.biography"),value:v,onChange:N=>_(N.target.value)})]}),E.jsxs("div",{className:Et.frow,children:[E.jsxs("div",{className:Et.fg,children:[E.jsx("label",{children:i("addPersonModal.parent1")}),E.jsxs("select",{value:S,onChange:N=>b(N.target.value),children:[E.jsxs("option",{value:"",children:["— ",i("addPersonModal.noneOption")," —"]}),t.map(N=>E.jsxs("option",{value:N.id,children:[N.firstName," ",N.lastName]},N.id))]})]}),E.jsxs("div",{className:Et.fg,children:[E.jsx("label",{children:i("addPersonModal.parent2")}),E.jsxs("select",{value:C,onChange:N=>A(N.target.value),children:[E.jsxs("option",{value:"",children:["— ",i("addPersonModal.noneOption")," —"]}),t.map(N=>E.jsxs("option",{value:N.id,children:[N.firstName," ",N.lastName]},N.id))]})]})]}),E.jsxs("div",{className:Et.fg,children:[E.jsx("label",{children:i("addPersonModal.spouse")}),E.jsxs("select",{value:y,onChange:N=>T(N.target.value),children:[E.jsxs("option",{value:"",children:["— ",i("addPersonModal.noneOption")," —"]}),t.map(N=>E.jsxs("option",{value:N.id,children:[N.firstName," ",N.lastName]},N.id))]})]}),E.jsxs("div",{className:Et.actions,children:[E.jsx("button",{className:Et.cancelBtn,onClick:n,disabled:F,children:i("common.cancel")}),E.jsx("button",{className:Et.saveBtn,onClick:G,disabled:F,children:i(F?"addPersonModal.saving":"addPersonModal.addPerson")})]})]})})}const L2="_legend_1g1r6_1",N2="_title_1g1r6_7",D2="_row_1g1r6_11",I2="_dot_1g1r6_12",U2="_line_1g1r6_13",F2="_dash_1g1r6_16",O2="_stats_1g1r6_20",k2="_tooltip_1g1r6_24",an={legend:L2,title:N2,row:D2,dot:I2,line:U2,dash:F2,stats:O2,tooltip:k2};function B2({people:t,rels:e,tooltipRef:n}){const i=e.filter(s=>s.type==="marriage").length,r=Math.floor(e.filter(s=>s.type==="parent").length/2);return E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:an.legend,children:[E.jsx("div",{className:an.title,children:"Legend"}),E.jsxs("div",{className:an.row,children:[E.jsx("div",{className:an.dot,style:{background:"#2F6B3E"}}),"Paternal"]}),E.jsxs("div",{className:an.row,children:[E.jsx("div",{className:an.dot,style:{background:"#1A5C8A"}}),"Maternal"]}),E.jsxs("div",{className:an.row,children:[E.jsx("div",{className:an.dot,style:{background:"#7A3A8A"}}),"Sibling branch"]}),E.jsxs("div",{className:an.row,children:[E.jsx("div",{className:an.dot,style:{background:"#8A5A1A"}}),"Married in"]}),E.jsxs("div",{className:an.row,children:[E.jsx("div",{className:an.line}),"Parent–child"]}),E.jsxs("div",{className:an.row,children:[E.jsx("div",{className:an.dash}),"Marriage"]})]}),E.jsxs("div",{className:an.stats,children:[t.length," people · ",i," marriages · ",r," families"]}),E.jsx("div",{ref:n,className:an.tooltip})]})}function Cs(t,e){var i;const n=t==null?void 0:t[e];return((i=n==null?void 0:n[0])==null?void 0:i.value)||null}function Gv(t){var i,r,s,a;const e=t.facts||{},n=t.metadata||{};return{id:t.id,firstName:t.first_name,lastName:t.last_name,maiden:t.maiden_name||"",gender:Cs(e,"gender")||"",birth:Cs(e,"birth_year")?parseInt(Cs(e,"birth_year")):null,death:Cs(e,"death_year")?parseInt(Cs(e,"death_year")):null,branch:n.branch||"paternal",bio:Cs(e,"biography")||"",facts:e,photo:t.profile_photo_url||t.profilePhotoUrl||((r=(i=t.media)==null?void 0:i.find(o=>o.type==="photo"&&o.is_profile_photo))==null?void 0:r.url)||((a=(s=t.media)==null?void 0:s.find(o=>o.type==="photo"))==null?void 0:a.url)||null,docs:(t.media||[]).filter(o=>o.type==="document").map(o=>o.url),invite_token:t.invite_token||null,claimed_by:t.claimed_by||null,public_slug:t.public_slug||null,_p:new j((Math.random()-.5)*300,(Math.random()-.5)*300,(Math.random()-.5)*50),_v:new j}}function bd(t){return{id:t.id,type:t.type==="parent_child"?"parent":t.type,a:t.profile_a,b:t.profile_b}}function z2(){const{t}=Pr(),[e,n]=wp(),{activeTreeId:i,loading:r,currentUserId:s}=bp(),[a,o]=D.useState([]),[l,c]=D.useState([]),[d,f]=D.useState(null),[u,p]=D.useState(null),[m,x]=D.useState(!1),[g,h]=D.useState(!1),[v,_]=D.useState("2d"),[S]=D.useState(!0),[b,C]=D.useState(!0),A=D.useRef(null),y=D.useRef(null),T=e.get("proposal"),F={accepted:{tone:"success",title:t("app.proposalApproved"),body:t("app.proposalApprovedBody")},rejected:{tone:"info",title:t("app.proposalRejected"),body:t("app.proposalRejectedBody")},"not-found":{tone:"error",title:t("app.proposalUnavailable"),body:t("app.proposalUnavailableBody")}},R=T?F[T]:null;D.useEffect(()=>{R&&Ot(R.title,R.tone==="error"?"error":R.tone==="info"?"info":"success")},[R]),D.useEffect(()=>{if(!r){if(!i){console.log("[Kin] No active tree set. Waiting for TreeProvider to resolve…"),C(!1);return}C(!0),console.log("[Kin] Fetching data for tree:",i),gg.fetchAll(i).then(({profiles:ie,relationships:Q})=>{o(ie.map(Gv)),c(Q.map(bd)),console.log(`[Kin] Loaded ${ie.length} profiles, ${Q.length} relationships from DB.`)}).catch(ie=>{console.error("[Kin] Failed to fetch data:",ie),Ot(t("app.failedLoadData"),"error")}).finally(()=>C(!1))}},[i,r,t]);const U=d?a.find(ie=>ie.id===d):null,I=U?{...U,isOwner:!!(s&&U.claimed_by===s)}:null,B=D.useCallback(ie=>{f(ie)},[]),O=D.useCallback(ie=>{var Q;(Q=window.__topBarPathSelect)==null||Q.call(window,ie)},[]),G=D.useCallback(ie=>{var Q,oe;p(ie),ie&&((oe=(Q=A.current)==null?void 0:Q.__sceneApi)==null||oe.shiftToOrigin(ie))},[]),N=D.useCallback(ie=>{f(ie)},[]),z=D.useCallback(()=>{f(null)},[]),$=D.useCallback(ie=>{f(ie)},[]),te=D.useCallback(ie=>{G(ie),f(ie)},[G]),re=D.useCallback(()=>{var ie,Q;(Q=(ie=A.current)==null?void 0:ie.__sceneApi)==null||Q.resetView()},[]),se=D.useCallback(()=>{h(ie=>!ie)},[]),be=D.useCallback(async(ie,Q)=>{const oe=a.find(ve=>ve.id===ie);o(ve=>ve.map(we=>we.id===ie?{...we,photo:Q}:we));try{await N1.create({profileId:ie,type:"photo",url:Q,isProfilePhoto:!0}),Ot(t("app.photoSaved"),"info")}catch(ve){throw console.error("[Kin] Failed to save photo:",ve),o(we=>we.map(Se=>Se.id===ie?{...Se,photo:(oe==null?void 0:oe.photo)||null}:Se)),ve}},[a,t]),Ge=D.useCallback(()=>{S&&_(ie=>ie==="2d"?"3d":"2d")},[S]),Ze=D.useCallback(async ie=>{var Q,oe;if(!i){Ot(t("app.noActiveTree"),"error");return}try{const{profile:ve,relationships:we}=await gg.createPerson(i,ie);console.log("[Kin] Person created in DB:",ve.id,ve.first_name,ve.last_name),Ot(t("app.personAdded",{name:`${ve.first_name} ${ve.last_name}`}));const Se=u?a.find(L=>L.id===u):null,Be=Se?Se._p.clone().add(new j((Math.random()-.5)*180,(Math.random()-.5)*180,0)):new j((Math.random()-.5)*240,(Math.random()-.5)*240,(Math.random()-.5)*50),W=Gv(ve);W._p=Be,o(L=>[...L,W]);const Me=we.map(bd);Me.length&&c(L=>[...L,...Me]),(oe=(Q=A.current)==null?void 0:Q.__sceneApi)==null||oe.startSim(5e3),setTimeout(()=>f(ve.id),80)}catch(ve){console.error("[Kin] Failed to create person:",ve),Ot(ve.message||t("app.failedAddPerson"),"error")}},[i,u,a,t]),Z=D.useCallback(ie=>{var Q,oe;c(ve=>[...ve,bd(ie)]),(oe=(Q=A.current)==null?void 0:Q.__sceneApi)==null||oe.startSim(3e3)},[]),le=D.useCallback(ie=>{var Q,oe;c(ve=>ve.filter(we=>we.id!==ie)),(oe=(Q=A.current)==null?void 0:Q.__sceneApi)==null||oe.startSim(3e3)},[]),q=D.useCallback(()=>{const ie=new URLSearchParams(e);ie.delete("proposal"),n(ie,{replace:!0})},[e,n]);return E.jsxs(E.Fragment,{children:[b&&E.jsx("div",{style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",fontFamily:"'Playfair Display', serif",fontSize:22,color:"var(--green)"},children:t("common.loadingFamilyTree")}),E.jsx(bL,{people:a,rels:l,selectedId:d,focusedId:u,pathMode:g,graphMode:v,onNodeClick:B,onPathSelect:O,tooltipRef:y,ref:A}),E.jsx(g3,{people:a,rels:l,focusedId:u,pathMode:g,graphMode:v,is3DAvailable:S,onSetFocus:G,onOpenPanel:N,onTogglePathMode:se,onToggleGraphMode:Ge,onResetView:re,onOpenModal:()=>x(!0),sceneRef:A}),R&&E.jsx("div",{style:{position:"fixed",top:72,left:"50%",transform:"translateX(-50%)",zIndex:220,width:"min(560px, calc(100vw - 24px))",padding:"14px 16px",borderRadius:12,border:`1px solid ${R.tone==="error"?"rgba(192,57,43,0.28)":R.tone==="info"?"rgba(58,114,160,0.24)":"rgba(61,124,71,0.24)"}`,background:"rgba(253, 251, 248, 0.98)",boxShadow:"0 8px 24px rgba(0,0,0,0.08)",backdropFilter:"blur(8px)"},children:E.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[E.jsxs("div",{style:{flex:1},children:[E.jsx("div",{style:{fontFamily:"'Inter', sans-serif",fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:R.tone==="error"?"#c0392b":R.tone==="info"?"#3A72A0":"#3D7C47",marginBottom:4},children:t("app.proposalUpdate")}),E.jsx("div",{style:{fontFamily:"'Playfair Display', serif",fontSize:22,color:"#2D2A26",marginBottom:4},children:R.title}),E.jsx("div",{style:{fontFamily:"'Inter', sans-serif",fontSize:14,lineHeight:1.6,color:"#5E5850"},children:R.body})]}),E.jsx("button",{type:"button",onClick:q,style:{border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text-muted)",borderRadius:999,width:32,height:32,cursor:"pointer",fontSize:16,lineHeight:1,flexShrink:0},"aria-label":"Dismiss proposal notice",children:"×"})]})}),E.jsx(_2,{person:I,people:a,rels:l,onClose:z,onViewPerson:$,onFocusPerson:te,onPhotoChange:be,onRelationshipAdded:Z,onRelationshipRemoved:le}),E.jsx(B2,{people:a,rels:l,tooltipRef:y}),m&&E.jsx(P2,{people:a,onSave:Ze,onClose:()=>x(!1)}),E.jsx(pL,{})]})}function V2(){const{t}=Pr(),e=xp(),[n]=wp(),[i,r]=D.useState("verifying"),[s,a]=D.useState("");D.useEffect(()=>{const l=n.get("token"),c=n.get("inviteToken");if(!l){r("error"),a(t("authVerify.missingToken"));return}let d=!1;async function f(){try{const u=await Tp.verify(l);if(d||(Mx(u.token),c&&(r("claiming"),await Ex.claimAuthenticated(c),d)))return;r("done"),setTimeout(()=>{d||e("/",{replace:!0})},900)}catch(u){if(d)return;r("error"),a(u.message||t("authVerify.failed"))}}return f(),()=>{d=!0}},[e,n,t]);const o=i==="verifying"?t("authVerify.verifying"):i==="claiming"?t("authVerify.claiming"):i==="done"?t("authVerify.success"):s;return E.jsx("div",{style:ka.page,children:E.jsxs("div",{style:ka.card,children:[E.jsx("h1",{style:ka.logo,children:"Kin"}),E.jsx("p",{style:i==="error"?ka.error:ka.body,children:o})]})})}const ka={page:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#F5F1EB",padding:20},card:{width:"min(420px, 100%)",background:"#FDFBF8",borderRadius:16,padding:28,border:"1px solid #DCD5C8",boxShadow:"0 16px 40px rgba(0,0,0,0.08)",textAlign:"center"},logo:{fontFamily:"'Playfair Display', serif",fontSize:32,color:"#3D7C47",marginBottom:14},body:{fontFamily:"'Inter', sans-serif",fontSize:15,color:"#5E5850",lineHeight:1.6},error:{fontFamily:"'Inter', sans-serif",fontSize:15,color:"#B44536",lineHeight:1.6}};function H2(){const{t}=Pr(),[e]=wp(),n=e.get("token"),[i,r]=D.useState("loading"),[s,a]=D.useState(null),[o,l]=D.useState(""),[c,d]=D.useState(""),[f,u]=D.useState("");D.useEffect(()=>{if(!n){r("error"),u(t("joinPage.noToken"));return}Ex.verify(n).then(m=>{a(m),d(m.first_name+" "+m.last_name),r("found"),console.log("[Kin] Invite token verified — profile:",m.first_name,m.last_name)}).catch(m=>{r("error"),u(m.message||t("joinPage.invalidToken")),console.error("[Kin] Token verification failed:",m.message)})},[n,t]);const p=async m=>{if(m.preventDefault(),!o.trim()){u(t("joinPage.emailRequired"));return}r("claiming"),u("");try{await Tp.sendMagicLink({email:o.trim(),displayName:c.trim(),claimToken:n}),r("done"),console.log("[Kin] Magic link sent for profile claim.")}catch(x){r("found"),u(x.message||t("joinPage.claimFailed")),console.error("[Kin] Claim failed:",x.message)}};return E.jsx("div",{style:Dt.page,children:E.jsxs("div",{style:Dt.card,children:[E.jsx("h1",{style:Dt.logo,children:"Kin"}),i==="loading"&&E.jsx("p",{style:Dt.subtle,children:t("joinPage.verifyingInvite")}),i==="error"&&E.jsxs("div",{children:[E.jsx("p",{style:Dt.errorText,children:f}),E.jsxs("a",{href:"/",style:Dt.link,children:["← ",t("joinPage.backToTree")]})]}),i==="found"&&s&&E.jsxs("form",{onSubmit:p,children:[E.jsx("p",{style:Dt.greeting,children:t("joinPage.invitedToClaim")}),E.jsxs("h2",{style:Dt.personName,children:[s.first_name," ",s.last_name]}),s.maiden_name&&E.jsxs("p",{style:Dt.subtle,children:["née ",s.maiden_name]}),E.jsx("div",{style:Dt.divider}),E.jsx("p",{style:Dt.label,children:t("joinPage.createAccountLabel")}),E.jsx("label",{style:Dt.fieldLabel,children:t("joinPage.displayName")}),E.jsx("input",{style:Dt.input,type:"text",value:c,onChange:m=>d(m.target.value),placeholder:t("joinPage.yourName")}),E.jsxs("label",{style:Dt.fieldLabel,children:[t("joinPage.email")," *"]}),E.jsx("input",{style:Dt.input,type:"email",value:o,onChange:m=>l(m.target.value),placeholder:t("joinPage.yourEmail"),required:!0}),E.jsx("p",{style:Dt.subtle,children:t("joinPage.magicLinkHint")}),f&&E.jsx("p",{style:Dt.errorText,children:f}),E.jsx("button",{type:"submit",style:Dt.btn,children:t("joinPage.createAccountClaim")})]}),i==="claiming"&&E.jsx("p",{style:Dt.subtle,children:t("joinPage.creatingAccount")}),i==="done"&&E.jsxs("div",{children:[E.jsx("p",{style:Dt.successText,children:t("joinPage.accountCreated")}),E.jsx("p",{style:Dt.subtle,children:t("joinPage.openEmail")})]})]})})}const Dt={page:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#F5F1EB",fontFamily:"'Inter', 'Crimson Pro', sans-serif",padding:20,overflow:"auto"},card:{background:"#FDFBF8",borderRadius:12,padding:"40px 36px",maxWidth:420,width:"100%",boxShadow:"0 8px 32px rgba(0,0,0,0.08)",border:"1px solid #DCD5C8"},logo:{fontFamily:"'Playfair Display', serif",fontSize:28,fontWeight:700,color:"#3D7C47",marginBottom:20,textAlign:"center"},greeting:{fontSize:15,color:"#5E5850",marginBottom:4,textAlign:"center"},personName:{fontFamily:"'Playfair Display', serif",fontSize:24,fontWeight:600,color:"#2D2A26",textAlign:"center",marginBottom:4},subtle:{fontSize:13,color:"#9A948E",textAlign:"center",marginBottom:12,lineHeight:1.6},divider:{height:1,background:"#DCD5C8",margin:"20px 0"},label:{fontSize:14,color:"#5E5850",marginBottom:16},fieldLabel:{display:"block",fontSize:11,fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",color:"#9A948E",marginBottom:4,marginTop:12},input:{display:"block",width:"100%",padding:"9px 12px",fontSize:13,borderRadius:8,border:"1px solid #DCD5C8",background:"#F0EBE2",color:"#2D2A26",fontFamily:"'Inter', sans-serif",outline:"none",marginBottom:4},btn:{display:"block",width:"100%",padding:"11px",marginTop:20,background:"#3D7C47",color:"#fff",border:"none",borderRadius:8,fontFamily:"'Inter', sans-serif",fontSize:14,fontWeight:600,cursor:"pointer",textAlign:"center",textDecoration:"none"},errorText:{color:"#c0392b",fontSize:13,marginTop:8,textAlign:"center"},successText:{color:"#3D7C47",fontSize:15,fontWeight:600,textAlign:"center",marginBottom:16},link:{display:"block",textAlign:"center",color:"#3D7C47",fontSize:14,marginTop:16,textDecoration:"none"}},Wv="http://localhost:3001/api";function G2(){var b,C,A,y,T,F;const{t,i18n:e}=Pr(),{slug:n}=DE(),[i,r]=D.useState(null),[s,a]=D.useState([]),[o,l]=D.useState(null),[c,d]=D.useState(!0);if(D.useEffect(()=>{fetch(`${Wv}/profiles/public/${encodeURIComponent(n)}`).then(R=>{if(!R.ok)throw new Error(t("publicProfile.profileNotFound"));return R.json()}).then(R=>(r(R),a(R.stories||[]),R.id&&(!R.stories||R.stories.length===0)?fetch(`${Wv}/stories?profileId=${encodeURIComponent(R.id)}`).then(U=>U.ok?U.json():[]).then(U=>a(U)):null)).catch(R=>l(R.message)).finally(()=>d(!1))},[n,t]),c)return E.jsx("div",{style:Ye.container,children:E.jsx("p",{style:Ye.loading,children:t("common.loading")})});if(o)return E.jsxs("div",{style:Ye.container,children:[E.jsx("p",{style:Ye.error,children:o}),E.jsxs(Ac,{to:"/",style:Ye.link,children:["← ",t("publicProfile.backToTree")]})]});const f=i.facts||{},u=i.media||[],p=u.filter(R=>R.type==="photo"),m=u.filter(R=>R.type==="document"),x=new Set(["gender","birth_year","death_year","biography"]),g=Object.entries(f).filter(([R])=>!x.has(R)),h=(C=(b=f.birth_year)==null?void 0:b[0])==null?void 0:C.value,v=(y=(A=f.death_year)==null?void 0:A[0])==null?void 0:y.value,_=(F=(T=f.biography)==null?void 0:T[0])==null?void 0:F.value,S=h?v?`${h} – ${v}`:`b. ${h}`:"";return E.jsx("div",{style:Ye.container,children:E.jsxs("div",{style:Ye.card,children:[i.profilePhotoUrl?E.jsx("img",{src:i.profilePhotoUrl,alt:`${i.firstName} ${i.lastName}`,style:Ye.profilePhoto}):E.jsxs("div",{style:Ye.avatar,children:[i.firstName[0],i.lastName[0]]}),E.jsxs("h1",{style:Ye.name,children:[i.firstName," ",i.lastName]}),i.maidenName&&E.jsxs("p",{style:Ye.maiden,children:["née ",i.maidenName]}),S&&E.jsx("p",{style:Ye.dates,children:S}),i.isLiving&&E.jsx("span",{style:Ye.livingBadge,children:t("publicProfile.living")}),_&&E.jsxs(E.Fragment,{children:[E.jsx("h2",{style:Ye.section,children:t("publicProfile.biography")}),E.jsx("p",{style:Ye.bio,children:_})]}),g.length>0&&E.jsxs(E.Fragment,{children:[E.jsx("h2",{style:Ye.section,children:t("publicProfile.details")}),g.map(([R,U])=>E.jsxs("div",{style:Ye.factRow,children:[E.jsx("span",{style:Ye.factLabel,children:R.replace(/_/g," ")}),E.jsx("span",{children:U.map(I=>I.value).join(", ")})]},R))]}),E.jsxs("div",{style:Ye.summaryGrid,children:[E.jsxs("div",{style:Ye.summaryCard,children:[E.jsx("strong",{style:Ye.summaryCount,children:s.length}),E.jsx("span",{style:Ye.summaryLabel,children:t("publicProfile.stories")})]}),E.jsxs("div",{style:Ye.summaryCard,children:[E.jsx("strong",{style:Ye.summaryCount,children:p.length}),E.jsx("span",{style:Ye.summaryLabel,children:t("publicProfile.photos")})]}),E.jsxs("div",{style:Ye.summaryCard,children:[E.jsx("strong",{style:Ye.summaryCount,children:m.length}),E.jsx("span",{style:Ye.summaryLabel,children:t("publicProfile.documents")})]})]}),E.jsx("h2",{style:Ye.section,children:t("publicProfile.storiesMemories")}),s.length>0?s.map(R=>E.jsxs("article",{style:Ye.storyCard,children:[E.jsx("h3",{style:Ye.storyTitle,children:R.title}),E.jsx("p",{style:Ye.storyBody,children:R.body}),E.jsxs("p",{style:Ye.storyMeta,children:[R.author_name||t("publicProfile.unknownAuthor")," · ",new Date(R.created_at).toLocaleDateString(e.language)]})]},R.id)):E.jsx("p",{style:Ye.emptyState,children:t("publicProfile.noPublicStories")}),E.jsx("h2",{style:Ye.section,children:t("publicProfile.photosDocuments")}),p.map(R=>E.jsxs("figure",{style:Ye.mediaCard,children:[E.jsx("img",{src:R.url,alt:t("publicProfile.photoArchiveItem"),style:Ye.mediaImage}),E.jsx("figcaption",{style:Ye.mediaCaption,children:t("publicProfile.photoArchiveItem")})]},R.id)),m.map(R=>E.jsxs("div",{style:Ye.documentRow,children:[E.jsx("span",{style:Ye.documentIcon,children:"📄"}),E.jsx("a",{href:R.url,target:"_blank",rel:"noreferrer",style:Ye.documentLink,children:t("publicProfile.openDocument")})]},R.id)),p.length===0&&m.length===0&&E.jsx("p",{style:Ye.emptyState,children:t("publicProfile.noPublicMedia")}),E.jsxs(Ac,{to:"/",style:Ye.link,children:["← ",t("publicProfile.backToTree")]})]})})}const Ye={container:{minHeight:"100vh",background:"#F5F1EB",color:"#2D2A26",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Inter', 'Crimson Pro', sans-serif",padding:20},card:{background:"#FDFBF8",border:"1px solid #DCD5C8",borderRadius:12,padding:"32px 28px",maxWidth:480,width:"100%",textAlign:"center",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},avatar:{width:80,height:80,borderRadius:"50%",background:"#F0EBE2",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,fontFamily:"'Playfair Display', serif",margin:"0 auto 16px",color:"#3D7C47"},profilePhoto:{display:"block",width:104,height:104,borderRadius:"50%",objectFit:"cover",margin:"0 auto 16px",border:"4px solid #F0EBE2",boxShadow:"0 6px 18px rgba(0,0,0,0.08)"},name:{fontFamily:"'Playfair Display', serif",fontSize:24,fontWeight:600,margin:"0 0 4px",color:"#2D2A26"},maiden:{fontSize:14,color:"#5E5850",fontStyle:"italic",margin:"0 0 8px"},dates:{fontSize:14,color:"#9A948E",margin:"0 0 12px"},livingBadge:{display:"inline-block",padding:"3px 12px",borderRadius:20,fontSize:11,fontWeight:600,background:"rgba(61, 124, 71, 0.08)",color:"#3D7C47",marginBottom:16},section:{fontSize:11,fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"#9A948E",margin:"20px 0 10px",paddingBottom:5,borderBottom:"1px solid #DCD5C8",textAlign:"left"},bio:{fontSize:14,lineHeight:1.65,color:"#5E5850",textAlign:"left"},factRow:{display:"flex",gap:8,fontSize:14,lineHeight:1.5,padding:"4px 0",textAlign:"left"},factLabel:{width:100,flexShrink:0,textTransform:"capitalize",color:"#9A948E",fontWeight:500},summaryGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:10,marginTop:20},summaryCard:{display:"flex",flexDirection:"column",gap:6,alignItems:"center",padding:"14px 10px",borderRadius:10,background:"#F0EBE2",border:"1px solid #DCD5C8"},summaryCount:{fontFamily:"'Playfair Display', serif",fontSize:26,color:"#2D2A26"},summaryLabel:{fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:"#9A948E",fontWeight:600},storyCard:{textAlign:"left",padding:"14px 16px",borderRadius:10,border:"1px solid #DCD5C8",background:"#FDFBF8",marginBottom:10},storyTitle:{fontSize:16,fontWeight:600,color:"#2D2A26",marginBottom:6},storyBody:{fontSize:14,lineHeight:1.7,color:"#5E5850",whiteSpace:"pre-wrap"},storyMeta:{fontSize:12,color:"#9A948E",marginTop:8},mediaCard:{margin:"0 0 12px",borderRadius:10,overflow:"hidden",border:"1px solid #DCD5C8",background:"#FDFBF8"},mediaImage:{display:"block",width:"100%",maxHeight:260,objectFit:"cover"},mediaCaption:{padding:"10px 14px",fontSize:13,color:"#5E5850",textAlign:"left"},documentRow:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderRadius:10,border:"1px solid #DCD5C8",background:"#FDFBF8",marginBottom:8},documentIcon:{fontSize:18},documentLink:{color:"#3D7C47",textDecoration:"none",fontWeight:600},emptyState:{fontSize:14,lineHeight:1.6,color:"#9A948E",textAlign:"left",marginBottom:12},link:{display:"inline-block",marginTop:24,fontSize:14,color:"#3D7C47",textDecoration:"none"},loading:{color:"#9A948E",fontSize:16},error:{color:"#c44",fontSize:16,marginBottom:12}};ix(document.getElementById("root")).render(E.jsx(x1,{children:E.jsx(D1,{children:E.jsxs(YE,{children:[E.jsx(Ga,{path:"/",element:E.jsx(z2,{})}),E.jsx(Ga,{path:"/auth/verify",element:E.jsx(V2,{})}),E.jsx(Ga,{path:"/join",element:E.jsx(H2,{})}),E.jsx(Ga,{path:"/p/:slug",element:E.jsx(G2,{})})]})})}));
