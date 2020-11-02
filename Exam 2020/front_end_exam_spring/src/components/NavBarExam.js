import React, {useState} from 'react';

//Menus
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';

//Buttons and Lists
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AddIcon from '@material-ui/icons/Add';
import StoreIcon from '@material-ui/icons/Store';
import ComputerIcon from '@material-ui/icons/Computer';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import ListIcon from '@material-ui/icons/List';

// Linking + component:
import { Link } from 'react-router-dom';
import ExampleInfo from './FetchExam';
import FormExample from './BasicFormExam';


function MenuBarComputer() {
    const [value, setValue] = useState(null); // Opens the first component tabs. Not now!
    const [anchorMenu, setMenuOpen] = useState(null);
    const [personMenu, setPersonOpen] = useState(null);
    const [open, setOpen] = useState(false); // DRAWER-liittyy, annetaan alku-state! Alhaalla muut!

    const handleOpen = () => { setOpen(true); }
    const handleCloseDrawer = () => { setOpen(false); }

    //MENUS
    const handleMenu = (event) => { setMenuOpen(event.currentTarget); }
    const handleClose = () => { setMenuOpen(null); }

    const handlePersonMenu = (event) => { setPersonOpen(event.currentTarget); }
    const handlePersonMenuClose = () => { setPersonOpen(null); }

    const handleChange = (event, val) => {
    setValue(val); }

    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton color='inherit' onClick={ handlePersonMenu }>
                    <AccountCircleIcon />
                    </IconButton>

                    <IconButton color='inherit' onClick={ handleMenu }>
                    <AddIcon />
                    </IconButton>

                    <Typography variant='h2' style={{marginLeft: 'auto', fontFamily:"poppins", fontStyle:'italic'}}> Front-End Exam Spring 2020 </Typography>
                    <Typography variant='h6' style={{marginLeft: 'auto', fontFamily:"poppins", fontStyle:'italic'}}>Arttu Aleksi Kesanto, 1900649</Typography>

                    <IconButton color='inherit' onClick={ handleOpen } style={{marginLeft: 'auto'}}>
                    <ListIcon />
                    </IconButton>
                </Toolbar>
                <Tabs value={ value } onChange={ handleChange } style={{margin: 'auto'}} > 
                    <Tab label='Form Example' icon={<QueuePlayNextIcon />} component={ Link } to ='/' />
                    <Tab label='Fetch Example' icon={<ComputerIcon />} component={ Link } to ='/fetchexample' />
                </Tabs>
            </AppBar>

        {/* Menus 1 & 2 */ }
                <MenuList> 
                    <Menu anchorEl={ anchorMenu } open={ Boolean(anchorMenu) } onClose={ handleClose }>
                        <MenuItem onClick={ handleClose } component={ Link } to ='/fetchexample'>
                            <ListItemIcon><HelpIcon /></ListItemIcon>
                            <ListItemText primary='Fetch Example' />
                        </MenuItem>
                    </Menu>


                    <Menu anchorEl={ personMenu } open={ Boolean(personMenu) } onClose={ handlePersonMenuClose } >
                        <MenuItem onClick={ handleClose } component={ Link } to ='/fetchexample'>
                            <ListItemIcon><HelpIcon /></ListItemIcon>
                            <ListItemText primary='Fetch Example' />
                        </MenuItem>
                        <MenuItem onClick= { handleClose } component={ Link } to ='/fetchexample'>
                            <ListItemIcon><HelpIcon /></ListItemIcon>
                            <ListItemText primary='Fetch Example' />
                        </MenuItem>
                    </Menu>
                </MenuList>

            {/* DRAWER */}
                <Drawer anchor='right' open={ open } onClick={ handleCloseDrawer }>
                    <List>
                      <ListItem button component={ Link } to ='/fetchexample'>
                        <ListItemIcon><ComputerIcon /></ListItemIcon>
                        <ListItemText primary='Example' />
                      </ListItem>
                      <ListItem button component={ Link } to ='/fetchexample'>
                        <ListItemIcon><StoreIcon /></ListItemIcon>
                        <ListItemText primary='Example' />
                      </ListItem>
                    </List>
                  </Drawer>
        </div>
    )
}

export default MenuBarComputer;