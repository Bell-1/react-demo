import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import echarts from "echarts"
import moment from 'moment'

class Line extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chart: null,
		}
		this.reset = _.debounce(this.reset, 300).bind(this);
	}


	componentDidMount() {
		this.initChart();
		window.addEventListener('resize', this.reset);
	}

	componentWillUpdate(state){
		if(state.collapsed != this.props.collapsed){
			this.reset();
		}
	}

	componentWillUnmount() {
		this.chartDispose();
		window.removeEventListener('reset', this.reset);
	}

	reset() {
		let { chart1 } = this.state;
		chart1.resize();
	}

	initChart = () => {
		let chart1El = document.getElementById("chart1");
		let chart1 = echarts.init(chart1El);
		this.setState({
			chart1,
		}, () => {
			this.updateChart();
			this.reset();
		})
	}

	chartDispose = () => {
		let { chart1 } = this.state;
		chart1.dispose();
	}

	updateChart(data) {
		let { chart1 } = this.state;
		let xData = new Array(60).fill('').map((item, i) => moment().subtract(60 - i, 'days').format('M.D'))
		let yData = new Array(60).fill(0).map(() => _.random(10, 50));

		chart1.setOption({

			xAxis: {
				axisTick: {
					alignWithLabel: true,
					show: false
				},
				data: xData,
			},

			yAxis: {
				splitLine: {
					show: false,
				},
				axisLine: {
					show: true
				},
				axisTick: {
					show: false
				}
			},

			visualMap: {
				show: false,
				min: 0,
				max: 50,
				dimension: 0,
				inRange: {
					color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
				}
			},

			tooltip: {
				show: true,
				trigger: 'axis',
				axisPointer: {
					type: 'cross'
				}
			},

			series: [
				{
					type: 'line',
					hoverAnimation: true,
					smooth: true,
					areaStyle: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [
								{ offset: 0, color: '#ef5055' },
								{ offset: 1, color: '#f5d69f' },
							],
							global: false // 缺省为 false
						}
					},
					data: yData,
					label: {
						show: false
					},
					itemStyle: {
						opacity: 0
					}
				}
			]
		})


	}


	render() {
		return (
			<div id="chart1" className="line-chart"></div>
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

const LineStore = connect(
	mapStateToProps,
	mapDispatchToProps
)(Line)

export default LineStore;

