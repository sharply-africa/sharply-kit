import React, { forwardRef } from 'react';
import { Caution } from 'src/components/Icons';
import { Box, BoxProps } from 'src/components/Box';
import { Stack } from 'src/components/Stack';
import { Text } from 'src/components/Text';

interface FormErrorProps extends BoxProps {
  error?: string;
}

const FormError = forwardRef((props: FormErrorProps, ref) => {
  const { error } = props;

  if (!error) return null;

  return (
    <Stack
      ref={ref}
      spacing={1}
      direction="row"
      px={2}
      py={'1px'}
      sx={{
        alignItems: 'center',
        backgroundColor: 'red.50',
        border: '1px solid',
        borderColor: 'red.100',
        borderRadius: 'base',
        display: 'flex',
      }}
      {...props}
    >
      <Box sx={{ flexShrink: 0 }}>
        <Caution />
      </Box>
      <Text variant="errorText">{error}</Text>
    </Stack>
  );
});

export default FormError;
