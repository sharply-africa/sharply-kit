import React__default from 'react';
import { BoxProps } from '../Box/Box.js';
import { IThemeFoundationColors } from '../../theme/theme.js';
import 'styled-system';
import '@emotion/react';
import '@styled-system/css';
import '../../lib/utils.js';
import '../../theme/components/index.js';
import '../../theme/foundations/index.js';
import '../../theme/variants/index.js';
import '../../theme/utils.js';

interface BadgeProps extends Omit<BoxProps, 'color'> {
    alpha?: number;
    color?: keyof IThemeFoundationColors;
    text?: string;
    variant?: 'default' | 'primary' | 'error' | 'info' | 'success' | 'warning';
}
declare const Badge: React__default.ForwardRefExoticComponent<BadgeProps & React__default.RefAttributes<unknown>>;

export { Badge as default };
