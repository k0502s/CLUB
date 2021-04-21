import styled from 'styled-components';
import { BsFillPeopleFill, BsCamera, BsMap } from 'react-icons/bs';
import { FaTrophy } from 'react-icons/fa';
import { Navbar, Nav, Button, Label, Input, Form, Col, Card, CardTitle, CardFooter, CardHeader, CardSubtitle } from 'reactstrap';

const col = styled(Col)`
   margin: 0 20px 0 20px;
`;
const card = styled(Card)`
    margin-top: ${(props) => props.margintop};
    margin-bottom: ${(props) => props.marginbottom};
    width: ${(props) => props.width};
    /* border-radius: 3%; */
    background-color: #f4fcfb;
`;
const cardheader = styled(CardHeader)`
    & p {
        margin: 0;
    }
    & p > span {
        font-size: 14px;
        color: gray;
        float: right;
        margin-top: 5px;
    }
    & small {
        display: block;
        color: gray;
    }
`;

const map = styled.div`
    width: 50vw;
    height: 20vw;
`;

const cardfooter = styled(CardFooter)`
    color: gray;
    text-align: center;
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

const td = styled.td`
    width: 50%;
    color: ${(props) => props.color};
    text-align: ${(props) => props.text};
    text-align: ${(props) => props.text};
`;

export { col, card, cardfooter, cardheader, td, helloIcon, photoIcon, trophyIcon, map, mapIcon };
