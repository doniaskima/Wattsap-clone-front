import React from 'react';
import Icon from "../LoaderPage/Icon"

const attachButtons = [
    { icon: "attachRooms", label: "Choose room" },
    { icon: "attachContacts", label: "Choose contact" },
    { icon: "attachDocument", label: "Choose document" },
    { icon: "attachCamera", label: "Use camera" },
    { icon: "attachImage", label: "Choose image" },
];


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

        </div>
    )
}

export default SendMessageForm