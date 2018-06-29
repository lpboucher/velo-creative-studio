import React from 'react';

import { FooterWrapper, FooterColumn } from '../Styles/FooterStyles';

const Footer = () => (
  <FooterWrapper>
    <FooterColumn>
      <p>Copyright Velo Creative Studio</p>
      <p>|</p>
      <p>2018</p>
    </FooterColumn>
    <FooterColumn>
      <p>Instagram</p>
      <p>|</p>
      <p>Facebook</p>
    </FooterColumn>
    <FooterColumn>
      <p>Contact</p>
      <p>|</p>
      <p>Services</p>
      <p>|</p>
      <p>Portfolio</p>
    </FooterColumn>
  </FooterWrapper>
);

export default Footer;
