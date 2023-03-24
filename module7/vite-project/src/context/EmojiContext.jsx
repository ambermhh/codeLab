import React from "react";

export const EmojiContext = React.createContext("");

export const EmojiProvider = (props) => {
  const [emoji, setEmoji] = React.useState("🤨");


  return (
    <EmojiContext.Provider value={{emoji, setEmoji}}>
      {props.children}
    </EmojiContext.Provider>
  );
};

  
  