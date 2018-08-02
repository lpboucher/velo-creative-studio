import React from 'react';
import styled from 'styled-components';

import { Intro } from '../Styles/MainStyles';

export const AboutIntro = Intro.extend`
    font-size: 16px;
    text-align: justify;
`;

export const AboutDesc = styled.div`
    & > p {
        margin: 0;
    }
    & > p:first-child {
        margin-bottom: 40px;
    }
    margin: 10% 0;

    @media (max-width: 500px) {
        margin: 20% 0;
    }
`;

export const FeatureWrapper = styled.div`
    padding: 40px;
    display: flex;
    position: relative;
    height: 80vh;
    background-color: #fafafa;
`;

export const AboutTitle = styled.div`
    position: absolute;
    top: 40%;
    left: 60%;
    font-size: 28px;
    font-weight: 300;
    line-height: 1.5;
    padding-right: 20px;

    @media (max-width: 600px) {
        top: 20%;
    }
`;

export const AboutProfile = Intro.extend`
    padding-right: 40px;
    font-size: 16px;
    text-align: justify;
`;

export const AboutCollab = Intro.extend`
    padding-right: 40px;
    font-size: 16px;
    text-align: justify;
`;

export const AboutHeader = styled.h2`
    padding: 0 40px;
    font-size: 20px;

    &:first-of-type {
        margin-bottom: 0;
    }
`;
