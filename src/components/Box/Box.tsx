// ln-95-97 source: https://github.com/emotion-js/emotion/issues/1272#issuecomment-517163194
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  BordersProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  OpacityProps,
  OverflowProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { ClassNamesProps } from '@emotion/react';
import css, { CSSProperties, get } from '@styled-system/css';
import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop';
import { Children } from 'src/lib/utils';

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    BordersProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    OpacityProps,
    OverflowProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {
  __css?: CSSProperties | React.CSSProperties | any;
  as?: React.ElementType<any>;
  children?: Children;
  className?: ClassNamesProps;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  sx?: CSSProperties;
  tx?: string;
  variant?: string;
}

const shouldForwardProp = createShouldForwardProp([
  ...props,
  'd',
  'textDecoration',
  'pointerEvents',
  'visibility',
  'transform',
  'cursor',
  'fill',
  'stroke',
]);

const sx = (p) => css(p.sx)(p.theme);
const base = (p) => css(p.__css)(p.theme);
const getVariant = ({ theme, variant, tx = 'variants' }) =>
  css(get(theme, tx + '.' + variant, get(theme, variant)))(theme);

export const systemProps = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
);

const BoxComponent = styled('div', {
  shouldForwardProp,
})(
  { boxSizing: 'border-box', margin: 0, minWidth: 0, padding: 0 },
  base,
  getVariant,
  systemProps,
  sx,
);

const Box = forwardRef((p: BoxProps, ref) => <BoxComponent ref={ref} {...p} />);

export default Box;
