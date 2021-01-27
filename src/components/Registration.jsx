import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { register, handleChange } from "../actions/actions";
import { pathNames } from "../reducers/reducers";

const pushDir1 = "/spidergraph";

const Register = ({
  history,
  credentials,
  handleChange,
  register,
  error,
  token,
  didRegister,
}) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route++

  useEffect(() => {
    if (!!token) {
      localStorage.setItem("token", token);
      history.push(pushDir1);
    }
  }, [token]);

  console.log("didRegister:", didRegister);

  return (
    <div className="authScreen">
      <div className="authWindow">
        <h2>Register:</h2>
        <form
          onSubmit={(e) => register(e, credentials)}
          className="authCredentials"
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            value={credentials.username}
            onChange={(e) => handleChange(e, "credentials")}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={(e) => handleChange(e, "credentials")}
          />
          <button type="submit">Register</button>
        </form>
        {didRegister ? (
          <h3>Registration Success!!</h3>
        ) : (
          <h3>Registration Not Complete...</h3>
        )}
        <Link to={pathNames.Login}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  credentials: state.credentials,
  error: state.error,
  token: state.token,
  didRegister: state.didRegister,
});

export default connect(mapStateToProps, { register, handleChange })(Register);
