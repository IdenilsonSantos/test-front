import React from 'react';

import { connect } from 'react-redux';
import { MdCheck } from 'react-icons/md';

import { Container, TitleSection, Card, HeaderConfirmation, IconSuccess, MessageConfirmation, SpinnerContent, Spinner } from '../../globalStyles';
import { BuyerInfo } from './styles';
import CardInfo from '../../Components/CardInfo';
import Products from '../../Components/Products';

function ConfirmationPage({ data, user }) {

    return (
        <Container>
            <HeaderConfirmation>
                <IconSuccess>
                    <MdCheck />
                </IconSuccess>
                <MessageConfirmation>compra feita com sucesso</MessageConfirmation>
            </HeaderConfirmation>
            <TitleSection>Pagamento</TitleSection>
            <Card>
                <BuyerInfo>
                    <p>{`${user.card.substring(14, 0).replace(/[0-9]/g, "*")}${user.card.substr(-5)}`}</p>
                    <p>{user.name}</p>
                    <p>{user.expiry}</p>
                </BuyerInfo>
            </Card>
            <TitleSection>Cartão de crédito</TitleSection>
            <Card>
                {data.length === 0 ? <SpinnerContent><Spinner /></SpinnerContent> : <Products />}
            </Card>
            <CardInfo />
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        data: state.data.data
    }
}

export default connect(mapStateToProps, null)(ConfirmationPage);
