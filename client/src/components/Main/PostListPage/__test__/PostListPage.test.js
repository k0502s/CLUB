import React from 'react';
import PostListPage from '../PostList_1';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

describe('<PostListPage /> 컴포넌트 테스트', () => {
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
        post: {
            postdata: [
                {
                    views: 0,
                    fileUrl: 'https://source.unsplash.com/random/301x201',
                    category: 1,
                    date: '2021-04-08 05:56',
                    comments: ['123', '321'],
                    _id: '1234',
                    title: '안녕하세요. 반갑습니다.',
                    contents: '<p>반가워요.</p>',
                    writer: '1234',
                    writerName: '김진석',
                    numberId: 8,
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
    //             <PostListPage />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('search을 위한 input에 값이 잘 들어오는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PostListPage {...props} />
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

    it('라우터 게시판 글쓰기 페이지 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PostListPage {...props} />
                </Provider>
            </BrowserRouter>
        );

        const add = getByTestId('post-add');

        fireEvent.click(add);

        expect(getByTestId('location-display')).toHaveTextContent('/addpost');
    });

    it('라우터의 게시판 디테일 페이지 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PostListPage {...props} />
                </Provider>
            </BrowserRouter>
        );

        const detail = getByTestId('post-detail');

        fireEvent.click(detail);

        expect(getByTestId('location-display')).toHaveTextContent('/post/1234');
    });

    it('스토어의 게시판 데이터들이 목록 리스트 값에 잘 들어가는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <PostListPage {...props} />
                </Provider>
            </BrowserRouter>
        );

        const number = getByTestId('post-number');
        const title = getByTestId('post-detail');
        const comments = getByTestId('post-comments');
        const date = getByTestId('post-date');
        const views = getByTestId('post-views');

        expect(number).toHaveTextContent(8);
        expect(title).toHaveTextContent('안녕하세요. 반갑습니다.');
        expect(comments).toHaveTextContent(2);
        expect(date).toHaveTextContent('2021-04-08 05:56');
        expect(views).toHaveTextContent(0);
    });
});
