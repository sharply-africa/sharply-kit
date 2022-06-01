import React, { forwardRef } from 'react';
import { Box, BoxProps } from '~src/components/Box';
import { useAccordion } from './AccordionContext';

export type AccordionContentProps = BoxProps;

const AccordionContent = forwardRef(
  ({ children, ...props }: AccordionContentProps, ref) => {
    const { contentHeight, contentRef } = useAccordion();

    return (
      <Box
        ref={ref}
        maxHeight={contentHeight}
        __css={{ transition: 'all 0.2s' }}
      >
        <Box
          ref={contentRef}
          {...props}
          __css={{
            borderTop: '1px solid #F1FAF9',
            px: 4,
            py: 4,
          }}
        >
          {children}
        </Box>
      </Box>
    );
  },
);

export default AccordionContent;
