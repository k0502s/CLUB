import React from 'react';
import AppNavbar from '../AppNavbar';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe('<AppNavbar /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
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
    //             <AppNavbar />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('라우터의 홈 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <AppNavbar />
                </Provider>
            </BrowserRouter>
        );
        const home = getByTestId('nav-home');

        fireEvent.click(home);

        expect(getByTestId('location-display')).toHaveTextContent('/');
    });
    it('라우터의 photolist/1 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <AppNavbar />
                </Provider>
            </BrowserRouter>
        );
        const photolist1 = getByTestId('nav-photolist1');

        fireEvent.click(photolist1);

        expect(getByTestId('location-display')).toHaveTextContent('/photolist/1');
    });
    it('라우터의 photolist/2 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <AppNavbar />
                </Provider>
            </BrowserRouter>
        );
        const photolist2 = getByTestId('nav-photolist2');

        fireEvent.click(photolist2);

        expect(getByTestId('location-display')).toHaveTextContent('/photolist/2');
    });
    it('라우터의 photolist/3 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <AppNavbar />
                </Provider>
            </BrowserRouter>
        );
        const photolist3 = getByTestId('nav-photolist3');

        fireEvent.click(photolist3);

        expect(getByTestId('location-display')).toHaveTextContent('/photolist/3');
    });
    it('라우터의 photolist/4 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <AppNavbar />
                </Provider>
            </BrowserRouter>
        );
        const photolist4 = getByTestId('nav-photolist4');

        fireEvent.click(photolist4);

        expect(getByTestId('location-display')).toHaveTextContent('/photolist/4');
    });

    it('라우터의 postlist/1 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <AppNavbar />
                </Provider>
            </BrowserRouter>
        );
        const postlist1 = getByTestId('nav-postlist1');

        fireEvent.click(postlist1);

        expect(getByTestId('location-display')).toHaveTextContent('/postlist/1');
    });
    it('라우터의 postlist/2 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <AppNavbar />
                </Provider>
            </BrowserRouter>
        );
        const postlist2 = getByTestId('nav-postlist2');

        fireEvent.click(postlist2);

        expect(getByTestId('location-display')).toHaveTextContent('/postlist/2');
    });
});
