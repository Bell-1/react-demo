import React, { Component } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import Line from './charts/Line'
import Bar from './charts/Bar'
import Cards from './Cards'

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}


	render() {
		return (
			<div className="Dashboard theme-green">
				<Breadcrumb></Breadcrumb>
				<div className="flex wrap j-between">
					<Cards></Cards>
					<Bar></Bar>
				</div>
				<Line></Line>
			</div>
		)
	}
}
