'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chunkFZCMHFEU_js = require('./chunk-FZCMHFEU.js');
var chunkNHTN5IZX_js = require('./chunk-NHTN5IZX.js');
var chunk22CPMEEA_js = require('./chunk-22CPMEEA.js');
var e = require('react');
var reactToastify = require('react-toastify');
var react = require('@emotion/react');
var f = require('lodash.merge');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var e__namespace = /*#__PURE__*/_interopNamespace(e);
var f__default = /*#__PURE__*/_interopDefaultLegacy(f);

var g=e__namespace.createContext({}),v=n=>{let{children:i,googleMapsKey:o,resetCSS:h=!0,theme:p=chunk22CPMEEA_js.b}=n,[t,c]=e__namespace.useState({...p}),r=e__namespace.useCallback((T={})=>c(d=>f__default["default"](d,T)),[]),l=e__namespace.useMemo(()=>({googleMapsKey:o,theme:t,updateTheme:r}),[t,r,o]);return e__namespace.createElement(g.Provider,{value:l},e__namespace.createElement(react.ThemeProvider,{theme:t},h&&e__namespace.createElement(chunkFZCMHFEU_js.b,null),i,e__namespace.createElement(reactToastify.ToastContainer,{autoClose:5e3,closeOnClick:!0,draggable:!0,hideProgressBar:!0,newestOnTop:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,position:"bottom-center",rtl:!1,transition:reactToastify.Slide}),e__namespace.createElement(chunkNHTN5IZX_js.a,null)))},O=v;

exports.a = g;
exports.b = O;
//# sourceMappingURL=chunk-2L2R4YCB.js.map