import styled from 'styled-components';
import { Col, Button, Card } from 'reactstrap';

const card = styled(Card)`
    border-radius: 25px;
    margin-bottom: 0px;
    margin-top: 30px;
`;
const buttomWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const button = styled(Button)`
    background-color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    color: #fff;
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;
const profileWarp = styled(Col)`
    display: flex;
    width: 350px;
    height: 240px;
    overflow: scroll;

    & img {
        min-width: 300px;
        width: 300px;
        height: 240px;
    }
`;

export { card, profileWarp, button, buttomWrap };
