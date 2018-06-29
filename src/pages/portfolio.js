import React from 'react';
import Link from 'gatsby-link';

import ProjectBrick from '../components/Projects/ProjectBrick';

import { ProjectMasonry } from '../components/Styles/ProjectStyles';

const PortfolioPage = ({ data }) => (
  <div>
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
  }
`;

export default PortfolioPage;
