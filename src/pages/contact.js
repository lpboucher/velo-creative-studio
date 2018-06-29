import React from 'react';

import { ContactWrapper, ContactColumn } from '../components/Styles/ContactStyles';

const contactPage = () => (
  <ContactWrapper>
    <ContactColumn><p>Email: vl@velocreative.studio</p></ContactColumn>
    <ContactColumn><p>Phone: +31 611985364</p></ContactColumn>
    <ContactColumn><p>Skype: @verolagarde</p></ContactColumn>
  </ContactWrapper>
);

export default contactPage;
