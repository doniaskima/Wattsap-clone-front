import React from 'react'
import "../../../styles/main.scss"
import logo from "../../../assets/whatsappLogo.png";
import { HiOutlinePencilAlt } from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <div className="wattsap-logo">
          <div className="img-wattsap">
            <img src={logo} alt="wattsap-logo" className="watt-img" />
          </div>
          <h3>WattsApp</h3>
        </div>
        <div className="chats-header">
          <div className="chats-title">
            <h1>Chats</h1>
          </div>
          <dv className="header-icons">
            <button>
              <HiOutlinePencilAlt/>
            </button>
            <button></button>
          </dv>
        </div>
      </header>
    </aside>
  )
}





export default Sidebar