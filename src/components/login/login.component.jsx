import React, { useState } from "react";

import FormInput from "../form_input/form_input.component";

import CustomButton from "../custom_button/custom_button.component";

import "./login.style.css";

import { authLogin } from "../../redux/auth/auth.actions";

import { connect } from "react-redux";

function Login({ onAuth }) {
  const [userCredntials, setCredntials] = useState({
    email: "",
    password: "",
  });

  const handelChange = (event) => {
    const { value, name } = event.target;
    setCredntials({ ...userCredntials, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    onAuth(email, password);
  };

  const { email, password } = userCredntials;

  return (
    <div className="login">
      <form onSubmit={handelSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={handelChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handelChange}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(authLogin(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
