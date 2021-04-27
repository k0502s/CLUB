import React from 'react';
import { useSelector } from 'react-redux';
import ChatProfileImg from '../../../assets/img/chatProfile.png'
import * as S from '../Chat.style';

const Message = (props) => {
    const { user } = useSelector((state) => state.auth);
    return (
        <S.Msgwrap>
            {props.who === 'bot' ? (
                <li class="in">
                    <div class="chat-img">
                        <img alt="Avtar" src={ChatProfileImg} />
                    </div>
                    <div class="chat-body">
                        <div class="chat-message">
                            <span data-testid="chat-who">{props.who && '동호회 운영자'}</span>
                            <p data-testid="chat-text">{props.text}</p>
                        </div>
                    </div>
                </li>
            ) : (
                <li class="out">
                    <div class="chat-body">
                        <div class="chat-message">
                            <span data-testid="chat-who-me">{props.who && user.name}</span>
                            <p data-testid="chat-text-me">{props.text}</p>
                        </div>
                    </div>
                </li>
            )}
        </S.Msgwrap>
    );
};

export default Message;
