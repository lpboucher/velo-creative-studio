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
            <Img sizes={data.contentfulAbout.aboutPageFeature.sizes} alt="" />
          </LargeColumn>
          <SmallColumn>
            <AboutTitle>{data.contentfulAbout.aboutPageTitle}</AboutTitle>
          </SmallColumn>
        </FeatureWrapper>
        <AboutProfile>{data.contentfulAbout.aboutPageProfile.aboutPageProfile}</AboutProfile>
        <h2>Web Development</h2>
        <AboutCollab>{data.contentfulAbout.aboutPageCollaborator.aboutPageCollaborator}</AboutCollab>
        <h2>#velocreative</h2>
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
query AboutPage {
  contentfulAbout {
    ...AboutData
  }
}
`;

export default about;
