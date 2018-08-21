import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Overdrive from 'react-overdrive';
import Helmet from 'react-helmet';

import ListingPreview from '../components/Main/ListingPreview';

import {
  ProjectWrapper,
  ProjectTitle,
  ProjectDetail,
  Description,
} from '../components/Styles/ProjectStyles';

export default function Template({
  data: {
    contentfulProject: {
      seoTitle,
      seoDescription,
      title,
      location,
      category,
      body,
      feature,
      id,
      ...previews
    },
  },
}) {
  return (
    <div>
      <Helmet
        title={seoTitle}
        meta={[
        { name: 'description', content: seoDescription.seoDescription },
      ]}
      />
      <ProjectWrapper>
        <ProjectTitle>
          <h1>{title} | {location}</h1>
          <h3>{category}</h3>
        </ProjectTitle>
        <ProjectDetail>
          <Description dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          />
          <Overdrive id={id}>
            <Img sizes={feature.sizes} alt="" />
          </Overdrive>
        </ProjectDetail>
      </ProjectWrapper>
      <ListingPreview {...previews} />
    </div>
  );
}

Template.propTypes = {
  data: PropTypes.shape({
    contentfulProject: PropTypes.shape({
      seoTitle: PropTypes.string,
      seoDescription: PropTypes.shape({
        seoDescription: PropTypes.string,
      }),
      title: PropTypes.string,
      location: PropTypes.string,
      category: PropTypes.string,
      body: PropTypes.shape({
        childMarkdownRemark: PropTypes.object,
      }),
      feature: PropTypes.shape({
        sizes: PropTypes.object,
      }),
      id: PropTypes.string,
    }),
  }).isRequired,
};

export const projectQuery = graphql`
    query SingleProject($slug: String!, $locale: String!) {
        contentfulProject (slug: {eq: $slug}
                          node_locale: {eq: $locale}
        ) {
            id
            title
            body {
                id
                body
                childMarkdownRemark {
                  html 
                }
            }
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
