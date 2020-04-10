import React, { Component } from 'react'
import { Button, Input } from 'antd'
import load from './circle'

export default class CircleProgress extends Component {
	status = false;
	constructor(props) {
		super(props)
		this.state = {
			percent: 10
		}
	}

	componentDidMount() {
		load.create('circleProgress');
		load.changePercent(this.state.percent);
	}

	componentWillUnmount() {
		this.stop()
	}


	animation = () => {
		if (!this.status) return;
		requestAnimationFrame(() => {
			let { percent } = this.state;
			load.changePercent(percent);
			percent === 100 ? percent = 0 : percent++;
			this.setState({
				percent: percent++
			})
			this.animation();
		})
	}


	start = () => {
		if (!this.status) {
			this.status = true;
			this.animation();
		}
	}

	stop = () => {
		this.status = false;
	}

	handleChangePercent = (e) => {
		let percent = +e.target.value % 100;
		this.setState({ percent })
		load.changePercent(percent)
	}
	render() {
		return (
			<div style={{ padding: " 50px 30px " }}>
				<div className="" style={{ width: '500px', padding: '20px 0', display: 'flex', alignItems: 'center' }}>
					<div className="" >输入百分比：</div>
					<Input
						placeholder="输入百分比"
						type="number"
						value={this.state.percent}
						defaultValue={this.state.percent}
						onChange={this.handleChangePercent.bind(this)}
						style={{ width: "100px" }}
					></Input>
					<Button type="primary" onClick={this.start} style={{ margin: "0 10px" }}>循环</Button>
					<Button type="danger" onClick={this.stop}>停止</Button>
				</div>
				<canvas id="circleProgress" width="300" height="500" style={{ background: "#0cc" }}></canvas>
			</div>
		)
	}
}
