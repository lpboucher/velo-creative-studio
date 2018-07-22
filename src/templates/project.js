import React from 'react';
import Img from 'gatsby-image';
import Overdrive from 'react-overdrive';
import Helmet from 'react-helmet';

import {
  ProjectWrapper,
  ProjectTitle,
  ProjectDetail,
  Description,
  ProjectMasonry,
} from '../components/Styles/ProjectStyles';

export default function Template({ data }) {
  return (
    <div>
      <Helmet
        title={data.contentfulProject.seoTitle}
        meta={[
        { name: 'description', content: data.contentfulProject.seoDescription.seoDescription },
      ]}
      />
      <ProjectWrapper>
        <ProjectTitle>
          <h1>{data.contentfulProject.title} | {data.contentfulProject.location}</h1>
          <h3>{data.contentfulProject.category}</h3>
        </ProjectTitle>
        <ProjectDetail>
          <Overdrive id={data.contentfulProject.id}>
            <Img sizes={data.contentfulProject.feature.sizes} alt="" />
          </Overdrive>
          <Description dangerouslySetInnerHTML={{
              __html: data.contentfulProject.body.childMarkdownRemark.html,
            }}
          />
        </ProjectDetail>
      </ProjectWrapper>
      <ProjectMasonry>
        {data.contentfulProject.previews.map(({ sizes, description, id }) => (
          <Img key={id} sizes={sizes} alt={description} />
    ))}
      </ProjectMasonry>
    </div>
  );
}
export const projectQuery = graphql`
    query SingleProject($slug: String!) {
        contentfulProject (slug: {eq: $slug}) {
            id
            title
            body {
                id
                body
                childMarkdownRemark {
                  html 
                }
            }
            slug
            category
            location
            feature {
                id
                title
                sizes ( maxWidth: 1000 ) {
                  ...GatsbyContentfulSizes
                }
            }
            previews {
              id
              description
              sizes ( maxWidth: 1000 ) {
                ...GatsbyContentfulSizes
              }
            }
            seoTitle
            seoDescription {
              seoDescription
            }
        }
    }
`;
