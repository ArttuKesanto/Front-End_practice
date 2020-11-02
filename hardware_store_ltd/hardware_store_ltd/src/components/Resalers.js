import React from 'react';
import Objecttable from './ResalersMap';
//import MenuBarComputer from './NavBarComputerParts';

const mat = [ { id: 1,
    otsikko: 'Verkkokauppa.com',
    paiva: '26.5.2020',
    paikka: 'Helsinki',
    saa: 'Aurinkoista, 10',
    kuvaus: 'Everything you might ever need!',
    kuva: 'https://cdn.hswstatic.com/gif/76008099computerpictures.jpg'
    },
    { id: 2,
    otsikko: 'Jimm\'s PC Store',
    paiva: '8.6.2020',
    paikka: 'Oulu',
    saa: 'Aurinkoinen, 21',
    kuvaus: 'All the items you might need!',
    kuva: 'https://cdn.hswstatic.com/gif/76008099computerpictures.jpg'
    },
    { id: 3,
    otsikko: 'Micronetti.com',
    paiva: '20.5.2020',
    paikka: 'Vantaa',
    saa: 'Pilvinen, 9',
    kuvaus: 'Get your favourite items here!',
    kuva: 'https://cdn.hswstatic.com/gif/76008099computerpictures.jpg'
    } ];

    function ObjektiTaulukko() {
        return (
            <div>
            <Objecttable items = { mat } />
            </div>
        );
    };

    export default ObjektiTaulukko;