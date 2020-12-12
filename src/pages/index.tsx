import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <h1>HOME PAGE</h1>
    <Link to="/games/">Games</Link> <br />
    <Link to="/mobile/">Mobile</Link> <br />
    <Link to="/web/">Web</Link>
  </Layout>
);

export default IndexPage;
