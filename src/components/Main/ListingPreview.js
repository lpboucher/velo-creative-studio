import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { ProjectMasonry, ProjectOverlay } from '../Styles/ProjectStyles';

const ListingPreview = ({ previews }) => (
  <ProjectMasonry>
    {previews.map(({ sizes, description, id }) => (
      <div>
        <Img key={id} sizes={sizes} alt={description} />
        <ProjectOverlay >{description}</ProjectOverlay>
      </div>
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
