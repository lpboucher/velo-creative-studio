import React from 'react';

import {
  PackageWrapper,
  PackageContainer,
  PackageTitle,
  PackageDesc,
  PackageSubTitle,
  PackageList,
  PackageAdd,
} from '../Styles/PackageStyles';

const Package = ({ packageDetail }) => (
  <PackageWrapper>
    <PackageContainer>
      <PackageTitle>{packageDetail.title}</PackageTitle>
      <hr />
      <PackageDesc>
        {packageDetail.tagline.tagline}
      </PackageDesc>
      <PackageSubTitle>{packageDetail.includesTitle}</PackageSubTitle>
      <PackageList>
        {packageDetail.includes.map(item => (
          <li key={item.substr(0, 4)}>{item}</li>
        ))}
      </PackageList>
      <p>{packageDetail.duration}</p>
      <PackageAdd>{packageDetail.closingTagLine.closingTagLine}</PackageAdd>
    </PackageContainer>
  </PackageWrapper>
);

export const query = graphql`
  fragment PackageData on ContentfulBrandKit {
    title
    tagline {
      tagline
    }
    includesTitle
    includes
    duration
    closingTagLine {
      id
      closingTagLine
    }
  }
`;

export default Package;
