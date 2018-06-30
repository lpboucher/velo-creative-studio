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

export const FormLabel = styled.label`
    color: grey;
    width: 100%;
    margin-top: 10px;
`;

export const FormInput = styled.input`
    border: 2px solid #d3bdaa;
    width: 75%;
    margin-bottom: 10px;
`;

export const FormMessage = styled.textarea`
    border: 2px solid #d3bdaa;
    width: 75%;
    margin-bottom: 10px;
`;

export const FormButton = styled.button`
    width: 30%;
    background-color: black;
    color: white;
    text-transform: uppercase;
    margin-top: 40px;
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 40px;

    h1 {
        text-transform: uppercase;
        font-size: 28px;
        font-weight: bold;
    }

    & > * {
        padding: 10px;
    }
`;
