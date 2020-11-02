import React, { useState } from 'react';
//import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from "date-fns/locale/fi";
//import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
//import Alert from '@material-ui/lab/Alert';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';


const url = 'http://localhost:8080'; // Making it easier to search for files locally.

function TietotekniikkaLomakeEdit () {
    let { id, name, maker, date, type, description  } = useParams(); // Parameters mapped.
    let dateTemporary = date.split('.');
    date =  dateTemporary[1] + '.' + dateTemporary[0] + '.' + dateTemporary[2];

    
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
    setOpen(true);
    };

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    };

    const [item, setValues] = useState( 
        {id: id, name: name, maker: maker, date: new Date(), type: type, description: description, kuva: ''} 
        );

    const [viesti, setViesti] = useState('');
    
    const changeTitle = (e) => {
    setValues( {
    ...item, [e.target.name]: e.target.value.toUpperCase()
    } );
    setViesti(''); 
};
    const change = (e) => { 
        setValues( {
    ...item, [e.target.name]: e.target.value } );
    setViesti('');
    };

    const changePic = (e) => {
        setValues({
          ...item,
          kuva: e.target.files[0]
        });
    
        setViesti('');
      }


      let kuvaNimi = '';
      if (item.kuva !== null) {
        kuvaNimi = item.kuva.name;
      }

      const changeDate = (date) => {
        setValues({
          ...item,
          date: date
         });
    
        setViesti('');
      };

      const updateItem = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('id', item.id);
        formData.append('name', item.name);
        formData.append('maker', item.maker);
        formData.append('date', item.date);
        formData.append('type', item.type); 
        formData.append('description', item.description);
        formData.append('kuva', item.kuva);  

        axios.post(url + '/products/edit', formData)
        .then(response => {
              if (response.status === 200) {
                    //setValues( {name: '', maker: '', date: new Date(), type: '', description: '', kuva: []} );
                    window.alert('Added an item to the list! Check product listing! Redirecting you to the listing page...');
                    //DO Automatic Move!
                    //<Link to='/sellproducts' ></Link>
                    handleClick();
                    setTimeout(function() {window.location.href = '/sellproducts'}, 5000);
                    //window.location.href = '/sellproducts';
                    //this.props.history.push('/sellproducts');
              } else {
          setViesti('Could not add the desired item to the list. Try again and check that node server is running!');
      }
    })
          }

          const emptyItem = (e) => {
            e.preventDefault();
            
            setValues({
                name: '',
                maker: '',
                date: new Date(),
                type: '',
                description: '',
                kuva: '',
                id: id
                });
            
                setViesti('Cleared the list. Add a new item or proceed with something else.'); 
              }    

    return (
        <Paper elevation={2} style={ {padding:'10px', margin:'30px' } }>
        <form>
        <TextField label='Input a name...' name='name' value={ item.name }
        onChange={ (e) => changeTitle(e) } required fullWidth autoFocus />
        
        <TextField label="Input the product's maker.." name='maker' value={ item.maker }
        onChange={ (e) => change(e) } required fullWidth />
        
        <TextField label='Input a type of the product...' name='type' value={ item.type }
        onChange={ (e) => change(e) } required fullWidth />
        
        <TextField label='Describe the product...' name='description' value={ item.description }
        onChange={ (e) => change(e) } multiline rows='3' required fullWidth />
        <div style={{margin:'auto', padding:'40px'}}>
       <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fiLocale} style={{margin:'auto', padding:'30px'}}>
          <KeyboardDatePicker 
          label='Date of publishing...' 
          name= 'date'
          value={item.date}
          onChange={changeDate}
          format=
          'dd.MM.yyyy' />
        </MuiPickersUtilsProvider>
        </div>

        <div style={ {textAlign: 'center', padding: '30px'} }>
        <Input accept='image/*' name='kuva' id='kuva' type='file'
        onChange={ (e) => changePic(e) } style={{display: 'none'}} />

        <InputLabel htmlFor='kuva' margin="auto">
          Picture
          <Button component='span' style={ { marginLeft: 20, marginRight: 20, hover:"red"} }>
            <AttachmentIcon hover="red"/>
          </Button>
          { kuvaNimi }
      </InputLabel>
      </div>
    
         { /* Voidaan suoraan muuttaa myös määrittelemällä funktio tässä */ }
        <div style={ {textAlign: 'center'} }>
        <Button onClick={ (e) => updateItem(e) } variant='contained' color='primary' style={ {marginRight:20} } startIcon={ <CreateIcon /> }>Update the product</Button>
        <Button onClick={ (e) => emptyItem(e) } variant='contained' color='secondary' startIcon={ <ClearIcon /> }>Clear fields</Button>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Item added to the database - redirecting you to product listing!"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="secondary" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      </div> 

    </form>
    <Typography style={ {marginTop: 20} }>{ viesti }</Typography>
    <TextField label='ID for reference...' name='id' value={ item.id } style={{display: 'none'}}
        onChange={ (e) => change(e) } required fullWidth />
    </Paper>
     ); 
    };

    export default TietotekniikkaLomakeEdit;