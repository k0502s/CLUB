import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CLEAR_ERROR_REQUEST, PASSWORD_EDIT_UPLOADING_REQUEST } from '../../../redux/types';
import Helmet from 'react-helmet';
import { Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import * as S from '../Profile.style'

const ProfileEdit = () => {
    const { userId, errorMsg, previousMatchMsg } = useSelector((state) => state.auth);
    const { userName } = useParams();
    const [form, setValues] = useState({
        previousPassword: '',
        password: '',
        rePassword: '',
        email: '',
        name: '',
        camera: '',
    });
    const dispatch = useDispatch();
    const onChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        await e.preventDefault();
        const { previousPassword, password, rePassword, email, name, camera } = form;
        const token = localStorage.getItem('token');

        const body = {
            password,
            token,
            previousPassword,
            rePassword,
            userId,
            userName,
            email,
            name,
            camera,
        };

        dispatch({
            type: CLEAR_ERROR_REQUEST,
        });
        dispatch({
            type: PASSWORD_EDIT_UPLOADING_REQUEST,
            payload: body,
        });
    };

    return (
        <Col md={{ size: 4, offset: 4 }}>
            <Helmet title={`Profile | ${userName}님의 프로필 수정`} />
            <S.ProfileCard>
                <CardHeader>
                    <strong>회원정보 수정</strong>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="title">새로운 닉네임</Label>
                            <Input type="text" name="name" id="name" className="form-control" value={form.name} onChange={onChange} data-testid='profile-name'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">새로운 카메라</Label>
                            <Input type="text" name="camera" id="camera" className="form-control" value={form.camera} onChange={onChange} data-testid='profile-camera'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">새로운 이메일</Label>
                            <Input type="text" name="email" id="email" className="form-control" value={form.email} onChange={onChange} data-testid='profile-email' />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">기존 비밀번호</Label>
                            <Input type="password" name="previousPassword" id="previousPassword" className="form-control mb-2" value={form.previousPassword} onChange={onChange} data-testid='profile-previousPassword'/>
                            {previousMatchMsg ? <Alert color="danger" data-testid='profile-alert_1'>{previousMatchMsg}</Alert> : ''}
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">새로운 비밀번호</Label>
                            <Input type="password" name="password" id="password" className="form-control" value={form.password} onChange={onChange} data-testid='profile-password'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">비밀번호 확인</Label>
                            <Input type="password" name="rePassword" id="rePassword" className="form-control mb-2" value={form.rePassword} onChange={onChange} data-testid='profile-rePassword'/>
                            {errorMsg ? <Alert color="danger" data-testid='profile-alert_2'>{errorMsg}</Alert> : ''}
                        </FormGroup>
                        <S.ProfileBtn color={'#54C5A0'} width={'200px'} justify={'center'} display={'flex'} data-testid='profile-btn'>
                            제출하기
                        </S.ProfileBtn>
                    </Form>
                </CardBody>
            </S.ProfileCard>
        </Col>
    );
};

export default ProfileEdit;
