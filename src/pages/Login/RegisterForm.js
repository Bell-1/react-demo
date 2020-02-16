import React, { Component } from 'react'
import { Form, Icon, Input, Button, Typography } from 'antd';
import md5 from 'md5'
import http from '@/utils/http'

const { Title } = Typography;
class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputDisabled: true,
		}
	}
	componentDidMount(){
		setTimeout(() => {
			//防止浏览器自动填充
			//浏览器自动填充会触发表单严重
			this.setState({
				inputDisabled: false,
			})
		}, 500);
	}
	validate = (e) => {
		const { validateFields } = this.props.form;
		return new Promise((resolve, reject) => {
			validateFields((err, values) => {
				if (err) {
					reject(err)
				} else {
					resolve(values)
				}
			});
		})
	}
	regist = async () => {
		const formData = await this.validate();
		if (!formData) return
		try {
			const formData = await this.validate();
			const { userName, password } = formData;
			const dataToSend = {
				name: userName,
				pwd: md5(password),
			}
			const res = await http.request('regist', dataToSend);
		} catch (error) {
			console.error(error)
			return
		}
	}
	pwdValidate = (rule, value, cb) => {
		const { getFieldValue, isFieldTouched } = this.props.form;
		if (getFieldValue('password') === getFieldValue('password2') && isFieldTouched('password2')) {
			cb();
		} else {
			cb('两次密码不一致');
		}
	}
	render() {
		const { onFormChange, form } = this.props;
		const { inputDisabled } = this.state;
		const { getFieldDecorator, getFieldError, isFieldTouched } = form;
		const userNameError = getFieldError('userName');
		const passwordError = isFieldTouched('password') && getFieldError('password');
		const passwordError2 = isFieldTouched('password2') && getFieldError('password2');

		return (
			<Form>
				<Title level={2} style={{ color: "white" }}>注册</Title>
				<Form.Item validateStatus={userNameError ? 'error' : ''} help={userNameError || ''}>
					{getFieldDecorator('userName', {
						rules: [{ required: true, message: '请填写账号' }],
					})(
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							disabled={inputDisabled}
							placeholder="账号"
						/>,
					)}
				</Form.Item>
				<Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
					{getFieldDecorator('password', {
						rules: [
							{ required: true, message: '请填写密码' },
							{ min: 6, max: 32, message: '密码长度为6-32字符' },
						],
					})(
						<Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							disabled={inputDisabled}
							type="password"
							placeholder="密码"
						/>,
					)}
				</Form.Item>
				<Form.Item validateStatus={passwordError2 ? 'error' : ''} help={passwordError2 || ''}>
					{getFieldDecorator('password2', {
						rules: [
							{ required: true, message: '请填写密码' },
							{ min: 6, max: 32, message: '密码长度为6-32字符' },
							{ validator: this.pwdValidate }
						],
					})(
						<Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							disabled={inputDisabled}
							type="password"
							placeholder="再次输入密码"
						/>,
					)}
				</Form.Item>
				<div className="btns">
					<Button onClick={this.regist} ghost> 注册 </Button>
					<Button onClick={onFormChange.bind(this, 1)} type="link" ghost> 登录 </Button>
				</div>
			</Form>
		)
	}
}


export default Form.create({ name: 'registerForm' })(Register);