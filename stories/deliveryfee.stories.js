import React from 'react';
import { DeliveryFee as DeliveryFeeComponent } from '../dist';

export default {
  title: 'Components/Compiled/DeliveryFee',
  component: DeliveryFeeComponent,
};

export const DeliveryFee = (args) => <DeliveryFeeComponent {...args} />;

DeliveryFee.args = {
  amount: 100,
};
