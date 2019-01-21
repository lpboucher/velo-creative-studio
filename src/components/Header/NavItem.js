import React from 'react';
import PropTypes from 'prop-types';

import { StyledNavItem, StyledLink, StyledTopMenu } from '../Styles/HeaderStyles';

const NavItem = ({
  children, item, reset, locale, toggleDrawer,
}) => (
  <StyledNavItem>
    {!item.hasSubMenu ?
      <StyledLink to={`/${locale}${item.path}`} onClick={reset}>{item.text}</StyledLink>
    :
      <StyledTopMenu onClick={toggleDrawer}>{item.text}</StyledTopMenu>
    }
    {children}
  </StyledNavItem>
);

NavItem.defaultProps = {
  locale: 'en-US',
};

NavItem.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  reset: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
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
    hasSubMenu
    subMenu {
      ...SecondNavData
    }
  }
`;

export default NavItem;

