import React, { useState } from 'react';

function HenkilolomakePerus () {
// tilamuuttujat ja niiden muuttamiskutsu
    const [nimi, setNimi] = useState('');
    const [email, setEmail] = useState('');

// Funktio, jolla muutetaan tilaa
  const muutaNimi = (e) => {
   setNimi( e.target.value.toUpperCase() );
  }

// Funktio painikkeen painallukselle
  const lisaaHenkilo = (e) => {
    e.preventDefault();

    setNimi('');
    setEmail('');
  }

  return (
    <form>
        <label htmlFor='nimi'>Nimi </label>
        <input type='text' name='nimi' value={nimi} onChange={ (e) => muutaNimi(e) } /><br />
        <label htmlFor='email'>Email </label>
        <input type='text' name='email' value={email} onChange={ (e) => setEmail(e.target.value) } /><br />
        <input type='submit' value='Lisää' onClick={ (e) => lisaaHenkilo(e) } />
    </form>
  );
}

export default HenkilolomakePerus;
