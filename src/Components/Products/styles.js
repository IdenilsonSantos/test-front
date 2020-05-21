import styled from "styled-components";

const Products = styled.div`
    width: 100%;
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
    width: 100%;
    text-align: end;
    flex-direction: column;
`;

const ProductDescription = styled.p`
    font-size: 13px;
`;
const ProductPrice = styled.h2`
    text-align: right;
`;

export { Products, ProductItem, ProductImage, ProductInfo, ProductDescription, ProductPrice }