import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'src/components/Box';
import { Spinner } from 'src/components/Spinner';
import { Stack } from 'src/components/Stack';
import { Text, TextProps } from 'src/components/Text';

interface RadioProps extends BoxProps {
  active?: boolean;
  isLoading?: boolean;
  onChange?: (v: boolean) => void;
  size?: string;
  subtitle?: string;
  subtitleProps?: TextProps;
  sx?: BoxProps['sx'];
  title?: string;
  titleProps?: TextProps;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    active,
    isLoading = false,
    onChange = () => {},
    size = '1.6rem',
    subtitle,
    subtitleProps = {},
    sx = {},
    title,
    titleProps = {},
  } = props;

  return (
    <Stack
      direction="row"
      onClick={() => onChange(!active)}
      ref={ref}
      spacing={2}
      sx={{
        pointerEvents: isLoading ? 'none' : 'auto',
        ...(!subtitle ? { alignItems: 'center' } : {}),
        ...sx,
      }}
      {...props}
    >
      {isLoading ? (
        <Spinner size={size} />
      ) : (
        <Box
          __css={{
            alignItems: 'center',
            backgroundColor: active ? 'white' : 'transparent',
            border: '1px solid',
            borderColor: active ? 'primary' : '#C4C4C4',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            height: size,
            justifyContent: 'center',
            padding: '2px',
            position: 'relative',
            width: size,
          }}
        >
          <Box
            __css={{
              alignItems: !!subtitle ? 'center' : 'flex-start',
              backgroundColor: 'primary',
              borderRadius: 'base',
              height: '100%',
              opacity: active ? 1 : 0,
              transition: 'all 0.2s',
              width: '100%',
            }}
          />
        </Box>
      )}

      <Stack spacing={1}>
        {title ? (
          <Text
            fontSize="xs"
            color="heading"
            sx={{ userSelect: 'none' }}
            {...titleProps}
          >
            {title}
          </Text>
        ) : null}

        {subtitle ? (
          <Text
            fontSize="xxs"
            color="text"
            sx={{ userSelect: 'none' }}
            {...subtitleProps}
          >
            {subtitle}
          </Text>
        ) : null}
      </Stack>
    </Stack>
  );
});

export default Radio;
