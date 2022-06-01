import React from 'react';
import { Textarea as TextareaComponent } from '../dist';

export default {
  title: 'Components/Form/Textarea',
  component: TextareaComponent,
};

export const Textarea = (args) => (
  <TextareaComponent placeholder="Enter something" {...args} />
);

Textarea.args = {
  value: 'Hello world',
};
