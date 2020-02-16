import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd'
import configRoutes from '@/router/config'

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

		const createItem = ({ key, icon, title }) => {
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
					{icon && (<Icon type={icon} ></Icon>)}
					<span>{title}</span>
				</span>
			)
		}

		return route.subs ? createSubMenu(route) : createItem(route);
	}

	componentDidMount() {
		console.log('menus', menus)
	}

	render() {
		const { collapsed, mode } = this.props;

		return (
			<Sider collapsed={collapsed}>
				<div className="logo">
					logo
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