import React from 'react';
import { images } from '../../themes';
import { Container, Image } from './styles';

const Logo = (): JSX.Element => (
  <Container>
    <Image src={images.logo} />
  </Container>
);

export default Logo;
