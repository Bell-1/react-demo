import React, { Component } from 'react'
import { Form, Radio, Input, message } from 'antd';
import http from '../../utils/http'
import { verifyEmail } from '@/utils/verify'

class Register extends Component {
	formRef = React.createRef();

	constructor(props) {
		super(props);
		this.state = {
			inputDisabled: true,
		}
	}

	componentDidMount() {
		setTimeout(() => {
			//防止浏览器自动填充
			//浏览器自动填充会触发表单严重
			this.setState({
				inputDisabled: false,
			})
		}, 500);
	}

	/**
	 * 密码验证
	 */
	pwdValidate = ({ getFieldValue }) => ({
		validator(rule, value) {
			const pwd = getFieldValue('pwd');
			if (pwd === value) {
				return Promise.resolve();
			} else {
				return Promise.reject('两次密码不一致');
			}
		}
	})

	/**
	 * 邮箱验证
	 */
	emailValidate = () => ({
		validator(rule, value) {
			const pass = verifyEmail(value);
			if (pass) {
				return Promise.resolve();
			} else {
				return Promise.reject('邮箱格式不正确');
			}
		}
	})

	/**
	 * 点击提交表单
	 */
	handleSubmit = () => {
		this.formRef.current.submit();
	}

	/**
	 * 表单提交 注册
	 */
	regist = async (formData) => {
		try {
			const { pwd2, ...dataToSend } = formData;
			await http.request('regist', dataToSend);
			message.success('注册成功，请登陆');
			this.props.onFormChange(1);
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * 切换表单
	 */
	handleToggleForm = () => {
		this.formRef.current.resetFields();
		this.props.onFormChange(1)
	}


	render() {
		const { inputDisabled } = this.state;

		return (
			<Form className="form" ref={this.formRef} onFinish={this.regist} initialValues={{ gender: 1 }}>
				<div className="title">注册</div>
				<Form.Item
					name="name"
					rules={[{ required: true, message: '请填写用户名' }]}
				>
					<Input disabled={inputDisabled} autocomplete="off" placeholder="请填写用户名" />
				</Form.Item>
				<Form.Item
					name="phone"
					rules={[{ required: true, message: '请填写手机号' }]}
				>
					<Input disabled={inputDisabled} autocomplete="off" placeholder="请填写手机号" />
				</Form.Item>
				<Form.Item
					name="email"
					rules={[
						{ required: true, message: '请填写邮箱' },
						this.emailValidate
					]}
				>
					<Input disabled={inputDisabled} autocomplete="off" placeholder="请填写邮箱"
					/>
				</Form.Item>
				<Form.Item
					name="pwd"
					rules={[
						{ required: true, message: '请填写密码' },
						{ min: 6, max: 32, message: '密码长度为6-32字符' },
					]}
				>
					<Input disabled={inputDisabled} type="password" autocomplete="off" placeholder="请填写密码"
					/>
				</Form.Item>
				<Form.Item
					name="pwd2"
					rules={[
						{ required: true, message: '请填写密码' },
						this.pwdValidate,
					]}
				>
					<Input disabled={inputDisabled} type="password" autocomplete="off" placeholder="再次输入密码" />
				</Form.Item>
				<Form.Item name="gender">
					<Radio.Group value={1}>
						<Radio value={1}>男</Radio>
						<Radio value={2}>女</Radio>
					</Radio.Group>
				</Form.Item>
				<div className="btns">
					<div className="btn pink" onClick={this.handleSubmit}>注册</div>
					<div className="btn text" onClick={this.handleToggleForm}>返回</div>
				</div>
			</Form>
		)
	}
}


export default Register;