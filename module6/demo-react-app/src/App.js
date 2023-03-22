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
import ClockDisplay from "./components/Clock";
import HookClockDisplay from "./components/HookClock";
import Login from "./components/Login";
import HookLogin from "./components/HookLogin";
import Reservation from "./components/Reservation";
import StudentList from "./components/StudentList";
import SignUpDialog from "./components/SignupDialog";
import NewBackground from "./components/NewBackground";
import Breweries from "./components/Breweries";
import RickNMorty from "./components/RickNMorty";
import Emoji from "./components/Emoji";
import Calculator from "./components/Calculator";

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
      <Greeting name="dum dum" />
      <Example />
      <Weather />
      <HookExample />
      <HookWeather />
      <ClockDisplay />

      <NewBackground>
        <HookClockDisplay />
      </NewBackground>

      <Login />
      <HookLogin />
      <Reservation />
      <StudentList />
      <SignUpDialog />
      <Breweries />
      <Emoji />
      <RickNMorty />
      <Calculator/>
    </div>
  );
}
export default App;
