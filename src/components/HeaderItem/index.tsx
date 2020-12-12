import React from 'react';
import { Container, Text } from './styles';

interface HeaderItem {
  children: string;
  selected: boolean;
  onClick: () => void;
}

const HeaderItem = ({
  children,
  selected,
  onClick
}: HeaderItem): JSX.Element => {
  return (
    <Container onClick={onClick}>
      <Text selected={selected}>{children}</Text>
    </Container>
  );
};

export default HeaderItem;
