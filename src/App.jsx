import React, { Component } from 'react';
import { Layout } from 'antd';
import AppRouter from '@/router'
import { connect } from 'react-redux'
import SiderCustom from '@/components/SiderCustom'
import HeaderCustom from '@/components/HeaderCustom'
import { toggleSideMenu } from '@/store/actions/app'

const { Content } = Layout;

class App extends Component {


	constructor(props) {
		super(props);
		this.state = {
			a: 1
		}
	}

	viewPage(page) {
	}

	componentDidMount() {
		console.log(this.props)
	}


	render() {
		const { collapsed, toggleSideMenu } = this.props;

		return (
			<div className="App">
				<Layout>
					<SiderCustom collapsed={collapsed} />
					<Layout>
						<HeaderCustom
							toggle={toggleSideMenu}
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

const mapStateToProps = state => {
	return {
		collapsed: state.app.collapsed
	}
}

const mapDispatchToProps = (dispatch, ownProps, state) => {
	console.log('ownProps', ownProps, state)
	return {
		toggleSideMenu: () => {
			dispatch(toggleSideMenu())
		}
	}
}

const AppStore = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default AppStore;