import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Col, Row, CardHeader, CardFooter } from 'reactstrap';
import { USER_LOADING_REQUEST } from '../../redux/types';
import * as S from './Profile.style';

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
                <S.ProfileCard>
                    <CardHeader>
                        {user && user.name ? (
                            <Link to={`/user/${user.name}/profile`}>
                                <S.ProfileBtn block color={'#99ce8f'} width={'80%'}>
                                    프로필 수정
                                </S.ProfileBtn>
                            </Link>
                        ) : (
                            <NavLink>
                                <strong>No User</strong>
                            </NavLink>
                        )}
                    </CardHeader>
                    <Col>
                        <S.Title>회원 정보</S.Title>
                    </Col>
                    <S.ProfileCardbody>
                        <Row>
                            <Col>
                                <Row>
                                    <S.ProfileLabel for="name">
                                        이름: <span>{user.name}</span>
                                    </S.ProfileLabel>
                                </Row>
                                <Row>
                                    <S.ProfileLabel for="email">
                                        이메일: <span>{user.email}</span>
                                    </S.ProfileLabel>
                                </Row>
                                <Row>
                                    <S.ProfileLabel for="sex">
                                        성별:<span> {sex[user.sex]}</span>
                                    </S.ProfileLabel>
                                </Row>
                                <Row>
                                    <S.ProfileLabel for="camera">
                                        보유 카메라: <span>{user.camera}</span>
                                    </S.ProfileLabel>
                                </Row>
                                <Row>
                                    <S.ProfileLabel for="role">
                                        권한: <span>{user.role}</span>
                                    </S.ProfileLabel>
                                </Row>
                                <Row>
                                    <S.ProfileLabel for="registerday">
                                        회원가입 날짜: <span>{userDate.substring(0, 10)}</span>
                                    </S.ProfileLabel>
                                </Row>
                            </Col>
                        </Row>
                    </S.ProfileCardbody>
                    <CardFooter>
                        <Link to={'/'}>
                            <S.ProfileBtn color={'#333'} width={'200px'} justify={'center'} display={'flex'}>
                                홈으로 돌아가기
                            </S.ProfileBtn>
                        </Link>
                    </CardFooter>
                </S.ProfileCard>
            </Col>
        </>
    );
};

export default Profile;
