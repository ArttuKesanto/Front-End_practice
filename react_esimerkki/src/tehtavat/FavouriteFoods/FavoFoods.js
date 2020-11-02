import React, { useState } from 'react';
import uuid from 'react-uuid';
import NewFoodForm from './NewFoodForm';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

  
const SuosikkiRuoat = () => {
  const [ruoat, setValues] = useState([
    {
      id: 1,
      safka: 'Lohikeitto',
      kalorit: '200kcal',
      rasva: '5g',
      hiilarit: '8g',
      proteiini: '7g'
    },
    {
      id: 2,
      safka: 'Kasvispizza',
      kalorit: '450kcal',
      rasva: '10g',
      hiilarit: '25g',
      proteiini: '12g'
    },
    {
      id: 3,
      safka: 'Pasta Carbonara á La Felix',
      kalorit: '999kcal',
      rasva: '30g',
      hiilarit: '28g',
      proteiini: '10g'
    },
]);
const addFood = (safka) => {
  setValues([...ruoat, { 
    id: uuid(), 
    nimi: safka, 
    kalorit: safka.kalorit, 
    rasva: safka.rasva, 
    hiilarit: safka.hiilarit, 
    proteiini: safka.proteiini, }]);
  setViesti('Lisätty');
}
  const [viesti, setViesti] = useState('');

    return(
    <div>
      <Typography variant={"h1"}>Suosikkiruoat</Typography>
      <ul>
          {(Object.values(ruoat)).map(ruoka => {
            return( <li>{ruoka.safka + ', kalorit:' + ruoka.kalorit + ', rasva:' + ruoka.rasva + ', hiilarit:' + ruoka.hiilarit + ', proteiini:' + ruoka.proteiini}</li> );
          })}
      </ul>
      <Paper style={ {padding: '10px', margin: '30px'} } >
          <NewFoodForm addFood={addFood} />
          <Typography style={{marginTop: 20}}>{ viesti }</Typography>
      </Paper>
    </div>
    )
}

export default SuosikkiRuoat;