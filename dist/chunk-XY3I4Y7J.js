'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chunkBJANJ7Z7_js = require('./chunk-BJANJ7Z7.js');
var chunkJI2P225D_js = require('./chunk-JI2P225D.js');
var chunkUNUJIQ5I_js = require('./chunk-UNUJIQ5I.js');
var chunk32N4GA4D_js = require('./chunk-32N4GA4D.js');
var o = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var o__default = /*#__PURE__*/_interopDefaultLegacy(o);

var _=o.forwardRef((c,f)=>{let{active:r,activeBackgroundColor:k="#6041E0",inactiveBackgroundColor:C="#C4C4C4",isLoading:p=!1,onChange:b=()=>{},subtitle:i,subtitleProps:P={},sx:T={},title:u,titleProps:v={},trackGap:e=3,trackHeight:S="1.4rem",trackWidth:B="2.6rem"}=c,[n,w]=o.useState(0),[W,y]=o.useState(0),t=o.useRef(null);return o.useEffect(()=>{var d,h,x;(d=t.current)!=null&&d.clientWidth&&(w(((h=t==null?void 0:t.current)==null?void 0:h.clientHeight)-e*2),y((x=t==null?void 0:t.current)==null?void 0:x.clientWidth));},[e]),o__default["default"].createElement(chunkBJANJ7Z7_js.b,{direction:"row",onClick:()=>b(!r),ref:f,spacing:2,sx:{pointerEvents:p?"none":"auto",...i?{}:{alignItems:"center"},...T},...c},p?o__default["default"].createElement(chunkUNUJIQ5I_js.a,{size:"1.6rem"}):o__default["default"].createElement(chunk32N4GA4D_js.b,{ref:t,__css:{backgroundColor:r?k:C,borderRadius:"full",cursor:"pointer",display:"flex",position:"relative",height:S,width:B,px:`${e}px`,py:`${e}px`}},o__default["default"].createElement(chunk32N4GA4D_js.b,{__css:{backgroundColor:"white",borderRadius:"50%",height:n,left:r?`${W-e-n}px`:`${e}px`,position:"absolute",top:"50%",transform:"translateY(-50%)",transition:"all 0.2s",width:n}})),o__default["default"].createElement(chunkBJANJ7Z7_js.b,{spacing:1},u?o__default["default"].createElement(chunkJI2P225D_js.a,{fontSize:"xs",color:"heading",...v},u):null,i?o__default["default"].createElement(chunkJI2P225D_js.a,{fontSize:"xxs",color:"text",...P},i):null))}),Y=_;

exports.a = Y;
//# sourceMappingURL=chunk-XY3I4Y7J.js.map