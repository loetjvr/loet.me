import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import IconButton from '.';
import '../../styles/reset.css';
import { colors } from '../../themes';

export default {
  title: 'loet.me/IconButton',
  component: IconButton,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta;

const Template: Story<IconButton> = args => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: faCoffee,
  color: colors.primary
};
