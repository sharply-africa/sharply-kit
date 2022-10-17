'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chunkUNUJIQ5I_js = require('./chunk-UNUJIQ5I.js');
var chunkAZ2YL5YH_js = require('./chunk-AZ2YL5YH.js');
var chunk32N4GA4D_js = require('./chunk-32N4GA4D.js');
var e = require('react');
var W = require('@emotion/styled');
var react = require('@emotion/react');
var F = require('tinycolor2');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var e__default = /*#__PURE__*/_interopDefaultLegacy(e);
var W__default = /*#__PURE__*/_interopDefaultLegacy(W);
var F__default = /*#__PURE__*/_interopDefaultLegacy(F);

var p=W__default["default"](chunk32N4GA4D_js.b)`
  svg {
    fill: ${({fill:r})=>r};
  }
`,P=e.forwardRef((r,I)=>{let{children:b,colorScheme:t="primary",iconSpacing:m=4,isDisabled:g,isLoading:o,leftIcon:i,rightIcon:l,showArrowIcon:f,textColor:w,variant:d="solid",...S}=r,s=react.useTheme(),c=s.colors[t]||t,n=w||d!=="solid"?c:F__default["default"](c).isLight()?s.colors.primary:s.colors.white,y=i||l||f||o?{alignItems:"center",justifyContent:o?"center":"space-between"}:{},B=()=>{let h={fill:n,ml:m};return o?null:l?e__default["default"].createElement(p,{...h},l):f?e__default["default"].createElement(p,{...h},e__default["default"].createElement(chunkAZ2YL5YH_js.a,null)):null};return e__default["default"].createElement(chunk32N4GA4D_js.b,{ref:I,as:"button",tx:"buttons",colorScheme:t,disabled:Boolean(g||o),...r,__css:{appearance:"none",bg:c,border:0,borderRadius:"base",color:n,display:"inline-flex",fontSize:"sm",position:"relative",px:6,py:4,textAlign:"center",textDecoration:"none",transition:"all 250ms",userSelect:"none",width:r.isFullWidth?"100%":"auto"},variant:d,...y,...S},i&&!o&&e__default["default"].createElement(p,{fill:n,mr:m},i),o?e__default["default"].createElement(chunkUNUJIQ5I_js.a,{size:"1.5rem",color:n,thickness:"1px"}):b,B())}),E=P;

exports.a = E;
//# sourceMappingURL=chunk-XI5DAAAW.js.map