import React__default from 'react';
import { BoxProps } from '../Box/Box.js';
import { IThemeFoundationSpace } from '../../theme/theme.js';
import { Children } from '../../lib/utils.js';
import 'styled-system';
import '@emotion/react';
import '@styled-system/css';
import '../../theme/components/index.js';
import '../../theme/foundations/index.js';
import '../../theme/variants/index.js';
import '../../theme/utils.js';

interface ButtonProps extends BoxProps {
    colorScheme?: keyof IThemeFoundationSpace;
    iconSpacing?: number;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isLoading?: boolean;
    leftIcon?: Children;
    rightIcon?: Children;
    showArrowIcon?: boolean;
    textColor?: keyof IThemeFoundationSpace;
}
declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

export { ButtonProps, Button as default };
