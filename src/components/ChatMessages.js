import React from "react";
import { Person } from 'react-bootstrap-icons';
import { ChatDots } from 'react-bootstrap-icons';


export default function ChatMessage(props) {
    return (
        <div className={`d-flex ${props.user && 'justify-content-end'}`}>
            {
                props.user ? (
                    <span className="message-right">
                        <span className="message-text">{props.messages}</span>
                        <Person className="message-icon" />
                    </span>
                ) :
                <span className="message-left">
                    <ChatDots className="message-icon" />
                    <span className="message-text">{props.messages}</span>
                </span>
                
            }
        </div>
    )
}