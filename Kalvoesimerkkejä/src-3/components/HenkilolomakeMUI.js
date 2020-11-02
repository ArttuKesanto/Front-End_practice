import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import AttachmentIcon from '@material-ui/icons/Attachment';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tiedosto: {
       backgroundColor: 'white',
    }
  })
)

function HenkilolomakeMUI () {
  const classes = useStyles();

  const [henkilo, setValues] = useState({nimi: '', email: '', kuva: []});

  const muuta = (e) => {
    setValues({
      ...henkilo,
      [e.target.name]: e.target.value
    });
  }

  const muutaKuva = (e) => {
    setValues({
      ...henkilo,
      [e.target.name]: e.target.files[0]
    });
  }

  const lisaaHenkilo  = (e)  => {
     e.preventDefault();
  }

  let kuvaNimi = '';
  if (henkilo.kuva !== null) {
      kuvaNimi = henkilo.kuva.name;
      //console.log(henkilo.kuva)
  }

  return (
      <Paper style={ {margin:10, padding:10} }>
        <form>
          <TextField fullWidth label='Nimi' name='nimi' id='nimi'
            value={ henkilo.nimi } onChange={ muuta }
            margin='normal' required
          />
          <TextField fullWidth label='Email' name='email' id='email'
            value={ henkilo.email } onChange={ muuta }
            margin='normal' required
          />

          <Input accept='image/*' name='kuva' id='kuva' type='file'
            onChange={ muutaKuva } style={ {display: 'none'} } />
          <InputLabel htmlFor='kuva'>
              <Typography display='inline'>Kuva</Typography>
              <Button component='span' color='primary'
                      style={ { marginLeft: 20, marginRight: 20} }
                      className={ classes.tiedosto }>
                  <AttachmentIcon />
              </Button>
              <Typography display='inline'>{ kuvaNimi }</Typography>
          </InputLabel>

          <div style={ {textAlign:'center', marginTop:'10px'} }>
            <Button onClick={ lisaaHenkilo } variant='contained' color='primary'
             style={ {marginRight:20} }><CreateIcon /> Lisää</Button>
            <Button variant='contained' color='secondary' component={ Link } to='/'><HomeIcon /> Etusivulle</Button>
          </div>
        </form>
      </Paper>
    );
}

export default HenkilolomakeMUI;
