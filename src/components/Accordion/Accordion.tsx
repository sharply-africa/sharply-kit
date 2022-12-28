import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Box, BoxProps } from 'src/components/Box';
import { AccordionContext } from './AccordionContext';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';

export interface AccordionComponentProps extends BoxProps {
  initialOpen?: boolean;
  onChange?: (v: any) => void;
}

export interface AccordionProps
  extends Omit<typeof AccordionComponent, 'Header' | 'Content'> {
  Header: typeof AccordionHeader;
  Content: typeof AccordionContent;
}

const AccordionComponent: React.ForwardRefExoticComponent<
  AccordionComponentProps & React.RefAttributes<HTMLDivElement>
> = forwardRef(
  (
    {
      children,
      initialOpen = false,
      onChange = () => {},
      ...rest
    }: AccordionComponentProps,
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const toggleOpen = useCallback(() => setIsOpen((v) => !v), []);

    const getContentHeight = () => {
      return contentRef?.current?.offsetHeight;
    };

    useEffect(() => {
      setContentHeight(isOpen ? getContentHeight() : 0);
      onChange(isOpen);
    }, [isOpen, onChange]);

    const value = useMemo(
      () => ({
        contentHeight,
        contentRef,
        isOpen,
        toggleOpen,
      }),
      [contentHeight, isOpen, toggleOpen],
    );

    return (
      <Box
        ref={ref}
        {...rest}
        __css={{
          ...(!isOpen ? { overflow: 'hidden' } : {}),
          bg: 'white',
          borderRadius: 'lg',
          userSelect: 'none',
        }}
      >
        <AccordionContext.Provider value={value}>
          {children}
        </AccordionContext.Provider>
      </Box>
    );
  },
);

const Accordion: AccordionProps = Object.assign(AccordionComponent, {
  Header: AccordionHeader,
  Content: AccordionContent,
});

export default Accordion;
