import React from 'react';
import { Container, Text } from './styles';

interface Title {
  children: string;
}

const Title = ({ children }: Title): JSX.Element => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default Title;
