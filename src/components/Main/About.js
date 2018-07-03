import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import Overdrive from 'react-overdrive';

import { AboutContainer } from '../Styles/MainStyles';

class About extends Component {
  render() {
    const { about, location } = this.props;
    return (
      <AboutContainer >
        <p>{about.body.body}</p>
        <Overdrive to="logoAnimation">
          <p>velo creative studio</p>
        </Overdrive>
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
    slug
  }
`;

export default About;
