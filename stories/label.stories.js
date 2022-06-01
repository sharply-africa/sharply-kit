import React from 'react';
import { Label as LabelComponent } from '../dist';

export default {
  title: 'Components/Form/Label',
  component: LabelComponent,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export const Label = (args) => <LabelComponent {...args} />;

Label.args = {
  children: 'Hello world',
};
