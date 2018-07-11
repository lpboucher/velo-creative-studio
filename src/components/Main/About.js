import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import Overdrive from 'react-overdrive';

import { AboutContainer, WorkButton, Logo } from '../Styles/MainStyles';
import { StyledLink } from '../Styles/HeaderStyles';

class About extends Component {
  render() {
    const { about, location } = this.props;
    return (
      <AboutContainer >
        <Overdrive id="logoAnimation">
          <Logo>velo creative studio</Logo>
        </Overdrive>
        <Overdrive id="intro">
          <p>{about.body.body}</p>
        </Overdrive>
        <WorkButton>
          <StyledLink to="/portfolio">
            View our work
          </StyledLink>
        </WorkButton>
      </AboutContainer>
    );
  }
}

About.propTypes = {
  about: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string,
    body: PropTypes.shape({ body: PropTypes.string }),
  }).isRequired,
};


export const query = graphql`
  fragment AboutData on ContentfulAbout {
    id
    title
    location
    body {
      id
      body
    }
    services {
      id
      services
    }
    slug
  }
`;

export default About;
