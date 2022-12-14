import React, { forwardRef } from 'react';
import { Box, BoxProps } from 'src/components/Box';
import { CaretDown } from 'src/components/Icons';
import { useAccordion } from './AccordionContext';

export type AccordionHeaderProps = { icon?: any } & BoxProps;

const AccordionHeader = forwardRef(
  ({ children, icon, ...props }: AccordionHeaderProps, ref) => {
    const { isOpen, toggleOpen } = useAccordion();

    return (
      <Box
        onClick={toggleOpen}
        ref={ref}
        {...props}
        __css={{
          alignItems: 'center',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          p: 4,
        }}
      >
        <Box
          __css={{
            flex: 1,
          }}
        >
          {children}
        </Box>

        <Box
          __css={{
            flexShrink: 0,
            ml: 2,
            transform: isOpen ? 'rotate(-180deg)' : '',
            transition: 'all 0.2s',
          }}
        >
          {icon ?? <CaretDown />}
        </Box>
      </Box>
    );
  },
);

export default AccordionHeader;
