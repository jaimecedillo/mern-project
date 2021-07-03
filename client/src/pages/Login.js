import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { EmailRounded, LockRounded } from "@material-ui/icons"
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  
  // update state based on form input changes
const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };


  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
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
        
           <form onSubmit={handleFormSubmit}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300 }}>
            <Grid container justify="center" >
              <h1>Login</h1>
            </Grid>
            
              <TextField label="Email" name="email" type="email" id="email"margin="normal"  onChange={handleChange} InputProps={{ startAdornment: <InputAdornment position="start"><EmailRounded /></InputAdornment> }} />
              <TextField label="Password" name="password" type="password"margin="normal" type="password" id="standard-password-input" autoComplete="current-password" onChange={handleChange} InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} />
                  
              {
          error ? <div>
            <p className="error-text" >The provided credentials are incorrect</p>
          </div> : null
        }
              <div style={{ height: 20 }} />
              <Button color="primary" variant="contained" type='submit'>
                Login
              </Button>
              <div style={{ height: 20 }} />
              <Button color="primary" variant="contained" type='sign-up' href="/signup">
                Create Account
              </Button>
     
       
          </div>
         
        </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
