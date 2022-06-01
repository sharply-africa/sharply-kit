import React, { forwardRef } from 'react';
import ArrowLeft from '~src/assets/icons/arrow-left.svg';
import Button, { ButtonProps } from './Button';

const BackButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <Button ref={ref} variant="iconSquare" {...props}>
      <ArrowLeft />
    </Button>
  );
});

export default BackButton;
