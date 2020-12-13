import { Link } from 'gatsby';
import React from 'react';
import SEO from '../components/Seo';

const GamesPage = (): JSX.Element => (
  <>
    <SEO title="Games" />
    <h1>GAMES PAGE</h1>
    <Link to="/">Home</Link> <br />
    <Link to="/mobile/">Mobile</Link> <br />
    <Link to="/web/">Web</Link>
  </>
);

export default GamesPage;
