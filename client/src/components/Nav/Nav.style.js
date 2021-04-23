import styled from 'styled-components';
import { BsGearFill } from 'react-icons/bs';
import { Navbar, Nav, CardFooter, Card } from 'reactstrap';

const sysytemIcon = styled(BsGearFill)`
    margin: 0 5px 3px 0;
    font-size: 15px;
`;
const cardfooter = styled(CardFooter)`
    color: gray;
    text-align: center;
`;
const navbar = styled(Navbar)`
    margin: 0 60px;
    box-shadow: 0 6px 10px 0 rgb(55, 54, 54);
    border-radius: 10px;
    background-color: #1c685e;
    & .dropdown-menu.dropdown-menu-right.show {
        background-color: #333;
        border-radius: 8%;
        left: -14px;
        & .dropdown-item {
            text-align: center;
            color: white;
            &:hover {
                border: 1px;
                background-color: #fff;
                color: #333;
                border-radius: 8%;
            }
        }
    }
    @media only screen and (max-width: 767px) {
        margin: 0 5px;
    }
`;
const nav = styled(Nav)`
    margin-right: auto;
    margin-left: 40px;

    & li {
        margin-left: 60px;
    }
    @media only screen and (max-width: 767px) {
    }
    @media only screen and (min-width: 768px) and (max-width: 1025px) {
        margin-left: -50px;
    }
`;
const card = styled(Card)`
    box-shadow: 0 6px 10px 0 rgb(55, 54, 54);
    font-size: large;
    border-radius: 12%;
    background-color: #f4fcfb;
    margin-top: 20px;
`;

export { navbar, nav, sysytemIcon, card, cardfooter };
