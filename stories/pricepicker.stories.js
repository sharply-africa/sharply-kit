import React from 'react';
import { PricePicker as PricePickerComponent } from '../dist';

export default {
  title: 'Components/Compiled/PricePicker',
  component: PricePickerComponent,
};

export const PricePicker = (args) => <PricePickerComponent {...args} />;

PricePicker.args = {
  amount: 100,
};
