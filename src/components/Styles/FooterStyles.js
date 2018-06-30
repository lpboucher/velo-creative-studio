import React from 'react';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
    border-top: 0.5px solid;
    padding: 20px 0px 0px;
    margin: 0 40px;
`;

export const FooterColumn = styled.div`
    display: flex;
    
    p {
        padding: 0 5px;
    }
`;
