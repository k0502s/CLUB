import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import MyRouter from './components/Myrouter/Router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppNavbar from './components/Nav/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom.scss';

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Header />
                <AppNavbar />
                <MyRouter />
                <Footer />
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
