import React, { useState, useEffect } from 'react';

function Sananlasku () {
  const [tekija, setTekija] = useState('');
  const [teksti, setTeksti] = useState('');
  const [virhe, setVirhe] = useState('Haetaan ...');

  async function fetchUrl() {
    try {
      const response = await fetch('http://quotes.rest/qod.json');
      const json = await response.json();
      setTekija(json.contents.quotes[0].author);
      setTeksti(json.contents.quotes[0].quote);
      setVirhe('');
    } catch (error) {
      //setTekija('Sirpa');
      //setTeksti('Koodauksen onnea');
      setVirhe('Sananlaskun haku ei onnistunut');
    }
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  if (virhe.length > 0) {
    return (<div>{virhe}</div>)
  }

  return (
      <div>
        {teksti}<br /> -{tekija}-
      </div>
  );
}

export default Sananlasku;
