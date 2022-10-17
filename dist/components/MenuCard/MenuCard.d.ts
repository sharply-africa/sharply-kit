import React__default from 'react';
import { BoxProps } from '../Box/Box.js';
import { IThemeFoundationColors } from '../../theme/theme.js';
import { Children } from '../../lib/utils.js';
import 'styled-system';
import '@emotion/react';
import '@styled-system/css';
import '../../theme/components/index.js';
import '../../theme/foundations/index.js';
import '../../theme/variants/index.js';
import '../../theme/utils.js';

interface MenuCardProps extends BoxProps {
    icon?: Children;
    iconBg?: keyof IThemeFoundationColors;
    iconWrapperProps?: BoxProps;
    showArrow?: boolean;
    text?: string;
}
declare const MenuCard: React__default.ForwardRefExoticComponent<MenuCardProps & React__default.RefAttributes<unknown>>;

export { MenuCard as default };
