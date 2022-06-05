import React, { forwardRef } from 'react';
import { Checkmark } from 'src/components/Icons';
import { Box, BoxProps } from 'src/components/Box';
import { Spinner } from 'src/components/Spinner';
import { Stack } from 'src/components/Stack';
import { Text, TextProps } from 'src/components/Text';

interface CheckboxProps extends BoxProps {
  active?: boolean;
  icon?: React.ReactElement;
  isLoading?: boolean;
  onChange?: (v: boolean) => void;
  size?: string;
  subtitle?: string;
  subtitleProps?: TextProps;
  title?: string;
  titleProps?: TextProps;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    active,
    icon,
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
            alignItems: !!subtitle ? 'center' : 'flex-start',
            backgroundColor: 'white',
            border: `1px solid ${active ? 'transparent' : '#C4C4C4'}`,
            borderRadius: 'base',
            cursor: 'pointer',
            display: 'flex',
            height: size,
            position: 'relative',
            width: size,
          }}
        >
          <Box
            __css={{
              alignItems: 'center',
              backgroundColor: 'primary',
              borderRadius: 'base',
              display: 'flex',
              height: size,
              justifyContent: 'center',
              left: 0,
              opacity: active ? 1 : 0,
              padding: '2px',
              position: 'absolute',
              top: 0,
              transition: 'all 0.2s',
              width: size,
            }}
          >
            {icon || <Checkmark />}
          </Box>
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

export default Checkbox;
