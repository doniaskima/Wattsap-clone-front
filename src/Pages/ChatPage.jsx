import React, { useEffect, useRef, useState } from "react";
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
import Spinner from "../Components/Spinner";
import Message from "../Components/MessagesPageComponents/Message";
import Icon from "../Components/LoaderPage/Icon";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";


const Chats = () => {
    const lastMsgRef = useRef(null);
    const [newMessage, setNewMessage] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);
    const [message, setMessage] = useState("");
    const { user } = useAuth();
    const addEmoji = (emoji) => {
        setNewMessage(newMessage + emoji);
    };
    const [currentEmoji, setCurrentEmoji] = useState(null);
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

    const headerTitle = recipient?.type === "saved" ? "Saved Messages" : recipient.name;
    const [showMenu, setShowMenu] = useState(false);
    const [showRecipientDetails, setShowRecipientDetails] = useState(false);
    const isGroup = recipient?.groupCode ? true : false;
    const isAdmin = isGroup
        ? recipient?.admin === user._id
            ? true
            : false
        : true;

    useEffect(() => {
        socket.on("message", addMessageCallback);
        socket.on("groupMessage", addMessageCallback);
        socket.on("savedMessage", addMessageCallback);
        if (isGroup) {
            socket.emit("joinGroup", {
                userInfo: { name: user.name, _id: user._id, email: user.email },
                group: recipient,
            });
        }
        return () => {
            socket.off("message", addMessageCallback);
            socket.off("groupMessage", addMessageCallback);
            socket.off("savedMessage", addMessageCallback);
        };
    }, []);

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

    const scrollToLastMsg = () => {
        lastMsgRef.current.scrollIntoView({ behavior: 'smooth' });
    };


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
        scrollToLastMsg();
    };
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
                        {messagesLoading ? (
                            <div className="spinner">
                                <Spinner />
                            </div>
                        ) : (
                            messages.map((msg, index) => {
                                const currentDate = dayjs(msg?.createdAt).format("DD-MM-YYYY");
                                let showDate = index === 0 ? true : date === currentDate ? false : true;
                                date =
                                    index === 0
                                        ? currentDate
                                        : date === currentDate
                                            ? date
                                            : currentDate;
                                return (
                                    <div key={msg?.messageId}>
                                        {showDate && (
                                            <p className="showdata">
                                                <span className="showdata">
                                                    {date}
                                                </span>
                                            </p>
                                        )}
                                        <Message
                                            msg={msg}
                                            isAdmin={isAdmin}
                                            isGroup={isGroup}
                                            messageDeleteHandler={messageDeleteHandler}
                                        />
                                    </div>
                                );
                            })
                        )}
                    </div>
                    <footer className="message-footer">
                        <button
                            className="chat__scroll-btn"
                            aria-label="scroll down"
                            onClick={scrollToLastMsg}
                        >
                            <Icon id="downArrow" />
                        </button>
                        <div className="flex">
                            <div>
                                <SendMessage
                                    recipient={recipient}
                                    showEmojis={showEmojis}
                                    setShowEmojis={setShowEmojis}
                                    newMessage={newMessage}
                                    setNewMessage={setNewMessage}
                                />
                            </div>

                            <form
                                onSubmit={(e) => sendHandler(e)}

                            >
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)
                                    }
                                    className="chat-input"
                                    placeholder="Type a message"

                                />

                            </form>
                        </div>
                    </footer>
                    <div
                        className={`emojis__wrapper ${showEmojis ? "emojis__wrapper--active" : ""
                            }`}
                    >
                        <Picker data={data} previewPosition="none" onEmojiSelect={(e) => {
                            setCurrentEmoji(e.native);
                            setMessage(message + e.native);
                            console.log(currentEmoji);

                        }} />
                    </div>
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