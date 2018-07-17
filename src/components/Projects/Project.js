import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import {
  LargeColumn,
  SmallColumn,
} from '../Styles/MainStyles';

import {
  ProjectContainer,
  TitleBox,
  Excerpt,
} from '../Styles/ProjectStyles';

const Project = ({ project, count }) => (
  <ProjectContainer>
    <LargeColumn>
      <Img sizes={project.feature.sizes} alt={project.feature.description} />
    </LargeColumn>
    <SmallColumn>
      <TitleBox count={count}>
        <h4>{project.title}</h4>
        <p>{project.category}</p>
      </TitleBox>
      <Excerpt>
        <p>{project.body.body}</p>
      </Excerpt>
    </SmallColumn>
  </ProjectContainer>
);

export const query = graphql`
  fragment ProjectData on ContentfulProject {
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

export default Project;
