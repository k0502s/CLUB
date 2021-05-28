import React from 'react';
import ChatButton from '../Section/ChatButton';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<ChatButton /> 컴포넌트 테스트 - 1', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: { user: { name: '김진석' }},
        message: {
            messages: [
                {
                    who: 'bot',
                    content: {
                        platform: 'PLATFORM_UNSPECIFIED',
                        message: 'text',
                        text: {
                            text: ['안녕하세요! 문의 사항이 있으시면 편하게 말씀해주세요!'],
                        },
                    },
                },
            ],
        },
    });

    it('채팅을 위한 Input 값에 메세지 정보가 잘 들어오는지, 또 메세지 전송 후 값이 초기화 되는지', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <ChatButton />
            </Provider>
        );
        const modalbutton = getByTestId('chat-modal');

        fireEvent.click(modalbutton);

        const message = getByTestId('chat-message');
        const button = getByTestId('chat-btn');

        fireEvent.change(message, {
            target: {
                value: '메세지 테스트',
            },
        });

        expect(message).toHaveAttribute('value', '메세지 테스트');

        fireEvent.click(button);

        expect(message).toHaveAttribute('value', '');

        expect(button).toBeEnabled();
    });

    it('메세지 화면에 봇의 초기 대화창이 잘 등장하는지', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <ChatButton />
            </Provider>
        );
        const modalbutton = getByTestId('chat-modal');

        fireEvent.click(modalbutton);

        const who = getByTestId('chat-who');
        const text = getByTestId('chat-text');

        expect(who).toHaveTextContent('동호회 운영자');
        expect(text).toHaveTextContent('안녕하세요! 문의 사항이 있으시면 편하게 말씀해주세요!');
    });
});

describe('<ChatButton /> 컴포넌트 테스트 - 2', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: { user: { name: '김진석' }},
        message: {
            messages: [
                {
                    who: 'me',
                    content: {
                        platform: 'PLATFORM_UNSPECIFIED',
                        message: 'text',
                        text: {
                            text: ['내가 쓴 메세지 테스트'],
                        },
                    },
                },
            ],
        },
    });
    it('메세지 전송 후 내가 쓴 메세지 내용이 대화창에 잘 등장하는지', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <ChatButton />
            </Provider>
        );
        const modalbutton = getByTestId('chat-modal');

        fireEvent.click(modalbutton);

        const who = getByTestId('chat-who-me');
        const text = getByTestId('chat-text-me');

        expect(who).toHaveTextContent('김진석');
        expect(text).toHaveTextContent('내가 쓴 메세지 테스트');
    });
});
