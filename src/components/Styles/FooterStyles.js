import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
    border-top: 0.5px solid;
    padding: 20px 0px 0px;
    margin: 20px 40px 0;
`;

export const FooterLink = styled(Link)`
color: #4a4a4a;
text-decoration: none;
margin-bottom: 20px;
`;

export const FooterColumn = styled.div`
    display: flex;
    
    & > ${FooterLink} {
        padding: 0 0 0 5px;
    }

    & > ${FooterLink}:after {
        content: "  |";
    }

    & > ${FooterLink}:last-child:after {
        content: "";
    }
`;
