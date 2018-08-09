import React, { Component } from 'react';
import Overdrive from 'react-overdrive';

import { HeaderWrapper, HeaderContainer, StyledLogo } from '../Styles/HeaderStyles';
import SelectLanguage from './SelectLanguage';
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
            <StyledLogo location={this.props.location} onClick={this.resetHidden} to={`/${this.props.locale}`}>velo creative studio</StyledLogo>
          </Overdrive>
          <MainNav
            nav={this.props.nav.edges}
            toggleHidden={this.toggleHidden}
            isHidden={this.state.isHidden}
            resetHidden={this.resetHidden}
            locale={this.props.locale}
          />
          <SelectLanguage langs={this.props.langs} locale={this.props.locale} />
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}

export default Header;
