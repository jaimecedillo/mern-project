import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import BathtubIcon from '@material-ui/icons/Bathtub';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { idbPromise } from '../../utils/helpers';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useQuery } from '@apollo/react-hooks';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
        
    
  },

  //   root: {
//     maxWidth: 300,
//     marginTop: '40px',
//     marginLeft: '40px',
//     marginRight: '10px'
//   },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  header: {
    backgroundColor: '#8b9dc3',
   }

}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CategoryMenu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

    const [expanded, setExpanded ] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div width="100%">
      <Paper className={classes.root}>
        <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="white"
          textColor="white"
          centered
          
        > 
            <Tab icon={<AcUnitIcon />} label="AC and Heating" {...a11yProps(0)} />
            <Tab icon={<BathtubIcon />} label="Plumbing" {...a11yProps(1)} />
            <Tab icon={<DriveEtaIcon />}label="Mechanic" {...a11yProps(2)} />
        </Tabs>
        </AppBar>

        <Grid container spacing={3}
          direction="row"  >
          <TabPanel value={value} index={1}>
            <Grid item xs={24} sm={24} md={40}>
              <Card className={classes.root} width="300" variant="outlined">
                <CardHeader className={classes.header}

                  title="Darth Vader"
                  subheader="Plumber"
                />
                <CardMedia
                  className={classes.media}
                  image="https://1wd5sd2o6ikva0t2t1oxx0b1-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/Modern-Plumbing-Technology-Old-School-Experience-And-Integrity-From-Your-Plumber-_-Mesa-AZ.jpg"
                  title="Paella dish"
                />
                <CardContent>

                </CardContent>
                <CardActions disableSpacing>
                  Request a Quote
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Phone:</Typography>
                    <Typography paragraph>
                      (801) 268 5597
                    </Typography>
                    <Typography paragraph>
                      Email:
                    </Typography>
                    <Typography paragraph>
                      julio.gerhold@gmail.com
                    </Typography>

                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Grid item xs={24} sm={24} md={40}>
              <Card className={classes.root} variant="outlined">
                <CardHeader className={classes.header}

                  title="Darth Sidious"
                  subheader="Electrician"
                />
                <CardMedia
                  className={classes.media}
                  image="https://www.orangeelectric.com/wp-content/uploads/2020/02/Electrician3.jpg"
                  title="Paella dish"
                />
                <CardContent>

                </CardContent>
                <CardActions disableSpacing>
                  Request a Quote
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Phone:</Typography>
                    <Typography paragraph>
                      (801) 834 0479
                    </Typography>
                    <Typography paragraph>
                      Email:
                    </Typography>
                    <Typography paragraph>
                      ejacobs@gmail.com
                    </Typography>

                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid item xs={24} sm={24} md={40}>
              <Card className={classes.root} variant="outlined">
                <CardHeader className={classes.header}

                  title="Han Solo"
                  subheader="Plumber"
                />
                <CardMedia
                  className={classes.media}
                  image="https://innovativeplumbingpros.com/wp-content/uploads/2018/11/Ask-a-plumber-400x267.jpg"
                  title="Paella dish"
                />
                <CardContent>

                </CardContent>
                <CardActions disableSpacing>
                  Request a Quote
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Phone:</Typography>
                    <Typography paragraph>
                      (801) 892 3454
                    </Typography>
                    <Typography paragraph>
                      Email:
                    </Typography>
                    <Typography paragraph>
                      nya81@leannon.com
                    </Typography>

                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid item xs={24} sm={24} md={40}>
              <Card className={classes.root} variant="outlined">
                <CardHeader className={classes.header}

                  title="Boba Fett"
                  subheader="Car Mechanic"
                />
                <CardMedia
                  className={classes.media}
                  image="https://www.cashcarsbuyer.com/wp-content/uploads/2020/04/Ask-A-Mechanic.jpg"
                  title="Paella dish"
                />
                <CardContent>

                </CardContent>
                <CardActions disableSpacing>
                  Request a Quote
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Phone:</Typography>
                    <Typography paragraph>
                      (801) 426 6730
                    </Typography>
                    <Typography paragraph>
                      Email:
                    </Typography>
                    <Typography paragraph>
                      gorczany.luigi@reinger.com
                    </Typography>

                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Grid item xs={24} sm={24} md={40}>
              <Card className={classes.root} variant="outlined">
                <CardHeader className={classes.header}

                  title="Luke Skywalker"
                  subheader="HVAC Technician"
                />
                <CardMedia
                  className={classes.media}
                  image="https://116kxc3yni1m23llck48qpul-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/AC.jpg"
                  title="Paella dish"
                />
                <CardContent>

                </CardContent>
                <CardActions disableSpacing>
                  Request a Quote
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Phone:</Typography>
                    <Typography paragraph>
                      (801) 776 1266
                    </Typography>
                    <Typography paragraph>
                      Email:
                    </Typography>
                    <Typography paragraph>
                      michael83@lowe.org
                    </Typography>

                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid item xs={24} sm={24} md={40}>
              <Card className={classes.root} variant="outlined">
                <CardHeader className={classes.header}

                  title="Padme Amidala"
                  subheader="Car Mechanic"
                />
                <CardMedia
                  className={classes.media}
                  image="https://i0.wp.com/thedcapage.blog/wp-content/uploads/2020/09/woman1f.jpg?w=550&ssl=1"
                  title="Paella dish"
                />
                <CardContent>

                </CardContent>
                <CardActions disableSpacing>
                  Request a Quote
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Phone:</Typography>
                    <Typography paragraph>
                      (801) 915 2617
                    </Typography>
                    <Typography paragraph>
                      Email:
                    </Typography>
                    <Typography paragraph>
                      megane93@hansen.org
                    </Typography>

                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Grid item xs={24} sm={24} md={40}>
              <Card className={classes.root} variant="outlined">
                <CardHeader className={classes.header}

                  title="Kylo Ren"
                  subheader="Furnace Installer"
                />
                <CardMedia
                  className={classes.media}
                  image="https://media.angi.com/styles/widescreen_large/s3/s3fs-public/hvac%20work%20summer%20galyan.jpg?itok=4RH_OhhT"
                  title="Paella dish"
                />
                <CardContent>

                </CardContent>
                <CardActions disableSpacing>
                  Request a Quote
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Phone:</Typography>
                    <Typography paragraph>
                      (801) 170 4556
                    </Typography>
                    <Typography paragraph>
                      Email:
                    </Typography>
                    <Typography paragraph>
                      purdy.karli@thiel.com
                    </Typography>

                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid item xs={24} sm={24} md={40}>
              <Card className={classes.root} variant="outlined">
                <CardHeader className={classes.header}

                  title="Baby Yoda"
                  subheader="Plumber"
                />
                <CardMedia
                  className={classes.media}
                  image="https://www.emergencyplumberlasvegas.net/wp-content/uploads/2017/01/cropped-Emergency-Plumber-Las-Vegas-NV.jpg"
                  title="Paella dish"
                />
                <CardContent>

                </CardContent>
                <CardActions disableSpacing>
                  Request a Quote
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Phone:</Typography>
                    <Typography paragraph>
                      (801) 058 6364
                    </Typography>
                    <Typography paragraph>
                      Email:
                    </Typography>
                    <Typography paragraph>
                      christop.lindgren@jaskolski.com
                    </Typography>

                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid item xs={24} sm={24} md={40}>
              <Card className={classes.root} variant="outlined">
                <CardHeader className={classes.header}

                  title="Lando Calrissian"
                  subheader="Tire Repair"
                />
                <CardMedia
                  className={classes.media}
                  image="https://smallbiztrends.com/ezoimgfmt/media.smallbiztrends.com/2020/09/Tire-Repair-Franchise-850x476.png?ezimgfmt=ng%3Awebp%2Fngcb12%2Frs%3Adevice%2Frscb12-1"
                  title="Paella dish"
                />
                <CardContent>

                </CardContent>
                <CardActions disableSpacing>
                  Request a Quote
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Phone:</Typography>
                    <Typography paragraph>
                      (801) 326 8555
                    </Typography>
                    <Typography paragraph>
                      Email:
                    </Typography>
                    <Typography paragraph>
                      nestor41@hotmail.com
                    </Typography>

                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </TabPanel>
        </Grid>
      </Paper>
    </div>
  );
}

export default CategoryMenu;