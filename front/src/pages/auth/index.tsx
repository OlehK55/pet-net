import React from 'react';

import LoginForm from '../../components/auth/login';

export default function Login() {
    return (
        <div className="some-class">
            <LoginForm handleSubmit={console.log} handleError={console.error} />
        </div>
    )
}