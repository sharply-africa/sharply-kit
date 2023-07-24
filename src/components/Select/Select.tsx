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
      appearance: 'none',
      backgroundColor: 'white',
      backgroundPosition: 'calc(100% - 1rem) 50%',
      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg fill='%232C2727' width='9' height='5' viewBox='0 0 9 5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5c.11 0 .255-.07.326-.141L8.852.858A.52.52 0 0 0 8.871.15.47.47 0 0 0 8.2.13L4.974 3.344c.026.031-.212.031-.474.031s-.5 0-.474-.031L.8.13a.477.477 0 0 0-.67.02.52.52 0 0 0 .019.707l4.026 4.001A.41.41 0 0 0 4.5 5Z' /%3E%3C/svg%3E")`,
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
            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg width='8' height='8' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_ajPY%7Btransform-origin:center;animation:spinner_AtaB .75s infinite linear%7D@keyframes spinner_AtaB%7B100%25%7Btransform:rotate(360deg)%7D%7D%3C/style%3E%3Cpath d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z' opacity='.25'/%3E%3Cpath d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z' class='spinner_ajPY'/%3E%3C/svg%3E")`,
            backgroundSize: '25px',
            pointerEvents: 'none',
          }
        : {}),
      '&:focus': { borderColor: 'primary' },
      '&:placholder': { color: '#C4C4C4' },
    }}
  />
));

export default Select;
