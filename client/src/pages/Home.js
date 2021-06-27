import React from 'react';
import { Grid, TextField, Button, InputAdornment } from '@material-ui/core';
import { EmailRounded, LockRounded } from "@material-ui/icons";
import CategoryMenu from "../components/CategoryMenu";
import ContractorList from "../components/ContractorList";

const Home = () => {
    return (
        <>
            <CategoryMenu />
            <div>
            <ContractorList />
            </div>

        </>

    );
};

export default Home;