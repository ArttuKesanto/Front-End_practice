import React, { useState } from 'react';

function Henkilolomake () {
    const [nimi, setNimi] = useState(''); 
    const [email, setEmail] = useState('');

    const changeName = (e) => {
        setNimi( e.target.value.toUpperCase() );
    };

    const changeEmail = (e) => {
        setEmail( e.target.value.toUpperCase() );
    };
    
    const lisaaHenkilo = (e) => { 
        setNimi('');
        setEmail(''); // Tyhjentää rivit funktiota käytettäessä.
};
    return (
        <form>
            <label htmlFor='nimi'>Nimi </label>
            <input type='text' name='nimi' value = { nimi } onChange = { (e) => changeName(e)} /><br />
        
            <label htmlFor='email'>Email </label>
            <input type='text' name='email' value = { email } onChange = { (e) => changeEmail(e)} /><br /> { /* Voidaan suoraan muuttaa myös määrittelemällä funktio tässä */ }

            <input type='submit' value='Lisää' onClick = { (e) => lisaaHenkilo(e) }/> 

        </form>
 ); 
};

export default Henkilolomake;