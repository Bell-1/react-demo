import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '@/store'
// import NotFound from './components/pages/NotFound';
// import Login from './components/pages/Login';
import App from './App';
import Login from '@/pages/Login';
import NotFound from '@/pages/404';

let store = createStore(reducers)

export default () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />
                <Route path="/app" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/404" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>
);
