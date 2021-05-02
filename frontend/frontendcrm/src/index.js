import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux tools
import { Provider } from 'react-redux';
import store from '../src/redux/store/store';
import Alerts from './components/Alerts/Alerts'
// React Alert Provider 

import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
const alertOptions = {
// you can also just use 'bottom center'

timeout: 5000,
offset: '30px',
// you can also just use 'scale'
transition: transitions.SCALE,
containerStyle: {
  zIndex: 5000,
  position: 'fixed',
}
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AlertProvider template={AlertTemplate}{...alertOptions}>
      <Alerts/>
        <App/>
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
