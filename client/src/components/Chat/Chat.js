import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Section/Message';
import * as S from './Chat.style';
import { CHAT_REQUEST } from '../../redux/types';
import { Input, InputGroupAddon, Button, InputGroup, Row, Col, CardBody, Card } from 'reactstrap';

const Chat = ({ reset }) => {
    const dispatch = useDispatch();
    const messagesFromRedux = useSelector((state) => state.message.messages);
    const [Mes, setMes] = useState('');

    useEffect(() => {
        eventQuery(reset);
    }, [reset]);
    const textQuery = async (text) => {
        let conversation = {
            who: 'user',
            content: {
                text: {
                    text: text,
                },
            },
        };
        dispatch({
            type: CHAT_REQUEST,
            payload: conversation,
        });

        const textQueryVariables = {
            text: text,
        };
        try {
            const response = await Axios.post('/api/chatbot/textQuery', textQueryVariables);

            for (let content of response.data.fulfillmentMessages) {
                conversation = {
                    who: 'bot',
                    content: content,
                };
                dispatch({
                    type: CHAT_REQUEST,
                    payload: conversation,
                });
            }
        } catch (error) {
            conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: '오류가 발생하였습니다.',
                    },
                },
            };
            dispatch({
                type: CHAT_REQUEST,
                payload: conversation,
            });
        }
    };

    const eventQuery = async (event) => {
        const eventQueryVariables = {
            event: event,
        };
        try {
            const response = await Axios.post('/api/chatbot/eventQuery', eventQueryVariables);
            for (let content of response.data.fulfillmentMessages) {
                let conversation = {
                    who: 'bot',
                    content: content,
                };
                dispatch({
                    type: CHAT_REQUEST,
                    payload: conversation,
                });
            }
        } catch (error) {
            let conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: '오류가 발생하였습니다.',
                    },
                },
            };
            dispatch({
                type: CHAT_REQUEST,
                payload: conversation,
            });
        }
    };

    const messageHanlder = (e) => {
        setMes(e.target.value);
    };

    const MesHanlder = (e) => {
        e.preventDefault();

        textQuery(Mes);

        setMes('');
    };

    const renderOneMessage = (message, i) => {
        console.log('message', message);

        if (message.content && message.content.text && message.content.text.text) {
            return <Message key={i} who={message.who} text={message.content.text.text} />;
        }
    };

    const renderMessage = (returnedMessages) => {
        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                return renderOneMessage(message, i);
            });
        } else {
            return null;
        }
    };

    const Enter = (e) => {
        if (e.key === 'Enter') {
            MesHanlder(e);
        }
    };

    return (
        <Col>
            <Col>
                <S.card>
                    <CardBody>{renderMessage(messagesFromRedux)} </CardBody>
                </S.card>
            </Col>
            <Row>
                <S.inputGroup>
                    <S.input placeholder="전달할 메세지를 입력해주세요..." onChange={messageHanlder} onKeyPress={Enter} value={Mes} type="text" data-testid="chat-message" />
                    <InputGroupAddon addonType="append">
                        <S.Sendbutton onClick={MesHanlder} data-testid="chat-btn">
                            보내기
                        </S.Sendbutton>
                    </InputGroupAddon>
                </S.inputGroup>
            </Row>
        </Col>
    );
};

export default Chat;
