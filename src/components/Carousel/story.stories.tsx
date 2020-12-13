import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Carousel, { Orientation } from '.';
import '../../styles/reset.css';

export default {
  title: 'loet.me/Carousel',
  component: Carousel
} as Meta;

const Template: Story<Carousel> = args => <Carousel {...args} />;

export const Portrait = Template.bind({});
Portrait.args = {
  images: [
    'https://placehold.it/296x641',
    'https://placehold.it/296x641',
    'https://placehold.it/296x641',
    'https://placehold.it/296x641',
    'https://placehold.it/296x641',
    'https://placehold.it/296x641'
  ],
  screenWidth: window.innerWidth
};

export const Landscape = Template.bind({});
Landscape.args = {
  images: [
    'https://placehold.it/348x170',
    'https://placehold.it/348x170',
    'https://placehold.it/348x170',
    'https://placehold.it/348x170',
    'https://placehold.it/348x170',
    'https://placehold.it/348x170'
  ],
  orientation: Orientation.landscape,
  screenWidth: window.innerWidth
};
