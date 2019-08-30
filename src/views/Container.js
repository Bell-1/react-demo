import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { Layout, Breadcrumb } from 'antd'
import Header from './menu/head'
import Side from './menu/side'
import { RouteWithSubRoutes, pathMap, routesMap } from '../route'

const { Content } = Layout;

class Container extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { userInfo } = this.props;
		let collapsed = false,
			{ location, routes, history } = this.props,
			{ pathname } = location,
			menuSelectKey = '',
			breadcrumbItems = [],
			route = routesMap.get(pathname);
		if (!userInfo) {
			//未登录去登陆页面
			history.push('/login');
		}
		if (route && route.breadcrumb) {
			breadcrumbItems = route.breadcrumb.map((pathName) => {
				const path = pathMap[pathName];
				return (<Breadcrumb.Item key={path}>
					<Link to={path}>
						{pathName}
					</Link>
				</Breadcrumb.Item>);
			})
		}
		return (
			<Layout className="app">
				<Header userInfo={userInfo} />
				<Layout className="main-container" hasSider={true}>
					<Side {...this.props} collapsed={collapsed} selectKey={menuSelectKey} />
					<Layout className='main-content' style={{ padding: '0 15px' }}>
						<Breadcrumb className={'main-bread-crumb'} style={{ padding: '10px 0' }}>
							{breadcrumbItems}
						</Breadcrumb>
						<Content>
							<Switch>
								{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
							</Switch>
						</Content>
					</Layout>

				</Layout>
			</Layout>
		)
	}
}


const mapStateToProps = state => {
	return {
		userInfo: state.user.userInfo
	}
}

const mapDispatchToProps = dispath => {
	return {
	}
}

const ContainerWithState = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ContainerWithState


