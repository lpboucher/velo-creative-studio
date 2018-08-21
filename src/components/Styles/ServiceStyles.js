import styled from 'styled-components';

import { Intro, ContactAnchor } from './MainStyles';

export const CallToAction = styled.p`
`;

export const ServiceIntro = Intro.extend`
`;

export const ServiceTitle = styled.h1`
    margin: 0 0 60px;
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

        @media (max-width: 900px) {
            width: 100%;
        }
    }
`;

export const ServiceContainer = styled.div`
    padding: 40px;

    ul {
        margin-left: 0;
    
        li {
        list-style: none;
        }
    }
`;

export const ServiceWrapper = styled.div`
    &:nth-of-type(2) {
        & > ${ServiceContainer} {
            background-color: #fafafa;
            text-align: justify;
            color: black;
            border-color: black;
            font-weight: 300;

            @media (max-width: 600px) {
                text-align: left;
            }
            

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
            color: black;
            border-color: #8f8e8f;
            font-weight: 300;

            @media (max-width: 600px) {
                direction: initial;
            }

            & > p > p:after {
                content: "I";
                color: white;
            }

            & > ${CallToAction} {
                float: left;
                margin-top: 50px;

                &:before {
                    content: "⟵ ";
                }
            }

            & > ${ContactAnchor} {
                margin-right: 0;
                margin-left: 20px;

                @media (max-width: 600px) {
                    margin-left: 0;
                    margin-right: 20px;
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
    height: 48vh;
`;

export const ServiceCategories = styled.div`

`;

export const ServiceCategory = styled.div`
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;

    & span {
        padding: 0 5px;
    }
`;
