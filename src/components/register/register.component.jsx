import React, { useState } from "react";
import FormInput from "../form_input/form_input.component";
import CustomButton from "../custom_button/custom_button.component";
import "./register.style.css";
import { authSignUp } from "../../redux/auth/auth.actions";

import { connect } from "react-redux";

function Register({ snAuth }) {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userUid: "",
    uidImage: "",
    profileImage: "",
  });
  const {
    displayName,
    email,
    password,
    confirmPassword,
    userUid,
    uidImage,
    profileImage,
  } = userCredentials;

  const handelChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const onFileChange = (event) => {
    const { name, files } = event.target;
    setUserCredentials({ ...userCredentials, [name]: files[0] });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    snAuth(
      displayName,
      password,
      confirmPassword,
      email,
      userUid,
      uidImage,
      profileImage
    );
  };

  return (
    <div className="register">
      <form className="sign-up-form" onSubmit={handelSubmit}>
        <div className="wrapper-inputs">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handelChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handelChange}
            label="Email"
            required
          />
        </div>
        <div className="wrapper-inputs">
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handelChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handelChange}
            label="Confirm Password"
            required
          />
        </div>

        <FormInput
          type="password"
          name="userUid"
          value={userUid}
          onChange={handelChange}
          label="Confirm Password"
          required
        />

        <FormInput
          type="file"
          name="uidImage"
          onChange={onFileChange}
          title="UiD Image"
          // label="Confirm Password"
          required
        />
        <FormInput
          type="file"
          name="profileImage"
          onChange={onFileChange}
          // label="Confirm Password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    snAuth: (
      username,
      password1,
      password2,
      email,
      user_uid,
      uid_image,
      profile_image
    ) =>
      dispatch(
        authSignUp(
          username,
          password1,
          password2,
          email,
          user_uid,
          uid_image,
          profile_image
        )
      ),
  };
};
export default connect(null, mapDispatchToProps)(Register);
