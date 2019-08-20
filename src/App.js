import React, { Component } from 'react'
import { BrowserRouter as Router, withRouter, Switch } from "react-router-dom";
import { Provider, connect } from 'react-redux';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { RouteWithSubRoutes, routes, pathMap } from './route'


class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<LocaleProvider locale={zh_CN}>
				<Provider store={this.props.store}>
					<Router>
						<Switch>
							{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
						</Switch>
					</Router>
				</Provider>
			</LocaleProvider>
		)
	}
}

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo
	}
}

const mapDispatchToProps = dispath => {
	return {
	}
}

const AppWithState = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWithState

