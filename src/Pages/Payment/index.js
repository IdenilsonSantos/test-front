import React, { useState } from 'react';

import { connect } from 'react-redux';
import InputMask from "react-input-mask";
import { useHistory } from 'react-router-dom';

import { Container, TitleSection, Card } from '../../globalStyles';
import { Form, LabelInput, DivideColumns, Col, ActionButton } from './styles';
import CardInfo from '../../Components/CardInfo';

function PaymentPage() {
    const [masked, setMasked] = useState({
        name: '',
        card: '',
        expiry: '',
        ccv: ''
    });

    const history = useHistory();

    function handleStep() {
        history.push('/confirmation');
    }
    return (
        <Container>
            <TitleSection>Cartão de crédito</TitleSection>
            <Card>
                <Form>
                    <LabelInput>Número do Cartão: </LabelInput>
                    <InputMask mask="9999-9999-9999-9999" onChange={(e) => setMasked({ card: e.target.value })} value={masked.card} />
                    <LabelInput>Nome do Titular: </LabelInput>
                    <InputMask onChange={(e) => setMasked({ name: e.target.value })} value={masked.name} />
                    <DivideColumns>
                        <Col>
                            <LabelInput>Validade (mês/ano): </LabelInput>
                            <InputMask mask="99/9999" onChange={(e) => setMasked({ expiry: e.target.value })} value={masked.expiry} />
                        </Col>
                        <Col>
                            <LabelInput>CVV: </LabelInput>
                            <InputMask mask="999" onChange={(e) => setMasked({ ccv: e.target.value })} value={masked.ccv} />
                        </Col>
                    </DivideColumns>
                </Form>
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

export default connect(mapStateToProps, null)(PaymentPage);
