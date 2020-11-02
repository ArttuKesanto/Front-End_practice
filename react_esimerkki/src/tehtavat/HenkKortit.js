import React from 'react';
import Objecttable from './MatkalistaMUI'

const mat = [ { id: 1,
    otsikko: 'Lomalla',
    paiva: '26.5.2020',
    paikka: 'Lohja',
    saa: 'Aurinkoista, 10',
    kuvaus: 'Lomalla Lohjalla',
    kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/tammi.PNG'
    },
    { id: 2,
    otsikko: 'Mökillä',
    paiva: '8.6.2020',
    paikka: 'Savonlinna',
    saa: 'Aurinkoinen, 21',
    kuvaus: 'Mökillä Itä-Suomessa',
    kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/lumpeet.PNG'
    },
    { id: 3,
    otsikko: 'Sukuloimassa',
    paiva: '20.5.2020',
    paikka: 'Vantaa',
    saa: 'Pilvinen, 9',
    kuvaus: 'Kahvihetki',
    kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/kakku.jpg'
    } ];

    function ObjektiTaulukko() {
        return (
            <Objecttable items = { mat } />
        );
    };

    export default ObjektiTaulukko;

