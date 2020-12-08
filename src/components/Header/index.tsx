import { IconButton } from 'gatsby-theme-material-ui';
import { AppBar, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Title variant="h6">{siteTitle}</Title>
        <MenuItem selected={path === '/'} onClick={onNav('/')}>
          About
        </MenuItem>
        <MenuItem selected={path === '/games'} onClick={onNav('/games')}>
          Games
        </MenuItem>
        <MenuItem selected={path === '/mobile'} onClick={onNav('/mobile')}>
          Mobile
        </MenuItem>
        <MenuItem selected={path === '/web'} onClick={onNav('/web')}>
          Web
        </MenuItem>
        <MenuItem onClick={onUrl('https://github.com/loetjvr')}>
          Github
        </MenuItem>
        <MenuItem
          onClick={onUrl(
            'https://www.linkedin.com/in/loet-jansen-van-rensburg-9a0a6a86'
          )}
        >
          LinkedIn
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
