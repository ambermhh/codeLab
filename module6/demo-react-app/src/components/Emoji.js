import React from "react";

function EmojiButton() {
  const [emoji, setEmoji] = React.useState("🤨");

  function toggleEmoji() {
    if (emoji === "🤨") {
      setEmoji("😮‍💨🫰");
    } 
    else if (emoji === "😮‍💨🫰"){
        setEmoji("🫣")
    }
    else if(emoji === "🫣"){
      setEmoji("👋")
    }
    else {
        setEmoji("🤨")
    }
  }

  return (
    <div className="componentBox">
      <p className="emoji">{emoji}</p>

      <button className="emoji-button" onClick={toggleEmoji}>
        Try
      </button>
    </div>
  );
}

export default EmojiButton;
