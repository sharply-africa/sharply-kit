import React, { useRef } from 'react';
import { Box } from 'src/components/Box';
import { Card } from 'src/components/Card';
import { Flex } from 'src/components/Flex';
import { FormError } from 'src/components/FormError';
import { FormGroup } from 'src/components/FormGroup';
import { Input } from 'src/components/Input';
import { Label } from 'src/components/Label';
import { Stack } from 'src/components/Stack';
import { Text } from 'src/components/Text';
import useClickAway from 'src/hooks/useClickAway';
import useToggle from 'src/hooks/useToggle';
import { capitalizeString } from 'src/lib';
import { CaretDown } from '../Icons';

export type PricePickerProps = {
  error: string;
  getPrice?: (price: string) => Record<string, any>;
  label?: string;
  name?: string;
  onChange: (v: string) => void;
  pricelists?: Record<string, any>[];
  value: string;
};

const PricePicker = ({
  error,
  getPrice = (v) => ({}),
  label = 'Delivery Area',
  name = 'deliveryArea',
  onChange,
  pricelists = [],
  value,
}: PricePickerProps) => {
  const ref = useRef(null);
  const { isOpen, toggle, close } = useToggle();

  useClickAway(ref, () => {
    if (isOpen) close();
  });

  const selectedPrice = getPrice(value);

  return (
    <Box sx={{ position: 'relative' }} ref={ref}>
      <FormGroup>
        <Label htmlFor={name}>{label}</Label>
        <Box onClick={toggle} position="relative">
          <Input
            id={name}
            name={name}
            placeholder="Select Area"
            value={
              value
                ? `${selectedPrice?.from?.name} - ${selectedPrice?.to?.name}`
                : ''
            }
            readOnly
          />

          <Box
            position="absolute"
            top="50%"
            right={5}
            sx={{ transform: 'translateY(-50%)', pointerEvents: 'none' }}
          >
            <CaretDown />
          </Box>
        </Box>
        <FormError error={error} />
      </FormGroup>

      {isOpen && (
        <Stack
          alignItems="stretch"
          as={Card}
          flexDirection="column"
          spacing={3}
          sx={{
            boxShadow: '0px 1px 2px #E7ECE8',
            left: 0,
            maxHeight: '30rem',
            overflow: 'auto',
            p: 3,
            position: 'absolute',
            top: 'calc(100% +  0.4rem)',
            zIndex: 10,
          }}
          width="100%"
        >
          {!Boolean(pricelists.length) && (
            <Flex
              alignItems="center"
              justifyContent="center"
              py={3}
              flexDirection="column"
            >
              <Text textAlign="center" variant="thickText">
                No delivery areas available
              </Text>
            </Flex>
          )}

          {pricelists.map((price) => (
            <Box
              key={price._id}
              sx={{
                alignItems: 'flex-start',
                cursor: 'pointer',
                display: 'grid',
                gap: 2,
                gridTemplateColumns: '1fr auto 1fr',
              }}
              onClick={() => {
                onChange(price._id);
                close();
              }}
            >
              <Box>
                <Text color="heading">{price?.from?.name}</Text>
                <Text color="heading" fontSize="xxs">
                  {price?.from?.lgas
                    .map((i) => i.cities.map((city) => capitalizeString(city)))
                    .flat()
                    .join(',  ')}
                </Text>
              </Box>

              <Box alignSelf="center">
                <Box width="13px" height="1px" backgroundColor="heading" />
              </Box>

              <Box>
                <Text color="heading">{price?.to?.name}</Text>
                <Text color="heading" fontSize="xxs">
                  {price?.to?.lgas
                    .map((i) => i.cities.map((city) => capitalizeString(city)))
                    .flat()
                    .join(',  ')}
                </Text>
              </Box>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default PricePicker;
