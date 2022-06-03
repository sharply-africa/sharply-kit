import React, { SVGProps } from 'react';

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={9}
    fill="inherit"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18 4.5a.559.559 0 0 0-.13-.326L14.178.148a.454.454 0 0 0-.653-.019c-.18.166-.184.49-.018.67l2.964 3.227H.46A.468.468 0 0 0 0 4.5c0 .262.207.474.462.474H16.47L13.507 8.2a.505.505 0 0 0 .018.67.454.454 0 0 0 .653-.019l3.692-4.026A.427.427 0 0 0 18 4.5Z" />
  </svg>
);

export default ArrowRight;
