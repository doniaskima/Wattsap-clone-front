import React from 'react';
import { useState } from 'react';
import { useAuth } from '../../Context/authProvider';
import { decryptMessage } from "../../utils/api";
import dayjs from "dayjs";

const Message = ({ msg, isAdmin, isGroup, messageDeleteHandler }) => {
  const { user } = useAuth();
  const time = dayjs(msg.createdAt).format("h.mm a");
  const decryptedMessage = decryptMessage(msg.key, msg.message, msg.iv);
  const [showMessageOptions, setShowMessageOptions] = useState(false);
  const isMessageSentByClient = msg?.sender?.name === user.name;

  return (
    <div
      onMouseEnter={() => setShowMessageOptions(true)}
      onMouseLeave={() => setShowMessageOptions(false)}
      className="message-component"
    >
      <div
        className={`message_send-by_client  ${isMessageSentByClient
          ? "message_is_send"
          : "message_is_not_byclient"
          }`}
      >
        {showMessageOptions && isAdmin && (
          <i
            role="button"
            aria-label="Delete Message"
            className={`trash ${isMessageSentByClient ? "left" : "right"}
          `}
            onClick={() => messageDeleteHandler(msg)}
          />
        )}
        ({
          isGroup && (
            <p className="">
              {!isMessageSentByClient && msg?.sender?.name}
            </p>
          )
        })
        <div className="decrypted-message">
          <span className="decrMessage">{decryptedMessage}</span>
          <span className="time-style">{time}</span>
        </div>
      </div>

    </div>
  )
}

export default Message