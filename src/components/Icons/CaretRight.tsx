import React, { SVGProps } from 'react';

const CaretRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={6}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.758 11.284a.373.373 0 0 1-.27.111.382.382 0 0 1-.27-.651L4.964 6 .219 1.256a.382.382 0 0 1 .54-.54L5.771 5.73a.382.382 0 0 1 0 .54L.758 11.284Z"
      fill="#2C2727"
    />
  </svg>
);

export default CaretRight;
