import React, { forwardRef } from 'react';
import { Stack, StackProps } from 'src/components/Stack';

const FormGroup = forwardRef((props: StackProps, ref) => (
  <Stack ref={ref} spacing={1} {...props} />
));

export default FormGroup;
