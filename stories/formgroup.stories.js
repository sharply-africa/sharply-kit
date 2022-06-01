import React from 'react';
import { Input, Label, FormGroup, FormError } from '../dist';

export default {
  title: 'Components/Form/Group',
  component: FormGroup,
};

export const Group = (args) => (
  <FormGroup {...args}>
    <Label>Name</Label>

    <Input placeholder="John Doe" />

    <FormError error={args.error} />
  </FormGroup>
);

Group.args = {
  error: '',
};
