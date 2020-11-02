import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import CreateIcon from '@material-ui/icons/Create';

function DrawerMUI () {
  const [open, setOpen] = useState(false);

  const handleOpen = () =>  { setOpen(true); }
  const handleClose = () => { setOpen(false); }

  return (
  <div>
     <IconButton onClick={ handleOpen }><MenuIcon /></IconButton>
     <Drawer anchor='left' open={ open } onClick={ handleClose }>
       <List>
         <ListItem button>
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText>Lisää</ListItemText>
         </ListItem>
         <ListItem button>
            <ListItemIcon><ListIcon /></ListItemIcon>
            <ListItemText>Listaa</ListItemText>
         </ListItem>
       </List>
     </Drawer>
  </div>
  )
}

export default DrawerMUI;
