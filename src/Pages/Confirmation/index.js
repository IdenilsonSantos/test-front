import React, { useState } from 'react';

import { connect } from 'react-redux';
import { MdCheck } from 'react-icons/md';

import { Container, TitleSection, Card, HeaderConfirmation, IconSuccess, MessageConfirmation } from '../../globalStyles';
import { ActionButton, BuyerInfo } from './styles';
import CardInfo from '../../Components/CardInfo';

function ConfirmationPage() {
    const [maked, setMasked] = useState({
        name: '',
        card: '',
        expiry: '',
        ccv: ''
    });

    console.log(maked)
    function handleStep() {
    }
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
                    <p>aaaa</p>
                    <p>aaa</p>
                    <p>aaaa</p>
                </BuyerInfo>p

            </Card>
            <TitleSection>Cartão de crédito</TitleSection>
            <Card>
                <CardInfo />
            </Card>
            <CardInfo />
            <ActionButton onClick={() => handleStep()}>finalizar pedido</ActionButton>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data.data
    }
}

export default connect(mapStateToProps, null)(ConfirmationPage);
