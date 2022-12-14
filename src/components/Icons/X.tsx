import React, { SVGProps } from 'react';

const X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="inherit"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M.195 15.805a.666.666 0 0 0 .942 0l6.859-6.859 6.858 6.859a.666.666 0 0 0 .943-.942L8.938 8.004l6.859-6.858a.667.667 0 1 0-.943-.943L7.996 7.062 1.137.203a.666.666 0 0 0-.942.943l6.859 6.858-6.859 6.859a.666.666 0 0 0 0 .942Z" />
  </svg>
);

export default X;
