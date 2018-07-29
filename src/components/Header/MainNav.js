import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { StyledNavList, MobileIcon } from '../Styles/HeaderStyles';
import NavItem from './NavItem';

class MainNav extends Component {
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
      <nav>
        <MobileIcon href="#" onClick={this.toggleHidden}>☰</MobileIcon>
        <StyledNavList hide={this.state.isHidden}>
          {this.props.nav.map(({ node }) => (
            <NavItem key={node.id} item={node} reset={this.resetHidden} />
        ))}
        </StyledNavList>
      </nav>
    );
  }
}

export default MainNav;

