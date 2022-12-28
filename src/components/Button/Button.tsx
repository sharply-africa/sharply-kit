import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import tinycolor from 'tinycolor2';
import { ArrowRight } from 'src/components/Icons';
import { Box, BoxProps } from 'src/components/Box';
import { Spinner } from 'src/components/Spinner';
import { IThemeFoundationSpace } from 'src/theme/theme';

const IconWrapper = styled(Box)<{ fill?: string }>`
  svg {
    fill: ${({ fill }) => fill};
  }
`;

export type ButtonProps = {
  colorScheme?: keyof IThemeFoundationSpace;
  iconSpacing?: number;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode | React.ReactNode[];
  rightIcon?: React.ReactNode | React.ReactNode[];
  showArrowIcon?: boolean;
  textColor?: keyof IThemeFoundationSpace;
} & BoxProps &
  React.ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    colorScheme = 'primary',
    iconSpacing = 4,
    isDisabled,
    isLoading,
    leftIcon,
    rightIcon,
    showArrowIcon,
    textColor,
    variant = 'solid',
    ...rest
  } = props;

  const theme = useTheme();
  const color = theme.colors[colorScheme] || colorScheme;
  const newTextColor =
    textColor || variant !== 'solid'
      ? color
      : tinycolor(color).isLight()
      ? theme.colors.primary
      : theme.colors.white;

  const wrapperWithIconStyle =
    leftIcon || rightIcon || showArrowIcon || isLoading
      ? {
          alignItems: 'center',
          justifyContent: isLoading ? 'center' : 'space-between',
        }
      : {};

  const renderRightIcon = () => {
    const wrapperProps = {
      fill: newTextColor,
      ml: iconSpacing,
    };

    if (isLoading) return null;

    if (rightIcon) {
      return <IconWrapper {...wrapperProps}>{rightIcon}</IconWrapper>;
    } else if (showArrowIcon) {
      return (
        <IconWrapper {...wrapperProps}>
          <ArrowRight />
        </IconWrapper>
      );
    }
    return null;
  };

  return (
    <Box
      ref={ref}
      as="button"
      tx="buttons"
      colorScheme={colorScheme}
      disabled={Boolean(isDisabled || isLoading)}
      {...props}
      __css={{
        appearance: 'none',
        bg: color,
        border: 0,
        borderRadius: 'base',
        color: newTextColor,
        display: 'inline-flex',
        fontSize: 'sm',
        position: 'relative',
        px: 6,
        py: 4,
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'all 250ms',
        userSelect: 'none',
        width: props.isFullWidth ? '100%' : 'auto',
      }}
      variant={variant}
      {...wrapperWithIconStyle}
      {...rest}
    >
      {leftIcon && !isLoading && (
        <IconWrapper fill={newTextColor} mr={iconSpacing}>
          {leftIcon}
        </IconWrapper>
      )}
      {isLoading ? (
        <Spinner size={'1.5rem'} color={newTextColor} thickness="1px" />
      ) : (
        children
      )}
      {renderRightIcon()}
    </Box>
  );
});

export default Button;
