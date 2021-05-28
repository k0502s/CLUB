import React from 'react';
import LandingPage from '../LandingPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

describe('<LandingPage /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            isAuthenticated: true,
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
            errorMsg: '',
            errorMsg1: '',
        },
        post: {
            postdata: [
                {
                    _id: '1111',
                    title: '안녕하세요.',
                    comments: [
                        {
                            date: '2021-03-30 07:16:59',
                            _id: '12345',
                            contents: '반갑습니다.',
                            writer: '1234',
                            writerName: '김진석',
                            post: '123456',
                        },
                    ],
                    fileUrl: 'test',
                    date: '2021-03-30 03:49',
                },
            ],
        },
        photo: {
            photodata: [
                {
                    images: [['image1']],
                    genres: 2,
                    views: 9,
                    date: '2021-05-25 10:25',
                    comments: [
                        {
                            date: '2021-03-30 07:16:59',
                            _id: '12345',
                            contents: '반갑습니다.',
                            writer: '1234',
                            writerName: '김진석',
                            post: '123456',
                        },
                    ],
                    _id: '12345',
                    writer: '김진석',
                    camera: 'A7S3',
                    title: '노을 사진',
                    description: '테스트',
                    createdAt:"2021-05-25T01:45:50.853Z",
                    updatedAt:"2021-05-25T02:29:06.246Z"
                },
            ],
            isLoading: false,
            bestimages: [
                {
                    images: [['image1']],
                    genres: 2,
                    views: 9,
                    date: '2021-05-25 10:25',
                    comments: [
                        {
                            date: '2021-03-30 07:16:59',
                            _id: '12345',
                            contents: '반갑습니다.',
                            writer: '1234',
                            writerName: '김진석',
                            post: '123456',
                        },
                    ],
                    _id: '12345',
                    writer: '김진석',
                    camera: 'A7S3',
                    title: '노을 사진',
                    description: '테스트',
                    createdAt: '2021-03-30 07:16:59',
                    updatedAt: '2021-03-30 07:16:59',
                },
            ],
        },
    });

    // it('matches snapshot', () => {
    //
    //     const utils = render(
    //         <Provider store={store}>
    //             <LandingPage />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('미니 게시판의 포스트 목록 데이터가 잘 랜더링 되는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <LandingPage />
                </Provider>
            </BrowserRouter>
        );

        const postdate = getByTestId('post-date');
        const postcomments = getByTestId('post-comments');
        const posttitle = getByTestId('post-title');
        const postfileurl = getByTestId('post-fileUrl');

        expect(postdate).toHaveTextContent('2021-03-30');
        expect(postcomments).toHaveTextContent([1]);
        expect(posttitle).toHaveTextContent('안녕하세요.');
        expect(postfileurl).toHaveTextContent('');
    });

    it('미니 게시판의 포스트 더보기 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <LandingPage />
                </Provider>
            </BrowserRouter>
        );

        const morelist = getByTestId('post-list');

        fireEvent.click(morelist);

        expect(getByTestId('location-display')).toHaveTextContent('/postlist-1');
    });

    it('미니 게시판의 포스트 목록 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <LandingPage />
                </Provider>
            </BrowserRouter>
        );

        const list = getByTestId('post-title');

        fireEvent.click(list);

        expect(getByTestId('location-display')).toHaveTextContent('/post/1111');
    });

    it('미니 게시판의 포토 목록 데이터가 잘 랜더링 되는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <LandingPage />
                </Provider>
            </BrowserRouter>
        );

        const photodate = getByTestId('photo-date');
        const phototitle = getByTestId('photo-title');
        const photofileurl = getByTestId('photo-fileUrl');

        expect(photodate).toHaveTextContent('2021-05-25');
        expect(phototitle).toHaveTextContent('노을 사진');
        expect(photofileurl).toHaveTextContent('');
    });

    it('미니 게시판의 포토 더보기 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <LandingPage />
                </Provider>
            </BrowserRouter>
        );

        const morelist = getByTestId('photo-list');

        fireEvent.click(morelist);

        expect(getByTestId('location-display')).toHaveTextContent('/bestphotolist');
    });

    it('미니 게시판의 포토 목록 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <LandingPage />
                </Provider>
            </BrowserRouter>
        );

        const list = getByTestId('photo-title');

        fireEvent.click(list);

        expect(getByTestId('location-display')).toHaveTextContent('/photo/12345');
    });
});
