import React from 'react';

function Tekija(props) { // Saa itse keksiä parametrin, mutta keksi / käytä props.
    return (
        <div>
            Laatija: { props.tekija }
        </div>
    );  
};

export default Tekija;