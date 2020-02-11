import React from 'react';

// Tai props.weather?

function Weather(props) {
    return (
        <div>
            Sää: {props.json.temp}
            Kaupunki: {props.json.name}
        </div>
    )
}

export default Weather;