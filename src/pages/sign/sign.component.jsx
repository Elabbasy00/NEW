import React, { useEffect } from "react";
import Login from "../../components/login/login.component";
import Register from "../../components/register/register.component";
import CustomButton from "../../components/custom_button/custom_button.component";
import "./sign.style.css";
import gsap from "gsap";
import axios from "axios";

function Sign() {
  function showLogin() {
    gsap.to(".login", {
      scale: 1,
      opacity: 1,
      duration: 0.8,

      ease: "Bounce.easeOut",
    });
    gsap.to(".register", {
      scale: 0.1,
      opacity: 0,
      duration: 0.3,

      ease: "Bounce.easeOut",
    });
  }
  function showReg() {
    gsap.to(".register", {
      scale: 1,
      opacity: 1,
      duration: 0.8,

      ease: "Bounce.easeOut",
    });
    gsap.to(".login", {
      scale: 0.1,
      opacity: 0,
      duration: 0.3,

      ease: "Bounce.easeOut",
    });
  }

  return (
    <div className="sign-page">
      <div className="choose">
        <CustomButton onClick={showLogin} className="mr-5">
          Login
        </CustomButton>
        <span>OR</span>
        <CustomButton onClick={showReg} className="ml-5">
          Register
        </CustomButton>
      </div>
      <div className="login-wrapper">
        <Login />
      </div>
      <div className="register-wrapper">
        <Register />
      </div>
    </div>
  );
}

export default Sign;
