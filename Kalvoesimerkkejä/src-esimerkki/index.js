import React from 'react';
import ReactDOM from 'react-dom';

import MatkaApp from './MatkaApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MatkaApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
