/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout';
import { theme } from '../../themes';

import Header from '../Header';

interface Layout {
  children: JSX.IntrinsicElements;
}

const Layout = ({ children }: Layout): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeTopLayout theme={theme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </>
    </ThemeTopLayout>
  );
};

export default Layout;
