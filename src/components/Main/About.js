import React from 'react';
import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive';

import { AboutContainer, WorkButton, Logo } from '../Styles/MainStyles';
import { AboutDesc } from '../Styles/AboutStyles';
import { StyledLink } from '../Styles/HeaderStyles';

const About = ({ about, locale }) => (
  <AboutContainer >
    <Overdrive id="logoAnimation">
      <Logo>velo creative studio</Logo>
    </Overdrive>
    <Overdrive id={`intro-${locale}`}>
      <AboutDesc dangerouslySetInnerHTML={{
              __html: about.body.childMarkdownRemark.html,
            }}
      />
    </Overdrive>
    <WorkButton>
      <StyledLink to={`/${locale}/portfolio`}>
        {about.ctaHome}
      </StyledLink>
    </WorkButton>
  </AboutContainer>
);

About.defaultProps = {
  locale: 'en-US',
};

About.propTypes = {
  about: PropTypes.shape({
    body: PropTypes.shape({ body: PropTypes.string }),
  }).isRequired,
  locale: PropTypes.string,
};

export const query = graphql`
  fragment AboutIndexData on ContentfulAbout {
    ctaHome
    body {
      id
      childMarkdownRemark {
        html
      }
    }
  }
`;

export default About;

