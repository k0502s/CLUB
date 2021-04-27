import styled from 'styled-components';
import { Col, Button, Card } from 'reactstrap';

const AddCard = styled(Card)`
    border-radius: 25px;
    margin-bottom: 0px;
    margin-top: 30px;
`;
const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const AddBtn = styled(Button)`
    background-color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    color: #fff;
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;
const ProfileWarp = styled(Col)`
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

export { AddCard, ProfileWarp, AddBtn, BtnWrap };
