import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { USER_LOADING_REQUEST } from '../../../redux/types';

export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const { isAuthenticated }  = useSelector((state) => state.auth);
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch({
                type: USER_LOADING_REQUEST,
                payload: localStorage.getItem('token'),
            })
            if (!isAuthenticated) {
                if (option) {
                    alert('로그인이 필요합니다!');
                    props.history.push('/');
                } else {
                    if (option === false) {
                        props.history.push('/');
                        alert('권한이 없습니다!');
                    }
                }
            }
        }, [isAuthenticated]);

        return <SpecificComponent {...props} />;
    }
    return AuthenticationCheck;
}