import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import App from './App';
import Login from '@/pages/Login/Login'
import NotFound from '@/pages/404/404'

export default class MainPage extends Component {
    render() {
        return (
            <ConfigProvider locale={zh_CN}>
                <Provider store={this.props.store}>
                    <Router>
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to="/login" push />} />
                            <Route path="/login" component={Login} />
                            <Route path="/app" component={App} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </Router>
                </Provider>
            </ConfigProvider>
        )
    }
}
