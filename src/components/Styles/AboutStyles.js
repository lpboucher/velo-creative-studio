import React from 'react';
import styled from 'styled-components';

import { Intro } from '../Styles/MainStyles';

export const AboutIntro = Intro.extend`
    font-size: 16px;
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
    font-size: 36px;
    font-weight: 300;
    line-height: 1.5;
    padding-right: 20px;
`;

export const AboutProfile = Intro.extend`
    padding-right: 40px;
    font-size: 16px;
`;

export const AboutCollab = Intro.extend`
    padding-right: 40px;
    font-size: 16px;
`;
