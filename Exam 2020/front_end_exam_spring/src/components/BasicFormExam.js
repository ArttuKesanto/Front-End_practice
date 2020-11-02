import React, { useState } from 'react'; // {Arttu Kesanto} 
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';

function FormExample(props) {
    const [palkka, setValues] = useState( {tunnit: '', tuntipalkka: props.tiedot.tuntipalkka});
    const [virheilmoitus, setVirhe] = useState({virheilmoitus: ''});

    const change = (e) => { 
        setValues( {
    ...palkka, [e.target.name]: e.target.value } );
    setVirhe({virheilmoitus : ''});
    };

    const lisaaTieto = (e) => { 
        e.preventDefault(); 
        if (isNaN(palkka.tunnit) || isNaN(palkka.tuntipalkka)) {
            setVirhe({virheilmoitus: 'Palkanlaskenta voidaan tehdä vain numeroilla...'});
        }
        else {
            setVirhe({virheilmoitus : "Palkka on " + palkka.tunnit * palkka.tuntipalkka});
        }
    };


    return (
        <Paper elevation={2} style={ {padding:'30px', margin:'30px' } }>
        <form>
            <Typography>{props.tiedot.nimi}</Typography> 
        <TextField label='Tunnit...' name='tunnit' value={ palkka.tunnit }
        onChange={ (e) => change(e) } required fullWidth autoFocus />

        <TextField label='Tuntipalkka...' name='tuntipalkka' value={ palkka.tuntipalkka }
        onChange={ (e) => change(e) } required fullWidth />


       <p> <Button onClick={ (e) => lisaaTieto(e) } variant='contained' color='primary' style={ {marginRight:20} } startIcon={ <CheckIcon /> }>Laske</Button> </p>
    </form>
    <div>
        <p> { virheilmoitus.virheilmoitus } </p> {/* There is no need for this to be an OBJECT, note this! */}
    </div>
    </Paper>
   );

    }; 

    export default FormExample;