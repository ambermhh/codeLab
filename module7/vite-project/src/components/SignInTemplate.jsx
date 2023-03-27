import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useFormInput from "../hooks/useFormInput";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInTemplate() {
  // const usernameProps = useFormInput("");
  // const passwordProps = useFormInput("");
  const { users, setUsers } = useContext(UserContext);
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let username = usernameProps.value;
    // let password = passwordProps.value;

    console.log(username + " " + password);

    //login successful/true if both values exist and match
    let isLoggedIn = username && password && username === password;

    // setLoggedIn(isLoggedIn);

    if (!isLoggedIn) {
      let newAttempt = attempts + 1;

      if (newAttempt === 5) {
        setError(`Go Home..try later`);
      } else {
        setError(`Invalid username or password`);
      }
      setAttempts(newAttempt);
    }
    else{
      setUsers(username);
      setError("")
    }
    setLoggedIn(isLoggedIn)
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          <div>{loggedIn ? "Hello" + username : "Please log in"}</div>
            Sign in
          </Typography>
          {!loggedIn && attempts < 5 && (

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
 )} </Box>
    {error && <div>{error}</div>}
        <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
    </ThemeProvider>
  );
}
