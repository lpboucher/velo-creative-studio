import React, { Component } from 'react';
import Instafeed from 'react-instafeed';

import { InstaContainer } from '../components/Styles/MainStyles';

class about extends Component {
  render() {
    const instafeedTarget = 'instafeed';
    const { data } = this.props;

    return (
      <div>
        {data.contentfulAbout.introPage.introPage}
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
            userId={process.env.INSTAGRAM_USER_ID}
            clientId={process.env.INSTAGRAM_CLIENT_ID}
            accessToken={process.env.INSTAGRAM_ACCESS_TOKEN}
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
