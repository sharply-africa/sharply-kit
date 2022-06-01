import React, { createContext, useContext } from 'react';

export type AccordionContextType = {
  contentHeight: number;
  contentRef: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  toggleOpen: () => void;
};

export const AccordionContext = createContext({} as AccordionContextType);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error('useAccordion should be used in an AccordionProvider');

  return context;
};
