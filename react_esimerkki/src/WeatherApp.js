import React, {useState} from 'react';

function Saalomake () {
    const [saatieto, setSaatieto] = useState( {
        paikkakunta: '',
        kuva: '',
        lampotila: '',
        kuvaus: '',
        tuuli: ''
    } );
    const[virhe, setVirhe] = useState('');
    const[paikkakunta, setPaikkakunta] = useState('Helsinki');

    const fetchUrl = async () => {
        try {
            const response = await fetch('http://api.openweathermap.org/data/2.5/weather?lang=fi&q=' + paikkakunta + '&units=metric&APPID=ff7e09dee28d52bf867dd6ff295dc647');
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

    const hae = (e) => {
        if (paikkakunta.length > 0) {
            fetchUrl();
        } else {
            setVirhe('Anna paikkakunta');
        }
    }

    return (
        <div>
            <form>
                <label htmlFor='paikkakunta'>Paikkunta</label>
                <input type='text' name='paikkakunta' id='paikkakunta' value={ paikkakunta } onChange={ (e) => setPaikkakunta(e.target.value) } />
                <input type='button' name='hae' value='Hae' onClick={ (e) =>  hae(e)  } />
            </form>
            {
                saatieto.paikkakunta.length > 0 && virhe.length === 0 ?
                <div>
                    <h3>{ saatieto.paikkakunta }</h3>
                    <img src={ saatieto.kuva } alt={ 'kuva' } /> 
                    { saatieto.lampotila } &#8451;<br />
                    { saatieto.kuvaus } <br />
                    { saatieto.tuuli } m/s
                </div>
                : <p>{ virhe }</p>
            }          
        </div>
    );
}
export default Saalomake;