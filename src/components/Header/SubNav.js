import React from 'react';
import PropTypes from 'prop-types';

import { SubContainer, StyledNavList, StyledNavItem, StyledLink } from '../Styles/HeaderStyles';

const SubNav = ({
  isOpen, subMenu, locale, toggleDrawer,
}) => (
  <SubContainer isOpen={isOpen} >
    <StyledNavList>
      {subMenu.map(item => (
        <StyledNavItem key={`${item.text}${item.path}`}>
          <StyledLink onClick={toggleDrawer} to={`/${locale}${item.path}`}>{item.text}</StyledLink>
        </StyledNavItem>))}
    </StyledNavList>
  </SubContainer>
);

SubNav.defaultProps = {
  locale: 'en-US',
};

SubNav.propTypes = {
  locale: PropTypes.string,
  toggleDrawer: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  subMenu: PropTypes.arrayOf({
    text: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
};

export const query = graphql`
  fragment SecondNavData on ContentfulSecondaryNavigation {
    text
    path
  }
`;

export default SubNav;
