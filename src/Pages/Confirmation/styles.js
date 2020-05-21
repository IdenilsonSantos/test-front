import styled from "styled-components";

const BuyerInfo = styled.p`
    font-size:14px;
    font-weight: bold;
    width: 100%;
    text-transform: uppercase;
    margin: 10px 0;
`;

const ContentGeneric = styled.div`
    @media screen and (min-width: 840px){
        width: 100%
    }

`;



export { ContentGeneric, BuyerInfo };