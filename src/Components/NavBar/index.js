import React from 'react';

import { withRouter } from 'react-router-dom';

import { Steps, Container, StepsItem } from './styles';

function NavBar({ location }) {
    const { pathname } = location;

    return (
        <Steps>
            <Container>
                <StepsItem className={pathname === '/' ? 'active' : ''}>Sacola</StepsItem>
                <StepsItem className={pathname === '/payment' ? 'active' : ''}>Pagamento</StepsItem>
                <StepsItem className={pathname === '/confirmation' ? 'active' : ''}>Confirmação</StepsItem>
            </Container>
        </Steps>
    )
}


export default withRouter(NavBar);
