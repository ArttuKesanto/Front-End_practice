import React from 'react'; // Tämä kertoo, mikä on sovelluksen käynnistävä komponentti.
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
//import MatkaApp from './MatkaApp';
import App from './App';

//ReactDOM.render(<MatkaApp />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
