import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import ListIcon from '@material-ui/icons/List';

function DrawerMUI () {

  const [open, setOpen] = useState(false);
  const handleOpen = () => { setOpen(true); }
  const handleClose = () => { setOpen(false); }

  return (
    <div>
     
      <AppBar position='static'>
        <Toolbar>
          <IconButton onClick={ handleOpen } color='inherit'><MenuIcon /></IconButton>
          <Typography variant='h5'>Listaa</Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor='left' open={ open } onClick={ handleClose }>
        <List>
          <ListItem button>
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText primary='Sää' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary='Listaa' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary='Tuotteet' />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default DrawerMUI;