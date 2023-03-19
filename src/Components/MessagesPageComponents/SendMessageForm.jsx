import { useState } from "react";
import { useAuth } from "../../Context/authProvider";
import { useSocket } from "../../Context/socket";
import Icon from "../LoaderPage/Icon";
 
const attachButtons = [
	{ icon: "attachRooms", label: "Choose room" },
	{ icon: "attachContacts", label: "Choose contact" },
	{ icon: "attachDocument", label: "Choose document" },
	{ icon: "attachCamera", label: "Use camera" },
	{ icon: "attachImage", label: "Choose image" },
];


const SendMessageComponent = ({ recipient, 
    
    showEmojis,
    setShowEmojis,
    newMessage,
    setNewMessage,
}) => {
    const { user } = useAuth();
    const [message, setMessage] = useState("");
    const [showAttach, setShowAttach] = useState(false);
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
                 <div className="">
                <button aria-label="Attach" onClick={() => setShowAttach(!showAttach)}>
                    <Icon
                        id="attach"
                        className={`chat-input-icon ${showAttach ? "chat-input-icon--pressed" : ""
                            }`}
                    />
                </button>
            </div>
            <button aria-label="Emojis" onClick={() => setShowEmojis(true)}>
                <Icon
                    id="smiley"
                    className={`send-message-icon ${showEmojis ? "send-message-icon-highlight" : ""
                        }`}
                />
            </button>

        
            
				<div
					className={`chat__attach ${showAttach ? "chat__attach--active" : ""}`}
				>
					{attachButtons.map((btn) => (
						<button
							className="chat__attach-btn"
							aria-label={btn.label}
							key={btn.label}
						>
							<Icon id={btn.icon} className="chat__attach-icon" />
						</button>
					))}
				</div>
 
        </div>
    );
};


export default SendMessageComponent;