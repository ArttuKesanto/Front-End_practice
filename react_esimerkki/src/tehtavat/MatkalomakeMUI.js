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
      paiva: '',
      paikka: '',
      saa: '',
      kuvaus: '',
      kuva: ''
  });

  const muuta = (e) => {
    setValues({
      ...matka,
      [e.target.name]: e.target.value
    });

   };

  const muutaSuurella = (e) => {
     setValues({
        ...matka,
        [e.target.name]: e.target.value.toUpperCase()
    });
      
  };

  const lisaaMatka = (e) => {
    e.preventDefault();

    setValues({
      otsikko: '',
      paiva: '',
      paikka: '',
      saa: '',
      kuvaus: '',
      kuva: ''
    });

  }
   
  const tyhjenna = (e) => {
    e.preventDefault();

    setValues({
        otsikko: '',
        paiva: '',
        paikka: '',
        saa: '',
        kuvaus: '',
        kuva: ''
    });

  }

  return (
    <Paper style={ {padding:'10px', margin:'30px'} }>
		<form>
		 
		</form>
    </Paper>
  );
}

export default MatkalomakeMUI;
