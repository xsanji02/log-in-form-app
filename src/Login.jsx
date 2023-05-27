import React from "react";
import './responsive/Mobile.css'

export const Login = ({ inputChange, handleSubmit }) => {
  return (
    <div className="form-parent">
        <h2>Log-in Form</h2>
      <div className="form-child">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="example@email.com"
            name="email"
            onChange={inputChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="pass"
            onChange={inputChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPass"
            onChange={inputChange}
            required
          />
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
};
