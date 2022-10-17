'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chunk32N4GA4D_js = require('./chunk-32N4GA4D.js');
var r = require('@emotion/styled');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var r__default = /*#__PURE__*/_interopDefaultLegacy(r);

var t=r__default["default"](chunk32N4GA4D_js.b)`
  .react-tel-input {
    border-radius: ${({theme:o})=>o.radii.base};
    border: 1px solid #e7ece8;
    font-family: ${({theme:o})=>o.fonts.body};
    font-size: ${({theme:o})=>o.fontSizes.sm};

    .flag-dropdown {
      border: none;

      &.open {
        border-radius: ${({theme:o})=>o.radii.base};
      }
    }

    .form-control {
      appearance: none;
      border: none;
      color: ${({theme:o})=>o.colors.heading};
      font-weight: ${({theme:o})=>o.fontWeights.normal};
      height: unset;
      line-height: ${({theme:o})=>o.lineHeights.default};
      outline: none;
      padding-bottom: ${({theme:o})=>o.space[3]};
      padding-left: ${({theme:o})=>o.space[12]};
      padding-right: ${({theme:o})=>o.space[4]};
      padding-top: ${({theme:o})=>o.space[3]};
      width: 100%;

      &:disabled {
        background-color: #e7ece8;
        opacity: 0.5;
      }

      &:placholder {
        color: #c4c4c4;
      }
    }

    &:focus-within {
      border-color: ${({theme:o})=>o.colors.primary};
    }
  }
`;

exports.a = t;
//# sourceMappingURL=chunk-MSJATYGT.js.map