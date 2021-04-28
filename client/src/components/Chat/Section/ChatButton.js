import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, ModalHeader } from 'reactstrap';
import Chat from '../Chat';
import chatbotImg from '../../../assets/img/chatbot.png';
import { CHAT_RESET_REQUEST } from '../../../redux/types';
import * as S from '../Chat.style';

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
            <S.ModalBtn onClick={toggle} data-testid="chat-modal">
                <S.QueIcon />
            </S.ModalBtn>
            <S.ChatModal isOpen={modal} modalTransition={{ timeout: 700 }} toggle={toggle}>
                <ModalHeader toggle={toggle}></ModalHeader>

                <S.ChatCard isOpen={start}>
                    <Col>
                        <S.Span size={'50px'}>안녕하세요.</S.Span>
                        <S.Span size={'25px'}>문의 사항이 있으신가요?</S.Span>
                    </Col>
                    <Col>
                        <S.Img src={chatbotImg} />
                        <p>챗봇으로 문의해 보세요!</p>
                    </Col>
                    <Col>
                        <S.ChatBtn onClick={startbutton} isOpen={start}>
                            대화 시작하기
                        </S.ChatBtn>
                    </Col>
                </S.ChatCard>
                <S.ChatWrap isOpen={start}>
                    <Chat reset={reset} />
                </S.ChatWrap>
            </S.ChatModal>
        </>
    );
};

export default ChatButton;
