import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import CarouselItem from '.';
import { Orientation } from '../Carousel';
import '../../styles/reset.css';

export default {
  title: 'loet.me/CarouselItem',
  component: CarouselItem
} as Meta;

const Template: Story<CarouselItem> = args => <CarouselItem {...args} />;

export const Portrait = Template.bind({});
Portrait.args = {
  image: 'https://placehold.it/296x641'
};

export const Landscape = Template.bind({});
Landscape.args = {
  image: 'https://placehold.it/348x170',
  orientation: Orientation.landscape
};
