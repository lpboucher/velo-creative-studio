/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import ListingCategory from '../Main/ListingCategory';

import { ServiceContainer, ServiceTitle, ServiceWrapper, ServiceFeature } from '../Styles/ServiceStyles';
import { ContactAnchor } from '../Styles/MainStyles';

const Service = ({
  service: {
    id,
    title,
    description,
    categories,
    contactButton,
    projectButton,
    serviceFeature,
  },
  index,
  locale,
}) => (
  <ServiceWrapper key={id}>
    <ServiceContainer key={id}>
      <ServiceTitle><span>0{index + 1}</span><span>{title}</span></ServiceTitle>
      <p dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
      />
      <ListingCategory categories={categories} />
      <ContactAnchor count={index + 1}><Link to={`/${locale}/contact`}>{contactButton}</Link></ContactAnchor>
      <ContactAnchor count={index + 1}><Link to={`/${locale}/portfolio`}>{projectButton}</Link></ContactAnchor>
    </ServiceContainer>
    <ServiceFeature title={title} index={index + 1} >
      <Img sizes={serviceFeature.sizes} alt={serviceFeature.description} />
    </ServiceFeature>
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
    serviceFeature: PropTypes.shape({
      sizes: PropTypes.object,
    }),
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
  }
`;

export default Service;
