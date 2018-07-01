import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
  background-color: #f4f4f3;

  h1 {
    margin: 0;
    font-size: 16px;
  }
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;

export const StyledLink = styled(Link)`
color: #4a4a4a;
text-decoration: none;
font-size: 16px;
font-weight: 300;
letter-spacing: 2px;
`;

export const StyledNavItem = styled.li`
  margin: 0 20px;

  & > ${StyledLink} {
    text-transform: uppercase;
    font-size: 13px;
  }
`;
