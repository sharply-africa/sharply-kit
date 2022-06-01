import React from 'react';
import { Stack as StackComponent } from '../dist';

export default {
  title: 'Components/Base/Stack',
  component: StackComponent,
  argTypes: {
    props: {
      control: 'object',
    },
  },
};

export const Stack = () => (
  <StackComponent spacing={4} direction="row">
    <h1>Hello</h1>
    <h2>Hi</h2>
    <button>Beep</button>

    <h1>Hello</h1>
    <h2>Hi</h2>
    <button>Beep</button>

    <h1>Hello</h1>
    <h2>Hi</h2>
    <button>Beep</button>
  </StackComponent>
);
