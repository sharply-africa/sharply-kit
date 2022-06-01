import React from 'react';
import { Text as TextComponent } from '../dist';

export default {
  title: 'Components/Base/Text',
  component: TextComponent,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export const Text = (args) => <TextComponent {...args} />;

Text.args = {
  children: 'Hello world',
};
