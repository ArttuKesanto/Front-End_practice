import React, { useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';
import ListItemText from '@material-ui/core/ListItemText';

function MenuMUI () {

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton  color='inherit'>
            <MenuIcon />
          </IconButton>
          
          <Typography variant='h5' style={ {flexGrow: 1, textAlign: 'center'} }>Matkat</Typography>
          <IconButton  color='inherit'>
            <AccountCircleIcon />
          </IconButton>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default  MenuMUI;