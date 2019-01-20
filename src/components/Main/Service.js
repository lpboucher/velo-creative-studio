/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import ListingCategory from '../Main/ListingCategory';
import FeaturedSlider from '../Main/FeaturedSlider';
import ServiceDesc from '../Main/ServiceDesc';

import { ServiceContainer, ServiceTitle, ServiceWrapper } from '../Styles/ServiceStyles';
import { ContactAnchor } from '../Styles/MainStyles';

const Service = ({
  service: {
    id,
    title,
    description,
    categories,
    contactButton,
    projectButton,
    serviceFeatures,
  },
  index,
  locale,
}) => (
  <ServiceWrapper key={id}>
    <ServiceContainer key={id}>
      <ServiceDesc description={description}>
        <ServiceTitle><span>0{index + 1}</span><span>{title}</span></ServiceTitle>
      </ServiceDesc>
      <ListingCategory categories={categories} />
      <ContactAnchor count={index + 1}><Link to={`/${locale}/contact`}>{contactButton}</Link></ContactAnchor>
      <ContactAnchor count={index + 1}><Link to={`/${locale}/portfolio`}>{projectButton}</Link></ContactAnchor>
    </ServiceContainer>
    <FeaturedSlider features={serviceFeatures} />
  </ServiceWrapper>
);

Service.defaultProps = {
  locale: 'en-US',
};

Service.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }),
    }),
    categories: PropTypes.arrayOf(PropTypes.shape).isRequired,
    contactButton: PropTypes.string,
    projectButton: PropTypes.string,
    serviceFeatures: PropTypes.arrayOf(PropTypes.shape).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  locale: PropTypes.string,
};

export const query = graphql`
  fragment ServiceData on ContentfulService {
    id
    title
    description {
      id
      childMarkdownRemark {
        html 
      }
    }
    categories {
      id
      name
    }
    serviceFeature {
      id
      description
      sizes ( maxWidth: 1000 ) {
        ...GatsbyContentfulSizes
      }
    }
    contactButton
    projectButton
    serviceFeatures {
      ...SliderPreviews
      slug
      node_locale
    }
  }
`;

export default Service;
