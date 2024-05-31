"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/sass/__register.scss";

const Register = () => {
  const initialState = {
    username: "mor_2314",
    password: "83r5^_",
  };
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (el) => {
    setData((prev) => ({
      ...prev,
      [el.target.name]: el.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      localStorage.setItem("x-auth-token", result.token);
      toast.success("Welcome to Admin page");
      router.push("/admin");
    } else {
      setError("Login failed. Please check your username and password.");
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="register__section">
          {Object.keys(initialState).map((key, index) => (
            <div className="login" key={index}>
              <label htmlFor={key}>
                {key}

                <input
                  required
                  onChange={handleChange}
                  value={data[key]}
                  type={key === "password" ? "password" : "text"}
                  id={key}
                  placeholder={`Your ${key}...`}
                  name={key}
                />
              </label>
            </div>
          ))}
          {error && <p className="error">{error}</p>}
          <button type="submit" className="user_submit">
            LOGIN
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
