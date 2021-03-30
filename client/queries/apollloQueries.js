import { gql } from "@apollo/client";

export const FETCH_USER = gql`
    {
        user {
            id
            email
        }
    }
`;

export const SIGNUP = gql`
    mutation Signup($email: String, $password: String) {
        signup(email: $email, password: $password) {
            id
            email
        }
    }
`;

export const LOGOUT = gql`
    mutation {
        logout {
            email
        }
    }
`;

export const LOGIN = gql`
    mutation Login($email: String, $password: String) {
        login(password:$password, email:$email) {
            id
            email
        }
    }
`;
