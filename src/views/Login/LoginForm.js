import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Typography, Checkbox } from 'antd';
import http from '../../utils/http'
import { loginSuccess } from '@/store/actions/user'

const { Title } = Typography;
class LoginForm extends Component {
	constructor(props) {
		super(props);
		const rememberChecked = localStorage.getItem('rememberUser') === 'true';
		this.state = {
			inputDisabled: !rememberChecked, //是否默认可否给浏览器自动填充
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
	 * 记住账户按钮
	 * @param {*} e 
	 */
	remember(e) {
		localStorage.setItem('rememberUser', e.target.checked);
	}
	/**
	 * 验证
	 */
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
	/**
	 * 登陆按钮
	 */
	login = async () => {
		try {
			const formData = await this.validate();
			const { userName, password } = formData;
			const dataToSend = {
				name: userName,
				pwd: password,
			}
			const { userInfo, token } = await http.request('login', dataToSend);
			localStorage.setItem('userInfo', userInfo);
			localStorage.setItem('token', token);
			this.props.loginSuccess(userInfo)
			this.props.history.push('/app/table');
		} catch (error) {
			console.error(error)
			return
		}
	}
	enter=({keyCode})=>{
		if(keyCode === 13){
			this.login();
		}
	}
	render() {
		const { getFieldDecorator, getFieldError } = this.props.form;
		const { inputDisabled } = this.state;
		const userNameError = getFieldError('userName');
		const passwordError = getFieldError('password');
		return (
			<Form onSubmit={this.login} onKeyUp = { this.enter }>
				<Title level={2} style={{ color: "white" }}>登录</Title>
				<Form.Item validateStatus={userNameError ? 'error' : ''} help={userNameError || ''}>
					{getFieldDecorator('userName', {
						rules: [{ required: true, message: '请填写账号' }],
					})(
						<Input
							className="input"
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
							{ min: 6, max: 32, message: '密码长度为6-32字符' }
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
				<Form.Item>
					<Checkbox onChange={this.remember} style={{ color: 'white' }}>记住账户</Checkbox>
				</Form.Item>
				<div className="btns">
					<Button onClick={this.login} ghost> 登录 </Button>
					<Button onClick={this.props.onFormChange.bind(this, 2)} type="link" ghost> 注册 </Button>
				</div>
			</Form >
		)
	}
}

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo
	}
}

const mapDispatchToProps = dispath => {
	return {
		loginSuccess: userInfo => dispath(loginSuccess(userInfo))
	}
}
const withForm = Form.create({ name: 'loginForm' })(LoginForm);
const withState = connect(mapStateToProps, mapDispatchToProps)(withForm);


export default withState;