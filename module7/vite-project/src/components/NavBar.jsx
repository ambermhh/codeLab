import {NavLink, Link} from 'react-router-dom'

function NavBar() {
    return (
        <div className="NavBar">
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/dashboard">DashBoard</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar