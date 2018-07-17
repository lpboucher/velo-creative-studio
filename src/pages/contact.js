import React from 'react';
import Img from 'gatsby-image';

import { InfoWrapper, InfoColumn, ContactHeader, ContactWrapper } from '../components/Styles/ContactStyles';
import { TwoColumn } from '../components/Styles/MainStyles';

import Form from '../components/Contact/Form';

const contactPage = ({ data }) => (
  <ContactWrapper>
    <TwoColumn>
      <ContactHeader>Let's Get In Touch</ContactHeader>
      <InfoWrapper>
        <InfoColumn><p>Email: vl@velocreative.studio</p></InfoColumn>
        <InfoColumn><p>Phone: +31 611985364</p></InfoColumn>
        <InfoColumn><p>Skype: @verolagarde</p></InfoColumn>
      </InfoWrapper>
      <p>or please fill in this form:</p>
      <Form />
    </TwoColumn>
    <TwoColumn>
      <Img sizes={data.contentfulAbout.featureImage.sizes} alt={data.contentfulAbout.featureImage.description} />
    </TwoColumn>
  </ContactWrapper>
);

export const query = graphql`
query contactPage {  
  contentfulAbout {
      id
      title
      location
      body {
        id
        body
      }
      slug
      featureImage {
        id
        title
        description
        sizes ( maxWidth: 1000 ) {
          ...GatsbyContentfulSizes
        }
      }
  }
}
`;

export default contactPage;
