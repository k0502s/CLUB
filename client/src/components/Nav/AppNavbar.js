import React, { Fragment, useState, useEffect } from 'react';
import { NavbarToggler, Collapse, NavItem, Col, NavLink, DropdownItem, DropdownToggle, UncontrolledDropdown, DropdownMenu, NavbarText } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as S from './Nav.style';
import LocationDisplay from '../../utils/LocationDisplay';

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        setIsOpen(false);
    }, [user]);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Fragment>
            <Col>
                <S.navbar dark expand="lg" className="sticky-top">
                    <NavbarToggler onClick={toggle} style={{ borderRadius: 100 }} />
                    <Collapse isOpen={isOpen} navbar>
                        <S.nav navbar>
                            <NavItem>
                                <Link to="/" data-testid="nav-home">
                                    <NavLink className="text-white">HOME</NavLink>
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
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="text-white">
                                    CLUB ABOUT
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>동호회 소개</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>동호회 규칙</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>동호회 연혁</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </S.nav>
                        <Link to="/">
                            <NavLink className="text-white">
                                <S.sysytemIcon />
                                ADMIN
                            </NavLink>
                        </Link>
                    </Collapse>
                </S.navbar>
            </Col>
            <LocationDisplay />
        </Fragment>
    );
};

export default AppNavbar;
