import React from 'react'
import Header from "../Components/MessagesPageComponents/Header";
import ChatSidebar from '../Components/MessagesPageComponents/ChatSidebar';

const Chats = () => {
    const [showProfileSidebar, setShowProfileSidebar] = useState(false);
    return (
        <div className="chats">
            <div className="chats-body">
                <div className="chats-bg">yooo</div>
                <Header />
            </div>
            <ChatSidebar
                heading="Contact Info"
                active={showProfileSidebar}
                closeSidebar={() => setShowProfileSidebar(false)}
            >
                <Profile user={user} />
            </ChatSidebar>
        </div>
    )
}

export default Chats