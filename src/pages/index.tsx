import React from 'react';
import { Link } from "gatsby-theme-material-ui";

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>HOME PAGE</h1>
    <Link to="/games/">Games</Link> <br />
    <Link to="/mobile/">Mobile</Link> <br />
    <Link to="/web/">Web</Link>
  </Layout>
);

export default IndexPage;
