import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { Flex } from '~src/components/Flex';

const Wrapper = styled(Flex)`
  > svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const IconBox = forwardRef((props, ref) => {
  return (
    <Wrapper
      ref={ref}
      {...props}
      __css={{
        alignItems: 'center',
        backgroundColor: 'primaryLight',
        borderRadius: '10px',
        height: '6.6rem',
        justifyContent: 'center',
        px: 2,
        py: 2,
        width: '6.6rem',
      }}
    />
  );
});

export default IconBox;
