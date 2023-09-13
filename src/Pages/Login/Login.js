import React, { useState, useEffect } from "react";
import '../Login/style.css'
import { Link, useNavigate } from 'react-router-dom';
const Login = ({ auth }) => {

    return (
        <>
            <h1 className="text-center text-bg-warning">Welcome</h1>
            <div className="container login">
                <div className="login-container">
                    <div className="login-content">
                        <h1 className="welcome-text">Login</h1>
                        <div className="login-form">
                            <input type="text" placeholder="Username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {error && <p className="error-text text-danger">{error}</p>}
                            <button type="button" className="login-button" onClick={handleLogin}>Login</button>
                            {isAuthenticated ? (
                                <p className="text-center text-light">Logged in successfully!</p>
                            ) : null}
                            <p className="text-center text-light">New user?</p>
                            <button className="mt-0 login-button" type="button">
                                <Link className="nav-link text-white" to="/Signup">Sign up</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
