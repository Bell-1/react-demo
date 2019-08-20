import React, { Component } from 'react'

import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class Side extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menus: [{
				title: '图表',
				to: '/app/dashboard',
				key: '0',
			}, {
				title: '加载',
				to: '/app/load',
				key: '1',
			}, {
				title: '数字滚动',
				to: '/app/digitalScroll',
				key: '2',
			}]
		}
	}

	render() {
		const { menus } = this.state;
		const { pathname } = this.props.location;
		const defaultSelectedKeys = menus.filter(item => item.to === pathname).map(item => item.key);
		return (
			<Sider>
				<Menu
					mode="inline"
					defaultSelectedKeys={defaultSelectedKeys}
					style={{ height: '100%', borderRight: 0 }}
				>
					{menus.map(({ to, title, key }) => (
						<Menu.Item key={key}>
							<Link to={to}>{title}</Link>
						</Menu.Item>
					))}
				</Menu>
			</Sider>
		)
	}
}
