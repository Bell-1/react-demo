import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Layout, Menu } from 'antd'
import configRoutes from '@/router/config'
import { TableOutlined, HomeOutlined, FieldBinaryOutlined, LoadingOutlined } from '@ant-design/icons';
import logo from '@/assets/logo/logo2.png'

const icons = {
	TableOutlined: <TableOutlined />,
	HomeOutlined: <HomeOutlined />,
	FieldBinaryOutlined: <FieldBinaryOutlined />,
	LoadingOutlined: <LoadingOutlined />,
}

const { menus } = configRoutes;
const { Sider } = Layout;
const { Item, SubMenu } = Menu;

class SiderCustom extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidMount() {
		this.collapsed = this.props.collapsed;
	}

	handleMenuItem = (path) => {
		this.props.history.push(path);
	}

	createMenu = (route) => {

		const createItem = ({ key, icon, title, subs }) => {
			return (
				<Item key={key} onClick={this.handleMenuItem.bind(this, key)}>
					{createTitle({ icon, title })}
				</Item>
			)
		}

		const createSubMenu = ({ key, icon, title, subs }) => {
			return (
				<SubMenu
					key={key}
					title={createTitle({ icon, title })}
				>
					{subs.map(createItem)}
				</SubMenu>
			)
		}

		const createTitle = ({ key, icon, title }) => {
			return (
				<span>
					{(icon && icons[icon]) || null}
					<span>{title}</span>
				</span>
			)
		}

		return route.subs ? createSubMenu(route) : createItem(route);
	}

	render() {
		const { collapsed } = this.props;

		return (
			<Sider collapsed={collapsed}>
				<div className={['logo', collapsed && 'hide'].join(' ')}>
					<img src={logo} alt="" />
				</div>
				<Menu
					theme="dark"
					mode='inline'
				>
					{menus.map(this.createMenu)}
				</Menu>
			</Sider>
		)
	}
}

export default withRouter(SiderCustom);