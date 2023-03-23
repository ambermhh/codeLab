import React from "react";
import { Hello } from "./Hello";

function HookLogin() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [error, setError] = React.useState("");
  const [attempts, setAttempts] = React.useState(0);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username);

    //login successful/true if both values exist and match
    let isLoggedIn = username && password && username === password;

    setLoggedIn(isLoggedIn);

  if (!isLoggedIn){
    let newAttempt = attempts + 1

    if(newAttempt === 5){
        setError(`Go Home..try later`)
    }
    else{
        setError(`Invalid username or password`)
    }
    setAttempts(newAttempt)
  }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    console.log(target);

    if (target.name === "username") {
      setUsername(target.value);
    }

    if (target.name === "password") {
      setPassword(target.value);
    }
  };

  return (
    <div className="Login componentBox">
      {/* if we're logged in, use the Hello component to say hello */}
      <div>{loggedIn ? <Hello name={username} /> : "Please log in"}</div>

      {!loggedIn && (
        <form onSubmit={handleLogin}>
          <div className="formRow">
            <label htmlFor="username">Hook Username: </label>
            {/* every time the input changes, store the latest value into state */}
            <input
              id="username"
              value={username}
              name="username"
              onChange={handleInputChange}
            />
          </div>

          {/* add another form field for email address */}

          <div className="formRow">
            <label htmlFor="password">Hook Password: </label>
            {/* every time the input changes, store the latest value into state */}
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          <button>Login</button>
        </form>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}

export default HookLogin;
