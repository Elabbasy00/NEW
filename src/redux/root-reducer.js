import { combineReducers } from "redux";

import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
  oAuth: authReducer,
});

export default rootReducer;
