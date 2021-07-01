import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
      aria-labelledby={`${index}`}
      {...other}
    >
      {value === index && (
        <Box container spacing={3} direction="row">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    marginTop: '40px',
    marginLeft: '40px',
    marginRight: '10px'
  },
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

const ContractorList = () => {
  const classes = useStyles();
  const [expanded, setExpanded, value] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (

    <Grid container spacing={3}
      direction="row">
      <TabPanel value={value} index={0}>
      <Grid item xs={12} sm={6} md={4} >
        <Card className={classes.root} variant="outlined">
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
                (801) 555-22-22
              </Typography>
              <Typography paragraph>
                Email:
              </Typography>
              <Typography paragraph>
                test23@email.com
              </Typography>

            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={0}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root} variant="outlined">
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
                (801) 555-22-22
              </Typography>
              <Typography paragraph>
                Email:
              </Typography>
              <Typography paragraph>
                test23@email.com
              </Typography>

            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root} variant="outlined">
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
                (801) 555-22-22
              </Typography>
              <Typography paragraph>
                Email:
              </Typography>
              <Typography paragraph>
                test23@email.com
              </Typography>

            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root} variant="outlined">
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
                (801) 555-22-22
              </Typography>
              <Typography paragraph>
                Email:
              </Typography>
              <Typography paragraph>
                test23@email.com
              </Typography>

            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root} variant="outlined">
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
                (801) 555-22-22
              </Typography>
              <Typography paragraph>
                Email:
              </Typography>
              <Typography paragraph>
                test23@email.com
              </Typography>

            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root} variant="outlined">
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
                (801) 555-22-22
              </Typography>
              <Typography paragraph>
                Email:
              </Typography>
              <Typography paragraph>
                test23@email.com
              </Typography>

            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      </TabPanel>
 

    </Grid>



  );
};

export default ContractorList;