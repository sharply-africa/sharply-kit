'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var r = require('react');
var reactDayPicker = require('react-day-picker');
var c = require('date-fns/format');
var h = require('date-fns/parse');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var r__default = /*#__PURE__*/_interopDefaultLegacy(r);
var c__default = /*#__PURE__*/_interopDefaultLegacy(c);
var h__default = /*#__PURE__*/_interopDefaultLegacy(h);

var f=new Date().getFullYear(),g=new Date,D=new Date(f-70,11),Y=({date:t,localeUtils:o,onChange:n})=>{let a=o.getMonths(),l=[];for(let e=g.getFullYear();e>=D.getFullYear();e-=1)l.push(e);let m=function(s){let{year:p,month:u}=s.target.form;n(new Date(p.value,u.value));};return r__default["default"].createElement("form",{className:"DayPicker-Caption"},r__default["default"].createElement("select",{name:"month",onChange:m,value:t.getMonth()},a.map((e,s)=>r__default["default"].createElement("option",{key:e,value:s},e))),r__default["default"].createElement("select",{name:"year",onChange:m,value:t.getFullYear()},l.map(e=>r__default["default"].createElement("option",{key:e,value:e},e))))},C=(t,o,n)=>{let a=h__default["default"](t,o,null,{locale:n});if(reactDayPicker.DateUtils.isDate(a))return a},M=(t,o,n)=>c__default["default"](t,o,{locale:n});

exports.a = f;
exports.b = g;
exports.c = D;
exports.d = Y;
exports.e = C;
exports.f = M;
//# sourceMappingURL=chunk-6BKHVEDR.js.map