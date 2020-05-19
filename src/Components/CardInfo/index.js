import React from 'react';

import { CardDetails } from '../../globalStyles';
import { Details, Title, Value } from './styles';
import { connect } from 'react-redux';

function CardInfo({ data }) {
    console.log(data)
    return (
        <CardDetails>
            <Details>
                <Title>Produtos</Title>
                <Value>R$ {data.subTotal}</Value>
            </Details>
            <Details>
                <Title>Frete</Title>
                <Value>R$ {data.shippingTotal}</Value>
            </Details>
            <Details className="special">
                <Title>Desconto</Title>
                <Value>- R$ {data.discount}</Value>
            </Details>
            <Details className="total">
                <Title>total</Title>
                <Value>R$ {data.total}</Value>
            </Details>
        </CardDetails>
    )
}

const mapStateTopProps = state => {
    return {
        data: state.data.data
    }
}

export default connect(mapStateTopProps, null)(CardInfo);
