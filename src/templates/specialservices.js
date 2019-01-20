import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import FeaturedSlider from '../components/Main/FeaturedSlider';
import ListingInspirations from '../components/Main/ListingInspirations';
import ServiceDesc from '../components/Main/ServiceDesc';

import { AddServiceWrapper, AddServiceContainer, AddServiceIntro } from '../components/Styles/AddOnServiceStyles';
import { TwoColumn, ContactAnchor } from '../components/Styles/MainStyles';

const addOfferingPage = ({
  pathContext: {
    locale,
  },
  data: {
    contentfulSpecialOffering: {
      packageIntro,
      tagline,
      slug,
      offerings,
      cta,
      projectIntro,
      sampleProjects,
      ...inspirations
    },
  },
}) => (
  <div>
    <AddServiceIntro>{packageIntro}</AddServiceIntro>
    <AddServiceWrapper>
      <TwoColumn>
        <AddServiceContainer>
          <h3>{tagline}</h3>
          {offerings.map(({ id, title, description }) => (
            <ServiceDesc key={id} description={description}>
              <h5>{title}</h5>
            </ServiceDesc>
          ))}
          <ContactAnchor><Link to={`/${locale}/contact`}>{cta}</Link></ContactAnchor>
        </AddServiceContainer>
      </TwoColumn>
      <TwoColumn>
        <ListingInspirations {...inspirations} />
      </TwoColumn>
    </AddServiceWrapper>
    <AddServiceIntro>{projectIntro}</AddServiceIntro>
    <FeaturedSlider features={sampleProjects} />
  </div>
);

addOfferingPage.defaultProps = {
  pathContext: {
    locale: 'en-US',
  },
};

addOfferingPage.propTypes = {
  pathContext: PropTypes.shape({
    locale: PropTypes.string,
  }),
  data: PropTypes.shape({
    contentfulSpecialOffering: PropTypes.shape({
      packageIntro: PropTypes.string,
      tagline: PropTypes.string,
      slug: PropTypes.string,
      offerings: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.object,
      })),
      cta: PropTypes.string,
      projectIntro: PropTypes.string,
      sampleProjects: PropTypes.array,
      inspirations: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        sizes: PropTypes.object,
      })),
    }),
  }).isRequired,
};

export const query = graphql`
  query addOfferingPage($slug: String!, $locale: String!) {
    contentfulSpecialOffering (slug: {eq: $slug}
      node_locale: {eq: $locale}
) {
      packageIntro
      tagline
      slug
      offerings {
        id
        title
        description {
          childMarkdownRemark {
            html 
          }
        }
      }
      cta
      projectIntro
      sampleProjects {
        ...SliderPreviews
        node_locale
        slug
      }
      inspirations {
        id
        title
        sizes ( maxWidth: 1000 ) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`;

export default addOfferingPage;
