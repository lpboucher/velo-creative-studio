/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive';

import Service from '../components/Main/Service';
import { ServiceIntro } from '../components/Styles/ServiceStyles';

const ServicePage = ({
  pathContext: {
    locale,
  },
  data: {
    allContentfulService,
    contentfulAbout: {
      node_locale,
      services,
    },
  },
}) => (
  <div>
    <div>
      <Overdrive id={`intro-${node_locale}`}>
        <ServiceIntro>{services.services}</ServiceIntro>
      </Overdrive>
    </div>
    {allContentfulService.edges.map(({ node }, index) => (
      <Service key={node.id} service={node} locale={locale} index={index} />
    ))}
  </div>
);

ServicePage.propTypes = {
  pathContext: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    contentfulAbout: PropTypes.shape({
      node_locale: PropTypes.string,
      services: PropTypes.shape({
        services: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
query ServicePageTest($locale: String!) {
  allContentfulService (
    filter: {node_locale: { eq: $locale }}
    sort: {fields:[orderHome]}
  ) {
    edges {
      node {
        ...ServiceData
        node_locale
      }
    }
  }
  contentfulAbout (node_locale: { eq: $locale }) {
    ...AboutIndexData
    node_locale
    services {
      services
    }
  }
}
`;

export default ServicePage;
