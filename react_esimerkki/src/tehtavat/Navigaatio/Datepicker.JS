import React from 'react';
import { MuiPickersUtilsProvider, keyboardDatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from 'date-fns/locale/fi';

function DatePicker() {
    const [paiva, setPaiva] = { new Date() };
    const muutaPaiva = (date) => {
    setPaiva(date);
    }

    return(
        <MuiPickersUtilsProvider >
            <DatePicker 
                label='Päivä' 
                name='paiva'
                value={paiva}
                onChange={muutaPaiva}
                format='dd.MM.yyyy' />
                <TimePicker label='Alkaa' fullWidth='true'
                value={kello}
                onChange={muutaKello}
                ampm={false} />
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker;