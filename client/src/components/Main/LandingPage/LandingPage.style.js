import styled from 'styled-components';
import { BsFillPeopleFill, BsCamera, BsMap, BsFillCircleFill } from 'react-icons/bs';
import { FaTrophy } from 'react-icons/fa';
import { Col, Card, CardFooter, CardHeader, CardBody } from 'reactstrap';

// Landing Home CSS

const col = styled(Col)`
    padding: 0 10px 0 15px;
`;
const card = styled(Card)`
    margin-top: ${(props) => props.margintop};
    margin-bottom: ${(props) => props.marginbottom};
    width: ${(props) => props.width};
    border: 1px;
    border-radius: 10px;
    background-color: #f4fcfb;
`;
const cardbody = styled(CardBody)`
    padding: 0;
`;
const cardheader = styled(CardHeader)`
    color: #fff;
    background-color: #1c685e;
    & p {
        margin: 0;
    }
    & p > span {
        font-size: 14px;
        color: #eee;
        float: right;
        margin-top: 5px;
    }
    & small {
        display: block;
        color: #333;
    }
`;
const td = styled.td`
    width: ${(props) => props.width};
    color: ${(props) => props.color};
    text-align: ${(props) => props.text};
    font-size: small;
`;
const tr = styled.tr`
    & td {
        padding: 4px 5px 6px 8px;
    }
`;
const wrap = styled.div`
    .each-slide > div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 400px;
    }
`;
const cardfooter = styled(CardFooter)`
    color: gray;
    text-align: center;
`;

const map = styled.div`
    width: 50vw;
    height: 20vw;
`;

// Icon CSS

const circleIcon = styled(BsFillCircleFill)`
    padding: 0;
`;
const helloIcon = styled(BsFillPeopleFill)`
    margin-right: 6px;
    font-size: larger;
`;
const trophyIcon = styled(FaTrophy)`
    margin-right: 6px;
    font-size: larger;
`;
const photoIcon = styled(BsCamera)`
    margin-right: 6px;
    margin-top: 1px;
    font-size: larger;
`;
const mapIcon = styled(BsMap)`
    margin-right: 8px;
    margin-top: 1px;
    font-size: larger;
`;

export { col, card, cardbody, cardfooter, cardheader, td, tr, helloIcon, photoIcon, trophyIcon, map, mapIcon, wrap, circleIcon };
