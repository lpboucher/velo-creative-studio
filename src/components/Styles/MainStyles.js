import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { StyledLink } from '../Styles/HeaderStyles';

export const Logo = styled.p`
`;

export const AboutContainer = styled.div`
    font-size: 24px;
    padding: 40px;
    height: 90vh;
    background-color: #f2f2f0;
    & p {
        color: #8f8e8f;
        font-weight: 300;
        line-height: 1.5;
        font-size: 22px;
        max-width: 1000px;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    & ${Logo} {
        margin: 0;
        font-weight: bold;
    }
`;

export const ActionBox = styled.div`
    padding: 15px;
    border: grey 1px solid;
    width: 20vw;
    text-transform: uppercase;
    margin: 0 auto;

    h4 {
        margin: 0;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    & > * {
        color: black;
        text-decoration: none;
        font-weight: 300;
    }
`;

export const TwoColumn = styled.div`
    width: 50%;
`;

export const LargeColumn = styled.div`
    flex: 66%;
    height: 100%;

    div {
        padding-bottom: 0;
    }
`;

export const SmallColumn = styled.div`
    flex: 33%;
    height: 100%;
`;

export const HomeWrapper = styled.div`
`;

export const Title = styled.div`
    text-transform: uppercase;
    font-family: georgia;
`;

export const ContactAnchor = styled.div`
    display: inline-block;
    border: 1px solid;
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 14px;
    padding: 10px;
    margin-top: 50px;
    margin-right: 20px;
`;

export const WorkButton = styled.div`
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    margin-top: 50px;

    & > ${StyledLink} {
        font-weight: bold;
    }
`;

export const Intro = styled.div`
    background-color: white;
    color: #8f8e8f;
    font-weight: 300;
    line-height: 1.5;
    font-size: 22px;
    padding: 40px 40% 40px 40px;
`;

export const InstaContainer = styled.div`
    line-height: 0;
    font-size: 0;
    
    & img {
        width: calc(100% / 6);
        height: calc(100vw / 6);
        object-fit: cover;
        margin: 0;
    }

    & a {
        text-decoration: none;
    }
`;
