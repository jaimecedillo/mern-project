import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { EmailRounded, LockRounded } from "@material-ui/icons"
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from "react-router-dom";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

  // const handleFormSubmit = async event => {
  //   event.preventDefault();
  //   try {
  //     const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
  //     const token = mutationResponse.data.login.token;
  //     Auth.login(token);
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };


  };
  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6}>

          <img
            src="https://www.webwisewording.com/wp-content/uploads/aaron-burden-AvqpdLRjABs-unsplash.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="log in page image"
          />


        </Grid>
        <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{ padding: 10 }}>
          <div />
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300 }}>
            <Grid container justify="center">
              <h1>Login</h1>
            </Grid>
            <form onSubmit={handleFormSubmit}>
              <TextField label="Email" margin="normal" value={formState.email} onChange={handleChange} InputProps={{ startAdornment: <InputAdornment position="start"><EmailRounded /></InputAdornment> }} />
              <TextField label="Password" margin="normal" type="password" id="standard-password-input" autoComplete="current-password" value={formState.password} onChange={handleChange} InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} />
              <div style={{ height: 20 }} />
              <Button color="primary" variant="contained" type='submit'>
                Login
              </Button>
              <div style={{ height: 20 }} />
              <Button color="primary" variant="contained" type='sign-up' href="/signup">
                Create Account
              </Button>
            </form>
            {error && <div>Login failed</div>}
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
