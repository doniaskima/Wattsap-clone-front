import React, { useState } from "react";
import Icon from "../LoaderPage/index";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";


const emojiTabs = [
  { icon: "recent", label: "Recent emojis", active: true },
  { icon: "emojiPeople", label: "People emojis", active: false },
  { icon: "emojiNature", label: "Nature emojis", active: false },
  { icon: "emojiFood", label: "Food emojis", active: false },
  { icon: "emojiActivity", label: "Activity emojis", active: false },
  { icon: "emojiTravel", label: "Travel emojis", active: false },
  { icon: "emojiObjects", label: "Object emojis", active: false },
  { icon: "emojiSymbols", label: "Symbol emojis", active: false },
  { icon: "emojiFlags", label: "Flag emojis", active: false },
];

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
