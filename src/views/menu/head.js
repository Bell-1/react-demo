import React, { Component } from 'react'
import { Layout, Menu, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";

const { Header } = Layout;

class Head extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	logout = () => {
		this.props.history.push('/login')
	}

	render() {
		const { userInfo } = this.props;
		return (
			<Header className="header-menu">
				<div className="logo" />
				<Row type="flex" justify="end">
					<Col className=""><Link to="/app/user">用户: {userInfo.name}</Link></Col>
					<Col className="" onClick={this.logout}>退出</Col>
				</Row>
			</Header>
		)
	}
}

export default withRouter(Head)
