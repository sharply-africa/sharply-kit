import React, { forwardRef } from 'react';
import { Box, BoxProps } from '~src/components/Box';

interface TextareaProps extends BoxProps {
  rows?: number | string;
}

const Textarea = forwardRef<HTMLInputElement, TextareaProps>((props, ref) => (
  <Box
    as="textarea"
    ref={ref}
    tx="form"
    rows="4"
    {...props}
    __css={{
      appearance: 'none',
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: '#E7ECE8',
      borderRadius: 'base',
      color: 'heading',
      fontFamily: 'body',
      fontSize: ['sm'],
      fontWeight: 'normal',
      lineHeight: 'default',
      outline: 'none',
      px: 4,
      py: 3,
      '&:focus': {
        borderColor: 'primary',
      },
      width: '100%',
      '&:placholder': {
        color: '#C4C4C4',
      },
    }}
  />
));

export default Textarea;