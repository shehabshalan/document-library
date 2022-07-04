import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [emp, setEmp] = React.useState([]);

  const getEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/employees", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.status === 200) {
        setEmp(res.data);
        console.log(res.data);
      }
      if (res.status === 401) {
        console.log("looks like your token is expired");
        navigate("/login");
      }
    } catch (err) {
      console.log("looks like your token is expired");
      navigate("/login");
      console.log(err.response.status);
    }
  };
  return (
    <div>
      <button onClick={getEmployees}>Get Employees</button>
    </div>
  );
};

export default Home;
