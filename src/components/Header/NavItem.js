import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { StyledNavItem, StyledLink } from '../Styles/HeaderStyles';

const NavItem = ({ item, reset, locale }) => (
  <StyledNavItem>
    <StyledLink to={`/${locale}${item.path}`} onClick={reset}>{item.text}</StyledLink>
  </StyledNavItem>
);

export const query = graphql`
  fragment NavData on ContentfulNavigation {
    id
    text
    path
    order
    visible
    node_locale
  }
`;

export default NavItem;

