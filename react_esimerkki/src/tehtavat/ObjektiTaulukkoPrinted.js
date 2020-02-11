import React from 'react';

function Objektitaulukko(props) { // Saa itse keksiä parametrin, mutta keksi / käytä props.
    return (
        <div> { /* Teksti täytyy olla jonkun elementin sisällä. Elementti täytyy olla. Returnin sisässä kommentointi näy. */ }
            { props.henkilot.map( individual => {
                return (
                 <p key = { individual.nimi }>
                 Nimi: { individual.nimi } <br />
                 Alkaa: { individual.alkupaiva } <br />
                 Loppuu : { individual.loppupaiva }
                 
                 </p>);
            })
        }
        </div>);  
};

export default Objektitaulukko;