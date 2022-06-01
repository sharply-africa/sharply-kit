import styled from '@emotion/styled';
import { Box } from '~src/components/Box';

export const PhoneInputWrapper = styled(Box)`
  .react-tel-input {
    border-radius: ${({ theme }) => theme.radii.base};
    border: 1px solid #e7ece8;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.sm};

    .flag-dropdown {
      border: none;

      &.open {
        border-radius: ${({ theme }) => theme.radii.base};
      }
    }

    .form-control {
      appearance: none;
      border: none;
      color: ${({ theme }) => theme.colors.heading};
      font-weight: ${({ theme }) => theme.fontWeights.normal};
      height: unset;
      line-height: ${({ theme }) => theme.lineHeights.default};
      outline: none;
      padding-bottom: ${({ theme }) => theme.space[3]};
      padding-left: ${({ theme }) => theme.space[12]};
      padding-right: ${({ theme }) => theme.space[4]};
      padding-top: ${({ theme }) => theme.space[3]};
      width: 100%;

      &:disabled {
        background-color: #e7ece8;
        opacity: 0.5;
      }

      &:placholder {
        color: #c4c4c4;
      }
    }

    &:focus-within {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
