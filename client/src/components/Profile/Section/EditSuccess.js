import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as S from '../Profile.style';
import { Card, Button, CardTitle, CardBody, CardFooter, CardText, CardHeader, Row, Col, Alert } from 'reactstrap';

const EditSuccess = () => {
    return (
        <Col sm={{ size: 4, offset: 4 }}>
            <Helmet title={`회원 정보 수정 완료.`} />
            <S.card>
                <CardHeader tag="h5">회원 정보 수정</CardHeader>
                <CardBody>
                    <Alert color="success">
                        <h4 className="alert-heading">처리 완료!</h4>
                        <CardText>회원님의 정보를 수정하는데 성공하였습니다.</CardText>
                    </Alert>
                </CardBody>
                <CardFooter>
                    <S.button color={'#333'} width={'200px'} justify={'center'} display={'flex'}>
                        <Link to={'/'}>홈으로 돌아가기</Link>
                    </S.button>
                </CardFooter>
            </S.card>
        </Col>
    );
};

export default EditSuccess;
