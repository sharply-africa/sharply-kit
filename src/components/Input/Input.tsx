/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { forwardRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import { usePlacesWidget } from 'react-google-autocomplete';
import usePlacesAutocompleteService from 'src/hooks/usePlacesAutocompleteService';
import { Box, BoxProps } from 'src/components/Box';
import useTheme from 'src/hooks/useTheme';
import { mergeRefs } from 'src/lib';
import { PhoneInputWrapper } from './StyledComponents';

export interface InputProps extends Omit<BoxProps, 'value' | 'onChange'> {
  type?: 'text' | 'password' | 'email' | 'phone' | 'address';
  onChange?: (
    event: React.FormEvent<HTMLInputElement> | google.maps.places.PlaceResult,
  ) => void;
  placesOptions?: Record<string, any>;
  [key: string]: any;
}

export type InputRef =
  | string
  | ((instance: HTMLInputElement) => void)
  | React.MutableRefObject<HTMLInputElement>;

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => (
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
  ),
);

const AUTOCOMPLETE_FIELDS = ['geometry.location', 'formatted_address'];

export const Input = forwardRef<InputRef, InputProps>(
  ({ onChange, type, value, placesOptions, ...props }, ref) => {
    const hasSetDefaultValue = React.useRef(false);
    const { googleMapsKey } = useTheme();

    const { ref: placesRef } = usePlacesWidget<HTMLInputElement>({
      apiKey: googleMapsKey,
      onPlaceSelected: (location) => {
        if (placesRef?.current?.value) {
          placesRef.current.value = location?.formatted_address || '';
        }
        onChange?.(location);
      },
      options: {
        types: ['geocode', 'establishment'],
        fields: AUTOCOMPLETE_FIELDS,
        ...placesOptions,
      },
    });

    const { getPlacePredictions, placesService } = usePlacesAutocompleteService(
      {
        apiKey: googleMapsKey,
        options: {
          types: ['address'],
          componentRestrictions: { country: 'ng' },
        },
        onPlacePredictionsChanged: (predictions) => {
          if (predictions?.length) {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const { place_id } = predictions[0];
            placesService?.getDetails(
              { placeId: place_id, fields: AUTOCOMPLETE_FIELDS },
              (place) => {
                onChange(place);
                hasSetDefaultValue.current = false;
              },
            );
            const { description } = predictions[0];
            placesRef.current.value = description;
          } else {
            onChange(null);
            hasSetDefaultValue.current = false;
          }
        },
      },
    );

    React.useEffect(() => {
      if (
        props.defaultValue &&
        type === 'address' &&
        !hasSetDefaultValue.current
      ) {
        const defaultValue = props.defaultValue as string;
        placesRef.current.value = defaultValue;
        getPlacePredictions({ input: defaultValue });
        hasSetDefaultValue.current = true;
      }
    }, [getPlacePredictions, placesRef, props.defaultValue, type]);

    React.useEffect(() => {
      if (!value && placesRef?.current) {
        placesRef.current.value = '';
      }
    }, [placesRef, value]);

    if (type === 'phone') {
      return (
        <PhoneInputWrapper>
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
