import styled from 'styled-components';
import { Col, Row, Card, Input, CardFooter, CardHeader, CardBody, Button, InputGroup, Modal } from 'reactstrap';

const inputGroup = styled(InputGroup)`
    padding: 10px 0;
    @media only screen and (max-width: 767px) {
        padding: 10px 15px;
    }
`;
const warp = styled(Row)`
    @media only screen and (max-width: 767px) {
        & div.col {
            padding: 0 10px 0 30px;
        }
    }
`;
const button = styled(Button)`
    margin-left: ${(props) => props.margin};
    background-color: ${(props) => props.color};
    color: #fff;
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;
const card = styled(Card)`
    margin: 30px 0 30px 0;
    & div.card-img-overlay {
        transition: 0.5s;
    }
    & div.card-img-overlay {
        & p.card-text {
            display: none;
            margin-bottom: 5px;
            color: lightslategray;
        }
    }

    &:hover div.card-img-overlay {
        background-color: rgba(0, 0, 0, 0.5);
        & p.card-text {
            display: block;
        }
    }
`;
const col = styled(Col)`
    margin: 120px 0 30px 0;
    border-bottom: 3px solid lightslategray;
`;

const topborder = styled(Row)`
    padding: 20px;
    margin-bottom: 15px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    border: 1px;
    border-bottom: 10px solid #1c685e;
    background-color: #333;
    color: #fff;
`;

export { inputGroup, button, warp, card, col, topborder };
