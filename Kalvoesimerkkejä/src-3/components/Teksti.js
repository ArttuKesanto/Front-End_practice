import React from 'react';

function Teksti() {
   let teksti = 'React.js';
   return (
      <div>
        <h3>{ teksti.toUpperCase() }</h3>
        <p>Reactin perusteita</p>
      </div>
   )
}

export default Teksti;
