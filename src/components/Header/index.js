import React, { Component } from 'react';
import Overdrive from 'react-overdrive';

import { HeaderWrapper, HeaderContainer, StyledLogo } from '../Styles/HeaderStyles';
import MainNav from './MainNav';

const Header = ({ nav, location }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Overdrive to="logoAnimation">
        <StyledLogo location={location} to="/">velo creative studio</StyledLogo>
      </Overdrive>
      <MainNav nav={nav.allContentfulNavigation.edges} />
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
