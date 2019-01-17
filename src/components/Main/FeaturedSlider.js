import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import Overdrive from 'react-overdrive';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ServiceFeature } from '../Styles/ServiceStyles';

const FeaturedSlider = ({ features }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {features.map(({ feature, node_locale, slug }) => (
        <Overdrive id={feature.id}>
          <ServiceFeature key={feature.id}>
            <Link to={`/${node_locale}/portfolio/${slug}`}>
              <Img sizes={feature.sizes} alt={feature.title} />
            </Link>
          </ServiceFeature>
        </Overdrive>
    ))}
    </Slider>
  );
};

FeaturedSlider.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    feature: PropTypes.shape({
      sizes: PropTypes.object.isRequired,
      title: PropTypes.string,
    }),
  })).isRequired,
};

export const query = graphql`
fragment SliderPreviews on ContentfulProject {
    feature {
        id
        title
        sizes ( maxWidth: 1000 ) {
            ...GatsbyContentfulSizes
        }
    }
  }
`;

export default FeaturedSlider;
