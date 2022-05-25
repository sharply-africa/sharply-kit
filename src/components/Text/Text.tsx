import React, { forwardRef } from 'react';
import { Box } from '~src/components/Box';

const Text = forwardRef((props, ref) => (
  <Box ref={ref} tx="text" as="p" variant="text" {...props} />
));

export default Text;
