import React, { Component } from 'react'
import { start as particleInit, destory } from './ParticleEffect'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'


export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formType: 1,
		};
	}
	componentDidMount() {
		console.log(111)
		particleInit();
	}
	changeFormType = (type) => {
		this.setState({
			formType: type
		})
	}
	render() {
		const { formType } = this.state;

		return (
			<div className="login-page">
				<div className="bg"></div>
				<canvas id="particle"></canvas>
				<div className="container">
					<div className={['box', formType === 1 ? 'show-box' : 'hide-box'].join(' ')}>
						<LoginForm {...this.props} onFormChange={this.changeFormType.bind(this, 2)}></LoginForm>
					</div>
					<div className={['box', formType === 2 ? 'show-box' : 'hide-box'].join(' ')}>
						<RegisterForm {...this.props} onFormChange={this.changeFormType.bind(this, 1)} />
					</div>
				</div>
			</div>
		)
	}
}
