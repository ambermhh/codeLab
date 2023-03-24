import React, {useContext,} from 'react'
import { ThemeContext, themes } from '../context/ThemeContext'

export default function Theme () {
const themeContext = useContext(ThemeContext)
const darkMode = themeContext.theme.background === themes.dark.background 
const lightMode = themeContext.theme.background === themes.light.background

return (
    <div className='theme'>
    <button className='theme-dark-button' value={darkMode} onClick={() =>themeContext.setTheme(themes.dark)}>Dark Mode</button>
    <button className='theme-light-button' value={lightMode} onClick={() =>themeContext.setTheme(themes.light)}>Light Mode</button>
</div>
)
}

