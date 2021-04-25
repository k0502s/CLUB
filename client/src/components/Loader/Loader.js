import React from 'react';
import * as S from './Loader.style'

export const Loader = (
    <>
        <S.LoaderWrap>
            <S.Loader margin={'8px'} color="danger" />
            <S.Loader margin={'20px'} color="warning" />
            <S.Loader margin={'20px'} color="info" />
        </S.LoaderWrap>
    </>
);
