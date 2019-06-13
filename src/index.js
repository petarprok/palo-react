import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './MainComponent';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.scss';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';

ReactDOM.render(<MainComponent />, document.getElementById('root'));
serviceWorker.unregister();
