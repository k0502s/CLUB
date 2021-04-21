import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import loadUser from './components/Authentication/loadUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom.scss';
import GlobalStyle from './assets/GlobalStyle';
loadUser();
ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
);
