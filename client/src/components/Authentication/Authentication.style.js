import styled from 'styled-components';
import { Button, Label, Input, Form, CardTitle, CardSubtitle } from 'reactstrap';

const label = styled(Label)`
    margin-top: 0.4rem;
    margin-left: 2rem;
    width: ${(props) => props.width};
`;
const Rlabel = styled(Label)`
    margin-top: 1rem;
`;

const input = styled(Input)`
    width: 80%;
    margin-left: 2rem;
`;

const Rinput = styled(Input)`
    margin-top: 30px;
    margin-bottom: 30px;
`;
const button = styled(Button)`
    width: 85%;
    margin: 0 auto;
    background-color: #333;
    border-radius: 50px;
    border: 1px;
    margin-top: ${(props) => props.margin};

    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;

const form = styled(Form)`
    margin-top: 6px;
`;
const cardtitle = styled(CardTitle)`
    text-align: center;
`;
const cardsubtitle = styled(CardSubtitle)`
    text-align: center;
    text-decoration: underline;
    text-decoration-thickness: 2.22px;
    margin-bottom: 15px;
`;

export { label, Rlabel, input, Rinput, button, form, cardtitle, cardsubtitle };
