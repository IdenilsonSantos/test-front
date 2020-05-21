import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { loadResult } from '../../_redux/actions/addResults';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, TitleSection, Card, CardContent, InfoContent, Spinner, SpinnerContent, ActionButton } from '../../globalStyles';
import CardInfo from '../../Components/CardInfo';
import Products from '../../Components/Products';

function Page({ data, dispatch }) {

    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            await axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
                .then(res => {
                    const response = res.data;
                    dispatch(loadResult(response));
                }).catch(err => {
                    console.log(err)
                })
        }
        fetchData();
    });

    async function handleStep() {
        history.push('/payment');
    }

    let enableButton = data.length !== 0
    let style;
    if (!enableButton) {
        style = { opacity: 0.5 }
    }

    return (
        <Container>
            <TitleSection>PRODUTOS</TitleSection>
            <CardContent>
                <Card>
                    {data.length === 0 ? <SpinnerContent><Spinner /></SpinnerContent> : <Products />}
                </Card>
                <InfoContent>
                    <CardInfo />
                    <ActionButton style={style} disabled={!enableButton} onClick={() => handleStep()}>seguir para o pagamento</ActionButton>
                </InfoContent>
            </CardContent>
        </Container>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

const mapStateToProps = state => {
    return {
        data: state.data.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
