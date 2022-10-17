import { SystemCssProperties } from '@styled-system/css';
import React__default from 'react';
import { ResponsiveValue } from 'styled-system';
import { BoxProps } from '../Box/Box.js';
import '@emotion/react';
import '../../lib/utils.js';

declare type StackDirection = ResponsiveValue<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
interface StackProps extends BoxProps {
    align?: SystemCssProperties['alignItems'] | any;
    direction?: StackDirection;
    divider?: React__default.ReactElement;
    isInline?: boolean;
    justify?: SystemCssProperties['justifyContent'] | any;
    shouldWrapChildren?: boolean;
    spacing?: SystemCssProperties['margin'];
    wrap?: SystemCssProperties['flexWrap'] | any;
}
declare const StackItem: (props: BoxProps) => JSX.Element;
declare const Stack: React__default.ForwardRefExoticComponent<StackProps & React__default.RefAttributes<unknown>>;

export { StackItem, Stack as default };
