import React from 'react'
import ModalWrapper from "../ModalWrapper";
import { VscSearch } from "react-icons/vsc";
import ContactInfo from "../Home/Sidebar/Contact/ContactInfo";


const NewChat = ({ setShowModal }) => {
    return (
        <ModalWrapper
            callback={() => setShowModal(false)} ariaLabel="new-chat"
        >
            <div
                className="modalwrapper"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="new-chat-title">
                    <h3>New chat</h3>
                </div>
                <div className="new-chat-search">
                    <div>
                        <input className="search" placeholder="Search" />
                    </div>
                    <div>
                        <VscSearch className="VscSearch" />
                    </div>
                </div>
                <div className="contacts">
                    <ContactInfo />
                    <ContactInfo />
                    <ContactInfo />
                    <ContactInfo />
                    <ContactInfo />
                    <ContactInfo />
                    <ContactInfo />
                </div>
            </div>
        </ModalWrapper>
    )
}

export default NewChat