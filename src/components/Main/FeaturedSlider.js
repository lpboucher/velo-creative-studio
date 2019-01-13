import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

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
      {features.map(({ feature }) => (
        <ServiceFeature key={feature.id}>
          <Img sizes={feature.sizes} alt={feature.title} />
        </ServiceFeature>
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
fragment SliderPreviews on ContentfulService {
    serviceFeatures {
        feature {
            id
            title
            sizes ( maxWidth: 1000 ) {
                ...GatsbyContentfulSizes
            }
        }
    }
  }
`;

export default FeaturedSlider;
