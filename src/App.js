import React, { useEffect } from "react";
import "./App.css";
import SignPage from "./pages/sign/sign.component";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/home/home.component";

import { authCheckState } from "./redux/auth/auth.actions";

function App({ isAuthenticated, onTryAutoSignup }) {
  useEffect(() => {
    onTryAutoSignup();
  });
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={() =>
          isAuthenticated ? <HomePage /> : <Redirect to="/login" />
        }
      />
      <Route
        exact
        path="/login/"
        render={() => (isAuthenticated ? <Redirect to="/" /> : <SignPage />)}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.oAuth.token !== null || undefined,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
