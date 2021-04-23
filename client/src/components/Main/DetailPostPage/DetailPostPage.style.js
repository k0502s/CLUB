import styled from 'styled-components';
import { Row, Col, Button, Container } from 'reactstrap';
import { BsTextLeft } from 'react-icons/bs';

const listIcon = styled(BsTextLeft)`
    margin-right: 7px;
`;

const Img = styled.img`
    width: 300px;
    margin: 30px auto;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }
    @media only screen and (max-width: 767px) {
        display: none;
    }
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
    @media only screen and (max-width: 767px) {
        margin: 0 0 15px 0;
    }
`;
const infoWrap = styled(Col)`

    @media only screen and (max-width: 767px) {
        margin: 0 7px 15px 7px;
    }
`;
const postWrap = styled(Col)`
    margin-bottom: 30px;
    border-left: 4px solid #333;
    border-right: 4px solid #333;
    @media only screen and (max-width: 767px) {
        margin: 0 7px 15px 7px;
    }
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
    @media only screen and (max-width: 767px) {
        margin: 0 7px 15px 7px;
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

export { topborder, button, listIcon, buttonWrap, postWrap, commentWrap, infoWrap, Img };
