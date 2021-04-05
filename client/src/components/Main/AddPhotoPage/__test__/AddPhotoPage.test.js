import React from 'react';
import AddPhotoPage from '../AddPhotoPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<AddPhotoPage />', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('matches snapshot', () => {
        store = mockStore(initialState);
        const utils = render(
            <Provider store={store}>
                <AddPhotoPage />
            </Provider>
        );
        expect(utils.container).toMatchSnapshot();
    });
});
