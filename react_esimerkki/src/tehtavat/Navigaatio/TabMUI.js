import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import SaaLomake from '../tehtävät/components/SaaLomake';
import Koulutusohjelmat from '../components/Koulutusohjelmat';



function TabMUI (props) {

  const [value, setValue] = useState(0);
  const handleChange = (event, val) => {
  setValue(val);

  }

  return (
    <div>
     <AppBar position='static'>
      <Tabs value={ value }
      onChange={ handleChange } >
        <Tab label='SaaLomake' />
      </Tabs>
      </AppBar>
      { value === 0 && <SaaLomake/>}
    </div>
  );
}

export default TabMUI;