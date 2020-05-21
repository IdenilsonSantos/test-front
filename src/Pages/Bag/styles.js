import styled from "styled-components";



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


export { ActionButton };