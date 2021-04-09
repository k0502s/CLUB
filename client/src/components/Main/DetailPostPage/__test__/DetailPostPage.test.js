import React from 'react';
import DetailPostPage from '../DetailPostPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

describe('<DetailPostPage /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            userId: '1234',
            userName: '김진석',
        },
        post: {
            postDetail: {
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
                views: 14,
                fileUrl: null,
                category: 1,
                date: '2021-03-30 03:49',
                writer: {
                    _id: '1111',
                    name: '김진석',
                },
            },
            writerId: '1234',
            title: '안녕하세요',
            loading: false,
        },
        comment: {
            comments: [
                {
                    date: '2021-03-30 07:16:59',
                    _id: '1234',
                    contents: '반갑습니다.',
                    writer: '1234',
                    writerName: '김진석',
                    post: '123456',
                },
            ],
            creatorId: '',
            loading: false,
            isAuthenticated: false,
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
    //             <DetailPostPage />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('Edit 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <DetailPostPage {...props} />
                </Provider>
            </BrowserRouter>
        );

        const edit = getByTestId('post-edit');

        fireEvent.click(edit);

        expect(getByTestId('location-display')).toHaveTextContent('/editpost/1234Test');
    });

    it('게시판 방문자 횟수와 생성 날짜 데이터 및 게시판 제목, 댓글 갯수 데이터가 스토어에서 잘 들어오는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <DetailPostPage {...props} />
                </Provider>
            </BrowserRouter>
        );

        const title = getByTestId('post-title');
        const name = getByTestId('post-name');
        const comments = getByTestId('post-comments');
        const date = getByTestId('post-date');
        const views = getByTestId('post-views');

        expect(title).toHaveTextContent('안녕하세요.');
        expect(name).toHaveTextContent('김진석');
        expect(comments).toHaveTextContent(1);
        expect(date).toHaveTextContent('2021-03-30 03:49');
        expect(views).toHaveTextContent(14);
    });

    it(' 댓글 작성 Input이 값이 잘 들어오고 작동되는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <DetailPostPage {...props} />
                </Provider>
            </BrowserRouter>
        );
        const comment = getByTestId('add-comment');
        const btn = getByTestId('comment-submit');

        fireEvent.change(comment, {
            target: {
                value: '댓글 테스트',
            },
        });

        fireEvent.click(btn);

        expect(comment).toHaveValue('댓글 테스트');
        expect(btn).toBeEnabled();
    });

    it(' 스토어에서 수정을 위한 댓글 데이터가 댓글 리스트에 디폴트 값으로 잘 들어오는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <DetailPostPage {...props} />
                </Provider>
            </BrowserRouter>
        );
        const commentname = getByTestId('comment-name');
        const commentdate1 = getByTestId('comment-date_1');
        const commentdate2 = getByTestId('comment-date_2');
        const commentcontent = getByTestId('comment-content');
        const commenteditbtn = getByTestId('comment-edit-btn');
        const commentdeletebtn = getByTestId('comment-delete-btn');

        fireEvent.click(commenteditbtn);
        fireEvent.click(commentdeletebtn);

        expect(commentname).toHaveTextContent('김진석');
        expect(commentdate1).toHaveTextContent('2021-03-30');
        expect(commentdate2).toHaveTextContent('07:16:59');
        expect(commentcontent).toHaveTextContent('반갑습니다.');
        expect(commenteditbtn).toBeEnabled();
        expect(commentdeletebtn).toBeEnabled();
    });

    it(' 스토어에서 수정을 위한 댓글 내용의 디폴트 값이 들어오고 전송 버튼이 재기능을 하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <DetailPostPage {...props} />
                </Provider>
            </BrowserRouter>
        );
        const commenteditbtn = getByTestId('comment-edit-btn');

        fireEvent.click(commenteditbtn);

        const editcomment = getByTestId('edit-comment');
        const editsubmit = getByTestId('edit-comment-submit');

        fireEvent.click(editsubmit);

        expect(editcomment).toHaveTextContent('반갑습니다.');
        expect(editsubmit).toBeEnabled();
    });
});
