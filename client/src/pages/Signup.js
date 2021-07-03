import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded, EmailRounded } from "@material-ui/icons"
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

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
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
          
        <form onSubmit={handleFormSubmit}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300 }}>
            <Grid container justify="center">
              <h1>Sign Up</h1>
            </Grid>
          
              <TextField label="First Name" margin="normal"  id="firstName" onChange={handleChange} InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }} />
              <TextField label="Last Name" margin="normal"    id="lastName" onChange={handleChange} InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }} />
              <TextField label="Email" margin="normal"  id="email" onChange={handleChange} InputProps={{ startAdornment: <InputAdornment position="start"><EmailRounded /></InputAdornment> }} />
              <TextField label="Password" margin="normal"  id="pwd" type="password"  onChange={handleChange} id="standard-password-input" autoComplete="current-password" InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} />
              <div style={{ height: 20 }} />
              <Button color="primary" variant="contained" type='submit'>
                Submit
              </Button>
          
            {error && <div>Sign up failed</div>}
          </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
