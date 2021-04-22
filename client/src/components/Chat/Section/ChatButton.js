import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Chat from '../Chat';
import * as S from '../Chat.style';
import chatbotImg from '../../../assets/img/chatbot.png';
import { CHAT_RESET_REQUEST } from '../../../redux/types';

const ChatButton = () => {
    const [modal, setModal] = useState(false);
    const [start, setStart] = useState(false);
    const [reset, setReset] = useState('qu1');

    const dispatch = useDispatch();
    const toggle = () => {
        dispatch({
            type: CHAT_RESET_REQUEST,
        });
        setModal(!modal);
        setStart(false);
        setReset('reset');
    };
    const startbutton = () => {
        setStart(!start);
        setReset('qu1');
    };

    return (
        <>
            <S.chatbutton onClick={toggle} data-testid="chat-modal">
                <S.QueIcon />
            </S.chatbutton>
            <S.modal isOpen={modal} modalTransition={{ timeout: 700 }} toggle={toggle}>
                <ModalHeader toggle={toggle}></ModalHeader>

                <S.card isOpen={start}>
                    <Col>
                        <S.span size={'50px'}>안녕하세요.</S.span>
                        <S.span size={'25px'}>문의 사항이 있으신가요?</S.span>
                    </Col>
                    <Col>
                        <S.Img src={chatbotImg} />
                        <strong>챗봇으로 문의해 보세요!</strong>
                    </Col>
                    <Col>
                        <S.button onClick={startbutton} isOpen={start}>
                            대화 시작하기
                        </S.button>
                    </Col>
                </S.card>
                <S.wrap isOpen={start}>
                    <Chat reset={reset} />
                </S.wrap>
            </S.modal>
        </>
    );
};

export default ChatButton;
