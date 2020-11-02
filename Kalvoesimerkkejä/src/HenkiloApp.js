import React from 'react';
import Teksti from './components/Teksti';
import Henkilolomake from './components/Henkilolomake';
import Henkilo from './components/Henkilo';
import Henkilolista from './components/Henkilolista';
import Sananlasku from './components/Sananlasku';
import Otsikko from './components/Otsikko';
const hlo = { nimi: 'Matti', email: 'matti@joku.com' };

const henkilot = [
  { id: 1, nimi: 'Matti', email: 'matti@joku.fi' },
  { id: 2, nimi: 'Maija', email: 'maija@joku.fi' },
];

function HenkiloApp() {
  return (
    <div>
      <Otsikko teksti="Esimerkkejä" />
      <Teksti />
      <Henkilolomake />
      <Henkilo henkilo={ hlo } />
      <Henkilolista henkilot={ henkilot } />
      <Sananlasku />
    </div>
  );
}

export default HenkiloApp;
