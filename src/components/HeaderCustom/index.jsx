import React, { Component } from 'react'
import { Layout, Icon } from 'antd'

const { Header } = Layout;

export default class HeaderCustom extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	render() {
		return (
			<Header className="header-custom">
				<Icon
					className="header__trigger"
					type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={this.props.toggle}
				/>
			</Header>
		)
	}
}
