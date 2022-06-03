import React, { SVGProps } from 'react';

const CaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={9}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 5c.11 0 .255-.07.326-.141L8.852.858A.52.52 0 0 0 8.871.15.47.47 0 0 0 8.2.13L4.974 3.344c.026.031-.212.031-.474.031s-.5 0-.474-.031L.8.13a.477.477 0 0 0-.67.02.52.52 0 0 0 .019.707l4.026 4.001A.41.41 0 0 0 4.5 5Z"
      fill="#2C2727"
    />
  </svg>
);

export default CaretDown;
