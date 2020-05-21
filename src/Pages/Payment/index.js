import React, { useState } from 'react';

import { connect } from 'react-redux';
import { dataUser } from '../../_redux/actions/addResults';

import InputMask from "react-input-mask";
import { useHistory } from 'react-router-dom';

import { Container, TitleSection, Card } from '../../globalStyles';
import { Form, LabelInput, InputSection, DivideColumns, Col, ActionButton } from './styles';
import CardInfo from '../../Components/CardInfo';

function PaymentPage({ dispatch }) {
    const [name, setName] = useState('');
    const [card, setCard] = useState('');
    const [expiry, setExpiry] = useState('');
    const [codCvv, setCodCvv] = useState('');

    const data = { name, card, expiry, codCvv };
    const history = useHistory();

    function handleStep() {
        dispatch(dataUser(data))
        history.push('/confirmation');
    }


    return (
        <Container>
            <TitleSection>Cartão de crédito</TitleSection>
            <Card>
                <Form>
                    <InputSection>
                        <LabelInput>Número do Cartão: </LabelInput>
                        <InputMask mask="9999.9999.9999.9999" onChange={(e) => setCard(e.target.value)} value={card} />
                    </InputSection>
                    <InputSection>
                        <LabelInput>Nome do Titular: </LabelInput>
                        <InputMask onChange={(e) => setName(e.target.value)} value={name} />
                    </InputSection>
                    <DivideColumns>
                        <Col>
                            <LabelInput>Validade (mês/ano): </LabelInput>
                            <InputMask mask="99/9999" onChange={(e) => setExpiry(e.target.value)} value={expiry} />
                        </Col>
                        <Col>
                            <LabelInput>CVV: </LabelInput>
                            <InputMask mask="999" onChange={(e) => setCodCvv(e.target.value)} value={codCvv} />
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

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
