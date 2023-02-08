import React, { useEffect, useState } from 'react'
import "../../../styles/main.scss"
import logo from "../../../assets/whatsappLogo.png";
import { HiOutlinePencilAlt } from "react-icons/hi";
import OptionsBtn from "./OptionBtn/OptionBtn";
import { VscSearch } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import Contact from "./Contact/Contact";
import styled from 'styled-components';
import NewChat from '../../MessagesPageComponents/NewChat';
import { useData } from "../../../Context/dataProvider"
import { useAuth } from "../../../Context/authProvider"
import { baseUrl } from "../../../utils/api"
import { useSocket } from "../../../Context/socket";
import Spinner from "../../Spinner"

const Sidebar = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const socket = useSocket();
  const { groups, recipients, addRecipient, loading } = useData();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    socket.on("newRecipient", (info) => {
      addRecipient(info.sender)
    });
    return () => {
      socket.off("newRecipient", (info) => {
        addRecipient(info.sender);
      });
    };
  }, []);

  const startMessage = async (event) => {
    event.preventDefault();
    if (emailValidate(email)) {
      const {
        data: { status, user: recipient },
      } = await axios.get(`${BASE_URL}/users/get_by_email/${email}`);
      if (status) {
        socket.emit("startMessage", {
          senderId: user._id,
          receiverEmail: email,
          senderEmail: user.email,
        });
        addRecipient(recipient);
        setShowStartMessage(false);
        return;
      }
      setError("Recipient not found");
      return;
    }
    setError("enter valid email");
  };


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
                  "logout"
                ]}
              />
            </div>

          </div>
        </div>
      </header>
      <div className="search-sidebar">
        <form onSubmit={(e) => startMessage(e)}>
          <input
            type="text"
            placeholder="Recipient Email"
            value={email}
            onChange={(e) => {
              setError("");
              setEmail(e.target.value);
            }}
            className="search" />
        </form>
        <div>
          <VscSearch className="VscSearch" />
        </div>
      </div>
      <Contacts>
        {loading ? (
          <div className="flex justify-center mt-2">
            <Spinner />
          </div>
        ) : (
          recipients?.map((recipient) => {
            return (
              <Link to={recipient._id} key={recipient._id} state={recipient}>
                <Contact>{recipient.name}</Contact>
              </Link>
            );
          })
        )}
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