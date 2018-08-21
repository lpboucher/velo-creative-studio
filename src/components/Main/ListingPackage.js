import React from 'react';
import PropTypes from 'prop-types';

import { PackageList } from '../Styles/PackageStyles';

const ListingPackage = ({ includes }) => (
  <PackageList>
    {includes.map(item => (
      <li key={item.substr(0, 4)}>{item}</li>
        ))}
  </PackageList>
);

ListingPackage.propTypes = {
  includes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListingPackage;
