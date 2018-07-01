import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

export const AboutContainer = styled.div`
    max-width: 1000px;
    font-size: 24px;
    padding: 40px;
    & > p {
        color: #8f8e8f;
        font-weight: 300;
        line-height: 1.5;
        font-size: 22px;
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
    padding: 0 40px;
`;

export const ContactAnchor = styled.div`
    display: inline-block;
    width: 150px;
    border: 2px solid;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    margin-top: 50px;
`;
