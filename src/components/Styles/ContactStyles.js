import React from 'react';
import styled from 'styled-components';

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 20px;
    padding: 10px 40px 20px;
    margin: 20px;
`;

export const InfoColumn = styled.div`
    display: flex;
    
    p {
        padding: 0 5px;
    }
`;
