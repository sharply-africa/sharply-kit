import React, { SVGProps } from 'react';

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={9}
    fill="inherit"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 4.5c0-.11.065-.255.13-.326L3.822.148a.454.454 0 0 1 .653-.019c.18.166.184.49.018.67L1.529 4.026h16.01c.254 0 .461.212.461.474a.468.468 0 0 1-.462.474H1.53L4.493 8.2a.506.506 0 0 1-.018.67.454.454 0 0 1-.653-.019L.13 4.826A.427.427 0 0 1 0 4.5Z" />
  </svg>
);

export default ArrowLeft;
