import React from 'react';
import './Login.css';

const Login = () => (
  <div className="login">
    <h3>Login</h3>
    <form>
      <p className="form-p">Username</p>
      <input id="username" type="text" />
      <p className="form-p">Password</p>
      <input id="password" type="password" />
      <div className="remember-div">
        <input id="remember" type="checkbox" className="remember" />
        <p>Remember me</p>
      </div>
      <button type="button" className="login-btn">Login</button>
    </form>
    <div className="button-div">
      <button type="button">
        <i className="fa fa-facebook-official" aria-hidden="true" />
        Facebook
      </button>
      <button type="button" className="google">
        {' '}
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
        Google
      </button>
    </div>
  </div>
);

export default Login;
