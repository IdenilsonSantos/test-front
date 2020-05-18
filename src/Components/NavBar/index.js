import React from 'react';
import { Steps, Container, StepsItem } from './styles';

function NavBar() {
    return (
        <Steps>
            <Container>
                <StepsItem className="active">Sacola</StepsItem>
                <StepsItem>Pagamento</StepsItem>
                <StepsItem>Confirmação</StepsItem>
            </Container>
        </Steps>
    )
}

export default NavBar;
