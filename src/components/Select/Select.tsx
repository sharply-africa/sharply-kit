import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'src/components/Box';

export interface SelectProps extends BoxProps {
  isLoading?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: any;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <Box
    as="select"
    ref={ref}
    tx="form"
    {...props}
    __css={{
      backgroundColor: 'white',
      backgroundPosition: 'calc(100% - 1rem) 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '12px',
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
      width: '100%',
      '&:focus': {
        borderColor: 'primary',
      },
      '&:placholder': {
        color: '#C4C4C4',
      },
    }}
  />
));

export default Select;
