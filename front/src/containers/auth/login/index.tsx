import React from 'react';
import LoginForm from '../../../components/auth/signin';

import './styles.scss';

export default function LoginContainer() {
    return (
        <div className="login-form-container">
            <LoginForm />
        </div>
    )
}