import { Link } from 'gatsby';
import React from 'react';

import SEO from '../components/Seo';

const IndexPage = (): JSX.Element => (
  <>
    <SEO title="Home" />
    <h1>HOME PAGE</h1>
    <Link to="/games/">Games</Link> <br />
    <Link to="/mobile/">Mobile</Link> <br />
    <Link to="/web/">Web</Link>
  </>
);

export default IndexPage;
