import React, { useEffect, useMemo, useState, forwardRef } from 'react';
import tinycolor from 'tinycolor2';
import { Box, BoxProps } from '~src/components/Box';
import { Text } from '~src/components/Text';
import useTheme from '~src/hooks/useTheme';
import { IThemeFoundationColors } from '~src/theme/theme';

interface BadgeProps extends Omit<BoxProps, 'color'> {
  alpha?: number;
  color?: keyof IThemeFoundationColors;
  text?: string;
  variant?: 'default' | 'primary' | 'error' | 'info' | 'success' | 'warning';
}

const VARIANTS = {
  default: '#0988FD',
  primary: 'var(--primary)',
  error: '#E47A7A',
  info: '#07AFC6',
  success: '#4BC3BC',
  warning: '#E1A300',
};

const Badge = forwardRef(
  (
    {
      alpha = 0.25,
      children,
      color,
      text,
      variant = 'success',
      ...props
    }: BadgeProps,
    ref,
  ) => {
    const [bg, setBg] = useState('');
    const { theme } = useTheme();

    const themeColor = useMemo(() => {
      if (color) {
        return theme.colors[color] || color;
      } else {
        return VARIANTS[variant];
      }
    }, [color, variant, theme.colors]);

    const getPropName = (prop) => {
      return prop.replace('var(', '').replace(')', '');
    };

    useEffect(() => {
      const root = document.querySelector(':root');
      const rs = getComputedStyle(root);
      const propName = getPropName(themeColor);

      const hexColor = themeColor.startsWith('var')
        ? rs.getPropertyValue(propName)
        : themeColor;

      const newTinyColor = tinycolor(hexColor);
      newTinyColor.setAlpha(alpha);
      setBg(newTinyColor.toRgbString());
    }, [alpha, color, themeColor]);

    return (
      <Box
        ref={ref}
        {...props}
        __css={{
          bg,
          borderRadius: 'full',
          display: 'inline-block',
          px: 2,
          py: 1,
        }}
      >
        {children || (
          <Text fontSize="xs" color={themeColor}>
            {text}
          </Text>
        )}
      </Box>
    );
  },
);

export default Badge;
