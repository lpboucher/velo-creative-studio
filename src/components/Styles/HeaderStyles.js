import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  height: 10vh;
  background-color: #f2f2f0;
`;

export const HeaderContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
  background-color: #f2f2f0;

  h1 {
    margin: 0;
    font-size: 16px;
  }
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  @media (max-width: 900px) {
        display: ${props => (props.hide === false ? 'block' : 'none')};
        width: 100%;
        position: absolute;
        left: 0;
        background-color: #f2f2f0;
        padding: 20px 40px;
        z-index: 5;
    }
`;

export const MobileIcon = styled.a`
  display: none;
  color: black;
  text-decoration: none;
  font-size: 24px;

  @media (max-width: 900px) {
    display: inline-block;
    width: 100%;
    text-align: right;

    
  }
`;

export const StyledLink = styled(Link)`
color: #4a4a4a;
text-decoration: none;
font-size: 16px;
font-weight: 300;
letter-spacing: 2px;
`;

export const StyledLogo = styled(Link)`
text-decoration: none;
font-size: 16px;
font-weight: 300;
letter-spacing: 2px;
color: ${props => (props.location.pathname === '/en-US' ||
                  props.location.pathname === '/en-US/' ||
                  props.location.pathname === '/fr' ||
                  props.location.pathname === '/fr/' ? '#f4f4f3' : '#4a4a4a')};
`;

export const StyledNavItem = styled.li`
  margin: 0 20px;

  & > ${StyledLink} {
    text-transform: uppercase;
    font-size: 13px;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 1% 0;
    margin: 0;
  }
`;

export const LanguageSelect = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  & > a {
    color: #4a4a4a;
    text-decoration: none;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 2px;

    & > li {
      margin: 0 20px;
    }
  }
`;
