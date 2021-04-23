import styled from 'styled-components';
import { Col, Row, Button, InputGroup } from 'reactstrap';

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
const thead = styled.thead`
    background-color: #333;
    color: #fff;
    & tr th {
        border-top: #333;
    }
`;
const th = styled.th`
    width: ${(props) => props.width};
    color: ${(props) => props.color};
    text-align: ${(props) => props.align};
    font-weight: ${(props) => props.weight};
    font-size: ${(props) => props.size};
`;
const td = styled.th`
    width: ${(props) => props.width};
    color: ${(props) => props.color};
    text-align: ${(props) => props.align};
`;
const bottomline = styled(Col)`
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
const inputGroup = styled(InputGroup)`
    padding: 10px 5px;
    margin-bottom: 40px;
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

// Mobile device CSS

const Mdevice = styled.div`
    display: none;
    padding: 0 10px;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        display: block;
    }
    @media only screen and (max-width: 767px) {
        display: block;
    }
`;
const Ddevice = styled.div`
    display: block;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;
const listwrap = styled.div`
    color: gray;
    font-size: small;
    font-weight: lighter;

    & span {
        font-weight: bold;
    }
`;

export { bottomline, thead, th, td, topborder, button, inputGroup, warp, listwrap, Mdevice, Ddevice, Img };
