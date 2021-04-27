import React from 'react';
import Login from '../Authentication/Login';
import { CardBody } from 'reactstrap';
import * as S from './Nav.style'

const SideNav = () => {
    return (
        <S.NavCard>
            <CardBody>
                <Login />
            </CardBody>
            <S.NavCardfooter>즐겁게 사진을 찍고 싶은분은 누구든지 환영입니다!</S.NavCardfooter>
        </S.NavCard>
    );
};

export default SideNav;
