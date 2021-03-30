import React from 'react';
import requireAuth from './requireAuth';

const Dashboard = () => {

    return (
        <div>You are logged in.</div>
    );
}

export default requireAuth(Dashboard);