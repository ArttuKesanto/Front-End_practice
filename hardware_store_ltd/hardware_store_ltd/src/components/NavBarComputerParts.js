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
import MenuIcon from '@material-ui/icons/Menu';
import CreateIcon from '@material-ui/icons/Create';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AddIcon from '@material-ui/icons/Add';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import NavigationIcon from '@material-ui/icons/Navigation';
import TuneIcon from '@material-ui/icons/Tune';
import ComputerIcon from '@material-ui/icons/Computer';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import StoreIcon from '@material-ui/icons/Store';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import SearchIcon from '@material-ui/icons/Search';
import ReceiptIcon from '@material-ui/icons/Receipt';

// Linking:
import { Link } from 'react-router-dom';

//import TietotekniikkaLomake from './TietotekniikkaLomake';
//import ItemInformation from './TietotekniikkaTuoteListaus';
//import DiscreteSlider from '../tehtavat/SaaSlider';
//import Ruokalista from '../tehtavat/GetSodexo';
//import NavBarExample from '../tehtavat/Navigaatio/TehtavaNav2';
//import Carlist from '../tehtavat/CarListing/CarListExample';
//import ObjektiTaulukko from './Resalers';
//import App from './ToDo';
//import ProductInfo from '../tehtavat/HardwareStoreFront/HardWareProduct';


function MenuBarComputer() {
    const [value, setValue] = useState(null);
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

                    <Typography variant='h2' style={{marginLeft: 'auto', fontFamily:"poppins", fontStyle:'italic'}}> Hardware Store Ltd. </Typography>

                    <IconButton color='inherit' onClick={ handleOpen } style={{marginLeft: 'auto'}}>
                    <ListIcon />
                    </IconButton>
                </Toolbar>
                <Tabs value={ value } onChange={ handleChange } style={{margin: 'auto'}} > 
                    <Tab label='Add a product' icon={<QueuePlayNextIcon />} component={ Link } to ='/addproducts'/>
                    <Tab label='Electronical products' icon={<ComputerIcon />} component={ Link } to ='/sellproducts'/>
                    {/*<Tab label='Slider' icon={<TuneIcon />} component={ Link } to ='/addproducts'/> */}
                    {/* <Tab label='Navbar' icon={<NavigationIcon />} component={ Link } to ='/addproducts'/> */}
                    <Tab label='Closest restaurant (IN FINNISH)' icon={<FastfoodIcon />} component={ Link } to ='/restaurants'/>
                    <Tab label="Buyer's notes" icon={<ReceiptIcon />} component={ Link } to ='/customernotes'/>
                    <Tab label="Product Info (external store / outlet)" icon={<SearchIcon />} component={ Link } to ='/externaloutlet'/>
                    {/* Ennen oli vanha resellers -endpoint here. */}
                </Tabs>
            </AppBar>

                <MenuList>
                    <Menu anchorEl={ anchorMenu } open={ Boolean(anchorMenu) } onClose={ handleClose }>
                        <MenuItem onClick={ handleClose } component={ Link } to ='/addproducts'>
                            <ListItemIcon><AddIcon /></ListItemIcon>
                            <ListItemText primary='Add' />
                        </MenuItem>
                        <MenuItem onClick={ handleClose } component={ Link } to ='/sellproducts'>
                            <ListItemIcon><ListIcon /></ListItemIcon>
                            <ListItemText primary='List' />
                        </MenuItem>
                    </Menu>
                    <Menu anchorEl={ personMenu } open={ Boolean(personMenu) } onClose={ handlePersonMenuClose } >
                        <MenuItem onClick={ handleClose } component={ Link } to ='/owner'>
                            <ListItemIcon><HelpIcon /></ListItemIcon>
                            <ListItemText primary='Information about the owner' />
                        </MenuItem>
                        <MenuItem onClick= { handleClose } component={ Link } to ='/informationaboutus'>
                            <ListItemIcon><ContactMailIcon /></ListItemIcon>
                            <ListItemText primary='Contact us' />
                        </MenuItem>
                    </Menu>
                </MenuList>

                {/*{ value === 0 && <TietotekniikkaLomake />} {/*Possible to do without these, but left here for reference.*/} {/*
                { value === 1 && <ItemInformation />}
                { value === 2 && <DiscreteSlider /> }
                { value === 3 && <NavBarExample /> }
                { value === 4 && <Ruokalista /> }
                { value === 5 && <App /> }
                { value === 6 && <ProductInfo /> } */}
    
                <Drawer anchor='right' open={ open } onClick={ handleCloseDrawer }>
                    <List>
                      <ListItem button component={ Link } to ='/products'>
                        <ListItemIcon><ComputerIcon /></ListItemIcon>
                        <ListItemText primary='Favourite products' />
                      </ListItem>
                      <ListItem button component={ Link } to ='/resellers'>
                        <ListItemIcon><StoreIcon /></ListItemIcon>
                        <ListItemText primary='Retailers' />
                      </ListItem>
                      <ListItem button component={ Link } to ='/carlist'>
                        <ListItemIcon><AirportShuttleIcon /></ListItemIcon>
                        <ListItemText primary='Best products (Car Outlet, BETA)' />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon><LocalGroceryStoreIcon /></ListItemIcon>
                        <ListItemText primary="Buyer's basket" />
                      </ListItem>
                    </List>
                  </Drawer>
        </div>
    )
}

export default MenuBarComputer;