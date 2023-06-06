import React, { useState } from "react";
import "./responsive/Mobile.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

export const Login = ({ inputChange, handleSubmit}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfrimPassword] = useState(false);

  const showPass = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const revealConfirmPassword = () => {
    setShowConfrimPassword((showConfirmPass) => !showConfirmPass);
  };

  return (
    <div className="form-parent">
      <h2>Log-in Form</h2>
      <div className="form-child">
        <form onSubmit={handleSubmit}>
          <div className="email-div">
            <input
              type="email"
              placeholder="example@email.com"
              name="email"
              onChange={inputChange}
              required
            />
          </div>
          <div className="revealPass">
            <input
              id="showPass"
              type={showPassword ? "text" : "password"}
              placeholder="**********"
              name="pass"
              onChange={inputChange}
              required
            />
            <label htmlFor="showPass" onClick={showPass}>
              {showPassword !== true ? <AiFillEyeInvisible /> : <AiFillEye />}
            </label>
          </div>
          <div className="revealPass">
            <input
              id="showConfirmPass"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="*********"
              name="confirmPass"
              onChange={inputChange}
              required
            />
            <label htmlFor="showConfirmPass" onClick={revealConfirmPassword}>
              {showConfirmPassword !== true ? (
                <AiFillEyeInvisible />
              ) : (
                <AiFillEye />
              )}
            </label>
          </div>
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
};
