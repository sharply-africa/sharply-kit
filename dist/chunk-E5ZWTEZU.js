'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chunkEC4RRFS2_js = require('./chunk-EC4RRFS2.js');
var chunk4BDP3QO6_js = require('./chunk-4BDP3QO6.js');
var chunkB2ZP6JXC_js = require('./chunk-B2ZP6JXC.js');
var chunk32N4GA4D_js = require('./chunk-32N4GA4D.js');
var f = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var f__default = /*#__PURE__*/_interopDefaultLegacy(f);

var B=f.forwardRef(({children:p,initialOpen:u=!1,onChange:n=()=>{},...m},g)=>{let[o,v]=f.useState(u),[r,x]=f.useState(0),e=f.useRef(null),c=f.useCallback(()=>v(t=>!t),[]),A=()=>{var t;return (t=e==null?void 0:e.current)==null?void 0:t.offsetHeight};f.useEffect(()=>{x(o?A():0),n(o);},[o,n]);let C=f.useMemo(()=>({contentHeight:r,contentRef:e,isOpen:o,toggleOpen:c}),[r,o,c]);return f__default["default"].createElement(chunk32N4GA4D_js.b,{ref:g,...m,__css:{...o?{}:{overflow:"hidden"},bg:"white",borderRadius:"lg",userSelect:"none"}},f__default["default"].createElement(chunkB2ZP6JXC_js.a.Provider,{value:C},p))}),w=Object.assign(B,{Header:chunk4BDP3QO6_js.a,Content:chunkEC4RRFS2_js.a}),y=w;

exports.a = y;
//# sourceMappingURL=chunk-E5ZWTEZU.js.map