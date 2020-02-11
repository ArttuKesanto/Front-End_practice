import React, { useEffect, useState } from 'react';

function PersonInformation() {

    const [personInfo, setInfo] = useState({
        name: '',
        user: '',
        city: ''
    });
    const [virhe, setVirhe] = useState('Haetaan tietoja...');

    const fetchUrl = async () => {

try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
    const json = await response.json();
        setVirhe('');
        setInfo ( 
            {
                name: json.name,
                user: json.username,
                city: json.address.city
            } 
                );
        
    } catch (error) {
        setVirhe("Haku ei onnistunut. Kokeile uudestaan.");  
    }
}

    useEffect( () => { fetchUrl() }, [] ); // Tarkastetaan muuttujan luonti.

if (virhe.length > 0) {
    return ( 
   <p>
       { virhe }
   </p>);
}


return (
<div id ='test'>
    Nimi: { personInfo.name }<br />
    { /* {<img src={ saaTieto.kuva } alt="Kuva" ></img><br />} VANHAA KOODIA MUISTUTUKSENA*/ }
    Käyttäjä: { personInfo.user }<br />
    Kaupunki: { personInfo.city }<br />

<p>{ virhe }</p>
    
</div> );
}

export default PersonInformation;