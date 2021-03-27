import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, Button, CardTitle, CardText, Row, Col, Alert } from 'reactstrap';

const EditSuccess = () => {
    return (
        <Col sm={{ size: 4, offset: 4 }} style={{ marginTop: '80px' }}>
            <Helmet title={`회원 정보 수정 완료.`} />
            <Card body>
                <CardTitle tag="h5">회원 정보 수정</CardTitle>
                <Alert color="success">
                    <h4 className="alert-heading">처리 완료!</h4>
                    <CardText>회원님의 정보를 수정하는데 성공하였습니다.</CardText>
                </Alert>
                <Button href="/">홈으로 돌아가기</Button>
            </Card>
        </Col>
    );
};

export default EditSuccess;
