import React from 'react';
import { Box, BoxProps } from 'src/components/Box';
import { Card } from 'src/components/Card';
import { Stack } from 'src/components/Stack';
import { Text } from 'src/components/Text';
import { Money } from '../Icons';

type DeliveryFeeProps = {
  amount?: number;
} & BoxProps;

const DeliveryFee = ({ amount, ...props }: DeliveryFeeProps) => {
  if (typeof amount === 'undefined' || amount === null) return null;

  return (
    <Card {...props}>
      <Stack alignItems="center" spacing={2} direction="row">
        <Box
          alignItems="center"
          display="flex"
          flexShrink={0}
          height={'32px'}
          justifyContent="center"
          sx={{ borderRadius: '50%', overflow: 'hidden', position: 'relative' }}
          width={'32px'}
        >
          <Box
            backgroundColor="primary"
            sx={{
              height: '100%',
              left: 0,
              opacity: 0.1,
              position: 'absolute',
              top: 0,
              width: '100%',
            }}
          />
          <Money />
        </Box>

        <Text fontSize="xs">Delivery Fee</Text>

        <Text color="heading" fontWeight="bold">
          {amount}
        </Text>
      </Stack>
    </Card>
  );
};

export default DeliveryFee;
