import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="register-page flex justify-between min-h-screen">
      <Image
        className="register-img object-cover overflow-hidden "
        src="/register.png"
        alt="register"
        width={900}
        height={100}
      />

      <div className=" form-content w-full flex flex-col justify-center align-middle items-center gap-6 h-full">
        <h1 className="register-header">Register</h1>
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
            <label htmlFor="email">E-mail</label>
            <input
              className="register-input"
              type="text"
              name="email"
              id="email"
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
          <div className="register-label">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              className="register-input"
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
            />
          </div>
        </form>
        <button className="register-btn ">Register</button>
      </div>
    </div>
  );
};

export default page;
