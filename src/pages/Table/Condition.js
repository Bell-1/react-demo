import React, { Component } from 'react'
import { Icon, Input, Form, Button } from 'antd';

class Condition extends Component {
	constructor(props) {
		super(props);
	}
	confirm = async () => {
		const { getFieldsValue } = this.props.form;
		const values = await getFieldsValue();
		this.props.confirm(values)
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form layout="inline" className="condition">
				<Form.Item label="test1">
					{getFieldDecorator('test1')(
						<Input
							className="input"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="test1"
						/>,
					)}
				</Form.Item>
				<Form.Item label="test2">
					{getFieldDecorator('test2')(
						<Input
							className="input"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="test2"
						/>,
					)}
				</Form.Item>
				<Form.Item label="test3">
					{getFieldDecorator('test3')(
						<Input
							className="input"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="test3"
						/>,
					)}
				</Form.Item>
				<Form.Item label="test4">
					{getFieldDecorator('test4')(
						<Input
							className="input"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="test4"
						/>,
					)}
				</Form.Item>
				<Form.Item>
					<Button type="primary" onClick={this.confirm}>搜索</Button>
				</Form.Item>
			</Form>
		)
	}
}


const conditionForm = Form.create({ name: 'conditionForm' })(Condition)

export default conditionForm