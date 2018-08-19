import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const {
      langs,
      locale,
      location,
      nav: {
        edges,
      },
    } = this.props;
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <Overdrive id="logoAnimation">
            <StyledLogo location={location} onClick={this.resetHidden} to={`/${locale}`}>velo creative studio</StyledLogo>
          </Overdrive>
          <MainNav
            nav={edges}
            toggleHidden={this.toggleHidden}
            isHidden={this.state.isHidden}
            resetHidden={this.resetHidden}
            locale={locale}
          />
          <SelectLanguage langs={langs} locale={locale} />
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}
Header.defaultProps = {
  locale: 'en-US',
};

Header.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.object).isRequired,
  locale: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  nav: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Header;
