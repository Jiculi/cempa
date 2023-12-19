import{r as c}from"./index.f187768b.js";import{Q as a}from"./_astro-entry_react-toastify.6e5e22ef.js";var f={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=c,_=Symbol.for("react.element"),m=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,d=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function p(t,r,i){var e,o={},n=null,u=null;i!==void 0&&(n=""+i),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(u=r.ref);for(e in r)y.call(r,e)&&!x.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:_,type:t,key:n,ref:u,props:o,_owner:d.current}}s.Fragment=m;s.jsx=p;s.jsxs=p;f.exports=s;var b=f.exports;function O(){const[t,r]=c.useState(!1);return b.jsx("button",{onClick:()=>{a.success("Felicidades ya esta subscrito!!"),r(!t)},children:t?"ya estas inscrito":"suscribirte"})}export{O as default};
