import React, { Component } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'


class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			formType: 1,
		}
	}
	componentDidMount() {
	}
	changeFormType = (type) => {
		this.setState({
			formType: type
		})
	}
	render() {
		const { formType } = this.state;
		return (
			<div className="Login">
				<div className="login-bg">
				</div>
				<div className={['box', formType === 1 ? 'show-box' : 'hide-box'].join(' ')}>
					<LoginForm {...this.props} onFormChange={this.changeFormType.bind(this, 2)}></LoginForm>
				</div>
				<div className={['box', formType === 2 ? 'show-box' : 'hide-box'].join(' ')}>
					<RegisterForm {...this.props} onFormChange={this.changeFormType.bind(this, 1)} />
				</div>
			</div>
		)
	}
}

export default Login
