'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var i = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var i__default = /*#__PURE__*/_interopDefaultLegacy(i);

function u(t){return i__default["default"].Children.toArray(t).filter(r=>i__default["default"].isValidElement(r))}var s="& > *:not(style) ~ *:not(style)";function c(t){return Array.isArray(t)}var m=t=>Object.keys(t),a=t=>{let r=typeof t;return t!=null&&(r==="object"||r==="function")&&!c(t)};function d(t,r){return c(t)?t.map(e=>e===null?null:r(e)):a(t)?m(t).reduce((e,n)=>(e[n]=r(t[n]),e),{}):t!=null?r(t):null}function y(t){let{spacing:r,direction:e}=t,n={column:{marginTop:r,marginLeft:0},row:{marginLeft:r,marginTop:0},"column-reverse":{marginBottom:r,marginRight:0},"row-reverse":{marginRight:r,marginBottom:0}};return {flexDirection:e,[s]:d(e,o=>n[o])}}function f(t){let{spacing:r,direction:e}=t,n={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return {"&":d(e,o=>n[o])}}

exports.a = u;
exports.b = s;
exports.c = c;
exports.d = m;
exports.e = a;
exports.f = d;
exports.g = y;
exports.h = f;
//# sourceMappingURL=chunk-NCFFGWBF.js.map