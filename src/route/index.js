import React from 'react'
import { Route } from 'react-router-dom'
import Login from '@/views/Login/Login';
import Container from '@/views/Container';
import Dashboard from '@/views/Dashboard/Dashboard'
import Table from '@/views/Table/Table'
import User from '@/views/User/User'
import Load from '@/views/Load/Load'
import DigitalScroll from '@/views/DigitalScroll/DigitalScroll'
import NotFound from '@/views/404/404'

export const routes = [{
	path: '/',
	exact: true,
	component: Login
}, {
	path: '/login',
	component: Login
}, {
	path: '/app',
	component: Container,
	routes: [{
		path: "/app/table",
		component: Table,
		breadcrumb: ['home', 'table']
	}, {
		path: "/app/dashboard",
		component: Dashboard,
		breadcrumb: ['home', 'echart']
	}, {
		path: "/app/digitalScroll",
		component: DigitalScroll,
		breadcrumb: ['home', 'numberScroll']
	}, {
		path: "/app/user",
		component: User,
		breadcrumb: ['home', 'person']
	}, {
		path: "/app/load",
		component: Load,
		breadcrumb: ['home', 'loading']
	}, {
		component: NotFound,
	}]
}, {
	component: NotFound,
}];


export const pathMap = {
	login: '/login',
	home: '/app/table',
	table: '/app/table',
	echart: '/app/dashboard',
	user: '/app/user',
	loading: '/app/load',
	numberScroll: '/app/digitalScroll',
}


function genRouteMap(arrs, map = new Map()) {
	arrs.forEach(item => {
		item.path && map.set(item.path, item);
		item.routes && genRouteMap(item.routes, map);
	});
	return map
}

export const routesMap = genRouteMap(routes);

export function RouteWithSubRoutes(route) {
	return (
		<Route
			path={route.path}
			render={props => (
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
}
