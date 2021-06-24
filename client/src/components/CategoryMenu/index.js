import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import BathtubIcon from '@material-ui/icons/Bathtub';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import DriveEtaIcon from '@material-ui/icons/DriveEta';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const CategoryMenu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab icon={<AcUnitIcon />} label="AC and Heating" />
        <Tab icon={<BathtubIcon />} label="Plumbing" />
        <Tab icon={<DriveEtaIcon />} label="Mechanic" />
      </Tabs>
    </Paper>
  );
}

export default CategoryMenu;