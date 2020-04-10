import React, { Component } from 'react'
import { Button, Radio } from 'antd';
import { DownloadOutlined, PoweroffOutlined } from '@ant-design/icons';

export default class Buttons extends Component {
	state = {
		size: 'large',
		iconLoading: false,
	};

	handleSizeChange = e => {
		this.setState({ size: e.target.value });
	};
	enterLoading = () => {
		this.setState({ loading: true });
	};

	enterIconLoading = () => {
		this.setState({ iconLoading: true });
	};
	render() {
		let { size } = this;
		return (
			<div className="Buttons">
				<div className="row">
					<Button type="primary">Primary</Button>
					<Button>Default</Button>
					<Button type="dashed">Dashed</Button>
					<Button type="link">Link</Button>
				</div>

				<div className="row">
					<Radio.Group value={size} onChange={this.handleSizeChange}>
						<Radio.Button value="large">Large</Radio.Button>
						<Radio.Button value="default">Default</Radio.Button>
						<Radio.Button value="small">Small</Radio.Button>
					</Radio.Group>
					<br />
					<br />
					<Button type="primary" size={size}>Primary</Button>
					<Button size={size}>Default</Button>
					<Button type="dashed" size={size}>Dashed</Button>
					<br />
					<Button type="link" size={size}>Link</Button>
					<br />
					<Button type="primary" icon={<DownloadOutlined />} size={size} />
					<Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
					<Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
					<Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>Download</Button>
					<Button type="primary" icon={<DownloadOutlined />} size={size}>Download</Button>
				</div>

				<div className="row">
					<Button type="primary" loading>Loading</Button>
					<Button type="primary" size="small" loading>Loading</Button>
				</div>
				<div className="row">

					<Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>Click me!</Button>
					<Button
						type="primary"
						icon={<PoweroffOutlined />}
						loading={this.state.iconLoading}
						onClick={this.enterIconLoading}
					>						Click me!        </Button>
				</div>
			</div>
		)
	}
}


