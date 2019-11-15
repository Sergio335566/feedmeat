import React from 'react';
import ReactDOM from 'react-dom';
import './style-imports.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
