import React from 'react';

import { CardDetails } from '../../globalStyles';
import { Details, Title, Value } from './styles';

function CardInfo() {
    return (
        <CardDetails>
            <Details>
                <Title>Produtos</Title>
                <Value>R$ 624,80</Value>
            </Details>
            <Details>
                <Title>Frete</Title>
                <Value>R$ 5,30</Value>
            </Details>
            <Details className="special">
                <Title>Desconto</Title>
                <Value>- R$ 30,00</Value>
            </Details>
            <Details className="total">
                <Title>total</Title>
                <Value>R$ 600,10</Value>
            </Details>
        </CardDetails>
    )
}

export default CardInfo;
