import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Box } from 'src/components/Box';
import { Flex, FlexProps } from 'src/components/Flex';

export const Wrapper = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Controls = styled(Flex)`
  flex-shrink: 0;
`;

export const Control = styled(Flex)<
  FlexProps & { disabled?: boolean; onClick?: () => void }
>`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  border: 1px solid rgba(162, 162, 186, 0.21);
  box-shadow: 0px 4px 4px rgba(241, 250, 249, 0.19);
  cursor: pointer;
  height: 3.6rem;
  justify-content: center;
  transition: all 0.2s;
  user-select: none;
  width: 3.6rem;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.4;
    `}
`;
