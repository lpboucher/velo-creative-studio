import React, { Component } from 'react';
import Overdrive from 'react-overdrive';

import { HeaderWrapper, HeaderContainer, StyledLogo } from '../Styles/HeaderStyles';
import MainNav from './MainNav';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
    this.toggleHidden = this.toggleHidden.bind(this);
    this.resetHidden = this.resetHidden.bind(this);
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  resetHidden() {
    this.setState({
      isHidden: true,
    });
  }

  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Overdrive id="logoAnimation">
            <StyledLogo location={location} onClick={this.resetHidden} to="/">velo creative studio</StyledLogo>
          </Overdrive>
          <MainNav
            nav={this.props.nav.edges}
            toggleHidden={this.toggleHidden}
            isHidden={this.state.isHidden}
            resetHidden={this.resetHidden}
          />
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}

export default Header;
