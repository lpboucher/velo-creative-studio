import React from 'react';
import styled from 'styled-components';

import { StyledLink } from './HeaderStyles';

export const Logo = styled.p`
`;

export const AboutContainer = styled.div`
    font-size: 24px;
    padding: 40px;
    height: 90vh;
    background-color: #f2f2f0;
    & p {
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
        color: black;
    }

    @media (max-width: 500px) {
        text-align: center;
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

    @media (max-width: 1100px) {
        &:nth-child(1) {
                width: 100%;
        }
        
        &:nth-child(2) {
                display:none;
        }
    }
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

    & > a {
        text-decoration: none;
        color: black;
    }
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

    @media (max-width: 600px) {
        margin-top: 0;
    }
`;

export const Intro = styled.div`
    background-color: white;
    color: #8f8e8f;
    font-weight: 300;
    line-height: 1.5;
    font-size: 22px;
    padding: 40px 40% 40px 40px;

    @media (max-width: 900px) {
        padding-right: 20%;
    }

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const InstaContainer = styled.div`
    line-height: 0;
    font-size: 0;
    
    & img {
        width: calc(100% / 6);
        height: calc(100vw / 6);
        object-fit: cover;
        margin: 0;

        @media (max-width: 900px) {
            width: calc(100% / 3);
            height: calc(100vw / 3);
        }

        @media (max-width: 600px) {
            width: calc(100% / 2);
            height: calc(100vw / 2);
        }
    }

    & a {
        text-decoration: none;
    }
`;
