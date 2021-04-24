import styled from 'styled-components';
import { BsFillPeopleFill, BsCamera, BsMap, BsFillCircleFill } from 'react-icons/bs';
import { FaTrophy } from 'react-icons/fa';
import { Col, Card, CardFooter, CardHeader, CardBody } from 'reactstrap';

// Landing Home CSS

const HomeWrap = styled(Col)`
    padding: 0 10px 0 15px;
    margin-top: ${(props) => props.margintop};
    margin-bottom: ${(props) => props.marginbottom};
    display: ${(props) => props.display};
    @media only screen and (max-width: 767px) {
        margin-top: ${(props) => props.Mmargintop};
        margin-bottom: ${(props) => props.Mmarginbottom};
        display: ${(props) => props.Mdisplay};
    }
`;
const card = styled(Card)`
    width: ${(props) => props.width};
    border: 1px;
    border-radius: 0 0 10px 10px;
    background-color: #f4fcfb;
    @media only screen and (max-width: 767px) {
        margin-left: 12px;
        margin-right: 12px;
    }
`;
const cardbody = styled(CardBody)`
    padding: 0;
`;
const cardheader = styled(CardHeader)`
    color: #fff;
    background-color: #333;
    border: 1px;
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
        color: lightgray;
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
const ImgWrap = styled.div`
    .each-slide > div {
        display: flex;
        justify-content: center;
        background-size: cover;
        height: 400px;
        align-items: flex-end;
        & span {
            width: 100%;
            padding: 3px;
            font-size: 20px;
            background: #333;
            text-align: center;
            & div {
                color: #fff;
                & p {
                    margin: 0;
                }
                & small {
                    color: lightgray;
                }
            }
        }
        & span:nth-child(2) {
            display: none;
        }
        @media only screen and (max-width: 767px) {
            height: ${(props) => props.Mheight};
            flex-wrap: wrap;
            align-content: space-between;
            border-bottom: 2px solid #333;
            & span {
                width: 100%;
                padding: 3px;
                font-size: 20px;
                background: #333;
                text-align: center;
                & div {
                    color: #fff;
                    & p {
                        margin: 0;
                    }
                    & small {
                        color: lightgray;
                    }
                }
            }
            & span:nth-child(2) {
            display: block;
        }
        }
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

export { HomeWrap, card, cardbody, cardfooter, cardheader, td, tr, helloIcon, photoIcon, trophyIcon, map, mapIcon, ImgWrap, circleIcon };
