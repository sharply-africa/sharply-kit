import React__default from 'react';

declare type AccordionContextType = {
    contentHeight: number;
    contentRef: React__default.RefObject<HTMLDivElement>;
    isOpen: boolean;
    toggleOpen: () => void;
};
declare const AccordionContext: React__default.Context<AccordionContextType>;
declare const useAccordion: () => AccordionContextType;

export { AccordionContext, AccordionContextType, useAccordion };
