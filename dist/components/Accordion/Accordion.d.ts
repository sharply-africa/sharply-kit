import React__default from 'react';
import { BoxProps } from '../Box/Box.js';
import 'styled-system';
import '@emotion/react';
import '@styled-system/css';
import '../../lib/utils.js';

interface AccordionProps extends BoxProps {
    initialOpen?: boolean;
    onChange?: (v: any) => void;
}
declare const Accordion: React__default.ForwardRefExoticComponent<AccordionProps & React__default.RefAttributes<unknown>> & {
    Header: React__default.ForwardRefExoticComponent<BoxProps & React__default.RefAttributes<unknown>>;
    Content: React__default.ForwardRefExoticComponent<BoxProps & React__default.RefAttributes<unknown>>;
};

export { Accordion as default };
