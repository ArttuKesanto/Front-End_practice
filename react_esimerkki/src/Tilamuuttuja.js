import React, { useState } from 'react'; // {Arttu Kesanto} cr

function ArvosanaTiedot () {
    const [tieto, setValues] = useState( {nimi: '', paiva: '', arvosana: ''});
    const [virheilmoitus, setVirhe] = useState({virheilmoitus: ''});

    const muutaOtsikko = (e) => {
    setValues( {
    ...tieto, [e.target.name]: e.target.value.toUpperCase() // Kokeilua.
    } );
    setVirhe({virheilmoitus : ''});
    };

    const change = (e) => { 
        setValues( {
    ...tieto, [e.target.name]: e.target.value } );
    setVirhe({virheilmoitus : ''});
    };

    const lisaaTieto = (e) => { 
        e.preventDefault(); // Ei haluta lähettää palvelimelle, koska on oma koodi.
        if (tieto.nimi.length === 0 || tieto.paiva.length === 0 || tieto.arvosana.length === 0) {
            setVirhe({virheilmoitus: 'Jokaisessa kentässä pitää olla tietoa.'});  // Tyhjentää rivit funktiota käytettäessä. Kokeilua.
        }
        else {
            setVirhe({virheilmoitus : 'Tiedot tallennettu!'});
        }
    };


    return (
        <div>
        <form>
        <label htmlFor='nimi'>Nimi: </label>
        <input type='text' name='nimi' value = { tieto.nimi } onChange = { e => muutaOtsikko(e)} /><br />

        <label htmlFor='paiva'> Päivä: </label>
        <input type='text' name='paiva' value = { tieto.paiva } onChange = { (e) => change(e)} /><br />

        <label htmlFor='arvosana'> Arvosana: </label>
        <input type='text' name='arvosana' value = { tieto.arvosana } onChange = { (e) => change(e)} /><br />
        
         { /* // Koska objekti, mene objektin sisälle. Pisteellä */ }
    
         { /* Voidaan suoraan muuttaa myös määrittelemällä funktio tässä */ }

        <input type='submit' value='Lisää' onClick = { (e) => lisaaTieto(e) }/> 
    </form>
    <div>
        <p> { virheilmoitus.virheilmoitus } </p>
    </div>

    </div>

   );

    }; 

    export default ArvosanaTiedot;