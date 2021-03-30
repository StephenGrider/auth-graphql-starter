import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { useMutation } from "@apollo/client";
import { FETCH_USER, SIGNUP } from '../queries/apollloQueries';
import { withRouter } from 'react-router';

const SignupForm = ({ history }) => {

    const [signupMutation] = useMutation(SIGNUP);
    const [errors, setErrors] = useState([]);

    const onSignup = ({ email, password }) => {
        signupMutation({
            variables: { 
                email,
                password
            },
            refetchQueries: [ { query: FETCH_USER }]
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
            <h3>Signup</h3>
            <AuthForm 
                errors={errors}
                onSubmit={onSignup} />
        </div>
    );
}

export default withRouter(SignupForm);