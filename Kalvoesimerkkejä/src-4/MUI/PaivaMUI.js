import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from 'date-fns/locale/fi';

function PaivaMUI () {

  const[paiva, setPaiva]=useState( new Date() );
  const[kello, setKello]=useState( new Date() );

  const muutaPaiva = date => {
    setPaiva(date);
  };

  const muutaKello = time => {
    setKello(time);
  };

  return (
    <Paper style={ {padding:20} }>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fiLocale}>
        <KeyboardDatePicker label='Päivä' fullWidth required
                  value={paiva}
                  onChange={muutaPaiva}
                  format='dd.MM.yyyy' />

        <KeyboardTimePicker label='Alkaa' fullWidth
                  value={kello}
                  onChange={muutaKello}
                  ampm={false} />
      </MuiPickersUtilsProvider>
    </Paper>
  )
}

export default PaivaMUI;
