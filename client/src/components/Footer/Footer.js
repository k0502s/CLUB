import React from 'react';
import * as S from './Footer.style';
import { Col } from 'reactstrap';

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year;
    };
    return (
        <S.FooterWrap>
            <Col>
                <span>김진석</span>&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;<span>Email k0502s@naver.com</span>&nbsp;&nbsp;<span>KakaoID k0502s</span>
                <p>
                    Copyright &copy; <span>{thisYear()} Jin Seok Kim All rights reserved.</span>
                </p>
            </Col>
        </S.FooterWrap>
    );
};

export default Footer;
