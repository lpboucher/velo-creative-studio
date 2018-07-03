import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import './index.css';

const TemplateWrapper = ({ children, data, location }) => (
  <div>
    <Helmet
      title="Velo Creative Studio."
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header nav={data} location={location} />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export const query = graphql`
  query NavQuery{
    allContentfulNavigation (
      filter: {visible: {eq:true}}
    ) {
      edges {
        node {
          ...NavData
        }
      }
    }
  }
`;

export default TemplateWrapper;
