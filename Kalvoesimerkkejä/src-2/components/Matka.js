import React from  'react';

// Komponentti, joka näyttää objektin tiedot
function Matka(props) {
    return (
        <p>
            { /*  Näytetään objektin tiedot */ }
            Otsikko: { props.matka.otsikko } <br />
            Päivä: { props.matka.paiva }<br />
            Paikka: { props.matka.paikka }<br />
            Sää: { props.matka.saa }<br />
            Kuvaus: { props.matka.kuvaus }
        </p>
    );
}

export default Matka; 