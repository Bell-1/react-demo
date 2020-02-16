import React, { Component } from 'react'
import { connect } from 'react-redux'
import Breadcrumb from '@/components/Breadcrumb'
import Line from './charts/Line'
import Bar from './charts/Bar'
import Cards from './Cards'


class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}


	render() {
		return (
			<div className="Dashboard theme-green">
				<Breadcrumb></Breadcrumb>
				<div className="flex wrap j-center">
					<Cards></Cards>
					<Bar></Bar>
				</div>
				<Line></Line>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		collapsed: state.app.collapsed
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
	}
}

const DashboardStore = connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard)

export default DashboardStore;
