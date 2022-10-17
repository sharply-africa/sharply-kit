'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var n = require('react');
var react = require('@emotion/react');
var l = require('tinycolor2');

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

var n__namespace = /*#__PURE__*/_interopNamespace(n);
var l__default = /*#__PURE__*/_interopDefaultLegacy(l);

var f=t=>t.replace("var(","").replace(")",""),r=t=>{if(typeof window<"u"&&t){let o=document.querySelector(":root"),a=getComputedStyle(o),i=f(t),s=t.startsWith("var")?a.getPropertyValue(i):t,e=l__default["default"](s);return e.lighten(30),{color:t,background:e.toHexString()}}return {color:t,background:""}},d=()=>{var t,o;return n__namespace.createElement(react.Global,{styles:`
        .Toastify__toast-container {
          align-items: center;
          display: flex;
          flex-direction: column;
        }

        .Toastify__toast {
          align-items: center;
          background: ${(t=r("var(--primary)"))==null?void 0:t.background};
          border-radius: 10px;
          box-shadow: none;
          color: ${(o=r("var(--primary)"))==null?void 0:o.color};
          display: inline-flex;
          min-height: 5rem;
          min-width: 27.5rem;
        }

        .Toastify__toast--error {
          background: #f49c9c;
          color: #DF1818;
        }
        .Toastify__toast--success {
          background: #bee9e7;
          color: #4BC3BC;
        }

        .Toastify__toast--warning {
          background: #ffdb7b;
          color: #E1A300;
        }

        .Toastify__toast--info {
          background: #abd3ea;
          color: #3393C9;
        }

        .Toastify__toast-body {
          align-items: center;
          display: flex;
          font-family: inherit;
          font-size: 1.4rem;
          font-weight: normal;
          justify-content: space-between;
          padding: 0 1rem;
        }

        .Toastify__toast-body span {
          font-size: 1.4rem;
          font-weight: normal;
        }
        .Toastify__toast-body svg {
          display: none;
        }

        .Toastify__close-button {
          display: none;
        }
    `})},g=d;

exports.a = g;
//# sourceMappingURL=chunk-NHTN5IZX.js.map