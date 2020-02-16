import React, { Component } from 'react'
import { Button, Radio, Checkbox, Icon } from 'antd'
import Breadcrumb from '@/components/Breadcrumb'
import './buttons.scss'

export default class Buttons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: 'large',
			isBlock: false,
			isLoading: false,
		}
	}
	handleSizeChange = (e) => {
		this.setState({
			size: e.target.value
		})
	}
	handleChangeBlock = (e) => {
		this.setState({
			isBlock: e.target.checked
		})
	}
	handleChangeLoading = (e) => {
		this.setState({
			isLoading: e.target.checked
		})
	}
	render() {
		const { size, isBlock, isLoading } = this.state;
		return (
			<div className="buttons">
				<Breadcrumb first="UI" second="按钮" />
				<div className="block flex j-start">
					<div className="label">大小:</div>
					<Radio.Group value={size} onChange={this.handleSizeChange}>
						<Radio.Button value="large">Large</Radio.Button>
						<Radio.Button value="default">Default</Radio.Button>
						<Radio.Button value="small">Small</Radio.Button>
					</Radio.Group>
				</div>

				<div className="block flex j-start">
					<div className="label">状态:</div>
					<Checkbox onChange={this.handleChangeBlock}>block</Checkbox>
					<Checkbox onChange={this.handleChangeLoading}>loading</Checkbox>
				</div>

				<div className="block">
					<Button type="default" block={isBlock} size={size} loading={isLoading}>Normal</Button>
					<Button type="primary" block={isBlock} size={size} loading={isLoading}>Primary</Button>
					<Button type="dashed" block={isBlock} size={size} loading={isLoading}>Dashed</Button>
					<Button type="danger" block={isBlock} size={size} loading={isLoading}>Danger</Button>
					<Button type="link" block={isBlock} size={size} loading={isLoading}>Link</Button>
					<br />
					<Button type="primary" ghost block={isBlock} size={size} loading={isLoading}>Primary</Button>
					<Button ghost block={isBlock} size={size} loading={isLoading}>Default</Button>
					<Button type="dashed" ghost block={isBlock} size={size} loading={isLoading}>Dashed</Button>
					<Button type="danger" ghost block={isBlock} size={size} loading={isLoading}>danger</Button>
					<Button type="link" ghost block={isBlock} size={size} loading={isLoading}>link</Button>
					<br />
					<Button type="primary" icon="download" size={size} loading={isLoading} />
					<Button type="primary" icon="download" size={size} loading={isLoading}>Download</Button>
					<br />
					<Button type="primary" shape="round" icon="download" size={size} loading={isLoading} />
					<Button type="primary" shape="round" icon="download" size={size} loading={isLoading}>Download</Button>
					<br />
					<Button type="default" shape="circle" size={size} icon="search" loading={isLoading} />
					<Button type="primary" shape="circle" size={size} icon="search" loading={isLoading} />
					<Button type="danger" size={size} shape="circle" icon="search" loading={isLoading} />
					<Button type="dashed" size={size} shape="circle" loading={isLoading}>{isLoading ? '' : 'A'}</Button>
					<br />
					<Button.Group size={size}>
						<Button type="primary">
							<Icon type="left" />Backward</Button>
						<Button type="primary">Forward<Icon type="right" />
						</Button>
					</Button.Group>
				</div>

			</div>
		)
	}
}


