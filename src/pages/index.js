import React from 'react';
import Link from 'gatsby-link';

import About from '../components/Main/About';
import Service from '../components/Main/Service';
import Project from '../components/Projects/Project';

import { HomeWrapper, ActionBox, Title } from '../components/Styles/MainStyles';
import { ProjectWrapper } from '../components/Styles/ProjectStyles';

const IndexPage = ({ data, location }) => (
  <HomeWrapper>
    <About about={data.contentfulAbout} location={location} />
    { /*
    {data.allContentfulService.edges.map(({ node }, index) => (
      <Service key={node.id} service={node} count={index + 1} />
    ))}
    <ProjectWrapper>
      <Title>Portfolio</Title>
      {data.allContentfulProject.edges.map(({ node }, index) => (
        <Project key={node.id} project={node} count={index + 1} />
      ))}
      <ActionBox><Link to="/portfolio">View More Projects</Link></ActionBox>
    </ProjectWrapper>
    */ }
  </HomeWrapper>
);
export const query = graphql`
  query SiteMain {
    allContentfulProject (
      filter: {orderHome: {ne: null}}
      sort: {fields:[orderHome]}
    ) 
    {
      edges {
        node {
          ...ProjectData
        }
      }
    }
    contentfulAbout {
      ...AboutData
      seoTitle
      seoKeywords
      seoDescription {
      seoDescription
      }
    }
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
export default IndexPage;
