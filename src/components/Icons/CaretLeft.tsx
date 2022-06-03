import React, { SVGProps } from 'react';

const CaretLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={6}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.242 11.284a.373.373 0 0 0 .27.111.382.382 0 0 0 .27-.651L1.036 6l4.744-4.744a.382.382 0 0 0-.54-.54L.229 5.73a.382.382 0 0 0 0 .54l5.014 5.014Z"
      fill="#2C2727"
    />
  </svg>
);

export default CaretLeft;
