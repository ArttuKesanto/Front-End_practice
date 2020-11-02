import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AttachmentIcon from '@material-ui/icons/Attachment';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from "date-fns/locale/fi";

function MatkalomakeMUI () {

  const [matka, setValues] = useState({
      otsikko: '',
      paiva: new Date(),
      paikka: '',
      saa: '',
      kuvaus: '',
      kuva: []
  });

  const [viesti, setViesti] = useState('');

  const muuta = (e) => {
    setValues({
      ...matka,
      [e.target.name]: e.target.value
    });

    setViesti('');
  };

  const muutaSuurella = (e) => {
    setValues({
      ...matka,
      [e.target.name]: e.target.value.toUpperCase()
    });
      
    setViesti('');
  };

  const muutaKuva = (e) => {
    setValues({
      ...matka,
      kuva: e.target.files[0]
    });

    setViesti('');
  }

  const muutaPaiva = (date) => {
    setValues({
      ...matka,
      paiva: date
     });

    setViesti('');
  };

  const lisaaMatka = (e) => {
    e.preventDefault();

    setValues({
      otsikko: '',
      paiva: new Date(),
      paikka: '',
      saa: '',
      kuvaus: '',
      kuva: ''
    });

    setViesti('Lisättiin'); 
  }
   
  const tyhjenna = (e) => {
    e.preventDefault();

    setValues({
        otsikko: '',
        paiva: new Date(),
        paikka: '',
        saa: '',
        kuvaus: '',
        kuva: ''
    });

    setViesti('');
  }

  let kuvaNimi = '';
  if (matka.kuva !== null) {
    kuvaNimi = matka.kuva.name;
  }

  return (
    <Paper style={ {padding:'10px', margin:'30px' } }>
    <form>
      <TextField label='Otsikko' name='otsikko' value={ matka.otsikko }
        onChange={ (e) => muutaSuurella(e) } required fullWidth autoFocus />
    { /*
      <TextField label='Päivä' name='paiva' value={ matka.paiva }
        onChange={ muuta } required fullWidth />
    */ }

        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fiLocale}>
          <KeyboardDatePicker 
          label='Päivä' 
          name= 'paiva'
          value={matka.paiva}
          onChange={muutaPaiva}
          format=
          'dd.MM.yyyy' />
        </MuiPickersUtilsProvider>

      <TextField label='Paikka' name='paikka' value={ matka.paikka }
        onChange={ (e) => muuta(e) } required fullWidth />
		
      <TextField label='Sää' name='saa' value={ matka.saa }
        onChange={ (e) => muuta(e) } required fullWidth />
		
      <TextField label='Kuvaus' name='kuvaus' value={ matka.kuvaus }
        onChange={ (e) => muuta(e) } multiline rows='4' fullWidth />
		
      <Input accept='image/*' name='kuva' id='kuva' type='file'
        onChange={ (e) => muutaKuva(e) } style={{display: 'none'}} />

      <InputLabel htmlFor='kuva'>
          Kuva
          <Button component='span' style={ { marginLeft: 20, marginRight: 20} }>
            <AttachmentIcon />
          </Button>
          { kuvaNimi }
      </InputLabel>

      <div style={ {textAlign: 'center'} }>
        <Button onClick={ (e) => lisaaMatka(e) } variant='contained' color='primary' style={ {marginRight:20} } startIcon={ <CreateIcon /> }>Lisää</Button>
        <Button onClick={ (e) => tyhjenna(e) } variant='contained' color='secondary' startIcon={ <ClearIcon /> }>Tyhjennä</Button>
      </div>
    </form>
    <Typography style={ {marginTop: 20} }>{ viesti }</Typography>
    </Paper>
  );
}

export default MatkalomakeMUI;