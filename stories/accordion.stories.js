import React from 'react';
import { Accordion as AccordionComponent } from '../dist';

export default {
  title: 'Components/Base/Accordion',
  component: AccordionComponent,
  argTypes: {
    onChange: { action: 'onChange', control: null, defaultValue: () => {} },
  },
};

export const Accordion = (args) => (
  <AccordionComponent {...args}>
    <AccordionComponent.Header>Header</AccordionComponent.Header>

    <AccordionComponent.Content>
      lorem ipsum dolor sit amet
    </AccordionComponent.Content>
  </AccordionComponent>
);

Accordion.args = {
  initialOpen: false,
};
