import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { RiQuestionnaireLine } from 'react-icons/ri';
import Chat from '../Chat';
import { CHAT_RESET_REQUEST } from '../../../redux/types';

const ChatButton = () => {
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    const toggle = () => {
        dispatch({
            type: CHAT_RESET_REQUEST,
        });
        setModal(!modal);
    };
    return (
        <div>
            <Button onClick={toggle} id="fab" data-testid="chat-modal">
                <RiQuestionnaireLine style={{ margin: '0 0 20px -3.5px', fontSize:'42px' }}/>
                {/* <FontAwesomeIcon icon={faQuestion} size="xs" style={{ marginBottom: '16px' }} /> */}
            </Button>
            <Modal isOpen={modal} modalTransition={{ timeout: 700 }} toggle={toggle}>
                <ModalHeader toggle={toggle}>문의 사항 접수</ModalHeader>
                <Chat />
            </Modal>
        </div>
    );
};

export default ChatButton;
