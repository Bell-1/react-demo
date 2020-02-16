import React, { Component } from 'react'
import { Icon, Select, Input } from 'antd'
import iconList from './icons'
import Breadcrumb from '@/components/Breadcrumb'
import { SketchPicker } from 'react-color'

const { Option } = Select;

export default class Icons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: 'outlined',
			themeOption: [
				{ label: '默认', value: 'outlined' },
				{ label: '实心', value: 'filled' },
				{ label: '双色', value: 'twoTone' },
			],
			color: '',
		}
	}

	createUl = (block) => {
		return (
			<div className="block" key={block.title}>
				<div className="title">{block.title}</div>
				<ul className="ul flex wrap">
					{block.icons && block.icons.length > 0 && block.icons.map(this.createLi)}
				</ul>
			</div>
		)
	}

	createLi = (icon) => {
		const { theme, color } = this.state;
		return (
			<li key={icon} className="__item flex col">
				<Icon type={icon} theme={theme} style={{ color: theme === 'twoTone' ? 'black' : color }} />
				<div style={{ color: theme === 'twoTone' ? 'black' : color }}>{icon}</div>
			</li>
		)
	}

	handleChangeSettings() {

	}

	handleChangeTheme = (theme) => {
		this.setState({ theme });
	}

	handleChangeColor = (e) => {
		const { r, g, b, a } = e.rgb;
		this.setState({ color: `rgba(${r},${g},${b},${a})` })
	}


	render() {
		const { theme, themeOption, color } = this.state;
		return (
			<div className="icons-page">
				<Breadcrumb first="UI" second="图标" />
				<div className="setting">
					<div className="title">设置</div>
					<div className="content flex col flex-start">
						<div className="__item flex">
							<label className="">主题</label>
							<Select defaultValue={theme} style={{ width: 120 }} onChange={this.handleChangeTheme}>
								{themeOption.map(({ label, value }) => (
									<Option key={value} value={value}>{label}</Option>
								))}
							</Select>
						</div>
						{theme !== 'twoTone' &&
							(<div className="__item flex">
								<label className="">自定义颜色</label>
								<SketchPicker
									className="color-picker"
									color={color}
									onChangeComplete={this.handleChangeColor}></SketchPicker>
								{/* <Input value={color} onChange={this.handleChangeColor} style={{ width: 120 }} /> */}
							</div>)
						}
					</div>
				</div>
				{iconList.map(this.createUl)}
			</div >
		)
	}
}
