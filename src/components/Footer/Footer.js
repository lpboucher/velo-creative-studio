import React from 'react';
import PropTypes from 'prop-types';

import { FooterWrapper, FooterColumn, FooterLink, FooterExternalLink } from '../Styles/FooterStyles';

const Footer = ({ footer, locale }) => (
  <FooterWrapper>
    <FooterColumn>
      {footer.edges.slice(0, 2).map(({ node }) => (
        <FooterLink to="" key={node.id}>{node.text}</FooterLink>
    ))}
    </FooterColumn>
    <FooterColumn>
      {footer.edges.slice(2, 4).map(({ node }) => (
        <FooterExternalLink href={node.path} key={node.id}>{node.text}</FooterExternalLink>
    ))}
    </FooterColumn>
    <FooterColumn>
      {footer.edges.slice(4).map(({ node }) => (
        <FooterLink to={`/${locale}${node.path}`} key={node.id}>{node.text}</FooterLink>
    ))}
    </FooterColumn>
  </FooterWrapper>
);

Footer.defaultProps = {
  locale: 'en-US',
};

Footer.propTypes = {
  locale: PropTypes.string,
  footer: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export const query = graphql`
  fragment FooterData on ContentfulFooterItem {
    id
    text
    path
    order
    visible
    node_locale
  }
`;

export default Footer;
