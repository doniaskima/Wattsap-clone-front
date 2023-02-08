import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Header from "../Components/MessagesPageComponents/Header";
import ChatSidebar from '../Components/MessagesPageComponents/ChatSidebar';
import Profile from '../Components/Profile/Profile';
import SendMessage from "../Components/MessagesPageComponents/SendMessageForm";
import { DataProvider } from "../Context/dataProvider";
import { useAuth } from '../Context/authProvider';
import { useData } from '../Context/dataProvider';
import { useSocket } from '../Context/socket';
import { useLocation } from "react-router-dom";
import EmojiTab from "../Components/MessagesPageComponents/EmojisComponent";
import Spinner from "../Components/Spinner";


const Chats = () => {
    const { user } = useAuth();
    const socket = useSocket();
    const { pathname } = useLocation();
    const [showProfileSidebar, setShowProfileSidebar] = useState(false);

    const {
        messagesLoading,
        messages,
        fetchMessages,
        addMessageCallback,
        fetchSavedMessages,
        messageDeleteHandler,
    } = useData();
    const { state: recipient } = useLocation();
    let date;

    useEffect(() => {
        socket.on("message", addMessageCallback);
        socket.on("groupMessage", addMessageCallback);
        socket.on("savedMessage", addMessageCallback);
    })

    useEffect(() => {
        const fetch = async () => {
            if (isGroup) {
                await fetchMessages(user._id, recipient._id, "get_group_messages");
            } else if (recipient?.type !== "saved") {
                await fetchMessages(user._id, recipient._id, "get_messages");
            } else {
                await fetchSavedMessages(user._id);
            }
        };
        fetch();
    }, [recipient]);
    const openSidebar = (cb) => {
        // close any open sidebar first
        setShowProfileSidebar(false);
        // call callback fn
        cb(true);
    };
    useEffect(() => {
        socket.emit("connectUser", { name: user.name });
    }, []);

    return (
        <DataProvider>
            <div className="chats">
                <div className="chats-body">
                    <div className="chats-bg"></div>
                    <Header
                        recipient={recipient}
                        openProfileSidebar={() => openSidebar(setShowProfileSidebar)}
                    />
                    <div className="chat-messages">


                    </div>
                    <footer className="message-footer">
                        <SendMessage recipient={recipient} />
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