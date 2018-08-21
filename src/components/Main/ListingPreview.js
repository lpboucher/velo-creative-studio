import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { ProjectMasonry } from '../Styles/ProjectStyles';

const ListingPreview = ({ previews }) => (
  <ProjectMasonry>
    {previews.map(({ sizes, description, id }) => (
      <Img key={id} sizes={sizes} alt={description} />
))}
  </ProjectMasonry>
);

ListingPreview.propTypes = {
  previews: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    sizes: PropTypes.object,
  })).isRequired,
};

export default ListingPreview;
