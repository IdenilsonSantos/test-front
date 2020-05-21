import styled, { createGlobalStyle, keyframes } from "styled-components";

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
    justify-content: center;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0px 0px 5px rgba(0,0,29,0.22);
    padding: 0 15px;
    margin-bottom: 10px;
`;

const CardContent = styled.div`
    @media screen and (min-width: 840px){
        display: flex;
    }
`;

const InfoContent = styled.div`
    @media screen and (min-width: 840px){
        width: 100%;
        display: flex;
        flex-direction: column;
    }
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

const SpinnerContent = styled.div`
    padding: 30px;
`;

const spinFrame = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #FF7800;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spinFrame} 1s linear infinite;
`;

const Form = styled.form`
    padding: 10px;

    input {
        border: 1px solid #E7E7E7;
    border-radius: 3px;
    width: 100%;
    height: 45px;
    margin-bottom: 10px;
    margin-top: 5px;
    font-size: 14px;
    padding: 10px;
    color: #ccc;
    }

    @media screen and (max-width: 740px){
        width: 100%;
    }
    @media screen and (min-width: 840px){
        width: 100%;
    }

`;

const LabelInput = styled.label`
    font-size: 12px;
    color:#CCC;
    font-weight: bold;
`;

const InputSection = styled.div`
@media screen and (min-width: 740px){
        width: 100%;
    }
    @media screen and (min-width: 840px){
        width: 100%;
    }
`;

const Col = styled.div`
    display: flex;
    width: 49%;
    flex-direction: column;
`;

const DivideColumns = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ActionButton = styled.button`
    background-color: #FF6C00;
    border: none;
    border-radius: 3px;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25);
    color: #FFF;
    cursor: pointer;
    font-weight: bold;
    height: 60px;
    width: 100%;
    text-transform: uppercase;
    transition: 0.5s all;

    &:hover {
        background-color: #D45A00;
    }

    @media screen and (min-width: 840px){
        margin: 10px
    }
`;




export { GlobalStyle, Container, TitleSection, Card, CardContent, ActionButton, InfoContent, HeaderConfirmation, IconSuccess, MessageConfirmation, Spinner, SpinnerContent, Form, InputSection, LabelInput, Col, DivideColumns };