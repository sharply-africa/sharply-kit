import React, { forwardRef } from 'react';
import X from '~src/assets/icons/x.svg';
import Button, { ButtonProps } from './Button';

const CloseButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <Button ref={ref} variant="iconSquare" {...props}>
      <X />
    </Button>
  );
});

export default CloseButton;
