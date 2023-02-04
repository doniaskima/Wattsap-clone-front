import React from 'react';
import Icon from "../LoaderPage/Icon";

const ChatSidebar = ({ active, closeSidebar, heading, children }) => {
    return (
        <aside className={`chat-sidebar ${active ? "chat-sidebar--active" : ""}`}>
            <header>
                <button onClick={closeSidebar}>
                    <Icon id="cancel" className="chat-sidebar__header-icon" />
                    <h2 classNmae="chat-sidebar-heading">{heading}</h2>
                </button>
            </header>
            <div className="sidebar-content">{children}</div>
        </aside>
    )
}

export default ChatSidebar