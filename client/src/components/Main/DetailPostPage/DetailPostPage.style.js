import styled from 'styled-components';
import { Row, Col, Button, Container } from 'reactstrap';
import { BsTextLeft } from 'react-icons/bs';

const listIcon = styled(BsTextLeft)`
    margin-right: 7px;
`;

const topborder = styled(Row)`
    padding: 11px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    border: 1px;
    border-bottom: 4px solid #1c685e;
    background-color: #333;
    color: #fff;
`;
const postWrap = styled(Col)`
    margin-bottom: 30px;
    border-left: 4px solid #333;
    border-right: 4px solid #333;
`;
const buttonWrap = styled(Row)`
    display: flex;
    justify-content: flex-end;
    margin: 10px 10px 20px 0;
`;
const commentWrap = styled(Container)`
    border-bottom: 10px solid #333;
    & p {
        font-weight: bold;
        & span {
            color: #f05232;
        }
    }
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

export { topborder, button, listIcon, buttonWrap, postWrap, commentWrap };
