import React from 'react';
import styled from 'styled-components';

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 20px;
    padding: 10px 40px 20px;
    margin: 20px;
`;

export const ContactColumn = styled.div`
    display: flex;
    
    p {
        padding: 0 5px;
    }
`;
