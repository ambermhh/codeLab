import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import PropsDisplayer from "./PropsDisplayer";
import Comment from "./Comment";
import Greeting from "./Greeting";

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
    </div>
  );
}
export default App;
