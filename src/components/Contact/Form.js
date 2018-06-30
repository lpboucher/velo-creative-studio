import React from 'react';

const Form = () => (
  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <label >Full Name: <input name="name" type="text" /></label>
    <label >E-mail address: <input name="email" type="text" /></label>
    <label >Phone number: <input name="phone" type="text" /></label>
    <label >Company: <input name="client" type="text" /></label>
    <label >What you would like to discuss: <input name="message" type="text" /></label>
    <button>Submit</button>
  </form>
);

export default Form;
