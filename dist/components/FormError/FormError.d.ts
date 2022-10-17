import React__default from 'react';
import { BoxProps } from '../Box/Box.js';
import 'styled-system';
import '@emotion/react';
import '@styled-system/css';
import '../../lib/utils.js';

interface FormErrorProps extends BoxProps {
    error?: string;
}
declare const FormError: React__default.ForwardRefExoticComponent<FormErrorProps & React__default.RefAttributes<unknown>>;

export { FormError as default };
