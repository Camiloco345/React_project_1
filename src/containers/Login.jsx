import React from 'react'
import '../styles/Login.scss';
import '../styles/global.css'

/**
 * It returns a div with a class of login, which contains a div with a class of form-container, which
 * contains an image, a h1, a p, and a form, which contains a label, an input, a label, an input, and
 * an input
 * @returns A div with a class of login.
 */
const Login = () => {
    return (
        <div className="login">
    <div className="form-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

      <h1 className="title">Create a new password</h1>
      <p className="subtitle">Enter a new password for yue account</p>

      <form action="/" className="form">
        <label for="password" className="label">Password</label>
        <input type="password" id="password" placeholder="*********" className="input input-password" />

        <label for="new-password" className="label">Password</label>
        <input type="password" id="new-password" placeholder="*********" className="input input-password" />

        <input type="submit" value="Confirm" className="primary-button login-button" />
      </form>
    </div>
  </div>
    );
}

export default Login;

