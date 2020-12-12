import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import HeaderItem from '../components/HeaderItem';
import '../styles/reset.css';

export default {
  title: 'loet.me/HeaderItem',
  component: HeaderItem,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta;

const Template: Story<HeaderItem> = args => (
  <HeaderItem {...args}>Link</HeaderItem>
);

export const Default = Template.bind({});
Default.args = {
  selected: false
};
