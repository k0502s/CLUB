import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Section/Message';
import { CHAT_REQUEST } from '../../redux/types';
import { Input, InputGroupAddon, Button, InputGroup, Row, Col, CardBody, Card } from 'reactstrap';
// import Card from './Sections/Card';

const Chat = () => {
    const dispatch = useDispatch();
    const messagesFromRedux = useSelector((state) => state.message.messages);
    const [Mes, setMes] = useState('');

    useEffect(() => {
        eventQuery('qu1');
    }, []);

    const textQuery = async (text) => {
        //  First  Need to  take care of the message I sent
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

        // console.log('text I sent', conversation)

        // We need to take care of the message Chatbot sent
        const textQueryVariables = {
            text: text,
        };
        try {
            //I will send request to the textQuery ROUTE
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
        // We need to take care of the message Chatbot sent
        const eventQueryVariables = {
            event: event,
        };
        try {
            //I will send request to the textQuery ROUTE
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
        //we will send request to text query route

        setMes(e.target.value);
    };

    const MesHanlder = (e) => {
        e.preventDefault();

        textQuery(Mes);

        setMes('');
    };

    //cofs.tistory.com/12 [CofS]

    // const renderCards = (cards) => {
    //     return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />);
    // };

    const renderOneMessage = (message, i) => {
        console.log('message', message);

        // we need to give some condition here to separate message kinds

        // template for normal text
        if (message.content && message.content.text && message.content.text.text) {
            return <Message key={i} who={message.who} text={message.content.text.text} />;
            // } else if (message.content && message.content.payload.fields.card) {
            //     const AvatarSrc = message.who === 'bot' ? <Icon type="robot" /> : <Icon type="smile" />;

            //     return (
            //         <div>
            //             <List.Item style={{ padding: '1rem' }}>
            //                 <List.Item.Meta avatar={<Avatar icon={AvatarSrc} />} title={message.who} description={renderCards(message.content.payload.fields.card.listValue.values)} />
            //             </List.Item>
            //         </div>
            //     );
        }

        // template for card message
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

    return (
        <Col >
            <Col>
                <Card style={{ height: 460, overflow: 'auto', border: '1px'}}>
                    <CardBody>{renderMessage(messagesFromRedux)} </CardBody>
                </Card>
            </Col>
            <Row>
                <InputGroup>
                    <Input
                        style={{
                            margin: 0,
                            height: 50,
                            padding: '5px',
                            fontSize: '1rem',
                        }}
                        placeholder="전달할 메세지를 입력해주세요..."
                        onChange={messageHanlder}
                        value={Mes}
                        type="text"
                    />
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" onClick={MesHanlder}>
                            보내기
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Row>
        </Col>
    );
};

export default Chat;
