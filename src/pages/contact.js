import React from 'react';

import { InfoWrapper, InfoColumn } from '../components/Styles/ContactStyles';

import Form from '../components/Contact/Form';

const contactPage = () => (
  <div>
    <InfoWrapper>
      <InfoColumn><p>Email: vl@velocreative.studio</p></InfoColumn>
      <InfoColumn><p>Phone: +31 611985364</p></InfoColumn>
      <InfoColumn><p>Skype: @verolagarde</p></InfoColumn>
    </InfoWrapper>
    <Form />
  </div>
);

export default contactPage;
