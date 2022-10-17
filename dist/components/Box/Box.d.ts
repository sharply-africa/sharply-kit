import * as styled_system from 'styled-system';
import { BackgroundProps, BorderProps, BordersProps, ColorProps, FlexboxProps, GridProps, LayoutProps, OpacityProps, OverflowProps, PositionProps, ShadowProps, SpaceProps, TypographyProps } from 'styled-system';
import React__default from 'react';
import { ClassNamesProps } from '@emotion/react';
import { CSSProperties } from '@styled-system/css';
import { Children } from '../../lib/utils.js';

interface BoxProps extends BackgroundProps, BorderProps, BordersProps, ColorProps, FlexboxProps, GridProps, LayoutProps, OpacityProps, OverflowProps, PositionProps, ShadowProps, SpaceProps, TypographyProps {
    __css?: CSSProperties | React__default.CSSProperties | any;
    as?: React__default.ElementType<any>;
    children?: Children;
    className?: ClassNamesProps;
    disabled?: boolean;
    onClick?: React__default.MouseEventHandler<HTMLElement>;
    sx?: CSSProperties;
    tx?: string;
    variant?: string;
}
declare const systemProps: styled_system.styleFn;
declare const Box: React__default.ForwardRefExoticComponent<BoxProps & React__default.RefAttributes<unknown>>;

export { BoxProps, Box as default, systemProps };
