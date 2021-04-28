import styled from 'styled-components';
import { Card, Label, Button, Alert, Col, CardBody } from 'reactstrap';

const ProfileLabel = styled(Label)`
    margin-top: 15px;
    font-size: larger;
    & span {
        color: gray;
    }
`;
const ProfileAlert = styled(Alert)`
    color: #fff;
    background-color: #333;
`;
const ProfileCard = styled(Card)`
    margin-top: 80px;
    border-radius: 20px;
`;
const ProfileCardbody = styled(CardBody)`
    padding: 0 50px 10px 50px;
`;
const ProfileBtn = styled(Button)`
    margin: 0 auto;
    color: white;
    border: 1px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justify};
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;
const Title = styled.div`
    padding: 20px 0 15px 0;
    text-align: center;
    font-size: 50px;
`;

export { ProfileCard, ProfileCardbody, Title, ProfileBtn, ProfileLabel, ProfileAlert };
