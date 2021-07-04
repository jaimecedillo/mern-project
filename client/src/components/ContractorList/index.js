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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid container spacing={3}
    direction="row">
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
    <Grid item xs={12} sm={6} md={4}>
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
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} variant="outlined">
        <CardHeader className={classes.header}

          title="Han Solo"
          subheader="Yard Laborer"
        />
        <CardMedia
          className={classes.media}
          image="https://ak.picdn.net/shutterstock/videos/14943646/thumb/4.jpg"
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
    <Grid item xs={12} sm={6} md={4}>
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
    <Grid item xs={12} sm={6} md={4}>
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
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} variant="outlined">
        <CardHeader className={classes.header}

          title="Padme Amidala"
          subheader="Babysitter"
        />
        <CardMedia
          className={classes.media}
          image="https://www.americantraininginc.com/wp-content/uploads/2017/02/babysitter.jpg"
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

    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} variant="outlined">
        <CardHeader className={classes.header}

          title="Kylo Ren"
          subheader="Concrete Finisher"
        />
        <CardMedia
          className={classes.media}
          image="https://www.owlguru.com/wp-content/uploads/wpallimport/files/cement-masons-and-concrete-finishers/__(1).jpg"
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

    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} variant="outlined">
        <CardHeader className={classes.header}

          title="Kanan Jarrus"
          subheader="Carpet Installer"
        />
        <CardMedia
          className={classes.media}
          image="https://carpetstoresnear.me/wp-content/uploads/carpet-installers-near-me-480x320.jpg"
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

    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} variant="outlined">
        <CardHeader className={classes.header}

          title="Lando Calrissian"
          subheader="Roofer"
        />
        <CardMedia
          className={classes.media}
          image="https://www.tonysroofcare.com/wp-content/uploads/2019/03/best-roofing-installer.jpg"
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
              (801) 326 8755
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


  </Grid>





  );
};

export default ContractorList;