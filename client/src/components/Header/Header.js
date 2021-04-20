import React from 'react';
import { Row, Col } from 'reactstrap';
import logo from './images/로고.png';
import * as S from './Header.style'

const Header = () => {
    return (
        <S.wrapper>
            <S.logo src={logo}/>
        </S.wrapper>
    );
};

export default Header;
