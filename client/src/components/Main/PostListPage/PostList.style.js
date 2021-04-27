import styled from 'styled-components';
import { Col, Row, Button, InputGroup } from 'reactstrap';



// Post List CSS

const Img = styled.img`
    width: 300px;
    margin: 30px auto;
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        display: none;
    }
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;
const Thead = styled.thead`
    background-color: #333;
    color: #fff;
    & tr th {
        border-top: #333;
    }
`;
const Th = styled.th`
    width: ${(props) => props.width};
    color: ${(props) => props.color};
    text-align: ${(props) => props.align};
    font-weight: ${(props) => props.weight};
    font-size: ${(props) => props.size};
`;
const Td = styled.th`
    width: ${(props) => props.width};
    color: ${(props) => props.color};
    text-align: ${(props) => props.align};
`;
const BottomLine = styled(Col)`
    margin: 120px 0 30px 0;
    border-bottom: 3px solid lightslategray;
`;
const Topborder = styled(Row)`
    padding: 20px;
    margin-bottom: 15px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    border: 1px;
    border-bottom: 10px solid #1c685e;
    background-color: #333;
    color: #fff;
    @media only screen and (max-width: 767px) {
        margin: 20px 5px 15px 5px;
    }
`;
const PostInputGroup = styled(InputGroup)`
    padding: 10px 5px;
    margin-bottom: 40px;
    @media only screen and (max-width: 767px) {
        padding: 10px 15px;
    }
`;
const PostWrap = styled(Row)`
    @media only screen and (max-width: 767px) {
        & div.col {
            padding: 0 10px 0 30px;
        }
    }
`;
const Btn = styled(Button)`
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
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        display: block;
    }
    @media only screen and (max-width: 767px) {
        display: block;
    }
`;
const Ddevice = styled.div`
    display: block;
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        display: none;
    }
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;
const ListWrap = styled.div`
    color: gray;
    font-size: small;
    font-weight: lighter;

    & span {
        font-weight: bold;
    }
`;

export { BottomLine, Thead, Th, Td, Topborder, Btn, PostInputGroup, PostWrap, ListWrap, Mdevice, Ddevice, Img };
