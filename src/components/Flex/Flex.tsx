import styled from '@emotion/styled';
import { Box, BoxProps } from '~src/components/Box';

const Flex = styled(Box)<BoxProps>({
  display: 'flex',
});

export default Flex;
export type FlexProps = BoxProps;
