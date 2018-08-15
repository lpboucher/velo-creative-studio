import React from 'react';
import PropTypes from 'prop-types';

import { ContactForm, FormLabel, FormInput, FormMessage, FormButton } from '../Styles/ContactStyles';

const Form = ({
  formNameLabel,
  formEmailLabel,
  formNumberLabel,
  formCompanyLabel,
  formMessageLabel,
  formButtonLabel,
}) => (
  <ContactForm name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <FormLabel >{formNameLabel}: </FormLabel><FormInput name="name" type="text" />
    <FormLabel >{formEmailLabel}: </FormLabel><FormInput name="email" type="email" />
    <FormLabel >{formNumberLabel}: </FormLabel><FormInput name="phone" type="text" />
    <FormLabel >{formCompanyLabel}: </FormLabel><FormInput name="client" type="text" />
    <FormLabel >{formMessageLabel}: </FormLabel><FormMessage name="message" type="text" rows="10" />
    <FormButton type="submit">{formButtonLabel}</FormButton>
  </ContactForm>
);

Form.defaultProps = {
  formNameLabel: 'full name',
  formEmailLabel: 'email address',
  formNumberLabel: 'phone number',
  formCompanyLabel: 'company',
  formMessageLabel: 'what you would like to discuss',
  formButtonLabel: 'submit',
};

Form.propTypes = {
  formNameLabel: PropTypes.string,
  formEmailLabel: PropTypes.string,
  formNumberLabel: PropTypes.string,
  formCompanyLabel: PropTypes.string,
  formMessageLabel: PropTypes.string,
  formButtonLabel: PropTypes.string,
};

export const query = graphql`
  fragment FormData on ContentfulContact {
    formNameLabel
    formEmailLabel
    formNumberLabel
    formCompanyLabel
    formMessageLabel
    formButtonLabel
  }
`;

export default Form;
