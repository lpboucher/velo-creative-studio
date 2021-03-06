import styled from 'styled-components';

import { TwoColumn } from '../Styles/MainStyles';

export const ContactWrapper = styled.div`
    display: flex;

    & > ${TwoColumn}:first-child {
        padding: 40px 40px 0;
    }
`;

export const ContactHeader = styled.div`
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    font-size: 14px;
    font-weight: 300;
    padding: 20px 0;

    & + p {
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 0;
    }
`;

export const InfoColumn = styled.div`
    display: flex;
    padding: 0 20px 0 0;
    
    & > p {
        margin-bottom: 0;
    }
`;

export const FormLabel = styled.label`
    color: grey;
    width: 100%;
    margin-top: 10px;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 14px;
`;

export const FormInput = styled.input`
    border: 2px solid #f2f2f0;
    width: 100%;
    margin-bottom: 10px;
`;

export const FormMessage = styled.textarea`
    border: 2px solid #f2f2f0;
    width: 100%;
    margin-bottom: 10px;
`;

export const FormButton = styled.button`
    width: 40%;
    background-color: #c4bbab;
    color: white;
    text-transform: uppercase;
    margin-top: 40px;
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 0;

    & > * {
        padding: 10px 0;
    }
`;
