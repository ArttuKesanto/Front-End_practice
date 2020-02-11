import React from 'react';
import Matka from './components/Matka'; // Huomaa piste, jolla mennään alikansioon.

const matka = {
    id: 1,
    otsikko: 'Lomalla',
    paiva: '28.8.2019', paikka: 'Lohja',
    saa: 'Aurinkoista, 25', 
    kuvaus: 'Lomalla Lohjalla',
    };

    
function MatkaApp() {
    return ( 
         <Matka matka = { matka } /> // Lollero. Aina kun kaarisulut ja jotain sisässä, tarkoittaa JS.
    );
};

export default MatkaApp; // Kerrotaan, että defaultti-komponentti.