/* eslint-disable @typescript-eslint/naming-convention */
// component source (Chakra UI): https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/stack.tsx

import { SystemCssProperties } from '@styled-system/css';
import React, { forwardRef } from 'react';
import { ResponsiveValue } from 'styled-system';
import { Box, BoxProps } from 'src/components/Box';
import {
  getDividerStyles,
  getStackStyles,
  getValidChildren,
  selector,
} from './utils';

export type StackDirection = ResponsiveValue<
  'row' | 'column' | 'row-reverse' | 'column-reverse'
>;

export interface StackProps extends BoxProps {
  align?: SystemCssProperties['alignItems'] | any;
  direction?: StackDirection;
  divider?: React.ReactElement;
  isInline?: boolean;
  justify?: SystemCssProperties['justifyContent'] | any;
  shouldWrapChildren?: boolean;
  spacing?: SystemCssProperties['margin'];
  wrap?: SystemCssProperties['flexWrap'] | any;
}

export const StackItem = (props: BoxProps) => (
  <Box
    {...props}
    __css={{
      display: 'inline-block',
      flex: '0 0 auto',
      minWidth: 0,
      ...props.__css,
    }}
  />
);

const Stack = forwardRef((props: StackProps, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = '0.5rem',
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren,
    ...rest
  } = props;

  const direction = isInline ? 'row' : directionProp ?? 'column';

  const styles = React.useMemo(
    () => getStackStyles({ direction, spacing }),
    [direction, spacing],
  );

  const dividerStyle = React.useMemo(
    () => getDividerStyles({ spacing, direction }),
    [spacing, direction],
  );

  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;

  const validChildren = getValidChildren(children);

  const clones = shouldUseChildren
    ? validChildren
    : validChildren.map((child, index) => {
        const isLast = index + 1 === validChildren.length;
        const wrappedChild = <StackItem key={index}>{child}</StackItem>;
        const _child = shouldWrapChildren ? wrappedChild : child;

        if (!hasDivider) return _child;

        const clonedDivider = React.cloneElement(divider, {
          __css: dividerStyle,
        });

        const _divider = isLast ? null : clonedDivider;

        return (
          <React.Fragment key={index}>
            {_child}
            {_divider}
          </React.Fragment>
        );
      });

  return (
    <Box
      ref={ref}
      display="flex"
      alignItems={align}
      justifyContent={justify}
      flexDirection={styles.flexDirection}
      flexWrap={wrap}
      className={className}
      __css={hasDivider ? {} : { [selector]: styles[selector] }}
      {...rest}
    >
      {clones}
    </Box>
  );
});

export default Stack;
