import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';



export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        let { isAuthenticated } = useSelector((state) => state.auth);
        useEffect(() => {
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
        }, []);

        return <SpecificComponent {...props} />;
    }
    return AuthenticationCheck;
}
