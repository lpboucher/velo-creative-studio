import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { HeaderWrapper, HeaderContainer, StyledLink } from '../Styles/HeaderStyles';
import MainNav from './MainNav';

class Header extends Component {
  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <StyledLink to="/">velo creative studio</StyledLink>
          <MainNav nav={data.allContentfulNavigation.edges} />
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}

export default Header;
