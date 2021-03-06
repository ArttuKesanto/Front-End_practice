import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';

function MenuMUI () {
  const [anchorMenu, setMenuOpen] = useState(null);

  const handleMenu = (event) => { setMenuOpen(event.currentTarget); }
  const handleClose = () => { setMenuOpen(null); }

  return (
    <div>
    <AppBar position='static'>
      <Toolbar>
         <IconButton onClick={ handleMenu } color='inherit'><MenuIcon /></IconButton>
         <Typography variant='h5' style={ {flexGrow: 1, textAlign: 'center'} }>Material-UI esimerkki</Typography>
      </Toolbar>
    </AppBar>

    <MenuList>
         <Menu
             anchorEl={ anchorMenu }
             open={ Boolean(anchorMenu) }
             anchorOrigin={ {vertical: 'bottom', horizontal: 'left'} }
             getContentAnchorEl={ null }
             onClose={ handleClose} >
           <MenuItem onClick={ handleClose } component={ Link } to='/'>
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary='Etusivu' />
           </MenuItem>
           <MenuItem onClick={ handleClose } component={ Link } to='/lisaa'>
                <ListItemIcon><CreateIcon /></ListItemIcon>
                <ListItemText primary='Lisää' />
           </MenuItem>
           <MenuItem onClick={ handleClose } component={ Link } to='/listaa'>
                <ListItemIcon><ListIcon /></ListItemIcon>
                <ListItemText primary='Listaa' />
           </MenuItem>
         </Menu>
     </MenuList>
  </div>
  )
}

export default MenuMUI;
