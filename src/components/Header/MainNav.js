import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { StyledNavList, MobileIcon } from '../Styles/HeaderStyles';
import NavItem from './NavItem';

const MainNav = ({
  nav,
  toggleHidden,
  isHidden,
  resetHidden,
  locale,
}) => (
  <nav>
    <MobileIcon href="#" onClick={toggleHidden}>☰</MobileIcon>
    <StyledNavList hide={isHidden}>
      {nav.map(({ node }) => (
         node.node_locale === locale ?
           <NavItem key={node.id} item={node} reset={resetHidden} locale={locale} />
          :
          null
    ))}
    </StyledNavList>
  </nav>
);

export default MainNav;

