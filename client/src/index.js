import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/index';
import * as serviceWorker from './serviceWorker';
console.log(App);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
