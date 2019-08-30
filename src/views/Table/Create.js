import React, { Component } from 'react'
import { Modal, Icon, Input, Form, Button } from 'antd'
import http from '@utils/http'


class CreateForm extends Component {
	render() {
		const { getFieldDecorator, getFieldError } = this.props.form;
		const test1Error = getFieldError('test1');
		const test2Error = getFieldError('test2');
		const test3Error = getFieldError('test3');
		const test4Error = getFieldError('test4');
		return (
			<Form layout="inline" className="condition">
				<Form.Item label="test1" validateStatus={test1Error ? 'error' : ''} help="">
					{getFieldDecorator('test1', {
						rules: [{ required: true }],
					})(
						<Input
							className="input"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="test1"
						/>,
					)}
				</Form.Item>
				<Form.Item label="test2" validateStatus={test2Error ? 'error' : ''} help="">
					{getFieldDecorator('test2', {
						rules: [{ required: true }],
					})(
						<Input
							className="input"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="test2"
						/>,
					)}
				</Form.Item>
				<Form.Item label="test3" validateStatus={test3Error ? 'error' : ''} help="">
					{getFieldDecorator('test3', {
						rules: [{ required: true }],
					})(
						<Input
							className="input"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="test3"
						/>,
					)}
				</Form.Item>
				<Form.Item label="test4" validateStatus={test4Error ? 'error' : ''} help="">
					{getFieldDecorator('test4', {
						rules: [{ required: true }],
					})(
						<Input
							className="input"
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="test4"
						/>,
					)}
				</Form.Item>
			</Form>
		)
	}
}



export default class Create extends Component {
	constructor(props) {
		super(props);
		this.loading = false;
	}
	componentDidMount() {

	}
	confirm = async () => {
		const { getFieldsValue, validateFields } = this.form.props.form;
		try {
			const formData = await validateFields();
			const res = await http.request('testCreate', formData);
			this.props.confirm && this.props.confirm();
		} catch (error) {
			console.warn('校验未通过', error);
		}
	}
	cancel = () => {
		this.props.cancel && this.props.cancel();
	}

	render() {
		const FormComponent = Form.create({ name: 'create' })(CreateForm);
				
		return (
			<Modal
				title="create modal"
				visible={this.props.visible}
				onOk={this.confirm}
				onCancel={this.cancel}
			>
				<FormComponent wrappedComponentRef={(form) => this.form = form}></FormComponent>
			</Modal>
		)
	}
}
