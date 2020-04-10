import React, { Component } from 'react';
import Breadcrumb from '@/components/Breadcrumb'
import { observer } from 'mobx-react'
import { observable, action } from "mobx"
import ObTest from './OBTest1'

const store = observable({
	a: 1
})

@observer
class Home extends Component {

	componentDidMount() {
		this.changeA();
	}

	@action
	changeA() {
		setInterval(() => {
			store.a++
		}, 1000);
	}

	render() {
		return (
			<div className="home">
				<Breadcrumb></Breadcrumb>

				<div className="">
					{store.a}
				</div>

				<div className="">
					ObTest
					<ObTest store={store}></ObTest>
				</div>
			</div>
		)
	}
}

export default Home;