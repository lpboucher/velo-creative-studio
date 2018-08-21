import React from 'react';
import PropTypes from 'prop-types';

import ProjectBrick from '../components/Projects/ProjectBrick';

import { ProjectMasonry, PortfolioIntro } from '../components/Styles/ProjectStyles';

const PortfolioPage = ({
  data: {
    contentfulAbout: {
      portfolio,
    },
    allContentfulProject,
  },
  pathContext: {
    locale,
  },
}) => (
  <div>
    <PortfolioIntro>{portfolio.portfolio}</PortfolioIntro>
    <ProjectMasonry>
      {allContentfulProject.edges.map(({ node }) => (
        <ProjectBrick key={node.id} brick={node} locale={locale} />
    ))}
    </ProjectMasonry>
  </div>
);

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    contentfulAbout: PropTypes.shape({
      portfolio: PropTypes.object,
    }),
    allContentfulService: PropTypes.object,
  }).isRequired,
  pathContext: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
};

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
      ...AboutIndexData
      portfolio {
        portfolio
      }
      node_locale
    }
  }
`;

export default PortfolioPage;
