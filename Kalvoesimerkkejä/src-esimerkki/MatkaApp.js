import React from 'react';
//import Matka from './components/Matka';
//import Matkalista from './components/Matkalista';
//import Saa from './components/Saa';
import Saalomake from './components/Saalomake';

/*
const matkat = [
  {id: 1, otsikko: 'Lomalla',
    paiva: '26.5.2020',
    paikka: 'Lohja',
    saa: 'Aurinkoista, 10',
    kuvaus: 'Lomalla Lohjalla',
  },
  { id:2, otsikko: 'Mökillä',
    paiva: '8.6.2020',
    paikka: 'Savonlinna',
    saa: 'Aurinkoinen, 21',
    kuvaus: 'Mökillä Itä-Suomessa',
  },
  { id:3,  otsikko: 'Sukuloimassa',
    paiva: '20.5.2020',
    paikka: 'Vantaa',
    saa: 'Pilvinen, 9',
    kuvaus: 'Kahvihetki',
  }
];
*/

function MatkaApp () {
   return (
    <div>
     { 
     /* <Matka matka={ mat } /> 
     <Matkalista matkat={ matkat } />
     */ 
     } 
        <Saalomake />
    </div>
   );
}
export default MatkaApp;