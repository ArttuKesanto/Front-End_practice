import React from 'react';
import Matka from './components/Matka';  // Huomaa piste ja /

const matka = {
    id: 1,
    otsikko: 'Lomalla',
    paiva: '28.8.2019',
    paikka: 'Lohja',
    saa: 'Aurinkoista, 25',
    kuvaus: 'Lomalla Lohjalla',
};

function MatkaApp() {
    return ( 
    <div>
        { /* Kommentti */ }
        <Matka matka={ matka }  />
		{ /* Tähän alle voi laittaa muita komponentteja */}
    </div> );
}

export default MatkaApp;