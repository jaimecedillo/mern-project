import React from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { EmailRounded, LockRounded } from "@material-ui/icons";
import ProductMenu from "../components/CategoryMenu";

const Home = () => {
    return (
        <div>
        <ProductMenu />
        <div className="container">
            <Grid container spacing={8}>
                <Grid className="ProdectMenu">
                
                </Grid>
            </Grid>
        </div>
        </div>
    );
};

export default Home;