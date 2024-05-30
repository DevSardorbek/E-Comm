import React from "react";
import "@/sass/__login.scss";
import Link from "next/link";
const Login = () => {
  return (
    <div className="login__wrapper">
      <div className="login__line">
        <Link href={"/"}>Home</Link> / <p>Login</p>
      </div>
      <div className="container">
        <form className="login__section">
          <label>
            <p> Username</p>
            <input type="text" />
          </label>
          <label>
            <p> Password</p>
            <input type="password" />
          </label>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
