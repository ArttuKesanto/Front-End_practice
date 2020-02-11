import React from 'react';

function Matka (props) { // Saa itse keksiä parametrin, mutta keksi / käytä props.
    return (
        <div> { /* Teksti täytyy olla jonkun elementin sisällä. Elementti täytyy olla. Returnin sisässä kommentointi näy. */ }

            Otsikko: { props.matka.otsikko }<br />
            Päivä: { props.matka.paiva }<br />
            Paikka: { props.matka.paikka }<br />
            Sää: { props.matka.saa }<br />
            Kuvaus: { props.matka.kuvaus } <br />

        </div>
    );
};

export default Matka; // Voidaan kirjoittaa suoraan komponentin eteen. CTRL + C on terminointi.