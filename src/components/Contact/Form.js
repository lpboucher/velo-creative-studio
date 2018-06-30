import React from 'react';

import { ContactForm, FormLabel, FormInput, FormMessage, FormButton } from '../Styles/ContactStyles';

const Form = () => (
  <ContactForm name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <FormLabel >Full Name: </FormLabel><FormInput name="name" type="text" />
    <FormLabel >E-mail address: </FormLabel><FormInput name="email" type="email" />
    <FormLabel >Phone number: </FormLabel><FormInput name="phone" type="text" />
    <FormLabel >Company: </FormLabel><FormInput name="client" type="text" />
    <FormLabel >What you would like to discuss: </FormLabel><FormMessage name="message" type="text" rows="10" />
    <FormButton type="submit">Submit</FormButton>
  </ContactForm>
);

export default Form;
