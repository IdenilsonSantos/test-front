import styled from "styled-components";

const Steps = styled.section`
    background: #fff;
    box-shadow: 0px 0px 5px rgba(0,0,29,0.22);
    height: 72px;
`;

const Container = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0 20px;
    justify-content: space-between;

    @media screen and (min-width: 840px){
        justify-content: flex-end;
    }
`;

const StepsItem = styled.h4`
    color: #CCC;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;

    margin: 0 10px;

    &.active {
        color: #FF7800
    }
`;

export { Steps, Container, StepsItem };