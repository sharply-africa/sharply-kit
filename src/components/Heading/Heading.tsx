import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'src/components/Box';

export type HeadingProps = BoxProps;

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => (
  <Box ref={ref} as="h2" tx="text" variant="heading" {...props} />
));

export default Heading;
