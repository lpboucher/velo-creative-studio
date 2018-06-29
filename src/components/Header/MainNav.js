import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { StyledNavList } from '../Styles/HeaderStyles';
import NavItem from './NavItem';

const MainNav = ({ nav }) => (
  <nav>
    <StyledNavList>
      {nav.map(({ node }) => (
        <NavItem key={node.id} item={node} />
    ))}
    </StyledNavList>
  </nav>
);

export default MainNav;

