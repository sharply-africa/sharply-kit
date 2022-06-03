import React, { forwardRef } from 'react';
import { ArrowLeft } from '~src/components/Icons';
import Button, { ButtonProps } from './Button';

const BackButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <Button ref={ref} variant="iconSquare" {...props}>
      <ArrowLeft />
    </Button>
  );
});

export default BackButton;
