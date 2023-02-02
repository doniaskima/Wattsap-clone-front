import React from 'react'
import { Link } from "react-router-dom";
import avatar from "../../../../assets/avatar.jpeg"

const Contact = () => {
    return (
        <Link
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
                    <h2 className="contact-name"> Sirine </h2>
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