import React from 'react';
import PropTypes from 'prop-types';

import { AboutContainer } from '../Styles/MainStyles';

const About = ({ about }) => (
  <AboutContainer>
    {/* <h1>{about.title}</h1>
    <hr />
<h3>{about.location}</h3> */}
    <p>{about.body.body}</p>
  </AboutContainer>
);

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
