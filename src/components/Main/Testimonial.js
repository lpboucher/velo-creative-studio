import React from 'react';
import PropTypes from 'prop-types';

import { TestimonialContainer } from '../Styles/AboutStyles';

const Testimonial = ({
  clientName,
  organisation,
  quote,
}) => (
  <TestimonialContainer>
    <p>{`${quote} - ${clientName}, ${organisation}`}</p>
  </TestimonialContainer>
);

Testimonial.defaultProps = {
  clientName: 'Head of Marketing',
  organisation: 'Royal Lancaster London',
};

Testimonial.propTypes = {
  clientName: PropTypes.string,
  organisation: PropTypes.string,
  quote: PropTypes.string.isRequired,
};

export const query = graphql`
  fragment TestimonialData on ContentfulTestimonial {
    clientName
    organisation
    quote {
      id
      quote
    }
  }
`;

export default Testimonial;
