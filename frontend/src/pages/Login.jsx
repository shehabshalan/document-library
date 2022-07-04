import React from "react";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
const Login = () => {
  const { login, user } = useUserContext();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  console.log(user);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("username: " + username);
    console.log("password: " + password);
    const payload = {
      user: username,
      pwd: password,
    };
    await login(payload);
  };

  return (
    <div>
      <h3>Login form</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            aria-describedby="emailHelp"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
