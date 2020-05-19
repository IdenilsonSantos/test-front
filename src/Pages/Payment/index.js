import React from 'react';

import { Container, TitleSection, Card } from '../../globalStyles';
import { Form, LabelInput, Input, DivideColumns, Col, ActionButton } from './styles';
import CardInfo from '../../Components/CardInfo';

function PaymentPage() {

    function handleStep() {
    }
    return (
        <Container>
            <TitleSection>Cartão de crédito</TitleSection>
            <Card>
                <Form>
                    <LabelInput>Número do Cartão: </LabelInput>
                    <Input />
                    <LabelInput>Nome do Titular: </LabelInput>
                    <Input />
                    <DivideColumns>
                        <Col>
                            <LabelInput>Validade (mês/ano): </LabelInput>
                            <Input />
                        </Col>
                        <Col>
                            <LabelInput>CVV: </LabelInput>
                            <Input />
                        </Col>
                    </DivideColumns>
                </Form>
            </Card>
            <CardInfo />
            <ActionButton onClick={() => handleStep()}>finalizar pedido</ActionButton>
        </Container>
    )
}

export default PaymentPage;
