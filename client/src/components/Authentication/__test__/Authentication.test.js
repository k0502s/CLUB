import React from 'react';
import Login from '../Login';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe('<Login /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            isAuthenticated: false,
            errorMsg: '',
            errorMsg1: '',
            user: [
                {
                    role: '',
                    register_date: '',
                    _id: '',
                    sex: '',
                    name: '',
                    email: '',
                    camera: '',
                    cart: [],
                },
            ],
        },
    });

    // it('matches snapshot', () => {
    //     const utils = render(
    //         <Provider store={store}>
    //             <Login />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('로그인을 위한 값들이 Input 값에 잘 들어오고 state 값에 잘 들어가는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </BrowserRouter>
        );

        const email = getByTestId('login-email');
        const password = getByTestId('login-password');
        const button = getByTestId('login-button');

        fireEvent.change(email, {
            target: {
                value: 'k0502s@naver.com',
            },
        });
        fireEvent.change(password, {
            target: {
                value: '1234',
            },
        });

        fireEvent.click(button);

        expect(email).toHaveAttribute('value', 'k0502s@naver.com');
        expect(password).toHaveAttribute('value', '1234');
        expect(button).toBeEnabled();
    });

    it('회원가입을 위한 값들이 Input 값에 잘 들어오고 state 값에 잘 들어가는지', () => {
        const { getByTestId, getAllByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </BrowserRouter>
        );

        const modalbutton = getByTestId('register-modal');

        fireEvent.click(modalbutton);

        const name = getByTestId('register-name');
        const email = getByTestId('register-email');
        const password = getByTestId('register-password');
        const camera = getByTestId('register-camera');
        const button = getByTestId('register-btn');
        let options = getAllByTestId('select-option');

        fireEvent.change(name, {
            target: {
                value: '김진석',
            },
        });
        fireEvent.change(email, {
            target: {
                value: 'k0502s@naver.com',
            },
        });
        fireEvent.change(password, {
            target: {
                value: '1234',
            },
        });
        fireEvent.change(camera, {
            target: {
                value: 'A7S3',
            },
        });

        fireEvent.click(button);

        expect(name).toHaveAttribute('value', '김진석');
        expect(email).toHaveAttribute('value', 'k0502s@naver.com');
        expect(password).toHaveAttribute('value', '1234');
        expect(camera).toHaveAttribute('value', 'A7S3');
        expect(options[0]).toHaveAttribute('value', '1');
        expect(options[1]).toHaveAttribute('value', '2');
        expect(button).toBeEnabled();
    });
});
