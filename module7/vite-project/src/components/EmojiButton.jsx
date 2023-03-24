import React,{useContext} from "react";
import { EmojiContext } from "../context/EmojiContext";
import { ThemeContext, themes } from '../context/ThemeContext'

function EmojiButton() {
  const {emoji, setEmoji} = React.useContext(EmojiContext);
  const themeContext = useContext(ThemeContext)

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
    <div className="componentBox" style={{backgroundColor: themeContext.theme.background, color: themeContext.theme.foreground}}>
      <p className="emoji">{emoji}</p>

      <button className="emoji-button" onClick={toggleEmoji}>
        Try Me
      </button>
    </div>
  );
}

export default EmojiButton;
