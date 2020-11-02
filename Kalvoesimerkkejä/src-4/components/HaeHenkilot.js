import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import HenkilolistaMUI from './HenkilolistaMUI';

const url = 'http://localhost:8080';

function HaeHenkilot () {

 const [henkilot, setHenkilo] = useState([]);
 const [virhe, setVirhe] = useState('Haetaan');

 useEffect( () => {
   async function haeKaikkiHenkilot () {
     try {
       const response = await fetch(url + '/henkilo/all');
       const json = await response.json();
       setHenkilo(json);
       setVirhe('');
     } catch (error) {
       setHenkilo([]);
       setVirhe('Tietojen haku ei onnistunut');
     }
   }

   haeKaikkiHenkilot();
 }, [])

 if (virhe.length > 0) {
   return ( <Typography>{ virhe }</Typography> );
 }

 if (henkilot.length > 0) {
   return ( <HenkilolistaMUI henkilot={ henkilot } /> );
 }

 return ( <Typography>Yhtään henkilöä ei ole</Typography> );
}

export default HaeHenkilot;
