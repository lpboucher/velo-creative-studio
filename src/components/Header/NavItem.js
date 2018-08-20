import React from 'react';
import PropTypes from 'prop-types';

import { StyledNavItem, StyledLink } from '../Styles/HeaderStyles';

const NavItem = ({ item, reset, locale }) => (
  <StyledNavItem>
    <StyledLink to={`/${locale}${item.path}`} onClick={reset}>{item.text}</StyledLink>
  </StyledNavItem>
);

NavItem.defaultProps = {
  locale: 'en-US',
};

NavItem.propTypes = {
  locale: PropTypes.string,
  reset: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    node_locale: PropTypes.string,
    order: PropTypes.number,
    path: PropTypes.string,
    text: PropTypes.string,
    visible: PropTypes.bool,
  }).isRequired,
};

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

