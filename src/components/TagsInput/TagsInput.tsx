import React from 'react';
import Input, { ReactTagsInputProps } from 'react-tagsinput';
import { BoxProps } from '~src/components/Box';
import { Wrapper } from './StyledComponents';

interface TagsInputProps extends ReactTagsInputProps {
  inputProps?: any;
  wrapperProps?: BoxProps;
}

const TagsInput = ({
  inputProps,
  onChange = () => {},
  value = [],
  wrapperProps,
  ...props
}: TagsInputProps) => {
  return (
    <Wrapper {...wrapperProps}>
      <Input
        onChange={onChange}
        value={value}
        inputProps={{
          enterkeyhint: 'enter',
          placeholder: 'Type and press enter',
          ...inputProps,
        }}
        onlyUnique
        {...props}
      />
    </Wrapper>
  );
};

export default TagsInput;
