import React, { forwardRef } from 'react';
import { X } from 'src/components/Icons';
import Button, { ButtonProps } from './Button';

const CloseButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <Button ref={ref} variant="iconSquare" {...props}>
      <X />
    </Button>
  );
});

export default CloseButton;
