import React from 'react';
import PropTypes from 'prop-types';

import { TestimonialContainer } from '../Styles/AboutStyles';

const Testimonial = ({ clientName, organisation, quote }) => (
  <TestimonialContainer>
    {/* data.contentfulTestimonial.map((testimonial, index) => ( */
      <p>{`${quote.quote} - ${clientName}, ${organisation}`}</p>
        /* )) */ }
  </TestimonialContainer>
);

Testimonial.defaultProps = {
  clientName: 'Head of Marketing',
  organisation: 'Royal Lancaster London',
};

Testimonial.propTypes = {
  clientName: PropTypes.string,
  organisation: PropTypes.string,
  quote: PropTypes.shape({
    quote: PropTypes.string,
  }).isRequired,
};

export default Testimonial;
