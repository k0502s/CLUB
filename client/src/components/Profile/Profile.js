import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CLEAR_ERROR_REQUEST, PASSWORD_EDIT_UPLOADING_REQUEST } from '../../redux/types';
import Helmet from 'react-helmet';
import { Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';

const Profile = (props) => {
    const { userId, errorMsg, successMsg, previousMatchMsg, editsuccess } = useSelector((state) => state.auth);
    const { userName } = useParams();
    const [form, setValues] = useState({
        previousPassword: '',
        password: '',
        rePassword: '',
        email: '',
        name: '',
        camera: ''
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
            camera
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
        <Fragment>
            <Helmet title={`Profile | ${userName}님의 프로필`} />
            <Col sm="12" md={{ size: 6, offset: 2 }}>
                <Card>
                    <CardHeader>
                        <strong>회원정보 수정</strong>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={onSubmit}>
                            <FormGroup>
                                <Label for="title">새로운 닉네임</Label>
                                <Input type="text" name="name" id="name" className="form-control" onChange={onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">새로운 카메라</Label>
                                <Input type="text" name="camera" id="camera" className="form-control" onChange={onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">새로운 이메일</Label>
                                <Input type="text" name="email" id="email" className="form-control" onChange={onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">기존 비밀번호</Label>
                                <Input type="password" name="previousPassword" id="previousPassword" className="form-control mb-2" onChange={onChange} />
                                {previousMatchMsg ? <Alert color="danger">{previousMatchMsg}</Alert> : ''}
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">새로운 비밀번호</Label>
                                <Input type="password" name="password" id="password" className="form-control" onChange={onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">비밀번호 확인</Label>
                                <Input type="password" name="rePassword" id="rePassword" className="form-control mb-2" onChange={onChange} />
                                {errorMsg ? <Alert color="danger">{errorMsg}</Alert> : ''}
                            </FormGroup>
                            <Button color="dark" block className="mt-2 offset-md-9 col-md-3 ">
                                제출하기
                            </Button>
                            {successMsg ? <Alert color="success">{successMsg}</Alert> : ''}
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default Profile;
