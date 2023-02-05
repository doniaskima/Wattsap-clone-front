import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../../../assets/avatar.jpeg"
import { useSocket } from '../../../../Context/socket';
import { useData } from "../../../../Context/dataProvider";

const Contact = () => {
    const socket = useSocket();
    const [showStartMessage, setShowStartMessage] = useState(false);
    const { groups, recipients, addRecipient, loading } = useData();

    useEffect(() => {
        socket.on("newRecipient", (info) => {
            addRecipient(info.sender);
        });

        return () => {
            socket.off("newRecipient", (info) => {
                addRecipient(info.sender);
            });
        };
    }, []);

    return (
        <Link
            // to={recipient._id} key={recipient._id} state={recipient}
            className="sidebar-contact"
        >
            <div className="sidebar-contact-avatar">
                <img
                    src={avatar}
                    alt="avatar"
                    className="avatar"
                />
            </div>
            <div className="sidebar-contact-content">
                <div className="top-content">
                    <h2 className="contact-name">Donia </h2>
                    <span className="contact-time">
                        9:20 PM
                    </span>
                </div>
                <div className="bottom-content">
                    <span className="last-message">Yoo buddy i miss u</span>
                </div>
            </div>
        </Link>
    )
}

export default Contact