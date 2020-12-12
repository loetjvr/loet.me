import { navigate } from 'gatsby';
import React from 'react';
import HeaderItem from '../HeaderItem';
import Logo from '../Logo';
import { Container } from './styles';

const Header = (): JSX.Element => {
  const path = location.pathname;

  const onNav = (path: string) => () => {
    navigate(path);
  };

  // const onUrl = (path: string) => () => {
  //   window.open(path, '_blank');
  // };

  const isSelected = p => p === path;

  return (
    <Container>
      <HeaderItem selected={isSelected('/')} onClick={onNav('/')}>
        About
      </HeaderItem>
      <HeaderItem selected={isSelected('/games')} onClick={onNav('/games')}>
        Games
      </HeaderItem>
      <Logo />
      <HeaderItem selected={isSelected('/mobile')} onClick={onNav('/mobile')}>
        Mobile
      </HeaderItem>
      <HeaderItem selected={isSelected('/web')} onClick={onNav('/web')}>
        Web
      </HeaderItem>
    </Container>
  );
};

export default Header;
