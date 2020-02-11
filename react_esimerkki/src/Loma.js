import React from 'react';
import Tiedot from './tehtavat/LomaPrinted';
import Tekija from './tehtavat/Tekija';

const ajopvkirja = {  // Pääsivusto hakee komponentit, ja printtaa näiden mukaan.
    rekisterinro: "XYZ-123",
    laatija: "Risto Reipas", 
        alku: {
        lukema: "32500",
        lahtoaika: "13:30",
        paiva: "2020-01-27",
        paikka: "Ratapihantie 13, Helsinki",
}, 
        loppu: {
            lukema: "32510",
            loppuaika: "13:50",
            paiva: "2020-06-27",
            paikka: "Hietakummuntie 1, Helsinki",
} };

let owner = "Arttu Kesanto";

function AjoTiedot () {
return (
    <div>
    <Tiedot tiedot = { ajopvkirja } /> { /* // Pitää olla näin, divillä ei toiminut? DIVI jos kaksi elementtia, muuten parent... jos vain <> */ }
    <Tekija tekija = { owner } />
    </div>
);

};

export default AjoTiedot;