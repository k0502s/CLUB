import React from 'react';
import EditPostPage from '../EditPostPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<EditPostPage /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        post: {
            postDetail: {
                views: 0,
                fileUrl: 'https://source.unsplash.com/random/301x201',
                category: 1,
                date: '2021-04-08 05:56',
                comments: [],
                _id: '123',
                title: '안녕하세요. 반값습니다.',
                contents: '<p>테스트</p>',
                writer: '12345',
                writerName: 'Jin Seok, Kim',
                numberId: 8,
            },
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
    //             <EditPostPage />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('스토어에서 Input의 디폴트 값들이 잘 랜더링 되는지', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <EditPostPage {...props} />
            </Provider>
        );

        const title = getByTestId('edit-title');
        const button = getByTestId('edit-submit');

        fireEvent.click(button);

        expect(title).toHaveAttribute('value', '안녕하세요. 반값습니다.');
        expect(button).toBeEnabled();
    });
});
