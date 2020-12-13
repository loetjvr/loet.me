import React from 'react';
import { Orientation } from '../Carousel';
import { Container, Image } from './styles';

interface CarouselItem {
  image: string;
  orientation: Orientation;
}

const CarouselItem = ({ image, orientation }: CarouselItem): JSX.Element => {
  console.log(orientation);

  return (
    <Container orientation={orientation}>
      <Image src={image} />
    </Container>
  );
};

CarouselItem.defaultProps = {
  // default to Portrait
  orientation: 0
};

export default CarouselItem;
