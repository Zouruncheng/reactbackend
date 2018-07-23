import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from './pages/demo/Life';
import registerServiceWorker from './registerServiceWorker';
import Admin from './admin'
import Router from './router'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
