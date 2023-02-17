import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../../../assets/avatar.jpeg"
import { useSocket } from '../../../../Context/socket';
import { useData } from "../../../../Context/dataProvider";

const Contact = ({ recipient, lastMessage }) => {
    const { recipients } = useData();
    const socket = useSocket();
    return (
        <Link
            to={recipient._id} key={recipient._id} state={recipient}
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
                    <h2 className="contact-name">{recipient.name} </h2>
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