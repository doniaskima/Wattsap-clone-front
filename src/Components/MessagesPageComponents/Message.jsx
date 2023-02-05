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

  return (
    <div>Message</div>
  )
}

export default Message