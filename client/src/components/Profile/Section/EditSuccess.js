import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CardBody, CardFooter, CardText, CardHeader, Col } from 'reactstrap';
import * as S from '../Profile.style';

const EditSuccess = () => {
    return (
        <Col sm={{ size: 4, offset: 4 }}>
            <Helmet title={`회원 정보 수정 완료.`} />
            <S.ProfileCard>
                <CardHeader tag="h5">회원 정보 수정</CardHeader>
                <CardBody>
                    <S.ProfileAlert>
                        <h4 className="alert-heading">처리 완료!</h4>
                        <CardText>회원님의 정보를 수정하는데 성공하였습니다.</CardText>
                    </S.ProfileAlert>
                </CardBody>
                <CardFooter>
                    <S.ProfileBtn color={'#54C5A0'} width={'200px'} justify={'center'} display={'flex'}>
                        <Link to={'/'}>홈으로 돌아가기</Link>
                    </S.ProfileBtn>
                </CardFooter>
            </S.ProfileCard>
        </Col>
    );
};

export default EditSuccess;
