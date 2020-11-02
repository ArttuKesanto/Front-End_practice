import React, { useState } from 'react';

function Henkilolomake () {
// tilamuuttujat ja niiden muuttamiskutsu
  const [henkilo, setValues] = useState({
      nimi: '',
      email: '',
  });

// Funktio, jolla muutetaan tilaa
  const muuta = (e) => {
     setValues({
       ...henkilo,
       [e.target.name]: e.target.value
     });
   };

   const muutaSuureksi = (e) => {
      setValues({
        ...henkilo,
        [e.target.name]: e.target.value.toUpperCase()
      });
    };

// Funktio painikkeen painallukselle
  const lisaaHenkilo = (e) => {
    e.preventDefault();

    setValues({
      nimi: '',
      email: '',
    });
  }

  return (
    <form>
        <label htmlFor='nimi'>Nimi </label>
        <input type='text' name='nimi' value={ henkilo.nimi} onChange={ (e) => muutaSuureksi(e) } /><br />
        <label htmlFor='email'>Email </label>
        <input type='text' name='email' value={ henkilo.email } onChange={ (e) => muuta(e) } /><br />
        <input type='submit' value='Lisää' onClick={ (e) => lisaaHenkilo(e) } />
    </form>
  );
}

export default Henkilolomake;
