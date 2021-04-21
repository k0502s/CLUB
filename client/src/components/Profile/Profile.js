import React, { useEffect, useState } from 'react';
import * as S from './Profile.style';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, FormGroup, Label, Input, Button, NavLink, Col, Row, CardTitle, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { USER_LOADING_REQUEST } from '../../redux/types';

const Profile = () => {
    const sex = {
        1: '남',
        2: '여',
    };
    const dispatch = useDispatch();
    const { user, userDate } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch({
            type: USER_LOADING_REQUEST,
            payload: localStorage.getItem('token'),
        });
    }, [dispatch]);

    return (
        <>
            <Col md={{ size: 6, offset: 3 }}>
                <S.card>
                    <CardHeader>
                        {user && user.name ? (
                            <Link to={`/user/${user.name}/profile`}>
                                <S.button block color={'#99ce8f'} width={'80%'}>
                                    PROFILE EDIT
                                </S.button>
                            </Link>
                        ) : (
                            <NavLink>
                                <strong>No User</strong>
                            </NavLink>
                        )}
                    </CardHeader>
                    <Col>
                        <S.title>회원 정보</S.title>
                    </Col>
                    <S.cardbody>
                        <Row>
                            <Col>
                                <Row>
                                    <S.label for="name">
                                        이름: <span>{user.name}</span>
                                    </S.label>
                                </Row>
                                <Row>
                                    <S.label for="email">
                                        이메일: <span>{user.email}</span>
                                    </S.label>
                                </Row>
                                <Row>
                                    <S.label for="sex">
                                        성별:<span> {sex[user.sex]}</span>
                                    </S.label>
                                </Row>
                                <Row>
                                    <S.label for="camera">
                                        보유 카메라: <span>{user.camera}</span>
                                    </S.label>
                                </Row>
                                <Row>
                                    <S.label for="role">
                                        권한: <span>{user.role}</span>
                                    </S.label>
                                </Row>
                                <Row>
                                    <S.label for="registerday">
                                        회원가입 날짜: <span>{userDate.substring(0, 10)}</span>
                                    </S.label>
                                </Row>
                            </Col>
                        </Row>
                    </S.cardbody>
                    <CardFooter>
                        <S.button color={'#333'} width={'200px'} justify={'center'} display={'flex'}>
                            <Link to={'/'}>돌아가기</Link>
                        </S.button>
                    </CardFooter>
                </S.card>
            </Col>
        </>
    );
};

export default Profile;
