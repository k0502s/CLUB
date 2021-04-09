import React from 'react';
import PhotoListPage from '../PhotoList_1';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

describe('<PhotoListPage /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            isAuthenticated: true,
            errorMsg: '',
            user: {
                id: '1234',
                name: '김진석',
                email: 'k0502s@naver.com',
                role: 'User',
            },
        },
        photo: {
            photodata: [
                {
                    images: [['image1']],
                    genres: 1,
                    views: 1,
                    date: '2021-04-08 05:37',
                    comments: [],
                    _id: '1234',
                    writer: '12345',
                    title: '인제 절 ',
                    description: '강원도 인제의 가을 절이다.',
                },
            ],
            totalPages: 1,
        },
    });

    const props = {
        match: {
            params: {
                id: '1234Test',
            },
        },
    };
    // it('matches snapshot', () => {
    //
    //     const utils = render(
    //         <Provider store={store}>
    //             <PhotoListPage />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('search을 위한 input에 값이 잘 들어오는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PhotoListPage {...props} />
                </Provider>
            </BrowserRouter>
        );

        const search = getByTestId('input-search');
        const button = getByTestId('search-btn');

        fireEvent.change(search, {
            target: {
                value: '검색 테스트',
            },
        });
        fireEvent.click(button);

        expect(search).toHaveAttribute('value', '검색 테스트');
        expect(button).toBeEnabled();
    });

    it('라우터 포토 추가 페이지 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PhotoListPage {...props} />
                </Provider>
            </BrowserRouter>
        );

        const add = getByTestId('photo-add');

        fireEvent.click(add);

        expect(getByTestId('location-display')).toHaveTextContent('/addphoto');
    });

    it('라우터 포토 디테일 페이지 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PhotoListPage {...props} />
                </Provider>
            </BrowserRouter>
        );

        const detail = getByTestId('photo-detail');

        fireEvent.click(detail);

        expect(getByTestId('location-display')).toHaveTextContent('/photo/1234');
    });

    it('스토어의 포토 데이터들이 목록 리스트 값에 잘 들어가는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PhotoListPage {...props} />
                </Provider>
            </BrowserRouter>
        );

        const image = getByTestId('photo-image');
        const title = getByTestId('photo-title');
        const description = getByTestId('photo-description');
        const date = getByTestId('photo-date');
        const views = getByTestId('photo-views');

        expect(image).toHaveAttribute('src', 'image1');
        expect(title).toHaveTextContent('인제 절');
        expect(description).toHaveTextContent('강원도 인제의 가을 절이다.');
        expect(date).toHaveTextContent('2021-04-08 05:37');
        expect(views).toHaveTextContent(1);
    });
});
