import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, message } from 'antd';
import http from '@/utils/http'
import { loginSuccess } from '@/store/actions/user'

class LoginForm extends Component {
	formRef = React.createRef();

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
	 * 登陆按钮
	 */
	login = async (formData) => {
		try {
			const data = await http.request('login', formData);
			this.props.loginSuccess(data);
			message.success('登录成功');
			this.props.history.push('/app/dashboard');
		} catch (error) {
			console.error(error)
			return
		}
	}

	/**
	 * 监听回车
	 */
	enter = ({ keyCode }) => {
		if (keyCode === 13) {
			this.handleSubmit();
		}
	}

	/**
	 * 点击提交表单
	 */
	handleSubmit = () => {
		this.formRef.current.submit();
	}

	/**
	 * 切换表单
	 */
	handleToggleForm = () => {
		this.formRef.current.resetFields();
		this.props.onFormChange(2)
	}

	render() {
		const { inputDisabled } = this.state;

		return (
			<Form className="form" ref={this.formRef} name="formData" onFinish={this.login} onKeyUp={this.enter}>
				<div className="title">登陆</div>
				<Form.Item
					name='phone'
					rules={[{ required: true, message: '请填写账号' }]}
				>
					<Input
						className="input"
						disabled={inputDisabled}
						placeholder="账号"
						autocomplete="off"
					/>
				</Form.Item>
				<Form.Item
					name='pwd'
					rules={[
						{ required: true, message: '请填写密码' },
						{ min: 6, max: 32, message: '密码长度为6-32字符' }
					]}
				>
					<Input
						disabled={inputDisabled}
						type="password"
						placeholder="密码"
						autocomplete="off"
					/>
				</Form.Item>
				{/*<Form.Item>
					<Checkbox onChange={this.remember} style={{ color: 'white' }}>记住账户</Checkbox>
				</Form.Item>*/}
				<Form.Item >
					<div className="btns">
						<div className="btn pink" onClick={this.handleSubmit}>登陆</div>
						<div className="btn text" onClick={this.handleToggleForm}>注册</div>
						{/* <Button htmlType="submit" ghost> 登录 </Button>
						<Button onClick={this.props.onFormChange.bind(this, 2)} type="link" ghost> 注册 </Button> */}
					</div>
				</Form.Item>
			</Form>
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
const withState = connect(mapStateToProps, mapDispatchToProps)(LoginForm);


export default withState;