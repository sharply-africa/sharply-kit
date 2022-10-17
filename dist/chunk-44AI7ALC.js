'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chunkMSJATYGT_js = require('./chunk-MSJATYGT.js');
var chunk32N4GA4D_js = require('./chunk-32N4GA4D.js');
var chunkVASDSSUP_js = require('./chunk-VASDSSUP.js');
var chunk47XMEYKK_js = require('./chunk-47XMEYKK.js');
var n = require('react');
var M = require('react-phone-input-2');
var reactGoogleAutocomplete = require('react-google-autocomplete');
var h = require('react-google-autocomplete/lib/usePlacesAutocompleteService');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var n__default = /*#__PURE__*/_interopDefaultLegacy(n);
var M__default = /*#__PURE__*/_interopDefaultLegacy(M);
var h__default = /*#__PURE__*/_interopDefaultLegacy(h);

var y=n.forwardRef((r,u)=>n__default["default"].createElement(chunk32N4GA4D_js.b,{as:"input",ref:u,tx:"form",...r,__css:{appearance:"none",backgroundColor:"white",border:"1px solid",borderColor:"#E7ECE8",borderRadius:"base",color:"heading",fontFamily:"body",fontSize:["sm"],fontWeight:"normal",lineHeight:"default",outline:"none",px:4,py:3,width:"100%","&:disabled":{backgroundColor:"#E7ECE8",opacity:.5},"&:readonly":{backgroundColor:"#E7ECE8",opacity:.5},"&:focus":{borderColor:"primary"},"&:placholder":{color:"#C4C4C4"}}})),b=["geometry.location","formatted_address"],C=n.forwardRef(({onChange:r,type:u,value:s,placesOptions:L,...t},l)=>{let d=n__default["default"].useRef(!1),{googleMapsKey:c}=chunkVASDSSUP_js.a(),{ref:e}=reactGoogleAutocomplete.usePlacesWidget({apiKey:c,onPlaceSelected:o=>{var i;(i=e==null?void 0:e.current)!=null&&i.value&&(e.current.value=(o==null?void 0:o.formatted_address)||""),r==null||r(o);},options:{types:["geocode","establishment"],fields:b,...L}}),{placePredictions:f,getPlacePredictions:m,placesService:a,isPlacePredictionsLoading:p}=h__default["default"]({apiKey:c,options:{types:["address"],componentRestrictions:{country:"ng"}}});return n__default["default"].useEffect(()=>{t.defaultValue&&u==="address"&&!d.current&&(e.current.value=t.defaultValue,m({input:t.defaultValue}),d.current=!0);},[m,e,t.defaultValue,u]),n__default["default"].useEffect(()=>{if(!p&&f.length){let{place_id:o}=f[0];a==null||a.getDetails({placeId:o,fields:b},i=>{r(i),d.current=!1;});}},[p,f,a,r]),n__default["default"].useEffect(()=>{!s&&(e==null?void 0:e.current)&&(e.current.value="");},[e,s]),u==="phone"?n__default["default"].createElement(chunkMSJATYGT_js.a,{ref:l},n__default["default"].createElement(M__default["default"],{autoFormat:!0,country:"ng",inputProps:{...t},onChange:r,value:s,...t})):u==="address"?n__default["default"].createElement(y,{ref:chunk47XMEYKK_js.b(l,e),autoComplete:"off",type:u,...t,onBlur:o=>{var i;(i=t.onBlur)==null||i.call(t,o),o.target.value||r(null);}}):n__default["default"].createElement(y,{onChange:r,ref:l,type:u,value:s,...t})}),k=C;

exports.a = C;
exports.b = k;
//# sourceMappingURL=chunk-44AI7ALC.js.map