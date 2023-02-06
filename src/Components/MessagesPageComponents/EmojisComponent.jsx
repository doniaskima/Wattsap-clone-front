import React from 'react';
import Icon from "../LoaderPage/Icon";

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


const EmojisComponent = ({ ShowEmojis, newMessage, setNewMessage }) => {

  const addEmoji = (emoji) => {
    setNewMessage(newMessage + emoji);
  }
  return (
    <div className={`emoji-wrapper ${showEmojis} ? "emoji-wrapper--active : "`}>
      <div className="emojis-tabs">
        {emojiTabs.map((tab) => (
          <div
            className={`emojis-tabs ${tab.active ? "emojis__tab--active" : ""}`}
            key={tab.label}
          >
            <button aria-label={tab.label} key={tab.icon}>
              <Icon id={tab.icon} className="emojis__tab-icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmojisComponent