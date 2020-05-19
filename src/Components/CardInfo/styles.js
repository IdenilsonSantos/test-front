import styled from "styled-components";

const Title = styled.div`
    text-align: end;
`;

const Value = styled.div`
    text-align: end;
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

export { Title, Value, Details }