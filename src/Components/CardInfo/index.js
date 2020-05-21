import React from 'react';

import { CardDetails, Details, Title, Value } from './styles';
import { connect } from 'react-redux';

import formatMoney from '../../utils/formatMoney'

function CardInfo({ data, user }) {

    return (
        <CardDetails>
            <Details>
                <Title>Produtos</Title>
                <Value>{data.subTotal ? formatMoney(data.subTotal) : formatMoney(0)}</Value>
            </Details>
            <Details>
                <Title>Frete</Title>
                <Value>{data.shippingTotal ? formatMoney(data.shippingTotal) : formatMoney(0)}</Value>
            </Details>
            <Details className="special">
                <Title>Desconto</Title>
                <Value>- {data.discount ? formatMoney(data.discount) : formatMoney(0)}</Value>
            </Details>
            <Details className="total">
                <Title>total</Title>
                <Value>{data.total ? formatMoney(data.total) : formatMoney(0)}</Value>
            </Details>
        </CardDetails>
    )
}

const mapStateTopProps = state => {
    return {
        data: state.data.data,
        user: state.user.user
    }
}

export default connect(mapStateTopProps, null)(CardInfo);
