import React from "react";
import "@/sass/__login.scss";
import Link from "next/link";
import Register from "@/components/register/Register";
const Login = () => {
  return (
    <div className="login__wrapper">
      <div className="login__line">
        <Link href={"/"}>Home</Link> / <p>Login</p>
      </div>
      <Register />
    </div>
  );
};

export default Login;
