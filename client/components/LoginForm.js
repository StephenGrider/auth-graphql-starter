import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { useMutation } from "@apollo/client";
import { FETCH_USER, LOGIN } from '../queries/apollloQueries';
import { withRouter } from 'react-router';

const LoginForm = ({ history }) => {

    const [loginMutation] = useMutation(LOGIN);
    const [errors, setErrors] = useState([]);

    const onLogin = ({ email, password }) => {
        loginMutation({
            variables: { 
                email,
                password
            },
            refetchQueries: [ { query: FETCH_USER }],
            //this is needed so that we don't go to the dashboard before the user was fetched
            //otherwise we'd get redirected to login from the requireAuth HOC
            awaitRefetchQueries: true
        })
        .then(() => history.push('/dashboard'))
        .catch((res) => {
            const errs = res.graphQLErrors.map((err) => {
                const msg = err.message;
                return msg.replaceAll('"','').replace('Unexpected error value:', '')
            });
            setErrors(errs)
        })
    }

    return (
        <div>
            <h3>Login</h3>
            <AuthForm 
                errors={errors}
                onSubmit={onLogin} />
        </div>
    );
}

export default withRouter(LoginForm);