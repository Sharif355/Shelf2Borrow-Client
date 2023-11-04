import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login Here</h1>
      <p>
        New Here? <Link to="/register">Register Now!</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
