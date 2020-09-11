import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

console.log(process.env.NODE_ENV);
ReactDOM.render(<App />, document.getElementById('app'));
