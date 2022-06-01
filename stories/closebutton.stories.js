import React from 'react';
import { CloseButton as CloseButtonComponent } from '../dist';

export default {
  title: 'Components/Base/Button/CloseButton',
  component: CloseButtonComponent,
  argTypes: {
    colorScheme: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
  },
};

export const CloseButton = (args) => <CloseButtonComponent {...args} />;

CloseButton.args = {
  children: 'Hello world',
};
