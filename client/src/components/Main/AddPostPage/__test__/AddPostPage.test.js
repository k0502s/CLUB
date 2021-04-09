import React from 'react';
import AddPostPage from '../AddPostPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<AddPostPage /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            isAuthenticated: true,
            userName: '김진석'
        },
    });
    // it('matches snapshot', () => {
    //
    //     const utils = render(
    //         <Provider store={store}>
    //             <AddPostPage />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('Input 값에 올릴 게시글 데이터가 잘 들어가는지', () => {
        const { getByTestId, getAllByTestId } = render(
            <Provider store={store}>
                <AddPostPage />
            </Provider>
        );

        const title = getByTestId('add-title');
        const description = getByTestId('add-description');
        const button = getByTestId('add-submit');
        let options = getAllByTestId('select-option');

        fireEvent.change(title, {
            target: {
                value: '안녕하세요. 반갑습니다.',
            },
        });
        fireEvent.blur(description, {
            target: {
                value: '가입 인사 드립니다.',
            },
        });

        fireEvent.click(button);

        expect(title).toHaveAttribute('value', '안녕하세요. 반갑습니다.');
        expect(description).toHaveValue('가입 인사 드립니다.');
        expect(options[0]).toHaveAttribute('value', '1');
        expect(options[1]).toHaveAttribute('value', '2');
        expect(button).toBeEnabled();
    });
});
