import React from 'react';
import './Login.css';

const Login = () => (
  <div className="login">
    <h3>Login</h3>
    <button type="button">
      <i className="fa fa-facebook-official" aria-hidden="true" />
      Facebook
    </button>
    <button type="button" className="google">
      {' '}
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
      Google
    </button>
    <form>
      <p>Username:</p>
      <input id="username" type="text" />

      <p>Password:</p>
      <input id="password" type="password" />
      <div>
        <input id="remember" type="checkbox" checked="checked" className="remember" />
        <p>Remember me</p>
      </div>
      <button type="button">Login</button>
    </form>
    <span className="psw">
      Forgot
      <a href="#">password?</a>
    </span>
  </div>
);

export default Login;
