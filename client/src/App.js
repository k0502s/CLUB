import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import MyRouter from './components/Myrouter/Router';
import { HashRouter } from 'react-router-dom';

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <HashRouter>
                    <MyRouter />
                </HashRouter>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
