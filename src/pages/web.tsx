import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Web" />
    <h1>WEB PAGE</h1>
    <Link to="/">Home</Link> <br />
    <Link to="/games/">Games</Link> <br />
    <Link to="/mobile/">Mobile</Link>
  </Layout>
);

export default IndexPage;
