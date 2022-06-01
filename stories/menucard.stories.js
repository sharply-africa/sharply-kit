import React from 'react';
import { MenuCard as MenuCardComponent } from '../dist';

export default {
  title: 'Components/Base/MenuCard',
  component: MenuCardComponent,
};

export const MenuCard = (args) => <MenuCardComponent {...args} />;

MenuCard.args = {
  text: 'Hello world',
};
