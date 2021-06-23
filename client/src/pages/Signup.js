import React from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded, EmailRounded} from "@material-ui/icons"


const Signup = () => {

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
                        <TextField label="Username" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment> }} />
                        <TextField label="Email" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start"><EmailRounded /></InputAdornment> }} />
                        <TextField label="Password" margin="normal" type ="password"  id="standard-password-input" autoComplete="current-password" InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment> }} />
                        <div style={{ height: 20 }} />
                        <Button color="primary" variant="contained">
                            Submit
                        </Button>

                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    );
};

export default Signup;
