import styled from 'styled-components';

import { Intro, TwoColumn } from './MainStyles';

export const AddServiceIntro = Intro.extend`
`;

export const AddServiceWrapper = styled.div`
    display: flex;

    & > ${TwoColumn}:first-child {
        background-color: #f2f2f0;
    }
`;

export const AddServiceContainer = styled.div`
    padding: 40px;
    height: 100%;

    & > * {
        font-weight: 300;
    }

    & > h3 {
        font-size: 20px;
        line-height: 1.5;
    }

    & > div > h5 {
        font-weight: 500;
        margin-top: 60px;
    }

    & > div > p {
        font-size: 14px;
        margin-bottom: 10px;
    }
`;

export const AddServiceMasonry = styled.div`
    padding: 0 20px;
    column-count: 2;
    column-gap: 0;
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    
    & > * {
        break-inside: avoid;
        page-break-inside: avoid;
        -webkit-column-break-inside: avoid;
        -moz-column-break-inside: avoid;
        position: relative;

        
        height: 100%;
        grid-row: span 1;
        grid-column: span 1;

            @media (max-width: 900px) {
                grid-row: span 1;
                grid-column: span 2;
            }
    }
`;
