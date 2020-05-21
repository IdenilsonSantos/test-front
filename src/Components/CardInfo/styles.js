import styled from "styled-components";

const Title = styled.div`
    text-align: end;
`;

const Value = styled.div`
    text-align: end;
`;

const CardDetails = styled.div`
    align-content: center;
    display: flex;
    border: 1px solid #CCC;
    border-radius: 3px;
    flex-direction: column;
    height: auto;
    margin: 20px 0;
    padding: 15px;
    width: 100%;

    @media screen and (min-width: 840px){
        height: 160px;
        margin: 0 0 15px 10px;
    }
`;

const Details = styled.div`
    text-transform: uppercase;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    &.special {
        color: #FF7800
    }

    &.total {
        font-weight: bold;
        margin-top: 15px;
    }
`;

export { Title, Value, CardDetails, Details }