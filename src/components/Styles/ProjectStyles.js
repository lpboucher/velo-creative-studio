import React from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

import { Title } from './MainStyles';

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
        font-family: georgia;
        font-size: 14px;
        padding-right: 40px;
    }
`;

export const ProjectMasonry = styled.div`
    padding: 40px;
    column-count: 2;
    column-gap: 0;
    display: grid;
    grid-auto-rows: 300px;
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);

    & > * {
        break-inside: avoid;
        page-break-inside: avoid;
        -webkit-column-break-inside: avoid;
        -moz-column-break-inside: avoid;

        &:hover .gatsby-image-outer-wrapper {
            opacity: 0.5;
        }

        &:nth-child(1) {
            grid-row: span 2;
            grid-column: 1 / span 1;
        }

        &:nth-child(2) {
            grid-row: span 1;
            grid-column: 2 / span 1;
        }

        &:nth-child(3) {
            grid-row: span 1;
            grid-column: 2 / span 1;
        }

        &:nth-child(4) {
            grid-row: span 1;
            grid-column: 1 / span 1;
        }

        &:nth-child(5) {
            grid-row: span 1;
            grid-column: 2 / span 1;
        }

        &:nth-child(6) {
            grid-row: span 1;
            grid-column: 1 / span 1;
        }

        &:nth-child(8) {
            grid-row: span 1;
            grid-column: 1 / span 1;
        }

        &:nth-child(7) {
            grid-row: span 2;
            grid-column: 2 / span 1;
        }
    }
`;

export const ProjectDetail = styled.div`
    padding: 40px;
    column-count: 2;
    column-gap: 0;
    display: grid;
    grid-auto-rows: 300px;
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);

    & > * {
        break-inside: avoid;
        page-break-inside: avoid;
        -webkit-column-break-inside: avoid;
        -moz-column-break-inside: avoid;

        &:nth-child(1) {
            grid-row: span 1;
            grid-column: 1 / span 1;
        }

        &:nth-child(2) {
            grid-row: span 1;
            grid-column: 2 / span 1;
        }

        &:nth-child(3) {
            grid-row: span 1;
            grid-column: 2 / span 1;
        }

        &:nth-child(4) {
            grid-row: span 1;
            grid-column: 1 / span 1;
        }

        &:nth-child(5) {
            grid-row: span 1;
            grid-column: 2 / span 1;
        }

        &:nth-child(6) {
            grid-row: span 1;
            grid-column: 1 / span 1;
        }

        &:nth-child(8) {
            grid-row: span 1;
            grid-column: 1 / span 1;
        }

        &:nth-child(7) {
            grid-row: span 2;
            grid-column: 2 / span 1;
        }
    }
`;
