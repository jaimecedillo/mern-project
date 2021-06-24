
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <AppBar position="static">
            <Toolbar>
          
                <Typography variant="h4" className={classes.title}>
                {/* <Link to="/"> */}
                    Jacks of All Trades
                    {/* </Link> */}
                </Typography>
                <Button color="inherit" onClick={handleOpen}>
                    Signup
                </Button>
                <Button color="inherit" onClick={handleOpen}>
                    Log in
                </Button>
                <Button color="inherit" onClick={handleOpen}>
                    Donate
                </Button>
            </Toolbar>

        </AppBar>
    );
};

export default Navbar;