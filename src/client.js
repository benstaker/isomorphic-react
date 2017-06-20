import ReactDOM from 'react-dom';
import AppClient from './components/AppClient';

window.onload = () => {
  ReactDOM.render(AppClient(), document.getElementById('main'));
};
