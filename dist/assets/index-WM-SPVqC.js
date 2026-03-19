(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Jg={exports:{}},Ec={},Qg={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),Ex=Symbol.for("react.portal"),Tx=Symbol.for("react.fragment"),wx=Symbol.for("react.strict_mode"),Ax=Symbol.for("react.profiler"),Cx=Symbol.for("react.provider"),bx=Symbol.for("react.context"),Rx=Symbol.for("react.forward_ref"),Px=Symbol.for("react.suspense"),Lx=Symbol.for("react.memo"),Nx=Symbol.for("react.lazy"),Sp=Symbol.iterator;function Dx(t){return t===null||typeof t!="object"?null:(t=Sp&&t[Sp]||t["@@iterator"],typeof t=="function"?t:null)}var e_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t_=Object.assign,n_={};function ta(t,e,n){this.props=t,this.context=e,this.refs=n_,this.updater=n||e_}ta.prototype.isReactComponent={};ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function i_(){}i_.prototype=ta.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=n_,this.updater=n||e_}var qf=Yf.prototype=new i_;qf.constructor=Yf;t_(qf,ta.prototype);qf.isPureReactComponent=!0;var Mp=Array.isArray,r_=Object.prototype.hasOwnProperty,Kf={current:null},s_={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)r_.call(e,i)&&!s_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:go,type:t,key:s,ref:a,props:r,_owner:Kf.current}}function Ix(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zf(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function Ux(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ep=/\/+/g;function Yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ux(""+t.key):e.toString(36)}function yl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case go:case Ex:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Yc(a,0):i,Mp(r)?(n="",t!=null&&(n=t.replace(Ep,"$&/")+"/"),yl(r,e,n,"",function(c){return c})):r!=null&&(Zf(r)&&(r=Ix(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ep,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Mp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Yc(s,o);a+=yl(s,e,n,l,r)}else if(l=Dx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Yc(s,o++),a+=yl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function bo(t,e,n){if(t==null)return t;var i=[],r=0;return yl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Fx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},Sl={transition:null},Ox={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:Kf};function o_(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:bo,forEach:function(t,e,n){bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bo(t,function(){e++}),e},toArray:function(t){return bo(t,function(e){return e})||[]},only:function(t){if(!Zf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=ta;Je.Fragment=Tx;Je.Profiler=Ax;Je.PureComponent=Yf;Je.StrictMode=wx;Je.Suspense=Px;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox;Je.act=o_;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=t_({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Kf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)r_.call(e,l)&&!s_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:go,type:t.type,key:r,ref:s,props:i,_owner:a}};Je.createContext=function(t){return t={$$typeof:bx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cx,_context:t},t.Consumer=t};Je.createElement=a_;Je.createFactory=function(t){var e=a_.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:Rx,render:t}};Je.isValidElement=Zf;Je.lazy=function(t){return{$$typeof:Nx,_payload:{_status:-1,_result:t},_init:Fx}};Je.memo=function(t,e){return{$$typeof:Lx,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};Je.unstable_act=o_;Je.useCallback=function(t,e){return fn.current.useCallback(t,e)};Je.useContext=function(t){return fn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return fn.current.useEffect(t,e)};Je.useId=function(){return fn.current.useId()};Je.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return fn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};Je.useRef=function(t){return fn.current.useRef(t)};Je.useState=function(t){return fn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return fn.current.useTransition()};Je.version="18.3.1";Qg.exports=Je;var L=Qg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx=L,Bx=Symbol.for("react.element"),zx=Symbol.for("react.fragment"),Vx=Object.prototype.hasOwnProperty,Hx=kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gx={key:!0,ref:!0,__self:!0,__source:!0};function l_(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Vx.call(e,i)&&!Gx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Bx,type:t,key:s,ref:a,props:r,_owner:Hx.current}}Ec.Fragment=zx;Ec.jsx=l_;Ec.jsxs=l_;Jg.exports=Ec;var E=Jg.exports,c_={exports:{}},Rn={},u_={exports:{}},d_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,Y){var ne=G.length;G.push(Y);e:for(;0<ne;){var oe=ne-1>>>1,k=G[oe];if(0<r(k,Y))G[oe]=Y,G[ne]=k,ne=oe;else break e}}function n(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var Y=G[0],ne=G.pop();if(ne!==Y){G[0]=ne;e:for(var oe=0,k=G.length,Z=k>>>1;oe<Z;){var pe=2*(oe+1)-1,de=G[pe],H=pe+1,ie=G[H];if(0>r(de,ne))H<k&&0>r(ie,de)?(G[oe]=ie,G[H]=ne,oe=H):(G[oe]=de,G[pe]=ne,oe=pe);else if(H<k&&0>r(ie,ne))G[oe]=ie,G[H]=ne,oe=H;else break e}}return Y}function r(G,Y){var ne=G.sortIndex-Y.sortIndex;return ne!==0?ne:G.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(G){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=G)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(G){if(x=!1,v(G),!_)if(n(l)!==null)_=!0,N(A);else{var Y=n(c);Y!==null&&O(M,Y.startTime-G)}}function A(G,Y){_=!1,x&&(x=!1,u(y),y=-1),p=!0;var ne=d;try{for(v(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||G&&!P());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var k=oe(h.expirationTime<=Y);Y=t.unstable_now(),typeof k=="function"?h.callback=k:h===n(l)&&i(l),v(Y)}else i(l);h=n(l)}if(h!==null)var Z=!0;else{var pe=n(c);pe!==null&&O(M,pe.startTime-Y),Z=!1}return Z}finally{h=null,d=ne,p=!1}}var C=!1,b=null,y=-1,T=5,U=-1;function P(){return!(t.unstable_now()-U<T)}function z(){if(b!==null){var G=t.unstable_now();U=G;var Y=!0;try{Y=b(!0,G)}finally{Y?W():(C=!1,b=null)}}else C=!1}var W;if(typeof g=="function")W=function(){g(z)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,V=q.port2;q.port1.onmessage=z,W=function(){V.postMessage(null)}}else W=function(){m(z,0)};function N(G){b=G,C||(C=!0,W())}function O(G,Y){y=m(function(){G(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,N(A))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(G){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var ne=d;d=Y;try{return G()}finally{d=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,Y){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ne=d;d=G;try{return Y()}finally{d=ne}},t.unstable_scheduleCallback=function(G,Y,ne){var oe=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?oe+ne:oe):ne=oe,G){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=ne+k,G={id:f++,callback:Y,priorityLevel:G,startTime:ne,expirationTime:k,sortIndex:-1},ne>oe?(G.sortIndex=ne,e(c,G),n(l)===null&&G===n(c)&&(x?(u(y),y=-1):x=!0,O(M,ne-oe))):(G.sortIndex=k,e(l,G),_||p||(_=!0,N(A))),G},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(G){var Y=d;return function(){var ne=d;d=Y;try{return G.apply(this,arguments)}finally{d=ne}}}})(d_);u_.exports=d_;var Wx=u_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jx=L,bn=Wx;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f_=new Set,Xa={};function Jr(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Xa[t]=e,t=0;t<e.length;t++)f_.add(e[t])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rd=Object.prototype.hasOwnProperty,Xx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tp={},wp={};function $x(t){return rd.call(wp,t)?!0:rd.call(Tp,t)?!1:Xx.test(t)?wp[t]=!0:(Tp[t]=!0,!1)}function Yx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qx(t,e,n,i){if(e===null||typeof e>"u"||Yx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function Qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jf,Qf);Zt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jf,Qf);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jf,Qf);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function eh(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qx(e,n,r,i)&&(n=null),i||r===null?$x(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $i=jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),th=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),h_=Symbol.for("react.provider"),p_=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),od=Symbol.for("react.suspense_list"),ih=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),m_=Symbol.for("react.offscreen"),Ap=Symbol.iterator;function ua(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Object.assign,qc;function Ra(t){if(qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+t}var Kc=!1;function Zc(t,e){if(!t||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ra(t):""}function Kx(t){switch(t.tag){case 5:return Ra(t.type);case 16:return Ra("Lazy");case 13:return Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case sd:return"Profiler";case th:return"StrictMode";case ad:return"Suspense";case od:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case p_:return(t.displayName||"Context")+".Consumer";case h_:return(t._context.displayName||"Context")+".Provider";case nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ih:return e=t.displayName||null,e!==null?e:ld(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return ld(t(e))}catch{}}return null}function Zx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ld(e);case 8:return e===th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function g_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jx(t){var e=g_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Po(t){t._valueTracker||(t._valueTracker=Jx(t))}function __(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=g_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cd(t,e){var n=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function v_(t,e){e=e.checked,e!=null&&eh(t,"checked",e,!1)}function ud(t,e){v_(t,e);var n=Sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&dd(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dd(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pa=Array.isArray;function Is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Pa(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function x_(t,e){var n=Sr(e.value),i=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Pp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,S_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qx=["Webkit","ms","Moz","O"];Object.keys(Ua).forEach(function(t){Qx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ua[e]=Ua[t]})});function M_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ua.hasOwnProperty(t)&&Ua[t]?(""+e).trim():e+"px"}function E_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=M_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ey=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pd(t,e){if(e){if(ey[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function md(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gd=null;function rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _d=null,Us=null,Fs=null;function Lp(t){if(t=xo(t)){if(typeof _d!="function")throw Error(le(280));var e=t.stateNode;e&&(e=bc(e),_d(t.stateNode,t.type,e))}}function T_(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function w_(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,Lp(t),e)for(t=0;t<e.length;t++)Lp(e[t])}}function A_(t,e){return t(e)}function C_(){}var Jc=!1;function b_(t,e,n){if(Jc)return t(e,n);Jc=!0;try{return A_(t,e,n)}finally{Jc=!1,(Us!==null||Fs!==null)&&(C_(),w_())}}function Ya(t,e){var n=t.stateNode;if(n===null)return null;var i=bc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var vd=!1;if(ki)try{var da={};Object.defineProperty(da,"passive",{get:function(){vd=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{vd=!1}function ty(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Fa=!1,Gl=null,Wl=!1,xd=null,ny={onError:function(t){Fa=!0,Gl=t}};function iy(t,e,n,i,r,s,a,o,l){Fa=!1,Gl=null,ty.apply(ny,arguments)}function ry(t,e,n,i,r,s,a,o,l){if(iy.apply(this,arguments),Fa){if(Fa){var c=Gl;Fa=!1,Gl=null}else throw Error(le(198));Wl||(Wl=!0,xd=c)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Np(t){if(Qr(t)!==t)throw Error(le(188))}function sy(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Np(r),t;if(s===i)return Np(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function P_(t){return t=sy(t),t!==null?L_(t):null}function L_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L_(t);if(e!==null)return e;t=t.sibling}return null}var N_=bn.unstable_scheduleCallback,Dp=bn.unstable_cancelCallback,ay=bn.unstable_shouldYield,oy=bn.unstable_requestPaint,Nt=bn.unstable_now,ly=bn.unstable_getCurrentPriorityLevel,sh=bn.unstable_ImmediatePriority,D_=bn.unstable_UserBlockingPriority,jl=bn.unstable_NormalPriority,cy=bn.unstable_LowPriority,I_=bn.unstable_IdlePriority,Tc=null,fi=null;function uy(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(Tc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:hy,dy=Math.log,fy=Math.LN2;function hy(t){return t>>>=0,t===0?32:31-(dy(t)/fy|0)|0}var No=64,Do=4194304;function La(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=La(o):(s&=a,s!==0&&(i=La(s)))}else a=n&~r,a!==0?i=La(a):s!==0&&(i=La(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function py(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function my(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Jn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=py(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function yd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function U_(){var t=No;return No<<=1,!(No&4194240)&&(No=64),t}function Qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function gy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ah(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function F_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var O_,oh,k_,B_,z_,Sd=!1,Io=[],hr=null,pr=null,mr=null,qa=new Map,Ka=new Map,ar=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ip(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(e.pointerId)}}function fa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xo(e),e!==null&&oh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vy(t,e,n,i,r){switch(e){case"focusin":return hr=fa(hr,t,e,n,i,r),!0;case"dragenter":return pr=fa(pr,t,e,n,i,r),!0;case"mouseover":return mr=fa(mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return qa.set(s,fa(qa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ka.set(s,fa(Ka.get(s)||null,t,e,n,i,r)),!0}return!1}function V_(t){var e=zr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=R_(n),e!==null){t.blockedOn=e,z_(t.priority,function(){k_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gd=i,n.target.dispatchEvent(i),gd=null}else return e=xo(n),e!==null&&oh(e),t.blockedOn=n,!1;e.shift()}return!0}function Up(t,e,n){Ml(t)&&n.delete(e)}function xy(){Sd=!1,hr!==null&&Ml(hr)&&(hr=null),pr!==null&&Ml(pr)&&(pr=null),mr!==null&&Ml(mr)&&(mr=null),qa.forEach(Up),Ka.forEach(Up)}function ha(t,e){t.blockedOn===e&&(t.blockedOn=null,Sd||(Sd=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,xy)))}function Za(t){function e(r){return ha(r,t)}if(0<Io.length){ha(Io[0],t);for(var n=1;n<Io.length;n++){var i=Io[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hr!==null&&ha(hr,t),pr!==null&&ha(pr,t),mr!==null&&ha(mr,t),qa.forEach(e),Ka.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)V_(n),n.blockedOn===null&&ar.shift()}var Os=$i.ReactCurrentBatchConfig,$l=!0;function yy(t,e,n,i){var r=ut,s=Os.transition;Os.transition=null;try{ut=1,lh(t,e,n,i)}finally{ut=r,Os.transition=s}}function Sy(t,e,n,i){var r=ut,s=Os.transition;Os.transition=null;try{ut=4,lh(t,e,n,i)}finally{ut=r,Os.transition=s}}function lh(t,e,n,i){if($l){var r=Md(t,e,n,i);if(r===null)cu(t,e,i,Yl,n),Ip(t,i);else if(vy(r,t,e,n,i))i.stopPropagation();else if(Ip(t,i),e&4&&-1<_y.indexOf(t)){for(;r!==null;){var s=xo(r);if(s!==null&&O_(s),s=Md(t,e,n,i),s===null&&cu(t,e,i,Yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cu(t,e,i,null,n)}}var Yl=null;function Md(t,e,n,i){if(Yl=null,t=rh(i),t=zr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yl=t,null}function H_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ly()){case sh:return 1;case D_:return 4;case jl:case cy:return 16;case I_:return 536870912;default:return 16}default:return 16}}var cr=null,ch=null,El=null;function G_(){if(El)return El;var t,e=ch,n=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return El=r.slice(t,1<i?1-i:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function Fp(){return!1}function Pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uo:Fp,this.isPropagationStopped=Fp,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),e}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uh=Pn(na),vo=Ct({},na,{view:0,detail:0}),My=Pn(vo),eu,tu,pa,wc=Ct({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(eu=t.screenX-pa.screenX,tu=t.screenY-pa.screenY):tu=eu=0,pa=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Op=Pn(wc),Ey=Ct({},wc,{dataTransfer:0}),Ty=Pn(Ey),wy=Ct({},vo,{relatedTarget:0}),nu=Pn(wy),Ay=Ct({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=Pn(Ay),by=Ct({},na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ry=Pn(by),Py=Ct({},na,{data:0}),kp=Pn(Py),Ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dy[t])?!!e[t]:!1}function dh(){return Iy}var Uy=Ct({},vo,{key:function(t){if(t.key){var e=Ly[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dh,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fy=Pn(Uy),Oy=Ct({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Pn(Oy),ky=Ct({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dh}),By=Pn(ky),zy=Ct({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vy=Pn(zy),Hy=Ct({},wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=Pn(Hy),Wy=[9,13,27,32],fh=ki&&"CompositionEvent"in window,Oa=null;ki&&"documentMode"in document&&(Oa=document.documentMode);var jy=ki&&"TextEvent"in window&&!Oa,W_=ki&&(!fh||Oa&&8<Oa&&11>=Oa),zp=" ",Vp=!1;function j_(t,e){switch(t){case"keyup":return Wy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function Xy(t,e){switch(t){case"compositionend":return X_(e);case"keypress":return e.which!==32?null:(Vp=!0,zp);case"textInput":return t=e.data,t===zp&&Vp?null:t;default:return null}}function $y(t,e){if(Ts)return t==="compositionend"||!fh&&j_(t,e)?(t=G_(),El=ch=cr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W_&&e.locale!=="ko"?null:e.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yy[t.type]:e==="textarea"}function $_(t,e,n,i){T_(i),e=ql(e,"onChange"),0<e.length&&(n=new uh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ka=null,Ja=null;function qy(t){r0(t,0)}function Ac(t){var e=Cs(t);if(__(e))return t}function Ky(t,e){if(t==="change")return e}var Y_=!1;if(ki){var iu;if(ki){var ru="oninput"in document;if(!ru){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),ru=typeof Gp.oninput=="function"}iu=ru}else iu=!1;Y_=iu&&(!document.documentMode||9<document.documentMode)}function Wp(){ka&&(ka.detachEvent("onpropertychange",q_),Ja=ka=null)}function q_(t){if(t.propertyName==="value"&&Ac(Ja)){var e=[];$_(e,Ja,t,rh(t)),b_(qy,e)}}function Zy(t,e,n){t==="focusin"?(Wp(),ka=e,Ja=n,ka.attachEvent("onpropertychange",q_)):t==="focusout"&&Wp()}function Jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ac(Ja)}function Qy(t,e){if(t==="click")return Ac(e)}function eS(t,e){if(t==="input"||t==="change")return Ac(e)}function tS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:tS;function Qa(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!rd.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xp(t,e){var n=jp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jp(n)}}function K_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?K_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Z_(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nS(t){var e=Z_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&K_(n.ownerDocument.documentElement,n)){if(i!==null&&hh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Xp(n,s);var a=Xp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=ki&&"documentMode"in document&&11>=document.documentMode,ws=null,Ed=null,Ba=null,Td=!1;function $p(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Td||ws==null||ws!==Hl(i)||(i=ws,"selectionStart"in i&&hh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ba&&Qa(Ba,i)||(Ba=i,i=ql(Ed,"onSelect"),0<i.length&&(e=new uh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ws)))}function Fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},su={},J_={};ki&&(J_=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Cc(t){if(su[t])return su[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in J_)return su[t]=e[n];return t}var Q_=Cc("animationend"),e0=Cc("animationiteration"),t0=Cc("animationstart"),n0=Cc("transitionend"),i0=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){i0.set(t,e),Jr(e,[t])}for(var au=0;au<Yp.length;au++){var ou=Yp[au],rS=ou.toLowerCase(),sS=ou[0].toUpperCase()+ou.slice(1);Tr(rS,"on"+sS)}Tr(Q_,"onAnimationEnd");Tr(e0,"onAnimationIteration");Tr(t0,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(n0,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function qp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ry(i,e,void 0,t),t.currentTarget=null}function r0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;qp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;qp(r,o,c),s=l}}}if(Wl)throw t=xd,Wl=!1,xd=null,t}function vt(t,e){var n=e[Rd];n===void 0&&(n=e[Rd]=new Set);var i=t+"__bubble";n.has(i)||(s0(e,t,2,!1),n.add(i))}function lu(t,e,n){var i=0;e&&(i|=4),s0(n,t,i,e)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[Oo]){t[Oo]=!0,f_.forEach(function(n){n!=="selectionchange"&&(aS.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oo]||(e[Oo]=!0,lu("selectionchange",!1,e))}}function s0(t,e,n,i){switch(H_(e)){case 1:var r=yy;break;case 4:r=Sy;break;default:r=lh}n=r.bind(null,e,n,t),r=void 0,!vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=zr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}b_(function(){var c=s,f=rh(n),h=[];e:{var d=i0.get(t);if(d!==void 0){var p=uh,_=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":p=Fy;break;case"focusin":_="focus",p=nu;break;case"focusout":_="blur",p=nu;break;case"beforeblur":case"afterblur":p=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=By;break;case Q_:case e0:case t0:p=Cy;break;case n0:p=Vy;break;case"scroll":p=My;break;case"wheel":p=Gy;break;case"copy":case"cut":case"paste":p=Ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Bp}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?d!==null?d+"Capture":null:d;x=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=Ya(g,u),M!=null&&x.push(to(g,M,v)))),m)break;g=g.return}0<x.length&&(d=new p(d,_,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==gd&&(_=n.relatedTarget||n.fromElement)&&(zr(_)||_[Bi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?zr(_):null,_!==null&&(m=Qr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=Op,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Bp,M="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?d:Cs(p),v=_==null?d:Cs(_),d=new x(M,g+"leave",p,n,f),d.target=m,d.relatedTarget=v,M=null,zr(f)===c&&(x=new x(u,g+"enter",_,n,f),x.target=v,x.relatedTarget=m,M=x),m=M,p&&_)t:{for(x=p,u=_,g=0,v=x;v;v=ns(v))g++;for(v=0,M=u;M;M=ns(M))v++;for(;0<g-v;)x=ns(x),g--;for(;0<v-g;)u=ns(u),v--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=ns(x),u=ns(u)}x=null}else x=null;p!==null&&Kp(h,d,p,x,!1),_!==null&&m!==null&&Kp(h,m,_,x,!0)}}e:{if(d=c?Cs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=Ky;else if(Hp(d))if(Y_)A=eS;else{A=Jy;var C=Zy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=Qy);if(A&&(A=A(t,c))){$_(h,A,n,f);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&dd(d,"number",d.value)}switch(C=c?Cs(c):window,t){case"focusin":(Hp(C)||C.contentEditable==="true")&&(ws=C,Ed=c,Ba=null);break;case"focusout":Ba=Ed=ws=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,$p(h,n,f);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":$p(h,n,f)}var b;if(fh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ts?j_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(W_&&n.locale!=="ko"&&(Ts||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ts&&(b=G_()):(cr=f,ch="value"in cr?cr.value:cr.textContent,Ts=!0)),C=ql(c,y),0<C.length&&(y=new kp(y,t,null,n,f),h.push({event:y,listeners:C}),b?y.data=b:(b=X_(n),b!==null&&(y.data=b)))),(b=jy?Xy(t,n):$y(t,n))&&(c=ql(c,"onBeforeInput"),0<c.length&&(f=new kp("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=b))}r0(h,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ya(t,n),s!=null&&i.unshift(to(t,s,r)),s=Ya(t,e),s!=null&&i.push(to(t,s,r))),t=t.return}return i}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ya(n,s),l!=null&&a.unshift(to(n,l,o))):r||(l=Ya(n,s),l!=null&&a.push(to(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var oS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function Zp(t){return(typeof t=="string"?t:""+t).replace(oS,`
`).replace(lS,"")}function ko(t,e,n){if(e=Zp(e),Zp(t)!==e&&n)throw Error(le(425))}function Kl(){}var wd=null,Ad=null;function Cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,Jp=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof Jp<"u"?function(t){return Jp.resolve(null).then(t).catch(dS)}:bd;function dS(t){setTimeout(function(){throw t})}function uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Za(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ia=Math.random().toString(36).slice(2),ci="__reactFiber$"+ia,no="__reactProps$"+ia,Bi="__reactContainer$"+ia,Rd="__reactEvents$"+ia,fS="__reactListeners$"+ia,hS="__reactHandles$"+ia;function zr(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bi]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qp(t);t!==null;){if(n=t[ci])return n;t=Qp(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[ci]||t[Bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function bc(t){return t[no]||null}var Pd=[],bs=-1;function wr(t){return{current:t}}function xt(t){0>bs||(t.current=Pd[bs],Pd[bs]=null,bs--)}function _t(t,e){bs++,Pd[bs]=t.current,t.current=e}var Mr={},on=wr(Mr),gn=wr(!1),Xr=Mr;function Ws(t,e){var n=t.type.contextTypes;if(!n)return Mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function Zl(){xt(gn),xt(on)}function em(t,e,n){if(on.current!==Mr)throw Error(le(168));_t(on,e),_t(gn,n)}function a0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,Zx(t)||"Unknown",r));return Ct({},n,i)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Xr=on.current,_t(on,t),_t(gn,gn.current),!0}function tm(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=a0(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,xt(gn),xt(on),_t(on,t)):xt(gn),_t(gn,n)}var Ri=null,Rc=!1,du=!1;function o0(t){Ri===null?Ri=[t]:Ri.push(t)}function pS(t){Rc=!0,o0(t)}function Ar(){if(!du&&Ri!==null){du=!0;var t=0,e=ut;try{var n=Ri;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ri=null,Rc=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(t+1)),N_(sh,Ar),r}finally{ut=e,du=!1}}return null}var Rs=[],Ps=0,Ql=null,ec=0,Nn=[],Dn=0,$r=null,Li=1,Ni="";function Ur(t,e){Rs[Ps++]=ec,Rs[Ps++]=Ql,Ql=t,ec=e}function l0(t,e,n){Nn[Dn++]=Li,Nn[Dn++]=Ni,Nn[Dn++]=$r,$r=t;var i=Li;t=Ni;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Li=1<<32-Jn(e)+r|n<<r|i,Ni=s+t}else Li=1<<s|n<<r|i,Ni=t}function ph(t){t.return!==null&&(Ur(t,1),l0(t,1,0))}function mh(t){for(;t===Ql;)Ql=Rs[--Ps],Rs[Ps]=null,ec=Rs[--Ps],Rs[Ps]=null;for(;t===$r;)$r=Nn[--Dn],Nn[Dn]=null,Ni=Nn[--Dn],Nn[Dn]=null,Li=Nn[--Dn],Nn[Dn]=null}var Cn=null,An=null,Et=!1,qn=null;function c0(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,An=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Li,overflow:Ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,An=null,!0):!1;default:return!1}}function Ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nd(t){if(Et){var e=An;if(e){var n=e;if(!nm(t,e)){if(Ld(t))throw Error(le(418));e=gr(n.nextSibling);var i=Cn;e&&nm(t,e)?c0(i,n):(t.flags=t.flags&-4097|2,Et=!1,Cn=t)}}else{if(Ld(t))throw Error(le(418));t.flags=t.flags&-4097|2,Et=!1,Cn=t}}}function im(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function Bo(t){if(t!==Cn)return!1;if(!Et)return im(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cd(t.type,t.memoizedProps)),e&&(e=An)){if(Ld(t))throw u0(),Error(le(418));for(;e;)c0(t,e),e=gr(e.nextSibling)}if(im(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Cn?gr(t.stateNode.nextSibling):null;return!0}function u0(){for(var t=An;t;)t=gr(t.nextSibling)}function js(){An=Cn=null,Et=!1}function gh(t){qn===null?qn=[t]:qn.push(t)}var mS=$i.ReactCurrentBatchConfig;function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function zo(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rm(t){var e=t._init;return e(t._payload)}function d0(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=yr(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,M){return g===null||g.tag!==6?(g=vu(v,u.mode,M),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,M){var A=v.type;return A===Es?f(u,g,v.props.children,M,v.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===rr&&rm(A)===g.type)?(M=r(g,v.props),M.ref=ma(u,g,v),M.return=u,M):(M=Ll(v.type,v.key,v.props,null,u.mode,M),M.ref=ma(u,g,v),M.return=u,M)}function c(u,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=xu(v,u.mode,M),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function f(u,g,v,M,A){return g===null||g.tag!==7?(g=jr(v,u.mode,M,A),g.return=u,g):(g=r(g,v),g.return=u,g)}function h(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=vu(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ro:return v=Ll(g.type,g.key,g.props,null,u.mode,v),v.ref=ma(u,null,g),v.return=u,v;case Ms:return g=xu(g,u.mode,v),g.return=u,g;case rr:var M=g._init;return h(u,M(g._payload),v)}if(Pa(g)||ua(g))return g=jr(g,u.mode,v,null),g.return=u,g;zo(u,g)}return null}function d(u,g,v,M){var A=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:o(u,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ro:return v.key===A?l(u,g,v,M):null;case Ms:return v.key===A?c(u,g,v,M):null;case rr:return A=v._init,d(u,g,A(v._payload),M)}if(Pa(v)||ua(v))return A!==null?null:f(u,g,v,M,null);zo(u,v)}return null}function p(u,g,v,M,A){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,o(g,u,""+M,A);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ro:return u=u.get(M.key===null?v:M.key)||null,l(g,u,M,A);case Ms:return u=u.get(M.key===null?v:M.key)||null,c(g,u,M,A);case rr:var C=M._init;return p(u,g,v,C(M._payload),A)}if(Pa(M)||ua(M))return u=u.get(v)||null,f(g,u,M,A,null);zo(g,M)}return null}function _(u,g,v,M){for(var A=null,C=null,b=g,y=g=0,T=null;b!==null&&y<v.length;y++){b.index>y?(T=b,b=null):T=b.sibling;var U=d(u,b,v[y],M);if(U===null){b===null&&(b=T);break}t&&b&&U.alternate===null&&e(u,b),g=s(U,g,y),C===null?A=U:C.sibling=U,C=U,b=T}if(y===v.length)return n(u,b),Et&&Ur(u,y),A;if(b===null){for(;y<v.length;y++)b=h(u,v[y],M),b!==null&&(g=s(b,g,y),C===null?A=b:C.sibling=b,C=b);return Et&&Ur(u,y),A}for(b=i(u,b);y<v.length;y++)T=p(b,u,y,v[y],M),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?y:T.key),g=s(T,g,y),C===null?A=T:C.sibling=T,C=T);return t&&b.forEach(function(P){return e(u,P)}),Et&&Ur(u,y),A}function x(u,g,v,M){var A=ua(v);if(typeof A!="function")throw Error(le(150));if(v=A.call(v),v==null)throw Error(le(151));for(var C=A=null,b=g,y=g=0,T=null,U=v.next();b!==null&&!U.done;y++,U=v.next()){b.index>y?(T=b,b=null):T=b.sibling;var P=d(u,b,U.value,M);if(P===null){b===null&&(b=T);break}t&&b&&P.alternate===null&&e(u,b),g=s(P,g,y),C===null?A=P:C.sibling=P,C=P,b=T}if(U.done)return n(u,b),Et&&Ur(u,y),A;if(b===null){for(;!U.done;y++,U=v.next())U=h(u,U.value,M),U!==null&&(g=s(U,g,y),C===null?A=U:C.sibling=U,C=U);return Et&&Ur(u,y),A}for(b=i(u,b);!U.done;y++,U=v.next())U=p(b,u,y,U.value,M),U!==null&&(t&&U.alternate!==null&&b.delete(U.key===null?y:U.key),g=s(U,g,y),C===null?A=U:C.sibling=U,C=U);return t&&b.forEach(function(z){return e(u,z)}),Et&&Ur(u,y),A}function m(u,g,v,M){if(typeof v=="object"&&v!==null&&v.type===Es&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ro:e:{for(var A=v.key,C=g;C!==null;){if(C.key===A){if(A=v.type,A===Es){if(C.tag===7){n(u,C.sibling),g=r(C,v.props.children),g.return=u,u=g;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===rr&&rm(A)===C.type){n(u,C.sibling),g=r(C,v.props),g.ref=ma(u,C,v),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===Es?(g=jr(v.props.children,u.mode,M,v.key),g.return=u,u=g):(M=Ll(v.type,v.key,v.props,null,u.mode,M),M.ref=ma(u,g,v),M.return=u,u=M)}return a(u);case Ms:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=xu(v,u.mode,M),g.return=u,u=g}return a(u);case rr:return C=v._init,m(u,g,C(v._payload),M)}if(Pa(v))return _(u,g,v,M);if(ua(v))return x(u,g,v,M);zo(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=vu(v,u.mode,M),g.return=u,u=g),a(u)):n(u,g)}return m}var Xs=d0(!0),f0=d0(!1),tc=wr(null),nc=null,Ls=null,_h=null;function vh(){_h=Ls=nc=null}function xh(t){var e=tc.current;xt(tc),t._currentValue=e}function Dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){nc=t,_h=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(_h!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(nc===null)throw Error(le(308));Ls=t,nc.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var Vr=null;function yh(t){Vr===null?Vr=[t]:Vr.push(t)}function h0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,yh(e)):(n.next=r.next,r.next=n),e.interleaved=n,zi(t,i)}function zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function Sh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(t,n)}return r=i.interleaved,r===null?(e.next=e,yh(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(t,n)}function wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ah(t,n)}}function sm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ic(t,e,n,i){var r=t.updateQueue;sr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(d=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=Ct({},h,d);break e;case 2:sr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=a,t.lanes=a,t.memoizedState=h}}function am(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var yo={},hi=wr(yo),io=wr(yo),ro=wr(yo);function Hr(t){if(t===yo)throw Error(le(174));return t}function Mh(t,e){switch(_t(ro,e),_t(io,t),_t(hi,yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hd(e,t)}xt(hi),_t(hi,e)}function $s(){xt(hi),xt(io),xt(ro)}function m0(t){Hr(ro.current);var e=Hr(hi.current),n=hd(e,t.type);e!==n&&(_t(io,t),_t(hi,n))}function Eh(t){io.current===t&&(xt(hi),xt(io))}var Tt=wr(0);function rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function Th(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var Al=$i.ReactCurrentDispatcher,hu=$i.ReactCurrentBatchConfig,Yr=0,wt=null,Ft=null,Gt=null,sc=!1,za=!1,so=0,gS=0;function Qt(){throw Error(le(321))}function wh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function Ah(t,e,n,i,r,s){if(Yr=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?yS:SS,t=n(i,r),za){s=0;do{if(za=!1,so=0,25<=s)throw Error(le(301));s+=1,Gt=Ft=null,e.updateQueue=null,Al.current=MS,t=n(i,r)}while(za)}if(Al.current=ac,e=Ft!==null&&Ft.next!==null,Yr=0,Gt=Ft=wt=null,sc=!1,e)throw Error(le(300));return t}function Ch(){var t=so!==0;return so=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?wt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Bn(){if(Ft===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Gt===null?wt.memoizedState:Gt.next;if(e!==null)Gt=e,Ft=t;else{if(t===null)throw Error(le(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Gt===null?wt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function ao(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Yr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,wt.lanes|=f,qr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ti(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ti(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function g0(){}function _0(t,e){var n=wt,i=Bn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,bh(y0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,oo(9,x0.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(le(349));Yr&30||v0(n,e,r)}return r}function v0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x0(t,e,n,i){e.value=n,e.getSnapshot=i,S0(e)&&M0(t)}function y0(t,e,n){return n(function(){S0(e)&&M0(t)})}function S0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function M0(t){var e=zi(t,1);e!==null&&Qn(e,t,1,-1)}function om(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:t},e.queue=t,t=t.dispatch=xS.bind(null,wt,t),[e.memoizedState,t]}function oo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function E0(){return Bn().memoizedState}function Cl(t,e,n,i){var r=oi();wt.flags|=t,r.memoizedState=oo(1|e,n,void 0,i===void 0?null:i)}function Pc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&wh(i,a.deps)){r.memoizedState=oo(e,n,s,i);return}}wt.flags|=t,r.memoizedState=oo(1|e,n,s,i)}function lm(t,e){return Cl(8390656,8,t,e)}function bh(t,e){return Pc(2048,8,t,e)}function T0(t,e){return Pc(4,2,t,e)}function w0(t,e){return Pc(4,4,t,e)}function A0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function C0(t,e,n){return n=n!=null?n.concat([t]):null,Pc(4,4,A0.bind(null,e,t),n)}function Rh(){}function b0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function R0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function P0(t,e,n){return Yr&21?(ti(n,e)||(n=U_(),wt.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function _S(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=hu.transition;hu.transition={};try{t(!1),e()}finally{ut=n,hu.transition=i}}function L0(){return Bn().memoizedState}function vS(t,e,n){var i=xr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},N0(t))D0(e,n);else if(n=h0(t,e,n,i),n!==null){var r=dn();Qn(n,t,i,r),I0(n,e,i)}}function xS(t,e,n){var i=xr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(N0(t))D0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ti(o,a)){var l=e.interleaved;l===null?(r.next=r,yh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=h0(t,e,r,i),n!==null&&(r=dn(),Qn(n,t,i,r),I0(n,e,i))}}function N0(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function D0(t,e){za=sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function I0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ah(t,n)}}var ac={readContext:kn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},yS={readContext:kn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,A0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vS.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:om,useDebugValue:Rh,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=om(!1),e=t[0];return t=_S.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=oi();if(Et){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Wt===null)throw Error(le(349));Yr&30||v0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,lm(y0.bind(null,i,s,t),[t]),i.flags|=2048,oo(9,x0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Wt.identifierPrefix;if(Et){var n=Ni,i=Li;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=so++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SS={readContext:kn,useCallback:b0,useContext:kn,useEffect:bh,useImperativeHandle:C0,useInsertionEffect:T0,useLayoutEffect:w0,useMemo:R0,useReducer:pu,useRef:E0,useState:function(){return pu(ao)},useDebugValue:Rh,useDeferredValue:function(t){var e=Bn();return P0(e,Ft.memoizedState,t)},useTransition:function(){var t=pu(ao)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:_0,useId:L0,unstable_isNewReconciler:!1},MS={readContext:kn,useCallback:b0,useContext:kn,useEffect:bh,useImperativeHandle:C0,useInsertionEffect:T0,useLayoutEffect:w0,useMemo:R0,useReducer:mu,useRef:E0,useState:function(){return mu(ao)},useDebugValue:Rh,useDeferredValue:function(t){var e=Bn();return Ft===null?e.memoizedState=t:P0(e,Ft.memoizedState,t)},useTransition:function(){var t=mu(ao)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:_0,useId:L0,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=Ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Id(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=xr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(Qn(e,t,r,i),wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=xr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(Qn(e,t,r,i),wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=xr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=_r(t,r,i),e!==null&&(Qn(e,t,i,n),wl(e,t,i))}};function cm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,i)||!Qa(r,s):!0}function U0(t,e,n){var i=!1,r=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=_n(e)?Xr:on.current,i=e.contextTypes,s=(i=i!=null)?Ws(t,r):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function um(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function Ud(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Sh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=_n(e)?Xr:on.current,r.context=Ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Id(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),ic(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=Kx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ES=typeof WeakMap=="function"?WeakMap:Map;function F0(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){lc||(lc=!0,Xd=i),Fd(t,e)},n}function O0(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fd(t,e),typeof i!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function dm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ES;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=OS.bind(null,t,e,n),e.then(t,t))}function fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var TS=$i.ReactCurrentOwner,mn=!1;function un(t,e,n,i){e.child=t===null?f0(e,null,n,i):Xs(e,t.child,n,i)}function pm(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=Ah(t,e,n,i,s,r),n=Ch(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(Et&&n&&ph(e),e.flags|=1,un(t,e,i,r),e.child)}function mm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,k0(t,e,s,i,r)):(t=Ll(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(a,i)&&t.ref===e.ref)return Vi(t,e,r)}return e.flags|=1,t=yr(s,i),t.ref=e.ref,t.return=e,e.child=t}function k0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Qa(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Vi(t,e,r)}return Od(t,e,n,i,r)}function B0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Ds,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(Ds,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,_t(Ds,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,_t(Ds,En),En|=i;return un(t,e,r,n),e.child}function z0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Od(t,e,n,i,r){var s=_n(n)?Xr:on.current;return s=Ws(e,s),ks(e,r),n=Ah(t,e,n,i,s,r),i=Ch(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(Et&&i&&ph(e),e.flags|=1,un(t,e,n,r),e.child)}function gm(t,e,n,i,r){if(_n(n)){var s=!0;Jl(e)}else s=!1;if(ks(e,r),e.stateNode===null)bl(t,e),U0(e,n,i),Ud(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=_n(n)?Xr:on.current,c=Ws(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&um(e,a,i,c),sr=!1;var d=e.memoizedState;a.state=d,ic(e,i,a,r),l=e.memoizedState,o!==i||d!==l||gn.current||sr?(typeof f=="function"&&(Id(e,n,f,i),l=e.memoizedState),(o=sr||cm(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,p0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:$n(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=_n(n)?Xr:on.current,l=Ws(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&um(e,a,i,l),sr=!1,d=e.memoizedState,a.state=d,ic(e,i,a,r);var _=e.memoizedState;o!==h||d!==_||gn.current||sr?(typeof p=="function"&&(Id(e,n,p,i),_=e.memoizedState),(c=sr||cm(e,n,c,i,d,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return kd(t,e,n,i,s,r)}function kd(t,e,n,i,r,s){z0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&tm(e,n,!1),Vi(t,e,s);i=e.stateNode,TS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,o,s)):un(t,e,o,s),e.memoizedState=i.state,r&&tm(e,n,!0),e.child}function V0(t){var e=t.stateNode;e.pendingContext?em(t,e.pendingContext,e.pendingContext!==e.context):e.context&&em(t,e.context,!1),Mh(t,e.containerInfo)}function _m(t,e,n,i,r){return js(),gh(r),e.flags|=256,un(t,e,n,i),e.child}var Bd={dehydrated:null,treeContext:null,retryLane:0};function zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function H0(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(Tt,r&1),t===null)return Nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ic(a,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zd(n),e.memoizedState=Bd,t):Ph(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return wS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=yr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=yr(o,s):(s=jr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?zd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Bd,i}return s=t.child,t=s.sibling,i=yr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ph(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vo(t,e,n,i){return i!==null&&gh(i),Xs(e,t.child,null,n),t=Ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=gu(Error(le(422))),Vo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ic({mode:"visible",children:i.children},r,0,null),s=jr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,a),e.child.memoizedState=zd(a),e.memoizedState=Bd,s);if(!(e.mode&1))return Vo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(le(419)),i=gu(s,i,void 0),Vo(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=Wt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(t,r),Qn(i,t,r,-1))}return Fh(),i=gu(Error(le(421))),Vo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=gr(r.nextSibling),Cn=e,Et=!0,qn=null,t!==null&&(Nn[Dn++]=Li,Nn[Dn++]=Ni,Nn[Dn++]=$r,Li=t.id,Ni=t.overflow,$r=e),e=Ph(e,i.children),e.flags|=4096,e)}function vm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Dd(t.return,e,n)}function _u(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function G0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vm(t,n,e);else if(t.tag===19)vm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_u(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_u(e,!0,n,null,s);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AS(t,e,n){switch(e.tag){case 3:V0(e),js();break;case 5:m0(e);break;case 1:_n(e.type)&&Jl(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?H0(t,e,n):(_t(Tt,Tt.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);_t(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return G0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,B0(t,e,n)}return Vi(t,e,n)}var W0,Vd,j0,X0;W0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vd=function(){};j0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(hi.current);var s=null;switch(n){case"input":r=cd(t,r),i=cd(t,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=fd(t,r),i=fd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Kl)}pd(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};X0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ga(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function CS(t,e,n){var i=e.pendingProps;switch(mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return _n(e.type)&&Zl(),en(e),null;case 3:return i=e.stateNode,$s(),xt(gn),xt(on),Th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(qd(qn),qn=null))),Vd(t,e),en(e),null;case 5:Eh(e);var r=Hr(ro.current);if(n=e.type,t!==null&&e.stateNode!=null)j0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return en(e),null}if(t=Hr(hi.current),Bo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[no]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)vt(Na[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":Cp(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":Rp(i,s),vt("invalid",i)}pd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ko(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ko(i.textContent,o,t),r=["children",""+o]):Xa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&vt("scroll",i)}switch(n){case"input":Po(i),bp(i,s,!0);break;case"textarea":Po(i),Pp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ci]=e,t[no]=i,W0(t,e,!1,!1),e.stateNode=t;e:{switch(a=md(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)vt(Na[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":Cp(t,i),r=cd(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),vt("invalid",t);break;case"textarea":Rp(t,i),r=fd(t,i),vt("invalid",t);break;default:r=i}pd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?E_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&S_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$a(t,l):typeof l=="number"&&$a(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&eh(t,s,l,a))}switch(n){case"input":Po(t),bp(t,i,!1);break;case"textarea":Po(t),Pp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Is(t,!!i.multiple,s,!1):i.defaultValue!=null&&Is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)X0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Hr(ro.current),Hr(hi.current),Bo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:ko(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ko(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return en(e),null;case 13:if(xt(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&An!==null&&e.mode&1&&!(e.flags&128))u0(),js(),e.flags|=98560,s=!1;else if(s=Bo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[ci]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else qn!==null&&(qd(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Ot===0&&(Ot=3):Fh())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return $s(),Vd(t,e),t===null&&eo(e.stateNode.containerInfo),en(e),null;case 10:return xh(e.type._context),en(e),null;case 17:return _n(e.type)&&Zl(),en(e),null;case 19:if(xt(Tt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ga(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=rc(t),a!==null){for(e.flags|=128,ga(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>qs&&(e.flags|=128,i=!0,ga(s,!1),e.lanes=4194304)}else{if(!i)if(t=rc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Et)return en(e),null}else 2*Nt()-s.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,i=!0,ga(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Tt.current,_t(Tt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Uh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function bS(t,e){switch(mh(e),e.tag){case 1:return _n(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),xt(gn),xt(on),Th(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eh(e),null;case 13:if(xt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(Tt),null;case 4:return $s(),null;case 10:return xh(e.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var Ho=!1,sn=!1,RS=typeof WeakSet=="function"?WeakSet:Set,we=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function Hd(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var xm=!1;function PS(t,e){if(wd=$l,t=Z_(),hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ad={focusedElem:t,selectionRange:n},$l=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:$n(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(M){Rt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return _=xm,xm=!1,_}function Va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hd(e,n,s)}r=r.next}while(r!==i)}}function Nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $0(t){var e=t.alternate;e!==null&&(t.alternate=null,$0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[no],delete e[Rd],delete e[fS],delete e[hS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Y0(t){return t.tag===5||t.tag===3||t.tag===4}function ym(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kl));else if(i!==4&&(t=t.child,t!==null))for(Wd(t,e,n),t=t.sibling;t!==null;)Wd(t,e,n),t=t.sibling}function jd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(jd(t,e,n),t=t.sibling;t!==null;)jd(t,e,n),t=t.sibling}var $t=null,Yn=!1;function Zi(t,e,n){for(n=n.child;n!==null;)q0(t,e,n),n=n.sibling}function q0(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 5:sn||Ns(n,e);case 6:var i=$t,r=Yn;$t=null,Zi(t,e,n),$t=i,Yn=r,$t!==null&&(Yn?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(Yn?(t=$t,n=n.stateNode,t.nodeType===8?uu(t.parentNode,n):t.nodeType===1&&uu(t,n),Za(t)):uu($t,n.stateNode));break;case 4:i=$t,r=Yn,$t=n.stateNode.containerInfo,Yn=!0,Zi(t,e,n),$t=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Hd(n,e,a),r=r.next}while(r!==i)}Zi(t,e,n);break;case 1:if(!sn&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Rt(n,e,o)}Zi(t,e,n);break;case 21:Zi(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,Zi(t,e,n),sn=i):Zi(t,e,n);break;default:Zi(t,e,n)}}function Sm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RS),e.forEach(function(i){var r=BS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:$t=o.stateNode,Yn=!1;break e;case 3:$t=o.stateNode.containerInfo,Yn=!0;break e;case 4:$t=o.stateNode.containerInfo,Yn=!0;break e}o=o.return}if($t===null)throw Error(le(160));q0(s,a,r),$t=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K0(e,t),e=e.sibling}function K0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ri(t),i&4){try{Va(3,t,t.return),Nc(3,t)}catch(x){Rt(t,t.return,x)}try{Va(5,t,t.return)}catch(x){Rt(t,t.return,x)}}break;case 1:Gn(e,t),ri(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(Gn(e,t),ri(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{$a(r,"")}catch(x){Rt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&v_(r,s),md(o,a);var c=md(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?E_(r,h):f==="dangerouslySetInnerHTML"?S_(r,h):f==="children"?$a(r,h):eh(r,f,h,c)}switch(o){case"input":ud(r,s);break;case"textarea":x_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Is(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[no]=s}catch(x){Rt(t,t.return,x)}}break;case 6:if(Gn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Rt(t,t.return,x)}}break;case 3:if(Gn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(x){Rt(t,t.return,x)}break;case 4:Gn(e,t),ri(t);break;case 13:Gn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Dh=Nt())),i&4&&Sm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||f,Gn(e,t),sn=c):Gn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(we=t,f=t.child;f!==null;){for(h=we=f;we!==null;){switch(d=we,p=d.child,d.tag){case 0:case 11:case 14:case 15:Va(4,d,d.return);break;case 1:Ns(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Rt(i,n,x)}}break;case 5:Ns(d,d.return);break;case 22:if(d.memoizedState!==null){Em(h);continue}}p!==null?(p.return=d,we=p):Em(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=M_("display",a))}catch(x){Rt(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Rt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Gn(e,t),ri(t),i&4&&Sm(t);break;case 21:break;default:Gn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Y0(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($a(r,""),i.flags&=-33);var s=ym(t);jd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ym(t);Wd(t,o,a);break;default:throw Error(le(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LS(t,e,n){we=t,Z0(t)}function Z0(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ho;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||sn;o=Ho;var c=sn;if(Ho=a,(sn=l)&&!c)for(we=r;we!==null;)a=we,l=a.child,a.tag===22&&a.memoizedState!==null?Tm(r):l!==null?(l.return=a,we=l):Tm(r);for(;s!==null;)we=s,Z0(s),s=s.sibling;we=r,Ho=o,sn=c}Mm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):Mm(t)}}function Mm(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&am(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}am(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Za(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}sn||e.flags&512&&Gd(e)}catch(d){Rt(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function Em(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function Tm(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nc(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{Gd(e)}catch(l){Rt(e,s,l)}break;case 5:var a=e.return;try{Gd(e)}catch(l){Rt(e,a,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){we=null;break}var o=e.sibling;if(o!==null){o.return=e.return,we=o;break}we=e.return}}var NS=Math.ceil,oc=$i.ReactCurrentDispatcher,Lh=$i.ReactCurrentOwner,On=$i.ReactCurrentBatchConfig,it=0,Wt=null,Ut=null,Kt=0,En=0,Ds=wr(0),Ot=0,lo=null,qr=0,Dc=0,Nh=0,Ha=null,pn=null,Dh=0,qs=1/0,bi=null,lc=!1,Xd=null,vr=null,Go=!1,ur=null,cc=0,Ga=0,$d=null,Rl=-1,Pl=0;function dn(){return it&6?Nt():Rl!==-1?Rl:Rl=Nt()}function xr(t){return t.mode&1?it&2&&Kt!==0?Kt&-Kt:mS.transition!==null?(Pl===0&&(Pl=U_()),Pl):(t=ut,t!==0||(t=window.event,t=t===void 0?16:H_(t.type)),t):1}function Qn(t,e,n,i){if(50<Ga)throw Ga=0,$d=null,Error(le(185));_o(t,n,i),(!(it&2)||t!==Wt)&&(t===Wt&&(!(it&2)&&(Dc|=n),Ot===4&&or(t,Kt)),vn(t,i),n===1&&it===0&&!(e.mode&1)&&(qs=Nt()+500,Rc&&Ar()))}function vn(t,e){var n=t.callbackNode;my(t,e);var i=Xl(t,t===Wt?Kt:0);if(i===0)n!==null&&Dp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Dp(n),e===1)t.tag===0?pS(wm.bind(null,t)):o0(wm.bind(null,t)),uS(function(){!(it&6)&&Ar()}),n=null;else{switch(F_(i)){case 1:n=sh;break;case 4:n=D_;break;case 16:n=jl;break;case 536870912:n=I_;break;default:n=jl}n=sv(n,J0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function J0(t,e){if(Rl=-1,Pl=0,it&6)throw Error(le(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var i=Xl(t,t===Wt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=uc(t,i);else{e=i;var r=it;it|=2;var s=ev();(Wt!==t||Kt!==e)&&(bi=null,qs=Nt()+500,Wr(t,e));do try{US();break}catch(o){Q0(t,o)}while(!0);vh(),oc.current=s,it=r,Ut!==null?e=0:(Wt=null,Kt=0,e=Ot)}if(e!==0){if(e===2&&(r=yd(t),r!==0&&(i=r,e=Yd(t,r))),e===1)throw n=lo,Wr(t,0),or(t,i),vn(t,Nt()),n;if(e===6)or(t,i);else{if(r=t.current.alternate,!(i&30)&&!DS(r)&&(e=uc(t,i),e===2&&(s=yd(t),s!==0&&(i=s,e=Yd(t,s))),e===1))throw n=lo,Wr(t,0),or(t,i),vn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Fr(t,pn,bi);break;case 3:if(or(t,i),(i&130023424)===i&&(e=Dh+500-Nt(),10<e)){if(Xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bd(Fr.bind(null,t,pn,bi),e);break}Fr(t,pn,bi);break;case 4:if(or(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*NS(i/1960))-i,10<i){t.timeoutHandle=bd(Fr.bind(null,t,pn,bi),i);break}Fr(t,pn,bi);break;case 5:Fr(t,pn,bi);break;default:throw Error(le(329))}}}return vn(t,Nt()),t.callbackNode===n?J0.bind(null,t):null}function Yd(t,e){var n=Ha;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=uc(t,e),t!==2&&(e=pn,pn=n,e!==null&&qd(e)),t}function qd(t){pn===null?pn=t:pn.push.apply(pn,t)}function DS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Nh,e&=~Dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function wm(t){if(it&6)throw Error(le(327));Bs();var e=Xl(t,0);if(!(e&1))return vn(t,Nt()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var i=yd(t);i!==0&&(e=i,n=Yd(t,i))}if(n===1)throw n=lo,Wr(t,0),or(t,e),vn(t,Nt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,pn,bi),vn(t,Nt()),null}function Ih(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(qs=Nt()+500,Rc&&Ar())}}function Kr(t){ur!==null&&ur.tag===0&&!(it&6)&&Bs();var e=it;it|=1;var n=On.transition,i=ut;try{if(On.transition=null,ut=1,t)return t()}finally{ut=i,On.transition=n,it=e,!(it&6)&&Ar()}}function Uh(){En=Ds.current,xt(Ds)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cS(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(mh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zl();break;case 3:$s(),xt(gn),xt(on),Th();break;case 5:Eh(i);break;case 4:$s();break;case 13:xt(Tt);break;case 19:xt(Tt);break;case 10:xh(i.type._context);break;case 22:case 23:Uh()}n=n.return}if(Wt=t,Ut=t=yr(t.current,null),Kt=En=e,Ot=0,lo=null,Nh=Dc=qr=0,pn=Ha=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Vr=null}return t}function Q0(t,e){do{var n=Ut;try{if(vh(),Al.current=ac,sc){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sc=!1}if(Yr=0,Gt=Ft=wt=null,za=!1,so=0,Lh.current=null,n===null||n.return===null){Ot=1,lo=e,Ut=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=fm(a);if(p!==null){p.flags&=-257,hm(p,a,o,s,e),p.mode&1&&dm(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){dm(s,c,e),Fh();break e}l=Error(le(426))}}else if(Et&&o.mode&1){var m=fm(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),hm(m,a,o,s,e),gh(Ys(l,o));break e}}s=l=Ys(l,o),Ot!==4&&(Ot=2),Ha===null?Ha=[s]:Ha.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=F0(s,l,e);sm(s,u);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vr===null||!vr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=O0(s,o,e);sm(s,M);break e}}s=s.return}while(s!==null)}nv(n)}catch(A){e=A,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function ev(){var t=oc.current;return oc.current=ac,t===null?ac:t}function Fh(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Wt===null||!(qr&268435455)&&!(Dc&268435455)||or(Wt,Kt)}function uc(t,e){var n=it;it|=2;var i=ev();(Wt!==t||Kt!==e)&&(bi=null,Wr(t,e));do try{IS();break}catch(r){Q0(t,r)}while(!0);if(vh(),it=n,oc.current=i,Ut!==null)throw Error(le(261));return Wt=null,Kt=0,Ot}function IS(){for(;Ut!==null;)tv(Ut)}function US(){for(;Ut!==null&&!ay();)tv(Ut)}function tv(t){var e=rv(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?nv(t):Ut=e,Lh.current=null}function nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bS(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Ut=null;return}}else if(n=CS(n,e,En),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Ot===0&&(Ot=5)}function Fr(t,e,n){var i=ut,r=On.transition;try{On.transition=null,ut=1,FS(t,e,n,i)}finally{On.transition=r,ut=i}return null}function FS(t,e,n,i){do Bs();while(ur!==null);if(it&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gy(t,s),t===Wt&&(Ut=Wt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Go||(Go=!0,sv(jl,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var a=ut;ut=1;var o=it;it|=4,Lh.current=null,PS(t,n),K0(n,t),nS(Ad),$l=!!wd,Ad=wd=null,t.current=n,LS(n),oy(),it=o,ut=a,On.transition=s}else t.current=n;if(Go&&(Go=!1,ur=t,cc=r),s=t.pendingLanes,s===0&&(vr=null),uy(n.stateNode),vn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(lc)throw lc=!1,t=Xd,Xd=null,t;return cc&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===$d?Ga++:(Ga=0,$d=t):Ga=0,Ar(),null}function Bs(){if(ur!==null){var t=F_(cc),e=On.transition,n=ut;try{if(On.transition=null,ut=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,cc=0,it&6)throw Error(le(331));var r=it;for(it|=4,we=t.current;we!==null;){var s=we,a=s.child;if(we.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(we=c;we!==null;){var f=we;switch(f.tag){case 0:case 11:case 15:Va(8,f,s)}var h=f.child;if(h!==null)h.return=f,we=h;else for(;we!==null;){f=we;var d=f.sibling,p=f.return;if($0(f),f===c){we=null;break}if(d!==null){d.return=p,we=d;break}we=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}we=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,we=a;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Va(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,we=u;break e}we=s.return}}var g=t.current;for(we=g;we!==null;){a=we;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,we=v;else e:for(a=g;we!==null;){if(o=we,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Nc(9,o)}}catch(A){Rt(o,o.return,A)}if(o===a){we=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,we=M;break e}we=o.return}}if(it=r,Ar(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(Tc,t)}catch{}i=!0}return i}finally{ut=n,On.transition=e}}return!1}function Am(t,e,n){e=Ys(n,e),e=F0(t,e,1),t=_r(t,e,1),e=dn(),t!==null&&(_o(t,1,e),vn(t,e))}function Rt(t,e,n){if(t.tag===3)Am(t,t,n);else for(;e!==null;){if(e.tag===3){Am(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vr===null||!vr.has(i))){t=Ys(n,t),t=O0(e,t,1),e=_r(e,t,1),t=dn(),e!==null&&(_o(e,1,t),vn(e,t));break}}e=e.return}}function OS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Kt&n)===n&&(Ot===4||Ot===3&&(Kt&130023424)===Kt&&500>Nt()-Dh?Wr(t,0):Nh|=n),vn(t,e)}function iv(t,e){e===0&&(t.mode&1?(e=Do,Do<<=1,!(Do&130023424)&&(Do=4194304)):e=1);var n=dn();t=zi(t,e),t!==null&&(_o(t,e,n),vn(t,n))}function kS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iv(t,n)}function BS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),iv(t,n)}var rv;rv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,AS(t,e,n);mn=!!(t.flags&131072)}else mn=!1,Et&&e.flags&1048576&&l0(e,ec,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bl(t,e),t=e.pendingProps;var r=Ws(e,on.current);ks(e,n),r=Ah(null,e,i,t,r,n);var s=Ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,Jl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sh(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,Ud(e,i,t,n),e=kd(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&ph(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=VS(i),t=$n(i,t),r){case 0:e=Od(null,e,i,t,n);break e;case 1:e=gm(null,e,i,t,n);break e;case 11:e=pm(null,e,i,t,n);break e;case 14:e=mm(null,e,i,$n(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),gm(t,e,i,r,n);case 3:e:{if(V0(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,p0(t,e),ic(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(le(423)),e),e=_m(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(le(424)),e),e=_m(t,e,i,n,r);break e}else for(An=gr(e.stateNode.containerInfo.firstChild),Cn=e,Et=!0,qn=null,n=f0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(js(),i===r){e=Vi(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return m0(e),t===null&&Nd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Cd(i,r)?a=null:s!==null&&Cd(i,s)&&(e.flags|=32),z0(t,e),un(t,e,a,n),e.child;case 6:return t===null&&Nd(e),null;case 13:return H0(t,e,n);case 4:return Mh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),pm(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,_t(tc,i._currentValue),i._currentValue=a,s!==null)if(ti(s.value,a)){if(s.children===r.children&&!gn.current){e=Vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Dd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(le(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Dd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=kn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),mm(t,e,i,r,n);case 15:return k0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),bl(t,e),e.tag=1,_n(i)?(t=!0,Jl(e)):t=!1,ks(e,n),U0(e,i,r),Ud(e,i,r,n),kd(null,e,i,!0,t,n);case 19:return G0(t,e,n);case 22:return B0(t,e,n)}throw Error(le(156,e.tag))};function sv(t,e){return N_(t,e)}function zS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new zS(t,e,n,i)}function Oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VS(t){if(typeof t=="function")return Oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nh)return 11;if(t===ih)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Oh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Es:return jr(n.children,r,s,e);case th:a=8,r|=8;break;case sd:return t=Fn(12,n,e,r|2),t.elementType=sd,t.lanes=s,t;case ad:return t=Fn(13,n,e,r),t.elementType=ad,t.lanes=s,t;case od:return t=Fn(19,n,e,r),t.elementType=od,t.lanes=s,t;case m_:return Ic(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case h_:a=10;break e;case p_:a=9;break e;case nh:a=11;break e;case ih:a=14;break e;case rr:a=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Fn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Ic(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=m_,t.lanes=n,t.stateNode={isHidden:!1},t}function vu(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function xu(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qc(0),this.expirationTimes=Qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kh(t,e,n,i,r,s,a,o,l){return t=new HS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sh(s),t}function GS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function av(t){if(!t)return Mr;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(_n(n))return a0(t,n,e)}return e}function ov(t,e,n,i,r,s,a,o,l){return t=kh(n,i,!0,t,r,s,a,o,l),t.context=av(null),n=t.current,i=dn(),r=xr(n),s=Ii(i,r),s.callback=e??null,_r(n,s,r),t.current.lanes=r,_o(t,r,i),vn(t,i),t}function Uc(t,e,n,i){var r=e.current,s=dn(),a=xr(r);return n=av(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=_r(r,e,a),t!==null&&(Qn(t,r,a,s),wl(t,r,a)),a}function dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bh(t,e){Cm(t,e),(t=t.alternate)&&Cm(t,e)}function WS(){return null}var lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function zh(t){this._internalRoot=t}Fc.prototype.render=zh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Uc(t,e,null,null)};Fc.prototype.unmount=zh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Uc(null,t,null,null)}),e[Bi]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=B_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&V_(t)}};function Vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bm(){}function jS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=dc(a);s.call(c)}}var a=ov(e,i,t,0,null,!1,!1,"",bm);return t._reactRootContainer=a,t[Bi]=a.current,eo(t.nodeType===8?t.parentNode:t),Kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=dc(l);o.call(c)}}var l=kh(t,0,!1,null,null,!1,!1,"",bm);return t._reactRootContainer=l,t[Bi]=l.current,eo(t.nodeType===8?t.parentNode:t),Kr(function(){Uc(e,l,n,i)}),l}function kc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=dc(a);o.call(l)}}Uc(e,a,t,r)}else a=jS(n,e,t,r,i);return dc(a)}O_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=La(e.pendingLanes);n!==0&&(ah(e,n|1),vn(e,Nt()),!(it&6)&&(qs=Nt()+500,Ar()))}break;case 13:Kr(function(){var i=zi(t,1);if(i!==null){var r=dn();Qn(i,t,1,r)}}),Bh(t,1)}};oh=function(t){if(t.tag===13){var e=zi(t,134217728);if(e!==null){var n=dn();Qn(e,t,134217728,n)}Bh(t,134217728)}};k_=function(t){if(t.tag===13){var e=xr(t),n=zi(t,e);if(n!==null){var i=dn();Qn(n,t,e,i)}Bh(t,e)}};B_=function(){return ut};z_=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};_d=function(t,e,n){switch(e){case"input":if(ud(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=bc(i);if(!r)throw Error(le(90));__(i),ud(i,r)}}}break;case"textarea":x_(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};A_=Ih;C_=Kr;var XS={usingClientEntryPoint:!1,Events:[xo,Cs,bc,T_,w_,Ih]},_a={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$S={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=P_(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||WS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{Tc=Wo.inject($S),fi=Wo}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XS;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(e))throw Error(le(200));return GS(t,e,null,n)};Rn.createRoot=function(t,e){if(!Vh(t))throw Error(le(299));var n=!1,i="",r=lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kh(t,1,!1,null,null,n,!1,i,r),t[Bi]=e.current,eo(t.nodeType===8?t.parentNode:t),new zh(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=P_(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Kr(t)};Rn.hydrate=function(t,e,n){if(!Oc(e))throw Error(le(200));return kc(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Vh(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=lv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ov(e,null,t,1,n??null,r,!1,s,a),t[Bi]=e.current,eo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fc(e)};Rn.render=function(t,e,n){if(!Oc(e))throw Error(le(200));return kc(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Oc(t))throw Error(le(40));return t._reactRootContainer?(Kr(function(){kc(null,null,t,!1,function(){t._reactRootContainer=null,t[Bi]=null})}),!0):!1};Rn.unstable_batchedUpdates=Ih;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Oc(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return kc(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cv)}catch(t){console.error(t)}}cv(),c_.exports=Rn;var YS=c_.exports,uv,Rm=YS;uv=Rm.createRoot,Rm.hydrateRoot;/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Pm="popstate";function Lm(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function qS(t={}){function e(i,r){var c;let s=(c=r.state)==null?void 0:c.masked,{pathname:a,search:o,hash:l}=s||i.location;return Kd("",{pathname:a,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default",s?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function n(i,r){return typeof r=="string"?r:co(r)}return ZS(e,n,null,t)}function At(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ni(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KS(){return Math.random().toString(36).substring(2,10)}function Nm(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Kd(t,e,n=null,i,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ra(e):e,state:n,key:e&&e.key||i||KS(),unstable_mask:r}}function co({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ra(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function ZS(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o="POP",l=null,c=f();c==null&&(c=0,a.replaceState({...a.state,idx:c},""));function f(){return(a.state||{idx:null}).idx}function h(){o="POP";let m=f(),u=m==null?null:m-c;c=m,l&&l({action:o,location:x.location,delta:u})}function d(m,u){o="PUSH";let g=Lm(m)?m:Kd(x.location,m,u);c=f()+1;let v=Nm(g,c),M=x.createHref(g.unstable_mask||g);try{a.pushState(v,"",M)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(M)}s&&l&&l({action:o,location:x.location,delta:1})}function p(m,u){o="REPLACE";let g=Lm(m)?m:Kd(x.location,m,u);c=f();let v=Nm(g,c),M=x.createHref(g.unstable_mask||g);a.replaceState(v,"",M),s&&l&&l({action:o,location:x.location,delta:0})}function _(m){return JS(m)}let x={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Pm,h),l=m,()=>{r.removeEventListener(Pm,h),l=null}},createHref(m){return e(r,m)},createURL:_,encodeLocation(m){let u=_(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:d,replace:p,go(m){return a.go(m)}};return x}function JS(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),At(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:co(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function dv(t,e,n="/"){return QS(t,e,n,!1)}function QS(t,e,n,i){let r=typeof e=="string"?ra(e):e,s=Hi(r.pathname||"/",n);if(s==null)return null;let a=fv(t);eM(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=dM(s);o=cM(a[l],c,i)}return o}function fv(t,e=[],n=[],i="",r=!1){let s=(a,o,l=r,c)=>{let f={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(i)&&l)return;At(f.relativePath.startsWith(i),`Absolute route path "${f.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(i.length)}let h=pi([i,f.relativePath]),d=n.concat(f);a.children&&a.children.length>0&&(At(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),fv(a.children,e,d,h,l)),!(a.path==null&&!a.index)&&e.push({path:h,score:oM(h,a.index),routesMeta:d})};return t.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of hv(a.path))s(a,o,!0,c)}),e}function hv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=hv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function eM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var tM=/^:[\w-]+$/,nM=3,iM=2,rM=1,sM=10,aM=-2,Dm=t=>t==="*";function oM(t,e){let n=t.split("/"),i=n.length;return n.some(Dm)&&(i+=aM),e&&(i+=iM),n.filter(r=>!Dm(r)).reduce((r,s)=>r+(tM.test(s)?nM:s===""?rM:sM),i)}function lM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function cM(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=fc({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),d=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=fc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:pi([s,h.pathname]),pathnameBase:mM(pi([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=pi([s,h.pathnameBase]))}return a}function fc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=uM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,{paramName:f,isOptional:h},d)=>{if(f==="*"){let _=o[d]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const p=o[d];return h&&!p?c[f]=void 0:c[f]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function uM(t,e=!1,n=!0){ni(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l,c,f)=>{if(i.push({paramName:o,isOptional:l!=null}),l){let h=f.charAt(c+a.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function dM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ni(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Hi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}var fM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function hM(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ra(t):t,s;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?s=Im(n.substring(1),"/"):s=Im(n,e)):s=e,{pathname:s,search:gM(i),hash:_M(r)}}function Im(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function yu(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function pv(t){let e=pM(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function Hh(t,e,n,i=!1){let r;typeof t=="string"?r=ra(t):(r={...t},At(!r.pathname||!r.pathname.includes("?"),yu("?","pathname","search",r)),At(!r.pathname||!r.pathname.includes("#"),yu("#","pathname","hash",r)),At(!r.search||!r.search.includes("#"),yu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),h-=1;r.pathname=d.join("/")}o=h>=0?e[h]:"/"}let l=hM(r,o),c=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}var pi=t=>t.join("/").replace(/\/\/+/g,"/"),mM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_M=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,vM=class{constructor(t,e,n,i=!1){this.status=t,this.statusText=e||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function xM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function yM(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var mv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function gv(t,e){let n=t;if(typeof n!="string"||!fM.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let i=n,r=!1;if(mv)try{let s=new URL(window.location.href),a=n.startsWith("//")?new URL(s.protocol+n):new URL(n),o=Hi(a.pathname,e);a.origin===s.origin&&o!=null?n=o+a.search+a.hash:r=!0}catch{ni(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:r,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _v=["POST","PUT","PATCH","DELETE"];new Set(_v);var SM=["GET",..._v];new Set(SM);var sa=L.createContext(null);sa.displayName="DataRouter";var Bc=L.createContext(null);Bc.displayName="DataRouterState";var MM=L.createContext(!1),vv=L.createContext({isTransitioning:!1});vv.displayName="ViewTransition";var EM=L.createContext(new Map);EM.displayName="Fetchers";var TM=L.createContext(null);TM.displayName="Await";var zn=L.createContext(null);zn.displayName="Navigation";var So=L.createContext(null);So.displayName="Location";var yi=L.createContext({outlet:null,matches:[],isDataRoute:!1});yi.displayName="Route";var Gh=L.createContext(null);Gh.displayName="RouteError";var xv="REACT_ROUTER_ERROR",wM="REDIRECT",AM="ROUTE_ERROR_RESPONSE";function CM(t){if(t.startsWith(`${xv}:${wM}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function bM(t){if(t.startsWith(`${xv}:${AM}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new vM(e.status,e.statusText,e.data)}catch{}}function RM(t,{relative:e}={}){At(Mo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=L.useContext(zn),{hash:r,pathname:s,search:a}=Eo(t,{relative:e}),o=s;return n!=="/"&&(o=s==="/"?n:pi([n,s])),i.createHref({pathname:o,search:a,hash:r})}function Mo(){return L.useContext(So)!=null}function Yi(){return At(Mo(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(So).location}var yv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sv(t){L.useContext(zn).static||L.useLayoutEffect(t)}function Mv(){let{isDataRoute:t}=L.useContext(yi);return t?GM():PM()}function PM(){At(Mo(),"useNavigate() may be used only in the context of a <Router> component.");let t=L.useContext(sa),{basename:e,navigator:n}=L.useContext(zn),{matches:i}=L.useContext(yi),{pathname:r}=Yi(),s=JSON.stringify(pv(i)),a=L.useRef(!1);return Sv(()=>{a.current=!0}),L.useCallback((l,c={})=>{if(ni(a.current,yv),!a.current)return;if(typeof l=="number"){n.go(l);return}let f=Hh(l,JSON.parse(s),r,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:pi([e,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[e,n,s,r,t])}L.createContext(null);function LM(){let{matches:t}=L.useContext(yi),e=t[t.length-1];return e?e.params:{}}function Eo(t,{relative:e}={}){let{matches:n}=L.useContext(yi),{pathname:i}=Yi(),r=JSON.stringify(pv(n));return L.useMemo(()=>Hh(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function NM(t,e){return Ev(t,e)}function Ev(t,e,n){var m;At(Mo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=L.useContext(zn),{matches:r}=L.useContext(yi),s=r[r.length-1],a=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",c=s&&s.route;{let u=c&&c.path||"";wv(o,!c||u.endsWith("*")||u.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${u}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${u}"> to <Route path="${u==="/"?"*":`${u}/*`}">.`)}let f=Yi(),h;if(e){let u=typeof e=="string"?ra(e):e;At(l==="/"||((m=u.pathname)==null?void 0:m.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${u.pathname}" was given in the \`location\` prop.`),h=u}else h=f;let d=h.pathname||"/",p=d;if(l!=="/"){let u=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(u.length).join("/")}let _=dv(t,{pathname:p});ni(c||_!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),ni(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=OM(_&&_.map(u=>Object.assign({},u,{params:Object.assign({},a,u.params),pathname:pi([l,i.encodeLocation?i.encodeLocation(u.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:u.pathname]),pathnameBase:u.pathnameBase==="/"?l:pi([l,i.encodeLocation?i.encodeLocation(u.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:u.pathnameBase])})),r,n);return e&&x?L.createElement(So.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...h},navigationType:"POP"}},x):x}function DM(){let t=HM(),e=xM(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:s},"ErrorBoundary")," or"," ",L.createElement("code",{style:s},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:r},n):null,a)}var IM=L.createElement(DM,null),Tv=class extends L.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=bM(t.digest);n&&(t=n)}let e=t!==void 0?L.createElement(yi.Provider,{value:this.props.routeContext},L.createElement(Gh.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?L.createElement(UM,{error:t},e):e}};Tv.contextType=MM;var Su=new WeakMap;function UM({children:t,error:e}){let{basename:n}=L.useContext(zn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=CM(e.digest);if(i){let r=Su.get(e);if(r)throw r;let s=gv(i.location,n);if(mv&&!Su.get(e))if(s.isExternal||i.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const a=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:i.replace}));throw Su.set(e,a),a}return L.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function FM({routeContext:t,match:e,children:n}){let i=L.useContext(sa);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),L.createElement(yi.Provider,{value:t},n)}function OM(t,e=[],n){let i=n==null?void 0:n.state;if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let r=t,s=i==null?void 0:i.errors;if(s!=null){let f=r.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);At(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,f+1))}let a=!1,o=-1;if(n&&i){a=i.renderFallback;for(let f=0;f<r.length;f++){let h=r[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(o=f),h.route.id){let{loaderData:d,errors:p}=i,_=h.route.loader&&!d.hasOwnProperty(h.route.id)&&(!p||p[h.route.id]===void 0);if(h.route.lazy||_){n.isStatic&&(a=!0),o>=0?r=r.slice(0,o+1):r=[r[0]];break}}}}let l=n==null?void 0:n.onError,c=i&&l?(f,h)=>{var d,p;l(f,{location:i.location,params:((p=(d=i.matches)==null?void 0:d[0])==null?void 0:p.params)??{},unstable_pattern:yM(i.matches),errorInfo:h})}:void 0;return r.reduceRight((f,h,d)=>{let p,_=!1,x=null,m=null;i&&(p=s&&h.route.id?s[h.route.id]:void 0,x=h.route.errorElement||IM,a&&(o<0&&d===0?(wv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,m=null):o===d&&(_=!0,m=h.route.hydrateFallbackElement||null)));let u=e.concat(r.slice(0,d+1)),g=()=>{let v;return p?v=x:_?v=m:h.route.Component?v=L.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=f,L.createElement(FM,{match:h,routeContext:{outlet:f,matches:u,isDataRoute:i!=null},children:v})};return i&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?L.createElement(Tv,{location:i.location,revalidation:i.revalidation,component:x,error:p,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0},onError:c}):g()},null)}function Wh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kM(t){let e=L.useContext(sa);return At(e,Wh(t)),e}function BM(t){let e=L.useContext(Bc);return At(e,Wh(t)),e}function zM(t){let e=L.useContext(yi);return At(e,Wh(t)),e}function jh(t){let e=zM(t),n=e.matches[e.matches.length-1];return At(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function VM(){return jh("useRouteId")}function HM(){var i;let t=L.useContext(Gh),e=BM("useRouteError"),n=jh("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function GM(){let{router:t}=kM("useNavigate"),e=jh("useNavigate"),n=L.useRef(!1);return Sv(()=>{n.current=!0}),L.useCallback(async(r,s={})=>{ni(n.current,yv),n.current&&(typeof r=="number"?await t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var Um={};function wv(t,e,n){!e&&!Um[t]&&(Um[t]=!0,ni(!1,n))}L.memo(WM);function WM({routes:t,future:e,state:n,isStatic:i,onError:r}){return Ev(t,void 0,{state:n,isStatic:i,onError:r})}function Nl(t){At(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jM({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1,unstable_useTransitions:a}){At(!Mo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),l=L.useMemo(()=>({basename:o,navigator:r,static:s,unstable_useTransitions:a,future:{}}),[o,r,s,a]);typeof n=="string"&&(n=ra(n));let{pathname:c="/",search:f="",hash:h="",state:d=null,key:p="default",unstable_mask:_}=n,x=L.useMemo(()=>{let m=Hi(c,o);return m==null?null:{location:{pathname:m,search:f,hash:h,state:d,key:p,unstable_mask:_},navigationType:i}},[o,c,f,h,d,p,i,_]);return ni(x!=null,`<Router basename="${o}"> is not able to match the URL "${c}${f}${h}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:L.createElement(zn.Provider,{value:l},L.createElement(So.Provider,{children:e,value:x}))}function XM({children:t,location:e}){return NM(Zd(t),e)}function Zd(t,e=[]){let n=[];return L.Children.forEach(t,(i,r)=>{if(!L.isValidElement(i))return;let s=[...e,r];if(i.type===L.Fragment){n.push.apply(n,Zd(i.props.children,s));return}At(i.type===Nl,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),At(!i.props.index||!i.props.children,"An index route cannot have child routes.");let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Zd(i.props.children,s)),n.push(a)}),n}var Dl="get",Il="application/x-www-form-urlencoded";function zc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function $M(t){return zc(t)&&t.tagName.toLowerCase()==="button"}function YM(t){return zc(t)&&t.tagName.toLowerCase()==="form"}function qM(t){return zc(t)&&t.tagName.toLowerCase()==="input"}function KM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ZM(t,e){return t.button===0&&(!e||e==="_self")&&!KM(t)}function Jd(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function JM(t,e){let n=Jd(t);return e&&e.forEach((i,r)=>{n.has(r)||e.getAll(r).forEach(s=>{n.append(r,s)})}),n}var jo=null;function QM(){if(jo===null)try{new FormData(document.createElement("form"),0),jo=!1}catch{jo=!0}return jo}var eE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mu(t){return t!=null&&!eE.has(t)?(ni(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Il}"`),null):t}function tE(t,e){let n,i,r,s,a;if(YM(t)){let o=t.getAttribute("action");i=o?Hi(o,e):null,n=t.getAttribute("method")||Dl,r=Mu(t.getAttribute("enctype"))||Il,s=new FormData(t)}else if($M(t)||qM(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?Hi(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||Dl,r=Mu(t.getAttribute("formenctype"))||Mu(o.getAttribute("enctype"))||Il,s=new FormData(o,t),!QM()){let{name:c,type:f,value:h}=t;if(f==="image"){let d=c?`${c}.`:"";s.append(`${d}x`,"0"),s.append(`${d}y`,"0")}else c&&s.append(c,h)}}else{if(zc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Dl,i=null,r=Il,a=t}return s&&r==="text/plain"&&(a=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xh(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function nE(t,e,n,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${i}`:r.pathname=`${r.pathname}.${i}`:r.pathname==="/"?r.pathname=`_root.${i}`:e&&Hi(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function iE(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rE(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function sE(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let a=await iE(s,n);return a.links?a.links():[]}return[]}));return cE(i.flat(1).filter(rE).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Fm(t,e,n,i,r,s){let a=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,o=(l,c)=>{var f;return n[c].pathname!==l.pathname||((f=n[c].route.path)==null?void 0:f.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,c)=>a(l,c)||o(l,c)):s==="data"?e.filter((l,c)=>{var h;let f=i.routes[l.route.id];if(!f||!f.hasLoader)return!1;if(a(l,c)||o(l,c))return!0;if(l.route.shouldRevalidate){let d=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function aE(t,e,{includeHydrateFallback:n}={}){return oE(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function oE(t){return[...new Set(t)]}function lE(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function cE(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(lE(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}function Av(){let t=L.useContext(sa);return Xh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function uE(){let t=L.useContext(Bc);return Xh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var $h=L.createContext(void 0);$h.displayName="FrameworkContext";function Cv(){let t=L.useContext($h);return Xh(t,"You must render this element inside a <HydratedRouter> element"),t}function dE(t,e){let n=L.useContext($h),[i,r]=L.useState(!1),[s,a]=L.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:c,onMouseLeave:f,onTouchStart:h}=e,d=L.useRef(null);L.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let x=u=>{u.forEach(g=>{a(g.isIntersecting)})},m=new IntersectionObserver(x,{threshold:.5});return d.current&&m.observe(d.current),()=>{m.disconnect()}}},[t]),L.useEffect(()=>{if(i){let x=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{r(!0)},_=()=>{r(!1),a(!1)};return n?t!=="intent"?[s,d,{}]:[s,d,{onFocus:va(o,p),onBlur:va(l,_),onMouseEnter:va(c,p),onMouseLeave:va(f,_),onTouchStart:va(h,p)}]:[!1,d,{}]}function va(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function fE({page:t,...e}){let{router:n}=Av(),i=L.useMemo(()=>dv(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?L.createElement(pE,{page:t,matches:i,...e}):null}function hE(t){let{manifest:e,routeModules:n}=Cv(),[i,r]=L.useState([]);return L.useEffect(()=>{let s=!1;return sE(t,e,n).then(a=>{s||r(a)}),()=>{s=!0}},[t,e,n]),i}function pE({page:t,matches:e,...n}){let i=Yi(),{future:r,manifest:s,routeModules:a}=Cv(),{basename:o}=Av(),{loaderData:l,matches:c}=uE(),f=L.useMemo(()=>Fm(t,e,c,s,i,"data"),[t,e,c,s,i]),h=L.useMemo(()=>Fm(t,e,c,s,i,"assets"),[t,e,c,s,i]),d=L.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let x=new Set,m=!1;if(e.forEach(g=>{var M;let v=s.routes[g.route.id];!v||!v.hasLoader||(!f.some(A=>A.route.id===g.route.id)&&g.route.id in l&&((M=a[g.route.id])!=null&&M.shouldRevalidate)||v.hasClientLoader?m=!0:x.add(g.route.id))}),x.size===0)return[];let u=nE(t,o,r.unstable_trailingSlashAwareDataRequests,"data");return m&&x.size>0&&u.searchParams.set("_routes",e.filter(g=>x.has(g.route.id)).map(g=>g.route.id).join(",")),[u.pathname+u.search]},[o,r.unstable_trailingSlashAwareDataRequests,l,i,s,f,e,t,a]),p=L.useMemo(()=>aE(h,s),[h,s]),_=hE(h);return L.createElement(L.Fragment,null,d.map(x=>L.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),p.map(x=>L.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),_.map(({key:x,link:m})=>L.createElement("link",{key:x,nonce:n.nonce,...m,crossOrigin:m.crossOrigin??n.crossOrigin})))}function mE(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var gE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gE&&(window.__reactRouterVersion="7.13.1")}catch{}function _E({basename:t,children:e,unstable_useTransitions:n,window:i}){let r=L.useRef();r.current==null&&(r.current=qS({window:i,v5Compat:!0}));let s=r.current,[a,o]=L.useState({action:s.action,location:s.location}),l=L.useCallback(c=>{n===!1?o(c):L.startTransition(()=>o(c))},[n]);return L.useLayoutEffect(()=>s.listen(l),[s,l]),L.createElement(jM,{basename:t,children:e,location:a.location,navigationType:a.action,navigator:s,unstable_useTransitions:n})}var bv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hc=L.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:a,unstable_mask:o,state:l,target:c,to:f,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:p,..._},x){let{basename:m,navigator:u,unstable_useTransitions:g}=L.useContext(zn),v=typeof f=="string"&&bv.test(f),M=gv(f,m);f=M.to;let A=RM(f,{relative:r}),C=Yi(),b=null;if(o){let V=Hh(o,[],C.unstable_mask?C.unstable_mask.pathname:"/",!0);m!=="/"&&(V.pathname=V.pathname==="/"?m:pi([m,V.pathname])),b=u.createHref(V)}let[y,T,U]=dE(i,_),P=SE(f,{replace:a,unstable_mask:o,state:l,target:c,preventScrollReset:h,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:p,unstable_useTransitions:g});function z(V){e&&e(V),V.defaultPrevented||P(V)}let W=!(M.isExternal||s),q=L.createElement("a",{..._,...U,href:(W?b:void 0)||M.absoluteURL||A,onClick:W?z:e,ref:mE(x,T),target:c,"data-discover":!v&&n==="render"?"true":void 0});return y&&!v?L.createElement(L.Fragment,null,q,L.createElement(fE,{page:A})):q});hc.displayName="Link";var vE=L.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:a,viewTransition:o,children:l,...c},f){let h=Eo(a,{relative:c.relative}),d=Yi(),p=L.useContext(Bc),{navigator:_,basename:x}=L.useContext(zn),m=p!=null&&CE(h)&&o===!0,u=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,g=d.pathname,v=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(g=g.toLowerCase(),v=v?v.toLowerCase():null,u=u.toLowerCase()),v&&x&&(v=Hi(v,x)||v);const M=u!=="/"&&u.endsWith("/")?u.length-1:u.length;let A=g===u||!r&&g.startsWith(u)&&g.charAt(M)==="/",C=v!=null&&(v===u||!r&&v.startsWith(u)&&v.charAt(u.length)==="/"),b={isActive:A,isPending:C,isTransitioning:m},y=A?e:void 0,T;typeof i=="function"?T=i(b):T=[i,A?"active":null,C?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let U=typeof s=="function"?s(b):s;return L.createElement(hc,{...c,"aria-current":y,className:T,ref:f,style:U,to:a,viewTransition:o},typeof l=="function"?l(b):l)});vE.displayName="NavLink";var xE=L.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:a=Dl,action:o,onSubmit:l,relative:c,preventScrollReset:f,viewTransition:h,unstable_defaultShouldRevalidate:d,...p},_)=>{let{unstable_useTransitions:x}=L.useContext(zn),m=wE(),u=AE(o,{relative:c}),g=a.toLowerCase()==="get"?"get":"post",v=typeof o=="string"&&bv.test(o),M=A=>{if(l&&l(A),A.defaultPrevented)return;A.preventDefault();let C=A.nativeEvent.submitter,b=(C==null?void 0:C.getAttribute("formmethod"))||a,y=()=>m(C||A.currentTarget,{fetcherKey:e,method:b,navigate:n,replace:r,state:s,relative:c,preventScrollReset:f,viewTransition:h,unstable_defaultShouldRevalidate:d});x&&n!==!1?L.startTransition(()=>y()):y()};return L.createElement("form",{ref:_,method:g,action:u,onSubmit:i?l:M,...p,"data-discover":!v&&t==="render"?"true":void 0})});xE.displayName="Form";function yE(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rv(t){let e=L.useContext(sa);return At(e,yE(t)),e}function SE(t,{target:e,replace:n,unstable_mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,unstable_defaultShouldRevalidate:l,unstable_useTransitions:c}={}){let f=Mv(),h=Yi(),d=Eo(t,{relative:a});return L.useCallback(p=>{if(ZM(p,e)){p.preventDefault();let _=n!==void 0?n:co(h)===co(d),x=()=>f(t,{replace:_,unstable_mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,unstable_defaultShouldRevalidate:l});c?L.startTransition(()=>x()):x()}},[h,f,d,n,i,r,e,t,s,a,o,l,c])}function ME(t){ni(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let e=L.useRef(Jd(t)),n=L.useRef(!1),i=Yi(),r=L.useMemo(()=>JM(i.search,n.current?null:e.current),[i.search]),s=Mv(),a=L.useCallback((o,l)=>{const c=Jd(typeof o=="function"?o(new URLSearchParams(r)):o);n.current=!0,s("?"+c,l)},[s,r]);return[r,a]}var EE=0,TE=()=>`__${String(++EE)}__`;function wE(){let{router:t}=Rv("useSubmit"),{basename:e}=L.useContext(zn),n=VM(),i=t.fetch,r=t.navigate;return L.useCallback(async(s,a={})=>{let{action:o,method:l,encType:c,formData:f,body:h}=tE(s,e);if(a.navigate===!1){let d=a.fetcherKey||TE();await i(d,n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:f,body:h,formMethod:a.method||l,formEncType:a.encType||c,flushSync:a.flushSync})}else await r(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:f,body:h,formMethod:a.method||l,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[i,r,e,n])}function AE(t,{relative:e}={}){let{basename:n}=L.useContext(zn),i=L.useContext(yi);At(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...Eo(t||".",{relative:e})},a=Yi();if(t==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(f=>f==="")){o.delete("index"),l.filter(h=>h).forEach(h=>o.append("index",h));let f=o.toString();s.search=f?`?${f}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:pi([n,s.pathname])),co(s)}function CE(t,{relative:e}={}){let n=L.useContext(vv);At(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Rv("useViewTransitionState"),r=Eo(t,{relative:e});if(!n.isTransitioning)return!1;let s=Hi(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=Hi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return fc(r.pathname,a)!=null||fc(r.pathname,s)!=null}const bE="http://localhost:3001/api";function RE(){return localStorage.getItem("kin_token")}function Pv(t){t?localStorage.setItem("kin_token",t):localStorage.removeItem("kin_token")}async function st(t,e={}){const n=RE(),i={"Content-Type":"application/json",...e.headers};n&&(i.Authorization=`Bearer ${n}`);const r=await fetch(`${bE}${t}`,{...e,headers:i});if(!r.ok){const s=await r.json().catch(()=>({})),a=new Error(s.error||`HTTP ${r.status}`);throw a.status=r.status,a.body=s,a}return r.json()}const PE={sendMagicLink:t=>st("/auth/magic-link",{method:"POST",body:JSON.stringify({email:t})}),verify:t=>st("/auth/verify",{method:"POST",body:JSON.stringify({token:t})}),login:(t,e)=>st("/auth/login",{method:"POST",body:JSON.stringify({email:t,password:e})}),logout:()=>st("/auth/logout",{method:"POST"}),me:()=>st("/auth/me")},LE={init:()=>st("/bootstrap",{method:"POST"})},Om={list:()=>st("/trees"),get:t=>st(`/trees/${t}`),create:t=>st("/trees",{method:"POST",body:JSON.stringify(t)})},Qd={list:t=>st(`/profiles?treeId=${encodeURIComponent(t)}`),get:t=>st(`/profiles/${t}`),create:t=>st("/profiles",{method:"POST",body:JSON.stringify(t)}),update:(t,e)=>st(`/profiles/${t}`,{method:"PUT",body:JSON.stringify(e)}),claim:t=>st(`/profiles/${t}/claim`,{method:"POST"}),duplicates:(t,e,n)=>st(`/profiles/duplicates?treeId=${encodeURIComponent(t)}&firstName=${encodeURIComponent(e)}&lastName=${encodeURIComponent(n)}`)},NE={list:({profileId:t,treeId:e}={})=>{const n=new URLSearchParams;return t&&n.set("profileId",t),e&&n.set("treeId",e),st(`/media?${n.toString()}`)},create:t=>st("/media",{method:"POST",body:JSON.stringify(t)})},km={async fetchAll(t){const[e,n]=await Promise.all([Qd.list(t),pc.list(t)]);return{profiles:e,relationships:n}},async createPerson(t,e){const n=await Qd.create({treeId:t,firstName:e.firstName,lastName:e.lastName,maidenName:e.maiden||null,isLiving:!e.death,metadata:{branch:e.branch,gender:e.gender,birth:e.birth,death:e.death,bio:e.bio},skipDuplicateCheck:!0}),i=[],r=[];e.parent1&&r.push({treeId:t,type:"parent_child",profileA:e.parent1,profileB:n.id}),e.parent2&&r.push({treeId:t,type:"parent_child",profileA:e.parent2,profileB:n.id}),e.spouse&&r.push({treeId:t,type:"marriage",profileA:e.spouse,profileB:n.id});for(const s of r){const a=await pc.create(s);i.push(a)}return{profile:n,relationships:i}}},Bm={verify:t=>st(`/join/verify?token=${encodeURIComponent(t)}`),claim:(t,e,n,i)=>st("/join/claim",{method:"POST",body:JSON.stringify({token:t,email:e,displayName:n,password:i})})},zm={add:t=>st("/facts",{method:"POST",body:JSON.stringify(t)}),update:(t,e)=>st(`/facts/${t}`,{method:"PUT",body:JSON.stringify(e)}),remove:t=>st(`/facts/${t}`,{method:"DELETE"}),verify:t=>st(`/facts/${t}/verify`,{method:"PUT"}),lock:t=>st(`/facts/${t}/lock`,{method:"PUT"})},pc={list:t=>st(`/relationships?treeId=${encodeURIComponent(t)}`),create:t=>st("/relationships",{method:"POST",body:JSON.stringify(t)}),remove:t=>st(`/relationships/${t}`,{method:"DELETE"})},Vm={list:t=>st(`/stories?profileId=${encodeURIComponent(t)}`),get:t=>st(`/stories/${t}`),create:t=>st("/stories",{method:"POST",body:JSON.stringify(t)}),update:(t,e)=>st(`/stories/${t}`,{method:"PUT",body:JSON.stringify(e)}),remove:t=>st(`/stories/${t}`,{method:"DELETE"})},Lv=L.createContext(null);function Yh(){const t=L.useContext(Lv);if(!t)throw new Error("useTree must be used within TreeProvider");return t}function DE({children:t}){const[e,n]=L.useState([]),[i,r]=L.useState(null),[s,a]=L.useState(()=>localStorage.getItem("kin_active_tree")||null),[o,l]=L.useState(!0);function c(f){a(f),f?localStorage.setItem("kin_active_tree",f):localStorage.removeItem("kin_active_tree")}return L.useEffect(()=>{async function f(){function h(p){if(n(p),p.length===0)return;const _=p.map(x=>x.id);(!s||!_.includes(s))&&(c(p[0].id),console.log("[Kin] Auto-selected first tree:",p[0].id))}async function d(){const p=await LE.init();p.sessionToken&&Pv(p.sessionToken),p.userId&&r(p.userId);const _=await Om.list();h(_)}try{let p=await Om.list();if(p.length===0)console.log("[Kin] No trees found — bootstrapping…"),await d();else{h(p);try{const _=await PE.me();_!=null&&_.id&&r(_.id)}catch{}}}catch(p){console.warn("[Kin] Tree list failed, attempting bootstrap…",p.message);try{await d()}catch(_){console.error("[Kin] Bootstrap failed:",_.message)}}finally{l(!1)}}f()},[]),E.jsx(Lv.Provider,{value:{activeTreeId:s,setActiveTreeId:c,treeList:e,loading:o,currentUserId:i},children:t})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="183",IE=0,Hm=1,UE=2,Ul=1,FE=2,Da=3,Er=0,xn=1,Pi=2,Ui=0,zs=1,Gm=2,Wm=3,jm=4,OE=5,kr=100,kE=101,BE=102,zE=103,VE=104,HE=200,GE=201,WE=202,jE=203,ef=204,tf=205,XE=206,$E=207,YE=208,qE=209,KE=210,ZE=211,JE=212,QE=213,e1=214,nf=0,rf=1,sf=2,Ks=3,af=4,of=5,lf=6,cf=7,Nv=0,t1=1,n1=2,mi=0,Dv=1,Iv=2,Uv=3,Fv=4,Ov=5,kv=6,Bv=7,zv=300,Zr=301,Zs=302,Eu=303,Tu=304,Vc=306,uf=1e3,Di=1001,df=1002,Yt=1003,i1=1004,Xo=1005,qt=1006,wu=1007,dr=1008,wn=1009,Vv=1010,Hv=1011,uo=1012,Kh=1013,vi=1014,ui=1015,Gi=1016,Zh=1017,Jh=1018,fo=1020,Gv=35902,Wv=35899,jv=1021,Xv=1022,Zn=1023,Wi=1026,Gr=1027,$v=1028,Qh=1029,Js=1030,ep=1031,tp=1033,Fl=33776,Ol=33777,kl=33778,Bl=33779,ff=35840,hf=35841,pf=35842,mf=35843,gf=36196,_f=37492,vf=37496,xf=37488,yf=37489,Sf=37490,Mf=37491,Ef=37808,Tf=37809,wf=37810,Af=37811,Cf=37812,bf=37813,Rf=37814,Pf=37815,Lf=37816,Nf=37817,Df=37818,If=37819,Uf=37820,Ff=37821,Of=36492,kf=36494,Bf=36495,zf=36283,Vf=36284,Hf=36285,Gf=36286,r1=3200,s1=0,a1=1,lr="",Tn="srgb",Qs="srgb-linear",mc="linear",lt="srgb",is=7680,Xm=519,o1=512,l1=513,c1=514,np=515,u1=516,d1=517,ip=518,f1=519,Wf=35044,$m="300 es",di=2e3,ho=2001;function h1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function p1(){const t=gc("canvas");return t.style.display="block",t}const Ym={};function _c(...t){const e="THREE."+t.shift();console.log(e,...t)}function Yv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ve(...t){t=Yv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function tt(...t){t=Yv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function vc(...t){const e=t.join(" ");e in Ym||(Ym[e]=!0,Ve(...t))}function m1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const g1={[nf]:rf,[sf]:lf,[af]:cf,[Ks]:of,[rf]:nf,[lf]:sf,[cf]:af,[of]:Ks};class aa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qm=1234567;const Wa=Math.PI/180,po=180/Math.PI;function Fi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function rp(t,e){return(t%e+e)%e}function _1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function v1(t,e,n){return t!==e?(n-t)/(e-t):0}function ja(t,e,n){return(1-n)*t+n*e}function x1(t,e,n,i){return ja(t,e,1-Math.exp(-n*i))}function y1(t,e=1){return e-Math.abs(rp(t,e*2)-e)}function S1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function M1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function E1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function T1(t,e){return t+Math.random()*(e-t)}function w1(t){return t*(.5-Math.random())}function A1(t){t!==void 0&&(qm=t);let e=qm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C1(t){return t*Wa}function b1(t){return t*po}function R1(t){return(t&t-1)===0&&t!==0}function P1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function L1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function N1(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),f=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*f,l*h,l*d,o*c);break;case"YZY":t.set(l*d,o*f,l*h,o*c);break;case"ZXZ":t.set(l*h,l*d,o*f,o*c);break;case"XZX":t.set(o*f,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*f,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*f,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ct(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const D1={DEG2RAD:Wa,RAD2DEG:po,generateUUID:Fi,clamp:Qe,euclideanModulo:rp,mapLinear:_1,inverseLerp:v1,lerp:ja,damp:x1,pingpong:y1,smoothstep:S1,smootherstep:M1,randInt:E1,randFloat:T1,randFloatSpread:w1,seededRandom:A1,degToRad:C1,radToDeg:b1,isPowerOfTwo:R1,ceilPowerOfTwo:P1,floorPowerOfTwo:L1,setQuaternionFromProperEuler:N1,normalize:ct,denormalize:Kn};class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(h!==x||l!==d||c!==p||f!==_){let m=l*d+c*p+f*_+h*x;m<0&&(d=-d,p=-p,_=-_,x=-x,m=-m);let u=1-o;if(m<.9995){const g=Math.acos(m),v=Math.sin(g);u=Math.sin(u*g)/v,o=Math.sin(o*g)/v,l=l*u+d*o,c=c*u+p*o,f=f*u+_*o,h=h*u+x*o}else{l=l*u+d*o,c=c*u+p*o,f=f*u+_*o,h=h*u+x*o;const g=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=g,c*=g,f*=g,h*=g}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+f*h+l*p-c*d,e[n+1]=l*_+f*d+c*h-o*p,e[n+2]=c*_+f*p+o*d-l*h,e[n+3]=f*_-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h-d*p*_;break;case"YXZ":this._x=d*f*h+c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h+d*p*_;break;case"ZXY":this._x=d*f*h-c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h-d*p*_;break;case"ZYX":this._x=d*f*h-c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h+d*p*_;break;case"YZX":this._x=d*f*h+c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h-d*p*_;break;case"XZY":this._x=d*f*h-c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h+d*p*_;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Km.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Km.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new j,Km=new oa;class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],_=i[8],x=r[0],m=r[3],u=r[6],g=r[1],v=r[4],M=r[7],A=r[2],C=r[5],b=r[8];return s[0]=a*x+o*g+l*A,s[3]=a*m+o*v+l*C,s[6]=a*u+o*M+l*b,s[1]=c*x+f*g+h*A,s[4]=c*m+f*v+h*C,s[7]=c*u+f*M+h*b,s[2]=d*x+p*g+_*A,s[5]=d*m+p*v+_*C,s[8]=d*u+p*M+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,p=c*s-a*l,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Cu.makeScale(e,n)),this}rotate(e){return this.premultiply(Cu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cu=new $e,Zm=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jm=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I1(){const t={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===lr?mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Qs]:{primaries:e,whitePoint:i,transfer:mc,toXYZ:Zm,fromXYZ:Jm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Zm,fromXYZ:Jm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),t}const nt=I1();function Oi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let rs;class U1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=gc("canvas")),rs.width=e.width,rs.height=e.height;const r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=gc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Oi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Oi(n[i]/255)*255):n[i]=Oi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let F1=0;class sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bu(r[a].image)):s.push(bu(r[a]))}else s=bu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?U1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let O1=0;const Ru=new j;class an extends aa{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Di,r=Di,s=qt,a=dr,o=Zn,l=wn,c=an.DEFAULT_ANISOTROPY,f=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=Fi(),this.name="",this.source=new sp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ru).x}get height(){return this.source.getSize(Ru).y}get depth(){return this.source.getSize(Ru).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ve(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uf:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uf:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=zv;an.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(p+1)/2,A=(u+1)/2,C=(f+d)/4,b=(h+x)/4,y=(_+m)/4;return v>M&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=b/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=y/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=b/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(h-x)/g,this.z=(d-f)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k1 extends aa{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new an(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new sp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends k1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class qv extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class B1 extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yt{constructor(e,n,i,r,s,a,o,l,c,f,h,d,p,_,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,p,_,x,m)}set(e,n,i,r,s,a,o,l,c,f,h,d,p,_,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=_,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,p=a*h,_=o*f,x=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=d-x*c,n[9]=-o*l,n[2]=x-d*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,_=c*f,x=c*h;n[0]=d+x*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=p*o-_,n[6]=x+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,_=c*f,x=c*h;n[0]=d-x*o,n[4]=-a*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*f,n[9]=x-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,p=a*h,_=o*f,x=o*h;n[0]=l*f,n[4]=_*c-p,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*f,n[4]=x-d*h,n[8]=_*h+p,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*h+_,n[10]=d-x*h}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+x,n[5]=a*f,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z1,e,V1)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ji.crossVectors(i,Sn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ji.crossVectors(i,Sn)),Ji.normalize(),$o.crossVectors(Sn,Ji),r[0]=Ji.x,r[4]=$o.x,r[8]=Sn.x,r[1]=Ji.y,r[5]=$o.y,r[9]=Sn.y,r[2]=Ji.z,r[6]=$o.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],u=i[14],g=i[3],v=i[7],M=i[11],A=i[15],C=r[0],b=r[4],y=r[8],T=r[12],U=r[1],P=r[5],z=r[9],W=r[13],q=r[2],V=r[6],N=r[10],O=r[14],G=r[3],Y=r[7],ne=r[11],oe=r[15];return s[0]=a*C+o*U+l*q+c*G,s[4]=a*b+o*P+l*V+c*Y,s[8]=a*y+o*z+l*N+c*ne,s[12]=a*T+o*W+l*O+c*oe,s[1]=f*C+h*U+d*q+p*G,s[5]=f*b+h*P+d*V+p*Y,s[9]=f*y+h*z+d*N+p*ne,s[13]=f*T+h*W+d*O+p*oe,s[2]=_*C+x*U+m*q+u*G,s[6]=_*b+x*P+m*V+u*Y,s[10]=_*y+x*z+m*N+u*ne,s[14]=_*T+x*W+m*O+u*oe,s[3]=g*C+v*U+M*q+A*G,s[7]=g*b+v*P+M*V+A*Y,s[11]=g*y+v*z+M*N+A*ne,s[15]=g*T+v*W+M*O+A*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],u=e[15],g=l*p-c*d,v=o*p-c*h,M=o*d-l*h,A=a*p-c*f,C=a*d-l*f,b=a*h-o*f;return n*(x*g-m*v+u*M)-i*(_*g-m*A+u*C)+r*(_*v-x*A+u*b)-s*(_*M-x*C+m*b)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],u=e[15],g=n*o-i*a,v=n*l-r*a,M=n*c-s*a,A=i*l-r*o,C=i*c-s*o,b=r*c-s*l,y=f*x-h*_,T=f*m-d*_,U=f*u-p*_,P=h*m-d*x,z=h*u-p*x,W=d*u-p*m,q=g*W-v*z+M*P+A*U-C*T+b*y;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/q;return e[0]=(o*W-l*z+c*P)*V,e[1]=(r*z-i*W-s*P)*V,e[2]=(x*b-m*C+u*A)*V,e[3]=(d*C-h*b-p*A)*V,e[4]=(l*U-a*W-c*T)*V,e[5]=(n*W-r*U+s*T)*V,e[6]=(m*M-_*b-u*v)*V,e[7]=(f*b-d*M+p*v)*V,e[8]=(a*z-o*U+c*y)*V,e[9]=(i*U-n*z-s*y)*V,e[10]=(_*C-x*M+u*g)*V,e[11]=(h*M-f*C-p*g)*V,e[12]=(o*T-a*P-l*y)*V,e[13]=(n*P-i*T+r*y)*V,e[14]=(x*v-_*A-m*g)*V,e[15]=(f*A-h*v+d*g)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,p=s*f,_=s*h,x=a*f,m=a*h,u=o*h,g=l*c,v=l*f,M=l*h,A=i.x,C=i.y,b=i.z;return r[0]=(1-(x+u))*A,r[1]=(p+M)*A,r[2]=(_-v)*A,r[3]=0,r[4]=(p-M)*C,r[5]=(1-(d+u))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(_+v)*b,r[9]=(m-g)*b,r[10]=(1-(d+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),l=ss.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Wn.copy(this);const c=1/a,f=1/o,h=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=f,Wn.elements[5]*=f,Wn.elements[6]*=f,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,n.setFromRotationMatrix(Wn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=di,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let _,x;if(l)_=s/(a-s),x=a*s/(a-s);else if(o===di)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ho)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,x;if(l)_=1/(a-s),x=a/(a-s);else if(o===di)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===ho)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ss=new j,Wn=new yt,z1=new j(0,0,0),V1=new j(1,1,1),Ji=new j,$o=new j,Sn=new j,Qm=new yt,eg=new oa;class ji{constructor(e=0,n=0,i=0,r=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return eg.setFromEuler(this),this.setFromQuaternion(eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H1=0;const tg=new j,as=new oa,Ei=new yt,Yo=new j,xa=new j,G1=new j,W1=new oa,ng=new j(1,0,0),ig=new j(0,1,0),rg=new j(0,0,1),sg={type:"added"},j1={type:"removed"},os={type:"childadded",child:null},Pu={type:"childremoved",child:null};class jt extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new j,n=new ji,i=new oa,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new $e}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,n){return tg.copy(e).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Yo.copy(e):Yo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(xa,Yo,this.up):Ei.lookAt(Yo,xa,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),as.setFromRotationMatrix(Ei),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sg),os.child=e,this.dispatchEvent(os),os.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(j1),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sg),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,G1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,W1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new j(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qo extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X1={type:"move"};class Lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Nu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=rp(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Nu(a,s,e+1/3),this.g=Nu(a,s,e),this.b=Nu(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,n=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tn){const i=Kv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return nt.workingToColorSpace(nn.copy(this),e),Math.round(Qe(nn.r*255,0,255))*65536+Math.round(Qe(nn.g*255,0,255))*256+Math.round(Qe(nn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=nt.workingColorSpace){return nt.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Tn){nt.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+n,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qi),e.getHSL(Ko);const i=ja(Qi.h,Ko.h,n),r=ja(Qi.s,Ko.s,n),s=ja(Qi.l,Ko.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new et;et.NAMES=Kv;class op{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=n,this.far=i}clone(){return new op(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let $1=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};const jn=new j,Ti=new j,Du=new j,wi=new j,ls=new j,cs=new j,ag=new j,Iu=new j,Uu=new j,Fu=new j,Ou=new Pt,ku=new Pt,Bu=new Pt;class Un{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),Ti.subVectors(i,n),Du.subVectors(e,n);const a=jn.dot(jn),o=jn.dot(Ti),l=jn.dot(Du),c=Ti.dot(Ti),f=Ti.dot(Du),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*f)*d,_=(a*f-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Ou.setScalar(0),ku.setScalar(0),Bu.setScalar(0),Ou.fromBufferAttribute(e,n),ku.fromBufferAttribute(e,i),Bu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ou,s.x),a.addScaledVector(ku,s.y),a.addScaledVector(Bu,s.z),a}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),Ti.subVectors(e,n),jn.cross(Ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),jn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ls.subVectors(r,i),cs.subVectors(s,i),Iu.subVectors(e,i);const l=ls.dot(Iu),c=cs.dot(Iu);if(l<=0&&c<=0)return n.copy(i);Uu.subVectors(e,r);const f=ls.dot(Uu),h=cs.dot(Uu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(ls,a);Fu.subVectors(e,s);const p=ls.dot(Fu),_=cs.dot(Fu);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(cs,o);const m=f*_-p*h;if(m<=0&&h-f>=0&&p-_>=0)return ag.subVectors(s,r),o=(h-f)/(h-f+(p-_)),n.copy(r).addScaledVector(ag,o);const u=1/(m+x+d);return a=x*u,o=d*u,n.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class To{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zo.copy(i.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),Jo.subVectors(this.max,ya),us.subVectors(e.a,ya),ds.subVectors(e.b,ya),fs.subVectors(e.c,ya),er.subVectors(ds,us),tr.subVectors(fs,ds),Rr.subVectors(us,fs);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Rr.z,Rr.y,er.z,0,-er.x,tr.z,0,-tr.x,Rr.z,0,-Rr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Rr.y,Rr.x,0];return!zu(n,us,ds,fs,Jo)||(n=[1,0,0,0,1,0,0,0,1],!zu(n,us,ds,fs,Jo))?!1:(Qo.crossVectors(er,tr),n=[Qo.x,Qo.y,Qo.z],zu(n,us,ds,fs,Jo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new j,new j,new j,new j,new j,new j,new j,new j],Xn=new j,Zo=new To,us=new j,ds=new j,fs=new j,er=new j,tr=new j,Rr=new j,ya=new j,Jo=new j,Qo=new j,Pr=new j;function zu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Pr.fromArray(t,s);const o=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=n.dot(Pr),f=i.dot(Pr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const It=new j,el=new Ze;let Y1=0;class ei{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wf,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Kn(n,this.array)),n}setX(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Kn(n,this.array)),n}setY(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Kn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Kn(n,this.array)),n}setW(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wf&&(e.usage=this.usage),e}}class Zv extends ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jv extends ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _i extends ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}const q1=new To,Sa=new j,Vu=new j;class Hc{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):q1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const n=Sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Vu)),this.expandByPoint(Sa.copy(e.center).sub(Vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let K1=0;const Ln=new yt,Hu=new jt,hs=new j,Mn=new To,Ma=new To,Vt=new j;class Vn extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h1(e)?Jv:Zv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _i(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new To);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ma.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(Mn.min,Ma.min),Mn.expandByPoint(Vt),Vt.addVectors(Mn.max,Ma.max),Mn.expandByPoint(Vt)):(Mn.expandByPoint(Ma.min),Mn.expandByPoint(Ma.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Vt.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(e,c),Vt.add(hs)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new j,l[y]=new j;const c=new j,f=new j,h=new j,d=new Ze,p=new Ze,_=new Ze,x=new j,m=new j;function u(y,T,U){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,U),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,U),f.sub(c),h.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(P),o[y].add(x),o[T].add(x),o[U].add(x),l[y].add(m),l[T].add(m),l[U].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,T=g.length;y<T;++y){const U=g[y],P=U.start,z=U.count;for(let W=P,q=P+z;W<q;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new j,M=new j,A=new j,C=new j;function b(y){A.fromBufferAttribute(r,y),C.copy(A);const T=o[y];v.copy(T),v.sub(A.multiplyScalar(A.dot(T))).normalize(),M.crossVectors(C,T);const P=M.dot(l[y])<0?-1:1;a.setXYZW(y,v.x,v.y,v.z,P)}for(let y=0,T=g.length;y<T;++y){const U=g[y],P=U.start,z=U.count;for(let W=P,q=P+z;W<q;W+=3)b(e.getX(W+0)),b(e.getX(W+1)),b(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,f=new j,h=new j;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*f;for(let u=0;u<f;u++)d[_++]=c[p++]}return new ei(d,f,h)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z1{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Wf,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new j;class xc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Kn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Kn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Kn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Kn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){_c("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new ei(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_c("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let J1=0;class la extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=zs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=tf,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ve(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ef&&(i.blendSrc=this.blendSrc),this.blendDst!==tf&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qv extends la{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ps;const Ea=new j,ms=new j,gs=new j,_s=new Ze,Ta=new Ze,ex=new yt,tl=new j,wa=new j,nl=new j,og=new Ze,Gu=new Ze,lg=new Ze;class Q1 extends jt{constructor(e=new Qv){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Vn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Z1(n,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new xc(i,3,0,!1)),ps.setAttribute("uv",new xc(i,2,3,!1))}this.geometry=ps,this.material=e,this.center=new Ze(.5,.5),this.count=1}raycast(e,n){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),ex.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;il(tl.set(-.5,-.5,0),gs,a,ms,r,s),il(wa.set(.5,-.5,0),gs,a,ms,r,s),il(nl.set(.5,.5,0),gs,a,ms,r,s),og.set(0,0),Gu.set(1,0),lg.set(1,1);let o=e.ray.intersectTriangle(tl,wa,nl,!1,Ea);if(o===null&&(il(wa.set(-.5,.5,0),gs,a,ms,r,s),Gu.set(0,1),o=e.ray.intersectTriangle(tl,nl,wa,!1,Ea),o===null))return;const l=e.ray.origin.distanceTo(Ea);l<e.near||l>e.far||n.push({distance:l,point:Ea.clone(),uv:Un.getInterpolation(Ea,tl,wa,nl,og,Gu,lg,new Ze),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function il(t,e,n,i,r,s){_s.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ta.x=s*_s.x-r*_s.y,Ta.y=r*_s.x+s*_s.y):Ta.copy(_s),t.copy(e),t.x+=Ta.x,t.y+=Ta.y,t.applyMatrix4(ex)}const Ci=new j,Wu=new j,rl=new j,nr=new j,ju=new j,sl=new j,Xu=new j;class lp{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wu.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(Wu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(rl),o=nr.dot(this.direction),l=-nr.dot(rl),c=nr.lengthSq(),f=Math.abs(1-a*a);let h,d,p,_;if(f>0)if(h=a*l-o,d=a*o-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const x=1/f;h*=x,d*=x,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wu).addScaledVector(rl,d),p}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){ju.subVectors(n,e),sl.subVectors(i,e),Xu.crossVectors(ju,sl);let a=this.direction.dot(Xu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nr.subVectors(this.origin,e);const l=o*this.direction.dot(sl.crossVectors(nr,sl));if(l<0)return null;const c=o*this.direction.dot(ju.cross(nr));if(c<0||l+c>a)return null;const f=-o*nr.dot(Xu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tx extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cg=new yt,Lr=new lp,al=new Hc,ug=new j,ol=new j,ll=new j,cl=new j,$u=new j,ul=new j,dg=new j,dl=new j;class Xi extends jt{constructor(e=new Vn,n=new tx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&($u.fromBufferAttribute(h,e),a?ul.addScaledVector($u,f):ul.addScaledVector($u.sub(n),f))}n.add(ul)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(al.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(al,ug)===null||Lr.origin.distanceToSquared(ug)>(e.far-e.near)**2))&&(cg.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(cg),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],u=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,A=v;M<A;M+=3){const C=o.getX(M),b=o.getX(M+1),y=o.getX(M+2);r=fl(this,u,e,i,c,f,h,C,b,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const g=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);r=fl(this,a,e,i,c,f,h,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],u=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,A=v;M<A;M+=3){const C=M,b=M+1,y=M+2;r=fl(this,u,e,i,c,f,h,C,b,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const g=m,v=m+1,M=m+2;r=fl(this,a,e,i,c,f,h,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function eT(t,e,n,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Er,o),l===null)return null;dl.copy(o),dl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(dl);return c<n.near||c>n.far?null:{distance:c,point:dl.clone(),object:t}}function fl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ol),t.getVertexPosition(l,ll),t.getVertexPosition(c,cl);const f=eT(t,e,n,i,ol,ll,cl,dg);if(f){const h=new j;Un.getBarycoord(dg,ol,ll,cl,h),r&&(f.uv=Un.getInterpolatedAttribute(r,o,l,c,h,new Ze)),s&&(f.uv1=Un.getInterpolatedAttribute(s,o,l,c,h,new Ze)),a&&(f.normal=Un.getInterpolatedAttribute(a,o,l,c,h,new j),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new j,materialIndex:0};Un.getNormal(ol,ll,cl,d.normal),f.face=d,f.barycoord=h}return f}class tT extends an{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Yt,f=Yt,h,d){super(null,a,o,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yu=new j,nT=new j,iT=new $e;class Or{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yu.subVectors(i,n).cross(nT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iT.getNormalMatrix(e),r=this.coplanarPoint(Yu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Hc,rT=new Ze(.5,.5),hl=new j;class cp{constructor(e=new Or,n=new Or,i=new Or,r=new Or,s=new Or,a=new Or){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],p=s[7],_=s[8],x=s[9],m=s[10],u=s[11],g=s[12],v=s[13],M=s[14],A=s[15];if(r[0].setComponents(c-a,p-f,u-_,A-g).normalize(),r[1].setComponents(c+a,p+f,u+_,A+g).normalize(),r[2].setComponents(c+o,p+h,u+x,A+v).normalize(),r[3].setComponents(c-o,p-h,u-x,A-v).normalize(),i)r[4].setComponents(l,d,m,M).normalize(),r[5].setComponents(c-l,p-d,u-m,A-M).normalize();else if(r[4].setComponents(c-l,p-d,u-m,A-M).normalize(),n===di)r[5].setComponents(c+l,p+d,u+m,A+M).normalize();else if(n===ho)r[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const n=rT.distanceTo(e.center);return Nr.radius=.7071067811865476+n,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(hl.x=r.normal.x>0?e.max.x:e.min.x,hl.y=r.normal.y>0?e.max.y:e.min.y,hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class up extends la{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yc=new j,Sc=new j,fg=new yt,Aa=new lp,pl=new Hc,qu=new j,hg=new j;class sT extends jt{constructor(e=new Vn,n=new up){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)yc.fromBufferAttribute(n,r-1),Sc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=yc.distanceTo(Sc);e.setAttribute("lineDistance",new _i(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;fg.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(fg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=c){const u=f.getX(x),g=f.getX(x+1),v=ml(this,e,Aa,l,u,g,x);v&&n.push(v)}if(this.isLineLoop){const x=f.getX(_-1),m=f.getX(p),u=ml(this,e,Aa,l,x,m,_-1);u&&n.push(u)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=c){const u=ml(this,e,Aa,l,x,x+1,x);u&&n.push(u)}if(this.isLineLoop){const x=ml(this,e,Aa,l,_-1,p,_-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ml(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(yc.fromBufferAttribute(o,r),Sc.fromBufferAttribute(o,s),n.distanceSqToSegment(yc,Sc,qu,hg)>i)return;qu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(qu);if(!(c<e.near||c>e.far))return{distance:c,point:hg.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class nx extends an{constructor(e=[],n=Zr,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aT extends an{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mo extends an{constructor(e,n,i=vi,r,s,a,o=Yt,l=Yt,c,f=Wi,h=1){if(f!==Wi&&f!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class oT extends mo{constructor(e,n=vi,i=Zr,r,s,a=Yt,o=Yt,l,c=Wi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ix extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wo extends Vn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _i(c,3)),this.setAttribute("normal",new _i(f,3)),this.setAttribute("uv",new _i(h,2));function _(x,m,u,g,v,M,A,C,b,y,T){const U=M/b,P=A/y,z=M/2,W=A/2,q=C/2,V=b+1,N=y+1;let O=0,G=0;const Y=new j;for(let ne=0;ne<N;ne++){const oe=ne*P-W;for(let k=0;k<V;k++){const Z=k*U-z;Y[x]=Z*g,Y[m]=oe*v,Y[u]=q,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[u]=C>0?1:-1,f.push(Y.x,Y.y,Y.z),h.push(k/b),h.push(1-ne/y),O+=1}}for(let ne=0;ne<y;ne++)for(let oe=0;oe<b;oe++){const k=d+oe+V*ne,Z=d+oe+V*(ne+1),pe=d+(oe+1)+V*(ne+1),de=d+(oe+1)+V*ne;l.push(k,Z,de),l.push(Z,pe,de),G+=6}o.addGroup(p,G,T),p+=G,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Gc extends Vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,p=[],_=[],x=[],m=[];for(let u=0;u<f;u++){const g=u*d-a;for(let v=0;v<c;v++){const M=v*h-s;_.push(M,-g,0),x.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,M=g+c*(u+1),A=g+1+c*(u+1),C=g+1+c*u;p.push(v,M,C),p.push(M,A,C)}this.setIndex(p),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(x,3)),this.setAttribute("uv",new _i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.width,e.height,e.widthSegments,e.heightSegments)}}function ea(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=ea(t[n]);for(const r in i)e[r]=i[r]}return e}function lT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const cT={clone:ea,merge:cn};var uT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uT,this.fragmentShader=dT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=lT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class fT extends xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hT extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pT extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mT extends up{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class sx extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ku=new yt,pg=new j,mg=new j;class gT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cp,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;pg.setFromMatrixPosition(e.matrixWorld),n.position.copy(pg),mg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mg),n.updateMatrixWorld(),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ho||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gl=new j,_l=new oa,si=new j;class ax extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gl,_l,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gl,_l,si.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(gl,_l,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gl,_l,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ir=new j,gg=new Ze,_g=new Ze;class In extends ax{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,n){return this.getViewBounds(e,gg,_g),n.subVectors(_g,gg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class dp extends ax{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class _T extends gT{constructor(){super(new dp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vT extends sx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new _T}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class xT extends sx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const vs=-90,xs=1;class yT extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(vs,xs,e,n);r.layers=this.layers,this.add(r);const s=new In(vs,xs,e,n);s.layers=this.layers,this.add(s);const a=new In(vs,xs,e,n);a.layers=this.layers,this.add(a);const o=new In(vs,xs,e,n);o.layers=this.layers,this.add(o);const l=new In(vs,xs,e,n);l.layers=this.layers,this.add(l);const c=new In(vs,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ST extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vg=new yt;class MT{constructor(e,n,i=0,r=1/0){this.ray=new lp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ap,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):tt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return vg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vg),this}intersectObject(e,n=!0,i=[]){return jf(e,this,i,n),i.sort(xg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)jf(e[r],this,i,n);return i.sort(xg),i}}function xg(t,e){return t.distance-e.distance}function jf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)jf(s[a],e,n,!0)}}function yg(t,e,n,i){const r=ET(i);switch(n){case jv:return t*e;case $v:return t*e/r.components*r.byteLength;case Qh:return t*e/r.components*r.byteLength;case Js:return t*e*2/r.components*r.byteLength;case ep:return t*e*2/r.components*r.byteLength;case Xv:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case tp:return t*e*4/r.components*r.byteLength;case Fl:case Ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kl:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hf:case mf:return Math.max(t,16)*Math.max(e,8)/4;case ff:case pf:return Math.max(t,8)*Math.max(e,8)/2;case gf:case _f:case xf:case yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vf:case Sf:case Mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Af:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case If:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Of:case kf:case Bf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zf:case Vf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hf:case Gf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ET(t){switch(t){case wn:case Vv:return{byteLength:1,components:1};case uo:case Hv:case Gi:return{byteLength:2,components:1};case Zh:case Jh:return{byteLength:2,components:4};case vi:case Kh:case ui:return{byteLength:4,components:1};case Gv:case Wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ox(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function TT(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var wT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AT=`#ifdef USE_ALPHAHASH
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
#endif`,CT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LT=`#ifdef USE_AOMAP
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
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DT=`#ifdef USE_BATCHING
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
#endif`,IT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kT=`#ifdef USE_IRIDESCENCE
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
#endif`,BT=`#ifdef USE_BUMPMAP
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
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,XT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,YT=`#define PI 3.141592653589793
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
} // validated`,qT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KT=`vec3 transformedNormal = objectNormal;
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
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ew=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tw="gl_FragColor = linearToOutputTexel( gl_FragColor );",nw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iw=`#ifdef USE_ENVMAP
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
#endif`,rw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
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
#endif`,aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
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
#endif`,lw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fw=`#ifdef USE_GRADIENTMAP
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
}`,hw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gw=`uniform bool receiveShadow;
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
#endif`,_w=`#ifdef USE_ENVMAP
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
#endif`,vw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mw=`PhysicalMaterial material;
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
#endif`,Ew=`uniform sampler2D dfgLUT;
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
}`,Tw=`
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
#endif`,ww=`#if defined( RE_IndirectDiffuse )
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
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iw=`#if defined( USE_POINTS_UV )
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
#endif`,Uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ow=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zw=`#ifdef USE_MORPHTARGETS
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
#endif`,Vw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$w=`#ifdef USE_NORMALMAP
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
#endif`,Yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cA=`float getShadowMask() {
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
}`,uA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dA=`#ifdef USE_SKINNING
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
#endif`,fA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hA=`#ifdef USE_SKINNING
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
#endif`,pA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_A=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vA=`#ifdef USE_TRANSMISSION
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
#endif`,xA=`#ifdef USE_TRANSMISSION
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
#endif`,yA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wA=`uniform sampler2D t2D;
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
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`#include <common>
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
}`,LA=`#if DEPTH_PACKING == 3200
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
}`,NA=`#define DISTANCE
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
}`,DA=`#define DISTANCE
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
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`uniform float scale;
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
}`,OA=`uniform vec3 diffuse;
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
}`,kA=`#include <common>
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
}`,BA=`uniform vec3 diffuse;
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
}`,zA=`#define LAMBERT
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
}`,VA=`#define LAMBERT
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
}`,HA=`#define MATCAP
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
}`,GA=`#define MATCAP
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
}`,WA=`#define NORMAL
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
}`,jA=`#define NORMAL
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
}`,XA=`#define PHONG
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
}`,$A=`#define PHONG
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
}`,YA=`#define STANDARD
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
}`,qA=`#define STANDARD
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
}`,KA=`#define TOON
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
}`,ZA=`#define TOON
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
}`,JA=`uniform float size;
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
}`,QA=`uniform vec3 diffuse;
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
}`,eC=`#include <common>
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
}`,tC=`uniform vec3 color;
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
}`,nC=`uniform float rotation;
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
}`,iC=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:wT,alphahash_pars_fragment:AT,alphamap_fragment:CT,alphamap_pars_fragment:bT,alphatest_fragment:RT,alphatest_pars_fragment:PT,aomap_fragment:LT,aomap_pars_fragment:NT,batching_pars_vertex:DT,batching_vertex:IT,begin_vertex:UT,beginnormal_vertex:FT,bsdfs:OT,iridescence_fragment:kT,bumpmap_pars_fragment:BT,clipping_planes_fragment:zT,clipping_planes_pars_fragment:VT,clipping_planes_pars_vertex:HT,clipping_planes_vertex:GT,color_fragment:WT,color_pars_fragment:jT,color_pars_vertex:XT,color_vertex:$T,common:YT,cube_uv_reflection_fragment:qT,defaultnormal_vertex:KT,displacementmap_pars_vertex:ZT,displacementmap_vertex:JT,emissivemap_fragment:QT,emissivemap_pars_fragment:ew,colorspace_fragment:tw,colorspace_pars_fragment:nw,envmap_fragment:iw,envmap_common_pars_fragment:rw,envmap_pars_fragment:sw,envmap_pars_vertex:aw,envmap_physical_pars_fragment:_w,envmap_vertex:ow,fog_vertex:lw,fog_pars_vertex:cw,fog_fragment:uw,fog_pars_fragment:dw,gradientmap_pars_fragment:fw,lightmap_pars_fragment:hw,lights_lambert_fragment:pw,lights_lambert_pars_fragment:mw,lights_pars_begin:gw,lights_toon_fragment:vw,lights_toon_pars_fragment:xw,lights_phong_fragment:yw,lights_phong_pars_fragment:Sw,lights_physical_fragment:Mw,lights_physical_pars_fragment:Ew,lights_fragment_begin:Tw,lights_fragment_maps:ww,lights_fragment_end:Aw,logdepthbuf_fragment:Cw,logdepthbuf_pars_fragment:bw,logdepthbuf_pars_vertex:Rw,logdepthbuf_vertex:Pw,map_fragment:Lw,map_pars_fragment:Nw,map_particle_fragment:Dw,map_particle_pars_fragment:Iw,metalnessmap_fragment:Uw,metalnessmap_pars_fragment:Fw,morphinstance_vertex:Ow,morphcolor_vertex:kw,morphnormal_vertex:Bw,morphtarget_pars_vertex:zw,morphtarget_vertex:Vw,normal_fragment_begin:Hw,normal_fragment_maps:Gw,normal_pars_fragment:Ww,normal_pars_vertex:jw,normal_vertex:Xw,normalmap_pars_fragment:$w,clearcoat_normal_fragment_begin:Yw,clearcoat_normal_fragment_maps:qw,clearcoat_pars_fragment:Kw,iridescence_pars_fragment:Zw,opaque_fragment:Jw,packing:Qw,premultiplied_alpha_fragment:eA,project_vertex:tA,dithering_fragment:nA,dithering_pars_fragment:iA,roughnessmap_fragment:rA,roughnessmap_pars_fragment:sA,shadowmap_pars_fragment:aA,shadowmap_pars_vertex:oA,shadowmap_vertex:lA,shadowmask_pars_fragment:cA,skinbase_vertex:uA,skinning_pars_vertex:dA,skinning_vertex:fA,skinnormal_vertex:hA,specularmap_fragment:pA,specularmap_pars_fragment:mA,tonemapping_fragment:gA,tonemapping_pars_fragment:_A,transmission_fragment:vA,transmission_pars_fragment:xA,uv_pars_fragment:yA,uv_pars_vertex:SA,uv_vertex:MA,worldpos_vertex:EA,background_vert:TA,background_frag:wA,backgroundCube_vert:AA,backgroundCube_frag:CA,cube_vert:bA,cube_frag:RA,depth_vert:PA,depth_frag:LA,distance_vert:NA,distance_frag:DA,equirect_vert:IA,equirect_frag:UA,linedashed_vert:FA,linedashed_frag:OA,meshbasic_vert:kA,meshbasic_frag:BA,meshlambert_vert:zA,meshlambert_frag:VA,meshmatcap_vert:HA,meshmatcap_frag:GA,meshnormal_vert:WA,meshnormal_frag:jA,meshphong_vert:XA,meshphong_frag:$A,meshphysical_vert:YA,meshphysical_frag:qA,meshtoon_vert:KA,meshtoon_frag:ZA,points_vert:JA,points_frag:QA,shadow_vert:eC,shadow_frag:tC,sprite_vert:nC,sprite_frag:iC},_e={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},li={basic:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:cn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:cn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:cn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:cn([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:cn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:cn([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:cn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:cn([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:cn([_e.common,_e.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:cn([_e.lights,_e.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};li.physical={uniforms:cn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const vl={r:0,b:0,g:0},Dr=new ji,rC=new yt;function sC(t,e,n,i,r,s){const a=new et(0);let o=r===!0?0:1,l,c,f=null,h=0,d=null;function p(g){let v=g.isScene===!0?g.background:null;if(v&&v.isTexture){const M=g.backgroundBlurriness>0;v=e.get(v,M)}return v}function _(g){let v=!1;const M=p(g);M===null?m(a,o):M&&M.isColor&&(m(M,1),v=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(g,v){const M=p(v);M&&(M.isCubeTexture||M.mapping===Vc)?(c===void 0&&(c=new Xi(new wo(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:ea(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Dr.copy(v.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rC.makeRotationFromEuler(Dr)),c.material.toneMapped=nt.getTransfer(M.colorSpace)!==lt,(f!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Xi(new Gc(2,2),new xi({name:"BackgroundMaterial",uniforms:ea(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=nt.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,v){g.getRGB(vl,rx(t)),n.buffers.color.setClear(vl.r,vl.g,vl.b,v,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:_,addToRenderList:x,dispose:u}}function aC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(P,z,W,q,V){let N=!1;const O=h(P,q,W,z);s!==O&&(s=O,c(s.object)),N=p(P,q,W,V),N&&_(P,q,W,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,M(P,z,W,q),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function f(P){return t.deleteVertexArray(P)}function h(P,z,W,q){const V=q.wireframe===!0;let N=i[z.id];N===void 0&&(N={},i[z.id]=N);const O=P.isInstancedMesh===!0?P.id:0;let G=N[O];G===void 0&&(G={},N[O]=G);let Y=G[W.id];Y===void 0&&(Y={},G[W.id]=Y);let ne=Y[V];return ne===void 0&&(ne=d(l()),Y[V]=ne),ne}function d(P){const z=[],W=[],q=[];for(let V=0;V<n;V++)z[V]=0,W[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,z,W,q){const V=s.attributes,N=z.attributes;let O=0;const G=W.getAttributes();for(const Y in G)if(G[Y].location>=0){const oe=V[Y];let k=N[Y];if(k===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),oe===void 0||oe.attribute!==k||k&&oe.data!==k.data)return!0;O++}return s.attributesNum!==O||s.index!==q}function _(P,z,W,q){const V={},N=z.attributes;let O=0;const G=W.getAttributes();for(const Y in G)if(G[Y].location>=0){let oe=N[Y];oe===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));const k={};k.attribute=oe,oe&&oe.data&&(k.data=oe.data),V[Y]=k,O++}s.attributes=V,s.attributesNum=O,s.index=q}function x(){const P=s.newAttributes;for(let z=0,W=P.length;z<W;z++)P[z]=0}function m(P){u(P,0)}function u(P,z){const W=s.newAttributes,q=s.enabledAttributes,V=s.attributeDivisors;W[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),V[P]!==z&&(t.vertexAttribDivisor(P,z),V[P]=z)}function g(){const P=s.newAttributes,z=s.enabledAttributes;for(let W=0,q=z.length;W<q;W++)z[W]!==P[W]&&(t.disableVertexAttribArray(W),z[W]=0)}function v(P,z,W,q,V,N,O){O===!0?t.vertexAttribIPointer(P,z,W,V,N):t.vertexAttribPointer(P,z,W,q,V,N)}function M(P,z,W,q){x();const V=q.attributes,N=W.getAttributes(),O=z.defaultAttributeValues;for(const G in N){const Y=N[G];if(Y.location>=0){let ne=V[G];if(ne===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){const oe=ne.normalized,k=ne.itemSize,Z=e.get(ne);if(Z===void 0)continue;const pe=Z.buffer,de=Z.type,H=Z.bytesPerElement,ie=de===t.INT||de===t.UNSIGNED_INT||ne.gpuType===Kh;if(ne.isInterleavedBufferAttribute){const ee=ne.data,Me=ee.stride,xe=ne.offset;if(ee.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Y.locationSize;Ae++)u(Y.location+Ae,ee.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ae=0;Ae<Y.locationSize;Ae++)m(Y.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Ae=0;Ae<Y.locationSize;Ae++)v(Y.location+Ae,k/Y.locationSize,de,oe,Me*H,(xe+k/Y.locationSize*Ae)*H,ie)}else{if(ne.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)u(Y.location+ee,ne.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ee=0;ee<Y.locationSize;ee++)m(Y.location+ee);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let ee=0;ee<Y.locationSize;ee++)v(Y.location+ee,k/Y.locationSize,de,oe,k*H,k/Y.locationSize*ee*H,ie)}}else if(O!==void 0){const oe=O[G];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(Y.location,oe);break;case 3:t.vertexAttrib3fv(Y.location,oe);break;case 4:t.vertexAttrib4fv(Y.location,oe);break;default:t.vertexAttrib1fv(Y.location,oe)}}}}g()}function A(){T();for(const P in i){const z=i[P];for(const W in z){const q=z[W];for(const V in q){const N=q[V];for(const O in N)f(N[O].object),delete N[O];delete q[V]}}delete i[P]}}function C(P){if(i[P.id]===void 0)return;const z=i[P.id];for(const W in z){const q=z[W];for(const V in q){const N=q[V];for(const O in N)f(N[O].object),delete N[O];delete q[V]}}delete i[P.id]}function b(P){for(const z in i){const W=i[z];for(const q in W){const V=W[q];if(V[P.id]===void 0)continue;const N=V[P.id];for(const O in N)f(N[O].object),delete N[O];delete V[P.id]}}}function y(P){for(const z in i){const W=i[z],q=P.isInstancedMesh===!0?P.id:0,V=W[q];if(V!==void 0){for(const N in V){const O=V[N];for(const G in O)f(O[G].object),delete O[G];delete V[N]}delete W[q],Object.keys(W).length===0&&delete i[z]}}}function T(){U(),a=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function oC(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function o(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=f[_];n.update(p,i,1)}function l(c,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],f[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=f[x]*d[x];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function lC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Zn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const y=b===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==wn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ui&&!y)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ve("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:M,maxSamples:A,samples:C}}function cC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Or,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const g=s?0:i,v=g*4;let M=u.clippingState||null;l.value=M,M=f(_,d,v,p);for(let A=0;A!==v;++A)M[A]=n[A];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const u=p+x*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,M=p;v!==x;++v,M+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const fr=4,Sg=[.125,.215,.35,.446,.526,.582],Br=20,uC=256,Ca=new dp,Mg=new et;let Zu=null,Ju=0,Qu=0,ed=!1;const dC=new j;class Eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=dC}=s;Zu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,Ju,Qu),this._renderer.xr.enabled=ed,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zr||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),Ju=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Gi,format:Zn,colorSpace:Qs,depthBuffer:!1},r=Tg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fC(s)),this._blurMaterial=pC(s,e,n),this._ggxMaterial=hC(s,e,n)}return r}_compileMaterial(e){const n=new Xi(new Vn,e);this._renderer.compile(n,Ca)}_sceneToCubeUV(e,n,i,r,s){const l=new In(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Mg),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xi(new wo,new tx({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let u=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,u=!0):(m.color.copy(Mg),u=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[v]));const A=this._cubeSize;ys(r,M*A,v>2?A:0,A,A),h.setRenderTarget(r),u&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Zr||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ys(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ca)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,p=h*d,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-fr?i-_+fr:0),u=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,ys(s,m,u,3*x,2*x),r.setRenderTarget(s),r.render(o,Ca),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ys(e,m,u,3*x,2*x),r.setRenderTarget(e),r.render(o,Ca)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Br-1),x=s/_,m=isFinite(s)?1+Math.floor(f*x):Br;m>Br&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const u=[];let g=0;for(let b=0;b<Br;++b){const y=b/x,T=Math.exp(-y*y/2);u.push(T),b===0?g+=T:b<m&&(g+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const M=this._sizeLods[r],A=3*M*(r>v-fr?r-v+fr:0),C=4*(this._cubeSize-M);ys(n,A,C,3*M,2*M),l.setRenderTarget(n),l.render(h,Ca)}}function fC(t){const e=[],n=[],i=[];let r=t;const s=t-fr+1+Sg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-fr?l=Sg[a-t+fr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,_=6,x=3,m=2,u=1,g=new Float32Array(x*_*p),v=new Float32Array(m*_*p),M=new Float32Array(u*_*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,y=C>2?0:-1,T=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];g.set(T,x*_*C),v.set(d,m*_*C);const U=[C,C,C,C,C,C];M.set(U,u*_*C)}const A=new Vn;A.setAttribute("position",new ei(g,x)),A.setAttribute("uv",new ei(v,m)),A.setAttribute("faceIndex",new ei(M,u)),i.push(new Xi(A,null)),r>fr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Tg(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=Vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hC(t,e,n){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function pC(t,e,n){const i=new Float32Array(Br),r=new j(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function wg(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ag(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}class lx extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wo(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Ui});s.uniforms.tEquirect.value=n;const a=new Xi(r,s),o=n.minFilter;return n.minFilter===dr&&(n.minFilter=qt),new yT(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function mC(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===Eu||p===Tu)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const x=new lx(_.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,_=p===Eu||p===Tu,x=p===Zr||p===Zs;if(_||x){let m=n.get(d);const u=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new Eg(t)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const g=d.image;return _&&g&&g.height>0||x&&g&&l(g)?(i===null&&(i=new Eg(t)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function o(d,p){return p===Eu?d.mapping=Zr:p===Tu&&(d.mapping=Zs),d}function l(d){let p=0;const _=6;for(let x=0;x<_;x++)d[x]!==void 0&&p++;return p===_}function c(d){const p=d.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function f(d){const p=d.target;p.removeEventListener("dispose",f);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function gC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&vc("WebGLRenderer: "+i+" extension not supported."),r}}}function _C(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(_===void 0)return;if(p!==null){const g=p.array;x=p.version;for(let v=0,M=g.length;v<M;v+=3){const A=g[v+0],C=g[v+1],b=g[v+2];d.push(A,C,C,b,b,A)}}else{const g=_.array;x=_.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const A=v+0,C=v+1,b=v+2;d.push(A,C,C,b,b,A)}}const m=new(_.count>=65535?Jv:Zv)(d,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function vC(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*a),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*a,_),n.update(p,i,_))}function f(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function h(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/a,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*x[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function xC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function yC(t,e,n){const i=new WeakMap,r=new Pt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let U=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",U)};var p=U;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let A=o.attributes.position.count*M,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*C*4*h),y=new qv(b,A,C,h);y.type=ui,y.needsUpdate=!0;const T=M*4;for(let P=0;P<h;P++){const z=u[P],W=g[P],q=v[P],V=A*C*4*P;for(let N=0;N<z.count;N++){const O=N*T;_===!0&&(r.fromBufferAttribute(z,N),b[V+O+0]=r.x,b[V+O+1]=r.y,b[V+O+2]=r.z,b[V+O+3]=0),x===!0&&(r.fromBufferAttribute(W,N),b[V+O+4]=r.x,b[V+O+5]=r.y,b[V+O+6]=r.z,b[V+O+7]=0),m===!0&&(r.fromBufferAttribute(q,N),b[V+O+8]=r.x,b[V+O+9]=r.y,b[V+O+10]=r.z,b[V+O+11]=q.itemSize===4?r.w:1)}}d={count:h,texture:y,size:new Ze(A,C)},i.set(o,d),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function SC(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const MC={[Dv]:"LINEAR_TONE_MAPPING",[Iv]:"REINHARD_TONE_MAPPING",[Uv]:"CINEON_TONE_MAPPING",[Fv]:"ACES_FILMIC_TONE_MAPPING",[kv]:"AGX_TONE_MAPPING",[Bv]:"NEUTRAL_TONE_MAPPING",[Ov]:"CUSTOM_TONE_MAPPING"};function EC(t,e,n,i,r){const s=new gi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new gi(e,n,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),o=new Vn;o.setAttribute("position",new _i([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _i([0,2,0,0,2,0],2));const l=new fT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Xi(o,l),f=new dp(-1,1,1,-1,0,1);let h=null,d=null,p=!1,_,x=null,m=[],u=!1;this.setSize=function(g,v){s.setSize(g,v),a.setSize(g,v);for(let M=0;M<m.length;M++){const A=m[M];A.setSize&&A.setSize(g,v)}},this.setEffects=function(g){m=g,u=m.length>0&&m[0].isRenderPass===!0;const v=s.width,M=s.height;for(let A=0;A<m.length;A++){const C=m[A];C.setSize&&C.setSize(v,M)}},this.begin=function(g,v){if(p||g.toneMapping===mi&&m.length===0)return!1;if(x=v,v!==null){const M=v.width,A=v.height;(s.width!==M||s.height!==A)&&this.setSize(M,A)}return u===!1&&g.setRenderTarget(s),_=g.toneMapping,g.toneMapping=mi,!0},this.hasRenderPass=function(){return u},this.end=function(g,v){g.toneMapping=_,p=!0;let M=s,A=a;for(let C=0;C<m.length;C++){const b=m[C];if(b.enabled!==!1&&(b.render(g,A,M,v),b.needsSwap!==!1)){const y=M;M=A,A=y}}if(h!==g.outputColorSpace||d!==g.toneMapping){h=g.outputColorSpace,d=g.toneMapping,l.defines={},nt.getTransfer(h)===lt&&(l.defines.SRGB_TRANSFER="");const C=MC[d];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,g.setRenderTarget(x),g.render(c,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const cx=new an,Xf=new mo(1,1),ux=new qv,dx=new B1,fx=new nx,Cg=[],bg=[],Rg=new Float32Array(16),Pg=new Float32Array(9),Lg=new Float32Array(4);function ca(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Cg[r];if(s===void 0&&(s=new Float32Array(r),Cg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jc(t,e){let n=bg[e];n===void 0&&(n=new Int32Array(e),bg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function AC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function CC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function bC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Lg.set(i),t.uniformMatrix2fv(this.addr,!1,Lg),Bt(n,i)}}function RC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Pg.set(i),t.uniformMatrix3fv(this.addr,!1,Pg),Bt(n,i)}}function PC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Rg.set(i),t.uniformMatrix4fv(this.addr,!1,Rg),Bt(n,i)}}function LC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function DC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function UC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function FC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function kC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function BC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Xf.compareFunction=n.isReversedDepthBuffer()?ip:np,s=Xf):s=cx,n.setTexture2D(e||s,r)}function zC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dx,r)}function VC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||fx,r)}function HC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ux,r)}function GC(t){switch(t){case 5126:return TC;case 35664:return wC;case 35665:return AC;case 35666:return CC;case 35674:return bC;case 35675:return RC;case 35676:return PC;case 5124:case 35670:return LC;case 35667:case 35671:return NC;case 35668:case 35672:return DC;case 35669:case 35673:return IC;case 5125:return UC;case 36294:return FC;case 36295:return OC;case 36296:return kC;case 35678:case 36198:case 36298:case 36306:case 35682:return BC;case 35679:case 36299:case 36307:return zC;case 35680:case 36300:case 36308:case 36293:return VC;case 36289:case 36303:case 36311:case 36292:return HC}}function WC(t,e){t.uniform1fv(this.addr,e)}function jC(t,e){const n=ca(e,this.size,2);t.uniform2fv(this.addr,n)}function XC(t,e){const n=ca(e,this.size,3);t.uniform3fv(this.addr,n)}function $C(t,e){const n=ca(e,this.size,4);t.uniform4fv(this.addr,n)}function YC(t,e){const n=ca(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qC(t,e){const n=ca(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KC(t,e){const n=ca(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZC(t,e){t.uniform1iv(this.addr,e)}function JC(t,e){t.uniform2iv(this.addr,e)}function QC(t,e){t.uniform3iv(this.addr,e)}function eb(t,e){t.uniform4iv(this.addr,e)}function tb(t,e){t.uniform1uiv(this.addr,e)}function nb(t,e){t.uniform2uiv(this.addr,e)}function ib(t,e){t.uniform3uiv(this.addr,e)}function rb(t,e){t.uniform4uiv(this.addr,e)}function sb(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Xf:a=cx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function ab(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||dx,s[a])}function ob(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||fx,s[a])}function lb(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||ux,s[a])}function cb(t){switch(t){case 5126:return WC;case 35664:return jC;case 35665:return XC;case 35666:return $C;case 35674:return YC;case 35675:return qC;case 35676:return KC;case 5124:case 35670:return ZC;case 35667:case 35671:return JC;case 35668:case 35672:return QC;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}class ub{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=GC(n.type)}}class db{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cb(n.type)}}class fb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const td=/(\w+)(\])?(\[|\.)?/g;function Ng(t,e){t.seq.push(e),t.map[e.id]=e}function hb(t,e,n){const i=t.name,r=i.length;for(td.lastIndex=0;;){const s=td.exec(i),a=td.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ng(n,c===void 0?new ub(o,t,e):new db(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new fb(o),Ng(n,h)),n=h}}}class zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);hb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Dg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pb=37297;let mb=0;function gb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Ig=new $e;function _b(t){nt._getMatrix(Ig,nt.workingColorSpace,t);const e=`mat3( ${Ig.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case mc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ug(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+gb(t.getShaderSource(e),o)}else return s}function vb(t,e){const n=_b(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const xb={[Dv]:"Linear",[Iv]:"Reinhard",[Uv]:"Cineon",[Fv]:"ACESFilmic",[kv]:"AgX",[Bv]:"Neutral",[Ov]:"Custom"};function yb(t,e){const n=xb[e];return n===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xl=new j;function Sb(){nt.getLuminanceCoefficients(xl);const t=xl.x.toFixed(4),e=xl.y.toFixed(4),n=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function Eb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Tb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ia(t){return t!==""}function Fg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Og(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(t){return t.replace(wb,Cb)}const Ab=new Map;function Cb(t,e){let n=Ye[e];if(n===void 0){const i=Ab.get(e);if(i!==void 0)n=Ye[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $f(n)}const bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kg(t){return t.replace(bb,Rb)}function Rb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Pb={[Ul]:"SHADOWMAP_TYPE_PCF",[Da]:"SHADOWMAP_TYPE_VSM"};function Lb(t){return Pb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Nb={[Zr]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function Db(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Nb[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ib={[Zs]:"ENVMAP_MODE_REFRACTION"};function Ub(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Ib[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fb={[Nv]:"ENVMAP_BLENDING_MULTIPLY",[t1]:"ENVMAP_BLENDING_MIX",[n1]:"ENVMAP_BLENDING_ADD"};function Ob(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Fb[t.combine]||"ENVMAP_BLENDING_NONE"}function kb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Bb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Lb(n),c=Db(n),f=Ub(n),h=Ob(n),d=kb(n),p=Mb(n),_=Eb(s),x=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ia).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ia).join(`
`),u.length>0&&(u+=`
`)):(m=[Bg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),u=[Bg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?Ye.tonemapping_pars_fragment:"",n.toneMapping!==mi?yb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,vb("linearToOutputTexel",n.outputColorSpace),Sb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ia).join(`
`)),a=$f(a),a=Fg(a,n),a=Og(a,n),o=$f(o),o=Fg(o,n),o=Og(o,n),a=kg(a),o=kg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===$m?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+m+a,M=g+u+o,A=Dg(r,r.VERTEX_SHADER,v),C=Dg(r,r.FRAGMENT_SHADER,M);r.attachShader(x,A),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(P){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(x)||"",W=r.getShaderInfoLog(A)||"",q=r.getShaderInfoLog(C)||"",V=z.trim(),N=W.trim(),O=q.trim();let G=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,A,C);else{const ne=Ug(r,A,"vertex"),oe=Ug(r,C,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ne+`
`+oe)}else V!==""?Ve("WebGLProgram: Program Info Log:",V):(N===""||O==="")&&(Y=!1);Y&&(P.diagnostics={runnable:G,programLog:V,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:u}})}r.deleteShader(A),r.deleteShader(C),y=new zl(r,x),T=Tb(r,x)}let y;this.getUniforms=function(){return y===void 0&&b(this),y};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(x,pb)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=C,this}let zb=0;class Vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Hb(e),n.set(e,i)),i}}class Hb{constructor(e){this.id=zb++,this.code=e,this.usedTimes=0}}function Gb(t,e,n,i,r,s){const a=new ap,o=new Vb,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,T,U,P,z){const W=P.fog,q=z.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=e.get(y.envMap||V,N),G=O&&O.mapping===Vc?O.image.height:null,Y=p[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ve("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ne=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=ne!==void 0?ne.length:0;let k=0;q.morphAttributes.position!==void 0&&(k=1),q.morphAttributes.normal!==void 0&&(k=2),q.morphAttributes.color!==void 0&&(k=3);let Z,pe,de,H;if(Y){const ot=li[Y];Z=ot.vertexShader,pe=ot.fragmentShader}else Z=y.vertexShader,pe=y.fragmentShader,o.update(y),de=o.getVertexShaderID(y),H=o.getFragmentShaderID(y);const ie=t.getRenderTarget(),ee=t.state.buffers.depth.getReversed(),Me=z.isInstancedMesh===!0,xe=z.isBatchedMesh===!0,Ae=!!y.map,re=!!y.matcap,ve=!!O,Ne=!!y.aoMap,Ge=!!y.lightMap,be=!!y.bumpMap,ht=!!y.normalMap,D=!!y.displacementMap,Dt=!!y.emissiveMap,at=!!y.metalnessMap,mt=!!y.roughnessMap,Ue=y.anisotropy>0,R=y.clearcoat>0,S=y.dispersion>0,F=y.iridescence>0,te=y.sheen>0,se=y.transmission>0,Q=Ue&&!!y.anisotropyMap,Re=R&&!!y.clearcoatMap,me=R&&!!y.clearcoatNormalMap,Be=R&&!!y.clearcoatRoughnessMap,ze=F&&!!y.iridescenceMap,ce=F&&!!y.iridescenceThicknessMap,fe=te&&!!y.sheenColorMap,Pe=te&&!!y.sheenRoughnessMap,De=!!y.specularMap,Ee=!!y.specularColorMap,qe=!!y.specularIntensityMap,I=se&&!!y.transmissionMap,ge=se&&!!y.thicknessMap,he=!!y.gradientMap,Ce=!!y.alphaMap,ue=y.alphaTest>0,J=!!y.alphaHash,Le=!!y.extensions;let He=mi;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(He=t.toneMapping);const gt={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:Z,fragmentShader:pe,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:H,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:xe,batchingColor:xe&&z._colorsTexture!==null,instancing:Me,instancingColor:Me&&z.instanceColor!==null,instancingMorph:Me&&z.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Qs,alphaToCoverage:!!y.alphaToCoverage,map:Ae,matcap:re,envMap:ve,envMapMode:ve&&O.mapping,envMapCubeUVHeight:G,aoMap:Ne,lightMap:Ge,bumpMap:be,normalMap:ht,displacementMap:D,emissiveMap:Dt,normalMapObjectSpace:ht&&y.normalMapType===a1,normalMapTangentSpace:ht&&y.normalMapType===s1,metalnessMap:at,roughnessMap:mt,anisotropy:Ue,anisotropyMap:Q,clearcoat:R,clearcoatMap:Re,clearcoatNormalMap:me,clearcoatRoughnessMap:Be,dispersion:S,iridescence:F,iridescenceMap:ze,iridescenceThicknessMap:ce,sheen:te,sheenColorMap:fe,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:Ee,specularIntensityMap:qe,transmission:se,transmissionMap:I,thicknessMap:ge,gradientMap:he,opaque:y.transparent===!1&&y.blending===zs&&y.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ue,alphaHash:J,combine:y.combine,mapUv:Ae&&_(y.map.channel),aoMapUv:Ne&&_(y.aoMap.channel),lightMapUv:Ge&&_(y.lightMap.channel),bumpMapUv:be&&_(y.bumpMap.channel),normalMapUv:ht&&_(y.normalMap.channel),displacementMapUv:D&&_(y.displacementMap.channel),emissiveMapUv:Dt&&_(y.emissiveMap.channel),metalnessMapUv:at&&_(y.metalnessMap.channel),roughnessMapUv:mt&&_(y.roughnessMap.channel),anisotropyMapUv:Q&&_(y.anisotropyMap.channel),clearcoatMapUv:Re&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(y.sheenRoughnessMap.channel),specularMapUv:De&&_(y.specularMap.channel),specularColorMapUv:Ee&&_(y.specularColorMap.channel),specularIntensityMapUv:qe&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:ge&&_(y.thicknessMap.channel),alphaMapUv:Ce&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ht||Ue),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(Ae||Ce),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||q.attributes.normal===void 0&&ht===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ee,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:k,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:He,decodeVideoTexture:Ae&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===lt,decodeVideoTextureEmissive:Dt&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pi,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function m(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(u(T,y),g(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function u(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function g(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const T=p[y.type];let U;if(T){const P=li[T];U=cT.clone(P.uniforms)}else U=y.uniforms;return U}function M(y,T){let U=f.get(T);return U!==void 0?++U.usedTimes:(U=new Bb(t,T,y,r),c.push(U),f.set(T,U)),U}function A(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function C(y){o.remove(y)}function b(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:M,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:b}}function Wb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function jb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function zg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Vg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,_,x,m,u){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:p,material:_,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:u},t[e]=g):(g.id=d.id,g.object=d,g.geometry=p,g.material=_,g.materialVariant=a(d),g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=m,g.group=u),e++,g}function l(d,p,_,x,m,u){const g=o(d,p,_,x,m,u);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):n.push(g)}function c(d,p,_,x,m,u){const g=o(d,p,_,x,m,u);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):n.unshift(g)}function f(d,p){n.length>1&&n.sort(d||jb),i.length>1&&i.sort(p||zg),r.length>1&&r.sort(p||zg)}function h(){for(let d=e,p=t.length;d<p;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function Xb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Vg,t.set(i,[a])):r>=s.length?(a=new Vg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function $b(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new et};break;case"SpotLight":n={position:new j,direction:new j,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function Yb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let qb=0;function Kb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Zb(t){const e=new $b,n=Yb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new yt,a=new yt;function o(c){let f=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,x=0,m=0,u=0,g=0,v=0,M=0,A=0,C=0,b=0;c.sort(Kb);for(let T=0,U=c.length;T<U;T++){const P=c[T],z=P.color,W=P.intensity,q=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Js?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=z.r*W,h+=z.g*W,d+=z.b*W;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],W);b++}else if(P.isDirectionalLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,G=n.get(P);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=N,p++}else if(P.isSpotLight){const N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(z).multiplyScalar(W),N.distance=q,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[x]=N;const O=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,O.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[x]=O.matrix,P.castShadow){const G=n.get(P);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=V,M++}x++}else if(P.isRectAreaLight){const N=e.get(P);N.color.copy(z).multiplyScalar(W),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=N,m++}else if(P.isPointLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const O=P.shadow,G=n.get(P);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=N,_++}else if(P.isHemisphereLight){const N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(W),N.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[u]=N,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==u||y.numDirectionalShadows!==g||y.numPointShadows!==v||y.numSpotShadows!==M||y.numSpotMaps!==A||y.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,y.directionalLength=p,y.pointLength=_,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=u,y.numDirectionalShadows=g,y.numPointShadows=v,y.numSpotShadows=M,y.numSpotMaps=A,y.numLightProbes=b,i.version=qb++)}function l(c,f){let h=0,d=0,p=0,_=0,x=0;const m=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Hg(t){const e=new Zb(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Jb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Hg(t),e.set(r,[o])):s>=a.length?(o=new Hg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eR=`uniform sampler2D shadow_pass;
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
}`,tR=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],nR=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Gg=new yt,ba=new j,nd=new j;function iR(t,e,n){let i=new cp;const r=new Ze,s=new Ze,a=new Pt,o=new hT,l=new pT,c={},f=n.maxTextureSize,h={[Er]:xn,[xn]:Er,[Pi]:Pi},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Qb,fragmentShader:eR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Vn;_.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xi(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let u=this.type;this.render=function(C,b,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===FE&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ul);const T=t.getRenderTarget(),U=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ui),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=u!==this.type;W&&b.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(V=>V.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,V=C.length;q<V;q++){const N=C[q],O=N.shadow;if(O===void 0){Ve("WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const G=O.getFrameExtents();r.multiply(G),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/G.x),r.x=s.x*G.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/G.y),r.y=s.y*G.y,O.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Y,O.map===null||W===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Da){if(N.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new gi(r.x,r.y,{format:Js,type:Gi,minFilter:qt,magFilter:qt,generateMipmaps:!1}),O.map.texture.name=N.name+".shadowMap",O.map.depthTexture=new mo(r.x,r.y,ui),O.map.depthTexture.name=N.name+".shadowMapDepth",O.map.depthTexture.format=Wi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt}else N.isPointLight?(O.map=new lx(r.x),O.map.depthTexture=new oT(r.x,vi)):(O.map=new gi(r.x,r.y),O.map.depthTexture=new mo(r.x,r.y,vi)),O.map.depthTexture.name=N.name+".shadowMap",O.map.depthTexture.format=Wi,this.type===Ul?(O.map.depthTexture.compareFunction=Y?ip:np,O.map.depthTexture.minFilter=qt,O.map.depthTexture.magFilter=qt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt);O.camera.updateProjectionMatrix()}const ne=O.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<ne;oe++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(O.map),t.clear());const k=O.getViewport(oe);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),z.viewport(a)}if(N.isPointLight){const k=O.camera,Z=O.matrix,pe=N.distance||k.far;pe!==k.far&&(k.far=pe,k.updateProjectionMatrix()),ba.setFromMatrixPosition(N.matrixWorld),k.position.copy(ba),nd.copy(k.position),nd.add(tR[oe]),k.up.copy(nR[oe]),k.lookAt(nd),k.updateMatrixWorld(),Z.makeTranslation(-ba.x,-ba.y,-ba.z),Gg.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Gg,k.coordinateSystem,k.reversedDepth)}else O.updateMatrices(N);i=O.getFrustum(),M(b,y,O.camera,N,this.type)}O.isPointLightShadow!==!0&&this.type===Da&&g(O,y),O.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(T,U,P)};function g(C,b){const y=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gi(r.x,r.y,{format:Js,type:Gi})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,y,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,y,p,x,null)}function v(C,b,y,T){let U=null;const P=y.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)U=P;else if(U=y.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const z=U.uuid,W=b.uuid;let q=c[z];q===void 0&&(q={},c[z]=q);let V=q[W];V===void 0&&(V=U.clone(),q[W]=V,b.addEventListener("dispose",A)),U=V}if(U.visible=b.visible,U.wireframe=b.wireframe,T===Da?U.side=b.shadowSide!==null?b.shadowSide:b.side:U.side=b.shadowSide!==null?b.shadowSide:h[b.side],U.alphaMap=b.alphaMap,U.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,U.map=b.map,U.clipShadows=b.clipShadows,U.clippingPlanes=b.clippingPlanes,U.clipIntersection=b.clipIntersection,U.displacementMap=b.displacementMap,U.displacementScale=b.displacementScale,U.displacementBias=b.displacementBias,U.wireframeLinewidth=b.wireframeLinewidth,U.linewidth=b.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const z=t.properties.get(U);z.light=y}return U}function M(C,b,y,T,U){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&U===Da)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,C.matrixWorld);const W=e.update(C),q=C.material;if(Array.isArray(q)){const V=W.groups;for(let N=0,O=V.length;N<O;N++){const G=V[N],Y=q[G.materialIndex];if(Y&&Y.visible){const ne=v(C,Y,T,U);C.onBeforeShadow(t,C,b,y,W,ne,G),t.renderBufferDirect(y,null,W,ne,C,G),C.onAfterShadow(t,C,b,y,W,ne,G)}}}else if(q.visible){const V=v(C,q,T,U);C.onBeforeShadow(t,C,b,y,W,V,null),t.renderBufferDirect(y,null,W,V,C,null),C.onAfterShadow(t,C,b,y,W,V,null)}}const z=C.children;for(let W=0,q=z.length;W<q;W++)M(z[W],b,y,T,U)}function A(C){C.target.removeEventListener("dispose",A);for(const y in c){const T=c[y],U=C.target.uuid;U in T&&(T[U].dispose(),delete T[U])}}}function rR(t,e){function n(){let I=!1;const ge=new Pt;let he=null;const Ce=new Pt(0,0,0,0);return{setMask:function(ue){he!==ue&&!I&&(t.colorMask(ue,ue,ue,ue),he=ue)},setLocked:function(ue){I=ue},setClear:function(ue,J,Le,He,gt){gt===!0&&(ue*=He,J*=He,Le*=He),ge.set(ue,J,Le,He),Ce.equals(ge)===!1&&(t.clearColor(ue,J,Le,He),Ce.copy(ge))},reset:function(){I=!1,he=null,Ce.set(-1,0,0,0)}}}function i(){let I=!1,ge=!1,he=null,Ce=null,ue=null;return{setReversed:function(J){if(ge!==J){const Le=e.get("EXT_clip_control");J?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ge=J;const He=ue;ue=null,this.setClear(He)}},getReversed:function(){return ge},setTest:function(J){J?ie(t.DEPTH_TEST):ee(t.DEPTH_TEST)},setMask:function(J){he!==J&&!I&&(t.depthMask(J),he=J)},setFunc:function(J){if(ge&&(J=g1[J]),Ce!==J){switch(J){case nf:t.depthFunc(t.NEVER);break;case rf:t.depthFunc(t.ALWAYS);break;case sf:t.depthFunc(t.LESS);break;case Ks:t.depthFunc(t.LEQUAL);break;case af:t.depthFunc(t.EQUAL);break;case of:t.depthFunc(t.GEQUAL);break;case lf:t.depthFunc(t.GREATER);break;case cf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ce=J}},setLocked:function(J){I=J},setClear:function(J){ue!==J&&(ue=J,ge&&(J=1-J),t.clearDepth(J))},reset:function(){I=!1,he=null,Ce=null,ue=null,ge=!1}}}function r(){let I=!1,ge=null,he=null,Ce=null,ue=null,J=null,Le=null,He=null,gt=null;return{setTest:function(ot){I||(ot?ie(t.STENCIL_TEST):ee(t.STENCIL_TEST))},setMask:function(ot){ge!==ot&&!I&&(t.stencilMask(ot),ge=ot)},setFunc:function(ot,Si,Mi){(he!==ot||Ce!==Si||ue!==Mi)&&(t.stencilFunc(ot,Si,Mi),he=ot,Ce=Si,ue=Mi)},setOp:function(ot,Si,Mi){(J!==ot||Le!==Si||He!==Mi)&&(t.stencilOp(ot,Si,Mi),J=ot,Le=Si,He=Mi)},setLocked:function(ot){I=ot},setClear:function(ot){gt!==ot&&(t.clearStencil(ot),gt=ot)},reset:function(){I=!1,ge=null,he=null,Ce=null,ue=null,J=null,Le=null,He=null,gt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,u=null,g=null,v=null,M=null,A=null,C=null,b=new et(0,0,0),y=0,T=!1,U=null,P=null,z=null,W=null,q=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=O>=1):G.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=O>=2);let Y=null,ne={};const oe=t.getParameter(t.SCISSOR_BOX),k=t.getParameter(t.VIEWPORT),Z=new Pt().fromArray(oe),pe=new Pt().fromArray(k);function de(I,ge,he,Ce){const ue=new Uint8Array(4),J=t.createTexture();t.bindTexture(I,J),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Le=0;Le<he;Le++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(ge+Le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return J}const H={};H[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),H[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),H[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(Ks),be(!1),ht(Hm),ie(t.CULL_FACE),Ne(Ui);function ie(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function ee(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function Me(I,ge){return h[I]!==ge?(t.bindFramebuffer(I,ge),h[I]=ge,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ge),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function xe(I,ge){let he=p,Ce=!1;if(I){he=d.get(ge),he===void 0&&(he=[],d.set(ge,he));const ue=I.textures;if(he.length!==ue.length||he[0]!==t.COLOR_ATTACHMENT0){for(let J=0,Le=ue.length;J<Le;J++)he[J]=t.COLOR_ATTACHMENT0+J;he.length=ue.length,Ce=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,Ce=!0);Ce&&t.drawBuffers(he)}function Ae(I){return _!==I?(t.useProgram(I),_=I,!0):!1}const re={[kr]:t.FUNC_ADD,[kE]:t.FUNC_SUBTRACT,[BE]:t.FUNC_REVERSE_SUBTRACT};re[zE]=t.MIN,re[VE]=t.MAX;const ve={[HE]:t.ZERO,[GE]:t.ONE,[WE]:t.SRC_COLOR,[ef]:t.SRC_ALPHA,[KE]:t.SRC_ALPHA_SATURATE,[YE]:t.DST_COLOR,[XE]:t.DST_ALPHA,[jE]:t.ONE_MINUS_SRC_COLOR,[tf]:t.ONE_MINUS_SRC_ALPHA,[qE]:t.ONE_MINUS_DST_COLOR,[$E]:t.ONE_MINUS_DST_ALPHA,[ZE]:t.CONSTANT_COLOR,[JE]:t.ONE_MINUS_CONSTANT_COLOR,[QE]:t.CONSTANT_ALPHA,[e1]:t.ONE_MINUS_CONSTANT_ALPHA};function Ne(I,ge,he,Ce,ue,J,Le,He,gt,ot){if(I===Ui){x===!0&&(ee(t.BLEND),x=!1);return}if(x===!1&&(ie(t.BLEND),x=!0),I!==OE){if(I!==m||ot!==T){if((u!==kr||M!==kr)&&(t.blendEquation(t.FUNC_ADD),u=kr,M=kr),ot)switch(I){case zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gm:t.blendFunc(t.ONE,t.ONE);break;case Wm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case jm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",I);break}else switch(I){case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Wm:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jm:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",I);break}g=null,v=null,A=null,C=null,b.set(0,0,0),y=0,m=I,T=ot}return}ue=ue||ge,J=J||he,Le=Le||Ce,(ge!==u||ue!==M)&&(t.blendEquationSeparate(re[ge],re[ue]),u=ge,M=ue),(he!==g||Ce!==v||J!==A||Le!==C)&&(t.blendFuncSeparate(ve[he],ve[Ce],ve[J],ve[Le]),g=he,v=Ce,A=J,C=Le),(He.equals(b)===!1||gt!==y)&&(t.blendColor(He.r,He.g,He.b,gt),b.copy(He),y=gt),m=I,T=!1}function Ge(I,ge){I.side===Pi?ee(t.CULL_FACE):ie(t.CULL_FACE);let he=I.side===xn;ge&&(he=!he),be(he),I.blending===zs&&I.transparent===!1?Ne(Ui):Ne(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Ce=I.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(I){U!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),U=I)}function ht(I){I!==IE?(ie(t.CULL_FACE),I!==P&&(I===Hm?t.cullFace(t.BACK):I===UE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ee(t.CULL_FACE),P=I}function D(I){I!==z&&(N&&t.lineWidth(I),z=I)}function Dt(I,ge,he){I?(ie(t.POLYGON_OFFSET_FILL),(W!==ge||q!==he)&&(W=ge,q=he,a.getReversed()&&(ge=-ge),t.polygonOffset(ge,he))):ee(t.POLYGON_OFFSET_FILL)}function at(I){I?ie(t.SCISSOR_TEST):ee(t.SCISSOR_TEST)}function mt(I){I===void 0&&(I=t.TEXTURE0+V-1),Y!==I&&(t.activeTexture(I),Y=I)}function Ue(I,ge,he){he===void 0&&(Y===null?he=t.TEXTURE0+V-1:he=Y);let Ce=ne[he];Ce===void 0&&(Ce={type:void 0,texture:void 0},ne[he]=Ce),(Ce.type!==I||Ce.texture!==ge)&&(Y!==he&&(t.activeTexture(he),Y=he),t.bindTexture(I,ge||H[I]),Ce.type=I,Ce.texture=ge)}function R(){const I=ne[Y];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function te(){try{t.texSubImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function se(){try{t.texSubImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function Re(){try{t.compressedTexSubImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function me(){try{t.texStorage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function Be(){try{t.texStorage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function ze(){try{t.texImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function ce(){try{t.texImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function fe(I){Z.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function Pe(I){pe.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),pe.copy(I))}function De(I,ge){let he=c.get(ge);he===void 0&&(he=new WeakMap,c.set(ge,he));let Ce=he.get(I);Ce===void 0&&(Ce=t.getUniformBlockIndex(ge,I.name),he.set(I,Ce))}function Ee(I,ge){const Ce=c.get(ge).get(I);l.get(ge)!==Ce&&(t.uniformBlockBinding(ge,Ce,I.__bindingPointIndex),l.set(ge,Ce))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Y=null,ne={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,u=null,g=null,v=null,M=null,A=null,C=null,b=new et(0,0,0),y=0,T=!1,U=null,P=null,z=null,W=null,q=null,Z.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ee,bindFramebuffer:Me,drawBuffers:xe,useProgram:Ae,setBlending:Ne,setMaterial:Ge,setFlipSided:be,setCullFace:ht,setLineWidth:D,setPolygonOffset:Dt,setScissorTest:at,activeTexture:mt,bindTexture:Ue,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:ze,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:Ee,texStorage2D:me,texStorage3D:Be,texSubImage2D:te,texSubImage3D:se,compressedTexSubImage2D:Q,compressedTexSubImage3D:Re,scissor:fe,viewport:Pe,reset:qe}}function sR(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return p?new OffscreenCanvas(R,S):gc("canvas")}function x(R,S,F){let te=1;const se=Ue(R);if((se.width>F||se.height>F)&&(te=F/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(te*se.width),Re=Math.floor(te*se.height);h===void 0&&(h=_(Q,Re));const me=S?_(Q,Re):h;return me.width=Q,me.height=Re,me.getContext("2d").drawImage(R,0,0,Q,Re),Ve("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Re+")."),me}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(R,S,F,te,se=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=S;if(S===t.RED&&(F===t.FLOAT&&(Q=t.R32F),F===t.HALF_FLOAT&&(Q=t.R16F),F===t.UNSIGNED_BYTE&&(Q=t.R8)),S===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.R8UI),F===t.UNSIGNED_SHORT&&(Q=t.R16UI),F===t.UNSIGNED_INT&&(Q=t.R32UI),F===t.BYTE&&(Q=t.R8I),F===t.SHORT&&(Q=t.R16I),F===t.INT&&(Q=t.R32I)),S===t.RG&&(F===t.FLOAT&&(Q=t.RG32F),F===t.HALF_FLOAT&&(Q=t.RG16F),F===t.UNSIGNED_BYTE&&(Q=t.RG8)),S===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.RG8UI),F===t.UNSIGNED_SHORT&&(Q=t.RG16UI),F===t.UNSIGNED_INT&&(Q=t.RG32UI),F===t.BYTE&&(Q=t.RG8I),F===t.SHORT&&(Q=t.RG16I),F===t.INT&&(Q=t.RG32I)),S===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),F===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),F===t.UNSIGNED_INT&&(Q=t.RGB32UI),F===t.BYTE&&(Q=t.RGB8I),F===t.SHORT&&(Q=t.RGB16I),F===t.INT&&(Q=t.RGB32I)),S===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),F===t.UNSIGNED_INT&&(Q=t.RGBA32UI),F===t.BYTE&&(Q=t.RGBA8I),F===t.SHORT&&(Q=t.RGBA16I),F===t.INT&&(Q=t.RGBA32I)),S===t.RGB&&(F===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),S===t.RGBA){const Re=se?mc:nt.getTransfer(te);F===t.FLOAT&&(Q=t.RGBA32F),F===t.HALF_FLOAT&&(Q=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Q=Re===lt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(R,S){let F;return R?S===null||S===vi||S===fo?F=t.DEPTH24_STENCIL8:S===ui?F=t.DEPTH32F_STENCIL8:S===uo&&(F=t.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===fo?F=t.DEPTH_COMPONENT24:S===ui?F=t.DEPTH_COMPONENT32F:S===uo&&(F=t.DEPTH_COMPONENT16),F}function A(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==qt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),y(S),S.isVideoTexture&&f.delete(S)}function b(R){const S=R.target;S.removeEventListener("dispose",b),U(S)}function y(R){const S=i.get(R);if(S.__webglInit===void 0)return;const F=R.source,te=d.get(F);if(te){const se=te[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(R),Object.keys(te).length===0&&d.delete(F)}i.remove(R)}function T(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const F=R.source,te=d.get(F);delete te[S.__cacheKey],a.memory.textures--}function U(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let se=0;se<S.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(S.__webglFramebuffer[te][se]);else t.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)t.deleteFramebuffer(S.__webglFramebuffer[te]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=R.textures;for(let te=0,se=F.length;te<se;te++){const Q=i.get(F[te]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(F[te])}i.remove(R)}let P=0;function z(){P=0}function W(){const R=P;return R>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function q(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function V(R,S){const F=i.get(R);if(R.isVideoTexture&&at(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const te=R.image;if(te===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{H(F,R,S);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+S)}function N(R,S){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){H(F,R,S);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+S)}function O(R,S){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){H(F,R,S);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+S)}function G(R,S){const F=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){ie(F,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+S)}const Y={[uf]:t.REPEAT,[Di]:t.CLAMP_TO_EDGE,[df]:t.MIRRORED_REPEAT},ne={[Yt]:t.NEAREST,[i1]:t.NEAREST_MIPMAP_NEAREST,[Xo]:t.NEAREST_MIPMAP_LINEAR,[qt]:t.LINEAR,[wu]:t.LINEAR_MIPMAP_NEAREST,[dr]:t.LINEAR_MIPMAP_LINEAR},oe={[o1]:t.NEVER,[f1]:t.ALWAYS,[l1]:t.LESS,[np]:t.LEQUAL,[c1]:t.EQUAL,[ip]:t.GEQUAL,[u1]:t.GREATER,[d1]:t.NOTEQUAL};function k(R,S){if(S.type===ui&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===qt||S.magFilter===wu||S.magFilter===Xo||S.magFilter===dr||S.minFilter===qt||S.minFilter===wu||S.minFilter===Xo||S.minFilter===dr)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Y[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Y[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Y[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ne[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ne[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==Xo&&S.minFilter!==dr||S.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Z(R,S){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const te=S.source;let se=d.get(te);se===void 0&&(se={},d.set(te,se));const Q=q(S);if(Q!==R.__cacheKey){se[Q]===void 0&&(se[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),se[Q].usedTimes++;const Re=se[R.__cacheKey];Re!==void 0&&(se[R.__cacheKey].usedTimes--,Re.usedTimes===0&&T(S)),R.__cacheKey=Q,R.__webglTexture=se[Q].texture}return F}function pe(R,S,F){return Math.floor(Math.floor(R/F)/S)}function de(R,S,F,te){const Q=R.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,F,te,S.data);else{Q.sort((ce,fe)=>ce.start-fe.start);let Re=0;for(let ce=1;ce<Q.length;ce++){const fe=Q[Re],Pe=Q[ce],De=fe.start+fe.count,Ee=pe(Pe.start,S.width,4),qe=pe(fe.start,S.width,4);Pe.start<=De+1&&Ee===qe&&pe(Pe.start+Pe.count-1,S.width,4)===Ee?fe.count=Math.max(fe.count,Pe.start+Pe.count-fe.start):(++Re,Q[Re]=Pe)}Q.length=Re+1;const me=t.getParameter(t.UNPACK_ROW_LENGTH),Be=t.getParameter(t.UNPACK_SKIP_PIXELS),ze=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let ce=0,fe=Q.length;ce<fe;ce++){const Pe=Q[ce],De=Math.floor(Pe.start/4),Ee=Math.ceil(Pe.count/4),qe=De%S.width,I=Math.floor(De/S.width),ge=Ee,he=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,qe,I,ge,he,F,te,S.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,me),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(t.UNPACK_SKIP_ROWS,ze)}}function H(R,S,F){let te=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=t.TEXTURE_3D);const se=Z(R,S),Q=S.source;n.bindTexture(te,R.__webglTexture,t.TEXTURE0+F);const Re=i.get(Q);if(Q.version!==Re.__version||se===!0){n.activeTexture(t.TEXTURE0+F);const me=nt.getPrimaries(nt.workingColorSpace),Be=S.colorSpace===lr?null:nt.getPrimaries(S.colorSpace),ze=S.colorSpace===lr||me===Be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ce=x(S.image,!1,r.maxTextureSize);ce=mt(S,ce);const fe=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type);let De=v(S.internalFormat,fe,Pe,S.colorSpace,S.isVideoTexture);k(te,S);let Ee;const qe=S.mipmaps,I=S.isVideoTexture!==!0,ge=Re.__version===void 0||se===!0,he=Q.dataReady,Ce=A(S,ce);if(S.isDepthTexture)De=M(S.format===Gr,S.type),ge&&(I?n.texStorage2D(t.TEXTURE_2D,1,De,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,De,ce.width,ce.height,0,fe,Pe,null));else if(S.isDataTexture)if(qe.length>0){I&&ge&&n.texStorage2D(t.TEXTURE_2D,Ce,De,qe[0].width,qe[0].height);for(let ue=0,J=qe.length;ue<J;ue++)Ee=qe[ue],I?he&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Ee.width,Ee.height,fe,Pe,Ee.data):n.texImage2D(t.TEXTURE_2D,ue,De,Ee.width,Ee.height,0,fe,Pe,Ee.data);S.generateMipmaps=!1}else I?(ge&&n.texStorage2D(t.TEXTURE_2D,Ce,De,ce.width,ce.height),he&&de(S,ce,fe,Pe)):n.texImage2D(t.TEXTURE_2D,0,De,ce.width,ce.height,0,fe,Pe,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,De,qe[0].width,qe[0].height,ce.depth);for(let ue=0,J=qe.length;ue<J;ue++)if(Ee=qe[ue],S.format!==Zn)if(fe!==null)if(I){if(he)if(S.layerUpdates.size>0){const Le=yg(Ee.width,Ee.height,S.format,S.type);for(const He of S.layerUpdates){const gt=Ee.data.subarray(He*Le/Ee.data.BYTES_PER_ELEMENT,(He+1)*Le/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,He,Ee.width,Ee.height,1,fe,gt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Ee.width,Ee.height,ce.depth,fe,Ee.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,De,Ee.width,Ee.height,ce.depth,0,Ee.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?he&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,Ee.width,Ee.height,ce.depth,fe,Pe,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,De,Ee.width,Ee.height,ce.depth,0,fe,Pe,Ee.data)}else{I&&ge&&n.texStorage2D(t.TEXTURE_2D,Ce,De,qe[0].width,qe[0].height);for(let ue=0,J=qe.length;ue<J;ue++)Ee=qe[ue],S.format!==Zn?fe!==null?I?he&&n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,Ee.width,Ee.height,fe,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,De,Ee.width,Ee.height,0,Ee.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?he&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Ee.width,Ee.height,fe,Pe,Ee.data):n.texImage2D(t.TEXTURE_2D,ue,De,Ee.width,Ee.height,0,fe,Pe,Ee.data)}else if(S.isDataArrayTexture)if(I){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ce,De,ce.width,ce.height,ce.depth),he)if(S.layerUpdates.size>0){const ue=yg(ce.width,ce.height,S.format,S.type);for(const J of S.layerUpdates){const Le=ce.data.subarray(J*ue/ce.data.BYTES_PER_ELEMENT,(J+1)*ue/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ce.width,ce.height,1,fe,Pe,Le)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,fe,Pe,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,fe,Pe,ce.data);else if(S.isData3DTexture)I?(ge&&n.texStorage3D(t.TEXTURE_3D,Ce,De,ce.width,ce.height,ce.depth),he&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,fe,Pe,ce.data)):n.texImage3D(t.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,fe,Pe,ce.data);else if(S.isFramebufferTexture){if(ge)if(I)n.texStorage2D(t.TEXTURE_2D,Ce,De,ce.width,ce.height);else{let ue=ce.width,J=ce.height;for(let Le=0;Le<Ce;Le++)n.texImage2D(t.TEXTURE_2D,Le,De,ue,J,0,fe,Pe,null),ue>>=1,J>>=1}}else if(qe.length>0){if(I&&ge){const ue=Ue(qe[0]);n.texStorage2D(t.TEXTURE_2D,Ce,De,ue.width,ue.height)}for(let ue=0,J=qe.length;ue<J;ue++)Ee=qe[ue],I?he&&n.texSubImage2D(t.TEXTURE_2D,ue,0,0,fe,Pe,Ee):n.texImage2D(t.TEXTURE_2D,ue,De,fe,Pe,Ee);S.generateMipmaps=!1}else if(I){if(ge){const ue=Ue(ce);n.texStorage2D(t.TEXTURE_2D,Ce,De,ue.width,ue.height)}he&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Pe,ce)}else n.texImage2D(t.TEXTURE_2D,0,De,fe,Pe,ce);m(S)&&u(te),Re.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ie(R,S,F){if(S.image.length!==6)return;const te=Z(R,S),se=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+F);const Q=i.get(se);if(se.version!==Q.__version||te===!0){n.activeTexture(t.TEXTURE0+F);const Re=nt.getPrimaries(nt.workingColorSpace),me=S.colorSpace===lr?null:nt.getPrimaries(S.colorSpace),Be=S.colorSpace===lr||Re===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const ze=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!ze&&!ce?fe[J]=x(S.image[J],!0,r.maxCubemapSize):fe[J]=ce?S.image[J].image:S.image[J],fe[J]=mt(S,fe[J]);const Pe=fe[0],De=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type),qe=v(S.internalFormat,De,Ee,S.colorSpace),I=S.isVideoTexture!==!0,ge=Q.__version===void 0||te===!0,he=se.dataReady;let Ce=A(S,Pe);k(t.TEXTURE_CUBE_MAP,S);let ue;if(ze){I&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,qe,Pe.width,Pe.height);for(let J=0;J<6;J++){ue=fe[J].mipmaps;for(let Le=0;Le<ue.length;Le++){const He=ue[Le];S.format!==Zn?De!==null?I?he&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le,0,0,He.width,He.height,De,He.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le,qe,He.width,He.height,0,He.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le,0,0,He.width,He.height,De,Ee,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le,qe,He.width,He.height,0,De,Ee,He.data)}}}else{if(ue=S.mipmaps,I&&ge){ue.length>0&&Ce++;const J=Ue(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,qe,J.width,J.height)}for(let J=0;J<6;J++)if(ce){I?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,De,Ee,fe[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,fe[J].width,fe[J].height,0,De,Ee,fe[J].data);for(let Le=0;Le<ue.length;Le++){const gt=ue[Le].image[J].image;I?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le+1,0,0,gt.width,gt.height,De,Ee,gt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le+1,qe,gt.width,gt.height,0,De,Ee,gt.data)}}else{I?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,Ee,fe[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,De,Ee,fe[J]);for(let Le=0;Le<ue.length;Le++){const He=ue[Le];I?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le+1,0,0,De,Ee,He.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le+1,qe,De,Ee,He.image[J])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),Q.__version=se.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ee(R,S,F,te,se,Q){const Re=s.convert(F.format,F.colorSpace),me=s.convert(F.type),Be=v(F.internalFormat,Re,me,F.colorSpace),ze=i.get(S),ce=i.get(F);if(ce.__renderTarget=S,!ze.__hasExternalTextures){const fe=Math.max(1,S.width>>Q),Pe=Math.max(1,S.height>>Q);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,Q,Be,fe,Pe,S.depth,0,Re,me,null):n.texImage2D(se,Q,Be,fe,Pe,0,Re,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,se,ce.__webglTexture,0,D(S)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,se,ce.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(R,S,F){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const te=S.depthTexture,se=te&&te.isDepthTexture?te.type:null,Q=M(S.stencilBuffer,se),Re=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Dt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(S),Q,S.width,S.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(S),Q,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Q,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,R)}else{const te=S.textures;for(let se=0;se<te.length;se++){const Q=te[se],Re=s.convert(Q.format,Q.colorSpace),me=s.convert(Q.type),Be=v(Q.internalFormat,Re,me,Q.colorSpace);Dt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(S),Be,S.width,S.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(S),Be,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Be,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function xe(R,S,F){const te=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(S.depthTexture);if(se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),te){if(se.__webglInit===void 0&&(se.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),se.__webglTexture===void 0){se.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),k(t.TEXTURE_CUBE_MAP,S.depthTexture);const ze=s.convert(S.depthTexture.format),ce=s.convert(S.depthTexture.type);let fe;S.depthTexture.format===Wi?fe=t.DEPTH_COMPONENT24:S.depthTexture.format===Gr&&(fe=t.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,fe,S.width,S.height,0,ze,ce,null)}}else V(S.depthTexture,0);const Q=se.__webglTexture,Re=D(S),me=te?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,Be=S.depthTexture.format===Gr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Wi)Dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Be,me,Q,0,Re):t.framebufferTexture2D(t.FRAMEBUFFER,Be,me,Q,0);else if(S.depthTexture.format===Gr)Dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Be,me,Q,0,Re):t.framebufferTexture2D(t.FRAMEBUFFER,Be,me,Q,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const S=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const te=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){const se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",se)};te.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=te}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(F)for(let te=0;te<6;te++)xe(S.__webglFramebuffer[te],R,te);else{const te=R.texture.mipmaps;te&&te.length>0?xe(S.__webglFramebuffer[0],R,0):xe(S.__webglFramebuffer,R,0)}else if(F){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=t.createRenderbuffer(),Me(S.__webglDepthbuffer[te],R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Q)}}else{const te=R.texture.mipmaps;if(te&&te.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Me(S.__webglDepthbuffer,R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(R,S,F){const te=i.get(R);S!==void 0&&ee(te.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ae(R)}function ve(R){const S=R.texture,F=i.get(R),te=i.get(S);R.addEventListener("dispose",b);const se=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Re=se.length>1;if(Re||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=S.version,a.memory.textures++),Q){F.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[me]=[];for(let Be=0;Be<S.mipmaps.length;Be++)F.__webglFramebuffer[me][Be]=t.createFramebuffer()}else F.__webglFramebuffer[me]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)F.__webglFramebuffer[me]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Re)for(let me=0,Be=se.length;me<Be;me++){const ze=i.get(se[me]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Dt(R)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let me=0;me<se.length;me++){const Be=se[me];F.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[me]);const ze=s.convert(Be.format,Be.colorSpace),ce=s.convert(Be.type),fe=v(Be.internalFormat,ze,ce,Be.colorSpace,R.isXRRenderTarget===!0),Pe=D(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,fe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,F.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Me(F.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),k(t.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Be=0;Be<S.mipmaps.length;Be++)ee(F.__webglFramebuffer[me][Be],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Be);else ee(F.__webglFramebuffer[me],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let me=0,Be=se.length;me<Be;me++){const ze=se[me],ce=i.get(ze);let fe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ce.__webglTexture),k(fe,ze),ee(F.__webglFramebuffer,R,ze,t.COLOR_ATTACHMENT0+me,fe,0),m(ze)&&u(fe)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,te.__webglTexture),k(me,S),S.mipmaps&&S.mipmaps.length>0)for(let Be=0;Be<S.mipmaps.length;Be++)ee(F.__webglFramebuffer[Be],R,S,t.COLOR_ATTACHMENT0,me,Be);else ee(F.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,me,0);m(S)&&u(me),n.unbindTexture()}R.depthBuffer&&Ae(R)}function Ne(R){const S=R.textures;for(let F=0,te=S.length;F<te;F++){const se=S[F];if(m(se)){const Q=g(R),Re=i.get(se).__webglTexture;n.bindTexture(Q,Re),u(Q),n.unbindTexture()}}}const Ge=[],be=[];function ht(R){if(R.samples>0){if(Dt(R)===!1){const S=R.textures,F=R.width,te=R.height;let se=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(R),me=S.length>1;if(me)for(let ze=0;ze<S.length;ze++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Be=R.texture.mipmaps;Be&&Be.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ze=0;ze<S.length;ze++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ze]);const ce=i.get(S[ze]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,F,te,0,0,F,te,se,t.NEAREST),l===!0&&(Ge.length=0,be.length=0,Ge.push(t.COLOR_ATTACHMENT0+ze),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ge.push(Q),be.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let ze=0;ze<S.length;ze++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ze]);const ce=i.get(S[ze]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function D(R){return Math.min(r.maxSamples,R.samples)}function Dt(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(R){const S=a.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function mt(R,S){const F=R.colorSpace,te=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Qs&&F!==lr&&(nt.getTransfer(F)===lt?(te!==Zn||se!==wn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",F)),S}function Ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.setTexture2D=V,this.setTexture2DArray=N,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=re,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function aR(t,e){function n(i,r=lr){let s;const a=nt.getTransfer(r);if(i===wn)return t.UNSIGNED_BYTE;if(i===Zh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Gv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Wv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vv)return t.BYTE;if(i===Hv)return t.SHORT;if(i===uo)return t.UNSIGNED_SHORT;if(i===Kh)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Gi)return t.HALF_FLOAT;if(i===jv)return t.ALPHA;if(i===Xv)return t.RGB;if(i===Zn)return t.RGBA;if(i===Wi)return t.DEPTH_COMPONENT;if(i===Gr)return t.DEPTH_STENCIL;if(i===$v)return t.RED;if(i===Qh)return t.RED_INTEGER;if(i===Js)return t.RG;if(i===ep)return t.RG_INTEGER;if(i===tp)return t.RGBA_INTEGER;if(i===Fl||i===Ol||i===kl||i===Bl)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ff||i===hf||i===pf||i===mf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ff)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gf||i===_f||i===vf||i===xf||i===yf||i===Sf||i===Mf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gf||i===_f)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===xf)return s.COMPRESSED_R11_EAC;if(i===yf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Sf)return s.COMPRESSED_RG11_EAC;if(i===Mf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ef||i===Tf||i===wf||i===Af||i===Cf||i===bf||i===Rf||i===Pf||i===Lf||i===Nf||i===Df||i===If||i===Uf||i===Ff)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ef)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Af)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Df)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===If)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ff)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Of||i===kf||i===Bf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Of)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zf||i===Vf||i===Hf||i===Gf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const oR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lR=`
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

}`;class cR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ix(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new xi({vertexShader:oR,fragmentShader:lR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xi(new Gc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uR extends aa{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new cR,u={},g=n.getContextAttributes();let v=null,M=null;const A=[],C=[],b=new Ze;let y=null;const T=new In;T.viewport=new Pt;const U=new In;U.viewport=new Pt;const P=[T,U],z=new ST;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ie=A[H];return ie===void 0&&(ie=new Lu,A[H]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(H){let ie=A[H];return ie===void 0&&(ie=new Lu,A[H]=ie),ie.getGripSpace()},this.getHand=function(H){let ie=A[H];return ie===void 0&&(ie=new Lu,A[H]=ie),ie.getHandSpace()};function V(H){const ie=C.indexOf(H.inputSource);if(ie===-1)return;const ee=A[ie];ee!==void 0&&(ee.update(H.inputSource,H.frame,c||a),ee.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",O);for(let H=0;H<A.length;H++){const ie=C[H];ie!==null&&(C[H]=null,A[H].disconnect(ie))}W=null,q=null,m.reset();for(const H in u)delete u[H];e.setRenderTarget(v),p=null,d=null,h=null,r=null,M=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",N),r.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Me=null,xe=null;g.depth&&(xe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=g.stencil?Gr:Wi,Me=g.stencil?fo:vi);const Ae={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new gi(d.textureWidth,d.textureHeight,{format:Zn,type:wn,depthTexture:new mo(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new gi(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(H){for(let ie=0;ie<H.removed.length;ie++){const ee=H.removed[ie],Me=C.indexOf(ee);Me>=0&&(C[Me]=null,A[Me].disconnect(ee))}for(let ie=0;ie<H.added.length;ie++){const ee=H.added[ie];let Me=C.indexOf(ee);if(Me===-1){for(let Ae=0;Ae<A.length;Ae++)if(Ae>=C.length){C.push(ee),Me=Ae;break}else if(C[Ae]===null){C[Ae]=ee,Me=Ae;break}if(Me===-1)break}const xe=A[Me];xe&&xe.connect(ee)}}const G=new j,Y=new j;function ne(H,ie,ee){G.setFromMatrixPosition(ie.matrixWorld),Y.setFromMatrixPosition(ee.matrixWorld);const Me=G.distanceTo(Y),xe=ie.projectionMatrix.elements,Ae=ee.projectionMatrix.elements,re=xe[14]/(xe[10]-1),ve=xe[14]/(xe[10]+1),Ne=(xe[9]+1)/xe[5],Ge=(xe[9]-1)/xe[5],be=(xe[8]-1)/xe[0],ht=(Ae[8]+1)/Ae[0],D=re*be,Dt=re*ht,at=Me/(-be+ht),mt=at*-be;if(ie.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(mt),H.translateZ(at),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),xe[10]===-1)H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ue=re+at,R=ve+at,S=D-mt,F=Dt+(Me-mt),te=Ne*ve/R*Ue,se=Ge*ve/R*Ue;H.projectionMatrix.makePerspective(S,F,te,se,Ue,R),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function oe(H,ie){ie===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ie.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let ie=H.near,ee=H.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),z.near=U.near=T.near=ie,z.far=U.far=T.far=ee,(W!==z.near||q!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),W=z.near,q=z.far),z.layers.mask=H.layers.mask|6,T.layers.mask=z.layers.mask&-5,U.layers.mask=z.layers.mask&-3;const Me=H.parent,xe=z.cameras;oe(z,Me);for(let Ae=0;Ae<xe.length;Ae++)oe(xe[Ae],Me);xe.length===2?ne(z,T,U):z.projectionMatrix.copy(T.projectionMatrix),k(H,z,Me)};function k(H,ie,ee){ee===null?H.matrix.copy(ie.matrixWorld):(H.matrix.copy(ee.matrixWorld),H.matrix.invert(),H.matrix.multiply(ie.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=po*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(H){return u[H]};let Z=null;function pe(H,ie){if(f=ie.getViewerPose(c||a),_=ie,f!==null){const ee=f.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Me=!1;ee.length!==z.cameras.length&&(z.cameras.length=0,Me=!0);for(let ve=0;ve<ee.length;ve++){const Ne=ee[ve];let Ge=null;if(p!==null)Ge=p.getViewport(Ne);else{const ht=h.getViewSubImage(d,Ne);Ge=ht.viewport,ve===0&&(e.setRenderTargetTextures(M,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(M))}let be=P[ve];be===void 0&&(be=new In,be.layers.enable(ve),be.viewport=new Pt,P[ve]=be),be.matrix.fromArray(Ne.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ne.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),ve===0&&(z.matrix.copy(be.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Me===!0&&z.cameras.push(be)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const ve=h.getDepthInformation(ee[0]);ve&&ve.isValid&&ve.texture&&m.init(ve,r.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let ve=0;ve<ee.length;ve++){const Ne=ee[ve].camera;if(Ne){let Ge=u[Ne];Ge||(Ge=new ix,u[Ne]=Ge);const be=h.getCameraImage(Ne);Ge.sourceTexture=be}}}}for(let ee=0;ee<A.length;ee++){const Me=C[ee],xe=A[ee];Me!==null&&xe!==void 0&&xe.update(Me,ie,c||a)}Z&&Z(H,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const de=new ox;de.setAnimationLoop(pe),this.setAnimationLoop=function(H){Z=H},this.dispose=function(){}}}const Ir=new ji,dR=new yt;function fR(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,rx(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,v,M){u.isMeshBasicMaterial?s(m,u):u.isMeshLambertMaterial?(s(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===xn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===xn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,M=g.envMapRotation;v&&(m.envMap.value=v,Ir.copy(M),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),m.envMapRotation.value.setFromMatrix4(dR.makeRotationFromEuler(Ir)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hR(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(_(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",m));const A=v.program;i.updateUBOMapping(g,A);const C=e.render.frame;s[g.id]!==C&&(d(g),s[g.id]=C)}function f(g){const v=h();g.__bindingPointIndex=v;const M=t.createBuffer(),A=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function h(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],M=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,b=M.length;C<b;C++){const y=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,U=y.length;T<U;T++){const P=y[T];if(p(P,C,T,A)===!0){const z=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let V=0;V<W.length;V++){const N=W[V],O=x(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,z+q,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,q),q+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,M,A){const C=g.value,b=v+"_"+M;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const y=A[b];if(typeof C=="number"||typeof C=="boolean"){if(y!==C)return A[b]=C,!0}else if(y.equals(C)===!1)return y.copy(C),!0}return!1}function _(g){const v=g.uniforms;let M=0;const A=16;for(let b=0,y=v.length;b<y;b++){const T=Array.isArray(v[b])?v[b]:[v[b]];for(let U=0,P=T.length;U<P;U++){const z=T[U],W=Array.isArray(z.value)?z.value:[z.value];for(let q=0,V=W.length;q<V;q++){const N=W[q],O=x(N),G=M%A,Y=G%O.boundary,ne=G+Y;M+=Y,ne!==0&&A-ne<O.storage&&(M+=A-ne),z.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=O.storage}}}const C=M%A;return C>0&&(M+=A-C),g.__size=M,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const pR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function mR(){return ai===null&&(ai=new tT(pR,16,16,Js,Gi),ai.name="DFG_LUT",ai.minFilter=qt,ai.magFilter=qt,ai.wrapS=Di,ai.wrapT=Di,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class gR{constructor(e={}){const{canvas:n=p1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=wn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const x=p,m=new Set([tp,ep,Qh]),u=new Set([wn,vi,uo,fo,Zh,Jh]),g=new Uint32Array(4),v=new Int32Array(4);let M=null,A=null;const C=[],b=[];let y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1;this._outputColorSpace=Tn;let P=0,z=0,W=null,q=-1,V=null;const N=new Pt,O=new Pt;let G=null;const Y=new et(0);let ne=0,oe=n.width,k=n.height,Z=1,pe=null,de=null;const H=new Pt(0,0,oe,k),ie=new Pt(0,0,oe,k);let ee=!1;const Me=new cp;let xe=!1,Ae=!1;const re=new yt,ve=new j,Ne=new Pt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function ht(){return W===null?Z:1}let D=i;function Dt(w,B){return n.getContext(w,B)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qh}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",He,!1),n.addEventListener("webglcontextcreationerror",gt,!1),D===null){const B="webgl2";if(D=Dt(B,w),D===null)throw Dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw tt("WebGLRenderer: "+w.message),w}let at,mt,Ue,R,S,F,te,se,Q,Re,me,Be,ze,ce,fe,Pe,De,Ee,qe,I,ge,he,Ce;function ue(){at=new gC(D),at.init(),ge=new aR(D,at),mt=new lC(D,at,e,ge),Ue=new rR(D,at),mt.reversedDepthBuffer&&d&&Ue.buffers.depth.setReversed(!0),R=new xC(D),S=new Wb,F=new sR(D,at,Ue,S,mt,ge,R),te=new mC(T),se=new TT(D),he=new aC(D,se),Q=new _C(D,se,R,he),Re=new SC(D,Q,se,he,R),Ee=new yC(D,mt,F),fe=new cC(S),me=new Gb(T,te,at,mt,he,fe),Be=new fR(T,S),ze=new Xb,ce=new Jb(at),De=new sC(T,te,Ue,Re,_,l),Pe=new iR(T,Re,mt),Ce=new hR(D,R,mt,Ue),qe=new oC(D,at,R),I=new vC(D,at,R),R.programs=me.programs,T.capabilities=mt,T.extensions=at,T.properties=S,T.renderLists=ze,T.shadowMap=Pe,T.state=Ue,T.info=R}ue(),x!==wn&&(y=new EC(x,n.width,n.height,r,s));const J=new uR(T,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=at.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=at.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(oe,k,!1))},this.getSize=function(w){return w.set(oe,k)},this.setSize=function(w,B,K=!0){if(J.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=w,k=B,n.width=Math.floor(w*Z),n.height=Math.floor(B*Z),K===!0&&(n.style.width=w+"px",n.style.height=B+"px"),y!==null&&y.setSize(n.width,n.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(oe*Z,k*Z).floor()},this.setDrawingBufferSize=function(w,B,K){oe=w,k=B,Z=K,n.width=Math.floor(w*K),n.height=Math.floor(B*K),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(x===wn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,B,K,$){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,B,K,$),Ue.viewport(N.copy(H).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,B,K,$){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,B,K,$),Ue.scissor(O.copy(ie).multiplyScalar(Z).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){Ue.setScissorTest(ee=w)},this.setOpaqueSort=function(w){pe=w},this.setTransparentSort=function(w){de=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,K=!0){let $=0;if(w){let X=!1;if(W!==null){const ye=W.texture.format;X=m.has(ye)}if(X){const ye=W.texture.type,Te=u.has(ye),Se=De.getClearColor(),Ie=De.getClearAlpha(),Oe=Se.r,je=Se.g,Ke=Se.b;Te?(g[0]=Oe,g[1]=je,g[2]=Ke,g[3]=Ie,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Oe,v[1]=je,v[2]=Ke,v[3]=Ie,D.clearBufferiv(D.COLOR,0,v))}else $|=D.COLOR_BUFFER_BIT}B&&($|=D.DEPTH_BUFFER_BIT),K&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",He,!1),n.removeEventListener("webglcontextcreationerror",gt,!1),De.dispose(),ze.dispose(),ce.dispose(),S.dispose(),te.dispose(),Re.dispose(),he.dispose(),Ce.dispose(),me.dispose(),J.dispose(),J.removeEventListener("sessionstart",hp),J.removeEventListener("sessionend",pp),Cr.stop()};function Le(w){w.preventDefault(),_c("WebGLRenderer: Context Lost."),U=!0}function He(){_c("WebGLRenderer: Context Restored."),U=!1;const w=R.autoReset,B=Pe.enabled,K=Pe.autoUpdate,$=Pe.needsUpdate,X=Pe.type;ue(),R.autoReset=w,Pe.enabled=B,Pe.autoUpdate=K,Pe.needsUpdate=$,Pe.type=X}function gt(w){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){const B=w.target;B.removeEventListener("dispose",ot),Si(B)}function Si(w){Mi(w),S.remove(w)}function Mi(w){const B=S.get(w).programs;B!==void 0&&(B.forEach(function(K){me.releaseProgram(K)}),w.isShaderMaterial&&me.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,K,$,X,ye){B===null&&(B=Ge);const Te=X.isMesh&&X.matrixWorld.determinant()<0,Se=_x(w,B,K,$,X);Ue.setMaterial($,Te);let Ie=K.index,Oe=1;if($.wireframe===!0){if(Ie=Q.getWireframeAttribute(K),Ie===void 0)return;Oe=2}const je=K.drawRange,Ke=K.attributes.position;let ke=je.start*Oe,dt=(je.start+je.count)*Oe;ye!==null&&(ke=Math.max(ke,ye.start*Oe),dt=Math.min(dt,(ye.start+ye.count)*Oe)),Ie!==null?(ke=Math.max(ke,0),dt=Math.min(dt,Ie.count)):Ke!=null&&(ke=Math.max(ke,0),dt=Math.min(dt,Ke.count));const Lt=dt-ke;if(Lt<0||Lt===1/0)return;he.setup(X,$,Se,K,Ie);let bt,ft=qe;if(Ie!==null&&(bt=se.get(Ie),ft=I,ft.setIndex(bt)),X.isMesh)$.wireframe===!0?(Ue.setLineWidth($.wireframeLinewidth*ht()),ft.setMode(D.LINES)):ft.setMode(D.TRIANGLES);else if(X.isLine){let Jt=$.linewidth;Jt===void 0&&(Jt=1),Ue.setLineWidth(Jt*ht()),X.isLineSegments?ft.setMode(D.LINES):X.isLineLoop?ft.setMode(D.LINE_LOOP):ft.setMode(D.LINE_STRIP)}else X.isPoints?ft.setMode(D.POINTS):X.isSprite&&ft.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)vc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Jt=X._multiDrawStarts,Fe=X._multiDrawCounts,yn=X._multiDrawCount,rt=Ie?se.get(Ie).bytesPerElement:1,Hn=S.get($).currentProgram.getUniforms();for(let ii=0;ii<yn;ii++)Hn.setValue(D,"_gl_DrawID",ii),ft.render(Jt[ii]/rt,Fe[ii])}else if(X.isInstancedMesh)ft.renderInstances(ke,Lt,X.count);else if(K.isInstancedBufferGeometry){const Jt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Fe=Math.min(K.instanceCount,Jt);ft.renderInstances(ke,Lt,Fe)}else ft.render(ke,Lt)};function fp(w,B,K){w.transparent===!0&&w.side===Pi&&w.forceSinglePass===!1?(w.side=xn,w.needsUpdate=!0,Co(w,B,K),w.side=Er,w.needsUpdate=!0,Co(w,B,K),w.side=Pi):Co(w,B,K)}this.compile=function(w,B,K=null){K===null&&(K=w),A=ce.get(K),A.init(B),b.push(A),K.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),w!==K&&w.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),A.setupLights();const $=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ye=X.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){const Se=ye[Te];fp(Se,K,X),$.add(Se)}else fp(ye,K,X),$.add(ye)}),A=b.pop(),$},this.compileAsync=function(w,B,K=null){const $=this.compile(w,B,K);return new Promise(X=>{function ye(){if($.forEach(function(Te){S.get(Te).currentProgram.isReady()&&$.delete(Te)}),$.size===0){X(w);return}setTimeout(ye,10)}at.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Xc=null;function gx(w){Xc&&Xc(w)}function hp(){Cr.stop()}function pp(){Cr.start()}const Cr=new ox;Cr.setAnimationLoop(gx),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(w){Xc=w,J.setAnimationLoop(w),w===null?Cr.stop():Cr.start()},J.addEventListener("sessionstart",hp),J.addEventListener("sessionend",pp),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const K=J.enabled===!0&&J.isPresenting===!0,$=y!==null&&(W===null||K)&&y.begin(T,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,B,W),A=ce.get(w,b.length),A.init(B),b.push(A),re.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Me.setFromProjectionMatrix(re,di,B.reversedDepth),Ae=this.localClippingEnabled,xe=fe.init(this.clippingPlanes,Ae),M=ze.get(w,C.length),M.init(),C.push(M),J.enabled===!0&&J.isPresenting===!0){const Te=T.xr.getDepthSensingMesh();Te!==null&&$c(Te,B,-1/0,T.sortObjects)}$c(w,B,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(pe,de),be=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,be&&De.addToRenderList(M,w),this.info.render.frame++,xe===!0&&fe.beginShadows();const X=A.state.shadowsArray;if(Pe.render(X,w,B),xe===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&y.hasRenderPass())===!1){const Te=M.opaque,Se=M.transmissive;if(A.setupLights(),B.isArrayCamera){const Ie=B.cameras;if(Se.length>0)for(let Oe=0,je=Ie.length;Oe<je;Oe++){const Ke=Ie[Oe];gp(Te,Se,w,Ke)}be&&De.render(w);for(let Oe=0,je=Ie.length;Oe<je;Oe++){const Ke=Ie[Oe];mp(M,w,Ke,Ke.viewport)}}else Se.length>0&&gp(Te,Se,w,B),be&&De.render(w),mp(M,w,B)}W!==null&&z===0&&(F.updateMultisampleRenderTarget(W),F.updateRenderTargetMipmap(W)),$&&y.end(T),w.isScene===!0&&w.onAfterRender(T,w,B),he.resetDefaultState(),q=-1,V=null,b.pop(),b.length>0?(A=b[b.length-1],xe===!0&&fe.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?M=C[C.length-1]:M=null};function $c(w,B,K,$){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Me.intersectsSprite(w)){$&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(re);const Te=Re.update(w),Se=w.material;Se.visible&&M.push(w,Te,Se,K,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Me.intersectsObject(w))){const Te=Re.update(w),Se=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(re)),Array.isArray(Se)){const Ie=Te.groups;for(let Oe=0,je=Ie.length;Oe<je;Oe++){const Ke=Ie[Oe],ke=Se[Ke.materialIndex];ke&&ke.visible&&M.push(w,Te,ke,K,Ne.z,Ke)}}else Se.visible&&M.push(w,Te,Se,K,Ne.z,null)}}const ye=w.children;for(let Te=0,Se=ye.length;Te<Se;Te++)$c(ye[Te],B,K,$)}function mp(w,B,K,$){const{opaque:X,transmissive:ye,transparent:Te}=w;A.setupLightsView(K),xe===!0&&fe.setGlobalState(T.clippingPlanes,K),$&&Ue.viewport(N.copy($)),X.length>0&&Ao(X,B,K),ye.length>0&&Ao(ye,B,K),Te.length>0&&Ao(Te,B,K),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function gp(w,B,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){const ke=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new gi(1,1,{generateMipmaps:!0,type:ke?Gi:wn,minFilter:dr,samples:Math.max(4,mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const ye=A.state.transmissionRenderTarget[$.id],Te=$.viewport||N;ye.setSize(Te.z*T.transmissionResolutionScale,Te.w*T.transmissionResolutionScale);const Se=T.getRenderTarget(),Ie=T.getActiveCubeFace(),Oe=T.getActiveMipmapLevel();T.setRenderTarget(ye),T.getClearColor(Y),ne=T.getClearAlpha(),ne<1&&T.setClearColor(16777215,.5),T.clear(),be&&De.render(K);const je=T.toneMapping;T.toneMapping=mi;const Ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),xe===!0&&fe.setGlobalState(T.clippingPlanes,$),Ao(w,K,$),F.updateMultisampleRenderTarget(ye),F.updateRenderTargetMipmap(ye),at.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let dt=0,Lt=B.length;dt<Lt;dt++){const bt=B[dt],{object:ft,geometry:Jt,material:Fe,group:yn}=bt;if(Fe.side===Pi&&ft.layers.test($.layers)){const rt=Fe.side;Fe.side=xn,Fe.needsUpdate=!0,_p(ft,K,$,Jt,Fe,yn),Fe.side=rt,Fe.needsUpdate=!0,ke=!0}}ke===!0&&(F.updateMultisampleRenderTarget(ye),F.updateRenderTargetMipmap(ye))}T.setRenderTarget(Se,Ie,Oe),T.setClearColor(Y,ne),Ke!==void 0&&($.viewport=Ke),T.toneMapping=je}function Ao(w,B,K){const $=B.isScene===!0?B.overrideMaterial:null;for(let X=0,ye=w.length;X<ye;X++){const Te=w[X],{object:Se,geometry:Ie,group:Oe}=Te;let je=Te.material;je.allowOverride===!0&&$!==null&&(je=$),Se.layers.test(K.layers)&&_p(Se,B,K,Ie,je,Oe)}}function _p(w,B,K,$,X,ye){w.onBeforeRender(T,B,K,$,X,ye),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(T,B,K,$,w,ye),X.transparent===!0&&X.side===Pi&&X.forceSinglePass===!1?(X.side=xn,X.needsUpdate=!0,T.renderBufferDirect(K,B,$,X,w,ye),X.side=Er,X.needsUpdate=!0,T.renderBufferDirect(K,B,$,X,w,ye),X.side=Pi):T.renderBufferDirect(K,B,$,X,w,ye),w.onAfterRender(T,B,K,$,X,ye)}function Co(w,B,K){B.isScene!==!0&&(B=Ge);const $=S.get(w),X=A.state.lights,ye=A.state.shadowsArray,Te=X.state.version,Se=me.getParameters(w,X.state,ye,B,K),Ie=me.getProgramCacheKey(Se);let Oe=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,$.fog=B.fog;const je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=te.get(w.envMap||$.environment,je),$.envMapRotation=$.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",ot),Oe=new Map,$.programs=Oe);let Ke=Oe.get(Ie);if(Ke!==void 0){if($.currentProgram===Ke&&$.lightsStateVersion===Te)return xp(w,Se),Ke}else Se.uniforms=me.getUniforms(w),w.onBeforeCompile(Se,T),Ke=me.acquireProgram(Se,Ie),Oe.set(Ie,Ke),$.uniforms=Se.uniforms;const ke=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=fe.uniform),xp(w,Se),$.needsLights=xx(w),$.lightsStateVersion=Te,$.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Ke,$.uniformsList=null,Ke}function vp(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=zl.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function xp(w,B){const K=S.get(w);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function _x(w,B,K,$,X){B.isScene!==!0&&(B=Ge),F.resetTextureUnits();const ye=B.fog,Te=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?B.environment:null,Se=W===null?T.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Qs,Ie=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Oe=te.get($.envMap||Te,Ie),je=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ke=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ke=!!K.morphAttributes.position,dt=!!K.morphAttributes.normal,Lt=!!K.morphAttributes.color;let bt=mi;$.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(bt=T.toneMapping);const ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Jt=ft!==void 0?ft.length:0,Fe=S.get($),yn=A.state.lights;if(xe===!0&&(Ae===!0||w!==V)){const zt=w===V&&$.id===q;fe.setState($,w,zt)}let rt=!1;$.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==yn.state.version||Fe.outputColorSpace!==Se||X.isBatchedMesh&&Fe.batching===!1||!X.isBatchedMesh&&Fe.batching===!0||X.isBatchedMesh&&Fe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Fe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Fe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Fe.instancingMorph===!1&&X.morphTexture!==null||Fe.envMap!==Oe||$.fog===!0&&Fe.fog!==ye||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==je||Fe.vertexTangents!==Ke||Fe.morphTargets!==ke||Fe.morphNormals!==dt||Fe.morphColors!==Lt||Fe.toneMapping!==bt||Fe.morphTargetsCount!==Jt)&&(rt=!0):(rt=!0,Fe.__version=$.version);let Hn=Fe.currentProgram;rt===!0&&(Hn=Co($,B,X));let ii=!1,br=!1,es=!1;const pt=Hn.getUniforms(),Xt=Fe.uniforms;if(Ue.useProgram(Hn.program)&&(ii=!0,br=!0,es=!0),$.id!==q&&(q=$.id,br=!0),ii||V!==w){Ue.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),pt.setValue(D,"projectionMatrix",w.projectionMatrix),pt.setValue(D,"viewMatrix",w.matrixWorldInverse);const Ki=pt.map.cameraPosition;Ki!==void 0&&Ki.setValue(D,ve.setFromMatrixPosition(w.matrixWorld)),mt.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,br=!0,es=!0)}if(Fe.needsLights&&(yn.state.directionalShadowMap.length>0&&pt.setValue(D,"directionalShadowMap",yn.state.directionalShadowMap,F),yn.state.spotShadowMap.length>0&&pt.setValue(D,"spotShadowMap",yn.state.spotShadowMap,F),yn.state.pointShadowMap.length>0&&pt.setValue(D,"pointShadowMap",yn.state.pointShadowMap,F)),X.isSkinnedMesh){pt.setOptional(D,X,"bindMatrix"),pt.setOptional(D,X,"bindMatrixInverse");const zt=X.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),pt.setValue(D,"boneTexture",zt.boneTexture,F))}X.isBatchedMesh&&(pt.setOptional(D,X,"batchingTexture"),pt.setValue(D,"batchingTexture",X._matricesTexture,F),pt.setOptional(D,X,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",X._indirectTexture,F),pt.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",X._colorsTexture,F));const qi=K.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&Ee.update(X,K,Hn),(br||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,pt.setValue(D,"receiveShadow",X.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&B.environment!==null&&(Xt.envMapIntensity.value=B.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=mR()),br&&(pt.setValue(D,"toneMappingExposure",T.toneMappingExposure),Fe.needsLights&&vx(Xt,es),ye&&$.fog===!0&&Be.refreshFogUniforms(Xt,ye),Be.refreshMaterialUniforms(Xt,$,Z,k,A.state.transmissionRenderTarget[w.id]),zl.upload(D,vp(Fe),Xt,F)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zl.upload(D,vp(Fe),Xt,F),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pt.setValue(D,"center",X.center),pt.setValue(D,"modelViewMatrix",X.modelViewMatrix),pt.setValue(D,"normalMatrix",X.normalMatrix),pt.setValue(D,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const zt=$.uniformsGroups;for(let Ki=0,ts=zt.length;Ki<ts;Ki++){const yp=zt[Ki];Ce.update(yp,Hn),Ce.bind(yp,Hn)}}return Hn}function vx(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function xx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,B,K){const $=S.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=B,S.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const K=S.get(w);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0};const yx=D.createFramebuffer();this.setRenderTarget=function(w,B=0,K=0){W=w,P=B,z=K;let $=null,X=!1,ye=!1;if(w){const Se=S.get(w);if(Se.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(D.FRAMEBUFFER,Se.__webglFramebuffer),N.copy(w.viewport),O.copy(w.scissor),G=w.scissorTest,Ue.viewport(N),Ue.scissor(O),Ue.setScissorTest(G),q=-1;return}else if(Se.__webglFramebuffer===void 0)F.setupRenderTarget(w);else if(Se.__hasExternalTextures)F.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const je=w.depthTexture;if(Se.__boundDepthTexture!==je){if(je!==null&&S.has(je)&&(w.width!==je.image.width||w.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(w)}}const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Oe=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?$=Oe[B][K]:$=Oe[B],X=!0):w.samples>0&&F.useMultisampledRTT(w)===!1?$=S.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?$=Oe[K]:$=Oe,N.copy(w.viewport),O.copy(w.scissor),G=w.scissorTest}else N.copy(H).multiplyScalar(Z).floor(),O.copy(ie).multiplyScalar(Z).floor(),G=ee;if(K!==0&&($=yx),Ue.bindFramebuffer(D.FRAMEBUFFER,$)&&Ue.drawBuffers(w,$),Ue.viewport(N),Ue.scissor(O),Ue.setScissorTest(G),X){const Se=S.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Se.__webglTexture,K)}else if(ye){const Se=B;for(let Ie=0;Ie<w.textures.length;Ie++){const Oe=S.get(w.textures[Ie]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,K,Se)}}else if(w!==null&&K!==0){const Se=S.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Se.__webglTexture,K)}q=-1},this.readRenderTargetPixels=function(w,B,K,$,X,ye,Te,Se=0){if(!(w&&w.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){Ue.bindFramebuffer(D.FRAMEBUFFER,Ie);try{const Oe=w.textures[Se],je=Oe.format,Ke=Oe.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),!mt.textureFormatReadable(je)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Ke)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-$&&K>=0&&K<=w.height-X&&D.readPixels(B,K,$,X,ge.convert(je),ge.convert(Ke),ye)}finally{const Oe=W!==null?S.get(W).__webglFramebuffer:null;Ue.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,B,K,$,X,ye,Te,Se=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie)if(B>=0&&B<=w.width-$&&K>=0&&K<=w.height-X){Ue.bindFramebuffer(D.FRAMEBUFFER,Ie);const Oe=w.textures[Se],je=Oe.format,Ke=Oe.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),!mt.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),D.readPixels(B,K,$,X,ge.convert(je),ge.convert(Ke),0);const dt=W!==null?S.get(W).__webglFramebuffer:null;Ue.bindFramebuffer(D.FRAMEBUFFER,dt);const Lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await m1(D,Lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.deleteBuffer(ke),D.deleteSync(Lt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,K=0){const $=Math.pow(2,-K),X=Math.floor(w.image.width*$),ye=Math.floor(w.image.height*$),Te=B!==null?B.x:0,Se=B!==null?B.y:0;F.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Te,Se,X,ye),Ue.unbindTexture()};const Sx=D.createFramebuffer(),Mx=D.createFramebuffer();this.copyTextureToTexture=function(w,B,K=null,$=null,X=0,ye=0){let Te,Se,Ie,Oe,je,Ke,ke,dt,Lt;const bt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(K!==null)Te=K.max.x-K.min.x,Se=K.max.y-K.min.y,Ie=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,je=K.min.y,Ke=K.isBox3?K.min.z:0;else{const Xt=Math.pow(2,-X);Te=Math.floor(bt.width*Xt),Se=Math.floor(bt.height*Xt),w.isDataArrayTexture?Ie=bt.depth:w.isData3DTexture?Ie=Math.floor(bt.depth*Xt):Ie=1,Oe=0,je=0,Ke=0}$!==null?(ke=$.x,dt=$.y,Lt=$.z):(ke=0,dt=0,Lt=0);const ft=ge.convert(B.format),Jt=ge.convert(B.type);let Fe;B.isData3DTexture?(F.setTexture3D(B,0),Fe=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(F.setTexture2DArray(B,0),Fe=D.TEXTURE_2D_ARRAY):(F.setTexture2D(B,0),Fe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const yn=D.getParameter(D.UNPACK_ROW_LENGTH),rt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Hn=D.getParameter(D.UNPACK_SKIP_PIXELS),ii=D.getParameter(D.UNPACK_SKIP_ROWS),br=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke);const es=w.isDataArrayTexture||w.isData3DTexture,pt=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const Xt=S.get(w),qi=S.get(B),zt=S.get(Xt.__renderTarget),Ki=S.get(qi.__renderTarget);Ue.bindFramebuffer(D.READ_FRAMEBUFFER,zt.__webglFramebuffer),Ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let ts=0;ts<Ie;ts++)es&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(w).__webglTexture,X,Ke+ts),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(B).__webglTexture,ye,Lt+ts)),D.blitFramebuffer(Oe,je,Te,Se,ke,dt,Te,Se,D.DEPTH_BUFFER_BIT,D.NEAREST);Ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||S.has(w)){const Xt=S.get(w),qi=S.get(B);Ue.bindFramebuffer(D.READ_FRAMEBUFFER,Sx),Ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mx);for(let zt=0;zt<Ie;zt++)es?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xt.__webglTexture,X,Ke+zt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xt.__webglTexture,X),pt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qi.__webglTexture,ye,Lt+zt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qi.__webglTexture,ye),X!==0?D.blitFramebuffer(Oe,je,Te,Se,ke,dt,Te,Se,D.COLOR_BUFFER_BIT,D.NEAREST):pt?D.copyTexSubImage3D(Fe,ye,ke,dt,Lt+zt,Oe,je,Te,Se):D.copyTexSubImage2D(Fe,ye,ke,dt,Oe,je,Te,Se);Ue.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Fe,ye,ke,dt,Lt,Te,Se,Ie,ft,Jt,bt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Fe,ye,ke,dt,Lt,Te,Se,Ie,ft,bt.data):D.texSubImage3D(Fe,ye,ke,dt,Lt,Te,Se,Ie,ft,Jt,bt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,ke,dt,Te,Se,ft,Jt,bt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,ke,dt,bt.width,bt.height,ft,bt.data):D.texSubImage2D(D.TEXTURE_2D,ye,ke,dt,Te,Se,ft,Jt,bt);D.pixelStorei(D.UNPACK_ROW_LENGTH,yn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ii),D.pixelStorei(D.UNPACK_SKIP_IMAGES,br),ye===0&&B.generateMipmaps&&D.generateMipmap(Fe),Ue.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&F.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?F.setTextureCube(w,0):w.isData3DTexture?F.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?F.setTexture2DArray(w,0):F.setTexture2D(w,0),Ue.unbindTexture()},this.resetState=function(){P=0,z=0,W=null,Ue.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}}let Vl=null;function Ht(t,e="success"){Vl==null||Vl(t,e)}function _R(){const[t,e]=L.useState([]),n=L.useRef(0);return Vl=L.useCallback((i,r)=>{const s=++n.current;e(a=>[...a,{id:s,message:i,type:r}]),setTimeout(()=>e(a=>a.filter(o=>o.id!==s)),4e3)},[]),t.length===0?null:E.jsx("div",{style:{position:"fixed",bottom:20,right:20,zIndex:9999,display:"flex",flexDirection:"column",gap:8},children:t.map(i=>E.jsx("div",{style:{padding:"10px 18px",borderRadius:8,fontFamily:"'Inter', sans-serif",fontSize:13,fontWeight:500,color:"#fff",background:i.type==="error"?"#c0392b":i.type==="info"?"#3A72A0":"#3D7C47",boxShadow:"0 4px 16px rgba(0,0,0,0.12)",animation:"toast-in .3s ease",maxWidth:360},children:i.message},i.id))})}const Hs={paternal:{hex:"#2F6B3E",css:"var(--green)",bg:"rgba(47,107,62,0.10)",three:3107646,label:"Paternal"},maternal:{hex:"#1A5C8A",css:"var(--accent)",bg:"rgba(26,92,138,0.10)",three:1727626,label:"Maternal"},sibling:{hex:"#7A3A8A",css:"#7A3A8A",bg:"rgba(122,58,138,0.10)",three:8010378,label:"Sibling branch"},married:{hex:"#8A5A1A",css:"#8A5A1A",bg:"rgba(138,90,26,0.10)",three:9067034,label:"Married in"}};function vR(t,e){const n=[];return e.forEach(i=>{i.type==="marriage"?(i.a===t&&n.push({id:i.b,label:"Spouse",type:"marriage"}),i.b===t&&n.push({id:i.a,label:"Spouse",type:"marriage"})):(i.a===t&&n.push({id:i.b,label:"Child",type:"child"}),i.b===t&&n.push({id:i.a,label:"Parent",type:"parent"}))}),n}function xR(t,e,n){const i=[[t]],r=new Set([t]);for(;i.length;){const s=i.shift(),a=s[s.length-1];if(a===e)return s;for(const o of yR(a,n))r.has(o)||(r.add(o),i.push([...s,o]))}return null}function yR(t,e){const n=[];return e.forEach(i=>{i.a===t&&n.push(i.b),i.b===t&&n.push(i.a)}),n}const SR=14e3,MR=.009,ER=.8,TR=150,Mc=512,wR=256,hx=216,AR=1-hx/Mc,Wg=4;function px(t,e){return e?128:t?122:112}function mx(t,e){return e?110:t?105:95}function jg(t,e){return mx(t,e)*px(t,e)/Mc}function Xg(t,e){const n=t._p.clone();return e==="2d"&&(n.z=0),n}function $g(t,e,n,i,r){const s=Xg(t,r),a=Xg(e,r),o=a.clone().sub(s),l=o.length();if(l<1e-6)return[s,a];o.normalize();const c=jg(t.id===n,t.id===i)+Wg,f=jg(e.id===n,e.id===i)+Wg,h=Math.max(l/2-1,0),d=Math.min(c,h),p=Math.min(f,h);return s.addScaledVector(o,d),a.addScaledVector(o,-p),[s,a]}function CR(t,e,n){var c;const i=document.createElement("canvas");i.width=Mc,i.height=Mc;const r=i.getContext("2d"),s=wR,a=hx,o=px(e,n),l=((c=Hs[t.branch])==null?void 0:c.hex)||"#888";if((e||n)&&(r.beginPath(),r.arc(s,a,o+6,0,Math.PI*2),r.fillStyle=n?l+"55":l+"33",r.fill()),r.beginPath(),r.arc(s,a,o,0,Math.PI*2),r.fillStyle="#FDFBF8",r.fill(),r.beginPath(),r.arc(s,a,o+1,0,Math.PI*2),r.strokeStyle="rgba(0,0,0,0.08)",r.lineWidth=6,r.stroke(),r.beginPath(),r.arc(s,a,o,0,Math.PI*2),r.strokeStyle=l,r.lineWidth=n?14:e?12:10,r.stroke(),r.font=`600 ${n?60:52}px Inter, sans-serif`,r.fillStyle=l,r.textAlign="center",r.textBaseline="middle",r.fillText(t.firstName[0]+t.lastName[0],s,a),r.font="600 34px Inter, sans-serif",r.fillStyle="#2D2A26",r.fillText(t.firstName,s,a+o+46),r.font="500 28px Inter, sans-serif",r.fillStyle="#5E5850",r.fillText(t.lastName,s,a+o+84),t.birth){r.font="400 24px Inter, sans-serif",r.fillStyle="#9A948E";const f=t.birth+(t.death?`–${t.death}`:"");r.fillText(f,s,a+o+120)}return i}function Yg(t,e,n){const i=new aT(CR(t,e,n));i.colorSpace=Tn,i.minFilter=dr,i.magFilter=qt,i.needsUpdate=!0;const r=new Qv({map:i,transparent:!0,depthWrite:!1}),s=new Q1(r),a=mx(e,n);return s.scale.set(a,a,1),s.center.set(.5,AR),s.userData.pid=t.id,s}function bR(t){return t.type==="marriage"?new mT({color:9073488,dashSize:6,gapSize:4,transparent:!0,opacity:.45}):new up({color:12892581,transparent:!0,opacity:.4})}const RR=L.forwardRef(function({people:e,rels:n,selectedId:i,focusedId:r,pathMode:s,graphMode:a,onNodeClick:o,onPathSelect:l,tooltipRef:c},f){const h=L.useRef(null),d=L.useRef(null);return L.useEffect(()=>{const p=new $1;p.background=new et(16118251),p.fog=new op(16118251,800,1600);const _=new gR({antialias:!0});_.setPixelRatio(Math.min(devicePixelRatio,2)),_.setSize(innerWidth,innerHeight),_.shadowMap.enabled=!1;const x=h.current;x.appendChild(_.domElement);const m=new In(50,innerWidth/innerHeight,.1,3e3);m.position.set(0,0,620),p.add(new xT(16777215,1));const u=new vT(16775408,.4);u.position.set(100,200,200),p.add(u);const g={},v=[],M=new MT,A=new Ze;let C=!1,b=0,y=0,T=0,U=Math.PI/2,P=620;const z=new j;let W=!0,q=null;function V(){var Z;if((((Z=d.current)==null?void 0:Z.graphMode)||"2d")==="2d"){m.position.set(z.x,z.y,Math.max(P,180)),m.lookAt(z.x,z.y,0);return}m.position.x=z.x+P*Math.sin(U)*Math.sin(T),m.position.y=z.y+P*Math.cos(U),m.position.z=z.z+P*Math.sin(U)*Math.cos(T),m.lookAt(z)}_.domElement.addEventListener("mousedown",k=>{C=!0,b=k.clientX,y=k.clientY}),window.addEventListener("mousemove",k=>{var pe;if(!C)return;if((((pe=d.current)==null?void 0:pe.graphMode)||"2d")==="2d"){const de=P/620;z.x-=(k.clientX-b)*de,z.y+=(k.clientY-y)*de,b=k.clientX,y=k.clientY,V();return}T-=(k.clientX-b)*.005,U=Math.max(.08,Math.min(Math.PI-.08,U+(k.clientY-y)*.005)),b=k.clientX,y=k.clientY,V()}),window.addEventListener("mouseup",()=>{C=!1}),_.domElement.addEventListener("wheel",k=>{P=Math.max(120,Math.min(1800,P+k.deltaY*.5)),V()},{passive:!0}),_.domElement.style.cursor="grab",_.domElement.addEventListener("mousemove",k=>{var H;if(C)return;A.x=k.clientX/innerWidth*2-1,A.y=-(k.clientY/innerHeight)*2+1,M.setFromCamera(A,m);const Z=Object.values(g).map(ie=>ie.sp),pe=M.intersectObjects(Z,!1),de=c.current;if(de)if(pe.length){const ie=pe[0].object.userData.pid;if(ie!==q){q=ie;const ee=(H=d.current)==null?void 0:H.people,Me=ee==null?void 0:ee.find(xe=>xe.id===ie);Me&&(de.textContent=Me.firstName+" "+Me.lastName+(Me.birth?` · ${Me.birth}${Me.death?"–"+Me.death:""}`:""))}de.classList.add("show"),de.style.left=k.clientX+14+"px",de.style.top=k.clientY-8+"px",_.domElement.style.cursor="pointer"}else q=null,de.classList.remove("show"),_.domElement.style.cursor=C?"grabbing":"grab"}),_.domElement.addEventListener("click",k=>{var H,ie;A.x=k.clientX/innerWidth*2-1,A.y=-(k.clientY/innerHeight)*2+1,M.setFromCamera(A,m);const Z=M.intersectObjects(Object.values(g).map(ee=>ee.sp),!1);if(!Z.length)return;const pe=Z[0].object.userData.pid,de=d.current;de!=null&&de.pathMode?(H=de.onPathSelect)==null||H.call(de,pe):(ie=de==null?void 0:de.onNodeClick)==null||ie.call(de,pe)});function N(){var de,H,ie;if(!W)return;const k=(de=d.current)==null?void 0:de.people,Z=(H=d.current)==null?void 0:H.rels,pe=(ie=d.current)==null?void 0:ie.focusedId;!k||!Z||(k.forEach((ee,Me)=>{var re;const xe=((re=d.current)==null?void 0:re.graphMode)||"2d";if(ee.id===pe){ee._p.set(0,0,xe==="2d"?0:ee._p.z),ee._v.set(0,0,0);return}const Ae=new j;k.forEach((ve,Ne)=>{if(Me===Ne)return;const Ge=new j().subVectors(ee._p,ve._p);xe==="2d"&&(Ge.z=0);const be=Math.max(Ge.lengthSq(),900);Ge.normalize().multiplyScalar(SR/be),Ae.add(Ge)}),xe==="2d"&&(Ae.z=0),Ae.add(ee._p.clone().multiplyScalar(-.0015)),ee._v.add(Ae),ee._v.multiplyScalar(ER),ee._p.add(ee._v),xe==="2d"&&(ee._v.z=0,ee._p.z=D1.lerp(ee._p.z,0,.35))}),Z.forEach(ee=>{var ve;const Me=k.find(Ne=>Ne.id===ee.a),xe=k.find(Ne=>Ne.id===ee.b);if(!Me||!xe)return;const Ae=new j().subVectors(xe._p,Me._p);(((ve=d.current)==null?void 0:ve.graphMode)||"2d")==="2d"&&(Ae.z=0);const re=(Ae.length()-TR)*MR;Ae.normalize().multiplyScalar(re),Me.id!==pe&&Me._v.add(Ae),xe.id!==pe&&xe._v.sub(Ae)}))}function O(){var H,ie,ee,Me;const k=(H=d.current)==null?void 0:H.people,Z=((ie=d.current)==null?void 0:ie.graphMode)||"2d",pe=(ee=d.current)==null?void 0:ee.selectedId,de=(Me=d.current)==null?void 0:Me.focusedId;k&&v.forEach(xe=>{const Ae=k.find(Ne=>Ne.id===xe.a),re=k.find(Ne=>Ne.id===xe.b);if(!Ae||!re)return;const ve=$g(Ae,re,pe,de,Z);xe.geo.setFromPoints(ve),xe.type==="marriage"&&xe.line.computeLineDistances()})}let G=0,Y;function ne(){var k;if(Y=requestAnimationFrame(ne),G++,G%2===0){N();const Z=((k=d.current)==null?void 0:k.graphMode)||"2d";Object.values(g).forEach(({sp:pe,p:de})=>{const H=de._p.clone();Z==="2d"&&(H.z=0),pe.position.lerp(H,.12)}),O()}_.render(p,m)}function oe(){m.aspect=innerWidth/innerHeight,m.updateProjectionMatrix(),_.setSize(innerWidth,innerHeight)}return window.addEventListener("resize",oe),V(),ne(),setTimeout(()=>{W=!1},7e3),d.current={scene:p,renderer:_,camera:m,nodeMap:g,edgeArr:v,ray:M,mo:A,simOn:W,ct:z,updCam:V,people:null,rels:null,selectedId:null,focusedId:null,pathMode:!1,graphMode:"2d",onNodeClick:null,onPathSelect:null,setSimOn:k=>{W=k},getSimOn:()=>W,resetView:()=>{T=0,U=Math.PI/2,P=620,z.set(0,0,0),V()}},()=>{cancelAnimationFrame(Y),window.removeEventListener("resize",oe),x&&_.domElement.parentNode===x&&x.removeChild(_.domElement),_.dispose()}},[]),L.useEffect(()=>{const p=d.current;if(!p)return;const{scene:_,nodeMap:x,edgeArr:m}=p;e.forEach((u,g)=>{if(!u._p){const v=g/e.length*Math.PI*2,M=140+Math.random()*120;u._p=new j(Math.cos(v)*M+(Math.random()-.5)*40,Math.sin(v)*M+(Math.random()-.5)*40,(Math.random()-.5)*50),u._v=new j}}),Object.values(x).forEach(u=>_.remove(u.sp)),m.forEach(u=>_.remove(u.line)),m.length=0,Object.keys(x).forEach(u=>delete x[u]),e.forEach(u=>{const g=u.id===i,v=u.id===r,M=Yg(u,g,v);M.position.copy(u._p),_.add(M),x[u.id]={sp:M,p:u}}),n.forEach(u=>{const g=e.find(y=>y.id===u.a),v=e.find(y=>y.id===u.b);if(!g||!v)return;const M=$g(g,v,i,r,a||"2d"),A=new Vn().setFromPoints(M),C=bR(u),b=new sT(A,C);u.type==="marriage"&&b.computeLineDistances(),_.add(b),m.push({line:b,a:u.a,b:u.b,type:u.type,geo:A,mat:C})}),p.people=e,p.rels=n},[e,n,i,r,a]),L.useEffect(()=>{const p=d.current;p&&(p.selectedId=i,p.focusedId=r,p.pathMode=s,p.graphMode=a,p.updCam(),p.onNodeClick=o,p.onPathSelect=l)},[i,r,s,a,o,l]),L.useEffect(()=>{const p=d.current;if(!p)return;a==="3d"&&e.forEach(x=>{Math.abs(x._p.z)<1&&(x._p.z=(Math.random()-.5)*140)}),p.setSimOn(!0),p.updCam();const _=setTimeout(()=>p.setSimOn(!1),3500);return()=>clearTimeout(_)},[a,e]),L.useEffect(()=>{const p=d.current;if(!p)return;const _={resetView:p.resetView,setSimOn:p.setSimOn,getSimOn:p.getSimOn,recenter:()=>{p.ct.set(0,0,0),p.updCam()},shiftToOrigin:x=>{const m=e.find(g=>g.id===x);if(!m)return;const u=m._p.clone();e.forEach(g=>g._p.sub(u)),p.setSimOn(!0),setTimeout(()=>p.setSimOn(!1),5e3),p.ct.set(0,0,0),p.resetView()},highlightPath:x=>{const{nodeMap:m,edgeArr:u}=p,g=new Set(x);Object.values(m).forEach(({sp:v,p:M})=>{v.material.opacity=x.length===0||g.has(M.id)?1:.15}),u.forEach(v=>{const M=x.length===0||g.has(v.a)&&g.has(v.b)&&(x.indexOf(v.a)===x.indexOf(v.b)-1||x.indexOf(v.b)===x.indexOf(v.a)-1);v.line.material.opacity=x.length===0?v.type==="marriage"?.55:.5:M?1:.06,M&&x.length>0?v.line.material.color=new et(4029511):x.length===0&&(v.line.material.color=new et(v.type==="marriage"?9073488:12892581))})},refreshNode:x=>{const{nodeMap:m,scene:u}=p,g=m[x];if(!g)return;u.remove(g.sp);const v=g.p,M=Yg(v,v.id===p.selectedId,v.id===p.focusedId);M.position.copy(v._p),u.add(M),m[x]={sp:M,p:v}},startSim:(x=5e3)=>{p.setSimOn(!0),setTimeout(()=>p.setSimOn(!1),x)}};h.current&&(h.current.__sceneApi=_),f&&(typeof f=="function"?f({__sceneApi:_}):f.current={__sceneApi:_})}),E.jsx("div",{ref:h,style:{position:"fixed",inset:0,zIndex:0}})}),PR="_topbar_30rkj_1",LR="_logo_30rkj_7",NR="_logoLeaf_30rkj_10",DR="_logoText_30rkj_11",IR="_sep_30rkj_15",UR="_searchWrap_30rkj_18",FR="_searchInput_30rkj_19",OR="_searchIco_30rkj_27",kR="_searchResults_30rkj_31",BR="_srItem_30rkj_37",zR="_searchEmpty_30rkj_43",VR="_srAvatar_30rkj_46",HR="_srName_30rkj_50",GR="_srDates_30rkj_51",WR="_tbtn_30rkj_52",jR="_pathBtnActive_30rkj_58",XR="_addBtn_30rkj_59",$R="_viewToggle_30rkj_61",YR="_viewBtn_30rkj_65",qR="_viewBtnActive_30rkj_70",KR="_focusLabel_30rkj_75",ZR="_focusLabelClose_30rkj_82",JR="_focusLabelAvatar_30rkj_87",QR="_pathbar_30rkj_94",eP="_pathcopy_30rkj_101",tP="_pathlabel_30rkj_104",nP="_pathhelp_30rkj_107",iP="_pathslots_30rkj_110",rP="_psel_30rkj_113",sP="_pselEmpty_30rkj_113",aP="_pathslotLabel_30rkj_123",oP="_pathsep_30rkj_126",lP="_pathclear_30rkj_127",cP="_pathbanner_30rkj_135",uP="_pbtext_30rkj_141",Xe={topbar:PR,logo:LR,logoLeaf:NR,logoText:DR,sep:IR,searchWrap:UR,searchInput:FR,searchIco:OR,searchResults:kR,srItem:BR,searchEmpty:zR,srAvatar:VR,srName:HR,srDates:GR,tbtn:WR,pathBtnActive:jR,addBtn:XR,viewToggle:$R,viewBtn:YR,viewBtnActive:qR,focusLabel:KR,focusLabelClose:ZR,focusLabelAvatar:JR,pathbar:QR,pathcopy:eP,pathlabel:tP,pathhelp:nP,pathslots:iP,psel:rP,pselEmpty:sP,pathslotLabel:aP,pathsep:oP,pathclear:lP,pathbanner:cP,pbtext:uP};function qg(t){return(t||"").normalize("NFD").replace(new RegExp("\\p{Diacritic}","gu"),"").toLowerCase().trim()}function dP({people:t,rels:e,focusedId:n,pathMode:i,graphMode:r,is3DAvailable:s,onSetFocus:a,onOpenPanel:o,onTogglePathMode:l,onToggleGraphMode:c,onResetView:f,onOpenModal:h,sceneRef:d}){var ne,oe;const[p,_]=L.useState(""),[x,m]=L.useState(!1),[u,g]=L.useState(null),[v,M]=L.useState(null),[A,C]=L.useState(null),b=L.useRef(null),y=qg(p),T=y?t.filter(k=>qg([k.firstName,k.lastName,k.maiden,`${k.firstName} ${k.lastName}`,k.birth].filter(Boolean).join(" ")).includes(y)).slice(0,8):[],U=n?t.find(k=>k.id===n):null,P=k=>{m(!1),_(""),a(k.id),o(k.id)},z=L.useCallback(()=>{T.length!==0&&P(T[0])},[T]),W=()=>{var k,Z;i?(g(null),M(null),C(null),(Z=(k=d.current)==null?void 0:k.__sceneApi)==null||Z.highlightPath([])):(g(null),M(null),C(null)),l()},q=()=>{var k,Z;g(null),M(null),C(null),(Z=(k=d.current)==null?void 0:k.__sceneApi)==null||Z.highlightPath([]),i&&l()},V=L.useCallback(k=>{var Z,pe;if(u){if(!v&&k!==u){M(k);const de=xR(u,k,e),H=t.find(ee=>ee.id===u),ie=t.find(ee=>ee.id===k);if(!de)C(`No connection found between <strong>${H.firstName}</strong> and <strong>${ie.firstName}</strong>.`);else{const ee=de.length-1,Me=de.length;C(`<strong>${H.firstName} ${H.lastName}</strong> and <strong>${ie.firstName} ${ie.lastName}</strong> are connected by <strong>${ee} relationship${ee!==1?"s":""}</strong> across <strong>${Me} node${Me!==1?"s":""}</strong>.`),(pe=(Z=d.current)==null?void 0:Z.__sceneApi)==null||pe.highlightPath(de)}}}else{g(k);const de=t.find(H=>H.id===k);de&&C(`<strong>${de.firstName} ${de.lastName}</strong> selected as the first person. Click a second person to see how they are connected.`)}},[u,v,t,e,d]);L.useEffect(()=>{if(!(typeof window>"u"))return window.__topBarPathSelect=V,()=>{window.__topBarPathSelect===V&&delete window.__topBarPathSelect}},[V]);const N=()=>{var k,Z;(Z=(k=d.current)==null?void 0:k.__sceneApi)==null||Z.startSim(4e3),a(null)},O=u?t.find(k=>k.id===u):null,G=v?t.find(k=>k.id===v):null,Y=u?v?"Connection found. Review the highlighted path below.":`Step 2: ${(O==null?void 0:O.firstName)||"First person"} selected. Click the second person.`:"Step 1: Click the first person in the tree.";return E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:Xe.topbar,children:[E.jsxs("div",{className:Xe.logo,children:[E.jsxs("svg",{className:Xe.logoLeaf,viewBox:"0 0 26 26",fill:"none",children:[E.jsx("path",{d:"M13 3C7.5 3 4 8 4 13c0 4.5 3 8 9 9.5C19 21 22 17 22 13 22 7.5 18 3 13 3z",fill:"#3D7C47",opacity:".15"}),E.jsx("path",{d:"M13 22.5V10M13 10C13 10 9 13 7 17M13 10C13 10 17 13 19 17",stroke:"#3D7C47",strokeWidth:"1.5",strokeLinecap:"round"})]}),E.jsx("span",{className:Xe.logoText,children:"Kin"})]}),E.jsx("div",{className:Xe.sep}),E.jsxs("div",{className:Xe.searchWrap,ref:b,children:[E.jsxs("svg",{className:Xe.searchIco,viewBox:"0 0 16 16",fill:"none",children:[E.jsx("circle",{cx:"7",cy:"7",r:"4.5",stroke:"currentColor",strokeWidth:"1.3"}),E.jsx("path",{d:"M10.5 10.5L13.5 13.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]}),E.jsx("input",{className:Xe.searchInput,type:"text",placeholder:"Search family members…",autoComplete:"off",value:p,onChange:k=>{_(k.target.value),m(!0)},onFocus:()=>p.trim()&&m(!0),onBlur:()=>setTimeout(()=>m(!1),200),onKeyDown:k=>{k.key==="Enter"&&(k.preventDefault(),z())}}),x&&y&&E.jsx("div",{className:Xe.searchResults,children:T.length>0?T.map(k=>{const Z=Hs[k.branch];return E.jsxs("div",{className:Xe.srItem,onMouseDown:()=>P(k),children:[E.jsx("div",{className:Xe.srAvatar,style:{background:(Z==null?void 0:Z.bg)||"#eee",color:(Z==null?void 0:Z.hex)||"#333"},children:k.firstName[0]+k.lastName[0]}),E.jsxs("div",{children:[E.jsxs("div",{className:Xe.srName,children:[k.firstName," ",k.lastName]}),E.jsxs("div",{className:Xe.srDates,children:[k.birth||""," ",k.maiden?`· née ${k.maiden}`:""]})]})]},k.id)}):E.jsx("div",{className:Xe.searchEmpty,children:"No matching family members found."})})]}),E.jsx("button",{className:`${Xe.tbtn} ${i?Xe.pathBtnActive:""}`,onClick:W,children:"Find Connection"}),s&&E.jsxs("div",{className:Xe.viewToggle,"aria-label":"Graph view mode",children:[E.jsx("button",{className:`${Xe.viewBtn} ${r==="2d"?Xe.viewBtnActive:""}`,onClick:r==="3d"?c:void 0,type:"button",children:"2D View"}),E.jsx("button",{className:`${Xe.viewBtn} ${r==="3d"?Xe.viewBtnActive:""}`,onClick:r==="2d"?c:void 0,type:"button",children:"3D View"})]}),E.jsx("button",{className:`${Xe.tbtn} ${Xe.addBtn}`,onClick:h,children:"+ Add Person"}),E.jsx("button",{className:Xe.tbtn,onClick:f,children:"Reset View"})]}),U&&E.jsxs("div",{className:Xe.focusLabel,children:[E.jsx("div",{className:Xe.focusLabelAvatar,style:{background:((ne=Hs[U.branch])==null?void 0:ne.bg)||"#eee",color:((oe=Hs[U.branch])==null?void 0:oe.hex)||"#888"},children:U.firstName[0]+U.lastName[0]}),E.jsxs("span",{children:["Viewing connections for ",E.jsxs("strong",{children:[U.firstName," ",U.lastName]})]}),E.jsx("button",{className:Xe.focusLabelClose,onClick:N,title:"Clear focus",children:"×"})]}),i&&E.jsxs("div",{className:Xe.pathbar,children:[E.jsxs("div",{className:Xe.pathcopy,children:[E.jsx("span",{className:Xe.pathlabel,children:"Find Connection"}),E.jsx("span",{className:Xe.pathhelp,children:Y})]}),E.jsxs("div",{className:Xe.pathslots,children:[E.jsxs("div",{className:O?Xe.psel:Xe.pselEmpty,children:[E.jsx("span",{className:Xe.pathslotLabel,children:"First person"}),E.jsx("span",{children:O?`${O.firstName} ${O.lastName}`:"Not selected yet"})]}),E.jsx("span",{className:Xe.pathsep,children:"→"}),E.jsxs("div",{className:G?Xe.psel:Xe.pselEmpty,children:[E.jsx("span",{className:Xe.pathslotLabel,children:"Second person"}),E.jsx("span",{children:G?`${G.firstName} ${G.lastName}`:"Not selected yet"})]})]}),E.jsx("button",{className:Xe.pathclear,onClick:q,children:"✕ Cancel"})]}),A&&E.jsxs("div",{className:Xe.pathbanner,children:[E.jsx("p",{className:Xe.pbtext,dangerouslySetInnerHTML:{__html:A}}),E.jsx("button",{onClick:()=>{var k,Z;C(null),(Z=(k=d.current)==null?void 0:k.__sceneApi)==null||Z.highlightPath([])},children:"Dismiss"})]})]})}const fP="_panel_nnk9b_1",hP="_open_nnk9b_8",pP="_pclose_nnk9b_9",mP="_photoWrap_nnk9b_16",gP="_photo_nnk9b_16",_P="_avatar_nnk9b_21",vP="_body_nnk9b_29",xP="_pname_nnk9b_34",yP="_pmaiden_nnk9b_38",SP="_pdates_nnk9b_39",MP="_branchBadge_nnk9b_40",EP="_psect_nnk9b_44",TP="_pbio_nnk9b_49",wP="_tabRow_nnk9b_50",AP="_tabBtn_nnk9b_53",CP="_tabBtnActive_nnk9b_60",bP="_rels_nnk9b_63",RP="_rchip_nnk9b_64",PP="_rchipAvatar_nnk9b_69",LP="_rchipInfo_nnk9b_73",NP="_rchipName_nnk9b_74",DP="_rchipLbl_nnk9b_77",IP="_rchipActions_nnk9b_81",UP="_rchipBtn_nnk9b_82",FP="_docs_nnk9b_88",OP="_ditem_nnk9b_89",kP="_dico_nnk9b_93",BP="_uploadBtn_nnk9b_94",zP="_emptyState_nnk9b_101",VP="_exploreCard_nnk9b_106",HP="_exploreTitle_nnk9b_110",GP="_exploreBody_nnk9b_113",WP="_linkBox_nnk9b_116",jP="_actionRow_nnk9b_121",XP="_primaryAction_nnk9b_124",$P="_secondaryAction_nnk9b_124",YP="_summaryGrid_nnk9b_134",qP="_summaryCard_nnk9b_137",KP="_summaryCount_nnk9b_141",ZP="_summaryLabel_nnk9b_144",JP="_mediaCard_nnk9b_147",QP="_mediaPreview_nnk9b_150",e3="_mediaMeta_nnk9b_153",t3="_factsGrid_nnk9b_157",n3="_factRow_nnk9b_158",i3="_factLabel_nnk9b_159",r3="_factValue_nnk9b_163",s3="_factActions_nnk9b_164",a3="_factIconBtn_nnk9b_165",o3="_storyCard_nnk9b_173",l3="_storyTitle_nnk9b_177",c3="_storyBody_nnk9b_180",u3="_storyMeta_nnk9b_184",d3="_storyInput_nnk9b_187",f3="_storyTextarea_nnk9b_194 _storyInput_nnk9b_187",ae={panel:fP,open:hP,pclose:pP,photoWrap:mP,photo:gP,avatar:_P,body:vP,pname:xP,pmaiden:yP,pdates:SP,branchBadge:MP,psect:EP,pbio:TP,tabRow:wP,tabBtn:AP,tabBtnActive:CP,rels:bP,rchip:RP,rchipAvatar:PP,rchipInfo:LP,rchipName:NP,rchipLbl:DP,rchipActions:IP,rchipBtn:UP,docs:FP,ditem:OP,dico:kP,uploadBtn:BP,emptyState:zP,exploreCard:VP,exploreTitle:HP,exploreBody:GP,linkBox:WP,actionRow:jP,primaryAction:XP,secondaryAction:$P,summaryGrid:YP,summaryCard:qP,summaryCount:KP,summaryLabel:ZP,mediaCard:JP,mediaPreview:QP,mediaMeta:e3,factsGrid:t3,factRow:n3,factLabel:i3,factValue:r3,factActions:s3,factIconBtn:a3,storyCard:o3,storyTitle:l3,storyBody:c3,storyMeta:u3,storyInput:d3,storyTextarea:f3};function h3({person:t,people:e,rels:n,onClose:i,onViewPerson:r,onFocusPerson:s,onPhotoChange:a,onRelationshipAdded:o,onRelationshipRemoved:l}){var Ae;const c=L.useRef(null),[f,h]=L.useState(!1),[d,p]=L.useState(!1),[_,x]=L.useState("parent"),[m,u]=L.useState(""),[g,v]=L.useState(!1),[M,A]=L.useState([]),[C,b]=L.useState(!1),[y,T]=L.useState({title:"",body:""}),[U,P]=L.useState(!1),[z,W]=L.useState("profile"),{activeTreeId:q}=Yh();if(L.useEffect(()=>{t&&(A([]),P(!1),T({title:"",body:""}),W("profile"),b(!1),Vm.list(t.id).then(re=>{A(re),b(!0)}).catch(()=>{A([]),b(!0)}))},[t]),!t)return null;const V=vR(t.id,n),N=Hs[t.branch],O=(N==null?void 0:N.hex)||"#888",G=t.public_slug?`${window.location.origin}/p/${t.public_slug}`:null,Y=t.photo?1:0,ne=((Ae=t.docs)==null?void 0:Ae.length)||0,oe=t.birth?t.death?`${t.birth} – ${t.death} · Deceased`:`b. ${t.birth}`:"",k=()=>{var re;return(re=c.current)==null?void 0:re.click()},Z=re=>{var Ge;const ve=(Ge=re.target.files)==null?void 0:Ge[0];if(!ve)return;const Ne=new FileReader;Ne.onload=async be=>{try{await a(t.id,be.target.result)}catch(ht){Ht(ht.message||"Failed to save photo","error")}finally{re.target.value=""}},Ne.readAsDataURL(ve)},pe=re=>re==="parent"?{background:"var(--tag-parent-bg)",color:"var(--tag-parent)"}:re==="marriage"?{background:"var(--tag-marry-bg)",color:"var(--tag-marry)"}:{background:"var(--tag-child-bg)",color:"var(--tag-child)"},de=async()=>{if(!(!m||!q)){v(!0);try{let re,ve,Ne;_==="parent"?(Ne="parent_child",re=m,ve=t.id):_==="child"?(Ne="parent_child",re=t.id,ve=m):_==="spouse"?(Ne="marriage",re=t.id,ve=m):_==="sibling"&&(Ne="sibling",re=t.id,ve=m);const Ge=await pc.create({treeId:q,type:Ne,profileA:re,profileB:ve});o==null||o(Ge),p(!1),u(""),Ht("Connection added","info")}catch(re){console.error("[Kin] Failed to add relationship:",re),Ht(re.message||"Failed to add connection","error")}finally{v(!1)}}},H=async re=>{try{await pc.remove(re),l==null||l(re),Ht("Connection removed","info")}catch(ve){console.error("[Kin] Failed to remove relationship:",ve),Ht(ve.message||"Failed to remove connection","error")}},ie=new Set(V.map(re=>re.id)),ee=new Set(n.filter(re=>re.type==="marriage").flatMap(re=>[re.a,re.b])),Me=ee.has(t.id),xe=e.filter(re=>re.id===t.id||ie.has(re.id)?!1:_==="spouse"?!Me&&!ee.has(re.id):!0);return E.jsxs("div",{className:`${ae.panel} ${ae.open}`,children:[E.jsx("button",{className:ae.pclose,onClick:i,children:"✕"}),E.jsx("div",{className:ae.photoWrap,children:t.photo?E.jsx("img",{className:ae.photo,src:t.photo,alt:""}):E.jsx("div",{className:ae.avatar,style:{color:O,background:(N==null?void 0:N.bg)||"#eee"},children:t.firstName[0]+t.lastName[0]})}),E.jsxs("div",{className:ae.body,children:[E.jsxs("div",{className:ae.pname,children:[t.firstName," ",t.lastName]}),t.maiden&&E.jsxs("div",{className:ae.pmaiden,children:["née ",t.maiden]}),E.jsx("div",{className:ae.pdates,children:oe}),E.jsx("div",{className:ae.branchBadge,style:{background:(N==null?void 0:N.bg)||"#eee",color:O},children:(N==null?void 0:N.label)||t.branch}),E.jsxs("div",{className:ae.tabRow,role:"tablist","aria-label":"Person details views",children:[E.jsx("button",{className:`${ae.tabBtn} ${z==="profile"?ae.tabBtnActive:""}`,onClick:()=>W("profile"),role:"tab","aria-selected":z==="profile",children:"Profile Details"}),E.jsx("button",{className:`${ae.tabBtn} ${z==="explore"?ae.tabBtnActive:""}`,onClick:()=>W("explore"),role:"tab","aria-selected":z==="explore",children:"Share & Explore"})]}),z==="profile"&&E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ae.psect,children:"Biography"}),E.jsx("div",{className:ae.pbio,children:t.bio||"No biography on record."}),t.facts&&Object.keys(t.facts).length>0&&(()=>{const re=new Set(["gender","birth_year","death_year","biography"]),ve=Object.entries(t.facts).filter(([Ne])=>!re.has(Ne));return ve.length===0?null:E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ae.psect,children:"Details"}),E.jsx("div",{className:ae.factsGrid,children:ve.map(([Ne,Ge])=>E.jsxs("div",{className:ae.factRow,children:[E.jsx("span",{className:ae.factLabel,children:Ne.replace(/_/g," ")}),E.jsx("span",{className:ae.factValue,children:Ge.map(be=>be.value).join(", ")}),t.isOwner&&Ge.map(be=>E.jsxs("span",{className:ae.factActions,children:[E.jsx("button",{className:ae.factIconBtn,title:be.verified?"Unverify":"Verify",onClick:async()=>{try{await zm.verify(be.id),Ht(be.verified?"Unverified":"Verified","info")}catch(ht){Ht(ht.message,"error")}},children:be.verified?"✅":"☑️"}),E.jsx("button",{className:ae.factIconBtn,title:be.locked?"Unlock":"Lock",onClick:async()=>{try{await zm.lock(be.id),Ht(be.locked?"Unlocked":"Locked","info")}catch(ht){Ht(ht.message,"error")}},children:be.locked?"🔒":"🔓"})]},be.id))]},Ne))})]})})(),E.jsx("div",{className:ae.psect,children:"Connections"}),E.jsxs("div",{className:ae.rels,children:[V.map(re=>{const ve=e.find(be=>be.id===re.id);if(!ve)return null;const Ne=Hs[ve.branch],Ge=n.find(be=>be.a===t.id&&be.b===re.id||be.b===t.id&&be.a===re.id);return E.jsxs("div",{className:ae.rchip,children:[E.jsx("div",{className:ae.rchipAvatar,style:{background:(Ne==null?void 0:Ne.bg)||"#eee",color:(Ne==null?void 0:Ne.hex)||"#333"},children:ve.firstName[0]+ve.lastName[0]}),E.jsxs("div",{className:ae.rchipInfo,children:[E.jsxs("div",{className:ae.rchipName,children:[ve.firstName," ",ve.lastName]}),E.jsx("span",{className:ae.rchipLbl,style:pe(re.type),children:re.label})]}),E.jsxs("div",{className:ae.rchipActions,children:[E.jsx("button",{className:ae.rchipBtn,onClick:()=>r(ve.id),children:"View"}),E.jsx("button",{className:ae.rchipBtn,onClick:()=>s(ve.id),children:"Focus"}),Ge&&E.jsx("button",{className:ae.rchipBtn,style:{color:"#c44",background:"rgba(204,68,68,0.1)"},onClick:()=>H(Ge.id),title:"Remove connection",children:"✕"})]})]},re.id+re.type)}),V.length===0&&E.jsx("div",{style:{fontSize:13,color:"var(--text-muted)",padding:"4px 0"},children:"No connections yet."})]}),d?E.jsxs("div",{style:{marginTop:8,padding:10,borderRadius:8,background:"var(--surface2)",border:"1px solid var(--border)"},children:[E.jsx("div",{style:{display:"flex",gap:6,marginBottom:6},children:E.jsxs("select",{value:_,onChange:re=>x(re.target.value),style:{flex:1,padding:"6px 8px",fontSize:12,borderRadius:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontFamily:"'Inter', sans-serif"},children:[E.jsxs("option",{value:"parent",children:["Parent of ",t.firstName]}),E.jsxs("option",{value:"child",children:["Child of ",t.firstName]}),E.jsxs("option",{value:"spouse",disabled:Me,children:["Spouse / Partner",Me?" (already linked)":""]}),E.jsx("option",{value:"sibling",children:"Sibling"})]})}),E.jsxs("select",{value:m,onChange:re=>u(re.target.value),style:{width:"100%",padding:"6px 8px",fontSize:12,borderRadius:6,border:"1px solid var(--border)",background:"var(--surface)",color:"var(--text)",fontFamily:"'Inter', sans-serif",marginBottom:6},children:[E.jsx("option",{value:"",children:"— select person —"}),xe.map(re=>E.jsxs("option",{value:re.id,children:[re.firstName," ",re.lastName]},re.id))]}),_==="spouse"&&xe.length===0&&E.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:6},children:"Only people without an existing spouse can be linked as a partner."}),E.jsxs("div",{style:{display:"flex",gap:6},children:[E.jsx("button",{className:ae.rchipBtn,onClick:de,disabled:!m||g,style:{flex:1,padding:"6px 0",textAlign:"center"},children:g?"Saving…":"Add"}),E.jsx("button",{className:ae.rchipBtn,onClick:()=>{p(!1),u("")},style:{padding:"6px 10px"},children:"Cancel"})]})]}):E.jsx("button",{className:ae.uploadBtn,style:{marginTop:6},onClick:()=>p(!0),children:"+ Add Connection"}),E.jsx("div",{className:ae.psect,children:"Documents"}),E.jsxs("div",{className:ae.docs,children:[(t.docs||[]).map((re,ve)=>E.jsxs("div",{className:ae.ditem,children:[E.jsx("span",{className:ae.dico,children:"📄"}),E.jsx("span",{children:re})]},ve)),(t.docs||[]).length===0&&E.jsx("div",{className:ae.emptyState,children:"No documents added yet."})]}),E.jsx("div",{className:ae.psect,children:"Stories & Memories"}),M.map(re=>E.jsxs("div",{className:ae.storyCard,children:[E.jsx("div",{className:ae.storyTitle,children:re.title}),E.jsx("div",{className:ae.storyBody,children:re.body}),E.jsxs("div",{className:ae.storyMeta,children:[re.author_name||"Unknown"," · ",new Date(re.created_at).toLocaleDateString()]})]},re.id)),M.length===0&&!U&&C&&E.jsx("div",{className:ae.emptyState,children:"No stories yet. Be the first to share a memory."}),U?E.jsxs("div",{style:{marginTop:6},children:[E.jsx("input",{className:ae.storyInput,placeholder:"Story title",value:y.title,onChange:re=>T(ve=>({...ve,title:re.target.value}))}),E.jsx("textarea",{className:ae.storyTextarea,placeholder:"Share a memory or story…",value:y.body,onChange:re=>T(ve=>({...ve,body:re.target.value}))}),E.jsxs("div",{style:{display:"flex",gap:6},children:[E.jsx("button",{className:ae.rchipBtn,style:{flex:1,padding:"6px 0",textAlign:"center"},disabled:!y.title.trim()||!y.body.trim(),onClick:async()=>{try{const re=await Vm.create({profileId:t.id,title:y.title.trim(),body:y.body.trim()});A(ve=>[re,...ve]),T({title:"",body:""}),P(!1),Ht("Story added","info")}catch(re){Ht(re.message||"Failed to save story","error")}},children:"Save"}),E.jsx("button",{className:ae.rchipBtn,style:{padding:"6px 10px"},onClick:()=>{P(!1),T({title:"",body:""})},children:"Cancel"})]})]}):E.jsx("button",{className:ae.uploadBtn,style:{marginTop:6},onClick:()=>P(!0),children:"+ Add Story"}),E.jsx("button",{className:ae.uploadBtn,onClick:k,children:"Upload Photo"}),E.jsx("input",{ref:c,type:"file",accept:"image/*",style:{display:"none"},onChange:Z})]}),z==="explore"&&E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ae.psect,children:"Public Page"}),E.jsxs("div",{className:ae.exploreCard,children:[E.jsx("div",{className:ae.exploreTitle,children:"What other relatives can browse"}),E.jsx("div",{className:ae.exploreBody,children:"Use this view as the ancestry-style, read-only surface for stories, photos, and documents that should feel safe to explore."}),G?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ae.linkBox,children:G}),E.jsxs("div",{className:ae.actionRow,children:[E.jsx("button",{className:ae.primaryAction,onClick:()=>window.open(G,"_blank","noopener,noreferrer"),children:"Open Public Page"}),E.jsx("button",{className:ae.secondaryAction,onClick:()=>{navigator.clipboard.writeText(G),Ht("Public link copied","info")},children:"Copy Link"})]})]}):E.jsx("div",{className:ae.emptyState,children:"No public page has been generated for this person yet."})]}),E.jsx("div",{className:ae.psect,children:"Explore Summary"}),E.jsxs("div",{className:ae.summaryGrid,children:[E.jsxs("div",{className:ae.summaryCard,children:[E.jsx("div",{className:ae.summaryCount,children:M.length}),E.jsx("div",{className:ae.summaryLabel,children:"Stories"})]}),E.jsxs("div",{className:ae.summaryCard,children:[E.jsx("div",{className:ae.summaryCount,children:Y}),E.jsx("div",{className:ae.summaryLabel,children:"Photos"})]}),E.jsxs("div",{className:ae.summaryCard,children:[E.jsx("div",{className:ae.summaryCount,children:ne}),E.jsx("div",{className:ae.summaryLabel,children:"Documents"})]})]}),E.jsx("div",{className:ae.psect,children:"Stories People Can Read"}),M.length>0?M.map(re=>E.jsxs("div",{className:ae.storyCard,children:[E.jsx("div",{className:ae.storyTitle,children:re.title}),E.jsx("div",{className:ae.storyBody,children:re.body}),E.jsxs("div",{className:ae.storyMeta,children:[re.author_name||"Unknown"," · ",new Date(re.created_at).toLocaleDateString()]})]},re.id)):E.jsx("div",{className:ae.emptyState,children:"No public stories are available for this person yet."}),E.jsx("div",{className:ae.psect,children:"Photos & Documents"}),t.photo&&E.jsxs("div",{className:ae.mediaCard,children:[E.jsx("img",{className:ae.mediaPreview,src:t.photo,alt:`${t.firstName} ${t.lastName}`}),E.jsx("div",{className:ae.mediaMeta,children:"Profile photo"})]}),(t.docs||[]).map((re,ve)=>E.jsxs("div",{className:ae.ditem,children:[E.jsx("span",{className:ae.dico,children:"📄"}),E.jsx("span",{children:re})]},`${re}-${ve}`)),!t.photo&&ne===0&&E.jsx("div",{className:ae.emptyState,children:"No public photos or documents are available yet."})]}),t.invite_token&&!t.claimed_by&&E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ae.psect,children:"Invite Link"}),E.jsxs("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:6},children:["Share this link so ",t.firstName," can claim their profile:"]}),E.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[E.jsx("input",{readOnly:!0,value:`${window.location.origin}/join?token=${t.invite_token}`,style:{flex:1,padding:"7px 10px",fontSize:12,borderRadius:6,border:"1px solid var(--border)",background:"var(--surface2)",fontFamily:"monospace",color:"var(--text-dim)"},onClick:re=>re.target.select()}),E.jsx("button",{className:ae.rchipBtn,onClick:()=>{navigator.clipboard.writeText(`${window.location.origin}/join?token=${t.invite_token}`),h(!0),setTimeout(()=>h(!1),2e3)},children:f?"✓ Copied":"Copy"})]})]}),t.claimed_by&&E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ae.psect,children:"Profile Status"}),E.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"3px 9px",borderRadius:20,fontSize:11,fontWeight:600,background:"var(--tag-marry-bg)",color:"var(--tag-marry)"},children:"✓ Profile Claimed"})]}),t.public_slug&&E.jsxs(E.Fragment,{children:[E.jsx("div",{className:ae.psect,children:"Public Profile"}),E.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[E.jsx("input",{readOnly:!0,value:`${window.location.origin}/p/${t.public_slug}`,style:{flex:1,padding:"7px 10px",fontSize:12,borderRadius:6,border:"1px solid var(--border)",background:"var(--surface2)",fontFamily:"monospace",color:"var(--text-dim)"},onClick:re=>re.target.select()}),E.jsx("button",{className:ae.rchipBtn,onClick:()=>{navigator.clipboard.writeText(`${window.location.origin}/p/${t.public_slug}`),Ht("Public URL copied","info")},children:"Copy"})]})]})]})]})}const p3="_backdrop_k2vb2_1",m3="_modal_k2vb2_6",g3="_frow_k2vb2_14",_3="_fg_k2vb2_15",v3="_actions_k2vb2_30",x3="_cancelBtn_k2vb2_31",y3="_saveBtn_k2vb2_37",S3="_dupeWarning_k2vb2_45",M3="_dupeTitle_k2vb2_49",E3="_dupeItem_k2vb2_52",T3="_dupeScore_k2vb2_55",St={backdrop:p3,modal:m3,frow:g3,fg:_3,actions:v3,cancelBtn:x3,saveBtn:y3,dupeWarning:S3,dupeTitle:M3,dupeItem:E3,dupeScore:T3};function w3({people:t,onSave:e,onClose:n}){const[i,r]=L.useState(""),[s,a]=L.useState(""),[o,l]=L.useState(""),[c,f]=L.useState("M"),[h,d]=L.useState(""),[p,_]=L.useState(""),[x,m]=L.useState("paternal"),[u,g]=L.useState(""),[v,M]=L.useState(""),[A,C]=L.useState(""),[b,y]=L.useState(""),[T,U]=L.useState(!1),[P,z]=L.useState([]),W=L.useRef(null),{activeTreeId:q}=Yh();L.useEffect(()=>{W.current&&clearTimeout(W.current);const N=i.trim(),O=s.trim();if(!N||!O||!q){z([]);return}return W.current=setTimeout(async()=>{try{const G=await Qd.duplicates(q,N,O);z(G)}catch{z([])}},400),()=>clearTimeout(W.current)},[i,s,q]);const V=async()=>{if(!i.trim()||!s.trim()){alert("First and last name required.");return}U(!0),await e({firstName:i.trim(),lastName:s.trim(),maiden:o.trim(),gender:c,birth:parseInt(h)||null,death:parseInt(p)||null,branch:x,bio:u.trim(),parent1:v||null,parent2:A||null,spouse:b||null}),n()};return E.jsx("div",{className:St.backdrop,onClick:N=>N.target===N.currentTarget&&n(),children:E.jsxs("div",{className:St.modal,children:[E.jsx("h2",{children:"Add to Family Tree"}),E.jsxs("div",{className:St.frow,children:[E.jsxs("div",{className:St.fg,children:[E.jsx("label",{children:"First Name *"}),E.jsx("input",{type:"text",placeholder:"Maria",value:i,onChange:N=>r(N.target.value)})]}),E.jsxs("div",{className:St.fg,children:[E.jsx("label",{children:"Last Name *"}),E.jsx("input",{type:"text",placeholder:"García",value:s,onChange:N=>a(N.target.value)})]})]}),P.length>0&&E.jsxs("div",{className:St.dupeWarning,children:[E.jsx("div",{className:St.dupeTitle,children:"⚠ Possible duplicates found:"}),P.map(N=>E.jsxs("div",{className:St.dupeItem,children:[N.first_name," ",N.last_name,N.maiden_name?` (née ${N.maiden_name})`:"",E.jsxs("span",{className:St.dupeScore,children:[N.score,"% match"]})]},N.id))]}),E.jsxs("div",{className:St.frow,children:[E.jsxs("div",{className:St.fg,children:[E.jsx("label",{children:"Maiden Name"}),E.jsx("input",{type:"text",value:o,onChange:N=>l(N.target.value)})]}),E.jsxs("div",{className:St.fg,children:[E.jsx("label",{children:"Gender"}),E.jsxs("select",{value:c,onChange:N=>f(N.target.value),children:[E.jsx("option",{value:"M",children:"Male"}),E.jsx("option",{value:"F",children:"Female"}),E.jsx("option",{value:"O",children:"Other / Unknown"})]})]})]}),E.jsxs("div",{className:St.frow,children:[E.jsxs("div",{className:St.fg,children:[E.jsx("label",{children:"Birth Year"}),E.jsx("input",{type:"text",placeholder:"1945",value:h,onChange:N=>d(N.target.value)})]}),E.jsxs("div",{className:St.fg,children:[E.jsx("label",{children:"Death Year"}),E.jsx("input",{type:"text",placeholder:"if applicable",value:p,onChange:N=>_(N.target.value)})]})]}),E.jsxs("div",{className:St.fg,children:[E.jsx("label",{children:"Branch"}),E.jsxs("select",{value:x,onChange:N=>m(N.target.value),children:[E.jsx("option",{value:"paternal",children:"Paternal"}),E.jsx("option",{value:"maternal",children:"Maternal"}),E.jsx("option",{value:"sibling",children:"Sibling branch"}),E.jsx("option",{value:"married",children:"Married in"})]})]}),E.jsxs("div",{className:St.fg,children:[E.jsx("label",{children:"Biography"}),E.jsx("textarea",{placeholder:"A few words about this person…",value:u,onChange:N=>g(N.target.value)})]}),E.jsxs("div",{className:St.frow,children:[E.jsxs("div",{className:St.fg,children:[E.jsx("label",{children:"Parent 1"}),E.jsxs("select",{value:v,onChange:N=>M(N.target.value),children:[E.jsx("option",{value:"",children:"— none —"}),t.map(N=>E.jsxs("option",{value:N.id,children:[N.firstName," ",N.lastName]},N.id))]})]}),E.jsxs("div",{className:St.fg,children:[E.jsx("label",{children:"Parent 2"}),E.jsxs("select",{value:A,onChange:N=>C(N.target.value),children:[E.jsx("option",{value:"",children:"— none —"}),t.map(N=>E.jsxs("option",{value:N.id,children:[N.firstName," ",N.lastName]},N.id))]})]})]}),E.jsxs("div",{className:St.fg,children:[E.jsx("label",{children:"Spouse / Partner"}),E.jsxs("select",{value:b,onChange:N=>y(N.target.value),children:[E.jsx("option",{value:"",children:"— none —"}),t.map(N=>E.jsxs("option",{value:N.id,children:[N.firstName," ",N.lastName]},N.id))]})]}),E.jsxs("div",{className:St.actions,children:[E.jsx("button",{className:St.cancelBtn,onClick:n,disabled:T,children:"Cancel"}),E.jsx("button",{className:St.saveBtn,onClick:V,disabled:T,children:T?"Saving…":"Add Person"})]})]})})}const A3="_legend_1g1r6_1",C3="_title_1g1r6_7",b3="_row_1g1r6_11",R3="_dot_1g1r6_12",P3="_line_1g1r6_13",L3="_dash_1g1r6_16",N3="_stats_1g1r6_20",D3="_tooltip_1g1r6_24",rn={legend:A3,title:C3,row:b3,dot:R3,line:P3,dash:L3,stats:N3,tooltip:D3};function I3({people:t,rels:e,tooltipRef:n}){const i=e.filter(s=>s.type==="marriage").length,r=Math.floor(e.filter(s=>s.type==="parent").length/2);return E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:rn.legend,children:[E.jsx("div",{className:rn.title,children:"Legend"}),E.jsxs("div",{className:rn.row,children:[E.jsx("div",{className:rn.dot,style:{background:"#2F6B3E"}}),"Paternal"]}),E.jsxs("div",{className:rn.row,children:[E.jsx("div",{className:rn.dot,style:{background:"#1A5C8A"}}),"Maternal"]}),E.jsxs("div",{className:rn.row,children:[E.jsx("div",{className:rn.dot,style:{background:"#7A3A8A"}}),"Sibling branch"]}),E.jsxs("div",{className:rn.row,children:[E.jsx("div",{className:rn.dot,style:{background:"#8A5A1A"}}),"Married in"]}),E.jsxs("div",{className:rn.row,children:[E.jsx("div",{className:rn.line}),"Parent–child"]}),E.jsxs("div",{className:rn.row,children:[E.jsx("div",{className:rn.dash}),"Marriage"]})]}),E.jsxs("div",{className:rn.stats,children:[t.length," people · ",i," marriages · ",r," families"]}),E.jsx("div",{ref:n,className:rn.tooltip})]})}function Ss(t,e){var i;const n=t==null?void 0:t[e];return((i=n==null?void 0:n[0])==null?void 0:i.value)||null}function Kg(t){var i,r,s,a;const e=t.facts||{},n=t.metadata||{};return{id:t.id,firstName:t.first_name,lastName:t.last_name,maiden:t.maiden_name||"",gender:Ss(e,"gender")||"",birth:Ss(e,"birth_year")?parseInt(Ss(e,"birth_year")):null,death:Ss(e,"death_year")?parseInt(Ss(e,"death_year")):null,branch:n.branch||"paternal",bio:Ss(e,"biography")||"",facts:e,photo:t.profile_photo_url||t.profilePhotoUrl||((r=(i=t.media)==null?void 0:i.find(o=>o.type==="photo"&&o.is_profile_photo))==null?void 0:r.url)||((a=(s=t.media)==null?void 0:s.find(o=>o.type==="photo"))==null?void 0:a.url)||null,docs:(t.media||[]).filter(o=>o.type==="document").map(o=>o.url),invite_token:t.invite_token||null,claimed_by:t.claimed_by||null,public_slug:t.public_slug||null,_p:new j((Math.random()-.5)*300,(Math.random()-.5)*300,(Math.random()-.5)*50),_v:new j}}function id(t){return{id:t.id,type:t.type==="parent_child"?"parent":t.type,a:t.profile_a,b:t.profile_b}}function U3(){const{activeTreeId:t,loading:e,currentUserId:n}=Yh(),[i,r]=L.useState([]),[s,a]=L.useState([]),[o,l]=L.useState(null),[c,f]=L.useState(null),[h,d]=L.useState(!1),[p,_]=L.useState(!1),[x,m]=L.useState("2d"),[u,g]=L.useState(()=>typeof window>"u"?!1:window.matchMedia("(min-width: 768px)").matches),[v,M]=L.useState(!0),A=L.useRef(null),C=L.useRef(null);L.useEffect(()=>{if(typeof window>"u")return;const Z=window.matchMedia("(min-width: 768px)"),pe=de=>{const H=de.matches;g(H),H||m("2d")};return g(Z.matches),Z.matches||m("2d"),Z.addEventListener("change",pe),()=>Z.removeEventListener("change",pe)},[]),L.useEffect(()=>{if(!e){if(!t){console.log("[Kin] No active tree set. Waiting for TreeProvider to resolve…"),M(!1);return}M(!0),console.log("[Kin] Fetching data for tree:",t),km.fetchAll(t).then(({profiles:Z,relationships:pe})=>{r(Z.map(Kg)),a(pe.map(id)),console.log(`[Kin] Loaded ${Z.length} profiles, ${pe.length} relationships from DB.`)}).catch(Z=>{console.error("[Kin] Failed to fetch data:",Z),Ht("Failed to load data from server","error")}).finally(()=>M(!1))}},[t,e]);const b=o?i.find(Z=>Z.id===o):null,y=b?{...b,isOwner:!!(n&&b.claimed_by===n)}:null,T=L.useCallback(Z=>{l(Z)},[]),U=L.useCallback(Z=>{var pe;(pe=window.__topBarPathSelect)==null||pe.call(window,Z)},[]),P=L.useCallback(Z=>{var pe,de;f(Z),Z&&((de=(pe=A.current)==null?void 0:pe.__sceneApi)==null||de.shiftToOrigin(Z))},[]),z=L.useCallback(Z=>{l(Z)},[]),W=L.useCallback(()=>{l(null)},[]),q=L.useCallback(Z=>{l(Z)},[]),V=L.useCallback(Z=>{P(Z),l(Z)},[P]),N=L.useCallback(()=>{var Z,pe;(pe=(Z=A.current)==null?void 0:Z.__sceneApi)==null||pe.resetView()},[]),O=L.useCallback(()=>{_(Z=>!Z)},[]),G=L.useCallback(async(Z,pe)=>{const de=i.find(H=>H.id===Z);r(H=>H.map(ie=>ie.id===Z?{...ie,photo:pe}:ie));try{await NE.create({profileId:Z,type:"photo",url:pe,isProfilePhoto:!0}),Ht("Photo saved","info")}catch(H){throw console.error("[Kin] Failed to save photo:",H),r(ie=>ie.map(ee=>ee.id===Z?{...ee,photo:(de==null?void 0:de.photo)||null}:ee)),H}},[i]),Y=L.useCallback(()=>{u&&m(Z=>Z==="2d"?"3d":"2d")},[u]),ne=L.useCallback(async Z=>{var pe,de;if(!t){Ht("No active tree selected","error");return}try{const{profile:H,relationships:ie}=await km.createPerson(t,Z);console.log("[Kin] Person created in DB:",H.id,H.first_name,H.last_name),Ht(`${H.first_name} ${H.last_name} added to the tree!`);const ee=c?i.find(re=>re.id===c):null,Me=ee?ee._p.clone().add(new j((Math.random()-.5)*180,(Math.random()-.5)*180,0)):new j((Math.random()-.5)*240,(Math.random()-.5)*240,(Math.random()-.5)*50),xe=Kg(H);xe._p=Me,r(re=>[...re,xe]);const Ae=ie.map(id);Ae.length&&a(re=>[...re,...Ae]),(de=(pe=A.current)==null?void 0:pe.__sceneApi)==null||de.startSim(5e3),setTimeout(()=>l(H.id),80)}catch(H){console.error("[Kin] Failed to create person:",H),Ht(H.message||"Failed to add person","error")}},[t,c,i]),oe=L.useCallback(Z=>{var pe,de;a(H=>[...H,id(Z)]),(de=(pe=A.current)==null?void 0:pe.__sceneApi)==null||de.startSim(3e3)},[]),k=L.useCallback(Z=>{var pe,de;a(H=>H.filter(ie=>ie.id!==Z)),(de=(pe=A.current)==null?void 0:pe.__sceneApi)==null||de.startSim(3e3)},[]);return E.jsxs(E.Fragment,{children:[v&&E.jsx("div",{style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg)",fontFamily:"'Playfair Display', serif",fontSize:22,color:"var(--green)"},children:"Loading family tree…"}),E.jsx(RR,{people:i,rels:s,selectedId:o,focusedId:c,pathMode:p,graphMode:x,onNodeClick:T,onPathSelect:U,tooltipRef:C,ref:A}),E.jsx(dP,{people:i,rels:s,focusedId:c,pathMode:p,graphMode:x,is3DAvailable:u,onSetFocus:P,onOpenPanel:z,onTogglePathMode:O,onToggleGraphMode:Y,onResetView:N,onOpenModal:()=>d(!0),sceneRef:A}),E.jsx(h3,{person:y,people:i,rels:s,onClose:W,onViewPerson:q,onFocusPerson:V,onPhotoChange:G,onRelationshipAdded:oe,onRelationshipRemoved:k}),E.jsx(I3,{people:i,rels:s,tooltipRef:C}),h&&E.jsx(w3,{people:i,onSave:ne,onClose:()=>d(!1)}),E.jsx(_R,{})]})}function F3(){const[t]=ME(),e=t.get("token"),[n,i]=L.useState("loading"),[r,s]=L.useState(null),[a,o]=L.useState(""),[l,c]=L.useState(""),[f,h]=L.useState(""),[d,p]=L.useState(""),[_,x]=L.useState("");L.useEffect(()=>{if(!e){i("error"),x("No invite token provided.");return}Bm.verify(e).then(u=>{s(u),c(u.first_name+" "+u.last_name),i("found"),console.log("[Kin] Invite token verified — profile:",u.first_name,u.last_name)}).catch(u=>{i("error"),x(u.message||"Invalid or expired invite token."),console.error("[Kin] Token verification failed:",u.message)})},[e]);const m=async u=>{if(u.preventDefault(),!a.trim()){x("Email is required.");return}if(f.length<8){x("Password must be at least 8 characters.");return}if(f!==d){x("Passwords do not match.");return}i("claiming"),x("");try{const g=await Bm.claim(e,a.trim(),l.trim(),f);Pv(g.token),i("done"),console.log("[Kin] Profile claimed — user account created, session active.")}catch(g){i("found"),x(g.message||"Failed to create account."),console.error("[Kin] Claim failed:",g.message)}};return E.jsx("div",{style:Mt.page,children:E.jsxs("div",{style:Mt.card,children:[E.jsx("h1",{style:Mt.logo,children:"Kin"}),n==="loading"&&E.jsx("p",{style:Mt.subtle,children:"Verifying invite…"}),n==="error"&&E.jsxs("div",{children:[E.jsx("p",{style:Mt.errorText,children:_}),E.jsx("a",{href:"/",style:Mt.link,children:"← Back to family tree"})]}),n==="found"&&r&&E.jsxs("form",{onSubmit:m,children:[E.jsx("p",{style:Mt.greeting,children:"You've been invited to claim the profile for"}),E.jsxs("h2",{style:Mt.personName,children:[r.first_name," ",r.last_name]}),r.maiden_name&&E.jsxs("p",{style:Mt.subtle,children:["née ",r.maiden_name]}),E.jsx("div",{style:Mt.divider}),E.jsx("p",{style:Mt.label,children:"Create your account to manage this profile:"}),E.jsx("label",{style:Mt.fieldLabel,children:"Display Name"}),E.jsx("input",{style:Mt.input,type:"text",value:l,onChange:u=>c(u.target.value),placeholder:"Your name"}),E.jsx("label",{style:Mt.fieldLabel,children:"Email Address *"}),E.jsx("input",{style:Mt.input,type:"email",value:a,onChange:u=>o(u.target.value),placeholder:"you@example.com",required:!0}),E.jsx("label",{style:Mt.fieldLabel,children:"Create Password *"}),E.jsx("input",{style:Mt.input,type:"password",value:f,onChange:u=>h(u.target.value),placeholder:"At least 8 characters",minLength:8,required:!0}),E.jsx("label",{style:Mt.fieldLabel,children:"Confirm Password *"}),E.jsx("input",{style:Mt.input,type:"password",value:d,onChange:u=>p(u.target.value),placeholder:"Repeat your password",minLength:8,required:!0}),_&&E.jsx("p",{style:Mt.errorText,children:_}),E.jsx("button",{type:"submit",style:Mt.btn,children:"Create Account & Claim Profile"})]}),n==="claiming"&&E.jsx("p",{style:Mt.subtle,children:"Creating your account…"}),n==="done"&&E.jsxs("div",{children:[E.jsx("p",{style:Mt.successText,children:"Account created! Your profile has been claimed."}),E.jsx("a",{href:"/",style:Mt.btn,children:"Open Family Tree →"})]})]})})}const Mt={page:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#F5F1EB",fontFamily:"'Inter', 'Crimson Pro', sans-serif",padding:20,overflow:"auto"},card:{background:"#FDFBF8",borderRadius:12,padding:"40px 36px",maxWidth:420,width:"100%",boxShadow:"0 8px 32px rgba(0,0,0,0.08)",border:"1px solid #DCD5C8"},logo:{fontFamily:"'Playfair Display', serif",fontSize:28,fontWeight:700,color:"#3D7C47",marginBottom:20,textAlign:"center"},greeting:{fontSize:15,color:"#5E5850",marginBottom:4,textAlign:"center"},personName:{fontFamily:"'Playfair Display', serif",fontSize:24,fontWeight:600,color:"#2D2A26",textAlign:"center",marginBottom:4},subtle:{fontSize:13,color:"#9A948E",textAlign:"center",marginBottom:12},divider:{height:1,background:"#DCD5C8",margin:"20px 0"},label:{fontSize:14,color:"#5E5850",marginBottom:16},fieldLabel:{display:"block",fontSize:11,fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",color:"#9A948E",marginBottom:4,marginTop:12},input:{display:"block",width:"100%",padding:"9px 12px",fontSize:13,borderRadius:8,border:"1px solid #DCD5C8",background:"#F0EBE2",color:"#2D2A26",fontFamily:"'Inter', sans-serif",outline:"none",marginBottom:4},btn:{display:"block",width:"100%",padding:"11px",marginTop:20,background:"#3D7C47",color:"#fff",border:"none",borderRadius:8,fontFamily:"'Inter', sans-serif",fontSize:14,fontWeight:600,cursor:"pointer",textAlign:"center",textDecoration:"none"},errorText:{color:"#c0392b",fontSize:13,marginTop:8,textAlign:"center"},successText:{color:"#3D7C47",fontSize:15,fontWeight:600,textAlign:"center",marginBottom:16},link:{display:"block",textAlign:"center",color:"#3D7C47",fontSize:14,marginTop:16,textDecoration:"none"}},Zg="http://localhost:3001/api";function O3(){var v,M,A,C,b,y;const{slug:t}=LM(),[e,n]=L.useState(null),[i,r]=L.useState([]),[s,a]=L.useState(null),[o,l]=L.useState(!0);if(L.useEffect(()=>{fetch(`${Zg}/profiles/public/${encodeURIComponent(t)}`).then(T=>{if(!T.ok)throw new Error("Profile not found");return T.json()}).then(T=>(n(T),r(T.stories||[]),T.id&&(!T.stories||T.stories.length===0)?fetch(`${Zg}/stories?profileId=${encodeURIComponent(T.id)}`).then(U=>U.ok?U.json():[]).then(U=>r(U)):null)).catch(T=>a(T.message)).finally(()=>l(!1))},[t]),o)return E.jsx("div",{style:We.container,children:E.jsx("p",{style:We.loading,children:"Loading..."})});if(s)return E.jsxs("div",{style:We.container,children:[E.jsx("p",{style:We.error,children:s}),E.jsx(hc,{to:"/",style:We.link,children:"← Back to Tree"})]});const c=e.facts||{},f=e.media||[],h=f.filter(T=>T.type==="photo"),d=f.filter(T=>T.type==="document"),p=new Set(["gender","birth_year","death_year","biography"]),_=Object.entries(c).filter(([T])=>!p.has(T)),x=(M=(v=c.birth_year)==null?void 0:v[0])==null?void 0:M.value,m=(C=(A=c.death_year)==null?void 0:A[0])==null?void 0:C.value,u=(y=(b=c.biography)==null?void 0:b[0])==null?void 0:y.value,g=x?m?`${x} – ${m}`:`b. ${x}`:"";return E.jsx("div",{style:We.container,children:E.jsxs("div",{style:We.card,children:[e.profilePhotoUrl?E.jsx("img",{src:e.profilePhotoUrl,alt:`${e.firstName} ${e.lastName}`,style:We.profilePhoto}):E.jsxs("div",{style:We.avatar,children:[e.firstName[0],e.lastName[0]]}),E.jsxs("h1",{style:We.name,children:[e.firstName," ",e.lastName]}),e.maidenName&&E.jsxs("p",{style:We.maiden,children:["née ",e.maidenName]}),g&&E.jsx("p",{style:We.dates,children:g}),e.isLiving&&E.jsx("span",{style:We.livingBadge,children:"Living"}),u&&E.jsxs(E.Fragment,{children:[E.jsx("h2",{style:We.section,children:"Biography"}),E.jsx("p",{style:We.bio,children:u})]}),_.length>0&&E.jsxs(E.Fragment,{children:[E.jsx("h2",{style:We.section,children:"Details"}),_.map(([T,U])=>E.jsxs("div",{style:We.factRow,children:[E.jsx("span",{style:We.factLabel,children:T.replace(/_/g," ")}),E.jsx("span",{children:U.map(P=>P.value).join(", ")})]},T))]}),E.jsxs("div",{style:We.summaryGrid,children:[E.jsxs("div",{style:We.summaryCard,children:[E.jsx("strong",{style:We.summaryCount,children:i.length}),E.jsx("span",{style:We.summaryLabel,children:"Stories"})]}),E.jsxs("div",{style:We.summaryCard,children:[E.jsx("strong",{style:We.summaryCount,children:h.length}),E.jsx("span",{style:We.summaryLabel,children:"Photos"})]}),E.jsxs("div",{style:We.summaryCard,children:[E.jsx("strong",{style:We.summaryCount,children:d.length}),E.jsx("span",{style:We.summaryLabel,children:"Documents"})]})]}),E.jsx("h2",{style:We.section,children:"Stories & Memories"}),i.length>0?i.map(T=>E.jsxs("article",{style:We.storyCard,children:[E.jsx("h3",{style:We.storyTitle,children:T.title}),E.jsx("p",{style:We.storyBody,children:T.body}),E.jsxs("p",{style:We.storyMeta,children:[T.author_name||"Unknown"," · ",new Date(T.created_at).toLocaleDateString()]})]},T.id)):E.jsx("p",{style:We.emptyState,children:"No public stories have been shared yet."}),E.jsx("h2",{style:We.section,children:"Photos & Documents"}),h.map(T=>E.jsxs("figure",{style:We.mediaCard,children:[E.jsx("img",{src:T.url,alt:"Family archive",style:We.mediaImage}),E.jsx("figcaption",{style:We.mediaCaption,children:"Photo archive item"})]},T.id)),d.map(T=>E.jsxs("div",{style:We.documentRow,children:[E.jsx("span",{style:We.documentIcon,children:"📄"}),E.jsx("a",{href:T.url,target:"_blank",rel:"noreferrer",style:We.documentLink,children:"Open document"})]},T.id)),h.length===0&&d.length===0&&E.jsx("p",{style:We.emptyState,children:"No public photos or documents are available yet."}),E.jsx(hc,{to:"/",style:We.link,children:"← View Full Tree"})]})})}const We={container:{minHeight:"100vh",background:"#F5F1EB",color:"#2D2A26",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Inter', 'Crimson Pro', sans-serif",padding:20},card:{background:"#FDFBF8",border:"1px solid #DCD5C8",borderRadius:12,padding:"32px 28px",maxWidth:480,width:"100%",textAlign:"center",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},avatar:{width:80,height:80,borderRadius:"50%",background:"#F0EBE2",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,fontFamily:"'Playfair Display', serif",margin:"0 auto 16px",color:"#3D7C47"},profilePhoto:{display:"block",width:104,height:104,borderRadius:"50%",objectFit:"cover",margin:"0 auto 16px",border:"4px solid #F0EBE2",boxShadow:"0 6px 18px rgba(0,0,0,0.08)"},name:{fontFamily:"'Playfair Display', serif",fontSize:24,fontWeight:600,margin:"0 0 4px",color:"#2D2A26"},maiden:{fontSize:14,color:"#5E5850",fontStyle:"italic",margin:"0 0 8px"},dates:{fontSize:14,color:"#9A948E",margin:"0 0 12px"},livingBadge:{display:"inline-block",padding:"3px 12px",borderRadius:20,fontSize:11,fontWeight:600,background:"rgba(61, 124, 71, 0.08)",color:"#3D7C47",marginBottom:16},section:{fontSize:11,fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"#9A948E",margin:"20px 0 10px",paddingBottom:5,borderBottom:"1px solid #DCD5C8",textAlign:"left"},bio:{fontSize:14,lineHeight:1.65,color:"#5E5850",textAlign:"left"},factRow:{display:"flex",gap:8,fontSize:14,lineHeight:1.5,padding:"4px 0",textAlign:"left"},factLabel:{width:100,flexShrink:0,textTransform:"capitalize",color:"#9A948E",fontWeight:500},summaryGrid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:10,marginTop:20},summaryCard:{display:"flex",flexDirection:"column",gap:6,alignItems:"center",padding:"14px 10px",borderRadius:10,background:"#F0EBE2",border:"1px solid #DCD5C8"},summaryCount:{fontFamily:"'Playfair Display', serif",fontSize:26,color:"#2D2A26"},summaryLabel:{fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:"#9A948E",fontWeight:600},storyCard:{textAlign:"left",padding:"14px 16px",borderRadius:10,border:"1px solid #DCD5C8",background:"#FDFBF8",marginBottom:10},storyTitle:{fontSize:16,fontWeight:600,color:"#2D2A26",marginBottom:6},storyBody:{fontSize:14,lineHeight:1.7,color:"#5E5850",whiteSpace:"pre-wrap"},storyMeta:{fontSize:12,color:"#9A948E",marginTop:8},mediaCard:{margin:"0 0 12px",borderRadius:10,overflow:"hidden",border:"1px solid #DCD5C8",background:"#FDFBF8"},mediaImage:{display:"block",width:"100%",maxHeight:260,objectFit:"cover"},mediaCaption:{padding:"10px 14px",fontSize:13,color:"#5E5850",textAlign:"left"},documentRow:{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",borderRadius:10,border:"1px solid #DCD5C8",background:"#FDFBF8",marginBottom:8},documentIcon:{fontSize:18},documentLink:{color:"#3D7C47",textDecoration:"none",fontWeight:600},emptyState:{fontSize:14,lineHeight:1.6,color:"#9A948E",textAlign:"left",marginBottom:12},link:{display:"inline-block",marginTop:24,fontSize:14,color:"#3D7C47",textDecoration:"none"},loading:{color:"#9A948E",fontSize:16},error:{color:"#c44",fontSize:16,marginBottom:12}};uv(document.getElementById("root")).render(E.jsx(_E,{children:E.jsx(DE,{children:E.jsxs(XM,{children:[E.jsx(Nl,{path:"/",element:E.jsx(U3,{})}),E.jsx(Nl,{path:"/join",element:E.jsx(F3,{})}),E.jsx(Nl,{path:"/p/:slug",element:E.jsx(O3,{})})]})})}));
