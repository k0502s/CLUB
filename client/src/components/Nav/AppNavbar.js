import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { Navbar, Container, NavbarToggler, Collapse, Nav, NavItem, Form, Button, Col, NavLink, DropdownItem, DropdownToggle, UncontrolledDropdown, DropdownMenu, NavbarText } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_REQUEST } from '../../redux/types';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, user, userRole } = useSelector((state) => state.auth);
    console.log(userRole, 'UserRole');

    const dispatch = useDispatch();

    useEffect(() => {
        setIsOpen(false);
    }, [user]);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Fragment>
            <Col md={{ size: 10, offset: 1 }} sm={12}>
                <Navbar dark expand="lg" className="sticky-top" id="nav">
                    <NavbarToggler onClick={toggle} style={{ borderRadius: 100 }} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto ml-5" navbar>
                            <NavItem>
                                <Link to="/">
                                    <NavLink className="text-white">HOME</NavLink>
                                </Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-white ml-5">
                                    포토 갤러리
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link to="/bestphotolist">
                                        <DropdownItem>인기 갤러리</DropdownItem>
                                    </Link>
                                    <DropdownItem divider />
                                    <Link to="/photolist_1">
                                        <DropdownItem>풍경 갤러리</DropdownItem>
                                    </Link>
                                    <DropdownItem divider />
                                    <Link to="/photolist_2">
                                        <DropdownItem>인물 갤러리</DropdownItem>
                                    </Link>
                                    <DropdownItem divider />
                                    <Link to="/photolist_3">
                                        <DropdownItem>접사 갤러리</DropdownItem>
                                    </Link>
                                    <DropdownItem divider />
                                    <Link to="/photolist_4">
                                        <DropdownItem>습작 갤러리</DropdownItem>
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-white ml-5">
                                    커뮤니티
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link to="/postlist_1">
                                        <DropdownItem>가입 인사</DropdownItem>
                                    </Link>
                                    <DropdownItem divider />
                                    <Link to="/postlist_2">
                                        <DropdownItem>모임 후기</DropdownItem>
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-white ml-5">
                                    사진 동호회
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>동호회 소개</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>동호회 규칙</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>동호회 연혁</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <Link to="/">
                            <NavLink className="text-white">TEST</NavLink>
                        </Link>
                    </Collapse>
                </Navbar>
            </Col>
        </Fragment>
    );
};

export default AppNavbar;
