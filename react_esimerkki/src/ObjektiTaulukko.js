import React from 'react';
import Objektitaulukko from './tehtavat/ObjektiTaulukkoPrinted';

const taulukko = [ // Hakasulut aloittavat taulukon.
    {
    nimi: "Virtanen Matti", 
    alkupaiva: "2020-06-01", 
    loppupaiva: "2020-06-30",
    },
    {
    nimi: "Laaksonen Lisaa", 
    alkupaiva: "2020-06-26", 
    loppupaiva: "2020-07-27",
    },
    {
    nimi: "Korhonen Maija", 
    alkupaiva: "2020-08-03", 
    loppupaiva: "2020-08-30",
    }

    ];

    function TaulukonTiedot () {
        return (
            <Objektitaulukko henkilot = { taulukko } />
        );
    };

    export default TaulukonTiedot;