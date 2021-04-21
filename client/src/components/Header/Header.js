import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/로고.png';
import * as S from './Header.style'

const Header = () => {
    return (
        <S.wrapper>
            <Link to={'/'}><S.logo src={logo}/></Link>
        </S.wrapper>
    );
};

export default Header;
