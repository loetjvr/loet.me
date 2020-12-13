import React from 'react';
import { Container, Image } from './styles';

export enum Orientation {
  portrait,
  landscape
}

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
