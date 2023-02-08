
import { useEffect, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { baseUrl } from "../../utils/api";
import { useData } from "../../Context/dataProvider"
import { socket } from "../../Context/socket";

const StartConversation = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const { groups, recipients, addRecipient, loading } = useData();
    useEffect(() => {
        socket.on("newRecipient", (info) => {
            addRecipient(info.sender)
        });
        return () => {
            socket.off("newRecipient", (info) => {
                addRecipient(info.sender);
            });
        };
    }, []);

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
        <div className="search-sidebar">
            {error !== "" && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={(e) => startMessage(e)}>
                <input
                    type="text"
                    placeholder="Recipient Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className="search" />
            </form>
            <div>
                <VscSearch className="VscSearch" />
            </div>
        </div>

    );
};


export default StartConversation