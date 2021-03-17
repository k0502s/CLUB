import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { Navbar, Container, NavbarToggler, Collapse, Nav, NavItem, Form, Button, Col, NavLink, DropdownItem, DropdownToggle, UncontrolledDropdown, DropdownMenu } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { LOGOUT_REQUEST } from '../../redux/types';

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
                <Navbar color="dark" dark expand="lg" className="sticky-top" style={{ borderRadius: 27 }}>
                    <NavbarToggler onClick={toggle} style={{ borderRadius: 100 }} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto ml-5" navbar>
                            <NavItem>
                                <NavLink href="/" className="text-white">
                                    HOME
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-white ml-5">
                                    포토 갤러리
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>베스트 갤러리</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>작품 갤러리</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-white ml-5">
                                    커뮤니티
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>가입 인사</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>모임 후기</DropdownItem>
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
                    </Collapse>
                </Navbar>
            </Col>
        </Fragment>
    );
};

export default AppNavbar;
