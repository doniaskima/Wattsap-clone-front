import React, { useState } from 'react'
import "../../../styles/main.scss"
import logo from "../../../assets/whatsappLogo.png";
import { HiOutlinePencilAlt } from "react-icons/hi";
import OptionsBtn from "./OptionBtn/OptionBtn";
import { VscSearch } from "react-icons/vsc";
import Contact from "./Contact/Contact";
import styled from 'styled-components';
import NewChat from '../../MessagesPageComponents/NewChat';


const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);

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
                <HiOutlinePencilAlt
                  onClick={() => setShowModal(!showModal)}
                  className="hioutlinepencil-stle" />
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
      <div className="search-sidebar">
        <div>
          <input className="search" placeholder="Search or start a new chat" />
        </div>
        <div>
          <VscSearch className="VscSearch" />
        </div>
      </div>
      <Contacts>
        <Contact />
        <Contact />
        <Contact />
      </Contacts>
      {showModal && <NewChat setShowModal={setShowModal} />}
    </aside>
  )
}


export const Contacts = styled.div`
  margin-top: 10px;
  overflow-y: scroll;
`


export default Sidebar