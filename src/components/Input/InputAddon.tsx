import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'src/components/Box';

const InputAddon = forwardRef((props: BoxProps, ref) => (
  <Box
    ref={ref}
    tx="form"
    {...props}
    __css={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      px: 4,
      py: 1,
    }}
  />
));

export default InputAddon;
