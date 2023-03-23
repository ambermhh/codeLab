import React, {useState} from "react";
import { useFormInput } from "../hooks/useFormInput";


function Login() {
  const usernameProps = useFormInput("");
  const passwordProps = useFormInput("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleLogin = (e) => {
    e.preventDefault();
    let username = usernameProps.value;
    let password = passwordProps.value;

    console.log(username + " " + password);

    //login successful/true if both values exist and match
    let isLoggedIn = username && password && username === password;

    setLoggedIn(isLoggedIn);

    if (!isLoggedIn) {
      let newAttempt = attempts + 1;

      if (newAttempt === 5) {
        setError(`Go Home..try later`);
      } else {
        setError(`Invalid username or password`);
      }
      setAttempts(newAttempt)
    }
  };

  return (
    <div className="Login componentBox">
      {/* if we're logged in, use the Hello component to say hello */}
      <div>{loggedIn ? "Hello" + usernameProps.value : "Please log in"}</div>
      {!loggedIn && attempts < 5 && (
        <form onSubmit={handleLogin}>
          <div className="formRow">
            <label htmlFor="username">Username: </label>
            {/* every time the input changes, store the latest value into state */}
            <input id="username" {...usernameProps} />
          </div>

          {/* add another form field for email address */}

          <div className="formRow">
            <label htmlFor="password">Password: </label>
            {/* every time the input changes, store the latest value into state */}
            <input type="password" id="password" {...passwordProps} />
          </div>

          <button>Login</button>
        </form>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}

export default Login;
