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


export { GlobalStyle, Container, TitleSection, Card, CardDetails };