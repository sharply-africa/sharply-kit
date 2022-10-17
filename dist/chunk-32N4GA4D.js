'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var t = require('react');
var i = require('@emotion/styled');
var styledSystem = require('styled-system');
var s = require('@styled-system/css');
var shouldForwardProp = require('@styled-system/should-forward-prop');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var t__default = /*#__PURE__*/_interopDefaultLegacy(t);
var i__default = /*#__PURE__*/_interopDefaultLegacy(i);
var s__default = /*#__PURE__*/_interopDefaultLegacy(s);

var C=shouldForwardProp.createShouldForwardProp([...shouldForwardProp.props,"d","textDecoration","pointerEvents","visibility","transform","cursor","fill","stroke"]),u=o=>s__default["default"](o.sx)(o.theme),B=o=>s__default["default"](o.__css)(o.theme),w=({theme:o,variant:r,tx:p="variants"})=>s__default["default"](s.get(o,p+"."+r,s.get(o,r)))(o),v=styledSystem.compose(styledSystem.background,styledSystem.border,styledSystem.color,styledSystem.flexbox,styledSystem.grid,styledSystem.layout,styledSystem.position,styledSystem.shadow,styledSystem.space,styledSystem.typography),k=i__default["default"]("div",{shouldForwardProp:C})({boxSizing:"border-box",margin:0,minWidth:0,padding:0},B,w,v,u),E=t.forwardRef((o,r)=>t__default["default"].createElement(k,{ref:r,...o})),K=E;

exports.a = v;
exports.b = K;
//# sourceMappingURL=chunk-32N4GA4D.js.map