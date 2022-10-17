import React__default from 'react';
import { BoxProps } from '../Box/Box.js';
import { TextProps } from '../Text/Text.js';
import 'styled-system';
import '@emotion/react';
import '@styled-system/css';
import '../../lib/utils.js';

interface RadioProps extends BoxProps {
    active?: boolean;
    isLoading?: boolean;
    onChange?: (v: boolean) => void;
    size?: string;
    subtitle?: string;
    subtitleProps?: TextProps;
    sx?: BoxProps['sx'];
    title?: string;
    titleProps?: TextProps;
}
declare const Radio: React__default.ForwardRefExoticComponent<RadioProps & React__default.RefAttributes<HTMLInputElement>>;

export { Radio, Radio as default };
