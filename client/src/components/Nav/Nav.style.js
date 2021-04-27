import styled from 'styled-components';
import { BsGearFill, BsFillLockFill, BsFillUnlockFill, BsPeopleCircle } from 'react-icons/bs';
import { Navbar, Nav, CardFooter, Card } from 'reactstrap';

// Nav Icon CSS

const SysytemIcon = styled(BsGearFill)`
    margin: 0 5px 3px 0;
    font-size: 15px;
`;
const LogoutIcon = styled(BsFillUnlockFill)`
    margin: 0 5px 3px 0;
    font-size: 15px;
`;
const LoginIcon = styled(BsFillLockFill)`
    margin: 0 5px 3px 0;
    font-size: 15px;
`;
const ProfileIcon = styled(BsPeopleCircle)`
    margin: 0 5px 3px 0;
    font-size: 15px;
`;

// Side Nav CSS

const NavCard = styled(Card)`
    box-shadow: 0 6px 10px 0 rgb(55, 54, 54);
    font-size: large;
    border-radius: 12%;
    background-color: #f4fcfb;
    margin-top: 20px;
    @media only screen and (max-width: 767px) {
        display: none;
        margin-left: 12px;
        margin-right: 12px;
    }
`;
const NavCardfooter = styled(CardFooter)`
    color: gray;
    text-align: center;
`;

// AppNav CSS

const NavBar = styled(Navbar)`
    box-shadow: 0 6px 10px 0 rgb(55, 54, 54);
    background-color: #1c685e;
    padding: 10px 50px;
    & .navbar-brand {
        display: none;
    }
    & .dropdown-menu.dropdown-menu-right.show {
        background-color: #333;
        border: 8%;
        left: -14px;
        & .dropdown-item {
            text-align: center;
            color: white;
            &:hover {
                border: 1px;
                background-color: #fff;
                color: #333;
            }
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        & .navbar-brand {
            display: none;
        }
    }
    @media only screen and (max-width: 767px) {
        position: fixed;
        width: 100%;
        box-shadow: none;
        background-color: #72b29c;
        border-radius: 0;
        margin: 0;
        padding: 0;
        & .navbar-brand {
            display: block;
            margin: 0 auto;
            padding: 0;
        }
        & img {
            width: 119px;
            margin-right: 60px;
            padding: 6px 0 0 2px;
        }
    }
`;
const SubNavBar = styled.div`
    position: fixed;
    width: 100%;
    display: none;
    margin-top: -40px;
    height: 30px;
    z-index: 1;
    background-color: #1c685e;
    @media only screen and (max-width: 767px) {
        display: block;
    }
`;
const nav = styled(Nav)`
    margin-right: auto;
    margin-left: 100px;

    & li {
        margin-left: 60px;
    }
    @media only screen and (max-width: 767px) {
        margin-left: 0;
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        margin-left: -50px;
    }
`;
const NavWrap = styled.div`
    display: none;
    @media only screen and (max-width: 767px) {
        display: block;
    }
`;

export { NavBar, nav, SysytemIcon, LoginIcon, LogoutIcon, ProfileIcon, NavCard, NavCardfooter, SubNavBar, NavWrap };
