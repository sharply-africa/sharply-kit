import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'src/components/Box';

const InputGroup = forwardRef((props: BoxProps, ref) => (
  <Box
    ref={ref}
    tx="form"
    {...props}
    __css={{
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: '#E7ECE8',
      borderRadius: 'base',
      display: 'flex',
      width: '100%',
      input: {
        border: 'none',
      },
      '&:focus-within': {
        borderColor: 'primary',
      },
    }}
  />
));

export default InputGroup;
