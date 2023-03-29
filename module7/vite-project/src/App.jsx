import "./App.css";
import WindowResizer from "./components/WindowResizer";
import Counter from "./components/Counter";
import Login from "./components/Login";
import { ThemeProvider } from "./context/ThemeContext";
import EmojiButton from "./components/EmojiButton";
import Calculator from "./components/Calculator";
import { EmojiProvider } from "./context/EmojiContext";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";
import NavBarMUI from "./components/NavBarMUI";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "./components/ErrorMessage";


function App() {
  return (
    <div className="App">
      <EmojiProvider>
        <ThemeProvider>
          <UserProvider>
            <NavBarMUI />

            
            <ErrorBoundary FallbackComponent={ErrorMessage}>
            <AppRoutes />
            </ErrorBoundary>
         

            <WindowResizer />

            <Counter />

            <EmojiButton />

            <Calculator />

            <Footer />
          </UserProvider>
        </ThemeProvider>
      </EmojiProvider>
    </div>
  );
}

export default App;
