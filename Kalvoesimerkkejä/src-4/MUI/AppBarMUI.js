import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function AppBarMUI () {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton color='inherit'><MenuIcon /></IconButton>
        <Typography variant='h5' style={ {flexGrow: 1, textAlign: 'center'} }>Material-UI esimerkki</Typography>
        <IconButton color='inherit' >
           <AccountCircleIcon  />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default AppBarMUI;
