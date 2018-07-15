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

const Package = () => (
  <PackageWrapper>
    <PackageContainer>
      <PackageTitle>Brand Kit Package</PackageTitle>
      <hr />
      <PackageDesc>
        We deliver on the promise of entrepreneurs who are eager to brand and spread their ideas and products. This brand kit has been designed to meet the needs of startups in order to bring their ideas to life.
      </PackageDesc>
      <PackageSubTitle>What does the kit include</PackageSubTitle>
      <PackageList>
        <li>Free consultation and brainstorm</li>
        <li>Branding Manual</li>
        <li>Website</li>
      </PackageList>
      <p>Duration: 10 weeks</p>
      <PackageAdd>Additional items can be added to the package such as business cards, branded collateral, presentations, brochures</PackageAdd>
    </PackageContainer>
  </PackageWrapper>
);

export default Package;
