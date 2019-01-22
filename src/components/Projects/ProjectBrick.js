import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Overdrive from 'react-overdrive';

import { ProjectOverlay } from '../Styles/ProjectStyles';

const ProjectBrick = ({ brick, locale }) => {
  const path = `/${locale}/portfolio/${brick.slug}`;
  return (
    <div>
      <Overdrive id={brick.id}>
        <Link to={`${brick.isClickable ? path : ''}`}>
          <Img sizes={brick.feature.sizes} alt={brick.feature.description} />
        </Link>
      </Overdrive>
      <ProjectOverlay hasDesc={brick.title !== ''} >{brick.title}</ProjectOverlay>
    </div>
  );
};

ProjectBrick.defaultProps = {
  locale: 'en-US',
};

ProjectBrick.propTypes = {
  locale: PropTypes.string,
  brick: PropTypes.shape({
    id: PropTypes.string,
    body: PropTypes.shape({
      body: PropTypes.string,
    }),
    category: PropTypes.string,
    feature: PropTypes.shape({
      description: PropTypes.string,
      title: PropTypes.string,
      sizes: PropTypes.object,
    }),
    isClickable: PropTypes.bool,
    slug: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export const query = graphql`
  fragment ProjectGridData on ContentfulProject {
    id
    title
    category
    slug
    body {
      id
      body
    }
    feature {
      id
      title
      description
      sizes ( maxWidth: 1000 ) {
        ...GatsbyContentfulSizes
      }
    }
    isClickable
  }
`;

export default ProjectBrick;

