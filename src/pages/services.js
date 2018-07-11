import React from 'react';
import Img from 'gatsby-image';
import Overdrive from 'react-overdrive';

import Package from '../components/Main/Package';

import {
  ServiceIntro,
  ServiceContainer,
  ServiceTitle,
  ServiceFeature,
  ServiceWrapper,
  ServiceCategory,
  ServiceCategories,
} from '../components/Styles/ServiceStyles';
import { ContactAnchor } from '../components/Styles/MainStyles';

const ServicePage = ({ data }) => (
  <div>
    <div>
      <Overdrive id="intro">
        <ServiceIntro>{data.contentfulAbout.services.services}</ServiceIntro>
      </Overdrive>
    </div>
    {data.allContentfulService.edges.map(({ node }, index) => (
      <ServiceWrapper>
        <ServiceContainer key={node.id}>
          <ServiceTitle><span>0{index + 1} </span><span>{node.title}</span></ServiceTitle>
          <p>{node.description.description}</p>
          <ServiceCategories>
            {node.categories.map(({ name, id }, count, array) => (
              <ServiceCategory key={id}>{name}
                {array.length - count > 1 &&
                  <span>|</span>
                }
              </ServiceCategory>
            ))}
          </ServiceCategories>
          <ContactAnchor count={index + 1}>Contact Us</ContactAnchor>
          <ContactAnchor count={index + 1}>Explore projects</ContactAnchor>
        </ServiceContainer>
        <ServiceFeature title={node.title} index={index + 1} >
          <Img sizes={node.serviceFeature.sizes} alt="" />
        </ServiceFeature>
      </ServiceWrapper>
    ))}
    <Package />
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
  contentfulAbout {
    ...AboutData
  }
}
`;

export default ServicePage;
