import React from 'react';

// let teksti = "front end -ohjelmoija";
function Tiedot(props) { // Saa itse keksiä parametrin, mutta keksi / käytä props.
    return (
        <div> { /* Teksti täytyy olla jonkun elementin sisällä. Elementti täytyy olla. Returnin sisässä kommentointi näy. */ }

            Nimi: { props.tiedot.laatija }<br />
            Rekisterinumero: { props.tiedot.rekisterinro }<br />
            Matka: { props.tiedot.loppu.lukema - props.tiedot.alku.lukema + " Km"}<br />
            <br />
            { /* Hello {teksti}, omaa kokeilua.... */ }
            <br />
            Tekijä: { 'Arttu Kesanto' }<br /> { /* Voidaan myös kokeilla <p></p> -tägejä.... */ }
        </div>
    );  
};

export default Tiedot; // Voidaan kirjoittaa suoraan komponentin eteen. CTRL + C on terminointi.