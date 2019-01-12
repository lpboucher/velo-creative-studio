import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl';

import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import fr from 'react-intl/locale-data/fr';
import 'intl/locale-data/jsonp/fr';

import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import './index.css';

import logo from '../images/favicon.ico';

addLocaleData([...en, ...fr]);

const TemplateWrapper = ({ children, data, location }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <IntlProvider locale={langKey}>
      <div>
        <Helmet
          title={data.contentfulAbout.seoTitle}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${logo}` },
          ]}
        >
          <meta name="description" content={data.contentfulAbout.seoDescription.seoDescription} />
          <meta property="og:title" content={data.contentfulAbout.seoTitle} />
          <meta property="og:site_name" content="velocreative.studio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://velocreative.studio/" />
          <meta property="og:description" content={data.contentfulAbout.seoDescription.seoDescription} />
          <meta property="og:image" content={data.contentfulAbout.featureImage.file.url} />
        </Helmet>
        <Header
          nav={data.allContentfulNavigation}
          location={location}
          langs={langsMenu}
          locale={langKey}
        />
        {children()}
        <Footer footer={data.allContentfulFooterItem} locale={langKey} />
      </div>
    </IntlProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    allContentFulFooterItem: PropTypes.object,
    allContentFulNavigation: PropTypes.object,
    contentfulAbout: PropTypes.object,
    site: PropTypes.object,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export const query = graphql`
  query TemplateQuery {
    allContentfulNavigation (
      filter: {visible: {eq:true}}
      sort: {fields:[order]}
    ) {
      edges {
        node {
          ...NavData
          node_locale
        }
      }
    }
    allContentfulFooterItem (
      filter: {visible: {eq:true}
              node_locale: {eq:"en-US"}                   
    }
      sort: {fields:[order]}
    ) {
      edges {
        node {
          ...FooterData
        }
      }
    }
    contentfulAbout {
      seoTitle
      seoDescription {
        seoDescription
      }
      featureImage {
        file {
          url
        }
      }
    }
    site {
      siteMetadata {
        title
        languages {
          langs
          defaultLangKey
        }
      }
    }
  }
`;

export default TemplateWrapper;
