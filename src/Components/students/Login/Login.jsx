import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
//toast
const Login = () => {
  const [authData, setAuthData] = useState("");

  const navigate = useNavigate();
  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const user = await axios.get(
      `http://localhost:8080/profile/${authData._id}`
    );

    if (authData._id != "") {
      if (!user.data.msg) {
        if (user.data.password == authData.password) {
          localStorage.setItem("usn", authData._id);
          localStorage.setItem("password", authData.password);
          localStorage.setItem("branch", authData.branch);

          alert("Login successful");
          if (authData._id == "principal") {
            navigate(`/elective/${authData._id}`);
          } else if (authData._id == "hod") {
            navigate(`/addsubject/${authData._id}`);
          } else {
            navigate(`/profile/${authData._id}`);
          }
        } else {
          alert("Login failed");
          window.location.reload();
        }
      } else {
        alert("User does not exist");
        window.location.reload();
      }
    } else {
      alert("Enter your USN or ID");
      window.location.reload();
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            
          </div>
          <div className="col-md-6">
            <div className="row">
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                name="_id"
                placeholder="ID"
                className="form-control mt-4"
              />
            </div>
            <div className="row">
              <input
                type="password"
                onChange={(e) => handleChange(e)}
                name="password"
                placeholder="password"
                className="form-control mt-4"
              />
            </div>
            <div className="row mt-4">
              <button className="w-50 btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <div className="row">
              New User? <Link to="/signup">Signin</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
