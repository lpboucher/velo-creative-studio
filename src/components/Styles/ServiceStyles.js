import React from 'react';
import styled from 'styled-components';

export const CallToAction = styled.p`
`;

export const ServiceContainer = styled.div`
    padding: 40px;

    &:nth-of-type(2) {
        background-color: #d3bdaa;
        color: white;
        padding-right: 30%;
        border-color: white;

        & > ${CallToAction} {
            float: right;
            margin-right: -25%;
            margin-top: 50px;

            &:after {
                content: " ⟶";
            }
        }
    }

    &:nth-of-type(3) {
        background-color: white;
        text-align: right;
        color: #8f8e8f;
        padding-left: 30%;
        border-color: #8f8e8f;

        & > ${CallToAction} {
            float: left;
            margin-left: -25%;
            margin-top: 50px;

            &:before {
                content: "⟵ ";
            }
        }
    }

    &:nth-of-type(4) {
        background-color: #f4f4f3;
        color: #4a4a4a;
        padding-right: 30%;
        border-color: #4a4a4a;

        & > ${CallToAction} {
            float: right;
            margin-right: -25%;
            margin-top: 50px;

            &:after {
                content: " ⟶";
            }
        }
    }
`;

export const ServiceTitle = styled.h1`
    margin: 30px 0 60px;
    text-transform: uppercase;
    font-size: 22px;
    letter-spacing: 1.5px;
`;
// d8c5b4 e8d4c3
