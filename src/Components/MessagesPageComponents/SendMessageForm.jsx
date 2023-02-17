import { useState } from "react";
import { useAuth } from "../../Context/authProvider";
import { useSocket } from "../../Context/socket";
import Icon from "../LoaderPage/Icon";
import { GrFormAttachment } from "react-icons/gr";

const SendMessageComponent = ({ recipient, showAttach,
    setShowAttach,
    showEmojis,
    setShowEmojis,
    newMessage,
    setNewMessage,
    }) => {
    const { user } = useAuth();
    const [message, setMessage] = useState("");
    const socket = useSocket();
    const sendHandler = async (e) => {
        e.preventDefault();
        setMessage("");
        if (recipient?.type === "saved") {
            socket.emit("saveMessage", {
                user: user,
                message: message,
            });
            return;
        }
        else {
            socket.emit("sendMessage", {
                sender: user,
                receiver: recipient,
                message: message,
            });
        }
        console.log(message)
    };

    return (
        <div className="send-message-component">
            {
                showEmojis && (
                    <button onClick={() => setShowEmojis(false)}>
                        <Icon id="cancel" className="send-message-icon" />
                    </button>
                )
            }
            <button aria-label="Emojis" onClick={() => setShowEmojis(true)}>
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
            <form
                onSubmit={(e) => sendHandler(e)}

            >
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)
                    }
                    className="chat-input"
                    placeholder="Type a message"

                />

            </form>
        </div>
    );
};


export default SendMessageComponent;