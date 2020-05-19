import styled from "styled-components";

const Products = styled.div`
`;

const ProductItem = styled.div`
    align-content: center;
    border-radius: 3px;
    border: 1px solid #EEE;
    display: flex;
    justify-content: center;
    padding: 15px; 
    margin: 15px 0;
`;

const ProductImage = styled.img`
    width: 70px;
    height: 100%;
    margin-right: 10px;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductDescription = styled.p`
    font-size: 13px;
`;
const ProductPrice = styled.h2`
    text-align: right;
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




export { Products, ProductItem, ProductImage, ProductInfo, ProductDescription, ProductPrice, ActionButton };