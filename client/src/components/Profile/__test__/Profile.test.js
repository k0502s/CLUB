import React from 'react';
import Profile from '../Profile';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('<Profile /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            userId: '123',
            errorMsg: '새로운 비밀번호가 일치하지 않습니다.',
            successMsg: '',
            previousMatchMsg: '기존 비밀번호가 일치하지 않습니다.',
            editsuccess: '',
            user: {
                id: '1234',
                name: '김진석',
                email: 'k0502s@naver.com',
                role: 'User',
            },
        },
    });

    // it('matches snapshot', () => {
    //
    //     const utils = render(
    //         <Provider store={store}>
    //             <Profile />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('Input 값에 프로필을 수정 할 정보가 잘 들어오는지', () => {
        const history = createMemoryHistory();
        const route = '/user/:김진석/profile';
        history.push(route);
        const { getByTestId } = render(
            <Provider store={store}>
                <Router history={history}>
                    <Profile />
                </Router>
            </Provider>
        );

        const name = getByTestId('profile-name');
        const camera = getByTestId('profile-camera');
        const email = getByTestId('profile-email');
        const previousPassword = getByTestId('profile-previousPassword');
        const password = getByTestId('profile-password');
        const rePassword = getByTestId('profile-rePassword');
        const button = getByTestId('profile-btn');

        fireEvent.change(name, {
            target: {
                value: '김진석',
            },
        });
        fireEvent.change(camera, {
            target: {
                value: 'A7S3',
            },
        });
        fireEvent.change(email, {
            target: {
                value: 'k0502s@naver.com',
            },
        });
        fireEvent.change(previousPassword, {
            target: {
                value: '123',
            },
        });
        fireEvent.change(password, {
            target: {
                value: '11',
            },
        });
        fireEvent.change(rePassword, {
            target: {
                value: '11',
            },
        });

        fireEvent.click(button);

        expect(name).toHaveAttribute('value', '김진석');
        expect(camera).toHaveAttribute('value', 'A7S3');
        expect(email).toHaveAttribute('value', 'k0502s@naver.com');
        expect(previousPassword).toHaveAttribute('value', '123');
        expect(password).toHaveAttribute('value', '11');
        expect(rePassword).toHaveAttribute('value', '11');
        expect(button).toBeEnabled();
    });

    it('Input 값에 들어온 데이터에 문제가 있으면 스토에 들어온 경고 메세지가 잘 랜더링 해주는지', () => {
        const history = createMemoryHistory();
        const route = '/user/:김진석/profile';
        history.push(route);
        const { getByTestId } = render(
            <Provider store={store}>
                <Router history={history}>
                    <Profile />
                </Router>
            </Provider>
        );

        const previousPassword = getByTestId('profile-alert_1');
        const rePasswordMatch = getByTestId('profile-alert_2');

        expect(previousPassword).toHaveTextContent('기존 비밀번호가 일치하지 않습니다.');
        expect(rePasswordMatch).toHaveTextContent('새로운 비밀번호가 일치하지 않습니다.');
    });
});
