import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/로고.png';
import * as S from './Header.style'

const Header = () => {
    return (
        <S.Wrap>
            <Link to={'/'}><S.Logo src={logo}/></Link>
        </S.Wrap>
    );
};

export default Header;
