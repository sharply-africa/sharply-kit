'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function n(t,e){let r=react.useRef(!1);typeof e<"u"&&!Array.isArray(e)?e=[e]:Array.isArray(e)&&e.length===0&&console.warn("Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0."),react.useEffect(()=>{r.current?t():r.current=!0;},e),react.useEffect(()=>()=>{r.current=!1;},[]);}

exports.useDidUpdate = n;
//# sourceMappingURL=useDidUpdate.js.map