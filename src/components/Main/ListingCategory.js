import React from 'react';
import PropTypes from 'prop-types';

import { ServiceCategory } from '../Styles/ServiceStyles';

const ListingCategory = ({ categories }) => (
  <div>
    {categories.map(({ name, id }, count, array) => (
      <ServiceCategory key={id}>{name}
        {array.length - count > 1 &&
        <span>|</span>
                }
      </ServiceCategory>
        ))}
  </div>
);

ListingCategory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ListingCategory;
