import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Mobile" />
    <h1>MOBILE PAGE</h1>
    <Link to="/">Home</Link> <br />
    <Link to="/games/">Games</Link> <br />
    <Link to="/web/">Web</Link>
  </Layout>
);

export default IndexPage;
