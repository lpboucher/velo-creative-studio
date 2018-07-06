import React from 'react';
import Img from 'gatsby-image';

import {
  ServiceContainer,
  ServiceTitle,
  ServiceFeature,
  CallToAction,
  ServiceWrapper,
  ServiceCategory,
  ServiceCategories,
} from '../components/Styles/ServiceStyles';
import { ContactAnchor } from '../components/Styles/MainStyles';

const ServicePage = ({ data }) => (
  <div>
    <div />
    {data.allContentfulService.edges.map(({ node }, index) => (
      <ServiceWrapper>
        <ServiceContainer key={node.id}>
          <ServiceTitle><span>0{index + 1} </span><span>{node.title}</span></ServiceTitle>
          <p>{node.description.description}</p>
          <ServiceCategories>
            {node.categories.map(({ name, id }) => (
              <ServiceCategory key={id}>{name}</ServiceCategory>
            ))}
          </ServiceCategories>
          <ContactAnchor count={index + 1}>Contact Us</ContactAnchor>
          <CallToAction>Explore projects</CallToAction>
        </ServiceContainer>
        <ServiceFeature title={node.title} index={index + 1} >
          <Img sizes={node.serviceFeature.sizes} alt="" />
        </ServiceFeature>
      </ServiceWrapper>
    ))}
  </div>
);

export const query = graphql`
query ServicePage {
  allContentfulService (
    sort: {fields:[orderHome]}
  ) {
    edges {
      node {
        ...ServiceData
      }
    }
  }
}
`;

export default ServicePage;
