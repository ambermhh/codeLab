import React from "react";
import { EmojiContext } from "../context/EmojiContext";

function EmojiButton() {
  const {emoji, setEmoji} = React.useContext(EmojiContext);

  const toggleEmoji = () => {
    if (emoji === "🤨") {
      setEmoji("🥰🫰");
    } 
    else if (emoji === "🥰🫰"){
        setEmoji("🫣")
    }
    else if(emoji === "🫣"){
      setEmoji("🕺")
    }
    else {
        setEmoji("🤨")
    }
  }

  return (
    <div className="componentBox">
      <p className="emoji">{emoji}</p>

      <button className="emoji-button" onClick={toggleEmoji}>
        Try Me
      </button>
    </div>
  );
}

export default EmojiButton;
