import React from 'react';

function Henkilolista(props) {
  return (
    <div>
      { props.henkilot.map(henkilo => {
         return (
           <p key={henkilo.id}>
             Nimi: { henkilo.nimi }<br/>
             Email: { henkilo.email }
           </p>
         )
      } )
    }
  </div>
  )
}

/*
Toinen tapa
function Henkilolista(props) {
    let hlot = props.henkilot.map(function(henkilo, index) {
      return (<p key={index}>
            Nimi: { henkilo.nimi }<br/>
            Email: { henkilo.email }
         </p>);
    });
    return ( <div>{hlot}</div> );
}
*/

export default Henkilolista;
