import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';
import {useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './index.css';

const GoogleLoginComponent = () => {
    const history = useNavigate();

    const onSuccess = async (credentialResponse) => {
        try {
            const token = credentialResponse.credential;
            const decodedToken = jwtDecode(token);

            const { name, email } = decodedToken;

            Cookies.set('jwt_token', token, { expires: 30, secure: true, sameSite: 'strict' });

           

            
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    };

    const onError = () => {
        console.log('Login Failed');
    };

    return (
        <div className="google-login-container">
            <h1>hello</h1>
        </div>
    );
};

export default GoogleLoginComponent;
