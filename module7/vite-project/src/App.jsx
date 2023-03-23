import { useState } from 'react'
import './App.css'
import WindowResizer from './components/WindowResizer'
import Counter from './components/Counter'
import Login from './components/Login'
import OnlineChat from './components/OnlineChat'

function App() {
 

  return (
    <div className="App">
      
    
      <WindowResizer/>
      <Counter/>
      <Login/>
      <OnlineChat/>
 
    </div>


  )
  
}




export default App
