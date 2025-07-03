(function(m,f){typeof exports=="object"&&typeof module<"u"?f(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],f):(m=typeof globalThis<"u"?globalThis:m||self,f(m.CBot={},m.React))})(this,function(m,f){"use strict";var T={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C;function z(){if(C)return _;C=1;var t=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(i,l,a){var E=null;if(a!==void 0&&(E=""+a),l.key!==void 0&&(E=""+l.key),"key"in l){a={};for(var b in l)b!=="key"&&(a[b]=l[b])}else a=l;return l=a.ref,{$$typeof:t,type:i,key:E,ref:l!==void 0?l:null,props:a}}return _.Fragment=o,_.jsx=u,_.jsxs=u,_}var h={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N;function G(){return N||(N=1,process.env.NODE_ENV!=="production"&&function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case se:return"Profiler";case ae:return"StrictMode";case ie:return"Suspense";case fe:return"SuspenseList";case me:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case oe:return"Portal";case ue:return(e.displayName||"Context")+".Provider";case ce:return(e._context.displayName||"Context")+".Consumer";case le:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case de:return r=e.displayName||null,r!==null?r:t(e.type)||"Memo";case W:r=e._payload,e=e._init;try{return t(e(r))}catch{}}return null}function o(e){return""+e}function u(e){try{o(e);var r=!1}catch{r=!0}if(r){r=console;var n=r.error,s=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",s),o(e)}}function i(e){if(e===j)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===W)return"<...>";try{var r=t(e);return r?"<"+r+">":"<...>"}catch{return"<...>"}}function l(){var e=x.A;return e===null?null:e.getOwner()}function a(){return Error("react-stack-top-frame")}function E(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function b(e,r){function n(){V||(V=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function g(){var e=t(this.type);return B[e]||(B[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function A(e,r,n,s,p,d,O,S){return n=d.ref,e={$$typeof:D,type:e,key:r,props:d,_owner:p},(n!==void 0?n:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:g}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:O}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:S}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function k(e,r,n,s,p,d,O,S){var c=r.children;if(c!==void 0)if(s)if(pe(c)){for(s=0;s<c.length;s++)F(c[s]);Object.freeze&&Object.freeze(c)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else F(c);if(U.call(r,"key")){c=t(e);var R=Object.keys(r).filter(function(Ee){return Ee!=="key"});s=0<R.length?"{key: someKey, "+R.join(": ..., ")+": ...}":"{key: someKey}",q[c+s]||(R=0<R.length?"{"+R.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,s,c,R,c),q[c+s]=!0)}if(c=null,n!==void 0&&(u(n),c=""+n),E(r)&&(u(r.key),c=""+r.key),"key"in r){n={};for(var P in r)P!=="key"&&(n[P]=r[P])}else n=r;return c&&b(n,typeof e=="function"?e.displayName||e.name||"Unknown":e),A(e,c,d,p,l(),n,O,S)}function F(e){typeof e=="object"&&e!==null&&e.$$typeof===D&&e._store&&(e._store.validated=1)}var w=f,D=Symbol.for("react.transitional.element"),oe=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),ce=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),be=Symbol.for("react.client.reference"),x=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=Object.prototype.hasOwnProperty,pe=Array.isArray,y=console.createTask?console.createTask:function(){return null};w={"react-stack-bottom-frame":function(e){return e()}};var V,B={},J=w["react-stack-bottom-frame"].bind(w,a)(),$=y(i(a)),q={};h.Fragment=j,h.jsx=function(e,r,n,s,p){var d=1e4>x.recentlyCreatedOwnerStacks++;return k(e,r,n,!1,s,p,d?Error("react-stack-top-frame"):J,d?y(i(e)):$)},h.jsxs=function(e,r,n,s,p){var d=1e4>x.recentlyCreatedOwnerStacks++;return k(e,r,n,!0,s,p,d?Error("react-stack-top-frame"):J,d?y(i(e)):$)}}()),h}var Y;function X(){return Y||(Y=1,process.env.NODE_ENV==="production"?T.exports=z():T.exports=G()),T.exports}var v=X();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),H=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,u,i)=>i?i.toUpperCase():u.toLowerCase()),M=t=>{const o=H(t);return o.charAt(0).toUpperCase()+o.slice(1)},I=(...t)=>t.filter((o,u,i)=>!!o&&o.trim()!==""&&i.indexOf(o)===u).join(" ").trim(),Q=t=>{for(const o in t)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=f.forwardRef(({color:t="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:i,className:l="",children:a,iconNode:E,...b},g)=>f.createElement("svg",{ref:g,...K,width:o,height:o,stroke:t,strokeWidth:i?Number(u)*24/Number(o):u,className:I("lucide",l),...!a&&!Q(b)&&{"aria-hidden":"true"},...b},[...E.map(([A,k])=>f.createElement(A,k)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(t,o)=>{const u=f.forwardRef(({className:i,...l},a)=>f.createElement(ee,{ref:a,iconNode:o,className:I(`lucide-${Z(M(t))}`,`lucide-${t}`,i),...l}));return u.displayName=M(t),u};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=re("bot-message-square",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]),L=({name:t=""})=>v.jsx("main",{children:v.jsxs("button",{className:"hover:scale-110 cursor-pointer flex items-center justify-center gap-2 text-sm p-2 border-2 border-amber-500 text-amber-500 bg-amber-500/10 hover:bg-amber-500/20  duration-300 rounded-full ",children:[v.jsx(te,{className:"w-4 h-4"})," ",t]})});function ne(){return v.jsx(v.Fragment,{children:v.jsx(L,{})})}m.CBot=L,m.default=ne,Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
