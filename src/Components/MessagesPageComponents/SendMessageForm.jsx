import React from 'react';
import Icon from "../LoaderPage/Icon";
import { GrFormAttachment } from "react-icons/gr";
 

const SendMessageForm = ({
    showAttach,
    setShowAttach,
    showEmojis,
    setShowEmojis,
    newMessage,
    setNewMessage,
    submitNewMessage,
}) => {

    return (
        <div className="send-message-component">
            {
                showEmojis && (
                    <button onClick={() => setShowEmojis(false)}>
                        <Icon id="cancel" className="send-message-icon" />
                    </button>
                )
            }
            <button aria-label="Emojis" onClick={() => setEmojis(true)}>
                <Icon
                    id="smiley"
                    className={`send-message-icon ${showEmojis ? "send-message-icon-highlight" : ""
                        }`}
                />
            </button>
            <div className="">
                <button aria-label="Attach" onClick={() => setShowAttach(!showAttach)}>
                    <Icon
                        id="attach"
                        className={`chat-input-icon ${showAttach ? "chat-input-icon--pressed" : ""
                            }`}
                    />
                </button>
            </div>
            <input
                className="chat-input"
                placeholder="Type a message"
            />

        </div>
    )
}

export default SendMessageForm