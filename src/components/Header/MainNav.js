import React from 'react';
import PropTypes from 'prop-types';

import { StyledNavList, MobileIcon, NavContainer } from '../Styles/HeaderStyles';
import NavItem from './NavItem';

const MainNav = ({
  nav,
  toggleHidden,
  isHidden,
  resetHidden,
  locale,
}) => (
  <NavContainer>
    <MobileIcon href="#" onClick={toggleHidden}>☰</MobileIcon>
    <StyledNavList hide={isHidden}>
      {nav.map(({ node }) => (
         node.node_locale === locale ?
           <NavItem key={node.id} item={node} reset={resetHidden} locale={locale} />
          :
          null
    ))}
    </StyledNavList>
  </NavContainer>
);

MainNav.defaultProps = {
  locale: 'en-US',
};

MainNav.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.object).isRequired,
  locale: PropTypes.string,
  toggleHidden: PropTypes.func.isRequired,
  resetHidden: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

export default MainNav;

