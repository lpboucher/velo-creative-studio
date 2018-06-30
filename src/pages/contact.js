import React from 'react';

import { InfoWrapper, InfoColumn, ContactHeader } from '../components/Styles/ContactStyles';

import Form from '../components/Contact/Form';

const contactPage = () => (
  <div>
    <ContactHeader>Let's Get In Touch</ContactHeader>
    <InfoWrapper>
      <InfoColumn><p>Email: vl@velocreative.studio</p></InfoColumn>
      <InfoColumn><p>Phone: +31 611985364</p></InfoColumn>
      <InfoColumn><p>Skype: @verolagarde</p></InfoColumn>
    </InfoWrapper>
    <p>or please fill in this form:</p>
    <Form />
  </div>
);

export default contactPage;
