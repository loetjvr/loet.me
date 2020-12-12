import React from 'react';
import { Text } from './styles';

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
    <Text selected={selected} onClick={onClick}>
      {children}
    </Text>
  );
};

export default HeaderItem;
