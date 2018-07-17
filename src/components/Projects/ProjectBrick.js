import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Overdrive from 'react-overdrive';

import { ProjectOverlay } from '../Styles/ProjectStyles';

const ProjectBrick = ({ brick }) => (
  <div>
    <Overdrive id={brick.id}>
      <Link to={brick.slug}>
        <Img sizes={brick.feature.sizes} alt={brick.feature.description} />
      </Link>
    </Overdrive>
    <ProjectOverlay>{brick.title}</ProjectOverlay>
  </div>
);

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
  }
`;

export default ProjectBrick;

