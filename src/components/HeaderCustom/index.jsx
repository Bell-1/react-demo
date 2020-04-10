import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const { Header } = Layout;

class HeaderCustom extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	logout = () => {
		this.props.history.push('/login');
	}

	render() {
		const { toggle, collapsed, userInfo } = this.props;
		return (
			<Header className="header-custom">
				<div className="header__trigger">
					{collapsed ? <MenuUnfoldOutlined onClick={toggle} /> : <MenuFoldOutlined onClick={toggle} />}
				</div>
				<div className="right">
					<div className="user">欢迎: {userInfo && userInfo.name}</div>
					<div className="logout" onClick={this.logout}>退出</div>
				</div>
			</Header>
		)
	}
}

const mapStateToProps = state => {
	return {
		userInfo: state.user.userInfo || null
	}
}

const mapDispatchToProps = dispath => {
	return {
	}
}
const withState = connect(mapStateToProps, mapDispatchToProps)(HeaderCustom);


export default withState;