import React from 'react'
import avatar from "../../assets/avatar.jpeg";
import { BsCameraVideo } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc"

const Header = ({ openProfileSidebar }) => {
  return (
    <header className="chat-header header">
      <div className="chat-header-avatar"
        onClick={openProfileSidebar}
      >
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
      <div className="chat-contact">
        <h2 className="chat-name">Donia</h2>
        <p className="chat-contact-type">
          online
        </p>
      </div>
      <div className="chat-appels">
        <button
          className="chat__action"
          aria-label="Search"

        >
          <BsCameraVideo />
        </button>
        <button
          className="chat__action"
          aria-label="Search"

        >
          <BsTelephone />
        </button>

      </div>
      <div className="chat-appels">
        <button
          className="chat__action"
          aria-label="Search"

        >
          <VscSearch />
        </button>
      </div>
    </header>
  )
}

export default Header