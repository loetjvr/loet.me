import React, { useEffect, useState } from 'react';
import CarouselItem from '../CarouselItem';
import { metrics } from '../../themes';
import { MainContainer, Container, Space } from './styles';

export enum Orientation {
  portrait,
  landscape
}

interface Carousel {
  images: string[];
  orientation: Orientation;
  screenWidth: number;
}

const calWidth = screenWidth =>
  screenWidth > metrics.maxWidth ? (screenWidth - metrics.maxWidth) / 2 : 0;

const Carousel = ({
  images,
  orientation,
  screenWidth
}: Carousel): JSX.Element => {
  const [width, setWidth] = useState(calWidth(screenWidth));

  useEffect(() => {
    setWidth(calWidth(screenWidth));
  }, [screenWidth]);

  return (
    <MainContainer>
      <div>
        <Space width={width} />
      </div>
      {images.map(m => (
        <Container key={m}>
          <CarouselItem image={m} orientation={orientation} />
        </Container>
      ))}
    </MainContainer>
  );
};

Carousel.defaultProps = {
  // default to Portrait
  orientation: 0
};

export default Carousel;
