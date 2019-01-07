import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Instagram from '../components/Main/Instagram';
import Testimonial from '../components/Main/Testimonial';

import { LargeColumn, SmallColumn } from '../components/Styles/MainStyles';
import {
  AboutIntro,
  FeatureWrapper,
  AboutTitle,
  AboutProfile,
  AboutCollab,
  AboutHeader,
} from '../components/Styles/AboutStyles';

const about = ({
  data: {
    contentfulAbout: {
      aboutPageTop,
      aboutPageFeature,
      aboutPageTitle,
      aboutPageProfile,
      aboutPageDevTitle,
      aboutPageCollaborator,
    },
    allContentfulTestimonial,
  },
}) => (
  <div>
    <AboutIntro>{aboutPageTop.aboutPageTop}</AboutIntro>
    <FeatureWrapper>
      <LargeColumn>
        <Img sizes={aboutPageFeature.sizes} alt={aboutPageFeature.description} />
      </LargeColumn>
      <SmallColumn>
        <AboutTitle>{aboutPageTitle}</AboutTitle>
      </SmallColumn>
    </FeatureWrapper>
    <AboutProfile>{aboutPageProfile.aboutPageProfile}</AboutProfile>
    <AboutHeader>{aboutPageDevTitle}</AboutHeader>
    <AboutCollab>{aboutPageCollaborator.aboutPageCollaborator}</AboutCollab>
    {allContentfulTestimonial.edges.map(({ node }) => (
      <Testimonial
        key={node.quote.id}
        clientName={node.clientName}
        organisation={node.organisation}
        quote={node.quote.quote}
      />
    ))}
    <AboutHeader>@vero.lagarde</AboutHeader>
    <Instagram />
  </div>
);

about.propTypes = {
  data: PropTypes.shape({
    contentfulAbout: {
      aboutPageTop: PropTypes.shape({
        aboutPageTop: PropTypes.string,
      }),
      aboutPageFeature: PropTypes.shape({
        description: PropTypes.string,
        sizes: PropTypes.object,
      }),
      aboutPageTitle: PropTypes.string,
      aboutPageProfile: PropTypes.shape({
        aboutPageProfile: PropTypes.string,
      }),
      aboutPageDevTitle: PropTypes.string,
      aboutPageCollaborator: PropTypes.shape({
        aboutPageCollaborator: PropTypes.string,
      }),
    }.isRequired,
    allContentfulTestimonial: PropTypes.object.isRequired,
  }).isRequired,
};

export const query = graphql`
query AboutPageTest($locale: String!) {
  contentfulAbout(node_locale: { eq: $locale }) {
    ...AboutIndexData
    node_locale
    id
    title
    location
    services {
      id
      services
    }
    portfolio {
      id
      portfolio
    }
    introPage {
      id
      introPage
    }
    aboutPageTop {
      aboutPageTop
      id
    }
    aboutPageTitle
    aboutPageProfile {
      id
      aboutPageProfile
    }
    aboutPageCollaborator {
      id
      aboutPageCollaborator
    }
    aboutPageFeature {
      id
      description
      sizes ( maxWidth: 1000 ) {
        ...GatsbyContentfulSizes
      }
    }
    aboutPageDevTitle
    slug
  }
  allContentfulTestimonial(
    filter: {node_locale: { eq: $locale }}
  ) {
    edges {
      node {
        ...TestimonialData
      }
    }
  }
}
`;

export default about;
