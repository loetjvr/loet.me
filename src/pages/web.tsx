import { Link } from 'gatsby';
import React from 'react';
import SEO from '../components/Seo';

const WebPage = (): JSX.Element => (
  <>
    <SEO title="Web" />
    <h1>WEB PAGE</h1>
    <Link to="/">Home</Link> <br />
    <Link to="/games/">Games</Link> <br />
    <Link to="/mobile/">Mobile</Link>
  </>
);

export default WebPage;
