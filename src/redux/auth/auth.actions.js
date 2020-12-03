import axios from "axios";
import * as Types from "./auth.actionsType";

export const authStart = () => {
  return {
    type: Types.AUTH_START,
  };
};

export const authSucces = (user) => {
  return {
    type: Types.AUTH_SUCCESS,
    user: user,
  };
};

export const authFail = (error) => {
  return {
    type: Types.AUTH_FAIL,
    error: error,
  };
};

export const authLogout = () => {
  localStorage.removeItem("user");
  return {
    type: Types.AUTH_LOGOUT,
  };
};

export const authLogin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        email: email,
        password: password,
      })
      .then((res) => {
        const user = {
          token: res.data.key,
          username: res.data.user.username,
          email: res.data.user.email,
          userImage: res.data.user.profile_image,
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authSucces(user));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authSignUp = (
  username,
  password1,
  password2,
  email,
  user_uid,
  uid_image,
  profile_image
) => {
  return (dispatch) => {
    dispatch(authStart());

    const form_data = new FormData();

    form_data.append("username", username);
    form_data.append("password1", password1);
    form_data.append("password2", password2);
    form_data.append("email", email);
    form_data.append("user_uid", user_uid);
    form_data.append("uid_image", uid_image);
    form_data.append("profile_image", profile_image);

    axios
      .post("http://127.0.0.1:8000/rest-auth/registration/", form_data)
      .then((res) => {
        const user = {
          token: res.data.key,
          username: res.data.user.username,
          email: res.data.user.email,
          userImage: res.data.user.profile_image,
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authSucces(user));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === undefined || user === null) {
      dispatch(authLogout());
    } else {
      dispatch(authSucces(user));
    }
  };
};
