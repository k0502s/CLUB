import React, { useState, useEffect, useCallback } from 'react';
import { NavbarToggler, Collapse, NavItem, Col, Row, NavLink, DropdownItem, DropdownToggle, UncontrolledDropdown, DropdownMenu, NavbarBrand, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../Authentication/Login';
import logo from '../../assets/img/로고.png';
import LocationDisplay from '../../utils/LocationDisplay';
import { CLEAR_ERROR_REQUEST, LOGOUT_REQUEST } from '../../redux/types';
import * as S from './Nav.style';

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch({
            type: LOGOUT_REQUEST,
        });
    }, [dispatch]);

    useEffect(() => {
        setIsOpen(false);
    }, [user]);

    const toggle = () => setIsOpen(!isOpen);
    const handleToggle = () => {
        dispatch({
            type: CLEAR_ERROR_REQUEST,
        });
        setModal(!modal);
    };
    const authLink = (
        <>
            <NavLink onClick={onLogout} className="text-white">
                <S.LogoutIcon />
                Logout
            </NavLink>
            <Link to="/profile">
                <NavLink className="text-white">
                    <S.ProfileIcon />
                    Profile
                </NavLink>
            </Link>
        </>
    );

    const guestLink = (
        <>
            <NavLink className="text-white" onClick={handleToggle}>
                <S.LoginIcon />
                Login
            </NavLink>
            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>Login</ModalHeader>
                <ModalBody>
                    <Login />
                </ModalBody>
            </Modal>
        </>
    );

    return (
        <>
            <S.NavBar dark expand="lg" className="sticky-top">
                <NavbarToggler onClick={toggle} style={{ border: 'none' }} />
                <NavbarBrand>
                    <Link to={'/'}>
                        <img src={logo} />
                    </Link>
                </NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <S.nav navbar>
                        <NavItem>
                            <Link to="/" data-testid="nav-home">
                                <NavLink className="text-white">HOME</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" data-testid="nav-home">
                                <NavLink className="text-white">CLUB ABOUT</NavLink>
                            </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="text-white">
                                PHOTO GALLERY
                            </DropdownToggle>
                            <DropdownMenu right>
                                <Link to="/bestphotolist" data-testid="nav-bestlist">
                                    <DropdownItem>인기 갤러리</DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <Link to="/photolist_1" data-testid="nav-photolist1">
                                    <DropdownItem>풍경 갤러리</DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <Link to="/photolist_2" data-testid="nav-photolist2">
                                    <DropdownItem>인물 갤러리</DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <Link to="/photolist_3" data-testid="nav-photolist3">
                                    <DropdownItem>접사 갤러리</DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <Link to="/photolist_4" data-testid="nav-photolist4">
                                    <DropdownItem>습작 갤러리</DropdownItem>
                                </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="text-white">
                                COMMUNITY
                            </DropdownToggle>
                            <DropdownMenu right>
                                <Link to="/postlist_1" data-testid="nav-postlist1">
                                    <DropdownItem>가입 인사</DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                <Link to="/postlist_2" data-testid="nav-postlist2">
                                    <DropdownItem>모임 후기</DropdownItem>
                                </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </S.nav>
                    <S.NavWrap>{isAuthenticated ? authLink : ''}</S.NavWrap>
                    <S.NavWrap>{isAuthenticated ? '' : guestLink}</S.NavWrap>
                    <NavLink className="text-white">
                        <S.SysytemIcon />
                        <a href="https://damp-shore-15614.herokuapp.com">ADMIN</a>
                    </NavLink>
                </Collapse>
                <LocationDisplay />
            </S.NavBar>
            <S.SubNavBar></S.SubNavBar>
        </>
    );
};

export default AppNavbar;
