import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';
import Donate from '../Donate'

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
  [theme.breakpoints.up('lg')]: {
  },
  photo: {
    height: "45px",
    width: "45px",
    margin:"2px"
  }

 
}));


const Navbar = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [modalOpen, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL)
    setAnchorEl(null);
  };



  return (

    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title} onClick={() => { handleMenuClick('/') }}>
          <img src="https://static8.depositphotos.com/1030387/806/v/450/depositphotos_8069175-stock-illustration-handyman.jpg" alt="loading" className={classes.photo}/> Jacks of all Trades
          </Typography>
          <div>
            {isMobile ? (
              <>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
                  <MenuIcon />
                </IconButton>

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
                  onClose={() => { setAnchorEl(null) }}
                >
                  <MenuItem  onClick={() => { handleMenuClick('/') }}>Home</MenuItem>
                  <MenuItem onClick={() => { handleMenuClick('/login') }}>Login</MenuItem>
                  <MenuItem onClick={() => { handleMenuClick('/') }}>Logout</MenuItem>
                  <MenuItem onClick={() => { handleMenuClick('/signup') }}>Signup</MenuItem>
                  <MenuItem color="primary"><Donate  handleOpen={handleOpen} handleClose={handleClose}  open={modalOpen} /></MenuItem>
                </Menu>
              </>
            ) : (
              <div>
                <Button onClick={() => { handleMenuClick('/') }} color="inherit">Home</Button>
                <Button onClick={() => { handleMenuClick('/login') }} color="inherit">Login</Button>
                <Button onClick={() => { handleMenuClick('/') }} color="inherit">Logout</Button>
                <Button onClick={() => { handleMenuClick('/signup') }} color="inherit">Singup</Button>
                <Button> <Donate  handleOpen={handleOpen} handleClose={handleClose}  open={modalOpen} /></Button>
              </div>
            )

            }

          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
};


export default withRouter(Navbar);