import React, { useState } from 'react'
import Header from "../Components/MessagesPageComponents/Header";
import ChatSidebar from '../Components/MessagesPageComponents/ChatSidebar';
import Profile from '../Components/Profile/Profile';
import SendMessage from "../Components/MessagesPageComponents/SendMessageForm";
import { DataProvider } from "../Context/dataProvider";

const Chats = () => {
    const [showProfileSidebar, setShowProfileSidebar] = useState(false);

    const openSidebar = (cb) => {
        // close any open sidebar first
        setShowProfileSidebar(false);

        // call callback fn
        cb(true);
    };
    return (
        <DataProvider>
            <div className="chats">
                <div className="chats-body">
                    <div className="chats-bg"></div>
                    <Header
                        openProfileSidebar={() => openSidebar(setShowProfileSidebar)}
                    />
                    <div className="chat-messages">

                    </div>
                    <footer className="message-footer">
                        <SendMessage />
                    </footer>
                </div>
                <ChatSidebar
                    heading="Contact Info"
                    active={showProfileSidebar}
                    closeSidebar={() => setShowProfileSidebar(false)}
                >
                    <Profile />
                </ChatSidebar>

            </div>
        </DataProvider>

    )
}

export default Chats