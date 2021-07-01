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

  //const { data: categoryData } = useQuery(QUERY_CATEGORIES);
  //const categories = categoryData?.categories || [];

  //const [state, dispatch] = useStoreContext();

  //const { categories } = state;

 // const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  // useEffect(() => {
  //   // if categoryData exists or has changed from the response of useQuery, then run dispatch()
  //   if (categoryData) {
  //     dispatch({
  //       type: UPDATE_CATEGORIES,
  //       categories: categoryData.categories
  //     });
  //     categoryData.categories.forEach(category => {
  //       idbPromise('categories', 'put', category);
  //     });
  //   }
  // }, [categoryData, dispatch]);

  // useEffect(() => {
  //   if (categoryData) {
  //     dispatch({
  //       type: UPDATE_CATEGORIES,
  //       categories: categoryData.categories
  //     });
  //     categoryData.categories.forEach(category => {
  //       idbPromise('categories', 'put', category);
  //     });
  //   } else if (!loading) {
  //     idbPromise('categories', 'get').then(categories => {
  //       dispatch({
  //         type: UPDATE_CATEGORIES,
  //         categories: categories
  //       });
  //     });
  //   }
  // }, [categoryData, loading, dispatch]);

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <div>
          {/* {categories.map(item => (
            <button
              key={item._id}
              onClick={() => {
              handleClick(item._id);
              }}
            >
            {item.name}
            </button>
          ))} */}
        
          <Tab icon={<AcUnitIcon />} label="AC and Heating" />
          <Tab icon={<BathtubIcon />} label="Plumbing" />
          <Tab icon={<DriveEtaIcon />}label="Mechanic" />
        </div>
      </Tabs>
    </Paper>
  );
}

export default CategoryMenu;