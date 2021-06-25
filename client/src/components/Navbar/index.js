import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }));


const Navbar = () => {
    const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    return (
       
          <div className={classes.root}>
          
            <AppBar position="static">
              <Toolbar>
                
                <Typography variant="h4" className={classes.title}>
                  Jacks of all Trades
                </Typography>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"   onClick={handleMenu}>
                  <MenuIcon />
                </IconButton>
                  <div>
                  
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Home</MenuItem>
                      <MenuItem onClick={handleClose}>Login</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                      <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                      <MenuItem onClick={handleClose}>Donate</MenuItem>
                    </Menu>
                  </div>
                
              </Toolbar>
            </AppBar>
          </div>
        );
      };
    

export default Navbar;