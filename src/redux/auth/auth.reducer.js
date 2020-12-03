import * as Types from "./auth.actionsType";

const INITAL_STATE = {
  username: null,
  email: null,
  userImage: null,
  token: null,
  error: null,
  loading: false,
};

const authReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case Types.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.AUTH_SUCCESS:
      return {
        ...state,
        username: action.user.username,
        email: action.user.username,
        userImage: action.user.userImage,
        token: action.user.token,
        loading: false,
        error: null,
      };
    case Types.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case Types.AUTH_LOGOUT:
      return {
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
