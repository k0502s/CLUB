import React, { Fragment, useState, useCallback, useEffect } from 'react';
import Register from './Register';
import { Link } from 'react-router-dom';
import { Alert, Form, FormGroup, Label, Input, Button, NavLink, Col, CardTitle, CardSubtitle } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './Authentication.style';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../../redux/types';

const Login = () => {
    const [localMsg, setLocalMsg] = useState('');
    const [form, setValues] = useState({
        email: '',
        password: '',
    });

    const { isAuthenticated, user, errorMsg } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch({
            type: LOGOUT_REQUEST,
        });
    }, [dispatch]);

    useEffect(() => {
        try {
            setLocalMsg(errorMsg);
        } catch (e) {
            console.log(e);
        }
    }, [errorMsg]);

    useEffect(() => {}, [user]);

    const onChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = form;
        const user = { email, password };
        console.log(user);
        dispatch({
            type: LOGIN_REQUEST,
            payload: user,
        });
    };

    const guestLink = (
        <Fragment>
            {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <S.label for="email">Email</S.label>
                    <S.input type="email" name="email" id="email" placeholder="Email" onChange={onChange} value={form.email} data-testid="login-email" />
                    <S.label for="password">Password</S.label>
                    <S.input type="password" name="password" id="password" placeholder="Password" onChange={onChange} value={form.password} data-testid="login-password" />
                    <Col>
                        <S.button block margin={'20px'} data-testid="login-button">
                            LOGIN
                        </S.button>
                    </Col>
                </FormGroup>
            </Form>
            <Col>
                <Register />
            </Col>
        </Fragment>
    );

    const authLink = (
        <Fragment>
            <S.form>
                {user && user.name ? (
                    <Fragment>
                        <S.cardtitle tag="h5">안녕하세요.</S.cardtitle>
                        <S.cardsubtitle tag="h6" className="text-muted">
                            {user ? `${user.name} 님.` : ''}
                        </S.cardsubtitle>
                    </Fragment>
                ) : (
                    <NavLink>
                        <strong>No User</strong>
                    </NavLink>
                )}
            </S.form>
            <Form>
                <Col>
                    {user && user.name ? (
                        <Link to={`/profile`}>
                            <S.button block>PROFILE</S.button>
                        </Link>
                    ) : (
                        <NavLink>
                            <strong>No User</strong>
                        </NavLink>
                    )}
                </Col>
                <Col>
                    <S.button onClick={onLogout} block margin={'12px'}>
                        LOGOUT
                    </S.button>
                </Col>
            </Form>
        </Fragment>
    );

    return <div>{isAuthenticated ? authLink : guestLink}</div>;
};

export default Login;
