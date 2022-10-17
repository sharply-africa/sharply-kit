import React__default from 'react';
import { BoxProps } from '../Box/Box.js';
import 'styled-system';
import '@emotion/react';
import '@styled-system/css';
import '../../lib/utils.js';

interface SelectProps extends BoxProps {
    isLoading?: boolean;
    onChange?: (e: React__default.ChangeEvent<HTMLSelectElement>) => void;
    value?: any;
}
declare const Select: React__default.ForwardRefExoticComponent<SelectProps & React__default.RefAttributes<HTMLSelectElement>>;

export { Select as default };
