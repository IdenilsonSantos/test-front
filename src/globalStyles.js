import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px 'Roboto', 'Helvetica Neue', sans-serif;
        background: #EEE;
        -webkit-font-smoothing: antialiased;
        height: 100vh;
    }

    a {
        text-decoration: none;
    }
`;

const Container = styled.div`
        height: 100vh;
        margin: 10px 0;
        padding: 0 20px;  
`;

const TitleSection = styled.h4`
    color: #999;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
`;

const Card = styled.div`
    align-content: center;
    display: flex;
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px 0px 5px rgba(0,0,29,0.22);
    padding: 0 15px;
    margin-bottom: 10px;
`;

const CardDetails = styled.div`
    align-content: center;
    display: flex;
    border: 1px solid #CCC;
    border-radius: 3px;
    flex-direction: column;
    height: auto;
    margin: 20px 0;
    padding: 15px;
    width: 100%;
`;

const HeaderConfirmation = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    text-align: center;
    flex-direction: column;
    margin: 20px 0;
    color: #FF7800;
`;

const IconSuccess = styled.span`
    width: 40px;
    height: 40px;
    border: 3px solid #FF7800;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    margin-bottom: 15px;
`;

const MessageConfirmation = styled.h4``;



export { GlobalStyle, Container, TitleSection, Card, CardDetails, HeaderConfirmation, IconSuccess, MessageConfirmation };