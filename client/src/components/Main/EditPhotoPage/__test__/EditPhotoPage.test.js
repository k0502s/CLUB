import React from 'react';
import EditPhotoPage from '../EditPhotoPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<EditPhotoPage /> 컴포넌트 테스트', () => {
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
        photo: {
            detailphoto: {
                genres: 3,
                views: 12,
                date: '2021-03-30 05:04',
                comments: [],
                _id: '1234',
                title: '도시야경',
                description: '도시 야경 사진이다.',
            },
            detailimages: [['image1']],
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
    //             <EditPhotoPage />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('스토어에서 Input의 디폴트 값들이 잘 랜더링 되는지', () => {
        const { getByTestId, getAllByTestId } = render(
            <Provider store={store}>
                <EditPhotoPage {...props} />
            </Provider>
        );

        const title = getByTestId('edit-title');
        const description = getByTestId('edit-description');
        const image = getByTestId('edit-image');
        const button = getByTestId('edit-submit');
        let options = getAllByTestId('select-option');

        fireEvent.click(button);

        expect(image).toHaveAttribute('src', 'image1');
        expect(title).toHaveAttribute('value', '도시야경');
        expect(description).toHaveValue('도시 야경 사진이다.');
        expect(options[0]).toHaveAttribute('value', '1');
        expect(options[1]).toHaveAttribute('value', '2');
        expect(options[2]).toHaveAttribute('value', '3');
        expect(options[3]).toHaveAttribute('value', '4');
        expect(button).toBeEnabled();
    });
});
