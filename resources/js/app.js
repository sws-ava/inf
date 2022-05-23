require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render( <App /> , document.getElementById('app'))
