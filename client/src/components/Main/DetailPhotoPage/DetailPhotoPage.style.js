import styled from 'styled-components';
import { Row, Col, Button, Table } from 'reactstrap';
import { BsTextLeft } from 'react-icons/bs';

// photo detail main page CSS

const listIcon = styled(BsTextLeft)`
    margin-right: 7px;
`;
const col = styled(Col)`
    margin-top: 7px;
`;
const topborder = styled(Row)`
    padding: 20px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    border: 1px;
    border-bottom: 10px solid #1c685e;
    background-color: #333;
    color: #fff;
`;
const buttonWarp = styled(Row)`
    display: flex;
    justify-content: flex-end;
    margin: 10px 10px 40px 0;
`;
const imaageWrap = styled(Row)`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;
const infoWrap = styled(Row)`
    display: flex;
    justify-content: center;
    margin: 30px 40px;
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

//like dislike Icon CSS

const likebox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    & p:nth-child(1) {
        font-size: 40px;
        padding: 10px 30px;
        border: 1px;
        border-top: 8px solid #1c685e;
        border-bottom: 8px solid #1c685e;
        border-left: 8px solid #1c685e;
        background-color: #333;
        color: #fff;
        border-radius: 12px 0 0 12px;
        & span {
            color: #fff;
            padding: 20px;
        }
    }
    & p:nth-child(2) {
        font-size: 40px;
        padding: 10px 30px;
        border: 1px;
        border-top: 8px solid #1c685e;
        border-bottom: 8px solid #1c685e;
        border-right: 8px solid #1c685e;
        background-color: #333;
        color: #fff;
        border-radius: 0 12px 12px 0;
        & span {
            color: #fff;
            padding: 20px;
        }
    }
`;

// Photo Info list CSS

const table = styled(Table)`
    background-color: #333;
    color: #fff;
    & tr th {
        border-top: #333;
    }

    & th {
        width: 30%;
    }
`;

export { col, topborder, listIcon, buttonWarp, button, likebox, table, imaageWrap, infoWrap };
