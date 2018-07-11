import React from 'react';
import styled from 'styled-components';

export const PackageWrapper = styled.div`
    padding: 40px;
    text-align: center;
`;

export const PackageTitle = styled.h1`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 26px;
    padding: 20px;
`;

export const PackageDesc = styled.p`
    font-weight: 300;
    color: #8f8e8f;
    max-width: 80%;
    padding: 20px;
    margin: auto;
`;

export const PackageSubTitle = styled.h2`
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 20px;
    padding: 20px;
    margin-bottom: 0;
`;

export const PackageList = PackageDesc.extend`
    list-style: none;
    padding-top: 0;
`;

export const PackageAdd = PackageDesc.extend`
`;
