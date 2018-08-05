import React from 'react';
import Link from 'gatsby-link';

import ProjectBrick from '../components/Projects/ProjectBrick';

import { ProjectMasonry, PortfolioIntro } from '../components/Styles/ProjectStyles';

const PortfolioPage = ({ data, pathContext }) => (
  <div>
    <PortfolioIntro>{data.contentfulAbout.portfolio.portfolio}</PortfolioIntro>
    <ProjectMasonry>
      {data.allContentfulProject.edges.map(({ node }) => (
        <ProjectBrick key={node.id} brick={node} locale={pathContext.locale} />
    ))}
    </ProjectMasonry>
  </div>
);

export const query = graphql`
  query PortfolioPageTest($locale: String!) {
    allContentfulProject (
      filter: {node_locale: { eq: $locale }}
      sort: {fields:[orderPortfolio]}
    ) {
      edges {
        node {
          ...ProjectGridData
        }
      }
    }
    contentfulAbout (node_locale: { eq: $locale }) {
      ...AboutData
    }
  }
`;

export default PortfolioPage;
