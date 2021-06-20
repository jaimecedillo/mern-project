import React from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from "@material-ui/icons"
const Login = () => {

    return (
        <div>
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={6}>
            
                    <img
                        src="https://blog.intercomassets.com/blog/wp-content/uploads/2019/05/INTERCOME_WELCOME_PAGE_061019_compressed-1800x840.jpg.optimal.jpg"
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
                        <TextField label="Username" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }} />
                        <TextField label="Password" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} />
                        <div style={{ height: 20 }} />
                        <Button color="primary" variant="contained">
                            Log in
                        </Button>
                        <div style={{ height: 20 }} />
                        <Button color="primary" variant="contained">
                            Create Account
                        </Button>

                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;
