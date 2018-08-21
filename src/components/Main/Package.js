import React from 'react';
import PropTypes from 'prop-types';

import ListingPackage from './ListingPackage';

import {
  PackageWrapper,
  PackageContainer,
  PackageTitle,
  PackageDesc,
  PackageSubTitle,
  PackageAdd,
} from '../Styles/PackageStyles';

const Package = ({
  title,
  tagline,
  includesTitle,
  duration,
  closingTagLine,
  ...includes
}) => (
  <PackageWrapper>
    <PackageContainer>
      <PackageTitle>{title}</PackageTitle>
      <hr />
      <PackageDesc>{tagline.tagline}</PackageDesc>
      <PackageSubTitle>{includesTitle}</PackageSubTitle>
      <ListingPackage {...includes} />
      <p>{duration}</p>
      <PackageAdd>{closingTagLine.closingTagLine}</PackageAdd>
    </PackageContainer>
  </PackageWrapper>
);

Package.defaultProps = {
  title: 'brand kit package',
  tagline: 'We deliver on the promise of entrepreneurs who are eager to brand and spread their ideas and products. This brand kit has been designed to meet the needs of startups in order to bring their ideas to life.',
  includesTitle: 'what does the kit include',
  duration: 'duration: approx. 10 weeks',
  closingTagLine: 'Additional items can be added to the package such as business cards, branded collateral, presentations, brochures.',
};

Package.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.shape({
    tagline: PropTypes.string,
  }),
  includesTitle: PropTypes.string,
  duration: PropTypes.string,
  closingTagLine: PropTypes.shape({
    closingTagLine: PropTypes.string,
  }),
};

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
