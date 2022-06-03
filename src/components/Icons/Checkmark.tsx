import React, { SVGProps } from 'react';

const Checkmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.82.181a.57.57 0 0 0-.845.012L4.385 7.44 1.03 3.669a.57.57 0 0 0-.844-.023.672.672 0 0 0-.021.905L3.947 8.8A.58.58 0 0 0 4.376 9h.003c.162 0 .316-.07.428-.193l7.024-7.721a.672.672 0 0 0-.012-.905Z"
      fill="#fff"
    />
  </svg>
);

export default Checkmark;
