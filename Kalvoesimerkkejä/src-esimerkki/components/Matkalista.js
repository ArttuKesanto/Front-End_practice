import React from 'react';

function Matkalista(props) {
    return (
        <div>
            {
              props.matkat.map( matka => {
                  return (
                      <p>
                          Otsikko: { matka.otsikko } <br />
                          Paikka: { matka.paikka } <br />
                          Päivä: { matka.paiva } <br />
                      </p>
                  )
              })  
            }
        </div>
    );
}


export default Matkalista;