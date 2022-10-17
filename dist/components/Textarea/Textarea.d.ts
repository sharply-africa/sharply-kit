import React__default from 'react';
import { BoxProps } from '../Box/Box.js';
import 'styled-system';
import '@emotion/react';
import '@styled-system/css';
import '../../lib/utils.js';

interface TextareaProps extends BoxProps {
    rows?: number | string;
}
declare const Textarea: React__default.ForwardRefExoticComponent<TextareaProps & React__default.RefAttributes<HTMLInputElement>>;

export { Textarea as default };
