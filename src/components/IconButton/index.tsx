import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Container } from './styles';
import { colors } from '../../themes';

interface IconButton {
  icon: IconProp;
  color: string;
  onClick: () => void;
}

const IconButton = ({ icon, onClick, color }: IconButton): JSX.Element => {
  // between 50 - 70
  // 20 = 70 - 50
  const [size] = useState(Math.floor(Math.random() * 20) + 50);

  return (
    <Container onClick={onClick} color={color} size={size}>
      <FontAwesomeIcon icon={icon} color={colors.white} size="lg" />
    </Container>
  );
};

IconButton.defaultProps = {
  colors: colors.primary
};

export default IconButton;
