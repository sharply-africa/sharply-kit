import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'src/components/Box';

export type TextProps = BoxProps;

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => (
  <Box ref={ref} tx="text" as="p" variant="text" {...props} />
));

export default Text;
