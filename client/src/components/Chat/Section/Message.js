import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { UserOutlined } from '@ant-design/icons';

const Message = (props) => {
    return (
        			<ul class="chat-list">
        				{props.who === 'bot' ? 
						(<li class="in">
        					<div class="chat-img">
        						<img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
        					</div>
        					<div class="chat-body">
        						<div class="chat-message">
        							<h5 data-testid='chat-who'>{props.who}</h5>
        							<p data-testid='chat-text'>{props.text}</p>
        						</div>
        					</div>
        				</li> ) : (
        				<li class="out">
        					<div class="chat-body">
        						<div class="chat-message">
        							<h5 data-testid='chat-who-me'>{props.who}</h5>
        							<p data-testid='chat-text-me'>{props.text}</p>
        						</div>
        					</div>
        				</li>) }
        			</ul>
    );
};

export default Message;
