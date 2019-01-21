import styled from 'styled-components';

import { Intro } from '../Styles/MainStyles';

export const AboutIntro = Intro.extend`
    font-size: 22px;
`;

export const AboutDesc = styled.div`
    margin: 10% 0;
    
    & > p {
        margin: 0;

        @media (max-width: 400px) {
            font-size: 18px;
        }

        @media (max-width: 325px) {
            font-size: 14px;
        }
    }

    & > p:first-child {
        margin-bottom: 40px;
    }

    @media (max-width: 900px) {
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
    padding: 40px 40px 0;
    font-size: 20px;

    &:first-of-type {
        margin-bottom: 0;
        padding-top: 0;
    }
`;

export const TestimonialContainer = styled.div`
    padding: 20px 40px;
    text-align: left;
    font-size: 14px;
    background-color: #e8e8e1;

    & > p {
        margin-bottom: 0;
    }

    &:nth-of-type(2) {
        background:red;
    }
`;
