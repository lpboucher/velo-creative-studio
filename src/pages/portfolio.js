import React from 'react';
import Link from 'gatsby-link';
import Overdrive from 'react-overdrive';

import ProjectBrick from '../components/Projects/ProjectBrick';

import { ProjectMasonry, PortfolioIntro } from '../components/Styles/ProjectStyles';

const PortfolioPage = ({ data }) => (
  <div>
    <PortfolioIntro>{data.contentfulAbout.portfolio.portfolio}</PortfolioIntro>
    <ProjectMasonry>
      {data.allContentfulProject.edges.map(({ node }) => (
        <ProjectBrick key={node.id} brick={node} />
    ))}
    </ProjectMasonry>
  </div>
);

export const query = graphql`
  query PortfolioPage {
    allContentfulProject (
      sort: {fields:[orderPortfolio]}
    ) {
      edges {
        node {
          ...ProjectGridData
        }
      }
    }
    contentfulAbout {
      ...AboutData
    }
  }
`;

export default PortfolioPage;
