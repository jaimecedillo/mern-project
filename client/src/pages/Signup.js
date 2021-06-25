import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded, EmailRounded } from "@material-ui/icons"
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const [addUser, { error }] = useMutation(ADD_USER);

  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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
              <h1>Sign Up</h1>
            </Grid>
            <form onSubmit={handleFormSubmit}>
              <TextField label="Username" margin="normal" value={formState.username} onChange={handleChange} InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }} />
              <TextField label="Email" margin="normal" value={formState.email} onChange={handleChange} InputProps={{ startAdornment: <InputAdornment position="start"><EmailRounded /></InputAdornment> }} />
              <TextField label="Password" margin="normal" type="password" value={formState.password} onChange={handleChange} id="standard-password-input" autoComplete="current-password" InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} />
              <div style={{ height: 20 }} />
              <Button color="primary" variant="contained">
                Submit
              </Button>
            </form>
            {error && <div>Sign up failed</div>}
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
