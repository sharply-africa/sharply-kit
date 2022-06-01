import React, { forwardRef } from 'react';
import { Stack } from '~src/components/Stack';

const FormGroup = forwardRef((props, ref) => (
  <Stack ref={ref} spacing={1} {...props} />
));

export default FormGroup;
