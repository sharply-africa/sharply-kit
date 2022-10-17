import React__default from 'react';
import { BoxProps } from '../Box/Box.js';
import { TextProps } from '../Text/Text.js';
import { IThemeFoundationColors } from '../../theme/theme.js';
import 'styled-system';
import '@emotion/react';
import '@styled-system/css';
import '../../lib/utils.js';
import '../../theme/components/index.js';
import '../../theme/foundations/index.js';
import '../../theme/variants/index.js';
import '../../theme/utils.js';

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
declare const Switch: React__default.ForwardRefExoticComponent<SwitchProps & React__default.RefAttributes<unknown>>;

export { Switch as default };
