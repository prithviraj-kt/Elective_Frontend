import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../Navbar/Navbar";
const Signinup = () => {
  const [data, setData] = useState("");

  const updateData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const existUser = await axios.get(
      `http://localhost:8080/profile/${data._id}`
    );

    if (
      !data._id ||
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.branch ||
      data.branch == "" ||
      !data.password ||
      !data.cpassword
    ) {
      alert("Enter all the fields");
    } else {
      if (!existUser.data.msg) {
        alert("Account already exist");
      } else {
        await axios
          .post("http://localhost:8080/register", data)
          .then((succ) => {
            alert("User created successfully");
            navigate("/");
            window.location.reload();
          })
          .catch((err) => {
            alert(err);
          });
      }
    }
  };
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="row">
              <input
                className="form-control mt-4"
                type="text"
                onChange={(e) => updateData(e)}
                name="_id"
                placeholder="USN"
              />
            </div>
            <div className="row">
              <input
                className="form-control mt-4"
                type="text"
                onChange={(e) => updateData(e)}
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="row">
              <input
                className="form-control mt-4"
                type="phone"
                onChange={(e) => updateData(e)}
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div className="row">
              <input
                className="form-control mt-4"
                type="email"
                onChange={(e) => updateData(e)}
                name="email"
                placeholder="Email-ID"
              />
            </div>
            <div className="row">
              {/* <input
                type="text"
                
                name="branch"
                placeholder="Branch"
              /> */}

              <select
                className="form-control mt-4"
                name="branch"
                onChange={(e) => updateData(e)}
                id="cars"
              >
                <option value="">Select your branch</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="ME">ME</option>
                <option value="CV">CV</option>
              </select>
            </div>
            <div className="row">
              <input
                className="form-control mt-4"
                type="password"
                onChange={(e) => updateData(e)}
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="row">
              <input
                type="password"
                className="form-control mt-4"
                onChange={(e) => updateData(e)}
                name="cpassword"
                placeholder="Confirm Password"
              />
            </div>
            <div className="row">
              <button
                className=" btn btn-primary mt-4"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
            </div>

            <div className="row">
              ALready a user? <Link to="/">login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signinup;
