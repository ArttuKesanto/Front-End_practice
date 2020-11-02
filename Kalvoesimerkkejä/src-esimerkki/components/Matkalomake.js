import React, { useState, useEffect } from 'react';

function Matkalomake () {
// tilamuuttujat ja niiden muuttamiskutsu
  const [matka, setValues] = useState({
      otsikko: '',
      paiva: '',
      paikka: '',
      saa: '',
      kuvaus: '',
  });

// Funktio, jolla muutetaan tilaa
  const muuta = (e) => {
     setValues({
       ...matka,
       [e.target.name]: e.target.value
     });
   };

// Funktio painikkeen painallukselle
  const lisaaMatka = (e) => {
    e.preventDefault();

    setValues({
        otsikko: '',
        paiva: '',
        paikka: '',
        saa: '',
        kuvaus: '',
    });
  }

  return (
    <form>
        <label htmlFor='otsikko'>Otsikko </label>
        <input type='text' name='otsikko' value={ matka.otsikko } onChange={ (e) => muuta(e) } /><br />
        <label htmlFor='paikka'>Paikka </label>
        <input type='text' name='paikka' value={ matka.paikka } onChange={ (e) => muuta(e) } /><br />
        <label htmlFor='paiva'>Päivä </label>
        <input type='text' name='paiva' value={ matka.paiva } onChange={ (e) => muuta(e) } /><br />
        <label htmlFor='saa'>Sää </label>
        <input type='text' name='saa' value={ matka.saa } onChange={ (e) => muuta(e) } /><br />
        <label htmlFor='kuvaus'>Kuvaus </label>
        <input type='text' name='kuvaus' value={ matka.kuvaus } onChange={ (e) => muuta(e) } /><br />
        <input type='submit' value='Lisää' onClick={ (e) => lisaaMatka(e) } />
    </form>
  );
}

export default Matkalomake;
