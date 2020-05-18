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
    justify-content: space-between;
    padding: 0 20px;
`;

const StepsItem = styled.h4`
    color: #CCC;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;

    &.active {
        color: #FF7800
    }
`;

export { Steps, Container, StepsItem };