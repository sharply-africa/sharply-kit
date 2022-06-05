import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'src/components/Box';

const Card = forwardRef((props: BoxProps, ref) => {
  return <Box ref={ref} {...props} variant="card" />;
});

export default Card;
