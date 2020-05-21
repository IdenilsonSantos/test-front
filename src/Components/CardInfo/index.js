import React from 'react';

import { CardDetails } from '../../globalStyles';
import { Details, Title, Value } from './styles';
import { connect } from 'react-redux';

import formatMoney from '../../utils/formatMoney'

function CardInfo({ data, user }) {

    return (
        <CardDetails>
            <Details>
                <Title>Produtos</Title>
                <Value>{formatMoney(data.subTotal)}</Value>
            </Details>
            <Details>
                <Title>Frete</Title>
                <Value>{formatMoney(data.shippingTotal)}</Value>
            </Details>
            <Details className="special">
                <Title>Desconto</Title>
                <Value>- {formatMoney(data.discount)}</Value>
            </Details>
            <Details className="total">
                <Title>total</Title>
                <Value>{formatMoney(data.total)}</Value>
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
