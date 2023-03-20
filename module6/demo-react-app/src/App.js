import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import PropsDisplayer from "./components/PropsDisplayer";
import Comment from "./components/Comment";
import Greeting from "./components/Greeting";
import Example from "./components/Example";
import Weather from "./components/Weather";
import HookExample from "./components/HookExample";
import HookWeather from "./components/HookWeather";
import ClockDisplay from "./components/ClockDisplay";

function formatName(name) {
  return name.first + " " + name.last;
}

function App() {
  const name = { first: "Amber", last: "Hong" };

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>{formatName(name)}</h1>
      <MyComponent />
      <PropsDisplayer name="Amber" location="Syd" number={444} />
      <Comment user={comment.author} date={comment.date} text={comment.text} />
      <Greeting />
      <Example/>
      <Weather/>
      <HookExample/>
      <HookWeather/>
      <ClockDisplay/>
      
    </div>
  );
}
export default App;

