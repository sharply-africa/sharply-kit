'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var i = require('tinycolor2');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var i__default = /*#__PURE__*/_interopDefaultLegacy(i);

var g=t=>t.replace("var(","").replace(")",""),a=t=>{if(typeof window<"u"&&t){let r=document.querySelector(":root"),n=getComputedStyle(r),o=g(t),s=t.startsWith("var")?n.getPropertyValue(o):t,e=i__default["default"](s);return e.lighten(30),e.toHexString()}return t};

exports.a = a;
//# sourceMappingURL=chunk-TPZUCHDM.js.map