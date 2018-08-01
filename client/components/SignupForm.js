import React, { Component } from 'react';
import Header from './Header';
import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class SignupForm extends Component {

	constructor(props){
		super(props)
		this.state = { errors: [] }
	}

	componentWillUpdate(nextProps){
		if(!this.props.data.user && nextProps.data.user) {
			hashHistory.push('/dashboard');
		}
	}

	onSubmit({ email, password }){
		this.props.mutate({
			variables: { email, password },
			refetchQueries: [{ query }]
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
				<h3>Sign Up</h3>
				<AuthForm 
					errors={ this.state.errors && this.state.errors.length ? this.state.errors : [] } 
					onSubmit={ this.onSubmit.bind(this) }/>
			</div>
		)
	}
}

export default graphql(query)(
	graphql(mutation)(SignupForm)
);