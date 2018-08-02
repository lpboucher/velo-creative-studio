import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { StyledNavList, MobileIcon } from '../Styles/HeaderStyles';
import NavItem from './NavItem';

const MainNav = ({
  nav, toggleHidden, isHidden, resetHidden,
}) => (
  <nav>
    <MobileIcon href="#" onClick={toggleHidden}>☰</MobileIcon>
    <StyledNavList hide={isHidden}>
      {nav.map(({ node }) => (
        <NavItem key={node.id} item={node} reset={resetHidden} />
    ))}
    </StyledNavList>
  </nav>
);

export default MainNav;

