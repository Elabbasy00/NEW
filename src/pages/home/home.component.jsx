import React from "react";

import { connect } from "react-redux";

import { authLogout } from "../../redux/auth/auth.actions";

function HomePage({ logout }) {
  return (
    <div>
      <h3>You Are Logged In</h3>
      <button onClick={() => logout()}>Logout ?</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(authLogout()),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
