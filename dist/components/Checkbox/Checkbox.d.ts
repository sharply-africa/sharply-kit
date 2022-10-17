import React__default from 'react';
import { BoxProps } from '../Box/Box.js';
import { TextProps } from '../Text/Text.js';
import 'styled-system';
import '@emotion/react';
import '@styled-system/css';
import '../../lib/utils.js';

interface CheckboxProps extends BoxProps {
    active?: boolean;
    icon?: React__default.ReactElement;
    isLoading?: boolean;
    onChange?: (v: boolean) => void;
    size?: string;
    subtitle?: string;
    subtitleProps?: TextProps;
    title?: string;
    titleProps?: TextProps;
}
declare const Checkbox: React__default.ForwardRefExoticComponent<CheckboxProps & React__default.RefAttributes<HTMLInputElement>>;

export { Checkbox as default };
