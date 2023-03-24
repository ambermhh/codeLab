import "./App.css";
import WindowResizer from "./components/WindowResizer";
import Counter from "./components/Counter";
import Login from "./components/Login";
import { ThemeProvider } from "./context/ThemeContext";
import OnlineChat from "./components/OnlineChat";
import HookClockDisplay from "./components/HookClock";
import EmojiButton from "./components/EmojiButton";
import Calculator from "./components/Calculator";
import { EmojiProvider } from "./context/EmojiContext";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
    <EmojiProvider>
      <ThemeProvider>
        <NavBar/>
        <AppRoutes/>


        <WindowResizer />

        <Counter />

        <Login />

        <OnlineChat />

        <HookClockDisplay/>

        <EmojiButton/>

        <Calculator/>

        <Footer/>

        
      </ThemeProvider>
      </EmojiProvider>
    </div>
  );
}

export default App;
