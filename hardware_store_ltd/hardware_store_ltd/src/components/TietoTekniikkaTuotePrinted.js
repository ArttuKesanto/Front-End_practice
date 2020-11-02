import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';


import EcoIcon from '@material-ui/icons/Eco';
import EuroIcon from '@material-ui/icons/Euro';
import MoodIcon from '@material-ui/icons/Mood';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime';
import teal from '@material-ui/core/colors/teal';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Own theme:
const useStyles = makeStyles({
    theme: {
    backgroundColor: '#89a356', color: '#nnn',
    border: '1px solid grey',
    borderRadius: '5px',
    margin: '20px',
    color: 'grey',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //paddingTop: '40px'
        },

    textStyle: {
        fontFamily: 'Poppins'
        }
    })

    const url = 'http://localhost:8080';


    //let {proID} = useParams(); OLD stuff.
    //proID = id;
    //let {proName} = useParams();
    //proName = name;

function Objecttable(props) {

  const [message, setMessage]=useState('');


  let { id } = useParams();

  const deleteItem = (id) => {
    // (e).preventDefault();

        if (window.confirm('Are you absolutely sure?')) {
    axios.get(url + '/products/delete/' + id)
    .then(response => {
      if (response.status === 200) {
        //setMessage('Deleted the item. Update the page to see the results.');
        props.searchAllProducts();
          window.alert("Deleted the chosen item from the list.");
    } else {
          window.alert('Could not delete the item. Try again.');
      }
    }) }
 }

    const classes = useStyles(); // Importoidaan mukaan.
  
    return (
      <Grid container spacing={6} justify="space-evenly"
      alignItems="center" direction="row" >
      { 
        props.items.map ( item => {
          return(
            <Grid item key={item.id} className={classes.theme}>
              <Card style={ {minWidth: 200, minHeight: 400}} alignContent="center">
                <CardHeader
                  title={item.name}
                  subheader={ item.maker } />
                  <CardContent align="center">
                    {
                      item.kuva ?
                      <CardMedia 
                      image={ url + '/download/' + item.kuva } // Referencing Back-End! Check there.
                      title={ item.name } 
                      style={{height: 150, width: 200}} 
                      align="center" />
                      :
                      <Typography style={{height: 150, width: 200}} align="center">
                        No picture attached
                      </Typography>
                    }
                    <Typography color='secondary'> { item.type }</Typography>
                    <Typography color='textSecondary'> { item.date }</Typography>
                    <Typography color='textSecondary'> { item.description }</Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'center'}}>
                    <Button component={ Link } to={ '/edit/' + item.id + '/' + item.name + 
                    '/' + item.maker + '/' + item.date + '/' + item.type + '/' + item.description + '/'} startIcon={<EditIcon />}></Button> {/* This determines the VALUE of the parameter - App.js determines the NAME of the parameter.*/}
                    <Button onClick={ () => deleteItem(item.id) } color='secondary' startIcon={<DeleteIcon />}></Button> 
                    {/*<Button color="primary" variant="contained" component={ Link } to={'/favourite/' + proID + '/' + proName + '/' + "TestingTestingEleProduct"}
                    >Lisää suosikiksi</Button> */}
                  </CardActions>
                  <Typography style={ {marginTop: 10} }>{ message }</Typography>
              </Card>
                  
              </Grid>
          )
        })
      }

      </Grid>
      
  
  
      
    )}

export default Objecttable;

/*
    { /*
{ // Saa itse keksiä parametrin, mutta keksi / käytä props.
    return (
        <div> { /* Teksti täytyy olla jonkun elementin sisällä. Elementti täytyy olla. Returnin sisässä kommentointi näy.  }
/*            {props.items.map( item => {
                return (
                 <p id='key' key = { item.id }>
                    <span id='product'> Product <br /> </span>
                 Name: { item.name } <br />
                 Maker: { item.maker } <br />
                 Year : { item.year } <br />
                 Type: { item.type } <br />
                 Description: { item.description } <br />
                 
                 </p>);
            })
        }
        </div>);
}; /*}

 export default Objecttable; */