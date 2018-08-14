import React, { Component } from 'react';
import Img from 'gatsby-image';
import Instafeed from 'react-instafeed';

import { InstaContainer, LargeColumn, SmallColumn } from '../components/Styles/MainStyles';
import {
  AboutIntro,
  FeatureWrapper,
  AboutTitle,
  AboutProfile,
  AboutCollab,
  AboutHeader,
  Testimonial,
} from '../components/Styles/AboutStyles';

class about extends Component {
  render() {
    const instafeedTarget = 'instafeed';
    const { data } = this.props;

    return (
      <div>
        <AboutIntro>{data.contentfulAbout.aboutPageTop.aboutPageTop}</AboutIntro>
        <FeatureWrapper>
          <LargeColumn>
            <Img sizes={data.contentfulAbout.aboutPageFeature.sizes} alt={data.contentfulAbout.aboutPageFeature.description} />
          </LargeColumn>
          <SmallColumn>
            <AboutTitle>{data.contentfulAbout.aboutPageTitle}</AboutTitle>
          </SmallColumn>
        </FeatureWrapper>
        <AboutProfile>{data.contentfulAbout.aboutPageProfile.aboutPageProfile}</AboutProfile>
        <AboutHeader>{data.contentfulAbout.aboutPageDevTitle}</AboutHeader>
        <AboutCollab>{data.contentfulAbout.aboutPageCollaborator.aboutPageCollaborator}</AboutCollab>
        <Testimonial>
          {/* data.contentfulTestimonial.map((testimonial, index) => ( */
            <p>{`${data.contentfulTestimonial.quote.quote} - ${data.contentfulTestimonial.clientName}, ${data.contentfulTestimonial.organisation}`}</p>
          /* )) */ }
        </Testimonial>
        <AboutHeader>@vero.lagarde</AboutHeader>
        <InstaContainer id={instafeedTarget}>
          <Instafeed
            limit="6"
            ref="instafeed"
            resolution="low_resolution"
            sortBy="most-recent"
            target={instafeedTarget}
            template="
              <a href='{{link}}' target='_blank' class='instafeed__item'>
                <img class='instafeed__item__background' src='{{image}}' />
               </a>"
            userId={`${process.env.GATSBY_INSTAGRAM_USER_ID}`}
            clientId={`${process.env.GATSBY_INSTAGRAM_CLIENT_ID}`}
            accessToken={`${process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN}`}
          />
        </InstaContainer>
      </div>
    );
  }
}

export const query = graphql`
query AboutPageTest($locale: String!) {
  contentfulAbout(node_locale: { eq: $locale }) {
    ...AboutData
    node_locale
  }
  contentfulTestimonial(node_locale: { eq: $locale }) {
    clientName
    organisation
    quote {
      id
      quote
    }
  }
}
`;

export default about;
