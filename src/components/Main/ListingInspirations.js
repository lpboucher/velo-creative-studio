import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { HotelMasonry } from '../Styles/HotelStyles';

const ListingInspirations = ({ inspirations }) => (
  <HotelMasonry>
    {inspirations.map(({ sizes, description, id }) => (
      <Img key={id} sizes={sizes} alt={description} />
))}
  </HotelMasonry>
);

ListingInspirations.propTypes = {
  inspirations: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    sizes: PropTypes.object,
  })).isRequired,
};

export default ListingInspirations;
