import React from 'react';
import PropTypes from 'prop-types';

import { ServiceContainer, ServiceTitle, CallToAction, ServiceWrapper } from '../Styles/ServiceStyles';
import { ContactAnchor } from '../Styles/MainStyles';

const Service = ({ service, count }) => (
  <ServiceWrapper>
    <ServiceContainer>
      <ServiceTitle><span>0{count} </span><span>{service.title}</span></ServiceTitle>
      <p>{service.description.description}</p>
      <ContactAnchor count={count}>Contact Us</ContactAnchor>
      <CallToAction>Explore projects</CallToAction>
    </ServiceContainer>
  </ServiceWrapper>
);

Service.propTypes = {
};

export const query = graphql`
  fragment ServiceData on ContentfulService {
    id
    title
    offering
    description {
      id
      description
    }
    categories {
      id
      name
    }
    serviceFeature {
      id
      sizes ( maxWidth: 1000 ) {
        ...GatsbyContentfulSizes
      }
    }
  }
`;

export default Service;
