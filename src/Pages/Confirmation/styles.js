import styled from "styled-components";

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
`;

const LabelInput = styled.label`
    font-size: 12px;
    color:#CCC;
    font-weight: bold;
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
`;

const BuyerInfo = styled.p`
    font-size:14px;
    font-weight: bold;
    width: 100%;
    text-transform: uppercase;
    margin: 10px 0;
`;



export { Form, LabelInput, DivideColumns, Col, ActionButton, BuyerInfo };