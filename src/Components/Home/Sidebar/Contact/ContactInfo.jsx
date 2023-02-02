import React from 'react'
import { Link } from "react-router-dom";
import avatar from "../../../../assets/avatar.jpeg"

const ContactInfo = () => {
    return (
        <Link
            className="sidebar-contact"
        >
            <div className="new-chat-contact-avatar">
                <img
                    src={avatar}
                    alt="avatar"
                    className="avatar"
                />
            </div>
            <div className="sidebar-contact-content">
                <div className="top-content">
                    <h2 className="contact-name"> Sirine </h2>

                </div>

            </div>
        </Link>
    )
}

export default ContactInfo