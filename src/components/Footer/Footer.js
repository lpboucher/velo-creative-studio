import React from 'react';
import Link from 'gatsby-link';

import { FooterWrapper, FooterColumn, FooterLink, FooterExternalLink } from '../Styles/FooterStyles';

const Footer = ({ footer }) => (
  <FooterWrapper>
    <FooterColumn>
      {footer.edges.slice(0, 2).map(({ node }, count) => (
        <FooterLink to="" key={node.id}>{node.text}</FooterLink>
    ))}
    </FooterColumn>
    <FooterColumn>
      {footer.edges.slice(2, 4).map(({ node }, count) => (
        <FooterExternalLink href={node.path} key={node.id}>{node.text}</FooterExternalLink>
    ))}
    </FooterColumn>
    <FooterColumn>
      {footer.edges.slice(4).map(({ node }, count) => (
        <FooterLink to={node.path} key={node.id}>{node.text}</FooterLink>
    ))}
    </FooterColumn>
  </FooterWrapper>
);

export const query = graphql`
  fragment FooterData on ContentfulFooterItem {
    id
    text
    path
    order
    visible
  }
`;

export default Footer;
