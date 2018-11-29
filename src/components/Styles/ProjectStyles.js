import styled from 'styled-components';

import { Title, Intro } from './MainStyles';

export const PortfolioIntro = Intro.extend`
`;

export const ProjectTitle = Title.extend`
    text-align: left;

    h1 {
        color: black;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 18px;
    }

    h3 {
        color: lightgrey;
        font-weight: normal;
        font-size: 16px;
    }
`;

export const ProjectWrapper = styled.div`
    text-transform: uppercase;
    text-align: center;
    padding: 60px 40px 40px;

    p {
        text-transform: none;
    }
`;

export const ProjectContainer = styled.div`
    display: flex;
    position: relative;
    height: 80vh;
    padding: 80px 40px 40px;

    Img {
        z-index: -1;
        object-fit: contain;
        max-height: 64vh;
        padding-bottom: 0
    }
    
    &:nth-of-type(even) {
        flex-direction: row-reverse;

    }

    &:nth-of-type(odd) {

    }

`;

export const TitleBox = styled.div`
    h4 {
        letter-spacing: 4px;
        font-size: 14px;
        margin: 0;
    }
    p {
        font-size: 12px;
        margin: 0;
    }
    background-color: ${props => (props.count % 2 === 0 ? 'black' : 'lightgrey')};
    color: ${props => (props.count % 2 === 0 ? 'white' : 'black')};
    width: 33vw;
    position: absolute;
    top: 20%;
    left: ${props => (props.count % 2 === 0 ? '60%' : '')};
    right: ${props => (props.count % 2 !== 0 ? '60%' : '')};
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Excerpt = styled.div`
    margin-top: 30%;
    padding: 40px;
    text-align: justify;

    p {
        font-family: georgia;
        font-size: 14px;
    }
`;

export const Description = styled.div`
    text-align: justify;

    p {
        font-family: niveau-grotesk;
        font-weight: 200;
        font-size: 14px;
        padding-right: 40px;
        margin-bottom: 15px;

        @media (max-width: 1400px) {
            padding-right: 20px;
        }
        
        @media (max-width: 1200px) {
            margin-bottom: 10px;
            padding-right: 20px;
        }

        & > a {
            text-decoration: none;
            color: black;
            font-style: italic; 
        }

        @media (max-width: 600px) {
            padding-right: 0;
    }
    }
    @media (max-width: 1200px) {
        line-height: 20px;
    }

    @media (max-width: 900px) {
        text-align: center;
        line-height: 1.15em;
    }

    @media (max-width: 500px) {
        line-height: 20px;
    }

    @media (max-width: 420px) {
        line-height: 1.15em;
    }
`;

export const ProjectOverlay = styled.div`
    display: none;
    position: absolute !important;
    top: 20px;
    left: 5%;
    z-index: 2;
    font-size: 12px;
    text-transform: uppercase;
`;

export const ProjectMasonry = styled.div`
    padding: 0 40px 40px;
    column-count: 2;
    column-gap: 0;
    display: grid;
    grid-auto-rows: 300px;
    grid-auto-flow: column;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, 2, 1fr);
    
    & > * {
        break-inside: avoid;
        page-break-inside: avoid;
        -webkit-column-break-inside: avoid;
        -moz-column-break-inside: avoid;
        position: relative;

        & > * {
            height: 100%;
        }
        @media (min-width: 960px) {
            &:hover .gatsby-image-outer-wrapper {
                opacity: 0.5;
            }
            &:hover ${ProjectOverlay} {
                display: block;
            }
        }

        &:nth-child(1) {
            grid-row: span 2;
            grid-column: 1 / span 1;

            @media (max-width: 900px) {
                grid-row: span 1;
                grid-column: span 2;
            }
        }

        &:nth-child(2) {
            grid-row: span 1;
            grid-column: 2 / span 1;

            @media (max-width: 900px) {
                grid-row: span 1;
                grid-column: span 2;
            }
        }

        &:nth-child(3) {
            grid-row: span 1;
            grid-column: 2 / span 1;

            @media (max-width: 900px) {
                grid-row: span 1;
                grid-column: span 2;
            }
        }

        &:nth-child(4) {
            grid-row: span 1;
            grid-column: 1 / span 1;

            @media (max-width: 900px) {
                grid-row: span 1;
                grid-column: span 2;
            }
        }

        &:nth-child(5) {
            grid-row: span 1;
            grid-column: 2 / span 1;

            @media (max-width: 900px) {
                grid-row: span 1;
                grid-column: span 2;
            }
        }

        &:nth-child(6) {
            grid-row: span 1;
            grid-column: 1 / span 1;

            @media (max-width: 900px) {
                grid-row: span 1;
                grid-column: span 2;
            }
        }

        &:nth-child(7) {
            grid-row: span 1;
            grid-column: 1 / span 1;

            @media (max-width: 900px) {
                grid-row: span 1;
                grid-column: span 2;
            }
        }

        &:nth-child(8) {
            grid-row: span 2;
            grid-column: 2 / span 1;

            @media (max-width: 900px) {
                grid-row: span 1;
                grid-column: span 2;
            }
        }
    }
`;

export const ProjectDetail = styled.div`
    display: grid;
    grid-auto-rows: 300px;
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 500px) {
        grid-auto-rows: 350px;
    }

    & > * {
        break-inside: avoid;
        page-break-inside: avoid;
        -webkit-column-break-inside: avoid;
        -moz-column-break-inside: avoid;

        &:nth-child(1) {
            grid-row: span 1;
            grid-column: 2 / span 1;
            order: 2;

            @media (max-width: 900px) {
                grid-column: 1 / span 2;
                order: 1;
                text-align: left;
            }
        }

        &:nth-child(2) {
            grid-row: span 1;
            grid-column: 1 / span 1;
            order: 1;

            @media (max-width: 900px) {
                grid-column: 1 / span 2;
                order: 2;
                margin-top: -10%;
            }
        }
`;
