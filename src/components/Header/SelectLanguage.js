import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { LanguageSelect } from '../Styles/HeaderStyles';

const SelectLanguage = ({ langs }) => {
  const links = langs.map(lang => (
    <Link to={lang.link} key={lang.langKey} >
      <li selected={lang.selected}>
        {lang.langKey.substr(0, 2)}
      </li>
    </Link>));

  return (
    <LanguageSelect>
      {links}
    </LanguageSelect>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguage;
