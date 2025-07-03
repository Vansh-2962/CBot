var CBot=function(T,E){"use strict";var h={exports:{}},R={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C;function G(){if(C)return R;C=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function u(i,l,o){var b=null;if(o!==void 0&&(b=""+o),l.key!==void 0&&(b=""+l.key),"key"in l){o={};for(var d in l)d!=="key"&&(o[d]=l[d])}else o=l;return l=o.ref,{$$typeof:t,type:i,key:b,ref:l!==void 0?l:null,props:o}}return R.Fragment=a,R.jsx=u,R.jsxs=u,R}var _={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N;function q(){return N||(N=1,process.env.NODE_ENV!=="production"&&function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case se:return"Profiler";case oe:return"StrictMode";case ie:return"Suspense";case fe:return"SuspenseList";case me:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case ae:return"Portal";case ue:return(e.displayName||"Context")+".Provider";case ce:return(e._context.displayName||"Context")+".Consumer";case le:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case de:return r=e.displayName||null,r!==null?r:t(e.type)||"Memo";case W:r=e._payload,e=e._init;try{return t(e(r))}catch{}}return null}function a(e){return""+e}function u(e){try{a(e);var r=!1}catch{r=!0}if(r){r=console;var n=r.error,s=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",s),a(e)}}function i(e){if(e===j)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===W)return"<...>";try{var r=t(e);return r?"<"+r+">":"<...>"}catch{return"<...>"}}function l(){var e=O.A;return e===null?null:e.getOwner()}function o(){return Error("react-stack-top-frame")}function b(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function d(e,r){function n(){V||(V=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function g(){var e=t(this.type);return B[e]||(B[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function A(e,r,n,s,m,f,y,S){return n=f.ref,e={$$typeof:D,type:e,key:r,props:f,_owner:m},(n!==void 0?n:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:g}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:y}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:S}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function k(e,r,n,s,m,f,y,S){var c=r.children;if(c!==void 0)if(s)if(Ee(c)){for(s=0;s<c.length;s++)F(c[s]);Object.freeze&&Object.freeze(c)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else F(c);if(U.call(r,"key")){c=t(e);var v=Object.keys(r).filter(function(pe){return pe!=="key"});s=0<v.length?"{key: someKey, "+v.join(": ..., ")+": ...}":"{key: someKey}",z[c+s]||(v=0<v.length?"{"+v.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,s,c,v,c),z[c+s]=!0)}if(c=null,n!==void 0&&(u(n),c=""+n),b(r)&&(u(r.key),c=""+r.key),"key"in r){n={};for(var P in r)P!=="key"&&(n[P]=r[P])}else n=r;return c&&d(n,typeof e=="function"?e.displayName||e.name||"Unknown":e),A(e,c,f,m,l(),n,y,S)}function F(e){typeof e=="object"&&e!==null&&e.$$typeof===D&&e._store&&(e._store.validated=1)}var w=E,D=Symbol.for("react.transitional.element"),ae=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),ce=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),be=Symbol.for("react.client.reference"),O=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=Object.prototype.hasOwnProperty,Ee=Array.isArray,x=console.createTask?console.createTask:function(){return null};w={"react-stack-bottom-frame":function(e){return e()}};var V,B={},J=w["react-stack-bottom-frame"].bind(w,o)(),$=x(i(o)),z={};_.Fragment=j,_.jsx=function(e,r,n,s,m){var f=1e4>O.recentlyCreatedOwnerStacks++;return k(e,r,n,!1,s,m,f?Error("react-stack-top-frame"):J,f?x(i(e)):$)},_.jsxs=function(e,r,n,s,m){var f=1e4>O.recentlyCreatedOwnerStacks++;return k(e,r,n,!0,s,m,f?Error("react-stack-top-frame"):J,f?x(i(e)):$)}}()),_}var Y;function X(){return Y||(Y=1,process.env.NODE_ENV==="production"?h.exports=G():h.exports=q()),h.exports}var p=X();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),H=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,u,i)=>i?i.toUpperCase():u.toLowerCase()),M=t=>{const a=H(t);return a.charAt(0).toUpperCase()+a.slice(1)},I=(...t)=>t.filter((a,u,i)=>!!a&&a.trim()!==""&&i.indexOf(a)===u).join(" ").trim(),Q=t=>{for(const a in t)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=E.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:u=2,absoluteStrokeWidth:i,className:l="",children:o,iconNode:b,...d},g)=>E.createElement("svg",{ref:g,...K,width:a,height:a,stroke:t,strokeWidth:i?Number(u)*24/Number(a):u,className:I("lucide",l),...!o&&!Q(d)&&{"aria-hidden":"true"},...d},[...b.map(([A,k])=>E.createElement(A,k)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(t,a)=>{const u=E.forwardRef(({className:i,...l},o)=>E.createElement(ee,{ref:o,iconNode:a,className:I(`lucide-${Z(M(t))}`,`lucide-${t}`,i),...l}));return u.displayName=M(t),u};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=re("bot-message-square",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]),L=({name:t=""})=>p.jsx("main",{children:p.jsxs("button",{className:"hover:scale-110 cursor-pointer flex items-center justify-center gap-2 text-sm p-2 border-2 border-amber-500 text-amber-500 bg-amber-500/10 hover:bg-amber-500/20  duration-300 rounded-full ",children:[p.jsx(te,{className:"w-4 h-4"})," ",t]})});function ne(){return p.jsx(p.Fragment,{children:p.jsx(L,{})})}return T.CBot=L,T.default=ne,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),T}({},React);
