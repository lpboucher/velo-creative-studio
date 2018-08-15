import React from 'react';
import Link from 'gatsby-link';

import About from '../components/Main/About';

import { HomeWrapper } from '../components/Styles/MainStyles';

const IndexPage = ({ data, location, pathContext }) => (
  <HomeWrapper>
    <About about={data.contentfulAbout} location={location} locale={pathContext.locale} />
  </HomeWrapper>
);
export const query = graphql`
  query SiteMainTest($locale: String!) {
    contentfulAbout(node_locale: { eq: $locale }) {
      ...AboutIndexData
      seoTitle
      seoDescription {
      seoDescription
      }
      node_locale
    }
  }
`;
export default IndexPage;
