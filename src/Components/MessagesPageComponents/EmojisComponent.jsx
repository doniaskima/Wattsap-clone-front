import React, { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";


 
const EmojiTray = ({ showEmojis, newMessage, setNewMessage }) => {
  const addEmoji = (emoji) => {
    setNewMessage(newMessage + emoji);
  };
  const [currentEmoji, setCurrentEmoji] = useState(null);
  return (
    <div
      className={`emojis__wrapper ${showEmojis ? "emojis__wrapper--active" : ""
        }`}
    >
      <Picker data={data} previewPosition="none" onEmojiSelect={(e) => {
        addEmoji(e.native);
        setShowEmojis(!showEmojis);
   
      }} />

    </div>
  );
};

export default EmojiTray;
