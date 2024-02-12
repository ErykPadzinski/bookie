import React from "react";
import Image from "next/image";
import "../../styles/register.css";
import Link from "next/link";
const page = () => {
  return (
    <div className="register-page flex justify-between min-h-screen">
      <div className=" form-content w-full flex flex-col justify-center align-middle items-center gap-6 h-full">
        <h1 className="register-header">Log In</h1>
        <form className="flex flex-col register-form">
          <div className="register-label">
            <label htmlFor="username">Username</label>
            <input
              className="register-input"
              type="text"
              name="username"
              id="username"
              required
            />
          </div>

          <div className="register-label">
            <label htmlFor="password">Password</label>
            <input
              className="register-input"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="remember-checkbox">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                value="remember"
                className="remember-checkbox"
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link href="/forgotPassword">Forgot Password ?</Link>
          </div>
        </form>
        <button className="register-btn ">Log In</button>
        <div className="login-reg-nav">
          <p>Don't have an account?</p>
          <Link href="/user/signUp">Register Now</Link>
        </div>
      </div>
      <Image
        className="register-img object-cover overflow-hidden "
        src="/register.png"
        alt="register"
        width={900}
        height={100}
      />
    </div>
  );
};

export default page;
