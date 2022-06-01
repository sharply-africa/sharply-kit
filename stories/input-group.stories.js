import React from 'react';
import { InputGroup as InputGroupComponent, InputAddon, Input } from '../dist';

export default {
  title: 'Components/Form/InputGroup',
  component: InputGroupComponent,
};

export const InputGroup = (args) => (
  <InputGroupComponent>
    <Input />

    <InputAddon>
      <p>Addon</p>
    </InputAddon>
  </InputGroupComponent>
);

InputGroup.args = {
  value: 'Hello world',
};
