import React from 'react';

import { ServiceContainer, ServiceTitle } from '../components/Styles/ServiceStyles';

const ServicePage = ({ data }) => (
  <div>
    <div />
    {data.allContentfulService.edges.map(({ node }, index) => (
      <ServiceContainer>
        <ServiceTitle><span>0{index + 1} </span><span>{node.title}</span></ServiceTitle>
        <p>{node.description.description}</p>
      </ServiceContainer>
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
