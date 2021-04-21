import React from 'react';
import Login from '../Authentication/Login';
import * as S from './Nav.style'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';

const SideNav = () => {
    return (
        <S.card>
            <CardBody>
                <Login />
            </CardBody>
            <S.cardfooter>즐겁게 사진을 찍고 싶은분은 누구든지 환영입니다!</S.cardfooter>
        </S.card>
    );
};

export default SideNav;
