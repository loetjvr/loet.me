import { navigate } from 'gatsby';
import React from 'react';
import { Title } from './styles';

interface Header {
  siteTitle: string;
}

const Header = ({ siteTitle }: Header): JSX.Element => {
  const path = location.pathname;

  const onNav = (path: string) => () => {
    navigate(path);
  };

  const onUrl = (path: string) => () => {
    window.open(path, '_blank');
  };

  return (
    <div position="static">
      <div>
        <div color="inherit">
          <MenuIcon />
        </div>
        <Title variant="h6">{siteTitle}</Title>
        <div selected={path === '/'} onClick={onNav('/')}>
          About
        </div>
        <div selected={path === '/games'} onClick={onNav('/games')}>
          Games
        </div>
        <div selected={path === '/mobile'} onClick={onNav('/mobile')}>
          Mobile
        </div>
        <div selected={path === '/web'} onClick={onNav('/web')}>
          Web
        </div>
        <div onClick={onUrl('https://github.com/loetjvr')}>Github</div>
        <div
          onClick={onUrl(
            'https://www.linkedin.com/in/loet-jansen-van-rensburg-9a0a6a86'
          )}
        >
          LinkedIn
        </div>
      </div>
    </div>
  );
};

export default Header;
