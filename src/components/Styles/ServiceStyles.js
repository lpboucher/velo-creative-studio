import React from 'react';
import styled from 'styled-components';

export const CallToAction = styled.p`
`;

export const ServiceIntro = styled.div`
    background-color: white;
    color: #8f8e8f;
    font-weight: 300;
    line-height: 1.5;
    font-size: 22px;
    padding: 40px 40% 40px 40px;
`;

export const ServiceTitle = styled.h1`
    margin: 30px 0 60px;
    text-transform: uppercase;
    font-size: 22px;
    letter-spacing: 1.5px;
    font-weight: 300;
    display: flex;
    align-items: center;

    & > span {
        &:first-child {
            font-size: 60px;
            padding: 0 10px;
        }
    }

    & + p {
        width: 80%;
    }
`;

export const ServiceContainer = styled.div`
    padding: 40px;
`;

export const ServiceWrapper = styled.div`
    &:nth-of-type(2) {
        & > ${ServiceContainer} {
            background-color: #fafafa;
            text-align: justify;
            color: black;
            border-color: black;
            font-weight: 300;
            

            & > ${CallToAction} {
                float: right;
                margin-top: 50px;

                &:after {
                    content: " ⟶";
                }
            }
        }    
    }

    &:nth-of-type(3) {
        & > ${ServiceContainer} {
            background-color: white;
            direction: rtl;
            text-align: justify;
            color: #8f8e8f;
            border-color: #8f8e8f;
            font-weight: 300;

            & > ${CallToAction} {
                float: left;
                margin-top: 50px;

                &:before {
                    content: "⟵ ";
                }
            }

            & > ${ServiceTitle} {
                
            }
        }    
    }

    &:nth-of-type(4) {
        & > ${ServiceContainer} {
            background-color: #fafafa;
            text-align: justify;
            color: #4a4a4a;
            border-color: #4a4a4a;
            font-weight: 300;

            & > ${CallToAction} {
                float: right;
                margin-top: 50px;

                &:after {
                    content: " ⟶";
                }
            }
        }    
    }
`;

export const ServiceFeature = styled.div`
    display: ${props => (props.index >= 3 ? 'none' : 'block')};
    height: 60vh;
`;

export const ServiceCategories = styled.div`

`;

export const ServiceCategory = styled.div`
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 14px;

    & span {
        padding: 0 5px;
    }
`;
