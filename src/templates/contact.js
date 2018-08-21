import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { InfoWrapper, InfoColumn, ContactHeader, ContactWrapper } from '../components/Styles/ContactStyles';
import { TwoColumn } from '../components/Styles/MainStyles';

import Form from '../components/Contact/Form';

const contactPage = ({
  data: {
    contentfulContact: {
      pageTitle,
      emailLabel,
      phoneLabel,
      skypeLabel,
      formIntroLabel,
      ...form
    },
    contentfulAbout: {
      featureImage,
    },
  },
}) => (
  <ContactWrapper>
    <TwoColumn>
      <ContactHeader>{pageTitle}</ContactHeader>
      <InfoWrapper>
        <InfoColumn><p>{emailLabel}: vl@velocreative.studio</p></InfoColumn>
        <InfoColumn><p>{phoneLabel}: +31 611985364</p></InfoColumn>
        <InfoColumn><p>{skypeLabel}: @verolagarde</p></InfoColumn>
      </InfoWrapper>
      <p>{formIntroLabel}</p>
      <Form {...form} />
    </TwoColumn>
    <TwoColumn>
      <Img sizes={featureImage.sizes} alt={featureImage.description} />
    </TwoColumn>
  </ContactWrapper>
);

contactPage.propTypes = {
  data: PropTypes.shape({
    contentfulContact: PropTypes.shape({
      pageTitle: PropTypes.string,
      emailLabel: PropTypes.string,
      phoneLabel: PropTypes.string,
      skypeLabel: PropTypes.string,
      formIntroLabel: PropTypes.string,
    }),
    contentfulAbout: PropTypes.shape({
      description: PropTypes.string,
      sizes: PropTypes.object,
    }),
  }).isRequired,
};

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
    ...FormData
  }
}
`;

export default contactPage;
