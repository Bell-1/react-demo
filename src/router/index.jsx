import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import routesConfig from './config.js'
import allComponent from './allComponent'

export default class CrRoutes extends Component {
	createRoute = (key) => {
		return routesConfig[key].map(r => {
			const route = r => {
				const Component = r.component && allComponent[r.component];
				return (
					<Route
						key={r.key}
						exact
						path={r.key}
						render={
							props => {
								return (
									<Component {...props} />
								)
							}
						}
					/>
				)
			}

			const subRoute = r =>
				r.subs && r.subs.map(subR => (subR.subs ? subRoute(subR) : route(subR)));

			return r.component ? route(r) : subRoute(r);
		})
	}

	componentDidMount(){
		console.log(Object.keys(routesConfig).map(key => this.createRoute(key)))
	}

	render() {
		return (
			<Switch>
				{Object.keys(routesConfig).map(key => this.createRoute(key))}
				<Route render={() => <Redirect to="/404" />} />
			</Switch>
		)
	}
}