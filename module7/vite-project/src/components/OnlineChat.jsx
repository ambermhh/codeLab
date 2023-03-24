
import ChatAPI from "../apis/ChatAPI"
import FriendListItem from "./FriendListItem"
import ChatRecipientPicker from './ChatRecipientPicker';
import React, {useContext} from 'react'
import { ThemeContext, themes } from '../context/ThemeContext'

function OnlineChat() {
    const themeContext = useContext(ThemeContext)

    return (
        <div className="OnlineChat componentBox"style={{backgroundColor: themeContext.theme.background, color: themeContext.theme.foreground}} >
            <div className="row">
                <div className="friends">
                    All Friends:
                    {ChatAPI.friends.map(friend => (
                        <FriendListItem key={friend.id} friend={friend} />
                    ))}
                </div>
                <div className="picker">
                    <ChatRecipientPicker />
                </div>
            </div>
            <div className="row">
                <button onClick={() => ChatAPI.startAPI()}>Start Chat API</button>
                <button onClick={() => ChatAPI.stopAPI()}>Stop Chat API</button>
            </div>
            
        </div>
    )
}

export default OnlineChat