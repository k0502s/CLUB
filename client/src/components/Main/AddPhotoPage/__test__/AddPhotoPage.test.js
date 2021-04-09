import React from 'react';
import AddPhotoPage from '../AddPhotoPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<AddPhotoPage /> 컴포넌트 테스트', () => {
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
    //             <AddPhotoPage />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('Input 값에 포토에 관한 정보가 잘 들어오는지', () => {
        const { getByTestId, getAllByTestId } = render(
            <Provider store={store}>
                <AddPhotoPage />
            </Provider>
        );

        const title = getByTestId('add-title');
        const description = getByTestId('add-description');
        const button = getByTestId('add-submit');
        let options = getAllByTestId('select-option');

        fireEvent.change(title, {
            target: {
                value: '도시야경',
            },
        });
        fireEvent.change(description, {
            target: {
                value: '도시 야경 사진이다.',
            },
        });

        fireEvent.click(button);

        expect(title).toHaveAttribute('value', '도시야경');
        expect(description).toHaveValue('도시 야경 사진이다.');
        expect(options[0]).toHaveAttribute('value', '1');
        expect(options[1]).toHaveAttribute('value', '2');
        expect(options[2]).toHaveAttribute('value', '3');
        expect(options[3]).toHaveAttribute('value', '4');
        expect(button).toBeEnabled();
    });
});
