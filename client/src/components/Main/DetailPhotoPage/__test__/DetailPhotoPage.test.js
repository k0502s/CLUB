import React from 'react';
import DetailPhotoPage from '../DetailPhotoPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

describe('<DetailPhotoPage /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            userId: '1234',
        },
        photo: {
            detailphoto: {
                images: [['image1']],
                genres: 3,
                views: 12,
                date: '2021-03-30 05:04',
                comments: [],
                _id: '12345',
                title: '도시야경',
                description: '도시 야경 사진이다.',
            },
            writerId: '1234',
            writerName: '김진석',
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
    //             <DetailPhotoPage />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('Edit 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <DetailPhotoPage {...props} />
                </Provider>
            </BrowserRouter>
        );

        const edit = getByTestId('photo-edit');

        fireEvent.click(edit);

        expect(getByTestId('location-display')).toHaveTextContent('/editphoto/1234');
    });

    it('span 태그의 게시판 방문자 횟수와 게시판 생성 날짜 데이터가 스토어에서 잘 들어오는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <DetailPhotoPage {...props} />
                </Provider>
            </BrowserRouter>
        );

        const date = getByTestId('span-date');
        const views = getByTestId('span-views');

        expect(date).toHaveTextContent('2021-03-30 05:04');
        expect(views).toHaveTextContent(12);
    });

    it(' 포토 디테일 정보가 스토어에서 잘 들어오는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <DetailPhotoPage {...props} />
                </Provider>
            </BrowserRouter>
        );
        const name = getByTestId('info-name');
        const title = getByTestId('info-title');
        const description = getByTestId('info-description');
        const views = getByTestId('info-views');

        expect(name).toHaveTextContent('김진석');
        expect(description).toHaveTextContent('도시 야경 사진이다.');
        expect(title).toHaveTextContent('도시야경');
        expect(views).toHaveTextContent(12);
    });

    it(' 좋아요, 싫어요 버튼이 잘 작동되는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <DetailPhotoPage {...props} />
                </Provider>
            </BrowserRouter>
        );
        const likeupbtn = getByTestId('like-up-btn');
        const likedownbtn = getByTestId('like-down-btn');
        const likeup = getByTestId('like-up');
        const likedown = getByTestId('like-down');

        fireEvent.click(likeupbtn);

        expect(likeup).toHaveTextContent(1);
        expect(likedown).toHaveTextContent(0);

        fireEvent.click(likedownbtn);

        expect(likeup).toHaveTextContent(0);
        expect(likedown).toHaveTextContent(1);
    });
});
