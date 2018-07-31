import React, { Component } from 'react';
import Header from './Header';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class LoginForm extends Component {

	constructor(props){
		super(props)
		this.state = { errors: [] }
	}

	onSubmit({ email, password }){
		this.props.mutate({
			variables: { email, password },
			refetchQueryes: [{ query }]
		})
		.catch(res => {
			const errors = res.graphQLErrors.map(error => error.message)
			this.setState({ errors })
		})
	}

	render(){
		return (
			<div>
				<Header/>
				<h3>Login</h3>
				<AuthForm errors={ this.state.errors } onSubmit={ this.onSubmit.bind(this) }/>
			</div>
		)
	}
}

export default graphql(mutation)(LoginForm);