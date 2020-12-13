import { Link } from 'gatsby';
import React from 'react';
import SEO from '../components/Seo';

const MobilePage = (): JSX.Element => (
  <>
    <SEO title="Mobile" />
    <h1>MOBILE PAGE</h1>
    <Link to="/">Home</Link> <br />
    <Link to="/games/">Games</Link> <br />
    <Link to="/web/">Web</Link>
  </>
);

export default MobilePage;
