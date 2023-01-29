import React from 'react'
import "../../../styles/main.scss"
import logo from "../../../assets/whatsappLogo.png";
import { HiOutlinePencilAlt } from "react-icons/hi";
import OptionsBtn from "./OptionBtn/OptionBtn";

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
          <div className="header-icons">
            <div>
              <button className='HiOutlinePencilAlt'>
                <HiOutlinePencilAlt />
              </button>
            </div>
            <div>
              <OptionsBtn
                className="sidebar__action"
                ariaLabel="Menu"
                iconId="menu"
                iconClassName="sidebar__action-icon"
                options={[
                  "Filters chats by",
                  "Starred Messages",
                ]}
              />
          </div>
     
          </div>
        </div>
      </header>
    </aside>
  )
}





export default Sidebar