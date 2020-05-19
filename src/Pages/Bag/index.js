import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, TitleSection, Card } from '../../globalStyles';
import { Products, ProductItem, ProductImage, ProductInfo, ProductDescription, ProductPrice, ActionButton } from './styles';
import CardInfo from '../../Components/CardInfo';


function Page() {
    const [results, setResults] = useState([])

    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            await axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
                .then(res => {
                    const response = res.data;
                    setResults([response]);
                }).catch(err => {
                    console.log(err)
                })
        }
        fetchData();
    }, []);

    function handleStep() {
        history.push('/payment');
    }

    return (
        <Container>
            <TitleSection>PRODUTOS</TitleSection>
            <Card>
                <Products>
                    {results.map(item => (
                        item.items.map(i => (
                            <ProductItem>
                                {i.product.imageObjects.map(image => (
                                    <ProductImage src={image.thumbnail} />
                                ))}
                                <ProductInfo>
                                    <ProductDescription>{i.product.name}</ProductDescription>
                                    <ProductPrice>R$ {i.product.priceSpecification.price}</ProductPrice>
                                </ProductInfo>
                            </ProductItem>
                        ))
                    ))}
                </Products>
            </Card>
            <CardInfo results={results} />
            <ActionButton onClick={() => handleStep()}>seguir para o pagamento</ActionButton>
        </Container>
    )
}

export default Page;