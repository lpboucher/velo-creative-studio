import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Overdrive from 'react-overdrive';

const ProjectBrick = ({ brick }) => (
  <Overdrive id={brick.id}>
    <Link to={brick.slug}>
      <Img sizes={brick.feature.sizes} alt="" />
    </Link>
  </Overdrive>
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
      sizes ( maxWidth: 1000 ) {
        ...GatsbyContentfulSizes
      }
    }
  }
`;

export default ProjectBrick;

