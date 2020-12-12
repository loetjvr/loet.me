import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Background from '../components/Background';

export default {
  title: 'loet.me/Background',
  component: Background
} as Meta;

const Template: Story = () => <Background />;

export const Default = Template.bind({});
