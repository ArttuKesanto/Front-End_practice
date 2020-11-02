import React, { useState } from 'react';
import uuid from 'react-uuid';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';

const NewFoodForm = ({ addFood }) => {
    const [viesti, setViesti] = useState('');
    const [safka, setSafka] = useState(
        {
        id: uuid(),
        nimi: '',
        kalorit: '',
        rasva: '',
        hiilarit: '',
        proteiini: '',
        });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Object.values(safka));
        addFood(safka);
        setSafka('');
    }

    const tyhjenna = (e) => {
        e.preventDefault();
    
        setSafka({
            nimi: '',
            kalorit: '',
            rasva: '',
            hiilarit: '',
            proteiini: ''
        });
        setViesti('tyhjennetty');
      };

return (
    <form onSubmit={handleSubmit}>
        <TextField label='Nimi' name='nimi' value={ safka.nimi }
            onChange={ (e) => setSafka(e.target.value) } margin='normal' required fullWidth={true} autoFocus/>
        <TextField label='Kalorit' name='kalorit' value={ safka.kalorit }
            onChange={ (e) => setSafka(e.target.value) } margin='normal' required fullWidth={true} />
        <TextField label='Rasva' name='rasva' value={ safka.rasva }
            onChange={ (e) => setSafka(e.target.value) } margin='normal' required fullWidth={true} />
        <TextField label='Hiilarit' name='hiilarit' value={ safka.hiilarit }
            onChange={ (e) => setSafka(e.target.value) } margin='normal' required fullWidth={true} />
        <TextField label='Proteiini' name='proteiini' value={ safka.proteiini }
            onChange={ (e) => setSafka(e.target.value) } margin='normal' required fullWidth={true} />
          
            <div style = {{textAlign: 'center'}}>
              <Button onClick={ (e) => handleSubmit(e) } variant="contained" color="primary" style={{marginRight:20}}><CreateIcon />Lisää</Button>
              <Button onClick={ (e) => tyhjenna(e) } variant="contained" color="secondary"><ClearIcon />Tyhjennä</Button>
            </div>
        </form>

);
}

export default NewFoodForm;