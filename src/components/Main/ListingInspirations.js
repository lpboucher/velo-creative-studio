import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { AddServiceMasonry } from '../Styles/AddOnServiceStyles';

const ListingInspirations = ({ inspirations }) => (
  <AddServiceMasonry>
    {inspirations.map(({ sizes, description, id }) => (
      <Img key={id} sizes={sizes} alt={description} />
))}
  </AddServiceMasonry>
);

ListingInspirations.propTypes = {
  inspirations: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    sizes: PropTypes.object,
  })).isRequired,
};

export default ListingInspirations;
