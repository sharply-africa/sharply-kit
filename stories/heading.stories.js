import React from 'react';
import { Heading as HeadingComponent } from '../dist';

export default {
  title: 'Components/Base/Heading',
  component: HeadingComponent,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export const Heading = (args) => <HeadingComponent {...args} />;

Heading.args = {
  children: 'Hello world',
};
