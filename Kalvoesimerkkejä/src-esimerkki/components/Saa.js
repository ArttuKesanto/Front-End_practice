import React, {useState, useEffect} from 'react';

function Saa () {
    const [saatieto, setSaatieto] = useState( {
        paikkakunta: '',
        kuva: '',
        lampotila: '',
        kuvaus: '',
        tuuli: ''
    } );
    const[virhe, setVirhe] = useState('Haetaan...');

    const fetchUrl = async () => {
        try {
            const response = await fetch('http://api.openweathermap.org/data/2.5/weather?lang=fi&q=Helsinki&units=metric&APPID=lisaa_oma_APPID');
            const json = await response.json();
            setSaatieto(
                {
                    paikkakunta: json.name,
                    kuva: 'http://api.openweathermap.org/img/w/' + json.weather[0].icon,
                    lampotila: json.main.temp.toFixed(1),
                    kuvaus: json.weather[0].description,
                    tuuli: json.wind.speed.toFixed(0)
                }
            );
            setVirhe('');
        } catch (error) {
            setVirhe('Haku ei onnistunut. Lisää oma APPID');
        }
    }

    // async fetcUrl () {  }

    useEffect( () => { fetchUrl() }, []);

    if (virhe.length > 0) {
        return(
            <p>{ virhe }</p>
        );
    }

    return (
        <div>
            <h3>{ saatieto.paikkakunta }</h3>
            <img src={ saatieto.kuva } alt={ 'kuva' } />
            { saatieto.lampotila } &#8451;<br />
            { saatieto.kuvaus } <br />
            { saatieto.tuuli } m/s
        </div>
    );
}
export default Saa;