import React, { Component } from 'react';
import Instafeed from 'react-instafeed';

import { InstaContainer } from '../Styles/MainStyles';

class Instagram extends Component {
  render() {
    const target = 'instafeed';

    return (
      <InstaContainer id={target}>
        <Instafeed
          limit="6"
          ref="instafeed"
          resolution="low_resolution"
          sortBy="most-recent"
          target={target}
          template="
        <a href='{{link}}' target='_blank' class='instafeed__item'>
          <img class='instafeed__item__background' src='{{image}}' />
         </a>"
          userId={`${process.env.GATSBY_INSTAGRAM_USER_ID}`}
          clientId={`${process.env.GATSBY_INSTAGRAM_CLIENT_ID}`}
          accessToken={`${process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN}`}
        />
      </InstaContainer>
    );
  }
}

export default Instagram;
