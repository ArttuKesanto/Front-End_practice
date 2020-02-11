import React, { useState } from 'react';

function MatkaLomake () {
    const [matka, setValues] = useState( {otsikko: '', paiva: '', paikka: '', saa: '', kuvaus: ''} );
    
    const muutaOtsikko = (e) => {
    setValues( {
    ...matka, [e.target.name]: e.target.value.toUpperCase()
    } ); 
};
    const change = (e) => { 
        setValues( {
    ...matka, [e.target.name]: e.target.value } );
    };

    const lisaaMatka = (e) => { 
        setValues('');  // Tyhjentää rivit funktiota käytettäessä.
};

    return (
        <form>
        <label htmlFor='otsikko'>Otsikko </label>
        <input type='text' name='otsikko' value = { matka.otsikko } onChange = { e => muutaOtsikko(e)} /><br />

        <label htmlFor='paiva'>Päivä </label>
        <input type='text' name='paiva' value = { matka.paiva } onChange = { (e) => change(e)} /><br />

        <label htmlFor='paikka'>Paikka </label>
        <input type='text' name='paikka' value = { matka.paikka } onChange = { (e) => change(e)} /><br />

        <label htmlFor='saa'>Sää </label>
        <input type='text' name='saa' value = { matka.saa } onChange = { (e) => change(e)} /><br />

        <label htmlFor='kuvaus'>Kuvaus </label>
        <input type='text' name='kuvaus' size = "80" value = { matka.kuvaus } onChange = { (e) => change(e)} /><br /> { /* // Koska objekti, mene objektin sisälle. Pisteellä */ }
    
         { /* Voidaan suoraan muuttaa myös määrittelemällä funktio tässä */ }

        <input type='submit' value='Lisää' onClick = { (e) => lisaaMatka(e) }/> 

    </form>
     ); 
    };

    export default MatkaLomake;