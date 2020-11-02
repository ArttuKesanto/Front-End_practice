import React, {useState, useEffect} from 'react';

function FetchExam () {
const [patientInfo, setInfo ] = useState([]);
const [virhe, setVirhe] = useState('Haetaan...');

const fetchUrl = async () => {
    try { 

        const response = await fetch('https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaHospitalData');
        const json = await response.json();
         setVirhe ('');
         setInfo(json.hospitalised);  

    } catch (error) {
        setVirhe("Could not load the desired information! Try again!");

    }
}

useEffect( () => { fetchUrl() }, [] );
console.log(patientInfo);

if (virhe.length > 0) {
    return( 
            <p> {virhe} </p>
        );
}

    return( 
        <div>
            
            {patientInfo.map((tieto) => ( 
            
            <p> 

          Päivä:       {tieto.date.substr(0,10)} <br /> 
          Paikka:      {tieto.area}  <br /> 
          Sairaalassa:      {tieto.totalHospitalised}  
          , joista osastolla      {tieto.inWard} <br />
            ja tehohoidossa    {tieto.inIcu} <br /> 
            Kuolleet:    {tieto.dead}
            </p>
            )) }

        </div>


    )

}

export default FetchExam;