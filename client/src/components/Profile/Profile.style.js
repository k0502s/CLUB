import styled from 'styled-components';
import { Card, Form, FormGroup, Label, Input, Button, NavLink, Col, CardTitle, CardBody } from 'reactstrap';

const label = styled(Label)`
    margin-top: 15px;
    font-size: larger;
   & span {
       color: gray;
   }
`;
const card = styled(Card)`
    margin-top: 50px;
    border-radius: 20px;
`;
const cardbody = styled(CardBody)`
    padding: 0 50px 10px 50px;
`;
const button = styled(Button)`
    margin: 0 auto;
    color: white;
    border: 1px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    display:${(props) => props.display};;
    justify-content: ${(props) => props.justify};
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;
const title = styled.div`
    padding: 20px 0 15px 0;
    text-align: center;
    font-size: 50px;
`;

export { card, cardbody, title, button, label };
