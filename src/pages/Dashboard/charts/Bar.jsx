import React, { Component } from 'react'
import _ from 'lodash'
import echarts from "echarts"
import moment from 'moment'

export default class Bar extends Component {
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

	componentWillUnmount() {
		this.chartDispose();
		window.removeEventListener('reset', this.reset);
	}

	reset() {
		let { chart1 } = this.state;
		chart1.resize();
	}

	initChart = () => {
		let chart1El = document.getElementById("bar");
		let chart1 = echarts.init(chart1El);
		this.setState({
			chart1,
		}, () => {
			this.updateChart();
		})
	}

	chartDispose = () => {
		let { chart1 } = this.state;
		chart1.dispose();
	}

	updateChart(data) {
		let { chart1 } = this.state;
		let xData = new Array(60).fill('').map((item, i) => moment().subtract(60 - i, 'days').format('M.D'))
		let yData = new Array(60).fill(0).map(() => _.random(3, 15));
		chart1.setOption({
			xAxis: {
				show: true,
				data: xData,
				axisLabel: {
					textStyle: {
						color: '#ccc'
					}
				},
			},

			yAxis: {
				axisLine: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#ccc'
					}
				},
				splitLine: {
					show: false,
					lineStyle: {
						color: '#08263f'
					}
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
					name: '数量',
					type: 'bar',
					itemStyle: {
						normal: {
							barBorderRadius: 10
						}
					},
					data: yData,
				}
			]
		})


	}


	render() {
		return (
			<div id="bar" className="bar-chart"></div>
		)
	}
}
