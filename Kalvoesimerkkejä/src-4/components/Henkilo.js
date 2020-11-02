import React from 'react';

function Henkilo (props) {
  return (
    <p style={styles.henkiloStyle}>
      Nimi: { props.henkilo.nimi }<br/>
      Email: { props.henkilo.email }
    </p>
  );
}

const styles = {
  henkiloStyle: {
   backgroundColor: 'lightblue',
   color: 'white',
   marginTop:'0.5cm'
  },
};

export default Henkilo;
