import React from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

import { EmojiContext } from '../context/EmojiContext';
function Posts () {
    const navigate = useNavigate();

    return (
        <div className="Dashboard componentBox">
            <h1>Want to know something serious?</h1>

            <Outlet />            
            <button onClick={() => navigate('postsmessages')}>Show Messages</button>

        </div>
    )
}

export function PostsMessages(props) {
    const { emoji } = React.useContext(EmojiContext);

    return (
        <div className="PostsMessages">
            <h1>{emoji}</h1>

            <h2>"When I wrote this code, only me and God knew how it works. Now only God knows..."</h2>
        </div>
    )
}



export default Posts
