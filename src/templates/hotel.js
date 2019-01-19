/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import FeaturedSlider from '../components/Main/FeaturedSlider';
import ListingInspirations from '../components/Main/ListingInspirations';

import { HotelWrapper, HotelContainer, HotelIntro } from '../components/Styles/HotelStyles';
import { TwoColumn, ContactAnchor } from '../components/Styles/MainStyles';

const hotelPage = ({
  pathContext: {
    locale,
  },
  data: {
    contentfulHotelService: {
      intro,
      tagline,
      service1title,
      service1desc,
      service2title,
      service2desc,
      service3title,
      service3desc,
      service4title,
      service4desc,
      ...inspirations,
      hotelProjects,
      contactButton,
    },
  },
}) => (
  <div>
    <HotelIntro>{intro.intro}</HotelIntro>
    <HotelWrapper>
      <TwoColumn>
        <HotelContainer>
          <h3>{tagline}</h3>
          <h5>{service1title}</h5>
          <p dangerouslySetInnerHTML={{
              __html: service1desc.childMarkdownRemark.html,
            }}
          />
          <h5>{service2title}</h5>
          <p dangerouslySetInnerHTML={{
              __html: service2desc.childMarkdownRemark.html,
            }}
          />
          <h5>{service3title}</h5>
          <p dangerouslySetInnerHTML={{
              __html: service3desc.childMarkdownRemark.html,
            }}
          />
          <h5>{service4title}</h5>
          <p dangerouslySetInnerHTML={{
              __html: service4desc.childMarkdownRemark.html,
            }}
          />
          <ContactAnchor><Link to={`/${locale}/contact`}>{contactButton}</Link></ContactAnchor>
        </HotelContainer>
      </TwoColumn>
      <TwoColumn>
        <ListingInspirations {...inspirations} />
      </TwoColumn>
    </HotelWrapper>
    <FeaturedSlider features={hotelProjects} />
  </div>
);

hotelPage.defaultProps = {
  pathContext: {
    locale: 'en-US',
  },
};

hotelPage.propTypes = {
  pathContext: PropTypes.shape({
    locale: PropTypes.string,
  }),
  data: PropTypes.shape({
    contentfulHotelService: PropTypes.shape({
      intro: PropTypes.shape({
        intro: PropTypes.string,
      }),
      tagline: PropTypes.string,
      service1title: PropTypes.string,
      service1desc: PropTypes.shape({
        service1desc: PropTypes.string,
      }),
      service2title: PropTypes.string,
      service2desc: PropTypes.shape({
        service2desc: PropTypes.string,
      }),
      service3title: PropTypes.string,
      service3desc: PropTypes.shape({
        service3desc: PropTypes.string,
      }),
      service4title: PropTypes.string,
      service4desc: PropTypes.shape({
        service4desc: PropTypes.string,
      }),
      inspirations: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        sizes: PropTypes.object,
      })),
      hotelProjects: PropTypes.array,
      contactButton: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query HotelPage($locale: String!) {
    contentfulHotelService (node_locale: { eq: $locale }) {
      id
      intro {
        intro
      }
      tagline
      service1title
    service1desc {
      childMarkdownRemark {
        html
      }
    }
    service2title
    service2desc {
      childMarkdownRemark {
        html
      }
    }
    service3title
    service3desc {
      childMarkdownRemark {
        html
      }
    }
    service4title
    service4desc {
      childMarkdownRemark {
        html
      }
    }
      inspirations {
        id
        title
        sizes ( maxWidth: 1000 ) {
          ...GatsbyContentfulSizes
        }
      }
      hotelProjects {
        ...SliderPreviews
        node_locale
        slug
      }
      contactButton
    }
  }
`;

export default hotelPage;
