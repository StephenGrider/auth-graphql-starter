import React from 'react';

import { FETCH_USER, LOGOUT } from '../queries/apollloQueries';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";

const Header = () => {

    const { data, loading, error } = useQuery(FETCH_USER);
    const [ logoutMutation] = useMutation(LOGOUT);

    const onLogoutClick = () => {
        logoutMutation({
            refetchQueries: [ { query: FETCH_USER }]
        });
    }

    const renderButtons = () => {
        if(loading) {
            return <div />;
        }
        const { user } = data;
        if (error) return <p>ERROR: {error.message}</p>;

        if (user) {
            return ( <li>
                <a onClick={onLogoutClick}>Logout</a>
            </li>);
        } else {
            return (
                <div>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </div>
            )
        }
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo left" >Home</Link>
                <ul className="right">
                    {renderButtons()}
                </ul>
            </div>
        </nav>
    )
}
export default Header;