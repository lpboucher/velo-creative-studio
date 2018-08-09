import React from 'react';
import Img from 'gatsby-image';

import { InfoWrapper, InfoColumn, ContactHeader, ContactWrapper } from '../components/Styles/ContactStyles';
import { TwoColumn } from '../components/Styles/MainStyles';

import Form from '../components/Contact/Form';

const contactPage = ({ data }) => (
  <ContactWrapper>
    <TwoColumn>
      <ContactHeader>{data.contentfulContact.pageTitle}</ContactHeader>
      <InfoWrapper>
        <InfoColumn><p>{data.contentfulContact.emailLabel}: vl@velocreative.studio</p></InfoColumn>
        <InfoColumn><p>{data.contentfulContact.phoneLabel}: +31 611985364</p></InfoColumn>
        <InfoColumn><p>{data.contentfulContact.skypeLabel}: @verolagarde</p></InfoColumn>
      </InfoWrapper>
      <p>{data.contentfulContact.formIntroLabel}</p>
      <Form label={data.contentfulContact} />
    </TwoColumn>
    <TwoColumn>
      <Img sizes={data.contentfulAbout.featureImage.sizes} alt={data.contentfulAbout.featureImage.description} />
    </TwoColumn>
  </ContactWrapper>
);

export const query = graphql`
query contactPageTest($locale: String!) {  
  contentfulAbout(node_locale: { eq: $locale }) {
      id
      node_locale
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
  contentfulContact(node_locale: { eq: $locale }) {
    pageTitle
    emailLabel
    phoneLabel
    skypeLabel
    formIntroLabel
    formNameLabel
    formEmailLabel
    formNumberLabel
    formCompanyLabel
    formMessageLabel
    formButtonLabel
  }
}
`;

export default contactPage;
