import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../../utils/api";
import { useAuth } from "../../Context/authProvider";
import { useData } from "../../Context/dataProvider";
import { useSocket } from "../../Context/socket";
import { VscSearch } from "react-icons/vsc";


const StartConversation = ({ setShowStartMessage }) => {
    const socket = useSocket();
    const { user, emailValidate } = useAuth();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const { addRecipient } = useData();

    const startMessage = async (event) => {
        event.preventDefault();
        if (emailValidate(email)) {
            const {
                data: { status, user: recipient },
            } = await axios.get(`${baseUrl}/users/get_by_email/${email}`);
            if (status) {
                socket.emit("startMessage", {
                    senderId: user._id,
                    receiverEmail: email,
                    senderEmail: user.email,
                });
                addRecipient(recipient);
                setShowStartMessage(false);
                return;
            }
            setError("Recipient not found");
            return;
        }
        setError("enter valid email");
    };

    return (
        <>
            <div className="search-sidebar">
                <form onSubmit={(e) => startMessage(e)}>
                    <input
                        type="text"
                        className="search"
                        placeholder="Recipient Email"
                        value={email}
                        onChange={(e) => {
                            setError("");
                            setEmail(e.target.value);
                        }}
                    />
                    <button
                        type="submit"
                        disabled={email === ""}

                    >
                        <VscSearch className="VscSearch" />
                    </button>
                    <i
                        onClick={() => setShowStartMessage(false)}
                        className="fa fa-close ml-2"
                    ></i>
                </form>

            </div>

            {error !== "" && <p className="error">{error}</p>}</>

    );
};


export default StartConversation;