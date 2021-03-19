import React, { useState } from 'react';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import Chat from '../Chat';

const ChatButton = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button onClick={toggle} id="fab">
            <FontAwesomeIcon icon={faQuestion} size="xs" style={{marginBottom:'16px'}}/>
            </Button>
            <Modal isOpen={modal} modalTransition={{ timeout: 700 }} toggle={toggle} >
                <ModalHeader toggle={toggle}>문의 사항 접수</ModalHeader>
                <Chat />
            </Modal>
        </div>
    );
};

export default ChatButton;
