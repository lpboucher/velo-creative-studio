import React from 'react';

import { ContactForm, FormLabel, FormInput, FormMessage, FormButton } from '../Styles/ContactStyles';

const Form = ({ label }) => (
  <ContactForm name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <FormLabel >{label.formNameLabel}: </FormLabel><FormInput name="name" type="text" />
    <FormLabel >{label.formEmailLabel}: </FormLabel><FormInput name="email" type="email" />
    <FormLabel >{label.formNumberLabel}: </FormLabel><FormInput name="phone" type="text" />
    <FormLabel >{label.formCompanyLabel}: </FormLabel><FormInput name="client" type="text" />
    <FormLabel >{label.formMessageLabel}: </FormLabel><FormMessage name="message" type="text" rows="10" />
    <FormButton type="submit">{label.formButtonLabel}</FormButton>
  </ContactForm>
);

export default Form;
