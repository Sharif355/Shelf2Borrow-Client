import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register Here</h1>
      <p>
        Already Registered? <Link to="/login">Login Now!</Link>{" "}
      </p>
    </div>
  );
};

export default Register;
