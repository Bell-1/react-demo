import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

@observer
class OBTest1 extends Component {
	@observable b = 1;

	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	componentDidMount() {
		this.store.b = 5
		this.changeB();
	}

	@action
	changeB() {
		setInterval(() => {
			this.store.b++
		}, 1000);
	}

	render() {
		return (
			<div>
				a: {this.b}
				<div className="">
					a: {this.props.store.a}
				</div>
				<div className="">
					b: {this.props.store.b}
				</div>
			</div>
		)
	}

}

export default OBTest1