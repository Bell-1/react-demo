import React from 'react'
import { Route } from 'react-router-dom'
import Login from '@/views/Login/Login';
import Container from '@/views/Container';
import Dashboard from '@/views/Dashboard/Dashboard'
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
		path: "/app/dashboard",
		component: Dashboard,
		breadcrumb: ['首页', '图表']
	},
	{
		path: "/app/digitalScroll",
		component: DigitalScroll,
		breadcrumb: ['首页', '数字滚动']
	},
	{
		path: "/app/user",
		component: User,
		breadcrumb: ['首页', '个人中心']
	},
	{
		path: "/app/load",
		component: Load,
		breadcrumb: ['首页', '加载']
	}
	]
}];


export const pathMap = {
	登录: '/login',
	首页: '/app/dashboard',
	图表: '/app/dashboard',
	个人中心: '/app/user',
	加载: '/app/load',
	数字滚动: '/app/digitalScroll',
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
