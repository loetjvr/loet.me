import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Logo from '.';

export default {
  title: 'loet.me/Logo',
  component: Logo
} as Meta;

const Template: Story = () => <Logo />;

export const Default = Template.bind({});
