import React from 'react';
import PropTypes from 'prop-types';

import About from '../components/Main/About';

import { HomeWrapper } from '../components/Styles/MainStyles';

const IndexPage = ({
  data: {
    contentfulAbout,
  },
  location,
  pathContext: {
    locale,
  },
}) => (
  <HomeWrapper>
    <About about={contentfulAbout} location={location} locale={locale} />
  </HomeWrapper>
);

IndexPage.defaultProps = {
  pathContext: {
    locale: 'en-US',
  },
  location: {
    pathname: '/en-US',
  },
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulAbout: PropTypes.object,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  pathContext: PropTypes.shape({
    locale: PropTypes.string,
  }),
};

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
