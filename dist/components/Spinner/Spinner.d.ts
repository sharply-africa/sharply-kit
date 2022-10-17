import React__default from 'react';
import { BoxProps } from '../Box/Box.js';
import 'styled-system';
import '@emotion/react';
import '@styled-system/css';
import '../../lib/utils.js';

interface SpinnerProps extends BoxProps {
    color?: string;
    emptyColor?: string;
    size?: string | number;
    speed?: string | number;
    styles?: React__default.CSSProperties;
    thickness?: string;
}
declare const Spinner: React__default.ForwardRefExoticComponent<SpinnerProps & React__default.RefAttributes<unknown>>;

export { Spinner as default };
