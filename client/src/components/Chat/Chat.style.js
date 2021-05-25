import styled from 'styled-components';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { Col, Card, Input, CardFooter, CardHeader, CardBody, Button, InputGroup, Modal } from 'reactstrap';

// Chat Modal Button CSS //
const QueIcon = styled(RiQuestionnaireLine)`
    margin: 0 0 10px 0px;
    font-size: 43px;
`;
const ChatCard = styled(Card)`
    height: 500px;
    overflow: auto;
    border: 1px;
    background-color: #4c443c;
    border-radius: 0;
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
    & div.col {
        padding: 0;
        text-align: center;
    }
`;
const Img = styled.img`
    width: 250px;
    height: 250px;
    margin: 0 0 15px 0;
`;
const Span = styled.span`
    font-size: ${(props) => props.size};
    padding: 5px;
    color: #fff;
    display: block;
    background-color: #333;
`;
const ChatBtn = styled(Button)`
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
    border-radius: 20px;
    margin: 0 auto;
    width: 250px;
    background-color: #333;
    border: 1px;
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;

// Chat Modal button CSS

const ChatModal = styled(Modal)`
    margin-top: 30px;
    & div.modal-header {
        padding: 6px 15px 0px 0;
        background-color: #1c685e;
        border: 1px;
    }
`;
const ChatWrap = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; ;
`;
const ModalBtn = styled.button`
    width: 60px;
    height: 60px;
    background-color: #48877f;
    border-radius: 50%;
    box-shadow: 0 6px 10px 0 rgb(55, 54, 54);
    transition: all 0.1s ease-in-out;
    font-size: 50px;
    color: white;
    text-align: center;
    line-height: 70px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border: 1px;
    z-index: 99;

    &:hover {
        box-shadow: 0 6px 14px 0 #666;
        transform: scale(1.05);
    }
`;

// Chat Input CSS //

const ChatInputGroup = styled(InputGroup)`
    width: 94.5%;
    margin: 0 auto;
`;
const ChatInput = styled(Input)`
    margin: 0;
    height: 50;
    padding: 5px;
    font-size: 1rem;
    &:focus {
        outline: none;
    }
`;
const Sendbutton = styled(Button)`
    background-color: #333;
    border: 1px;
    border-radius: 0;
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;

// Chat Msg CSS

const Msgwrap = styled.ul`
    padding: 0;
    font-size: 13px;
    font-family: 'none', sans-serif;
    & li {
        margin-bottom: 10px;
        overflow: auto;
        color: #ffffff;
    }

    & div.chat-img {
        float: left;
        width: 48px;
    }

    & div.chat-img img {
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        width: 100%;
    }

    & div.chat-message {
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        background: #1c685e;
        display: inline-block;
        padding: 10px 20px;
        position: relative;
    }

    & div.chat-message:before {
        content: '';
        position: absolute;
        top: 20.5px;
        width: 0;
        height: 0;
    }

    & div.chat-message span {
        margin: 0 0 5px 0;
        font-weight: 600;
        line-height: 100%;
        font-size: 15px;
    }

    & div.chat-message p {
        line-height: 18px;
        margin: 0;
        padding: 0;
    }

    & div.chat-body {
        margin-left: 20px;
        float: left;
        width: 70%;
    }

    & li.in div.chat-message:before {
        left: -12px;
        border-bottom: 20px solid transparent;
        border-right: 20px solid #1c685e;
    }

    & li.out div.chat-img {
        float: right;
    }

    & li.out div.chat-body {
        float: right;
        margin-right: 20px;
        text-align: right;
    }

    & li.out div.chat-message {
        background: #fc6d4c;
    }

    & li.out div.chat-message:before {
        right: -12px;
        border-bottom: 20px solid transparent;
        border-left: 20px solid #fc6d4c;
    }
`;

export { QueIcon, ModalBtn, ChatBtn, Sendbutton, ChatCard, ChatInput, ChatWrap, Img, Span, ChatInputGroup, ChatModal, Msgwrap };
