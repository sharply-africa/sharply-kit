'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chunkJI2P225D_js = require('./chunk-JI2P225D.js');
var chunk32N4GA4D_js = require('./chunk-32N4GA4D.js');
var chunkBOKW7PZU_js = require('./chunk-BOKW7PZU.js');
var p = require('react');
var b = require('tinycolor2');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var p__default = /*#__PURE__*/_interopDefaultLegacy(p);
var b__default = /*#__PURE__*/_interopDefaultLegacy(b);

var w={default:"#0988FD",primary:"var(--primary)",error:"#E47A7A",info:"#07AFC6",success:"#4BC3BC",warning:"#E1A300"},F=p.forwardRef(({alpha:t=.25,children:u,color:o,text:l,variant:s="success",...f},d)=>{let[g,x]=p.useState(""),{theme:n}=chunkBOKW7PZU_js.a(),r=p.useMemo(()=>o?n.colors[o]||o:w[s],[o,s,n.colors]),y=e=>e.replace("var(","").replace(")","");return p.useEffect(()=>{let e=document.querySelector(":root"),B=getComputedStyle(e),C=y(r),h=r.startsWith("var")?B.getPropertyValue(C):r,i=b__default["default"](h);i.setAlpha(t),x(i.toRgbString());},[t,o,r]),p__default["default"].createElement(chunk32N4GA4D_js.b,{ref:d,...f,__css:{bg:g,borderRadius:"full",display:"inline-block",px:2,py:1}},u||p__default["default"].createElement(chunkJI2P225D_js.a,{fontSize:"xs",color:r},l))}),V=F;

exports.a = V;
//# sourceMappingURL=chunk-IRUBS56B.js.map