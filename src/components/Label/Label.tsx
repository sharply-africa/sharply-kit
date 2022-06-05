import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'src/components/Box';

const Label = forwardRef<HTMLLabelElement, BoxProps>((props, ref) => (
  <Box
    as="label"
    ref={ref}
    tx="form"
    {...props}
    __css={{
      color: 'text',
      display: 'inline-block',
      fontFamily: 'body',
      fontSize: ['xs'],
      fontWeight: 'normal',
      lineHeight: '1.185',
    }}
  />
));

export default Label;
