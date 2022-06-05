import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'src/components/Box';
import CaretDownIcon from 'src/assets/icons/caret-down.png';
import SelectSpinner from 'src/assets/icons/select-spinner.gif';

interface SelectProps extends BoxProps {
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
      appearance: 'none',
      backgroundColor: 'white',
      backgroundImage: `url(${CaretDownIcon})`,
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
      ...(props.isLoading
        ? {
            backgroundImage: `url(${SelectSpinner})`,
            backgroundSize: '25px',
            pointerEvents: 'none',
          }
        : {}),
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
