import React, { useState } from 'react';
import { Container, Text } from './styles';

interface Title {
  children: string;
}

const Title = ({ children }: Title): JSX.Element => {
  // random margin left percent between 0 -100
  const [margin] = useState(Math.floor(Math.random() * 100));

  return (
    <Container margin={margin}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Title;
