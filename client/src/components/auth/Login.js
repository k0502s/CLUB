import React, { Fragment, useState, useCallback, useEffect } from 'react';
import Register from '../auth/Register';
import { Link } from 'react-router-dom';
import { Alert, Form, FormGroup, Label, Input, Button, NavLink, Col, CardTitle, CardSubtitle } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
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
                    <Label style={{ marginLeft: '1.5rem' }} for="email">
                        Email
                    </Label>
                    <Input style={{ width: '80%', marginLeft: '1.5rem' }} type="email" name="email" id="email" placeholder="Email" onChange={onChange} />
                    <Label style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }} for="password">
                        Password
                    </Label>
                    <Input style={{ width: '80%', marginLeft: '1.5rem' }} type="password" name="password" id="password" placeholder="Password" onChange={onChange} />
                    <Col>
                        <Button className="mt-4" block id="btn">
                            LOGIN
                        </Button>
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
            <Form className="col mt-2">
                {user && user.name ? (
                    <Fragment>
                        <CardTitle tag="h5" style={{ textAlign: 'center' }}>
                            안녕하세요.
                        </CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ textAlign: 'center', textDecoration: 'underline', textDecorationThickness: '2.22px' }}>
                            {user ? `${user.name} 님.` : ''}
                        </CardSubtitle>
                    </Fragment>
                ) : (
                    <NavLink>
                        <strong>No User</strong>
                    </NavLink>
                )}
            </Form>
            <Form>
                <Col>
                    {user && user.name ? (
                        <Link to={`/user/${user.name}/profile`}>
                            <Button className="mt-4" block id="btn">
                                PROFILE EDIT
                            </Button>
                        </Link>
                    ) : (
                        <NavLink>
                            <strong>No User</strong>
                        </NavLink>
                    )}
                </Col>
                <Col>
                    <Link onClick={onLogout} to="/">
                        <Button className="mt-3" block id="btn">
                            LOGOUT
                        </Button>
                    </Link>
                </Col>
            </Form>
        </Fragment>
    );

    return <div>{isAuthenticated ? authLink : guestLink}</div>;
};

export default Login;
