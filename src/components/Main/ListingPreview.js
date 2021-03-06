import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { ProjectMasonry, ProjectOverlay } from '../Styles/ProjectStyles';

const ListingPreview = ({ previews }) => (
  <ProjectMasonry>
    {previews.map(({ sizes, description, id }) => (
      <div key={id}>
        <Img sizes={sizes} alt={description} />
        <ProjectOverlay hasDesc={description !== ''} >{description}</ProjectOverlay>
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
