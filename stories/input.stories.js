import React from 'react';
import { Input as InputComponent } from '../dist';

export default {
  title: 'Components/Form/Input',
};

const Template = (args) => (
  <InputComponent placeholder="Enter something" {...args} />
);

export const Input = Template.bind({});

Input.args = {
  disabled: false,
  onChange: console.log,
  onBlur: console.log,
  type: 'text',
};
