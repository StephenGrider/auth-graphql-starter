import React, { Component } from 'react';

class AuthForm extends Component {
	constructor(props){
		super(props)
		this.state = { email: '', password: '' }
	}

	onSubmit(event){
		event.preventDefault();
		this.props.onSubmit( this.state )
	}

	render(){
		return (
			<div className="row">
				<form className="col s6" onSubmit={ this.onSubmit.bind(this) }>
					<div className="input-field">
						<input 
							value={ this.state.email } 
							placeholder="Email"
							onChange={ e => this.setState({ email: e.target.value })}/>
					</div>
					<div className="input-field">
						<input 
							type="password"
							placeholder="Password"
							value={ this.state.password } 
							onChange={ e => this.setState({ password: e.target.value })}/>
					</div>
					<div className="errors">
						{ this.props.errors.map( error => <div key={ error }>{ error }</div>)}
					</div>
					<button className="btn">Submit</button>
				</form>
			</div>
		)
	}
}

export default AuthForm;