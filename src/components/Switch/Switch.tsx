import React, { useEffect, useRef, useState, forwardRef } from 'react';
import { Box, BoxProps } from 'src/components/Box';
import { Spinner } from 'src/components/Spinner';
import { Stack } from 'src/components/Stack';
import { Text, TextProps } from 'src/components/Text';
import { IThemeFoundationColors } from 'src/theme/theme';

interface SwitchProps extends BoxProps {
  active?: boolean;
  activeBackgroundColor?: keyof IThemeFoundationColors;
  inactiveBackgroundColor?: keyof IThemeFoundationColors;
  isLoading?: boolean;
  onChange?: (v: boolean) => void;
  subtitle?: string;
  subtitleProps?: TextProps;
  sx?: BoxProps['sx'];
  title?: string;
  titleProps?: TextProps;
  trackGap?: number;
  trackHeight?: string;
  trackWidth?: string;
}

const Switch = forwardRef((props: SwitchProps, ref) => {
  const {
    active,
    activeBackgroundColor = '#6041E0',
    inactiveBackgroundColor = '#C4C4C4',
    isLoading = false,
    onChange = () => {},
    subtitle,
    subtitleProps = {},
    sx = {},
    title,
    titleProps = {},
    trackGap = 3,
    trackHeight = '1.4rem',
    trackWidth = '2.6rem',
  } = props;

  const [thumbWidth, setThumbWidth] = useState(0);
  const [trackClientWidth, setTrackWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (trackRef.current?.clientWidth) {
      setThumbWidth(trackRef?.current?.clientHeight - trackGap * 2);
      setTrackWidth(trackRef?.current?.clientWidth);
    }
  }, [trackGap]);

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
        <Spinner size="1.6rem" />
      ) : (
        <Box
          ref={trackRef}
          __css={{
            backgroundColor: active
              ? activeBackgroundColor
              : inactiveBackgroundColor,
            borderRadius: 'full',
            cursor: 'pointer',
            display: 'flex',
            position: 'relative',
            height: trackHeight,
            width: trackWidth,
            px: `${trackGap}px`,
            py: `${trackGap}px`,
          }}
        >
          <Box
            __css={{
              backgroundColor: 'white',
              borderRadius: '50%',
              height: thumbWidth,
              left: !active
                ? `${trackGap}px`
                : `${trackClientWidth - trackGap - thumbWidth}px`,
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              transition: 'all 0.2s',
              width: thumbWidth,
            }}
          />
        </Box>
      )}

      <Stack spacing={1}>
        {title ? (
          <Text fontSize="xs" color="heading" {...titleProps}>
            {title}
          </Text>
        ) : null}

        {subtitle ? (
          <Text fontSize="xxs" color="text" {...subtitleProps}>
            {subtitle}
          </Text>
        ) : null}
      </Stack>
    </Stack>
  );
});

export default Switch;
