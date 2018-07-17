import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import './index.css';

import logo from '../images/favicon.ico';

const TemplateWrapper = ({ children, data, location }) => (
  <div>
    <Helmet
      title="Velo Creative Studio."
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${logo}` },
    ]}
    />
    <Header nav={data.allContentfulNavigation} location={location} />
    {children()}
    <Footer footer={data.allContentfulFooterItem} />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export const query = graphql`
  query TemplateQuery{
    allContentfulNavigation (
      filter: {visible: {eq:true}}
      sort: {fields:[order]}
    ) {
      edges {
        node {
          ...NavData
        }
      }
    }
    allContentfulFooterItem (
      filter: {visible: {eq:true}}
      sort: {fields:[order]}
    ) {
      edges {
        node {
          ...FooterData
        }
      }
    }
  }
`;

export default TemplateWrapper;
