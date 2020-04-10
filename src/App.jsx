import React, { Component } from 'react';
import { Layout } from 'antd';
import AppRouter from '@/router'
import SiderCustom from '@/components/SiderCustom'
import HeaderCustom from '@/components/HeaderCustom'

const { Content } = Layout;

export default class App extends Component {


	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
		}
	}

	toggleSideMenu = () => {
		const { collapsed } = this.state;
		this.setState({
			collapsed: !collapsed,
		})
	}

	render() {
		const { collapsed } = this.state;

		return (
			<div className="App">
				<Layout>
					<SiderCustom collapsed={collapsed} />
					<Layout>
						<HeaderCustom
							toggle={this.toggleSideMenu}
							history={this.props.history}
							collapsed={collapsed}
						></HeaderCustom>
						<Content className="app-content">
							<AppRouter />
						</Content>
					</Layout>
				</Layout>
			</div>
		)
	}
};