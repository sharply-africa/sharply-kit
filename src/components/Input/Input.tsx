/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { forwardRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import { usePlacesWidget } from 'react-google-autocomplete';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import { Box, BoxProps } from 'src/components/Box';
import useTheme from 'src/hooks/useTheme';
import { PhoneInputWrapper } from './StyledComponents';
import { mergeRefs } from 'src/lib';

type InputProps = React.HTMLProps<HTMLInputElement>;

type InputRef =
  | string
  | ((instance: HTMLInputElement) => void)
  | React.MutableRefObject<HTMLInputElement>;

const InputComponent = forwardRef<
  HTMLInputElement,
  BoxProps & HTMLInputElement
>((props, ref) => (
  <Box
    as="input"
    ref={ref}
    tx="form"
    {...props}
    __css={{
      appearance: 'none',
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: '#E7ECE8',
      borderRadius: 'base',
      color: 'heading',
      fontFamily: 'body',
      fontSize: ['sm'],
      fontWeight: 'normal',
      lineHeight: 'default',
      outline: 'none',
      px: 4,
      py: 3,
      width: '100%',
      '&:disabled': {
        backgroundColor: '#E7ECE8',
        opacity: 0.5,
      },
      '&:readonly': {
        backgroundColor: '#E7ECE8',
        opacity: 0.5,
      },
      '&:focus': {
        borderColor: 'primary',
      },
      '&:placholder': {
        color: '#C4C4C4',
      },
    }}
  />
));

const AUTOCOMPLETE_FIELDS = ['geometry.location', 'formatted_address'];

export const Input = forwardRef<InputRef, InputProps>(
  ({ onChange, type, value, ...props }, ref) => {
    const hasSetDefaultValue = React.useRef(false);
    const { googleMapsKey } = useTheme();

    const { ref: placesRef } = usePlacesWidget({
      apiKey: googleMapsKey,
      onPlaceSelected: (location) => {
        if (placesRef?.current?.value) {
          placesRef.current.value = location?.formatted_address || '';
        }
        onChange?.(location);
      },
      options: {
        types: ['geocode', 'establishment'],
        componentRestrictions: { country: 'ng' },
        fields: AUTOCOMPLETE_FIELDS,
      },
    });

    const {
      placePredictions,
      getPlacePredictions,
      placesService,
      isPlacePredictionsLoading,
    } = usePlacesService({
      apiKey: googleMapsKey,
      options: {
        types: ['address'],
        componentRestrictions: { country: 'ng' },
      },
    });

    React.useEffect(() => {
      if (
        props.defaultValue &&
        type === 'address' &&
        !hasSetDefaultValue.current
      ) {
        placesRef.current.value = props.defaultValue;
        getPlacePredictions({ input: props.defaultValue });
        hasSetDefaultValue.current = true;
      }
    }, [getPlacePredictions, placesRef, props.defaultValue, type]);

    React.useEffect(() => {
      if (!isPlacePredictionsLoading && placePredictions.length) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { place_id } = placePredictions[0];

        placesService?.getDetails(
          { placeId: place_id, fields: AUTOCOMPLETE_FIELDS },
          (place) => {
            onChange(place);
            hasSetDefaultValue.current = false;
          },
        );
      }
    }, [isPlacePredictionsLoading, placePredictions, placesService, onChange]);

    React.useEffect(() => {
      if (!value && placesRef?.current) {
        placesRef.current.value = '';
      }
    }, [placesRef, value]);

    if (type === 'phone') {
      return (
        <PhoneInputWrapper ref={ref}>
          <PhoneInput
            autoFormat
            country="ng"
            inputProps={{ ...props }}
            onChange={onChange}
            value={value}
            {...props}
          />
        </PhoneInputWrapper>
      );
    }

    if (type === 'address') {
      return (
        <InputComponent
          ref={mergeRefs(ref, placesRef)}
          autoComplete="off"
          type={type}
          {...props}
          onBlur={(evt) => {
            props.onBlur?.(evt);
            if (!evt.target.value) {
              onChange(null);
            }
          }}
        />
      );
    }

    return (
      <InputComponent
        onChange={onChange}
        ref={ref}
        type={type}
        value={value as string}
        {...props}
      />
    );
  },
);

export default Input;
