import React, { useEffect, useState }from 'react';

function Saatiedot() {

    const [saaTieto, setSaaTieto] = useState({
        paikkakunta: '',
        kuva: '',
        lampotila: '',
        kuvaus: '',
        tuuli: ''
    });
    const [virhe, setVirhe] = useState('Haetaan...');

    const fetchUrl = async () => {

try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Helsinki,Finland&units=metric&appid=ff7e09dee28d52bf867dd6ff295dc647');
    const json = await response.json();
        setVirhe('');
        setSaaTieto ( 
            {
                paikkakunta: json.name,
                kuva: 'http://api.openweathermap.org/img/w/' + json.weather[0].icon,
                lampotila: json.main.temp.toFixed(1),
                kuvaus: json.weather[0].description,
                tuuli: json.wind.speed.toFixed(0)
            } 
                );
        
    } catch (error) {
        setVirhe("Haku ei onnistunut");  
    }
}

    useEffect( () => { fetchUrl() }, [] );

if (virhe.length > 0) {
    return ( 
   <p>
       { virhe }
   </p>);
}


return (
<div>
    Paikkakunta: { saaTieto.paikkakunta }<br />
    <img src={ saaTieto.kuva } alt="Kuva" ></img><br />
    Lämpötila: { saaTieto.lampotila }<br />
    Kuvaus: { saaTieto.kuvaus }<br />
    Tuuli: { saaTieto.tuuli + " m/s"}<br />

<p>{ virhe }</p>
    
</div> );
}

export default Saatiedot;